<template>
  <div class="eb-calendar" :class="widgetClass">
    <el-button-group class="is-divide">
      <el-button type="text" icon="el-icon-plus" ref="_op_ebankCalendar_addNote">添加</el-button>
      <el-button type="text" icon="el-icon-setting" ref="_op_ebankCalendar_setting">设置</el-button>
    </el-button-group>

    <el-tabs v-model="selectedMonth" @tab-click="handleMonth">
      <el-tab-pane
        v-for="month in range"
        :key="month"
        :label="genMonthLabel(month)"
        :name="genMonthLabel(month)"
      >
        <template v-if="isCalendarMode">
          <div class="weekdays">
            <div v-for="val in weeks" :key="val">{{val}}</div>
          </div>
          <ul class="days">
            <li
              v-for="(date,index) in genDaysByMonth(genMonthDate(month))"
              :key="index"
              :class="[{'is-disabled':date.disabled}, {'is-today': date.isToday}, {'has-note': date.hasNote}]"
              @click="handleDate(date)"
            >
              <div class="day">{{ date.day.getDate() }}</div>
            </li>
          </ul>
        </template>

        <div class="eb-calendar__notes" v-else>
          <template v-if="!isNoteEmpty">
            <div class="eb-paragraph" v-for="(note, n_index) in currentNotesCopy" :key="n_index">
              <h3 class="eb-paragraph__header eb-paragraph__header--divider">
                <p>{{note.header}}</p>
              </h3>
              <div class="eb-paragraph__ctt">
                <p class v-for="(p, p_index) in note.paragraphs" :key="p_index">{{p}}</p>
              </div>
            </div>
          </template>

          <div class="eb-calendar__notes--empty" v-else>无便签记事</div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div class="note-handle clearfix">
      <div class="left">
        <el-button
          type="text"
          icon="el-icon-time"
          v-if="isCalendarMode && isCurrentmonth"
          @click="toggleViewMode(3)"
        >3 天提醒</el-button>
        <!-- <span>请求正在处理,请稍后...</span> -->
      </div>
      <div class="right">
        <el-button type="text" @click="toggleViewMode">{{isCalendarMode ? '只看提醒' : '返回日历'}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
const GRIDCOUNT = 42;

export default {
  name: "v2-ebank-calendar",

  // props: {
  //   // range: {
  //   //   type: [Array],
  //   //   default: [-1, 0, 1]
  //   // },
  //   // currentDate: {
  //   //   type: [Date, String],
  //   //   default: new Date()
  //   // },
  //   // interface: {  // 不同月份数据的接口(如果直接从父元素获取所有数据则不需要考虑接收数据接口)
  //   //   type: [Array],
  //   //   default: []
  //   // },
  //   // notes: {
  //   //   type: [Array],
  //   //   default: []
  //   // },
  //   // isCalendarMode: {
  //   //   type: Boolean,
  //   //   default: true
  //   // },
  // },
  data() {
    return {
      range: [-1, 0, 1],
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
      language: "zh-CN",
      currentDate: new Date(),
      selectedMonth: "",
      selectMonthNotes: [], // 激活月份的便签数据,用于给 currentNotesCopy 提供数据处理
      currentNotesCopy: [], // 便签模式下实际需要显示的数据
      isCalendarMode: true, // 同于切换 `日历模式` 和 `便签模式`
      isCurrentmonth: true, // 用于和 `isCalendarMode` 配合支持 `3天提醒` 的逻辑
      todayFormat: "" // 用来标记今天 && 配合计算近三天的便签数据
      // isNoteEmpty: false, // 便签为空的标记 => 放到计算属性中,和 currentNotesCopy.length 关联
    };
  },
  computed: {
    notes() {
      let notes = [
        [
          { day: "2019-07-01", header: "07-01", paragraphs: ["便签事件1"] },
          { day: "2019-07-07", header: "07-07", paragraphs: ["便签事件2"] },
          { day: "2019-07-12", header: "07-12", paragraphs: ["便签事件3"] },
          { day: "2019-07-22", header: "07-22", paragraphs: ["便签事件4"] },
          { day: "2019-07-29", header: "07-29", paragraphs: ["便签事件5"] },
          { day: "2019-07-30", header: "07-30", paragraphs: ["便签事件6"] }
        ],
        [
          { day: "2019-08-01", header: "08-01", paragraphs: ["便签事件1"] },
          { day: "2019-08-08", header: "08-08", paragraphs: ["便签事件2"] },
          { day: "2019-08-12", header: "08-12", paragraphs: ["便签事件3"] },
          { day: "2019-08-22", header: "08-22", paragraphs: ["便签事件4"] },
          { day: "2019-08-29", header: "08-29", paragraphs: ["便签事件5"] },
          { day: "2019-08-30", header: "08-30", paragraphs: ["便签事件6"] }
        ],
        [
          { day: "2019-09-01", header: "09-01", paragraphs: ["便签事件1"] },
          { day: "2019-09-09", header: "09-09", paragraphs: ["便签事件2"] },
          { day: "2019-09-12", header: "09-12", paragraphs: ["便签事件3"] },
          { day: "2019-09-22", header: "09-22", paragraphs: ["便签事件4"] },
          { day: "2019-09-29", header: "09-29", paragraphs: ["便签事件5"] },
          { day: "2019-09-30", header: "09-30", paragraphs: ["便签事件6"] }
        ]
      ];

      return this.model.notes && this.model.notes.length
        ? this.model.notes
        : notes;
    },
    isNoteEmpty() {
      return !this.currentNotesCopy.length;
    }
  },
  created() {
    this.todayFormat = this.formatDate(
      this.currentDate.getFullYear(),
      this.currentDate.getMonth() + 1,
      this.currentDate.getDate()
    );

    this.currentMonth = new Date(this.currentDate).getMonth() + 1;
    this.selectedMonth = this.genMonthLabel(0);
  },
  mounted() {
    this.selectMonthNotes = [...this.notes[1]];
    this.currentNotesCopy = [...this.selectMonthNotes];
  },
  methods: {
    handleMonth(tab, event) {
      // console.log('tab');
      // console.log(tab);

      // 判断是否当前月份,用于近3天提醒的交互
      this.isCurrentmonth = tab.index == 1 ? true : false;

      this.selectMonthNotes = [...this.notes[tab.index]];
      this.currentNotesCopy = [...this.selectMonthNotes];
    },
    handleDate(data) {
      if (data.hasNote) {
        this.toggleViewMode(data.day);
      }
    },
    toggleViewMode(dateRange) {
      // this.viewMode = this.viewMode === 'calendar' ? 'note' : 'calendar';
      this.isCalendarMode = !this.isCalendarMode;
      this.currentNotesCopy.splice(0);

      // 当没有传递 dateRange 参数时,会默认当做 event 对象处理,所以一定要明确到 Date 实例
      // 查看具体日期的便签
      if (dateRange instanceof Date) {
        let targetDayFormat = this.formatDate(
          dateRange.getFullYear(),
          dateRange.getMonth() + 1,
          dateRange.getDate()
        );

        for (let i = 0; i < this.selectMonthNotes.length; i++) {
          if (this.selectMonthNotes[i].day === targetDayFormat) {
            this.$set(this.currentNotesCopy, 0, this.selectMonthNotes[i]);
          }
        }
      }
      // 查看近 N 天便签
      else if (typeof dateRange === "number") {
        let recentNotes = this.selectMonthNotes
          .filter(item => {
            return item.day > this.todayFormat;
          })
          .splice(0, dateRange);

        this.currentNotesCopy = [...recentNotes];
      }
      // 查看所有便签
      else {
        this.currentNotesCopy = [...this.selectMonthNotes];
      }
    },
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

      const currentWeek = date.getDay() || 7; // 1...6,0

      const currentYear = date.getFullYear();
      const currentMonth = date.getMonth() + 1;
      const currentDay = date.getDate();

      let dateFormat = this.formatDate(currentYear, currentMonth, currentDay);

      // console.log('date');
      // console.log(date);

      const monthDays = this.getThisMonthDays(currentYear, currentMonth);
      const firstDayWeek = this.getFirstDayOfWeek(currentYear, currentMonth);

      //上个月的最后几天
      for (let i = firstDayWeek - 2; i >= 0; i--) {
        let d = new Date(dateFormat);
        d.setDate(-i);
        days.push({ day: d, checked: true, disabled: true });
      }

      //当月
      for (let i = 1; i <= monthDays; i++) {
        let d = new Date(dateFormat);
        d.setDate(i);

        // console.log('d');
        // console.log(d);

        let _day = {
          day: d,
          checked: false,
          disabled: false,
          isToday: false,
          hasNote: false
        };

        // let _dFormat = d.toString().split(' ').splice(0, 4).join(' ');
        // let _currentDate = this.currentDate.toString().split(' ').splice(0, 4).join(' ');
        // let _currentDate = this.formatDate(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());

        let _dFormat = this.formatDate(
          d.getFullYear(),
          d.getMonth() + 1,
          d.getDate()
        );

        // 标记今天
        if (_dFormat === this.todayFormat) {
          _day.isToday = true;
        }

        // 标记记事(一定要先对数据的合法性进行判断,否则会导致一些意外的错误)
        // console.log('this.selectMonthNotes')
        // console.log(this.selectMonthNotes)
        if (this.selectMonthNotes && this.selectMonthNotes.length) {
          this.selectMonthNotes.forEach(item => {
            if (_dFormat === item.day) {
              _day.hasNote = true;
            }
          });
        }

        // days.push({ day: d, checked: false, disabled: false });
        days.push(_day);
      }

      //下个月
      if (currentMonth === 12) {
        dateFormat = this.formatDate(currentYear + 1, 1, currentDay);
      } else {
        dateFormat = this.formatDate(currentYear, currentMonth + 1, currentDay);
      }
      const nextMonthDays = GRIDCOUNT - days.length;
      for (let i = 1; i <= nextMonthDays; i++) {
        let d = new Date(dateFormat);
        d.setDate(i);
        days.push({ day: d, checked: true, disabled: true });
      }

      return days;
    }
  }
};
</script>

<style lang="scss">
.eb-calendar {
  position: relative;
  // overflow: hidden;

  .el-button-group {
    position: absolute;
    right: 15px;
    z-index: 2;

    button {
      font-size: 12px;
    }
  }
  .is-divide {
    .el-button:not(:last-child) {
      &::after {
        content: "";
        display: inline-block;
        margin: 0 8px;
        width: 5px;
        height: 12px;
        vertical-align: middle;
        background: #455ecb;
        transform: scale(0.2, 1); // 对上面的宽度进行缩放,解决1像素显示不一致
      }
    }
  }

  .el-tabs__nav {
    margin-left: 15px;
  }
  .el-tabs__header {
    margin-bottom: 5px;
  }
  .el-tabs__item {
    // height: 36px;
    // font-size: 13px;
  }
  .weekdays {
    height: 30px;
    line-height: 30px;
    // padding: 5px 0 0;
    // padding: 5px 0;
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;

    > div {
      display: inline-block;
      width: 14.2857%;
      text-align: center;
      font-size: 13px;
      color: #888;
    }
  }
  .days {
    // display: flex;
    // flex-wrap: wrap;
    // justify-content: space-around;

    > li {
      display: inline-block;
      width: 14.2857%;
      // height: 30px;
      // line-height: 30px;
      list-style: none;
      text-align: center;
      font-size: 12px;
      color: #333;

      .day {
        height: 30px;
        line-height: 30px;
        // box-sizing: border-box;
        // margin: 0 auto;
        // border-radius: 50%;
        // border: 1px solid transparent;
      }

      &.is-disabled {
        color: #ccc;
      }
      &.is-today {
        color: #fff;
        position: relative;

        &::before {
          content: "";
          display: block;
          position: absolute;
          top: 5px;
          left: 50%;
          margin-left: -10px;
          width: 20px;
          height: 20px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 50%;
        }

        .day {
          position: relative;
          z-index: 2;
        }
      }
      &.has-note {
        position: relative;
        cursor: pointer;

        &::after {
          content: "";
          display: block;
          position: absolute;
          bottom: 4px;
          left: 50%;
          margin-left: -2px;
          width: 4px;
          height: 4px;
          background: #455ecb;
          border-radius: 50%;
        }
      }
    }
  }

  .eb-calendar__notes {
    height: 210px;
    overflow-y: auto;
  }

  .eb-calendar__notes--empty {
    line-height: 200px;
    text-align: center;
    font-size: 20px;
    color: #ccc;
  }

  .note-handle {
    padding: 0 10px;
    background: #f8f8f8;

    .left {
      float: left;
    }
    .right {
      float: right;
    }
  }
}
</style>
