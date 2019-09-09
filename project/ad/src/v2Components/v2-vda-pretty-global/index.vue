<template>
  <div ref="global"
       class="global-resolution-ratio">
  </div>
</template>

<script>
  import $ from 'jquery'
  import echarts from "echarts";
  import "echarts-gl"
  import MapOptions from './map-default-options.json'
  import GlobalOptions from './global-default-options.json'
  // const earthBg = require('./earth.jpg');

  // GlobalOptions.globe.baseTexture = earthBg;

  const defaultSeriesName = 'bar' // 对应bar3D.name
  const defaultMapName = 'world'

  const geoJsonUrlOfWorld = "https://raw.githubusercontent.com/apache/incubator-echarts/master/map/json/world.json"
  const geoJsonUrlOfChina = "https://raw.githubusercontent.com/apache/incubator-echarts/master/map/json/china.json"


  /**
   * 将地图数据注册到echarts中
   * @return {Promise} 忽略注册失败的情况
   */
  const registerMap = ()=> {
    if (echarts.getMap(defaultMapName)) {
      return Promise.resolve()
    }

    function fetchMapJson(url) {
      return new Promise(resolve => $.getJSON(url, resolve))
    }

    function mergeMapJson(all, item, exclude) {
      let itemFeatures = item.features.map(({geometry, properties}) => ({geometry, properties}))

      all.features = all.features.filter(feature => feature.properties.name.toLowerCase() !== exclude)
      Reflect.apply(Array.prototype.push, all.features, itemFeatures)
      return all
    }


    let tasks = Array.of(
      fetchMapJson(geoJsonUrlOfWorld),
      fetchMapJson(geoJsonUrlOfChina)
    )

    return Promise.all(tasks)
      .then(([world, china]) => echarts.registerMap(defaultMapName, mergeMapJson(world, china, 'china')))
      .catch(() => console.error("Failed to load map json, please check net"))
  };

  const  makeMapEchart = (echartSize)=> {
      return  makeEchart(MapOptions, echartSize, document.createElement('canvas'))
    }

  const  makeEchart = (chartOptions, canvasOptions, element)=> {
      let chart = echarts.init(element, null, canvasOptions)
      chart.setOption(chartOptions)
      return chart
   };
     /**
   * 将地图作为地球表面层
   * @param mapInstance 地图echart
   * @param globalInstance 地球echart
   */
   const applyMapLayer = (mapInstance, globalInstance)=> {
    globalInstance.setOption({
      globe: {
        layers: [
          {
            type: 'blend',
            texture: mapInstance,
            shading: 'lambert',
            distance: 0
          }
        ]
      }
    })
  };

  export default {
    name: "v2-vda-pretty-global",

    data() {

      

      return {
        viewControl: GlobalOptions.globe.viewControl,
        globalChart:""
      }
    },

    watch: {
     optionData(value) {
       console.log('echartIns',value,this.globalChart)
        this.applyDataForSeries(defaultSeriesName, value, this.globalChart)
      },

      viewControl: {
        deep: true,
        handler (value) {
          debugger;
          this.applyViewControl(value, this.globalChart)
        }
      },
      "model.alpha"(val){
        this.viewControl.alpha = val;
      },
      "model.beta"(val){
        this.viewControl.beta = val;
      }
    },

    computed: {
      // like [[ 119.15, 33.5, 1 ], [ 119.9, 32.49, 2 ], [ 108.33, 22.84, 3]]
      // 前两项表示坐标经纬度，最后一项为数值，也可添加多项数据
      optionData() {
        return this.model.optionData || [[ 119.15, 33.5, 1 ], [ 119.9, 32.49, 2 ], [ 108.33, 22.84, 3],[0,0,0]]
      }
    },

    beforeCreate() {
      const afterRegistered = registerMap()

      // vueInstance.mounted and registered
      this.$once('mount-echart', () => {
        afterRegistered.then(() => {
          this.globalChart.hideLoading()

          // 创建世界地图
          const mapChartSize = {width: 3840, height: 2160}
          const mapEchart = makeMapEchart(mapChartSize)

           applyMapLayer(mapEchart, this.globalChart)
        })
      })
    },

    mounted() {

      this.globalChart = this.makeGlobalEchart({width: 1920, height: 1080}, this.$refs.global);
        
      this.$emit('mount-echart');
      

    },

    methods:{
      /**
       * 拉近观看地球距离,投影模式${globe.viewControl.projection: 'perspective'}下无法穿过地球内部
       * @param delta 视角接近地球的距离
       */
      zoomIn(delta = 10) {
        this.viewControl.distance -= delta
      },

      /**
       * @see zoomIn
       * @param delta 视角远离地球的距离
       */
      zoomOut(delta = 10) {
        this.viewControl.distance += delta
      },

      /**
       * 地球向左自转
       * @param angle 旋转角度
       */
      rotateLeft(angle) {
        this.viewControl.targetCoord[1] += angle
      },

      /**
       * @see rotateLeft
       */
      rotateRight(angle) {
        this.viewControl.targetCoord[1] -= angle
      },

      /**
       * @see rotateLeft
       */
      rotateTop(angle) {
        this.viewControl.targetCoord[0] += angle
      },

      /**
       * @see rotateLeft
       */
      rotateBottom(angle) {
        this.viewControl.targetCoord[0] -= angle
      },

      /**
       * 改变地球旋转中心位置，默认为[0, 0, 0]
       */
      center(x, y, z) {
        if (this.checkNumber(x, y, z)) {
          this.viewControl.center = Array.of(x, y, z)
        } else {
          console.warn(`Failed to move the center: [ ${x}, ${y}, ${z} ]`)
        }
      },

      /**
       * 地球将输入坐标的位置旋转到视角正前方中心
       * @param lng 经读
       * @param lat 纬度
       */
      targetCoord(lng, lat) {
        if (this.checkNumber(lng, lat)) {
          this.viewControl.targetCoord = Array.of(lng, lat)
        } else {
          console.warn(`Failed to target the coordinate: [ ${lng}, ${lat} ]`)
        }
      },

  checkNumber() {
    for (let i = 0; i < arguments.length; i++) {
      if (Number.isNaN(arguments[i])) {
        return false
      }
    }
    return true
  },


  makeGlobalEchart(echartSize, element) {
    let globalChart = makeEchart(GlobalOptions, echartSize,element)

    this.applyDataForSeries(defaultSeriesName, this.optionData, globalChart)
    globalChart.showLoading()

    return globalChart
  },

  applyDataForSeries(name, data, echartInstance) {
    echartInstance.setOption({
      series: Array.of({ data, name })
    })
  },
   applyViewControl(data, echartInstance) {
    echartInstance.setOption({
      globe: {
        viewControl: data
      }
    })
  }




    }
  }
</script>

<style scoped>

  .global-resolution-ratio {
    height: 1080px;
    width: 1920px;
  }

</style>
