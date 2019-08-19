<template>
  <div class="eb-bankcard">
    <div class="eb-bankcard__main">
      <img :src="imgSrc" class="eb-bankcard__img">
      <div class="eb-bankcard__info" :class="[fold ? 'fold' : 'unfold']">
        <div class="eb-bankcard__info-ctt">
          <p v-for="(item, index) in funds" :key="index">{{item.title}} : {{item.sum}}</p>
        </div>
        <div class="eb-bankcard__info-handle" @click="toggleInfo">
          <p>{{fundType}}</p>
          <i :class="[fold ? 'el-icon-arrow-right' : 'el-icon-arrow-left']"></i>
        </div>
      </div>
      <p class="eb-bankcard__id">
        {{cardID}}
      </p>
    </div>
    <div class="eb-bankcard__bot">
      <div class="eb-bankcard__name">{{alias}}</div>
      <div class="eb-bankcard__btns">
        <button v-for="(item, index) in shortcuts" :key="index" @click="openPage(item.route)">{{item.title}}</button>
      </div>
    </div>
  </div>
  <!-- <h1>{{alias}}</h1>
  <h3>{{$attrs.fundsBtn}}</h3> -->
  <!-- <div class="eb-bankcard__info">eb-bankcard__info</div>
  <div class="eb-bankcard__name">eb-bankcard__name</div>
  <div class="eb-bankcard__btns">eb-bankcard__btns</div> -->
</template>

<script>
// <template>
//   <button
//     class="el-button"
//     @click="handleClick"
//     :disabled="buttonDisabled || loading"
//     :autofocus="autofocus"
//     :type="nativeType"
//     :class="[
//       type ? 'el-button--' + type : '',
//       buttonSize ? 'el-button--' + buttonSize : '',
//       {
//         'is-disabled': buttonDisabled,
//         'is-loading': loading,
//         'is-plain': plain,
//         'is-round': round,
//         'is-circle': circle
//       }
//     ]"
//   >
//     <i class="el-icon-loading" v-if="loading"></i>
//     <i :class="icon" v-if="icon && !loading"></i>
//     <span v-if="$slots.default"><slot></slot></span>
//   </button>
// </template>
  export default {
    name: 'EbBankcard',

    props: ['alias', 'cardType', 'imgSrc', 'funds', 'shortcuts', 'cardID'],

    data() {
      return {
        fold: true
      }
    },
    computed: {
      fundType() {
        return this.cardType === 'debit' ? '余额' : '账单'
      }
    },

    methods: {
      toggleInfo() {
        this.fold = this.fold ? false : true
      },
      openPage(route) {
        // alert(route)
        this.open(route)
      }
    },

    mounted() {
      console.log('this')
      console.log(this)
    },

    // inject: {
    //   elForm: {
    //     default: ''
    //   },
    //   elFormItem: {
    //     default: ''
    //   }
    // },

    // props: {
    //   type: {
    //     type: String,
    //     default: 'default'
    //   },
    //   size: String,
    //   icon: {
    //     type: String,
    //     default: ''
    //   },
    //   nativeType: {
    //     type: String,
    //     default: 'button'
    //   },
    //   loading: Boolean,
    //   disabled: Boolean,
    //   plain: Boolean,
    //   autofocus: Boolean,
    //   round: Boolean,
    //   circle: Boolean
    // },

    // computed: {
    //   _elFormItemSize() {
    //     return (this.elFormItem || {}).elFormItemSize;
    //   },
    //   buttonSize() {
    //     return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    //   },
    //   buttonDisabled() {
    //     return this.disabled || (this.elForm || {}).disabled;
    //   }
    // },

    // methods: {
    //   handleClick(evt) {
    //     this.$emit('click', evt);
    //   }
    // }
  };
</script>
