import Vue from 'vue';
import Alert from './alert.vue';

let MessageConstructor = Vue.extend(Alert);
let instance;
let instances = []; 
let seed = 1;
const akMessage = function(options) {
  options = options || {};
  if(typeof options === 'string'){
    options = {
      akmessage: options
    };
  }
 
  let userOnClose = options.onClose;
  let id = 'message_' + seed++;

  options.onClose = function(){
    akMessage.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options
  });
  instance.id = id;
  instance.vm = instance.$mount();
  //用原生DOM API把它插入ul标签中
  var $body =$(document.getElementsByClassName('ak-message')[0])
  $body.append(instance.vm.$el);
  instance.vm.visible = true;
  instance.dom = instance.vm.$el;

  instances.push(instance);
  return instance.vm;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  akMessage[type] = options => {
    if(typeof options === 'string'){
      options = {
        akmessage: options
      };
    }
    options.type = type;
    return akMessage(options);
  };
});

// 组件的close方法中调用onClose再调该方法
akMessage.close = function(id, userOnClose) {
  for(let i = 0, len = instances.length; i < len; i++) {
    if(id === instances[i].id) { 
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i]);
      }
      instances.splice(i, 1);  
      break;
    }
  }
};
// Message.closeAll = function() {
//   for (let i = instances.length - 1; i >= 0; i--){
//     instances[i].close();
//   }
// };
export default akMessage;