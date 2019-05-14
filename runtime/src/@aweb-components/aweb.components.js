import avEchartBar from './av-echart-bar/index.vue';
import avEchartLine from './av-echart-line/index.vue';
import avComponentEtable from './av-component-eTable/index.vue';
import avFormCascader from './av-form-cascader/index.vue';
import avFormCheckbox from './av-form-checkbox/index.vue';
import avFormDatePicker from './av-form-datePicker/index.vue';
import avFormInput from './av-form-input/index.vue';
import avFormInputNumber from './av-form-inputNumber/index.vue';
import avFormRadio from './av-form-radio/index.vue';
import avFormSelect from './av-form-select/index.vue';
import avFormSlider from './av-form-slider/index.vue';
import avFormSwitch from './av-form-switch/index.vue';
import avFormTimePicker from './av-form-timePicker/index.vue';
import avFormTransfer from './av-form-transfer/index.vue';
import avFormUpload from './av-form-upload/index.vue';
import avLayoutColctn from './av-layout-colctn/index.vue';
import avLayoutRowctn from './av-layout-rowctn/index.vue';
import avLayoutEditor from './av-layout-colctn/editor.vue';
import avComponentTable from './av-component-table/index.vue';
import avComponentBtn from './av-component-btn/index.vue';
import getExcelData from '../../../pipe/src/main/webapp//plugins/app.getExcelData';

let app = {
	getExcelData
};

window.pipe = app;



export default {
	avEchartBar,
	avEchartLine,
	avComponentEtable,
	avFormCascader,
	avFormCheckbox,
	avFormDatePicker,
	avFormInputNumber,
	avFormInput,
	avFormRadio,
	avFormSelect,
	avFormSlider,
	avFormSwitch,
	avFormTimePicker,
	avFormTransfer,
	avFormUpload,
	avLayoutColctn,
  avLayoutRowctn,
  avLayoutEditor,
  avComponentTable,
  avComponentBtn
}
