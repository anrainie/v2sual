<template>
    <div :class="itemClasses">
        <div :class="headerClasses" class="ivu-panel-header" @click="toggle">
            <i v-show="showIcon" class="aui aui-jiantou-shang"></i>
            <slot></slot>
        </div>
        <collapse-transition>
            <div :class="contentClasses" v-show="isActive">
                <div :class="boxClasses"><slot name="content"></slot></div>
            </div>
        </collapse-transition>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import CollapseTransition from '../base/collapse-transition';
    const prefixCls = 'ivu-collapse';

    export default {
        name: 'Panel',
        components: { Icon, CollapseTransition },
        props: {
            name: {
                type: String
            },

            showIcon:{
                type: Boolean,
                default: true
            },

            itemObj:{
                type:Object,
                default: function() {
                    return {}
                }
            }
        },
        
        created: function(){
          this.$emit('panelCreated', this);
        },

        data () {
            return {
                index: 0, // use index for default when name is null
                isActive: false
            };
        },
        computed: {
            itemClasses () {
                return [
                    `${prefixCls}-item`,
                    {
                        [`${prefixCls}-item-active`]: this.isActive
                    }
                ];
            },
            headerClasses () {
                return `${prefixCls}-header`;
            },
            contentClasses () {
                return `${prefixCls}-content`;
            },
            boxClasses () {
                return `${prefixCls}-content-box`;
            }
        },
        methods: {
            toggle () {
                this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: this.isActive,
                    panelInstance: this,
                    emitChange: true
                });
            },

            close () {
                if (this.isActive === true) {
                    this.$parent.toggle({
                    name: this.name || this.index,
                    isActive: true,
                    panelInstance: this,
                    emitChange: false
                });
                }
            }
        }
    };
</script>
