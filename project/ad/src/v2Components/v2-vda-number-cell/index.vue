<template>

    <div
      :class="widgetClass"
      :style="ctnStyle"
    >
        <template v-for="(item, index) in getData" >
            <div :class="[ 
                'vda-number-cell-ctn', 
                `vda-number-cell-ctn-${model.cellPosition}`,
                `vda-number-cell-ctn-${model.cellAlign}`]"
                 :style="{width: model.cellWidth}"
                 :key="index">
                <div class="vda-number-cell-title">{{item.title}}</div>
                <div class="vda-number-cell-counts">
                    <div class="vda-number-cell-count">{{ handleCount(item) }}</div>  
                    <div v-if="item.suffix" class="vda-number-cell-suffix">{{item.suffix}}</div>  
                </div>  
            </div>
        </template>
    </div>
  
        
</template>

<script>
import defaultData from './defaultData.json';
export default {
  name: 'v2-vda-number-cell',

  data() {
    return {
    }
  },
  computed: {
      ctnStyle() {
        let x = {
            ...(this.model.commonStyle || {})
        };
        x.width = this.model.ctnWidth;
        x.display = 'flex'
        x.flexWrap = 'wrap'
        return x;
    },
      getData() {
          if (this.model.countData && this.model.countData.length) {
              return this.model.countData
          }else {
              return defaultData
          }
      }
  },
  methods: {
      handleCount(item) {
        //处理数字逻辑,填充0
        //时间为 s
        
        let countStr = `${item.count}`
        if (item.suffix === 's') {
            debugger
            let len = countStr.length
            if ( len < 4) {
                for (let i = 0; i < (4 - len); i++) {
                    countStr = '0' + countStr
                }
            }
        }
        return countStr
      }
  },
}
</script>

<style lang="scss">
    .vda-number-ctn {
        display: flex;
        flex-wrap: wrap;
        width: 218px;
    }
    .vda-number-cell-ctn {
        display: flex;
        background-color:rgba(16,99,255,0.2);
        color: white;
        padding: 10px;
        margin-top: 15px;
        margin-right:15px;
    }

    .vda-number-cell-ctn-left {
         align-items: flex-start;
    }

    .vda-number-cell-ctn-center {
         align-items: center;
    }

    .vda-number-cell-ctn-row {
        flex-direction: row;
        justify-content: space-around;
    }

    .vda-number-cell-ctn-column {
        flex-direction: column;
    }

    .vda-number-cell-title {
        color: #ACCFFF;
        font-size: 14px;
    }

    .vda-number-cell-counts {
        display: flex;
        align-items: baseline;
        .vda-number-cell-count {
            font-size: 32px;
            color: rgba(223,244,255,1);
        }
        .vda-number-cell-suffix {
            font-size: 14px;
            color: rgba(172,207,255,1);
            margin-left: 8px;
        }
    }
</style>