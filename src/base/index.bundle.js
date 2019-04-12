// es6 polyfill
import 'core-js/fn/array/find-index';
import ISwitch from './components/switch';
import IButton from './components/button';
import Collapse from './components/collapse';
import IIcon from './components/icon';
import IInput from './components/input';
import InputNumber from './components/input-number';
import Message from './components/message';
import Modal from './components/modal';
import Poptip from './components/poptip';
import Tabs from './components/tabs';
import Tooltip from './components/tooltip';
import Upload from './components/upload';
import { Select, Option, OptionGroup } from './components/select';
import ColorPicker from './components/color-picker';
import Spin from './components/spin';
import Alert from './components/alert';
import Tree from './components/tree';
import Checkbox from './components/checkbox';

import BaseConfig from './components/base-config';
import SvgSpin from './components/svg-spin';

import ITable from './components/table';
import Draggable from './components/draggable';
import { Row, Col } from './components/grid';
import Overview from './components/overview';


const bundle = {
    Alert,
    ISwitch,
    IButton,
    Collapse,
    Panel: Collapse.Panel,
    IIcon,
    IInput,
    InputNumber,
    Message,
    Modal,
    Poptip,
    Tabs,
    TabPane: Tabs.Pane,
    Tooltip,
    Upload,
    ISelect:Select,
    IOption: Option,
    OptionGroup,
    Spin,
    BaseConfig,
    SvgSpin,
    ColorPicker,
    Checkbox,
    CheckboxGroup: Checkbox.Group,

    ITable,
    Draggable,

    Tree,
    Row,
    Col,
    iCol: Col,
    Overview,
    OverviewNode: Overview.Node,
    OverviewValue:Overview.Value
};

const install = function (Vue) {
    Object.keys(bundle).forEach((key) => {
        Vue.component(key, bundle[key]);
    });

    return Vue;


};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
const ret=Object.assign(bundle, {install})
export default ret;
