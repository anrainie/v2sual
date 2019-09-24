        
        import v2ComponentBtn  from '../../../@v2-components/v2-component-btn';
import v2ComponentCalendar  from '../../../@v2-components/v2-component-calendar';
import v2ComponentCard  from '../../../@v2-components/v2-component-card';
import v2ComponentCarousel  from '../../../@v2-components/v2-component-carousel';
import v2ComponentDivider  from '../../../@v2-components/v2-component-divider';
import v2ComponentEchart  from '../../../@v2-components/v2-component-echart';
import v2ComponentImage  from '../../../@v2-components/v2-component-image';
import v2ComponentSteps  from '../../../@v2-components/v2-component-steps';
import v2ComponentIcon  from '../../../@v2-components/v2-component-icon';
import v2ComponentTable  from '../../../@v2-components/v2-component-table';
import v2ComponentText  from '../../../@v2-components/v2-component-text';
import v2ComponentTabs  from '../../../@v2-components/v2-component-tabs';
import v2ComponentTextValue  from '../../../@v2-components/v2-component-text-value';
import v2CtnControllable  from '../../../@v2-components/v2-ctn-controllable';
import v2ControllableEditor  from '../../../@v2-components/v2-ctn-controllable/ControllableEditor.vue';
import v2ComponentTree  from '../../../@v2-components/v2-component-tree';
import v2ComponentEtable  from '../../../@v2-components/v2-component-etable';
import v2CtnOrder  from '../../../@v2-components/v2-ctn-order';
import v2EditorOrderCtn  from '../../../@v2-components/v2-ctn-order/orderCtnEditor.vue';
import v2CtnXy  from '../../../@v2-components/v2-ctn-xy';
import v2EditorXYCtn  from '../../../@v2-components/v2-ctn-xy/xyCtnEditor.vue';
import v2EbankBankcardType2  from '../../../@v2-components/v2-ebank-bankcard-type2';
import v2EbankBankcard  from '../../../@v2-components/v2-ebank-bankcard';
import v2EbankCalendar  from '../../../@v2-components/v2-ebank-calendar';
import v2EbankShortcut  from '../../../@v2-components/v2-ebank-shortcut';
import v2EbankParagraph  from '../../../@v2-components/v2-ebank-paragraph';
import v2EbankTabs  from '../../../@v2-components/v2-ebank-tabs';
import v2EchartBar  from '../../../@v2-components/v2-echart-bar';
import v2FormCascader  from '../../../@v2-components/v2-form-cascader';
import v2EchartLine  from '../../../@v2-components/v2-echart-line';
import v2FormEditor  from '../../../@v2-components/v2-form-editor';
import v2FormDatepicker  from '../../../@v2-components/v2-form-datepicker';
import v2FormInput  from '../../../@v2-components/v2-form-input';
import v2FormCheckbox  from '../../../@v2-components/v2-form-checkbox';
import v2FormRadio  from '../../../@v2-components/v2-form-radio';
import v2FormSlider  from '../../../@v2-components/v2-form-slider';
import v2FormInputnumber  from '../../../@v2-components/v2-form-inputnumber';
import v2FormSwitch  from '../../../@v2-components/v2-form-switch';
import v2FormSelect  from '../../../@v2-components/v2-form-select';
import v2FormTimepicker  from '../../../@v2-components/v2-form-timepicker';
import v2FormUpload  from '../../../@v2-components/v2-form-upload';
import v2FormTransfer  from '../../../@v2-components/v2-form-transfer';
import v2MobileButton  from '../../../@v2-components/v2-mobile-button';
import v2Layout  from '../../../@v2-components/v2-layout';
import v2LayoutEditor  from '../../../@v2-components/v2-layout/editor.vue';
import v2MobileImage  from '../../../@v2-components/v2-mobile-image';
import v2MobileInput  from '../../../@v2-components/v2-mobile-input';
import v2MobileSteps  from '../../../@v2-components/v2-mobile-steps';
import v2MobileRadio  from '../../../@v2-components/v2-mobile-radio';
import v2Switchable  from '../../../@v2-components/v2-switchable';
import v2EditorSwitch  from '../../../@v2-components/v2-switchable/switchEditor.vue';
import v2Page  from '../../../@v2-components/v2-page';
import v2MobileUploader  from '../../../@v2-components/v2-mobile-uploader';
import v2Xxxxx  from '../../../@v2-components/v2-XXXXX';
import v2XXXXXEditor  from '../../../@v2-components/v2-XXXXX/XXXXXEditor.vue'
  
        import animateKill  from '../../../pipe/animateKill';
import close  from '../../../pipe/close';
import animate  from '../../../pipe/animate';
import getAfaData  from '../../../pipe/getAfaData';
import open  from '../../../pipe/open';
import gt  from '../../../pipe/gt';
import getExcelData  from '../../../pipe/getExcelData';
import map  from '../../../pipe/map'
  
        let app = {
          animateKill,
	close,
	animate,
	getAfaData,
	open,
	gt,
	getExcelData,
	map
        };
  
        window.pipe = app;
  
        export default {
          v2ComponentBtn,
	v2ComponentCalendar,
	v2ComponentCard,
	v2ComponentCarousel,
	v2ComponentDivider,
	v2ComponentEchart,
	v2ComponentImage,
	v2ComponentSteps,
	v2ComponentIcon,
	v2ComponentTable,
	v2ComponentText,
	v2ComponentTabs,
	v2ComponentTextValue,
	v2CtnControllable,
	v2ControllableEditor,
	v2ComponentTree,
	v2ComponentEtable,
	v2CtnOrder,
	v2EditorOrderCtn,
	v2CtnXy,
	v2EditorXYCtn,
	v2EbankBankcardType2,
	v2EbankBankcard,
	v2EbankCalendar,
	v2EbankShortcut,
	v2EbankParagraph,
	v2EbankTabs,
	v2EchartBar,
	v2FormCascader,
	v2EchartLine,
	v2FormEditor,
	v2FormDatepicker,
	v2FormInput,
	v2FormCheckbox,
	v2FormRadio,
	v2FormSlider,
	v2FormInputnumber,
	v2FormSwitch,
	v2FormSelect,
	v2FormTimepicker,
	v2FormUpload,
	v2FormTransfer,
	v2MobileButton,
	v2Layout,
	v2LayoutEditor,
	v2MobileImage,
	v2MobileInput,
	v2MobileSteps,
	v2MobileRadio,
	v2Switchable,
	v2EditorSwitch,
	v2Page,
	v2MobileUploader,
	v2Xxxxx,
	v2XXXXXEditor
        }