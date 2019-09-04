        
        import v2ComponentCard  from '@v2-components/v2-component-card';
import v2ComponentCalendar  from '@v2-components/v2-component-calendar';
import v2ComponentEchart  from '@v2-components/v2-component-echart';
import v2ComponentCarousel  from '@v2-components/v2-component-carousel';
import v2ComponentBtn  from '@v2-components/v2-component-btn';
import v2ComponentIcon  from '@v2-components/v2-component-icon';
import v2ComponentImage  from '@v2-components/v2-component-image';
import v2ComponentSteps  from '@v2-components/v2-component-steps';
import v2ComponentText  from '@v2-components/v2-component-text';
import v2ComponentTabs  from '@v2-components/v2-component-tabs';
import v2ComponentTextValue  from '@v2-components/v2-component-text-value';
import v2ComponentTable  from '@v2-components/v2-component-table';
import v2CtnOrder  from '@v2-components/v2-ctn-order';
import v2EditorOrderCtn  from '@v2-components/v2-ctn-order/orderCtnEditor.vue';
import v2ComponentEtable  from '@v2-components/v2-component-etable';
import v2ComponentTree  from '@v2-components/v2-component-tree';
import v2EchartBar  from '@v2-components/v2-echart-bar';
import v2EchartLine  from '@v2-components/v2-echart-line';
import v2CtnXy  from '@v2-components/v2-ctn-xy';
import v2EditorXYCtn  from '@v2-components/v2-ctn-xy/xyCtnEditor.vue';
import v2FormCheckbox  from '@v2-components/v2-form-checkbox';
import v2FormCascader  from '@v2-components/v2-form-cascader';
import v2FormEditor  from '@v2-components/v2-form-editor';
import v2FormInput  from '@v2-components/v2-form-input';
import v2FormDatepicker  from '@v2-components/v2-form-datepicker';
import v2FormInputnumber  from '@v2-components/v2-form-inputnumber';
import v2FormSelect  from '@v2-components/v2-form-select';
import v2FormRadio  from '@v2-components/v2-form-radio';
import v2FormTransfer  from '@v2-components/v2-form-transfer';
import v2FormSlider  from '@v2-components/v2-form-slider';
import v2FormSwitch  from '@v2-components/v2-form-switch';
import v2FormUpload  from '@v2-components/v2-form-upload';
import v2Layout  from '@v2-components/v2-layout';
import v2LayoutEditor  from '@v2-components/v2-layout/editor.vue';
import v2FormTimepicker  from '@v2-components/v2-form-timepicker';
import v2MobileInput  from '@v2-components/v2-mobile-input';
import v2MobileButton  from '@v2-components/v2-mobile-button';
import v2MobileImage  from '@v2-components/v2-mobile-image';
import v2MobileSteps  from '@v2-components/v2-mobile-steps';
import v2MobileUploader  from '@v2-components/v2-mobile-uploader';
import v2MobileRadio  from '@v2-components/v2-mobile-radio';
import v2Switchable  from '@v2-components/v2-switchable';
import v2EditorSwitch  from '@v2-components/v2-switchable/switchEditor.vue';
import v2Page  from '@v2-components/v2-page';
import v2VdaPrettyGlobal  from '../v2Components/v2-vda-pretty-global';
import v2ComponentWeather  from '../v2Components/v2-component-weather';
import v2VdaChart  from '../v2Components/v2-vda-chart';
import v2Vda3dpie  from '../v2Components/v2-vda-3dpie';
import v2ComponentDigitroll  from '../v2Components/v2-component-digitroll'
  
        import filter  from '../../pipe/filter';
import getValue  from '../../pipe/getValue';
import vda  from '../../pipe/vda';
import animate  from '@v2-pipe/animate';
import getAfaData  from '@v2-pipe/getAfaData';
import animateKill  from '@v2-pipe/animateKill';
import close  from '@v2-pipe/close';
import map  from '@v2-pipe/map';
import getExcelData  from '@v2-pipe/getExcelData';
import gt  from '@v2-pipe/gt';
import open  from '@v2-pipe/open'
  
        let app = {
          filter,
	getValue,
	vda,
	animate,
	getAfaData,
	animateKill,
	close,
	map,
	getExcelData,
	gt,
	open
        };
  
        window.pipe = app;
  
        export default {
          v2ComponentCard,
	v2ComponentCalendar,
	v2ComponentEchart,
	v2ComponentCarousel,
	v2ComponentBtn,
	v2ComponentIcon,
	v2ComponentImage,
	v2ComponentSteps,
	v2ComponentText,
	v2ComponentTabs,
	v2ComponentTextValue,
	v2ComponentTable,
	v2CtnOrder,
	v2EditorOrderCtn,
	v2ComponentEtable,
	v2ComponentTree,
	v2EchartBar,
	v2EchartLine,
	v2CtnXy,
	v2EditorXYCtn,
	v2FormCheckbox,
	v2FormCascader,
	v2FormEditor,
	v2FormInput,
	v2FormDatepicker,
	v2FormInputnumber,
	v2FormSelect,
	v2FormRadio,
	v2FormTransfer,
	v2FormSlider,
	v2FormSwitch,
	v2FormUpload,
	v2Layout,
	v2LayoutEditor,
	v2FormTimepicker,
	v2MobileInput,
	v2MobileButton,
	v2MobileImage,
	v2MobileSteps,
	v2MobileUploader,
	v2MobileRadio,
	v2Switchable,
	v2EditorSwitch,
	v2Page,
	v2VdaPrettyGlobal,
	v2ComponentWeather,
	v2VdaChart,
	v2Vda3dpie,
	v2ComponentDigitroll
        }
