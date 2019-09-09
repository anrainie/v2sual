        
        import v2ComponentBtn  from '@v2-components/v2-component-btn';
import v2ComponentCalendar  from '@v2-components/v2-component-calendar';
import v2ComponentCard  from '@v2-components/v2-component-card';
import v2ComponentEchart  from '@v2-components/v2-component-echart';
import v2ComponentCarousel  from '@v2-components/v2-component-carousel';
import v2ComponentIcon  from '@v2-components/v2-component-icon';
import v2ComponentEtable  from '@v2-components/v2-component-etable';
import v2ComponentSteps  from '@v2-components/v2-component-steps';
import v2ComponentText  from '@v2-components/v2-component-text';
import v2ComponentTable  from '@v2-components/v2-component-table';
import v2ComponentTextValue  from '@v2-components/v2-component-text-value';
import v2CtnOrder  from '@v2-components/v2-ctn-order';
import v2EditorOrderCtn  from '@v2-components/v2-ctn-order/orderCtnEditor.vue';
import v2ComponentTree  from '@v2-components/v2-component-tree';
import v2EchartBar  from '@v2-components/v2-echart-bar';
import v2CtnXy  from '@v2-components/v2-ctn-xy';
import v2EditorXYCtn  from '@v2-components/v2-ctn-xy/xyCtnEditor.vue';
import v2ComponentImage  from '@v2-components/v2-component-image';
import v2FormCheckbox  from '@v2-components/v2-form-checkbox';
import v2EchartLine  from '@v2-components/v2-echart-line';
import v2FormCascader  from '@v2-components/v2-form-cascader';
import v2FormDatepicker  from '@v2-components/v2-form-datepicker';
import v2FormInput  from '@v2-components/v2-form-input';
import v2ComponentTabs  from '@v2-components/v2-component-tabs';
import v2FormInputnumber  from '@v2-components/v2-form-inputnumber';
import v2FormSelect  from '@v2-components/v2-form-select';
import v2FormRadio  from '@v2-components/v2-form-radio';
import v2FormSlider  from '@v2-components/v2-form-slider';
import v2FormTimepicker  from '@v2-components/v2-form-timepicker';
import v2FormUpload  from '@v2-components/v2-form-upload';
import v2FormSwitch  from '@v2-components/v2-form-switch';
import v2FormTransfer  from '@v2-components/v2-form-transfer';
import v2FormEditor  from '@v2-components/v2-form-editor';
import v2Layout  from '@v2-components/v2-layout';
import v2LayoutEditor  from '@v2-components/v2-layout/editor.vue';
import v2MobileButton  from '@v2-components/v2-mobile-button';
import v2MobileRadio  from '@v2-components/v2-mobile-radio';
import v2MobileUploader  from '@v2-components/v2-mobile-uploader';
import v2MobileSteps  from '@v2-components/v2-mobile-steps';
import v2Switchable  from '@v2-components/v2-switchable';
import v2EditorSwitch  from '@v2-components/v2-switchable/switchEditor.vue';
import v2Page  from '@v2-components/v2-page';
import v2MobileImage  from '@v2-components/v2-mobile-image';
import v2MobileInput  from '@v2-components/v2-mobile-input';
import v2VdaTabs  from '../v2Components/v2-vda-tabs';
import v2VdaChart  from '../v2Components/v2-vda-chart';
import v2Vda3dpie  from '../v2Components/v2-vda-3dpie';
import v2VdaNumberCell  from '../v2Components/v2-vda-number-cell';
import v2VdaPrettyGlobal  from '../v2Components/v2-vda-pretty-global';
import v2ComponentWeather  from '../v2Components/v2-component-weather';
import v2ComponentDigitroll  from '../v2Components/v2-component-digitroll'
  
        import animate  from '@v2-pipe/animate';
import animateKill  from '@v2-pipe/animateKill';
import getAfaData  from '@v2-pipe/getAfaData';
import close  from '@v2-pipe/close';
import getExcelData  from '@v2-pipe/getExcelData';
import gt  from '@v2-pipe/gt';
import map  from '@v2-pipe/map';
import open  from '@v2-pipe/open';
import average  from '../../pipe/average';
import filter  from '../../pipe/filter';
import addKey  from '../../pipe/addKey';
import getValue  from '../../pipe/getValue';
import mapping  from '../../pipe/mapping';
import getMax  from '../../pipe/getMax';
import summation  from '../../pipe/summation';
import vda  from '../../pipe/vda'
  
        let app = {
          animate,
	animateKill,
	getAfaData,
	close,
	getExcelData,
	gt,
	map,
	open,
	average,
	filter,
	addKey,
	getValue,
	mapping,
	getMax,
	summation,
	vda
        };
  
        window.pipe = app;
  
        export default {
          v2ComponentBtn,
	v2ComponentCalendar,
	v2ComponentCard,
	v2ComponentEchart,
	v2ComponentCarousel,
	v2ComponentIcon,
	v2ComponentEtable,
	v2ComponentSteps,
	v2ComponentText,
	v2ComponentTable,
	v2ComponentTextValue,
	v2CtnOrder,
	v2EditorOrderCtn,
	v2ComponentTree,
	v2EchartBar,
	v2CtnXy,
	v2EditorXYCtn,
	v2ComponentImage,
	v2FormCheckbox,
	v2EchartLine,
	v2FormCascader,
	v2FormDatepicker,
	v2FormInput,
	v2ComponentTabs,
	v2FormInputnumber,
	v2FormSelect,
	v2FormRadio,
	v2FormSlider,
	v2FormTimepicker,
	v2FormUpload,
	v2FormSwitch,
	v2FormTransfer,
	v2FormEditor,
	v2Layout,
	v2LayoutEditor,
	v2MobileButton,
	v2MobileRadio,
	v2MobileUploader,
	v2MobileSteps,
	v2Switchable,
	v2EditorSwitch,
	v2Page,
	v2MobileImage,
	v2MobileInput,
	v2VdaTabs,
	v2VdaChart,
	v2Vda3dpie,
	v2VdaNumberCell,
	v2VdaPrettyGlobal,
	v2ComponentWeather,
	v2ComponentDigitroll
        }