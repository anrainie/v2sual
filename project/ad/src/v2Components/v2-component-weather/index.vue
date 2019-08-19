<template>
  <div :class="widgetClass" :style="model.commonStyle">
    <div class="weather" :height="getHeight" :width="getWidth">
      <div class="city" style="display: inline-block;margin: 5px 10px;text-align: left;">
        <img :src="getLocationIcon()" class="addressIcon" style="width: 10px;" />
        <span v-text="weather.location" style="color:#84848c"></span>
      </div>
      <div class="weather-detail" style="text-align: left;">
        <div class="tmp">
          <span v-text="weather.tmp" style="display: inline-block;margin-left:10px;font-weight: 700;font-size: 50px;color:#1b1c1c;"></span>
          <img :src="getCondSrc" style="float:right;width:50px;height:50px;margin-right: 10px;vertical-align:middle" />
          <span style="display: inline-block;vertical-align: top">
            <p style="font-size: 30px;color:#1b1c1c;font-weight:600;margin:5px 0 0 0">°</p>
            <p style="color:#1b1c1c;margin-top: -5px" v-text="weather.condTxt"></p>
          </span>
        </div>
        <div class="hum" style="display: inline-block;margin: 5px 10px;text-align: left;vertical-align: bottom">
          <img :src="getDampnessIcon()" class="humIcon" style="width:15px;height:15px;vertical-align:middle" />
          <span style="color:#84848c">湿度 </span>
          <span v-text="weather.hum" style="color:#84848c;font-size: 16px"></span>
        </div>
        <div class="wind" style="display: inline-block;margin: 5px 10px;text-align: left;float:right;">
          <img :src="getWindIcon()" class="windIcon" style="width:15px;height:15px;vertical-align:middle" />
          <span style="color:#84848c;font-size:16px;" v-text="weather.windDir " ></span>
          <span v-text=" weather.windSc" style="color:#84848c;font-size: 16px"></span>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
  </div>
</template>
<script>
    import {getWeatherInfo} from '../../api/api';
    import {chineseToPinYin} from '../../lib/util/helper';
    export default {
        name: "v2-component-weather",
        data() {
            return {
                currentEnv: '',
                weather: {
                    location: '', //当前实况天气城市
                    tmp: '', //温度
                    condCode: '', //天气编码
                    condTxt: '', //天气实况
                    windDir: '', //风向
                    windSc: '', //风力
                    hum: '', //湿度
                    updateTime: '', //最近更新时间
                    pcpn: 0 //降水量
                },
                request: {
                    mode: "now",
                    url: "https://free-api.heweather.net/s6/weather",
                    params: {
                        key: "0a2ce06babb146749ebcdbc0f5b4ef3c",
                        location: "113.355747,23.127191"
                    }
                },
                timer: null
            };
        },
        created() {
            if(this.$ArrowDown && this.$ArrowLeft && this.$Tab) {
                this.currentEnv = 'runtime';
            } else {
                this.currentEnv = 'edit';
            }

            if(this.model.cityName.trim() != '') {
                this.request.params.location = chineseToPinYin(this.model.cityName);
            } else {
                //this.resetLocation();
            }

            this.refreshWeatherAttr()
                .registerTimer();
        },
        computed: {
            getCondSrc() {
                if(this.currentEnv == 'edit') {
                    return `v1/public/img/weather/${this.weather.condCode}.png`;
                } else {
                    return `img/weather/${this.weather.condCode}.png`;
                }
            },
            getHeight() {
                return this.model.style.height || 150;
            },
            getWidth() {
                return this.model.style.width || 220;
            },
            cityName() {
                return this.model.cityName;
            }
        },
        methods: {
            getLocationIcon() {
                if(this.currentEnv == 'edit') {
                    return 'v1/public/img/weather/location-icon.png';
                } else {
                    return 'img/weather/location-icon.png';
                }
            },
            getDampnessIcon() {
                if(this.currentEnv == 'edit') {
                    return 'v1/public/img/weather/dampness.svg';
                } else {
                    return 'img/weather/dampness.svg';
                }
            },
            getWindIcon() {
                if(this.currentEnv == 'edit') {
                    return 'v1/public/img/weather/wind.svg';
                } else {
                    return 'img/weather/wind.svg';
                }
            },
            setLocation(position) {
                this.request.params.location = `${position.coords.longitude},${position.coords.latitude}`;
            },
            setWeatherAttr(weatherInfo) {
                this.weather.updateTime = weatherInfo.update.utc;
                this.weather.location = weatherInfo.basic.parent_city;
                this.weather.tmp = weatherInfo.now.tmp;
                this.weather.condCode = weatherInfo.now.cond_code;
                this.weather.condTxt = weatherInfo.now.cond_txt;
                this.weather.hum = `${weatherInfo.now.hum}%`;
                this.weather.windDir = weatherInfo.now.wind_dir;
                this.weather.windSc = ` ${weatherInfo.now.wind_sc}级`;
                this.weather.pcpn = weatherInfo.now.pcpn;

                return this;
            },
            resetLocation() {
                if(navigator.geolocation) {
                    //TODO:定位有问题,待处理
                    navigator.geolocation.getCurrentPosition(this.setLocation);
                } else {
                    throw new Error('Geolocation is not supported by this browser');
                }

                return this;
            },
            refreshWeatherAttr() {
                const that = this;

                getWeatherInfo(this.request.url, this.request.mode, this.request.params).then(function(response) {
                    let weatherInfo = '';
                    if(that.currentEnv == 'edit') {
                        weatherInfo = response.data.HeWeather6[0];
                    } else {
                        weatherInfo = response.HeWeather6[0];
                    }

                    that.setWeatherAttr(weatherInfo);
                });

                return this;
            },
            registerTimer() {
                const time = 1000 * 3600;

                this.timer = setInterval(this.refreshWeatherAttr, time);
            }
        },
        beforeDestroy() {
          clearInterval(this.timer);
        },
        watch: {
            cityName(newVal, oldVal) {
                if(newVal != oldVal) {
                    this.request.params.location = chineseToPinYin(newVal);
                    this.refreshWeatherAttr();
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
  img {
    vertical-align: middle;
  }

  .city .hum .wind {
    display: inline-block;
    margin: 5px 10px;
    text-align: left;
  }

  .city span {
    margin-left: 5px;
  }

  .addressIcon .humIcon .windIcon {
    width: 10px;
  }

  .weather-detail {
    text-align: left;
  }
</style>
