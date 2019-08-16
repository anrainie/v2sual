
import components from "@/@aweb-components/aweb.components.js";
import { widget } from "./mixin/v2-view";
import events from "./mixin/events";
import inputField from "./mixin/inputField";
import v2components from './components'
import {mixins} from '@/lib'
//注册组件

const install = function (Vue, opts = {}) {
    Object.keys(components).map(c => {
        Vue.component(c, { mixins: [widget, events, inputField, mixins], ...components[c] });
    });

    for (let i in v2components) {
        Vue.component(v2components[i].name, v2components[i])
    }

};


export default {
    install
};
