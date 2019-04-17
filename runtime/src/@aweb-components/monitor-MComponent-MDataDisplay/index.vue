<template>
<div class="aweb4-datadisplay" data-widget-type="aweb4DataDispla" >
	<div ref="listWrap"  class="aweb4-datadisplay-list" >
		<div class="list-ctn">

				<!--  列表总标题 -->
				<div v-if="model.data.listTitle" v-text="model.data.listTitle"></div>

		

				<!-- <div class="list-pull-up" v-if="hasRefresh && refreshType=='top'">
					<span v-show="bottomStatus === 'drop'" class="pull-drop">{{bottomText}}</span>
					<span v-show="bottomStatus === 'loading'" class="pull-loading"></span>
				</div> -->
			</div>
		</div>
	</div>
<!-- </div> -->
</template>

<script>
// import { widget, composite } from "../../assets/js/v2-view.js";
// import { edit } from "../../assets/js/edit.js";

export default {
  name: "monitor-MComponent-MDataDisplay",
	// mixins: [widget, edit],
	props:['model'],
  data() {
    return {
     
    };
  },
  created: function() {
  

  },
  mounted: function() {
		 console.log(this.model);
	},
  watch: {},
  methods: {
    
  }
 
};
</script>