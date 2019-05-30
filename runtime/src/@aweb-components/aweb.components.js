        
import avComponentBtn  from './av-component-btn';
import avComponentETable  from './av-component-eTable';
import avComponentTable  from './av-component-table';
import avEchartBar  from './av-echart-bar';
import avEchartLine  from './av-echart-line';
import avFormCascader  from './av-form-cascader';
import avFormCheckbox  from './av-form-checkbox';
import avFormDatePicker  from './av-form-datePicker';
import avFormInput  from './av-form-input';
import avFormInputNumber  from './av-form-inputNumber';
import avFormRadio  from './av-form-radio';
import avFormSelect  from './av-form-select';
import avFormSlider  from './av-form-slider';
import avFormSwitch  from './av-form-switch';
import avFormTimePicker  from './av-form-timePicker';
import avFormTransfer  from './av-form-transfer';
import avFormUpload  from './av-form-upload';
import avLayoutColctn  from './av-layout-colctn';
import avLayoutRowctn  from './av-layout-rowctn'

import get  from '../../../pipe/src/main/webapp/plugins/app.get';
import getAfaData  from '../../../pipe/src/main/webapp/plugins/app.getAfaData';
import getExcelData  from '../../../pipe/src/main/webapp/plugins/app.getExcelData';

let app = {
	get,
	getAfaData,
	getExcelData
};
          
window.pipe = app;

export default {
	avComponentBtn,
	avComponentETable,
	avComponentTable,
	avEchartBar,
	avEchartLine,
	avFormCascader,
	avFormCheckbox,
	avFormDatePicker,
	avFormInput,
	avFormInputNumber,
	avFormRadio,
	avFormSelect,
	avFormSlider,
	avFormSwitch,
	avFormTimePicker,
	avFormTransfer,
	avFormUpload,
	avLayoutColctn,
	avLayoutRowctn
}
