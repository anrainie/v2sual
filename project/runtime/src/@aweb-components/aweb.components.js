        
          import v2ComponentBtn  from '@v2-components/v2-component-btn/index.vue';
import v2ComponentCard  from '@v2-components/v2-component-card/index.vue';
import v2ComponentCarousel  from '@v2-components/v2-component-carousel/index.vue';
import v2ComponentEchart  from '@v2-components/v2-component-echart/index.vue';
import v2ComponentEtable  from '@v2-components/v2-component-etable/index.vue';
import v2ComponentCalendar  from '@v2-components/v2-component-calendar/index.vue';
import v2ComponentIcon  from '@v2-components/v2-component-icon/index.vue';
import v2ComponentImage  from '@v2-components/v2-component-image/index.vue';
import v2ComponentSteps  from '@v2-components/v2-component-steps/index.vue';
import v2ComponentTable  from '@v2-components/v2-component-table/index.vue';
import v2ComponentTabs  from '@v2-components/v2-component-tabs/index.vue';
  import v2ComponentText  from '@v2-components/v2-component-text/index.vue';
import v2ComponentTextValue  from '@v2-components/v2-component-text-value/index.vue';
import v2ComponentTree  from '@v2-components/v2-component-tree/index.vue';

import v2EchartBar  from '@v2-components/v2-echart-bar/index.vue';
import v2FormCascader  from '@v2-components/v2-form-cascader/index.vue';
import v2EchartLine  from '@v2-components/v2-echart-line/index.vue';
import v2FormCheckbox  from '@v2-components/v2-form-checkbox/index.vue';
import v2FormDatepicker  from '@v2-components/v2-form-datepicker/index.vue';
import v2FormEditor  from '@v2-components/v2-form-editor/index.vue';
import v2FormInput  from '@v2-components/v2-form-input/index.vue';
import v2FormInputnumber  from '@v2-components/v2-form-inputnumber/index.vue';
import v2FormRadio  from '@v2-components/v2-form-radio/index.vue';
import v2FormSelect  from '@v2-components/v2-form-select/index.vue';
import v2FormSlider  from '@v2-components/v2-form-slider/index.vue';
import v2FormSwitch  from '@v2-components/v2-form-switch/index.vue';
import v2FormTimepicker  from '@v2-components/v2-form-timepicker/index.vue';
import v2FormUpload  from '@v2-components/v2-form-upload/index.vue';
import v2Layout  from '@v2-components/v2-layout/index.vue';
import v2LayoutEditor  from '@v2-components/v2-layout/editor.vue';
import v2MobileButton  from '@v2-components/v2-mobile-button/index.vue';
import v2MobileImage  from '@v2-components/v2-mobile-image/index.vue';
import v2MobileInput  from '@v2-components/v2-mobile-input/index.vue';
import v2FormTransfer  from '@v2-components/v2-form-transfer/index.vue';
import v2MobileRadio  from '@v2-components/v2-mobile-radio/index.vue';
import v2MobileSteps  from '@v2-components/v2-mobile-steps/index.vue';
import v2MobileUploader  from '@v2-components/v2-mobile-uploader/index.vue';
import v2Page  from '@v2-components/v2-page/index.vue';
import v2Switchable  from '@v2-components/v2-switchable/index.vue';
import v2EditorSwitch  from '@v2-components/v2-switchable/switchEditor.vue'

import $get  from '../../../pipe/src/main/webapp/plugins/app.$get';
import $post  from '../../../pipe/src/main/webapp/plugins/app.$post';
import animate  from '../../../pipe/src/main/webapp/plugins/app.animate';
import animateKill  from '../../../pipe/src/main/webapp/plugins/app.animateKill';
import close  from '../../../pipe/src/main/webapp/plugins/app.close';
import get  from '../../../pipe/src/main/webapp/plugins/app.get';
import getAfaData  from '../../../pipe/src/main/webapp/plugins/app.getAfaData';
import getExcelData  from '../../../pipe/src/main/webapp/plugins/app.getExcelData';
import gt  from '../../../pipe/src/main/webapp/plugins/app.gt';
import map  from '../../../pipe/src/main/webapp/plugins/app.map';
import open  from '../../../pipe/src/main/webapp/plugins/app.open'

          let app = {
            $get,
	$post,
	animate,
	animateKill,
	close,
	get,
	getAfaData,
	getExcelData,
	gt,
	map,
	open
          };

          window.pipe = app;

          export default {
            v2ComponentBtn,
	v2ComponentCard,
	v2ComponentCarousel,
	v2ComponentEchart,
	v2ComponentEtable,
	v2ComponentCalendar,
	v2ComponentIcon,
	v2ComponentImage,
	v2ComponentSteps,
	v2ComponentTable,
	v2ComponentTabs,
	v2ComponentText,
	v2ComponentTextValue,
	v2ComponentTree,
	v2EchartBar,
	v2FormCascader,
	v2EchartLine,
	v2FormCheckbox,
	v2FormDatepicker,
	v2FormEditor,
	v2FormInput,
	v2FormInputnumber,
	v2FormRadio,
	v2FormSelect,
	v2FormSlider,
	v2FormSwitch,
	v2FormTimepicker,
	v2FormUpload,
	v2Layout,
	v2LayoutEditor,
	v2MobileButton,
	v2MobileImage,
	v2MobileInput,
	v2FormTransfer,
	v2MobileRadio,
	v2MobileSteps,
	v2MobileUploader,
	v2Page,
	v2Switchable,
	v2EditorSwitch
          }