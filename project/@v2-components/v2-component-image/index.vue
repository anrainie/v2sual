<template>
 
    <div class="picture"  :class="widgetClass" :style="model.commonStyle">
      <img ref="imgComponent" :src="outSrc" :width="model.v2Width" :height="model.v2Height">
    </div>
</template>
<script>
export default {
  name: "v2-component-image",
  data() {
    return {
      mode: "",
      id: 0
    };
  },
  computed: {
    outSrc() {
      let self = this;
      let src = (self.$store.getters.model(self.id)&&self.$store.getters.model(self.id).src)||'';


      src = src.replace('"').replace("'");
      if (self.mode === "edit") {
 
        return `v1/runtime/${src}`;
      } else if (self.mode === "runtime") {
        
        return `./${src}`;
      }
    }
  },
  methods:{
    changeSrc(val){
      this.$store.getters.model(this.id).src = val;
    }
  },
  beforeMount(){
    this.id = this.model.id;
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
      wrap.onmousedown = function(event){return false;}
    }
    console.log(self);
  }
};
</script>
<style lang="scss" scoped>
</style>
