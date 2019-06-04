<template>
  <div class="commonSet-content v2-custom-el">
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
                <div
                  class="custom-border-display-box"
                  :class="[`${VborderList.join(' ')}  ${HborderList.join(' ')}`]"
                >
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

    <!-- <div class="background-item mar-bot">
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
    <!-- <el-color-picker v-model="eModel.customStyle['background-color']"></el-color-picker>-->
    <!-- <span class="well-number displayI">#</span> -->
    <!-- <input
            type="text"
            v-model="eModel.customStyle['background-color']"
            class="time-number input-set"
    >-->
    <!-- </div> -->
    <!-- <div class="pic-item">
              <span class="subtitle displayI"></span>
              <span class="self-subtitle pic-text">图片&nbsp;:</span>
              <div @click="selectImage" class="pic-add-box pointer" :style="{'background-image':eModel.customStyle['background-image']}">
                  <p class="add-symbol " style="font-size:40px;text-align:center;line-height:46px">+</p>
                  <p class="add-text " style="font-size:14px;text-align:center;">添加图片</p>
              </div>
              <el-row v-if="eModel.customStyle['background-image']" style="height:40px;">
                  <el-button style="margin-top:5px;right:60px;position: absolute;" size="mini" type="danger" @click="clearImage">清空</el-button>
              </el-row>
    </div>-->
    <!-- </div>
    </div>-->
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
          border: 2px solid #ccc;
          &.left {
            border-left-color: #666666;
          }
          &.right {
            border-right-color: #666666;
          }
          &.top {
            border-top-color: #666666;
          }
          &.bottom {
            border-bottom-color: #666666;
          }

          > div {
            position: absolute;
            width: 14px;
            height: 43px;
            background-color: #ffffff;
            border: solid 1px #dddddd;
            cursor: pointer;
            &.border-left {
              top: 10px;
              left: -8px;
            }
            &.border-right {
              top: 10px;
              right: -8px;
            }
            &.border-top {
              width: 43px;
              height: 14px;
              top: -8px;
              left: 12px;
            }
            &.border-bottom {
              width: 43px;
              height: 14px;
              bottom: -8px;
              left: 12px;
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
    padding-left:70px;
    margin: 10px 0;
    .custom-bg-colorpicker-ctn {
      display: inline-block;
      vertical-align: middle;
      border: 1px solid #ddd;
      border-radius: 4px;
      overflow: hidden;
      position: relative;
      box-sizing: border-box;
        >i{
        
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
  // .com-set-item {
  //   padding-bottom: 40px;
  // }
  /* 容器 */
  // .com-set-container {
  //   height: 690px;
  //   overflow: auto;
  //   padding: 30px;
  //   padding-bottom: 61px;
  // }

  /* 样式颜色 */
  // .style-choose {
  //   padding-left: 30px;
  //   .color {
  //     .lis {
  //       width: 28px;
  //       height: 28px;
  //       float: left;
  //       margin-right: 10px;
  //       border-radius: 50%;
  //       background-color: #ffffff;
  //       cursor: pointer;
  //       position: relative;
  //       margin-top: 5px;
  //       margin-bottom: 5px;
  //       &.red:hover {
  //         background-color: #ff9500;
  //       }
  //       /* 选中状态 */
  //       &.active.red {
  //         background-color: #ff9500;
  //       }
  //       &.orange:hover {
  //         background-color: #ff9500;
  //       }
  //       &.active.orange {
  //         background-color: #ff9500;
  //       }
  //       &.yellow:hover {
  //         background-color: #ffcc00;
  //       }
  //       &.active.yellow {
  //         background-color: #ffcc00;
  //       }
  //       &.green:hover {
  //         background-color: #4cd964;
  //       }
  //       &.active.green {
  //         background-color: #4cd964;
  //       }
  //       &.blue:hover {
  //         background-color: #007aff;
  //       }
  //       &.active.blue {
  //         background-color: #007aff;
  //       }
  //       &:hover {
  //         .liInner {
  //           border: 2px solid #ffffff;
  //         }
  //       }
  //       &.active {
  //         .liInner {
  //           border: 2px solid #ffffff;
  //         }
  //       }
  //     }
  //     .liInner {
  //       width: 26px;
  //       height: 26px;
  //       border-radius: 50%;
  //       position: absolute;
  //       top: 50%;
  //       left: 50%;
  //       margin-left: -13px;
  //       margin-top: -13px;
  //       &.red {
  //         background-color: #ff3b30;
  //       }
  //       &.orange {
  //         background-color: #ff9500;
  //       }
  //       &.yellow {
  //         background-color: #ffcc00;
  //       }
  //       &.green {
  //         background-color: #4cd964;
  //       }
  //       &.blue {
  //         background-color: #007aff;
  //       }
  //     }
  //   }
  //   .style-item {
  //     height: 130px;
  //     line-height: 130px;
  //     width: 260px;
  //     text-align: center;
  //     font-size: 14px;
  //   }
  //   .last {
  //     line-height: 1;
  //   }
  //   .bar-box {
  //     margin: 44px 0 0 94px;
  //     border-left: 4px solid #5ca6e2;
  //   }
  //   .titleBar-text {
  //     color: #5ca6e2;
  //     height: 20px;
  //   }
  //   .second-titleBar-text {
  //     color: #b8bfcc;
  //     height: 12px;
  //   }
  //   .p-ele {
  //     text-align: left;
  //     padding-left: 10px;
  //   }
  //   .titleBar-text {
  //     margin-bottom: 10px;
  //   }
  //   .bottom-text {
  //     width: 100%;
  //     height: 30px;
  //     line-height: 30px;
  //     margin: 10px 0 4px 0;
  //     &:hover {
  //       background-color: #bec0c1;
  //     }
  //   }
  // }

  /* 行内快对齐中间 */
  // .vertical-middle {
  //   vertical-align: middle;
  // }
  // .vertical-b {
  //   vertical-align: bottom;
  // }
  // .vertical-t {
  //   vertical-align: top;
  // }
  // /* 右间距 */
  // .mar-r {
  //   margin-right: 10px;
  // }
  // /* 上间距 */
  // .mar-t {
  //   margin-top: 10px;
  // }
  // .positionR {
  //   position: relative;
  // }
  /* 自定义标题 */
  // .self-subtitle {
  //   display: inline-block;
  //   margin-right: 15px;
  // }
  //单选框包含文字
  // .lable-notLast {
  //   margin-right: 18px;
  // }
  // /* 不透明度和圆角样式 */
  // .item-box {
  //   border-bottom: 1px solid #eeeeee;
  //   padding: 4px 0;

  //   .ui-widget.ui-widget-content {
  //     border: none;
  //   }
  //   .effect-time-text {
  //     color: #4d4d4d;
  //     margin-right: 15px;
  //   }
  //   .time-slide {
  //     display: inline-block;
  //     vertical-align: middle;
  //     width: 100px;
  //     height: 3px;
  //     background-color: #ebeff5;
  //     margin-right: 20px;
  //     .ui-slider-handle {
  //       width: 13px;
  //       height: 13px;
  //       border-radius: 50%;
  //       background-color: #5ca6e2;
  //       border: none;
  //     }
  //   }
  //   .slider-text-item {
  //     height: 38px;
  //     line-height: 38px;
  //   }
  // }
  // .mar-right {
  //   margin-right: 13px;
  // }
  // /* 背景 */
  // .pic-text {
  //   vertical-align: top;
  //   line-height: 70px;
  // }
  // .pic-add-box {
  //   display: inline-block;
  //   width: 140px;
  //   height: 70px;
  //   border: 1px solid #cccccc;
  //   color: #5ca6e2;
  // }
  // .add-symbol {
  //   height: 46px;
  // }
  // /* 取色盒子 */
  // .colpick-box {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 26px;
  //   height: 26px;
  //   background-color: #e6ecf3;
  //   margin-right: 14px;
  //   border-radius: 50%;
  // }
  // /* #号 */
  // .well-number {
  //   margin-right: 14px;
  // }
  // /* 边框 */
  // .border-self-item {
  //   .border-style {
  //     width: 40px;
  //     height: 30px;
  //     padding: 13px 0 0 6px;
  //     border: 1px solid #e6e6e6;
  //   }
  //   /* 可选择显示上下左右边框 */
  //   .show-outer {
  //     width: 140px;
  //     height: 110px;
  //     border: 1px solid #e6e6e6;
  //     padding: 13px 0 0 29px;
  //     .border-box {
  //       width: 80px;
  //       height: 80px;
  //       border: 2px solid #7db8e8;
  //       .border-same {
  //         border: 1px solid #5ca6e2;
  //       }
  //       .level {
  //         width: 14px;
  //         height: 40px;
  //         top: 50%;
  //         transform: translateY(-50%);
  //       }
  //       .l-square {
  //         left: -8px;
  //       }
  //       .r-square {
  //         right: -8px;
  //       }
  //       .vertical {
  //         width: 40px;
  //         height: 14px;
  //         left: 50%;
  //         transform: translateX(-50%);
  //       }
  //       .t-square {
  //         top: -8px;
  //       }
  //       .b-square {
  //         bottom: -8px;
  //       }
  //       .bgc {
  //         background-color: #ccebf8;
  //       }
  //     }
  //   }
  // }
  // /* 标题面板 */
  // .gray-border {
  //   border: 1px solid #cccccc;
  // }
  // .padL10 {
  //   padding-left: 10px;
  // }
  // /* 30px的高度 */
  // .h30p {
  //   height: 30px;
  //   line-height: 30px;
  // }

  // .titleBar {
  //   width: 100%;
  //   /* 标题输入框 */
  //   .title-input {
  //     width: 140px;
  //   }
  // }
  // // 小三角标记
  // .bg-triangle {
  //   position: absolute;
  //   right: 0;
  //   bottom: 0;
  //   width: 30px;
  //   height: 100%;
  //   /* background: url('./img/icon_down_arrow.png') no-repeat center center; */
  //   transition: all 0.3s ease-in-out;
  //   &.trigger {
  //     -webkit-transform: rotate(180deg);
  //     -moz-transform: rotate(180deg);
  //     -o-transform: rotate(180deg);
  //     -ms-transform: rotate(180deg);
  //     transform: ratate(180deg);
  //   }
  // }
  // /* 文字自定义 */
  // .size-select {
  //   color: #666666;
  //   position: relative;
  //   display: inline-block;
  //   outline: 0;
  //   -webkit-user-select: none;
  //   -moz-user-select: none;
  //   -ms-user-select: none;
  //   user-select: none;
  //   cursor: pointer;
  //   border-radius: 2px;
  //   border: 1px solid #e3e2e8;
  //   transition: all 0.2s ease-in-out;
  //   width: 100px;
  // }
  // .select-input {
  //   width: 70px;
  //   height: 100%;
  //   vertical-align: super;
  // }
  // /* 文字样式 */
  // .style-label {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 30px;
  //   text-align: center;
  //   border-radius: 4px;
  //   font-size: 20px;
  //   font-family: blod;
  //   &.active {
  //     border-color: #69bbff;
  //   }
  //   .hidden-radio {
  //     display: none;
  //   }
  // }
  // .blod-label {
  //   font-style: normal;
  //   // background: url('./img/B.png') no-repeat center center;
  // }
  // .italic-label {
  //   font-style: italic;
  //   // background: url('./img/I.png') no-repeat center center;
  // }
  // .oblique-label {
  //   font-style: oblique;
  //   // background: url('./img/U.png') no-repeat center center;
  // }
  // /* 样式面板 */
  // /* 字体下拉框 */
  // .select-dropdown {
  //   position: absolute;
  //   z-index: 2;
  //   top: 28px;
  //   left: 0;
  //   width: 100%;
  //   background-color: #ffffff;
  //   .fonts-list {
  //     width: 100%;
  //     height: 108px;
  //     overflow-x: hidden;
  //     overflow-y: auto;
  //     padding-top: 10px;
  //   }
  //   .dropdown-item {
  //     height: 28px;
  //     line-height: 28px;
  //     margin: 10px;
  //     margin-top: 0;
  //     margin-bottom: 5px;
  //     padding-left: 10px;
  //     &.active {
  //       background-color: #69bbff;
  //       color: #666666;
  //     }
  //     &:hover {
  //       background-color: #69bbff;
  //       color: #ffffff;
  //     }
  //   }
  // }
  // input[type="text"].time-number {
  //   display: inline-block;
  //   vertical-align: middle;
  //   width: 66px;
  //   height: 30px;
  //   color: #4d4d4d;
  //   border: 1px solid #cccccc;
  //   &:focus {
  //     border-color: #5ca6e2;
  //   }
  // }
  // input[type="radio"] {
  //   vertical-align: middle;
  //   cursor: pointer;
  //   margin-right: 8px;
  // }
  // .square-btn-box {
  //   width: 100%;
  //   bottom: 0;
  //   left: 0;
  //   border-top: 1px solid #e6e6e6;
  //   padding: 15px 0 15px 0;
  //   background-color: #ffffff;
  //   .succee-btn {
  //     cursor: pointer;
  //     width: 80px;
  //     height: 30px;
  //     line-height: 30px;
  //     text-align: center;
  //     border: 1px solid #e6e6e6;
  //     border-radius: 10px;
  //     background-color: #ffffff;
  //     color: #5ca6e2;
  //   }
  // }

  // .height-input-outer .el-input-group {
  //   width: 120px;
  //   margin-left: 80px;
  // }
}
</style>
