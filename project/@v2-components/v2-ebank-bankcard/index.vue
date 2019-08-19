<template>
  <div class="eb-bankcard">
    <div class="eb-bankcard__main">
      <img :src="model.imgSrc" class="eb-bankcard__img">
      <div class="eb-bankcard__info" :class="[fold ? 'fold' : 'unfold']">
        <div class="eb-bankcard__info-ctt">
          <p v-for="(item, index) in model.funds" :key="index">{{item.title}} : {{item.sum}}</p>
        </div>
        <div class="eb-bankcard__info-handle" @click="toggleInfo">
          <p>{{fundType}}</p>
          <i :class="[fold ? 'el-icon-arrow-right' : 'el-icon-arrow-left']"></i>
        </div>
      </div>
      <p class="eb-bankcard__id">
        {{model.cardID}}
      </p>
    </div>
    <div class="eb-bankcard__bot">
      <div class="eb-bankcard__name">{{model.alias}}</div>
      <div class="eb-bankcard__btns">
        <button v-for="(item, index) in model.shortcuts" :key="index" @click="openPage(item.route)">{{item.title}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v2-ebank-bankcard',

  data() {
    return {
      fold: true
    }
  },
  computed: {
    fundType() {
      return this.model.cardType === '借记卡' ? '余额' : '账单'
    }
  },
  methods: {
    toggleInfo() {
      this.fold = this.fold ? false : true
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
.eb-bankcard {
  // display: inline-block;
  float: left;
  margin: 10px;
  padding: 10px 10px 0;
  border-radius: 10px;
  text-align: center;

  .eb-bankcard__main {
    position: relative;
    overflow: hidden;

    .eb-bankcard__img {
      display: block;
      width: 210px;
      height: 135px;
      // height: 100%;
      border-radius: 10px;
      // box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
    }

    // .eb-bankcard__infos {
    //   width: 260px;
    //   margin: 10px;
    //   overflow: hidden;
    // }

    .eb-bankcard__info {
    // .eb-bankcard__figure {
      position: absolute;
      left: 0;
      top: 25px;
      // margin-top: 25px;
      margin-left: -130px;
      padding: 6px 10px;
      height: 40px;
      line-height: 20px;
      width: 160px;
      background: rgba(0, 0, 0, 0.2);
      border-radius: 25px;
      font-size: 12px;
      color: #fff;

      .eb-bankcard__info-ctt {
        float: left;
        width: 125px;
        padding: 0 5px;
        text-align: left;
        box-sizing: border-box;
      }
      .eb-bankcard__info-handle {
        float: left;
        width: 35px;
        cursor: pointer;

        p {
          display: inline-block;
          width: 20px;
          vertical-align: middle;
        }
        i {
          vertical-align: middle;
        }
      }

      &.fold {
        animation: fold 0.3s forwards;
      }
      &.unfold {
        animation: unfold 0.3s forwards;
      }
    }
    .eb-bankcard__id {
      position: absolute;
      bottom: 20px;
      width: 100%;
      font-size: 16px;
      color: #fff;
      text-shadow: 1px -1px 3px #333;
      text-align: center;
    }
  }

  .eb-bankcard__bot {
    height:35px;
    line-height:35px;
    //
    .eb-bankcard__name {
      // text-align: center;
      // line-height: 50px;
      font-size: 14px;
      color: #666;
    }
    .eb-bankcard__btns {
      display: none;
      // background: #00ff00;
      // text-align: center;
      // padding: 5px 8px;

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
  }

  @keyframes fold {
    // from {
    //   left: 50%;
    //   margin-left: -85px;
    // }
    to {
      left: 0;
      margin-left: -130px;
    }
  }

  @keyframes unfold {
    // from {
    //   left: 0;
    //   margin-left: -120px;
    // }
    to {
      left: 50%;
      margin-left: -90px;
    }
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);

    .eb-bankcard__name {
      display: none;
    }
    .eb-bankcard__btns {
      display: block;
    }
  }
}
</style>
