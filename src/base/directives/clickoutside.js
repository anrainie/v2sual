export default {
    bind (el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        // if(el.__vueClickOutside__){
        //     el.removeEventListener('click', el.__vueClickOutside__);
        // }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('click', documentHandler);
        // el.__vueClickOutside__ = documentHandler;
        // el.addEventListener('click', documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('click', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
};