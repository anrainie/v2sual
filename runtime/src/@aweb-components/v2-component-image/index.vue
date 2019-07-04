<template>
  <el-row :class="model.layoutClass">
    <div class="picture">
      <img ref="imgComponent" :src="outSrc" :width="model.width" :height="model.height">
    </div>
  </el-row>
</template>
<script>
export default {
  name: "v2-component-image",
  data() {
    return {
      mode: ""
    };
  },
  computed: {
    outSrc() {
      let self = this;

      if (self.mode === "edit") {
        debugger
        return `v1/runtime/${self.model.src}`;
      } else if (self.mode === "runtime") {
        debugger
        return `./${self.model.src}`;
      }
    }
  },
  methods:{
    changeSrc(val){
      this.model.src = val;
    }
  },
  mounted() {
    let self = this;
    let wrap = self.$refs.imgComponent;

    if (self.$ArrowDown && self.$ArrowLeft && self.$Tab) {
      self.mode = "runtime";
    } else {
      self.mode = "edit";
      wrap.ondragenter = event => {
        event.stopPropagation();
        event.preventDefault();
      };
      wrap.ondragover = event => {
        event.stopPropagation();
        event.preventDefault();
      };
      wrap.ondrop = event => {
        event.stopPropagation();
        event.preventDefault();
        let data = event.dataTransfer.files[0];
        let name = data.name;
        let type = data.type;
        let reader = new FileReader();
        if (!type.startsWith("image")) {
          alert("只支持上传图片");
          return null;
        }
        reader.readAsDataURL(data);
        reader.onload = e => {
          self
            .apis("/v1/page/upload", {
              params: {
                name: name,
                event: e,
                type: type,
                result: e.target.result
              }
            })
            .then(res => {
              console.log("成功上传至" + res.path);
              self.changeSrc(`img/${name}`);
            })
            .catch(rej => {
              console.log("上传失败:" + rej);
            });
        };
      };
    }
    console.log(self);
  }
};
</script>
<style lang="less" scoped>
</style>
