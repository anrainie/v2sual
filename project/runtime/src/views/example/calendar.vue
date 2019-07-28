<template>
  <div data-widget-type="aweb4Calendar" class="aweb4-calendar">
    <div class="month">
      <span @click="pickPre(currentYear,currentMonth)" class="arrow" data-role="arrow">
        <i class="fa fa-angle-left"></i>
      </span>
      <span v-if="language.indexOf('zh') !== -1">{{ currentYear }}年{{ currentMonth }}月</span>
      <span v-else>{{ months[ currentMonth - 1] }} {{ currentYear }}</span>
      <span @click="pickNext(currentYear,currentMonth)" class="arrow" data-role="arrow">
        <i class="fa fa-angle-right"></i>
      </span>
    </div>
    <div class="weekdays">
      <span v-for="val in weeks" :key="val">{{val}}</span>
    </div>
    <ul class="days">
      <li v-if="days.length" v-for="(item,index) in days" :key="index">
        <!--不是本月-->
        <div class="other-month" v-if="item.day.getMonth()+1 != currentMonth">
          <i></i>
          <span>{{ item.day.getDate() }}</span>
        </div>

        <!--本月-->
        <div v-else @click="activeCheck(index)" :class="{'checked':item.checked}">
          <template v-for="(val,idx) in calendarList">
            <template v-if="val.content=='all'||isInArray(val.content,item.day.getDate())">
              <i v-if="val.icon" :class="val.icon" :style="{color:val.color}" :key="idx"></i>
              <img v-else-if="val.img" :src="val.img" :key="idx" />
            </template>
          </template>
          <span>{{ item.day.getDate() }}</span>
        </div>
      </li>
    </ul>

    <div class="calendar-footer">
      <div class="calendar-footer-left">
        <i
          class="fa"
          @click="allcheckMethod"
          :class="allchecked===true?'allchecked fa-check-circle':'fa-circle-thin'"
        ></i>
        <div @click="show =!show">
          <span>{{calendarList[flag].text}}</span>
          <i v-if="calendarList.length>1" class="fa fa-angle-down"></i>
        </div>
      </div>

      <div class="calendar-footer-btn">
        <button
          v-for="(val,index) in calendarList[flag].btnOp"
          :disabled="!calendarList[flag].disabled"
          :id="val.id"
          :key="val.id"
        >{{val.name}}</button>
      </div>
    </div>

    <div class="calendar-popup" v-if="calendarList.length>1" :class="{'show':show==true}">
      <ul>
        <template v-for="(item,index) in calendarList">
          <li
            v-if="item.content!='all'||item.content.length"
            :key="index"
            @click="choiceText(index)"
          >{{item.text}}</li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: 0, //
      allchecked: false,
      show: false,
      currentDay: 1,
      currentMonth: 1,
      currentMonthName: "January",
      currentYear: 2017,
      currentWeek: 1,
      days: [],
      language: "zh-CN",
      weeks: ["一", "二", "三", "四", "五", "六", "日"],
      months: [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月"
      ],
      calendarList: [
        {
          icon: "fa fa-question-circle", //fa fa- check - circle
          img: "",
          content: "all",
          color: "#00a4ae",
          text: "全选",
          btnOp: [
            {
              name: "填报",
              id: "href1#href2"
            }
          ]
        }
      ]
    };
  },
  created: function() {
    this.initData(null);
  },
  methods: {
    initData: function(cur) {
      var date, nextMonthDays, i, d;
      if (cur) {
        date = new Date(cur);
      } else {
        date = new Date();
      }
      this.currentDay = date.getDate();
      this.currentYear = date.getFullYear();
      this.currentMonth = date.getMonth() + 1;
      this.currentWeek = date.getDay(); // 1...6,0
      this.days.length = 0;

      if (this.currentWeek == 0) {
        this.currentWeek = 7;
      }

      var str = this.formatDate(
        this.currentYear,
        this.currentMonth,
        this.currentDay
      );

      var monthDays = this.getThisMonthDays(
        this.currentYear,
        this.currentMonth
      );

      var firstDayWeek = this.getFirstDayOfWeek(
        this.currentYear,
        this.currentMonth
      );

      if (firstDayWeek == 0) {
        firstDayWeek = 7;
      }

      //上个月的最后几天
      for (i = firstDayWeek - 2; i >= 0; i--) {
        d = new Date(str);
        d.setDate(-i);
        this.days.push({ day: d, checked: true });
      }

      //当月
      for (i = 1; i <= monthDays; i++) {
        d = new Date(str);
        d.setDate(i);
        // this.days.push(d);
        this.days.push({ day: d, checked: false });
      }

      //下个月
      if (this.currentMonth == 12) {
        str = this.formatDate(this.currentYear + 1, 1, this.currentDay);
      } else {
        str = this.formatDate(
          this.currentYear,
          this.currentMonth + 1,
          this.currentDay
        );
      }
      nextMonthDays = GRIDCOUNT - this.days.length;
      for (i = 1; i <= nextMonthDays; i++) {
        d = new Date(str);
        d.setDate(i);
        this.days.push({ day: d, checked: true });
      }

      //判断环境所使用的语言来决定模板使用哪个渲染顺序渲染年月名称
      this.language = $AW.getLanguage && $AW.getLanguage();
    },

    //得到这个月的总天数
    getThisMonthDays: function(year, month) {
      return new Date(year, month, 0).getDate();
    },

    //得到这个月的第一天对应的星期数
    getFirstDayOfWeek: function(year, month) {
      return new Date(year, month - 1, 1).getDay();
    },

    pickPre: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(0);

      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    pickNext: function(year, month) {
      var d = new Date(this.formatDate(year, month, 1));
      d.setDate(GRIDCOUNT);
      this.initData(this.formatDate(d.getFullYear(), d.getMonth() + 1, 1));
    },

    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function(year, month, day) {
      var y = year;
      var m = month;
      if (m < 10) m = "0" + m;
      var d = day;
      if (d < 10) d = "0" + d;
      return y + "-" + m + "-" + d;
    },
    //判断是否在数组
    isInArray: function(arr, value) {
      if (typeof arr == "string") {
        arr = arr.split(",");
      }
      for (var i = 0; i < arr.length; i++) {
        if (value === arr[i]) {
          return true;
        }
      }
      return false;
    },

    //点击日期切换类
    activeCheck: function(index) {
      var that = this,
        thisYearDays,
        content = this.calendarList[this.flag].content;

      this.days[index].checked = !this.days[index].checked;
      thisYearDays = content == "all" ? this.getThisYear() : content;
      that.allchecked = true;
      that.days.forEach(function(item, i) {
        thisYearDays &&
          thisYearDays.forEach(function(val, index) {
            if (item.day.getDate() === val) {
              if (that.days[i].checked === false) {
                that.allchecked = false;
              }
            }
          });
      });

      for (var i = 0; i < that.days.length; i++) {
        if (that.days[i].day.getMonth() + 1 == that.currentMonth) {
          if (that.days[i].checked === true) {
            that.calendarList[that.flag].disabled = true;
            break;
          } else {
            that.calendarList[that.flag].disabled = false;
          }
        }
      }
    },

    //点击同类型的全选
    allcheckMethod: function() {
      var thisYearDays = [],
        that = this,
        content = this.calendarList[this.flag].content;

      thisYearDays = content == "all" ? this.getThisYear() : content;

      if (thisYearDays.length) {
        this.allchecked = !this.allchecked;
        this.days.forEach(function(item, i) {
          thisYearDays.forEach(function(val, index) {
            if (item.day.getDate() == val) {
              that.days[i].checked = that.allchecked;
            }
          });
        });
      }
      for (var i = 0; i < that.days.length; i++) {
        if (that.days[i].day.getMonth() + 1 == that.currentMonth) {
          if (that.days[i].checked === true) {
            that.calendarList[that.flag].disabled = true;
            break;
          } else {
            that.calendarList[that.flag].disabled = false;
          }
        }
      }
    },

    //获取当前月的数组
    getThisYear: function() {
      var monthDays = this.getThisMonthDays(
          this.currentYear,
          this.currentMonth
        ),
        days = [],
        d;
      for (var i = 1; i <= monthDays; i++) {
        days.push(i);
      }
      return days;
    },

    //选择同类型的
    choiceText: function(index) {
      var that = this;

      this.days.forEach(function(item, idx) {
        if (item.day.getMonth() + 1 == that.currentMonth) {
          item.checked = false;
        }
      });

      this.allchecked = false;
      this.flag = index;
      this.show = false;
    }
  }
};
</script>

<style lang="less">
.aweb4-calendar {
  overflow: hidden;
  .month {
    width: 100%;
    text-align: center;
    padding: 18px 0;

    span {
      color: #333;
      font-size: 18px;
      display: inline-block;
      vertical-align: middle;
      i {
        font-size: 20px;
      }
      &.arrow {
        margin: 0 10px;
      }
    }
  }

  .weekdays {
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .weekdays span {
    display: inline-block;
    width: 14.2%;
    text-align: center;
    color: #888;
  }
  .days {
    padding: 0;
    background: #fff;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      list-style-type: none;
      display: inline-block;
      width: 14.2%;
      text-align: center;
      color: #333;
      margin: 5px 0;
      div {
        width: 46px;
        height: 46px;
        margin: 0 auto;
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid transparent;
        padding: 4px 0;
        &.other-month {
          color: #ccc;
        }
        &.checked {
          border: 2px solid #00a4ae;
          box-sizing: border-box;
        }
      }
      i {
        display: inline-block;
        vertical-align: middle;
        height: 22px;
        font-size: 20px;
      }
      span {
        display: block;
        height: 22px;
      }
    }
  }

  .calendar-footer {
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    margin-top: 10px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    .calendar-footer-left {
      line-height: 50px;
      padding-left: 20px;
      float: left;
      > div {
        display: inline-block;
        vertical-align: middle;
        span {
          font-size: 18px;
        }
        select {
          border: none;
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
          background: none no-repeat scroll right center transparent;
        }
      }
      i {
        font-size: 24px;
        vertical-align: middle;
        margin-right: 8px;
        color: #e6e6e6;
        &.allchecked {
          color: #00a4ae;
        }
      }
      img {
        width: 15px;
        height: 15px;
        margin: 0 auto;
      }
    }
    .calendar-footer-btn {
      float: right;
      button {
        display: inline-block;
        vertical-align: middle;
        padding: 0 32px;
        background: #00a4ae;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        color: #fff;
      }
      button[disabled] {
        background: #eee;
      }
    }
  }
  .calendar-popup {
    width: 100%;
    background: #fff;
    display: none;
    &.show {
      display: block;
    }
    ul {
      padding-left: 20px;
      li {
        text-align: left;
        height: 35px;
        line-height: 35px;
      }
    }
  }
}
</style>