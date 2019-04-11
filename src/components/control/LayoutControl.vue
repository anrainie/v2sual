<template>
  <div>
    <el-row>
      <el-button class="el-icon-plus" size="mini" @click="add"></el-button>
    </el-row>
    <el-row>
      <draggable v-model="model.children" handle=".handle" @change="change">
        <transition-group>
          <div v-for="(c,index) in model.children" :key="c?c.id:'i-'+index">
            <el-row>
              <el-col class="handle" :span="4">
                <i class="el-icon-sort"></i>
              </el-col>
              <el-col :span="9">{{c?c.component:'Empty'}}</el-col>
              <el-col :span="8">
                <input style="width:25px;" v-model="model.layout[index]">%
              </el-col>
              <el-col :span="1">
                <i class="el-icon-close" style="color:red" @click="remove(index)"></i>
              </el-col>
            </el-row>
          </div>
        </transition-group>
      </draggable>
    </el-row>
  </div>
</template>
<script>
import draggable from "vuedraggable";
export default {
  props: ["store"],
  methods: {
    add() {
      this.model.children.push(null);
      this.model.layout.push(10);
    },
    remove(index) {
      this.model.children.splice(index, 1);
      this.model.layout.splice(index, 1);
    },
    change(e) {
      if (e && e.moved) {
        let { oldIndex, newIndex } = e.moved;
        //位置交换
        this.model.layout.splice(
          oldIndex,
          1,
          this.model.layout.splice(newIndex, 1, this.model.layout[oldIndex])
        );
      }
    }
  },
  computed: {
    wid() {
      let st = this.store.state.UIData.selectTarget;

      if (!st || st.length != 1) {
        return null;
      }
      return st[0];
    },
    model() {
      return this.store.getters.model(this.wid) || {};
    }
  },
  components: {
    draggable
  }
};
</script>
<style>
.handle {
  float: left;
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
