<template>
  <div data-widget-type="aweb4Calendar" class="aweb4-calendar" :class="widgetClass" :style="model.commonStyle" >
    <el-tabs v-model="selectedMonth">
      <el-tab-pane
        v-for="month in range"
        :key="month"
        :label="genMonthLabel(month)"
        :name="genMonthLabel(month)"
      >
        <div class="weekdays">
          <span v-for="val in weeks" :key="val">{{val}}</span>
        </div>
        <ul class="days">
          <li v-for="(item,index) in genDaysByMonth(genMonthDate(month))" :key="index">
            <!--不是本月-->
            <div :class="{'other-month':item.disabled}">
              <i></i>
              <span>{{ item.day.getDate() }}</span>
            </div>
          </li>
        </ul>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
const GRIDCOUNT = 42;

export default {
  name: "v2-component-calendar",

  props: {
    range: {
      type: [Array],
      default: [-1, 0, 1]
    },
    currentDate: {
      type: [Date, String],
      default: new Date()
    }
  },
  data() {
    return {
      model:{
        layoutClass:''
      },
      selectedMonth: "",
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
      ]
    };
  },
  created() {
    this.currentMonth = new Date(this.currentDate).getMonth() + 1;
    this.selectedMonth = this.genMonthLabel(0);
  },
  methods: {
    formatMonthLabel(month) {
      return this.language.indexOf("zh") !== -1
        ? `${month}月`
        : `${this.months[month - 1]}`;
    },

    genMonthLabel(cursor) {
      return this.formatMonthLabel(this.getMonthNum(cursor));
    },
    genMonthDate(cursor) {
      const date = new Date(this.currentDate);
      date.setMonth(date.getMonth() + cursor);
      return date;
    },

    getMonthNum(cursor) {
      //如果是0的话，则为1
      const months = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

      return months[(this.currentMonth + cursor + 12) % 12];
    },

    //得到这个月的总天数
    getThisMonthDays: function(year, month) {
      return new Date(year, month, 0).getDate();
    },

    //得到这个月的第一天对应的星期数
    getFirstDayOfWeek: function(year, month) {
      return new Date(year, month - 1, 1).getDay() || 7;
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

    genDaysByMonth(date) {
      let days = [];

      const currentDay = date.getDate();
      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;

      const currentWeek = date.getDay() || 7; // 1...6,0

      let str = this.formatDate(currentYear, currentMonth, currentDay);
      const monthDays = this.getThisMonthDays(currentYear, currentMonth);
      const firstDayWeek = this.getFirstDayOfWeek(currentYear, currentMonth);

      //上个月的最后几天
      for (let i = firstDayWeek - 2; i >= 0; i--) {
        let d = new Date(str);
        d.setDate(-i);
        days.push({ day: d, checked: true, disabled: true });
      }

      //当月
      for (let i = 1; i <= monthDays; i++) {
        let d = new Date(str);
        d.setDate(i);
        // this.days.push(d);
        days.push({ day: d, checked: false, disabled: false });
      }

      //下个月
      if (currentMonth === 12) {
        str = this.formatDate(currentYear + 1, 1, currentDay);
      } else {
        str = this.formatDate(currentYear, currentMonth + 1, currentDay);
      }
      const nextMonthDays = GRIDCOUNT - days.length;
      for (let i = 1; i <= nextMonthDays; i++) {
        let d = new Date(str);
        d.setDate(i);
        days.push({ day: d, checked: true, disabled: true });
      }

      return days;
    }
  }
};
</script>

<style lang="scss">
@import "../../../element-variables";

.aweb4-calendar {
  overflow: hidden;

  .weekdays {
    margin: 0;
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > span {
      display: inline-block;
      width: 14.2%;
      text-align: center;
      color: #888;
    }
  }
  .days {
    padding: 0;
    background: #fff;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    > li {
      list-style-type: none;
      display: inline-block;
      width: 14.2%;
      text-align: center;
      color: #333;
      margin: 5px 0;
      > div {
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

        > i {
          display: inline-block;
          vertical-align: middle;
          height: 22px;
          font-size: 20px;
        }
        > span {
          display: block;
          height: 22px;
        }
      }
    }
  }
}
</style>