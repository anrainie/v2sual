<template>
  <div ref="global"
       class="global-resolution-ratio">
  </div>
</template>

<script>
  import $ from 'jquery'
  import echarts from "echarts";
  import MapOptions from './map-default-options.json'
  import GlobalOptions from './global-default-options.json'

  const geoJsonUrlOfWorld = "https://raw.githubusercontent.com/apache/incubator-echarts/master/map/json/world.json"
  const geoJsonUrlOfChina = "https://raw.githubusercontent.com/apache/incubator-echarts/master/map/json/china.json"

  function checkNumber () {
    for (let i = 0; i < arguments.length; i++) {
      if (Number.isNaN(arguments[i])) {
        return false
      }
    }
    return true
  }

  /**
   * 将地图数据注册到echarts中
   */
  function registerMap () {
    let tasks = Array.of(
      fetchMapJson(geoJsonUrlOfWorld),
      fetchMapJson(geoJsonUrlOfChina)
    )

    Promise.all(tasks)
      .then(([world, china]) => echarts.registerMap('world', mergeMapJson(world, china, 'china')))
      .catch(() => console.error("Failed to load map json, please check net"))
  }

  function fetchMapJson (url) {
    return new Promise(resolve => $.getJSON(url, resolve))
  }

  function mergeMapJson (all, item, exclude) {
    let itemFeatures = item.features.map(({geometry, properties}) => ({geometry, properties}))

    all.features = all.features.filter(feature => feature.properties.name.toLowerCase() !== exclude)
    all.features = Reflect.apply(Array.prototype.push, all.features, itemFeatures)

    return all
  }

  function makeEchart (chartOptions, canvasOptions, element) {
    let chart = echarts.init(element, null, canvasOptions)
    chart.setOption(chartOptions)
    return chart
  }

  /**
   * 将地图作为地球表面层
   * @param echartsInstance 地图echart
   * @param globeOptions
   */
  function applyMapLayer(echartsInstance, globeOptions) {
    (globeOptions.layer || (globeOptions.layer = Array.of())).push({
      type: 'blend',
      texture: echartsInstance,
      shading: 'lambert',
      distance: 0
    })
  }

  function applyDataForSeries(data, seriesOptions, seriesIndex = 0) {
    seriesOptions[seriesIndex].data = data
  }

  export default {
    name: "v2-vda-pretty-global",

    data () {
      return {
        globalOptions: GlobalOptions
      }
    },

    watch: {
      data (value) {
        applyDataForSeries(value, this.globalOptions)
      },

      globalOptions: {
        deep: true,
        handler (options) {
          this.globalChart.setOption(options)
        }
      }
    },

    computed: {
      // like [[ 119.15, 33.5, 1 ], [ 119.9, 32.49, 2 ], [ 108.33, 22.84, 3]]
      // 前两项表示坐标经纬度，最后一项为数值，也可添加多项数据
      data () {
        return this.model.data
      }
    },

    beforeCreate () {
      registerMap()
    },

    created () {
      const mapChartSize = { width: 3840, height: 2160 }
      const globalChartSize = { width: 1920, height: 1080 }

      // 创建世界地图
      this.mapChart = makeEchart(MapOptions, mapChartSize, document.createElement('canvas'))
      this.globalChart = makeEchart(GlobalOptions, globalChartSize, this.$refs.global)

      applyMapLayer(this.mapChart, GlobalOptions.globe)
      applyDataForSeries(this.data, GlobalOptions.series)
    },

    methods: {
      /**
       * 拉近观看地球距离,投影模式${globe.viewControl.projection: 'perspective'}下无法穿过地球内部
       * @param delta 视角接近地球的距离
       */
      zoomIn (delta = 10) {
        this.globalOptions.globe.viewControl.distance -= 10
      },

      /**
       * @see zoomIn
       * @param delta 视角远离地球的距离
       */
      zoomOut (delta = 10) {
        this.globalOptions.globe.viewControl.distance += 10
      },

      /**
       * 地球向左自转
       * @param angle 旋转角度
       */
      rotateLeft (angle) {
        this.globalOptions.globe.viewControl.targetCoord[1] += angle
      },

      /**
       * @see rotateLeft
       */
      rotateRight (angle) {
        this.globalOptions.globe.viewControl.targetCoord[1] -= angle
      },

      /**
       * @see rotateLeft
       */
      rotateTop (angle) {
        this.globalOptions.globe.viewControl.targetCoord[0] += angle
      },

      /**
       * @see rotateLeft
       */
      rotateBottom (angle) {
        this.globalOptions.globe.viewControl.targetCoord[0] -= angle
      },

      /**
       * 改变地球旋转中心位置，默认为[0, 0, 0]
       */
      center (x, y, z) {
        if (checkNumber(x, y, z)) {
          this.globalOptions.globe.viewControl.center = Array.of(x, y, z)
        } else {
          console.warn(`Failed to move the center: [ ${x}, ${y}, ${z} ]`)
        }
      },

      /**
       * 地球将输入坐标的位置旋转到视角正前方中心
       * @param lng 经读
       * @param lat 纬度
       */
      targetCoord (lng, lat) {
        if (checkNumber(lng, lat)) {
          this.globalOptions.globe.viewControl.targetCoord = Array.of(lng, lat)
        } else {
          console.warn(`Failed to target the coordinate: [ ${lng}, ${lat} ]`)
        }
      }
    }
  }
</script>

<style scoped>

  .global-resolution-ratio {
    height: 1080px;
    width: 1920px;
  }

</style>
