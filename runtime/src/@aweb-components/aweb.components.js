        
          import v2ComponentBtn  from './v2-component-btn/index.vue';
import v2ComponentCard  from './v2-component-card/index.vue';
import v2ComponentEchart  from './v2-component-echart/index.vue';
import v2ComponentIcon  from './v2-component-icon/index.vue';
import v2ComponentEtable  from './v2-component-etable/index.vue';
import v2ComponentTable  from './v2-component-table/index.vue';
import v2ComponentText  from './v2-component-text/index.vue';
import v2ComponentTextValue  from './v2-component-text-value/index.vue';
import v2EchartBar  from './v2-echart-bar/index.vue';
import v2EchartLine  from './v2-echart-line/index.vue';
import v2FormCascader  from './v2-form-cascader/index.vue';
import v2FormCheckbox  from './v2-form-checkbox/index.vue';
import v2FormDatepicker  from './v2-form-datepicker/index.vue';
import v2FormInput  from './v2-form-input/index.vue';
import v2FormInputnumber  from './v2-form-inputnumber/index.vue';
import v2FormRadio  from './v2-form-radio/index.vue';
import v2FormSlider  from './v2-form-slider/index.vue';
import v2FormSwitch  from './v2-form-switch/index.vue';
import v2FormSelect  from './v2-form-select/index.vue';
import v2FormTimepicker  from './v2-form-timepicker/index.vue';
import v2FormTransfer  from './v2-form-transfer/index.vue';
import v2FormUpload  from './v2-form-upload/index.vue';
import v2LayoutRowctn  from './v2-layout-rowctn/index.vue';
import v2LayoutColctn  from './v2-layout-colctn/index.vue';
import v2LayoutEditor  from './v2-layout-colctn/editor.vue'
import get  from '../../../pipe/src/main/webapp/plugins/app.get';
import getAfaData  from '../../../pipe/src/main/webapp/plugins/app.getAfaData';
import getExcelData  from '../../../pipe/src/main/webapp/plugins/app.getExcelData';
import gt  from '../../../pipe/src/main/webapp/plugins/app.gt';
import map  from '../../../pipe/src/main/webapp/plugins/app.map';
import open  from '../../../pipe/src/main/webapp/plugins/app.open'

          let app = {
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
	v2ComponentEchart,
	v2ComponentIcon,
	v2ComponentEtable,
	v2ComponentTable,
	v2ComponentText,
	v2ComponentTextValue,
	v2EchartBar,
	v2EchartLine,
	v2FormCascader,
	v2FormCheckbox,
	v2FormDatepicker,
	v2FormInput,
	v2FormInputnumber,
	v2FormRadio,
	v2FormSlider,
	v2FormSwitch,
	v2FormSelect,
	v2FormTimepicker,
	v2FormTransfer,
	v2FormUpload,
	v2LayoutRowctn,
	v2LayoutColctn,
	v2LayoutEditor
          }