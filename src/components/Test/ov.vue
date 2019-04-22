<template>
  <div>
    <label>
      输入1：
      <input v-model="value1">
    </label>
    <label>
      输入2：
      <input v-model="value2">
    </label>
    <div :style="style">Hello World</div>
    <div>{{overview.color}}</div>
  </div>
</template>

<script>
const app = {
  greatThan(input1, input2) {
    return new Promise((res, rej) => {
      try {
        const i = parseFloat(input1);
        const j = parseFloat(input2);

        res(i > j);
      } catch (e) {
        rej(e);
      }
    });
  },

  lessThan(input1, input2) {
    return new Promise((res, rej) => {
      try {
        const i = parseFloat(input1);
        const j = parseFloat(input2);

        res(i < j);
      } catch (e) {
        rej(e);
      }
    });
  },

  not() {
    //TODO
  },

  and(input1, input2) {
    return new Promise(async (res, rej) => {
      let result = false;
      try {
        const result1 = await input1;
        const result2 = await input1;

        res(result1 && result2);
      } catch (e) {
        res(result);
      }
    });
  },

  or() {
    //TODO
  }
};

export default {
  data() {
    return {
      style: {
        color: "green"
      },
      value1: "1",
      value2: "2",

      overview: {
        color: 0
      }
    };
  },
  watch: {
    value1(val) {
      ++this.overview.color;
    },
    value2(val) {
      ++this.overview.color;
    },
    "overview.color"(val) {
      const context = this;

      app
        .and(
          app.greatThan(context.value1, 10),
          app.lessThan(context.value2, 100)
        )
        .then(result => (context.style.color = result ? "red" : "green"))
        .catch(e => console.log(e));
    }
  }
};
</script>

