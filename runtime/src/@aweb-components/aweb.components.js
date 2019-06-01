        
          import v2ComponentBtn  from './v2-component-btn';
import v2ComponentEtable  from './v2-component-etable';
import v2ComponentTable  from './v2-component-table';
import v2EchartBar  from './v2-echart-bar';
import v2EchartLine  from './v2-echart-line';
import v2FormCascader  from './v2-form-cascader';
import v2FormCheckbox  from './v2-form-checkbox';
import v2FormDatepicker  from './v2-form-datepicker';
import v2FormInput  from './v2-form-input';
import v2FormInputnumber  from './v2-form-inputnumber';
import v2FormRadio  from './v2-form-radio';
import v2FormSelect  from './v2-form-select';
import v2FormSlider  from './v2-form-slider';
import v2FormSwitch  from './v2-form-switch';
import v2FormTimepicker  from './v2-form-timepicker';
import v2FormTransfer  from './v2-form-transfer';
import v2FormUpload  from './v2-form-upload';
import v2LayoutColctn  from './v2-layout-colctn';
import v2LayoutRowctn  from './v2-layout-rowctn'

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
	v2ComponentEtable,
	v2ComponentTable,
	v2EchartBar,
	v2EchartLine,
	v2FormCascader,
	v2FormCheckbox,
	v2FormDatepicker,
	v2FormInput,
	v2FormInputnumber,
	v2FormRadio,
	v2FormSelect,
	v2FormSlider,
	v2FormSwitch,
	v2FormTimepicker,
	v2FormTransfer,
	v2FormUpload,
	v2LayoutColctn,
	v2LayoutRowctn
          }