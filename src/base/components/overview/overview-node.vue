<template>
    <div v-if="nodeItem && nodeItem.active !== false" class="aui-overview-block">
        <div class="aui-overview-content">
            <i v-if="hasArrow" @click="handler.toggleArrow($event, nodeItem)" class="aui aui-jiantou-xia"></i>
            <span v-if="nodeItem.prefix && !nodeItem.hideBlank">
              <i-select v-if="nodeItem.hasNext" class="" transfer v-model="nodeItem.prefix">
                        <i-option v-for="(value,index) in prefixObj.arr" :value="value" :key="value">{{prefixObj.despArr[index]}}</i-option>
                        <option-group v-if="prefixObj.group" v-for="(groupItem, index) in prefixObj.group" :label="groupItem.label" :key="groupItem.label">
                            <i-option v-for="(value, index) in groupItem.arr" :value="value" :key="value">{{groupItem.despArr[index]}}</i-option>
                        </option-group>
                    </i-select>
              <span v-if="nodeItem.isForInit">{{nodeItem.prefix}}</span>
            </span>
            <component :tailClassArr="tailClassArr" :data-overview-id.prop="nodeID" :nodeID="nodeID" :class="classes" :is="componentName" :node-item="nodeItem"
                       :handler="handler" :nodesMap="nodesMap">
            </component>
        </div>

        <div class="aui-overview-down-content"
              v-if="(nodeItem.isForInit) && !nodeItem.next && nodeItem.and  && nodesMap[nodeItem.and] && nodesMap[nodeItem.and].active !== false">
                
                <overview-node class="" :nodeID="nodeItem.and" :node-item="nodesMap[nodeItem.and]" :handler="handler"
                               :nodesMap="nodesMap"></overview-node>
            </div>

        <div class="aui-overview-down-content"
             v-if="nodeItem.next && nodesMap[nodeItem.next] && nodesMap[nodeItem.next].active !== false">
            <overview-node :prev="nodeID" :nodeID="nodeItem.next" :node-item="nodesMap[nodeItem.next]"
                           :handler="handler" :nodesMap="nodesMap"></overview-node>
        </div>



    </div>
</template>

<script>
const mixin = {
  props: {
    prev: {
      type: String
    },

    head: {
      type: String
    },

    fromCondition: {
      type: String
    },

    nodeID: {
      type: String
    },

    nodeItem: {
      type: Object
    },

    nodesMap: {
      type: Object
    },

    handler: {
      type: Object
    },

    tailClassArr: {}
  },

  computed:{
    hasExpression() {
      var nodeItem = this.nodeItem,
        nodesMap = this.nodesMap,
        tail,
        tailItem,
        paramObj;

      switch (nodeItem.nodeType) {
        case "interface":
        case "const":
          return true;

        case "var":
          if ((tail = nodeItem.tail)) {
            if ((tailItem = nodesMap[tail])) {
              switch (tailItem.nodeType) {
                case "interface":
                case "const":
                case "var":
                  return true;

                case "value":
                  if ((paramObj = tailItem.paramObj)) {
                    switch (paramObj.type) {
                      case "handler":
                      case "function":
                      case 'array':
                      case 'object':
                        return true;
                        break;
                    }
                  }
              }
            }
          } else {
            if (nodeItem.varID) {
              return true;
            }
          }
          break;
      }
    },
  },

  data(){
    return {
      prefixObj: {
        arr: ['&&', '||', '!==', '==='],
        despArr: ['且', '或', '不等于', '等于']
      }
    }
  }
};

const classPrefix = "aui-overview",
  componentCtn = "aui-overview-component";

export default {
  name: "OverviewNode",

  mixins: [mixin],

  created() {
    const nodeItem = this.nodeItem;

    if (nodeItem) {
      this.$set(nodeItem, 'desp', '');

      if (nodeItem.nodeType === 'code') {
        nodeItem.desp = nodeItem.desp || '原生代码';
      }

      nodeItem.prev = this.prev;
      nodeItem.head = this.head;
      nodeItem.fromCondition = nodeItem.fromCondition || this.fromCondition;

      // if (nodeItem.isAnd) {
      //   nodeItem.prefix = "&&";
      // }

      this.handler.updateNodeItem(nodeItem, this.nodesMap, this.nodeID);
    }
  },

  data() {
    return {};
  },

  components: {
    _interface: {
      template: `<div>
         <div class="aui-overview-collapse-title-ctn" :class="tailClassArr">
        <div class="aui-overview-collapse-title"   v-overviewInterface="{nodeItem:nodeItem, nodeID: nodeID}"> </div>
          <span class="aui-icon-set">
          <i title="切换类型" @click="handler.changeTailType($event,{nodeItem:nodeItem, nodesMap:nodesMap, nodeID: nodeID})" class="aui aui-icon-qihuan"></i>
          <i title="编辑模式" @click="handler.editParam({nodeItem: nodeItem})" class="aui aui-bianji-copy"></i>
          <i title="配置表达式" v-if="hasExpression" class="aui aui-peizhidingyi" @click.stop="handler.setCode($event, {nodeItem:nodeItem, desp: '表达式', isExpression: true})" ></i>
          </span>
          </div>
       

          <div class="aui-overview-collapse-content" v-if="nodeItem.params">
             <overview-node v-for="nodeID in nodeItem.params" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
          </div>

          <div class="aui-overview-collapse-content" :class="tailClassArr" v-if="nodeItem.tail && nodesMap[nodeItem.tail] && nodesMap[nodeItem.tail].active !== false">
            <overview-node :head="nodeID" :nodeID="nodeItem.tail" :node-item="nodesMap[nodeItem.tail]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
          </div>
     
        </div>`,
      mixins: [mixin]
    },

    _var: {
      template: `<div v-if="!nodeItem.paramObj || (nodeItem.paramObj && !nodeItem.paramObj.hidden)">
        <div class="aui-overview-collapse-title-ctn" :class="tailClassArr">
          <div v-tooltip="nodesMap[nodeID].paramObj" class="aui-overview-collapse-title" v-overviewInterface="{nodeID:nodeID,nodeItem:nodeItem, name: nodeItem.name}"> </div>
              <span class="aui-icon-set">
            <i v-if="!(nodeItem.varID && !nodeItem.hasNext)" title="切换类型" @click="handler.changeTailType($event,{nodeItem:nodeItem, nodesMap:nodesMap, nodeID: nodeID})" class="aui aui-icon-qihuan"></i>
            <i v-if="!(nodeItem.varID && !nodeItem.hasNext)" title="编辑模式" @click="handler.editParam({nodeItem: nodeItem})" class="aui aui-bianji-copy"></i>
            <i title="配置表达式" v-if="hasExpression" class="aui aui-peizhidingyi" @click.stop="handler.setCode($event, {nodeItem:nodeItem, desp: '表达式', isExpression: true})" ></i>            
            </span>
       </div>
           

            <div class="aui-overview-collapse-content" :class="tailClassArr" v-if="nodeItem.tail && nodesMap[nodeItem.tail] && nodesMap[nodeItem.tail].active !== false">
               <overview-node :head="nodeID" :nodeID="nodeItem.tail" :node-item="nodesMap[nodeItem.tail]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
            </div>
          
        </div>`,
      mixins: [mixin]
    },

    _const: {
      template: `<div>
      <div class="aui-overview-collapse-title-ctn">
          <div class="aui-overview-collapse-title" v-overviewInterface="{nodeID: nodeID,nodeItem:nodeItem, name: nodeItem.name}"></div>
          <span v-if="!(nodeItem.varID && !nodeItem.hasNext)" class="aui-icon-set">
          <i title="配置表达式" v-if="hasExpression" class="aui aui-peizhidingyi" @click.stop="handler.setCode($event, {nodeItem:nodeItem, desp: '表达式', isExpression: true})" ></i>
            </span>
        </div>
        </div>`,
      mixins: [mixin]
    },

    _if: {
      template: `<div>
              <div class="aui-overview-collapse-title" v-overviewHover="{nodeID:nodeID,nodeItem: nodeItem}">if</div>
              <div class="aui-overview-collapse-content" v-if="nodeItem.conditions">
                <overview-node v-for="nodeID in nodeItem.conditions" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _condition: {
      template: `<div>
              <div class="aui-overview-collapse-title">条件</div>
              <div class="aui-overview-collapse-content">
                 <div v-if="nodeItem.condition">
                    <overview-node :nodeID="nodeItem.condition" :node-item="nodesMap[nodeItem.condition]" :handler="handler" :nodesMap="nodesMap"></overview-node>  
                 </div>
                 <div v-if="nodeItem.body">
                  条件满足
                  <overview-node :fromCondition="nodeID" :nodeID="nodeItem.body" :node-item="nodesMap[nodeItem.body]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
                 </div>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _for: {
      template: `<div>
              <div class="aui-overview-collapse-title" v-overviewHover="{nodeID:nodeID,nodeItem: nodeItem}">for</div>
              <div class="aui-overview-collapse-content">
                
                  <div v-if="nodeItem.s1">
                  s1
                  <overview-node  :nodeID="nodeItem.s1" :node-item="nodesMap[nodeItem.s1]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
                 </div>

                 <div v-if="nodeItem.s2">
                  s2
                  <overview-node :nodeID="nodeItem.s2" :node-item="nodesMap[nodeItem.s2]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
                 </div>
                 
                 <div v-if="nodeItem.s3">
                  s3
                  <overview-node :nodeID="nodeItem.s3" :node-item="nodesMap[nodeItem.s3]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
                 </div>
              
                 <div v-if="nodeItem.body">
                  body
                  <overview-node :fromCondition="nodeID" :nodeID="nodeItem.body" :node-item="nodesMap[nodeItem.body]" :handler="handler" :nodesMap="nodesMap"></overview-node>      
                 </div>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _while: {
      template: `<div>
              <div class="aui-overview-collapse-title" v-overviewHover="{nodeID:nodeID,nodeItem: nodeItem}">while</div>
              <div class="aui-overview-collapse-content" v-if="nodeItem.conditions">
                <overview-node v-for="nodeID in nodeItem.conditions" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _doWhile: {
      template:`<div>
              <div class="aui-overview-collapse-title" v-overviewHover="{nodeID:nodeID,nodeItem: nodeItem}">do while</div>
              <div class="aui-overview-collapse-content" v-if="nodeItem.conditions">
                <overview-node v-for="nodeID in nodeItem.conditions" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _switch: {
      template: `<div>
              <div class="aui-overview-collapse-title" v-overviewHover="{nodeID: nodeID, nodeItem: nodeItem}">switch</div>
              <div class="aui-overview-collapse-content">
              <div v-if="nodeItem.switch && nodesMap[nodeItem.switch] && nodesMap[nodeItem.switch].active !== false">
                    <overview-node :nodeID="nodeItem.switch" :node-item="nodesMap[nodeItem.switch]" :handler="handler" :nodesMap="nodesMap"></overview-node>  
                 </div>
                <overview-node  v-if="nodeItem.conditions" v-for="nodeID in nodeItem.conditions" :nodeID="nodeID" :node-item="nodesMap[nodeID]" :handler="handler" :nodesMap="nodesMap"></overview-node>
              </div>
          </div>`,
      mixins: [mixin]
    },

    _request: {
      template: `<div v-overviewHover="{nodeItem: nodeItem}">
                  <span>配置传输字段</span>
                    <span @click.stop="handler.edmConfig($event, {nodeID:nodeID,nodeItem:nodeItem})" class="config-modal-btn">
                        <i title="配置传输字段" class="aui aui-peizhidingyi"></i>
                    </span>
                  <ul v-if="nodeItem.edmConfig && nodeItem.edmID" style="display:block;top:inherit;" class="aui-dropdown-menu aui-overview-edm-config" aria-labelledby="dropdownMenu">
                    <li v-for="(name, index) in nodeItem.edmConfig.names" @click.stop="handler.clickEdmSingle($event,name,index, nodeItem)"><a class="menu-click-a" tabindex="-1" href="#">{{name}} {{nodeItem.edmConfig.comments[index]}}</a></li>
                  </ul>
              </div>`,
      mixins: [mixin]
    },

    _response: {
      template: `<div v-overviewHover="{nodeItem: nodeItem}">
                  异步图标
                  <span>配置返回字段</span>
                    <span @click.stop="handler.edmConfig($event, {nodeID:nodeID, nodeItem:nodeItem})" class="config-modal-btn">
                        <i title="配置返回字段" class="aui aui-peizhidingyi" ></i>
                    </span>
                    <ul v-if="nodeItem.edmConfig && nodeItem.edmID" style="display:block;top:inherit;" class="aui-dropdown-menu aui-overview-edm-config" aria-labelledby="dropdownMenu">
                    <li v-for="(name, index) in nodeItem.edmConfig.names" @click.stop="handler.clickEdmSingle($event,name,index, nodeItem)"><a class="menu-click-a" tabindex="-1" href="#">{{name}} {{nodeItem.edmConfig.comments[index]}}</a></li>
                  </ul>
                </div>`,
      mixins: [mixin]
    },

    _blank: {
      template: `<div v-if ="!nodeItem.hideBlank" v-overviewBlank="{nodeItem:nodeItem, nodeID: nodeID}"></div>`,
      mixins: [mixin]
    },

    _statement: {
      template: `<div v-html="nodeItem.desp" v-overviewHover="{nodeID: nodeID,nodeItem: nodeItem}"></div>`,
      mixins: [mixin]
    },

    _value: {
      template: `<overview-value :nodeItem="nodeItem" :paramObj="nodeItem.paramObj" :params="nodeItem.params" :handler="handler" :nodesMap="nodesMap"></overview-value>`,
      mixins: [mixin]
    },

    _code: {
      template: `<div>
                <span v-overviewHover="{nodeID:nodeID, nodeItem: nodeItem}">{{nodeItem.desp}}</span>
                    <span @click.stop="handler.setCode($event, {nodeItem:nodeItem, desp: nodeItem.desp})" class="config-modal-btn">
                        <i title="配置javascript代码" class="aui aui-peizhidingyi" ></i>
                    </span>
            </div>`,
      mixins: [mixin]
    },

    _start: {
      template: `<div v-overviewHover="{nodeID: nodeID, nodeItem: nodeItem}">开始</div>`,
      mixins: [mixin]
    },

    _input: {
      template: `<i-input @on-enter="handler.handleInputEnter({nodeItem: nodeItem})" v-model="nodeItem.desp"></i-input>`,
      mixins: [mixin]
    }
  },

  computed: {
    hasArrow() {
      var nodeItem = this.nodeItem,
        nodesMap = this.nodesMap,
        tail,
        tailItem;

      switch (nodeItem.nodeType) {
        case "interface":
        case "var":
          if (nodeItem.params) {
            return true;
          } else {
            if ((tail = nodeItem.tail)) {
              if ((tailItem = nodesMap[tail])) {
                if (tailItem.nodeType === "value" && tailItem.params) {
                  return true;
                }
              }
            }
            return false;
          }

        case "if":
        case "switch":
          if (nodeItem.conditions) {
            return true;
          } else {
            return false;
          }

        case "condition":
        case "for":
          return true;

        default:
          return false;
      }
    },
    componentName() {
      const nodeItem = this.nodeItem;
      const nodeType = nodeItem.nodeType;

      return "_" + this.nodeItem.nodeType;
    },

    tailClassArr() {
      return this.hasArrow ? [] : ["aui-overview-tail"];
    },

    classes() {
      return [
        `${classPrefix}`,
        `${classPrefix}-node`,
        `${classPrefix}-node-${this.nodeItem.nodeType}`
      ];
    }
  },

  methods: {},

  watch: {}
};
</script>

<style>
</style>
