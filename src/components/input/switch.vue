<template>
 <div data-widget-type="aweb4Switch" class="aweb-switch"  :style="model.data.style" ref="wrap" :class="wrapClass">
    <div class="aweb-switch-list" :style="model.data.switchListStyle" :class="{'disabled':model.data.disabled}">
        <div class="switch-title" :class="{'no-title':!model.data.title}">
            <i v-if="model.data.icon" :class="model.data.icon" :style="model.data.iconStyle"></i>
            <img v-else-if="model.data.img" :src="model.data.img" :style="model.data.imgStyle"/>

            <span v-if="model.data.title" v-text="model.data.title" :style="model.data.titleStyle"></span>
        </div>
        <label class="aweb-m-switch" :style="model.data.switchStyle" >
            <input class="aweb-m-switch-input" :disabled="model.data.disabled" type="checkbox"  v-model="model.data.currentValue">
            <span class="aweb-m-switch-core" data-role="switchCore"></span>
        </label>  
    </div>
</div>
</template>

<script>
  import {widget, composite} from '../../assets/js/v2-view.js'
  import {edit} from '../../assets/js/edit.js'
export default {
  name: "v2Switch",
  mixins: [widget,edit],
  props: {
    //  titleStyle: {},
    //   imgStyle: {},
    //   iconStyle: {},
    //   switchListStyle: {},
    //   switchStyle: {},
    //   switchNotChecked: {},
    //   switchChecked: {},
    //   swtichInnerStyle: {},
    //   disabled: false,
    //   value: true,
    //   title: "开关",
    //   icon: "",
    //   img: "",
    //   value: true
  },
  data() {
    return {
     
    };
  },
  mounted() {
    this.$nextTick(function() {
      
    });
  },
  computed: {
    currentValue: {
      get: function() {
        return this.value;
      },
      set: function(val) {
        this.value = val;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.aweb-switch .aweb-switch-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
  border-bottom: 1px solid #eee;
  margin: 5px 0;
}
.aweb-switch .aweb-switch-list.disabled {
  opacity: 0.5;
}
.aweb-switch .switch-title {
  flex: 1;
  -moz-flex: 1;
  -ms-flex: 1;
  -webkit-flex: 1;
  font-size: 16px;
}
.aweb-switch .switch-title.no-title {
  display: none;
}
.aweb-switch .switch-title img {
  width: 40px;
  height: 40px;
}
.aweb-switch .aweb-m-switch {
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
}
.aweb-switch .aweb-m-switch * {
  pointer-events: none;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-label {
  margin-left: 10px;
  display: inline-block;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-label:empty {
  margin-left: 0;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-core {
  display: inline-block;
  position: relative;
  width: 52px;
  height: 32px;
  border: 1px solid #d9d9d9;
  border-radius: 16px;
  box-sizing: border-box;
  background-color: #fff;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-core::after {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s;
  border-radius: 15px;
  width: 28px;
  height: 28px;
  background-color: #fff;
  border: 1px solid #ededed;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-input {
  display: none;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-input:checked + .aweb-m-switch-core {
  background-color: #26a2ff;
}
.aweb-switch .aweb-m-switch .aweb-m-switch-input:checked + .aweb-m-switch-core::after {
  transform: translateX(20px);
}

</style>
