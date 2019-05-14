<template>
  <div class="commonSet-content">

    <div class="slide-box">
        <el-row>
            <el-col :span="6" class="slider-text-item">
                <span class="subtitle displayI">不透明度&nbsp;:</span>
            </el-col>

            <el-col :span="17">
                <el-slider
                        v-model="opacity"
                        show-input
                        :max="100"
                        :min="5">
                </el-slider>
            </el-col>
        </el-row>
    </div>

    <div class="slide-box">
        <el-row>
            <el-col :span="6" class="slider-text-item">
                <span class="subtitle displayI">圆角&nbsp;:</span>
            </el-col>

            <el-col :span="17">
                <el-slider
                        v-model="radius"
                        show-input
                        :max="100"
                        :min="0">
                </el-slider>
            </el-col>
        </el-row>
    </div>

    <div class="height-item mar-bot">
        <span class="subtitle displayI">高度&nbsp;:</span>
        <el-radio-group v-model="eModel.def.defheight">
            <el-radio :label="true" @change="restore(['height'])">默认</el-radio>
            <el-radio :label="false">自定义</el-radio>
        </el-radio-group>
    </div>
    <div class="hieght-selft-item mar-bot" v-show="!eModel.def.defheight">
        <span class="subtitle displayI"></span>
        <span class="self-subtitle">数值&nbsp;:</span>
        <input type="text" v-model="eModel.customStyle['height']" class="time-number input-set">
    </div>

    <div class="border-item mar-bot colorpick-parents">
        <span class="subtitle displayI">边框&nbsp;:</span>
        <el-radio-group v-model="eModel.def.defborder">
            <el-radio :label="true" @change="restore(['border-color','border-width','border-style'],true)">
                默认
            </el-radio>
            <el-radio :label="false">自定义</el-radio>
        </el-radio-group>
    </div>
    <div class="border-self-item mar-bot" v-show="!eModel.def.defborder">
        <div class="color-item mar-bot">
            <span class="subtitle displayI"></span>
              <span class="self-subtitle">颜色&nbsp;:</span>
               <color-picker transfer recommend size="small" v-model="eModel.customStyle['border-color']"  alpha></color-picker>
               <!-- <el-color-picker v-model="eModel.customStyle['border-color']"  @active-change="colorChanged(eModel.customStyle,'border-color')"></el-color-picker> -->
            <input type="text" v-model="eModel.customStyle['border-color']" class="time-number input-set">
        </div>
        <div class="width-item mar-bot">
            <span class="subtitle displayI"></span>
            <span class="self-subtitle">宽度&nbsp;:</span>
            <input type="text" v-model="eModel.customStyle['border-width']" class="time-number input-set">
        </div>
        <div class="style-item mar-bot">
            <span class="subtitle displayI"></span>
            <span class="self-subtitle">样式&nbsp;:</span>
            
            <div class="border-style displayI vertical-middle mar-r" :style="{'border-color':('solid'==eModel.customStyle['border-style'])?'#409eff':'#ccc'}"
                @click="selectBorderStyle('solid')">
                <div class="border-line solid-border"></div>
            </div>
          
            <div class="border-style displayI vertical-middle mar-r" :style="{'border-color':('dotted'==eModel.customStyle['border-style'])?'#409eff':'#ccc'}"
                @click="selectBorderStyle('dotted')">
                <div class="border-line dotted-border"></div>
            </div>
            <div class="border-style displayI vertical-middle" :style="{'border-color':('dashed'==eModel.customStyle['border-style'])?'#409eff':'#ccc'}"
                @click="selectBorderStyle('dashed')">
                <div class="border-line dashed-border"></div>
            </div>
            
        </div>
        <div class="show-item mar-bot">
          
                <span class="subtitle displayI"></span>
                <span class="self-subtitle pic-text">隐藏&nbsp;:</span>
            
            <div class="displayI">
                <el-row>
                   <el-checkbox-group v-model="HborderList">
                    <el-checkbox size="mini"  label="left" border>左边框</el-checkbox>
                    <el-checkbox size="mini"  label="right" border>右边框</el-checkbox>
                   </el-checkbox-group>
                </el-row>
                <el-row style="margin-top: 20px">
                    <el-checkbox-group v-model="VborderList">
                    <el-checkbox size="mini"  label="top" border>上边框</el-checkbox>
                    <el-checkbox size="mini"  label="bottom" border>下边框</el-checkbox>
                     </el-checkbox-group>
                </el-row>
            </div>
        </div>
    </div>

   <div class="padding-item mar-bot">
        <span class="subtitle displayI">内边距&nbsp;:</span>
        <el-radio-group v-model="eModel.def.defpaddingStyle">
            <el-radio :label="true"
                      @change="restore(['padding-left','padding-bottom','padding-top','padding-right'])">
                默认
            </el-radio>
            <el-radio :label="false">自定义</el-radio>
        </el-radio-group>
    </div>
   <div class="padding-self-item mar-bot" v-show="!eModel.def.defpaddingStyle">
        <div class="padding-self-top mar-bot10">
            <span class="subtitle displayI"></span>
            <span class="self-subtitle">上&nbsp;:</span>
            <input type="text" v-model="eModel.customStyle['padding-top']"
                   class="time-number  input-set mar-right">
            <span class="self-subtitle">下&nbsp;:</span>
            <input type="text" v-model="eModel.customStyle['padding-bottom']" class="time-number  input-set">
        </div>
        <div class="padding-self-bottom">
            <span class="subtitle displayI"></span>
            <span class="self-subtitle">左&nbsp;:</span>
            <input type="text" v-model="eModel.customStyle['padding-left']"
                   class="time-number  input-set mar-right">
            <span class="self-subtitle">右&nbsp;:</span>
            <input type="text" v-model="eModel.customStyle['padding-right']" class="time-number  input-set">
        </div>
    </div>
   <div class="background-item mar-bot">
        <span class="subtitle displayI">背景&nbsp;:</span>
        <el-radio-group v-model="eModel.def.defbackgroundStyle">
            <el-radio :label="true"
                      @change="restore(['background-color','background-image'])">默认
            </el-radio>
            <el-radio :label="false">自定义</el-radio>
        </el-radio-group>
    </div>
    <div class="background-self-item mar-bot" v-show="!eModel.def.defbackgroundStyle">
        <!-- <bgedit :model="eModel.customStyle"></bgedit> -->

        <div>
          <div class="color-item mar-bot">
              <span class="subtitle displayI"></span>
              <span class="self-subtitle">颜色&nbsp;:</span>
                <color-picker transfer recommend size="small" v-model="eModel.customStyle['background-color']"  alpha></color-picker>
              <!-- <el-color-picker v-model="eModel.customStyle['background-color']"></el-color-picker> -->
              <!-- <span class="well-number displayI">#</span> -->
              <input type="text" v-model="eModel.customStyle['background-color']" class="time-number  input-set">
          </div>.

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
          </div> -->
     </div>

    </div>
</div>
</template>
<script>
export default {
    
    props: {
        eModel: {}
    },
    data(){
      return {
        HborderList:[],
        VborderList:[]
      }
    },
   watch: {
            HborderList(list){

                   if(list.length===1){
                     if(list[0]==='left'){
                         
                          this.eModel.customStyle = {...this.eModel.customStyle,'border-right-width':this.eModel.customStyle['border-width'],"border-left-width":'0'}
                     }else{
             
                         this.eModel.customStyle = {...this.eModel.customStyle,'border-right-width':'0',"border-left-width":this.eModel.customStyle['border-width']}
                     }
                   }else if(list.length===0){
                   
                       this.eModel.customStyle = {...this.eModel.customStyle,'border-right-width':this.eModel.customStyle['border-width'],"border-left-width":this.eModel.customStyle['border-width']}
                   }else{
                 
                       this.eModel.customStyle = {...this.eModel.customStyle,'border-right-width':'0',"border-left-width":'0'}
                   }
                      this.$forceUpdate();

            },
            VborderList(list){
              
                   if(list.length===1){
                      if(list[0]==='top'){
            
                         this.eModel.customStyle = {...this.eModel.customStyle,'border-bottom-width':this.eModel.customStyle['border-width'],"border-top-width":'0'}
                       }else{
                   
                         this.eModel.customStyle = {...this.eModel.customStyle,'border-bottom-width':'0',"border-top":this.eModel.customStyle['border-width']}
                      }
                   }else if(list.length===0){

                      this.eModel.customStyle = {...this.eModel.customStyle,'border-bottom-width':this.eModel.customStyle['border-width'],"border-top-width":this.eModel.customStyle['border-width']}
                   }else{
            
                      this.eModel.customStyle = {...this.eModel.customStyle,'border-bottom-width':'0',"border-top-width":'0'}
                   }
                      this.$forceUpdate();
            },
            //这句也别删除
            'eModel.customStyle': {
                immediate:true,
                deep:true,
                handler(){
            
                    this.$forceUpdate();
                }
            }
        },
        methods: {
            colorChanged: function colorChanged(v, model, key) {
              this.$forceUpdate();
            },
            restore: function resume(keys,isBorder) {
                var _this = this;

                keys.forEach(k=>{
                    _this.eModel.customStyle[k] = _this.eModel.defaultValue[k] 
                })
                if(isBorder){
                    this.eModel.customStyle['border-left'] ='';
                    this.eModel.customStyle['border-top'] = '';
                    this.eModel.customStyle['border-bottom'] ='';
                    this.eModel.customStyle['border-right'] = '';
                }
              this.$forceUpdate();
            },
            selectBorderStyle:function(type){
                  // this.eModel.customStyle['border-style']=type;
                  // this.$forceUpdate();
                
                  this.$set(this.eModel.customStyle,'border-style',type);
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
                                    
                    return Math.round((this.eModel.customStyle.opacity||1) * 100);
                },
                set: function set(v) {
                    // this.eModel.customStyle.opacity = v / 100;
                    this.$set(this.eModel.customStyle,'opacity',  v / 100);
                    this.$forceUpdate();
                }
            },
            radius: {
                get: function get() {
                    var ra = this.eModel.customStyle['border-radius']||'0px';
                    ra = ra.substr(0, ra.lastIndexOf('px'));
                    return parseInt(ra);
                },
                set: function set(v) {
                    // this.eModel.customStyle['border-radius'] = v + 'px';
                    this.$set(this.eModel.customStyle,'border-radius', v + 'px');
                    this.$forceUpdate();
                }
            }
        }
    
}
</script>
<style lang="less">

/* 公共样式弹框的css */

.commonSet-content {
  font-size: 12px;
  color: #4d4d4d;
  // width: 360px;
  // box-shadow: 4px 3px 8px 0px rgba(0, 0, 0, 0.2);
  .ivu-input-wrapper-small .ivu-input-icon{
        width: 24px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
  .ivu-input-small{
        padding: 1px 7px;
    height: 30px;
    border-radius: 3px;
  }
  .ivu-color-picker-small .ivu-color-picker-color {
      width: 19px;
      height: 19px;
      top: 3px;
  }
  .ivu-input-icon-normal+.ivu-input {
      padding-right: 27px;
  }

  .dialog-nav {
    height: 42px;
    line-height: 42px;
    border-bottom: 1px solid #e6e6e6;
    .nav-item {
      float: left;
      cursor: pointer;
      height: 42px;
      line-height: 42px;
      width: 72px;
      text-align: center;
      border-right: 1px solid #e6e6e6;
      &.active {
        background-color: #fff;
      }
    }
  }
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
  /* radio选中样式 */
  .self-radio-lable {
    position: relative;
    display: inline-block;
    font-weight: 400;
    color: #0c4757;
    padding-left: 25px;
    cursor: pointer;
    input {
      position: absolute;
      left: -9999px;
      &:checked + i:after {
        opacity: 1;
      }
    }
    .self-i {
      display: block;
      position: absolute;
      top: 2px;
      left: 0;
      width: 15px;
      height: 15px;
      outline: 0;
      border: 1px solid #e4e4e4;
      background: #ffffff;
      border-radius: 50%;
      transition: border-color .3s;
      -webkit-transition: border-color .3s;
      &:after {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        margin-left: -4px;
        margin-top: -4px;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: #5ca6e2;
        opacity: 0;
        transition: opacity .1s;
        -webkit-transition: opacity .1s;
      }
    }
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
  /* .com-set-item {
        height: 610px;
        overflow-y: hidden;
        padding: 20px 10px 0 20px;
    } */
  .com-set-item {
    padding-bottom: 40px;
  }
  /* 容器 */
  .com-set-container {
    height: 690px;
    overflow: auto;
    padding: 30px;
    padding-bottom: 61px;
  }
  /* 样式颜色 */
  .style-choose {
    padding-left: 30px;
    .color {
      .lis {
        width: 28px;
        height: 28px;
        float: left;
        margin-right: 10px;
        border-radius: 50%;
        background-color: #ffffff;
        cursor: pointer;
        position: relative;
        margin-top: 5px;
        margin-bottom: 5px;
        &.red:hover {
          background-color: #ff9500;
        }
        /* 选中状态 */
        &.active.red {
          background-color: #ff9500;
        }
        &.orange:hover {
          background-color: #ff9500;
        }
        &.active.orange {
          background-color: #ff9500;
        }
        &.yellow:hover {
          background-color: #ffcc00;
        }
        &.active.yellow {
          background-color: #ffcc00;
        }
        &.green:hover {
          background-color: #4cd964;
        }
        &.active.green {
          background-color: #4cd964;
        }
        &.blue:hover {
          background-color: #007aff;
        }
        &.active.blue {
          background-color: #007aff;
        }
        &:hover {
          .liInner {
            border: 2px solid #ffffff;
          }
        }
        &.active {
          .liInner {
            border: 2px solid #ffffff;
          }
        }
      }
      .liInner {
        width: 26px;
        height: 26px;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -13px;
        margin-top: -13px;
        &.red {
          background-color: #ff3b30;
        }
        &.orange {
          background-color: #ff9500;
        }
        &.yellow {
          background-color: #ffcc00;
        }
        &.green {
          background-color: #4cd964;
        }
        &.blue {
          background-color: #007aff;
        }
      }
    }
    .style-item {
      height: 130px;
      line-height: 130px;
      width: 260px;
      text-align: center;
      font-size: 14px;
    }
    .last {
      line-height: 1;
    }
    .bar-box {
      margin: 44px 0 0 94px;
      border-left: 4px solid #5ca6e2;
    }
    .titleBar-text {
      color: #5ca6e2;
      height: 20px;
    }
    .second-titleBar-text {
      color: #b8bfcc;
      height: 12px;
    }
    .p-ele {
      text-align: left;
      padding-left: 10px;
    }
    .titleBar-text {
      margin-bottom: 10px;
    }
    .bottom-text {
      width: 100%;
      height: 30px;
      line-height: 30px;
      margin: 10px 0 4px 0;
      &:hover {
        background-color: #bec0c1;
      }
    }
  }
  .mar-bot {
    margin-bottom: 12px;
  }
  .mar-bot10 {
    margin-bottom: 10px;
  }
  //小标题
  .subtitle {
    // width: 62px;
    margin-right: 18px;
    text-align: right;
  }
  /* 行内快对齐中间 */
  .vertical-middle {
    vertical-align: middle;
  }
  .vertical-b {
    vertical-align: bottom;
  }
  .vertical-t {
    vertical-align: top;
  }
  /* 右间距 */
  .mar-r {
    margin-right: 10px;
  }
  /* 上间距 */
  .mar-t {
    margin-top: 10px;
  }
  .positionR {
    position: relative;
  }
  /* 自定义标题 */
  .self-subtitle {
    display: inline-block;
    margin-right: 15px;
  }
  //单选框包含文字
  .lable-notLast {
    margin-right: 18px;
  }
  /* 不透明度和圆角样式 */
  .slide-box {
    margin-bottom: 20px;
    .ui-widget.ui-widget-content {
      border: none;
    }
    .effect-time-text {
      color: #4d4d4d;
      margin-right: 15px;
    }
    .time-slide {
      display: inline-block;
      vertical-align: middle;
      width: 100px;
      height: 3px;
      background-color: #ebeff5;
      margin-right: 20px;
      .ui-slider-handle {
        width: 13px;
        height: 13px;
        border-radius: 50%;
        background-color: #5ca6e2;
        border: none;
      }
    }
    .slider-text-item {
      height: 38px;
      line-height: 38px;
    }
  }
  .mar-right {
    margin-right: 13px;
  }
  /* 背景 */
  .pic-text {
    vertical-align: top;
    line-height: 70px;
  }
  .pic-add-box {
    display: inline-block;
    width: 140px;
    height: 70px;
    border: 1px solid #cccccc;
    color: #5ca6e2;
  }
  .add-symbol {
    height: 46px;
  }
  /* 取色盒子 */
  .colpick-box {
    display: inline-block;
    vertical-align: middle;
    width: 26px;
    height: 26px;
    background-color: #e6ecf3;
    margin-right: 14px;
    border-radius: 50%;
  }
  /* #号 */
  .well-number {
    margin-right: 14px;
  }
  /* 边框 */
  .border-self-item {
    .border-style {
      width: 40px;
      height: 30px;
      padding: 13px 0 0 6px;
      border: 1px solid #e6e6e6;
      &.active {
        border-color: #5ca6e2;
      }
      .border-line {
        width: 26px;
        height: 0;
        border: 0;
        border-top-width: 2px;
        border-top-color: #5ca6e2;
        &.dotted-border {
          border-style: dotted;
        }
        &.dashed-border {
          border-style: dashed;
        }
        &.solid-border {
          border-style: solid;
        }
      }
    }
    /* 可选择显示上下左右边框 */
    .show-outer {
      width: 140px;
      height: 110px;
      border: 1px solid #e6e6e6;
      padding: 13px 0 0 29px;
      .border-box {
        width: 80px;
        height: 80px;
        border: 2px solid #7db8e8;
        .border-same {
          border: 1px solid #5ca6e2;
        }
        .level {
          width: 14px;
          height: 40px;
          top: 50%;
          transform: translateY(-50%);
        }
        .l-square {
          left: -8px;
        }
        .r-square {
          right: -8px;
        }
        .vertical {
          width: 40px;
          height: 14px;
          left: 50%;
          transform: translateX(-50%);
        }
        .t-square {
          top: -8px;
        }
        .b-square {
          bottom: -8px;
        }
        .bgc {
          background-color: #ccebf8;
        }
      }
    }
  }
  /* 标题面板 */
  .gray-border {
    border: 1px solid #cccccc;
  }
  .padL10 {
    padding-left: 10px;
  }
  /* 30px的高度 */
  .h30p {
    height: 30px;
    line-height: 30px;
  }
  label.self-radio-lable {
    cursor: pointer;
  }
  .titleBar {
    width: 100%;
    /* 标题输入框 */
    .title-input {
      width: 140px;
    }
  }
  // 小三角标记
  .bg-triangle {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 30px;
    height: 100%;
    /* background: url('./img/icon_down_arrow.png') no-repeat center center; */
    transition: all .3s ease-in-out;
    &.trigger {
      -webkit-transform: rotate(180deg);
      -moz-transform: rotate(180deg);
      -o-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
      transform: ratate(180deg);
    }
  }
  /* 文字自定义 */
  .size-select {
    color: #666666;
    position: relative;
    display: inline-block;
    outline: 0;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    border-radius: 2px;
    border: 1px solid #e3e2e8;
    transition: all .2s ease-in-out;
    width: 100px;
  }
  .select-input {
    width: 70px;
    height: 100%;
    vertical-align: super;
  }
  /* 文字样式 */
  .style-label {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    text-align: center;
    border-radius: 4px;
    font-size: 20px;
    font-family: blod;
    &.active {
      border-color: #69bbff;
    }
    .hidden-radio {
      display: none;
    }
  }
  .blod-label {
    font-style: normal;
    // background: url('./img/B.png') no-repeat center center;
  }
  .italic-label {
    font-style: italic;
    // background: url('./img/I.png') no-repeat center center;
  }
  .oblique-label {
    font-style: oblique;
    // background: url('./img/U.png') no-repeat center center;
  }
  /* 样式面板 */
  /* 字体下拉框 */
  .select-dropdown {
    position: absolute;
    z-index: 2;
    top: 28px;
    left: 0;
    width: 100%;
    background-color: #ffffff;
    .fonts-list {
      width: 100%;
      height: 108px;
      overflow-x: hidden;
      overflow-y: auto;
      padding-top: 10px;
    }
    .dropdown-item {
      height: 28px;
      line-height: 28px;
      margin: 10px;
      margin-top: 0;
      margin-bottom: 5px;
      padding-left: 10px;
      &.active {
        background-color: #69bbff;
        color: #666666;
      }
      &:hover {
        background-color: #69bbff;
        color: #ffffff;
      }
    }
  }
  input[type="text"].time-number {
    display: inline-block;
    vertical-align: middle;
    width: 66px;
    height: 30px;
    color: #4d4d4d;
    border: 1px solid #cccccc;
    &:focus {
      border-color: #5ca6e2;
    }
  }
  input[type="radio"] {
    vertical-align: middle;
    cursor: pointer;
    margin-right: 8px;
  }
  .square-btn-box {
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e6e6e6;
    padding: 15px 0 15px 0;
    background-color: #ffffff;
    .succee-btn {
      cursor: pointer;
      width: 80px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #e6e6e6;
      border-radius: 10px;
      background-color: #ffffff;
      color: #5ca6e2;
    }
  }


.height-input-outer .el-input-group {
  width: 120px;
  margin-left: 80px;
}


  .input-set{
    line-height: 30px;
      text-align: center !important;
      font-size:14px;

  }
  .displayI{
    display:inline-block;
  }
  .color-item  .el-color-picker{
       vertical-align: middle;
  }   
}

</style>
