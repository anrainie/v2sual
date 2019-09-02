<template>
  <div class="eb-bankcard-type2">
    <div class="eb-bankcard__main">
      <img :src="model.imgSrc" class="eb-bankcard__img">
      <img src="img/logo.png" class="eb-bankcard__logo">
      <p class="eb-bankcard__id">
        {{model.cardID}}
      </p>
      <!-- <div class="eb-bankcard__info" :class="[fold ? 'fold' : 'unfold']">
        <div class="eb-bankcard__info-ctt">
          <p v-for="(item, index) in model.funds" :key="index">{{item.title}} : {{item.sum}}</p>
        </div>
        <div class="eb-bankcard__info-handle" @click="toggleInfo">
          <p>{{fundType}}</p>
          <i :class="[fold ? 'el-icon-arrow-right' : 'el-icon-arrow-left']"></i>
        </div>
      </div> -->
      <div class="eb-bankcard__info">
        <p v-for="(item, index) in model.funds" :key="index">{{item.title}} : {{!hideMoney ? item.sum : ''}}</p>
      </div>
      <button class="eb-bankcard__handle el-button el-button--text" @click="toggleInfo">{{fundType}}</button>
    </div>
    <!-- <div class="eb-bankcard__bot">
      <div class="eb-bankcard__name">{{model.alias}}</div>
      <div class="eb-bankcard__btns">
        <button v-for="(item, index) in model.shortcuts" :key="index" @click="openPage(item.route)">{{item.title}}</button>
      </div>
    </div> -->
    <div class="eb-bankcard__btns">
      <button v-for="(item, index) in model.shortcuts" :key="index" @click="openPage(item.route)">{{item.title}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v2-ebank-bankcard-type2',

  data() {
    return {
      hideMoney: true
    }
  },
  computed: {
    fundType() {
      return this.model.cardType === '借记卡' ? '余额' : '账单'
    }
  },
  methods: {
    toggleInfo() {
      this.hideMoney = this.hideMoney ? false : true
    },
    openPage(route) {
      // alert(route)
      console.log(route)
      this.open(route)
      // this.open(
      //   {
      //     page: "spa/index",
      //     path: "/index", // 页面 hash
      //     type: "BLANK",
      //     status: !0,
      //     params: { param: "一个参数" }
      //   }
      // )
    }
  },
}
</script>

<style lang="scss">
.eb-bankcard-type2 {
  // display: inline-block;
  position: relative;
  float: left;
  margin: 10px;
  // padding: 10px 10px 0;
  border-radius: 10px;

  .eb-bankcard__main {
    position: relative;
    overflow: hidden;

    .eb-bankcard__img {
      display: block;
      height: 140px;
      width: 240px;
      // height: 100%;
      border-radius: 10px;
      // box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }

    .eb-bankcard__logo {
      position: absolute;
      left: 10px;
      top: 10px;
      width: 100px;
      height: 22px;
    }

    .eb-bankcard__id {
      position: absolute;
      top: 40px;
      height: 30px;
      line-height: 30px;
      text-align: left;
      text-indent: 10px;
      border-top: 1px solid #ccc;
      width: 100%;
      font-size: 16px;
      color: #fff;
      text-shadow: 1px -1px 3px #333;
    }

    // .eb-bankcard__infos {
    //   width: 260px;
    //   margin: 10px;
    //   overflow: hidden;
    // }

    .eb-bankcard__info {
    // .eb-bankcard__figure {
      position: absolute;
      padding: 6px 10px;
      height: 40px;
      line-height: 20px;
      /* width: 160px; */
      /* background: rgba(0, 0, 0, 0.2); */
      /* border-radius: 25px; */
      /* font-size: 12px; */
      // color: #fff;
      top: 65px;

      // .eb-bankcard__info-ctt {
      //   float: left;
      //   width: 125px;
      //   padding: 0 5px;
      //   text-align: left;
      //   box-sizing: border-box;
      // }
      // .eb-bankcard__info-handle {
      //   // float: left;
      //   // width: 35px;
      //   // cursor: pointer;

      //   // p {
      //   //   display: inline-block;
      //   //   width: 20px;
      //   //   vertical-align: middle;
      //   // }
      //   // i {
      //   //   vertical-align: middle;
      //   // }
      // }

      // &.fold {
      //   animation: fold 0.3s forwards;
      // }
      // &.unfold {
      //   animation: unfold 0.3s forwards;
      // }
    }

    .eb-bankcard__handle{
      position: absolute;
      bottom: -5px;
      right: 15px;
      z-index: 2;
      color: #333;
    }

  }

  .eb-bankcard__btns {
    // display: none;
    // background: #00ff00;
    // text-align: center;
    // padding: 5px 8px;
    position: absolute;
    top: 0;
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.2);

    button {
      margin: 0 2px;
      width: 65px;
      height: 22px;
      line-height: 22px;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 3px;
      outline: none;
      font-size: 12px;

      &:hover {
        background: #f4f4f4;
      }
      &:active {
        background: #fff;
      }
    }
  }

  // @keyframes fold {
  //   // from {
  //   //   left: 50%;
  //   //   margin-left: -85px;
  //   // }
  //   to {
  //     left: 0;
  //     margin-left: -130px;
  //   }
  // }

  // @keyframes unfold {
  //   // from {
  //   //   left: 0;
  //   //   margin-left: -120px;
  //   // }
  //   to {
  //     left: 50%;
  //     margin-left: -90px;
  //   }
  // }

  &:hover {
    background: rgba(0, 0, 0, 0.1);

    // .eb-bankcard__name {
    //   display: none;
    // }
    .eb-bankcard__handle{
      color: #eee;
    }

    .eb-bankcard__btns {
      display: flex;
    }
  }
}
</style>
