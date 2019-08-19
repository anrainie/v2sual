import Shortcut from './packages/shortcut/index.js';
import Bankcard from './packages/bankcard/index.js';
import Paragraph from './packages/paragraph/index.js';

const components = [
  Shortcut,
  Bankcard,
  Paragraph,
];

// const install = function(Vue, opts = {}) {
const install = function(Vue) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Shortcut,
  Bankcard,
  Paragraph,
};
