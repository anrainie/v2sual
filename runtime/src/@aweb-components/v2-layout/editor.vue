<template>
  <div class="commonSet-content v2-custom-el">
      <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>定位:</span>
        </el-col>
        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defPositionStyle" class="custom-el-radio-group">
            <el-radio
              :label="true"
              @change="restore(['top','right','left','bottom'],true)"
            >默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <div class="custom-def-padding" v-show="!eModel.def.defPositionStyle">
        <div class="custom-def-padding-style"></div>
        <div class="custom-def-padding-item padding-top">
          <span>上</span>
          <input type="text" v-model="eModel.customStyle['top']">
        </div>
        <div class="custom-def-padding-item padding-bottom">
          <span>下</span>
          <input type="text" v-model="eModel.customStyle['bottom']">
        </div>
        <div class="custom-def-padding-item padding-left">
          <span>左</span>
          <input type="text" v-model="eModel.customStyle['left']">
        </div>
        <div class="custom-def-padding-item padding-right">
          <span>右</span>
          <input type="text" v-model="eModel.customStyle['right']">
        </div>
      </div>
    </div>

    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>不透明度&nbsp;:</span>
        </el-col>

        <el-col :span="13">
          <el-slider v-model="opacity" :max="100" :min="5"></el-slider>
        </el-col>

        <el-col :span="4">
          <el-input class="custom-el-input" v-model="opacity"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span class>圆角:</span>
        </el-col>

        <el-col :span="13">
          <el-slider v-model="radius" :max="100" :min="0"></el-slider>
        </el-col>

        <el-col :span="4">
          <el-input class="custom-el-input" v-model="radius"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>宽度:</span>
        </el-col>

        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defwidth" class="custom-el-radio-group">
            <el-radio :label="true" @change="restore(['width'])">默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>

        <el-col :span="4">
          <el-input
            v-show="!eModel.def.defwidth"
            class="custom-el-input"
            v-model="eModel.customStyle['width']"
          ></el-input>
        </el-col>
      </el-row>
    </div>
  <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>高度:</span>
        </el-col>

        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defheight" class="custom-el-radio-group">
            <el-radio :label="true" @change="restore(['height'])">默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>

        <el-col :span="4">
          <el-input
            v-show="!eModel.def.defheight"
            class="custom-el-input"
            v-model="eModel.customStyle['height']"
          ></el-input>
        </el-col>
      </el-row>
    </div>
    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>边框:</span>
        </el-col>
        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defborder" class="custom-el-radio-group">
            <el-radio
              :label="true"
              @change="restore(['border-color','border-width','border-style'],true)"
            >默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <div v-show="!eModel.def.defborder" class="custom-border-ctn">
        <div class="custom-border-top">
          <div class="custom-border-colorpicker-ctn">
            <color-picker
              transfer
              recommend
              size="small"
              v-model="eModel.customStyle['border-color']"
            ></color-picker>
            <i class="el-icon-caret-bottom"></i>
          </div>

          <input type="text" v-model="eModel.customStyle['border-color']" class="border-color">

          <div class="border-width-box">
            <span>宽度</span>
            <input type="text" v-model="eModel.customStyle['border-width']">
          </div>
        </div>
        <div class="custom-border-bottom">
          <el-row :gutter="5">
            <el-col :span="12">
              <div class="custom-border-style">
                <p>样式</p>
                <div
                  class="border-style-item"
                  :class="{'active':('solid'==eModel.customStyle['border-style'])}"
                  @click="selectBorderStyle('solid')"
                >
                  <div class="border-line solid"></div>
                </div>

                <div
                  class="border-style-item"
                  :class="{'active':('dotted'==eModel.customStyle['border-style'])}"
                  @click="selectBorderStyle('dotted')"
                >
                  <div class="border-line dotted"></div>
                </div>
                <div
                  class="border-style-item"
                  :class="{'active':('dashed'==eModel.customStyle['border-style'])}"
                  @click="selectBorderStyle('dashed')"
                >
                  <div class="border-line dashed"></div>
                </div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="custom-border-display">
                <p>可见/隐藏</p>
                <div class="custom-border-display-box">
                  <div
                    class="border-left"
                    @click="borderClick('left')"
                    :class="{'active':HborderList.includes('left')}"
                  ></div>
                  <div
                    class="border-right"
                    @click="borderClick('right')"
                    :class="{'active':HborderList.includes('right')}"
                  ></div>
                  <div
                    class="border-top"
                    @click="borderClick('top')"
                    :class="{'active':VborderList.includes('top')}"
                  ></div>
                  <div
                    class="border-bottom"
                    @click="borderClick('bottom')"
                    :class="{'active':VborderList.includes('bottom')}"
                  ></div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>

    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>内边距:</span>
        </el-col>
        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defpaddingStyle" class="custom-el-radio-group">
            <el-radio
              :label="true"
              @change="restore(['border-color','border-width','border-style'],true)"
            >默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <div class="custom-def-padding" v-show="!eModel.def.defpaddingStyle">
        <div class="custom-def-padding-style"></div>
        <div class="custom-def-padding-item padding-top">
          <span>上</span>
          <input type="text" v-model="eModel.customStyle['padding-top']">
        </div>
        <div class="custom-def-padding-item padding-bottom">
          <span>下</span>
          <input type="text" v-model="eModel.customStyle['padding-bottom']">
        </div>
        <div class="custom-def-padding-item padding-left">
          <span>左</span>
          <input type="text" v-model="eModel.customStyle['padding-left']">
        </div>
        <div class="custom-def-padding-item padding-right">
          <span>右</span>
          <input type="text" v-model="eModel.customStyle['padding-right']">
        </div>
      </div>
    </div>

    <div class="item-box">
      <el-row>
        <el-col :span="6" class="slider-text-item">
          <span>背景:</span>
        </el-col>
        <el-col :span="13">
          <el-radio-group v-model="eModel.def.defbackgroundStyle" class="custom-el-radio-group">
            <el-radio :label="true" @change="restore(['background-color','background-image'])">默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
          </el-radio-group>
        </el-col>
      </el-row>

      <div class="custom-def-bg" v-show="!eModel.def.defbackgroundStyle">
        <div class="custom-bg-colorpicker-ctn">
          <color-picker
            transfer
            recommend
            size="small"
            v-model="eModel.customStyle['background-color']"
            alpha
          ></color-picker>
          <i class="el-icon-caret-bottom"></i>
        </div>

        <input type="text" v-model="eModel.customStyle['background-color']">
      </div>
    </div>

 <div class=" item-box background-item mar-bot">
      <span class="subtitle displayI">背景</span>
      <el-radio-group v-model="eModel.def.defbackgroundStyle">
        <el-radio :label="true" @change="restore(['background-color','background-image'])">默认</el-radio>
        <el-radio :label="false">自定义</el-radio>
      </el-radio-group>

      
    </div>


    <div class="background-self-item mar-bot" v-show="!eModel.def.defbackgroundStyle">


      <div>
        <div class="color-item mar-bot">
          <span class="subtitle displayI"></span>
          <span class="self-subtitle">颜色&nbsp;:</span>
          <color-picker
            transfer
            recommend
            size="small"
            v-model="eModel.customStyle['background-color']"
            alpha
          ></color-picker>
        <!-- <el-color-picker v-model="eModel.customStyle['background-color']"></el-color-picker> -->
        <span class="well-number displayI">#</span> 
          <input
                  type="text"
                  v-model="eModel.customStyle['background-color']"
                  class="time-number input-set"
          >
  

   </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "v2-layout-editor",

  props: {
    eModel: {}
  },
  data() {
    return {
      HborderList: [],
      VborderList: []
    };
  },
  watch: {
    HborderList(list) {
      if (list.length === 1) {
        if (list[0] === "left") {
          this.eModel.customStyle = {
            ...this.eModel.customStyle,
            "border-right-width": this.eModel.customStyle["border-width"],
            "border-left-width": "0"
          };
        } else {
          this.eModel.customStyle = {
            ...this.eModel.customStyle,
            "border-right-width": "0",
            "border-left-width": this.eModel.customStyle["border-width"]
          };
        }
      } else if (list.length === 0) {
        this.eModel.customStyle = {
          ...this.eModel.customStyle,
          "border-right-width": this.eModel.customStyle["border-width"],
          "border-left-width": this.eModel.customStyle["border-width"]
        };
      } else {
        this.eModel.customStyle = {
          ...this.eModel.customStyle,
          "border-right-width": "0",
          "border-left-width": "0"
        };
      }
      this.$forceUpdate();
    },
    VborderList(list) {
      if (list.length === 1) {
        if (list[0] === "top") {
          this.eModel.customStyle = {
            ...this.eModel.customStyle,
            "border-bottom-width": this.eModel.customStyle["border-width"],
            "border-top-width": "0"
          };
        } else {
          this.eModel.customStyle = {
            ...this.eModel.customStyle,
            "border-bottom-width": "0",
            "border-top": this.eModel.customStyle["border-width"]
          };
        }
      } else if (list.length === 0) {
        this.eModel.customStyle = {
          ...this.eModel.customStyle,
          "border-bottom-width": this.eModel.customStyle["border-width"],
          "border-top-width": this.eModel.customStyle["border-width"]
        };
      } else {
        this.eModel.customStyle = {
          ...this.eModel.customStyle,
          "border-bottom-width": "0",
          "border-top-width": "0"
        };
      }
      this.$forceUpdate();
    },
    //这句也别删除
    "eModel.customStyle": {
      immediate: true,
      deep: true,
      handler() {
        this.$forceUpdate();
      }
    }
  },
  methods: {
    borderClick(pos) {
      if (pos === "left" || pos === "right") {
        let index = this.HborderList.indexOf(pos);
        if (index !== -1) {
          this.HborderList.splice(index, 1);
        } else {
          this.HborderList.push(pos);
        }
      } else if (pos === "top" || pos === "bottom") {
        let index = this.VborderList.indexOf(pos);
        if (index !== -1) {
          this.VborderList.splice(index, 1);
        } else {
          this.VborderList.push(pos);
        }
      }
    },
    colorChanged: function colorChanged(v, model, key) {
      this.$forceUpdate();
    },
    restore: function resume(keys, isBorder) {
      var _this = this;

      keys.forEach(k => {
        _this.eModel.customStyle[k] = _this.eModel.defaultValue[k];
      });
      if (isBorder) {
        this.eModel.customStyle["border-left"] = "";
        this.eModel.customStyle["border-top"] = "";
        this.eModel.customStyle["border-bottom"] = "";
        this.eModel.customStyle["border-right"] = "";
      }
      this.$forceUpdate();
    },
    selectBorderStyle: function(type) {
      // this.eModel.customStyle['border-style']=type;
      // this.$forceUpdate();

      this.$set(this.eModel.customStyle, "border-style", type);
    },
    clearImage: function clearImage() {
      // this.model['background-image'] = null;
    },
    selectImage: function selectImage() {
      // var self = this;
      // loader.loadImageDialog({
      //     model: {},
      //     callback: function callback(model) {
      //         self.model['background-image'] = 'url(' + model.src + ')';
      //         self.$forceUpdate();
      //     },
      //     selectChanged: function selectChanged(selected, item, index) {},
      //     multiselect: false
      // });
    }
  },
  computed: {
    opacity: {
      get: function get() {
        return Math.round((this.eModel.customStyle.opacity || 1) * 100);
      },
      set: function set(v) {
        // this.eModel.customStyle.opacity = v / 100;
        this.$set(this.eModel.customStyle, "opacity", v / 100);
        this.$forceUpdate();
      }
    },
    radius: {
      get: function get() {
        var ra = this.eModel.customStyle["border-radius"] || "0px";
        ra = ra.substr(0, ra.lastIndexOf("px"));
        return parseInt(ra);
      },
      set: function set(v) {
        // this.eModel.customStyle['border-radius'] = v + 'px';
        this.$set(this.eModel.customStyle, "border-radius", v + "px");
        this.$forceUpdate();
      }
    }
  }
};
</script>
<style lang="less">
/* 公共样式弹框的css */
@color: #04bebd;

.commonSet-content {
  font-size: 12px;
  color: #4d4d4d;
  padding: 0 10px;
  box-sizing: border-box;
  .item-box {
    border-bottom: 1px solid #eeeeee;
    padding: 4px 0;
    .slider-text-item {
      height: 38px;
      line-height: 38px;
    }
  }
  .custom-el-input {
    margin: 6px 0 0 10px;
  }
  .custom-el-radio-group {
    margin-top: 10px;
  }
  .el-input__inner {
    height: 24px;
    line-height: 24px;
    padding: 0 6px;
  }
  .el-radio__input.is-checked + .el-radio__label {
    color: #333333;
  }

  .ivu-input-wrapper-small .ivu-input-icon {
    width: 24px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }

  // .dialog-nav {
  //   height: 42px;
  //   line-height: 42px;
  //   border-bottom: 1px solid #e6e6e6;
  //   .nv2-item {
  //     float: left;
  //     cursor: pointer;
  //     height: 42px;
  //     line-height: 42px;
  //     width: 72px;
  //     text-align: center;
  //     border-right: 1px solid #e6e6e6;
  //     &.active {
  //       background-color: #fff;
  //     }
  //   }
  // }
  .scroll-bar,
  .el-tabs__content {
    position: relative;
  }
  .scroll-bar::-webkit-scrollbar,
  .el-tabs__content::-webkit-scrollbar {
    position: absolute;
    right: 0;
    top: 0;
    width: 6px;
    height: 16px;
    padding-left: 20px;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .scroll-bar::-webkit-scrollbar-track,
  .el-tabs__content::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
    border-radius: 10px;
    background-color: transparent;
  }
  /*定义滑块 内阴影+圆角*/
  .scroll-bar::-webkit-scrollbar-thumb,
  .el-tabs__content::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgba(218, 219, 230, 0.6);
  }
  /* element-ui tabs com */
  .el-tabs__header {
    margin: 0;
  }
  .el-tabs__content {
    height: 585px;
    overflow-y: auto;
    padding: 20px 10px 0 20px;
  }

  .ivu-input {
    height: 24px;
  }
  .ivu-input-icon-normal + .ivu-input {
    padding: 0 16px 0 10px;
  }

  .ivu-color-picker-small .ivu-color-picker-color {
    width: 16px;
    height: 16px;
    top: 4px;
  }
  //边框类型
  .custom-border-ctn {
    padding-left: 68px;
    box-sizing: border-box;
    .custom-border-colorpicker-ctn {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;

      i {
        position: absolute;
        right: 2px;
        top: 4px;
      }
    }

    .border-color {
      width: 76px;
      height: 26px;
      background-color: #ffffff;
      border-radius: 4px;
      border: solid 1px #dddddd;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 6px;
      margin: 0 5px;
      vertical-align: middle;
    }
    .border-width-box {
      display: inline-block;
      vertical-align: middle;

      border-radius: 4px;
      border: solid 1px #dddddd;
      height: 26px;
      line-height: 26px;
      overflow: hidden;
      > span {
        padding: 0 6px;
        display: inline-block;
        vertical-align: top;
        background-color: #f2f2f2;
        border-right: 1px solid #dddddd;
      }
      > input {
        width: 46px;

        display: inline-block;
        vertical-align: top;
        height: 26px;
        line-height: 26px;
        box-sizing: border-box;
        padding: 0 6px;
        box-sizing: border-box;
      }
    }

    .custom-border-bottom {
      margin: 15px 0;

      p {
        height: 24px;
        line-height: 24px;
        text-align: center;
        background-color: #f2f2f2;
        border-bottom: solid 1px #dddddd;
      }
      .custom-border-style {
        height: 125px;

        border-radius: 4px;
        border: solid 1px #dddddd;

        .border-style-item {
          width: 100%;
          height: 24px;

          border-bottom: solid 1px #dddddd;
          box-sizing: border-box;
          padding-top: 12px;
          line-height: 24px;
          cursor: pointer;
          &.active {
            background-color: #daf5f5;
          }
          .border-line {
            width: 80%;
            height: 1px;
            border: solid 1px #666666;
            margin: 0 auto;

            &.dotted {
              border-style: dotted;
            }
            &.dashed {
              border-style: dashed;
            }
            &.solid {
              border-style: solid;
            }
          }
        }
      }

      .custom-border-display {
        height: 125px;

        border-radius: 4px;
        border: solid 1px #dddddd;
        .custom-border-display-box {
          width: 66px;
          height: 66px;
          background-color: #f2f2f2;
          margin: 16px auto 0;
          position: relative;
          border: 2px solid transparent;
    

          > div {
            position: absolute;
            width: 14px;
            height: 43px;
            background-color: #ffffff;
            border: solid 1px #dddddd;
            cursor: pointer;

            &::after {
              position: absolute;
              content: "";
              background-color: #666;
            }

            &.border-left {
              top: 10px;
              left: -8px;
              &.active {
                &::after {
                  top: -13px;
                  left: 5px;
                  width: 2px;
                  height: 66px;
                }
              }
            }
            &.border-right {
              top: 10px;
              right: -8px;
              &.active {
                &::after {
                  top: -13px;
                  right: 5px;
                  width: 2px;
                  height: 66px;
                }
              }
            }
            &.border-top {
              width: 43px;
              height: 14px;
              top: -8px;
              left: 12px;
                 &.active {
                &::after {
                  top: 5px;
                  right:-10px;
                  width: 66px;
                  height: 2px;
                }
              }
            }
            &.border-bottom {
              width: 43px;
              height: 14px;
              bottom: -8px;
              left: 12px;
                   &.active {
                &::after {
                  bottom: 5px;
                  right:-10px;
                  width: 66px;
                  height: 2px;
                }
            }
            }
            &.active {
              background-color: #c6eceb;
              border-color: #04bebd;
            }
          }
        }
      }
    }
  }
  //内边距
  .custom-def-padding {
    width: 100%;
    height: 125px;
    padding-left: 25px;
    padding-top: 36px;
    box-sizing: border-box;
    position: relative;

    margin: 15px 0;
    .custom-def-padding-style {
      width: 96px;
      height: 52px;
      background-color: #daf5f5;
      border: dashed 1px #04bebd;
      margin: 0 auto;
      &::after {
        content: "容器";
        display: block;
        text-align: center;
        line-height: 22px;
        margin: 15px auto 0;
        width: 60px;
        height: 22px;
        background-color: #ffffff;
        border: solid 1px #dddddd;
      }
    }

    .custom-def-padding-item {
      width: 70px;
      height: 26px;
      line-height: 26px;
      border-radius: 4px;
      border: solid 1px #dddddd;
      position: absolute;
      overflow: hidden;
      &.padding-left {
        left: 25px;
        transform: translateY(-100%);
        margin-top: -13px;
      }
      &.padding-right {
        right: 0;
        transform: translateY(-100%);
        margin-top: -13px;
      }
      &.padding-top {
        top: 0;
        transform: translateX(100%);
        margin-left: 35px;
      }
      &.padding-bottom {
        bottom: 0;
        margin-left: 35px;
        transform: translateX(100%);
      }
      > span {
        padding: 0 6px;
        display: inline-block;
        vertical-align: top;
        background-color: #f2f2f2;
        border-right: 1px solid #dddddd;
      }
      > input {
        width: 40px;
        display: inline-block;
        vertical-align: top;
        height: 26px;
        line-height: 26px;
        padding: 0 6px;
        box-sizing: border-box;
      }
    }
  }

  .custom-def-bg {
    padding-left: 70px;
    margin: 10px 0;
    .custom-bg-colorpicker-ctn {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
      > i {
        position: absolute;
        right: 2px;
        top: 4px;
      }
    }
    > input {
      width: 76px;
      height: 26px;
      background-color: #ffffff;
      border-radius: 4px;
      border: solid 1px #dddddd;
      display: inline-block;
      box-sizing: border-box;
      padding: 0 6px;
      margin: 0 8px;
      vertical-align: middle;
    }
  }
}
</style>
