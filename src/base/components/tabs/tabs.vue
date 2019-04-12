<template>
    <div :class="classes">
        <div :class="[prefixCls + '-bar',prefixCls + '-' + this.placement]">
            <div :class="[prefixCls + '-nav-container',prefixCls + '-nav-container-' + this.placement]">
                <div :class="[prefixCls + '-nav-wrap']">
                    <div :class="[prefixCls + '-nav-scroll']">
                        <div :class="[prefixCls + '-nav']" ref="nav">
                            <div :class="barClasses" :style="barStyle"></div>
                            <div :class="tabCls(item)"  v-for="(item, index) in navList" @click="handleChange(index)">
                                <Icon v-if="item.icon !== ''" :type="item.icon"></Icon>
                                <Render v-if="item.labelType === 'function'" :render="item.label"></Render>
                                <template v-else>{{ item.label }}</template>
                                <Icon v-if="showClose(item)" type="ios-close-empty" @click.native.stop="handleRemove(index)"></Icon>
                            </div>
                        </div>
                        <div :class="[prefixCls + '-nav-right']" v-if="showSlot"><slot name="extra"></slot></div>
                    </div>
                </div>
            </div>
        </div>
        <div :class="contentClasses" :style="contentStyle"><slot></slot></div>
    </div>
</template>
<script>
    import Icon from '../icon/icon.vue';
    import Render from '../base/render';
    import { oneOf, getStyle } from '../../utils/assist';
    import Emitter from '../../mixins/emitter';

    const prefixCls = 'ivu-tabs';

    export default {
        name: 'Tabs',
        mixins: [ Emitter ],
        components: { Icon, Render },
        props: {
            value: {
                type: [String, Number]
            },
            type: {
                validator (value) {
                    return oneOf(value, ['line', 'card']);
                },
                default: 'line'
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'default']);
                },
                default: 'default'
            },
            animated: {
                type: Boolean,
                default: true
            },
            closable: {
                type: Boolean,
                default: false
            },
            placement:{
                type:String,
                default:'left'
            }
        },
        data () {
            return {
                prefixCls: prefixCls,
                navList: [],
                barWidth: 0,
                barHeight:0,
                // barOffset: 0,
                barOffsetWidth:0,
                barOffsetHeight:0,
                activeKey: this.value,
                showSlot: false
            };
        },
        computed: {
            classes () {
                return [
                    `${prefixCls}`,
                    {
                        [`${prefixCls}-ctn-left`]: this.placement === 'left',
                        [`${prefixCls}-card`]: this.type === 'card',
                        [`${prefixCls}-mini`]: this.size === 'small' && this.type === 'line',
                        [`${prefixCls}-no-animation`]: !this.animated
                    }
                ];
            },
            contentClasses () {
                return [
                    `${prefixCls}-content`,
                    {
                        [`${prefixCls}-content-left`]: this.placement === 'left',
                        [`${prefixCls}-content-animated`]: this.animated
                    }
                ];
            },
            barClasses () {
                return [
                    `${prefixCls}-ink-bar`,
                    {
                        [`${prefixCls}-ink-bar-animated`]: this.animated
                    }
                ];
            },
            contentStyle () {
                const x = this.navList.findIndex((nav) => nav.name === this.activeKey);
                const p = x === 0 ? '0%' : `-${x}00%`;

                let style = {};
                if (x > -1) {
                    style = {
                        transform: `translateX(${p}) translateZ(0px)`
                    };
                }
                return style;
            },
            barStyle () {
                let style;
                if(this.placement==="left"){
                    
                     style = {
                        display: 'none',
                        width:'2px',
                        height: `${this.barHeight}px`,
                        left:`${this.barWidth-2}px`
                    };
                    if (this.type === 'line') style.display = 'block';
                    if (this.animated) {
                        style.transform = `translate3d(0px, ${this.barOffsetHeight}px, 0px)`;
                    } else {
                        style.top = `${this.barOffsetHeight}px`;
                    }
                }else{
                    style = {
                        display: 'none',
                        width: `${this.barWidth}px`
};
                    if (this.type === 'line') style.display = 'block';
                    if (this.animated) {
                    style.transform = `translate3d(${this.barOffsetWidth}px, 0px, 0px)`;
                    } else {
                        style.left = `${this.barOffsetWidth}px`;
                    }
                }
                 return style;
            }
        },
        methods: {
            getTabs () {
                return this.$children.filter(item => item.$options.name === 'TabPane');
            },
            updateNav () {
                this.navList = [];
                this.getTabs().forEach((pane, index) => {
                    this.navList.push({
                        labelType: typeof pane.label,
                        label: pane.label,
                        icon: pane.icon || '',
                        name: pane.currentName || index,
                        disabled: pane.disabled,
                        closable: pane.closable,
                        id: pane.id
                    });
                    if (!pane.currentName) pane.currentName = index;
                    if (index === 0) {
                        if (!this.activeKey) this.activeKey = pane.currentName || index;
                    }
                });
                this.updateStatus();
                this.updateBar();
            },
            updateBar () {
                this.$nextTick(() => {
                    const index = this.navList.findIndex((nav) => nav.name === this.activeKey);
                    const prevTabs = this.$refs.nav.querySelectorAll(`.${prefixCls}-tab`);
                    const tab = prevTabs[index];
                    this.barWidth = parseFloat(getStyle(tab, 'width'));
                     this.barHeight = parseFloat(getStyle(tab, 'height'));

                    if (index > 0) {
                        let /*offset = 0;*/
                            offsetWidth = 0,
                            offsetHeight = 0;

                        const gutter = this.size === 'small' ? 0 : 16;
                        for (let i = 0; i < index; i++) {
                            //  offset += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                            offsetWidth += parseFloat(getStyle(prevTabs[i], 'width')) + gutter;
                            offsetHeight += parseFloat(getStyle(prevTabs[i], 'height'));
                        }
                        // this.barOffset = offset;
                        this.barOffsetWidth = offsetWidth;
                        this.barOffsetHeight = offsetHeight;
                    } else {
                        // this.barOffset = 0;
                        this.barOffsetWidth = 0;
                        this.barOffsetHeight = 0;
                    }
                });
            },
            updateStatus () {
                const tabs = this.getTabs();
                tabs.forEach(tab => tab.show = (tab.currentName === this.activeKey) || this.animated);
            },
            tabCls (item) {
                return [
                    `${prefixCls}-tab`,
                    {
                        [`${prefixCls}-tab-top`]: this.placement === 'top',
                        [`${prefixCls}-tab-disabled`]: item.disabled,
                        [`${prefixCls}-tab-active`]: item.name === this.activeKey
                    }
                ];
            },
            handleChange (index) {
                const nav = this.navList[index];
                if (nav.disabled) return;
                this.activeKey = nav.name;
                this.$emit('input', nav.name);
                this.$emit('on-click', nav.name, nav.id);
            },
            handleRemove (index) {
                const tabs = this.getTabs();
                const tab = tabs[index];
                tab.$destroy();

                if (tab.currentName === this.activeKey) {
                    const newTabs = this.getTabs();
                    let activeKey = -1;

                    if (newTabs.length) {
                        const leftNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex < index);
                        const rightNoDisabledTabs = tabs.filter((item, itemIndex) => !item.disabled && itemIndex > index);

                        if (rightNoDisabledTabs.length) {
                            activeKey = rightNoDisabledTabs[0].currentName;
                        } else if (leftNoDisabledTabs.length) {
                            activeKey = leftNoDisabledTabs[leftNoDisabledTabs.length - 1].currentName;
                        } else {
                            activeKey = newTabs[0].currentName;
                        }
                    }
                    this.activeKey = activeKey;
                    this.$emit('input', activeKey);
                }
                this.$emit('on-tab-remove', tab.currentName);
                this.updateNav();
            },
            showClose (item) {
                if (this.type === 'card') {
                    if (item.closable !== null) {
                        return item.closable;
                    } else {
                        return this.closable;
                    }
                } else {
                    return false;
                }
            }
        },
        watch: {
            value (val) {
                this.activeKey = val;
            },
            activeKey () {
                this.updateBar();
                this.updateStatus();
                this.broadcast('Table', 'on-visible-change', true);
            }
        },
        mounted () {
            this.showSlot = this.$slots.extra !== undefined;
        }
    };
</script>
