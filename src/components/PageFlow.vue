<template>
   <div class="page-flow">
     <div class="page-flow-header">编辑器</div>
     <div class="page-flow-main" ref="flowCharts"></div>
   </div>
</template>

<script>
import * as d3 from 'd3';
let nodeData = [
  {'name': '统一监控平台', 'id': 'root', 'type': '0'},
  {'name': '中间件', 'id': 'root/middleware', 'type': '1'},
  {'name': 'WAS', 'id': 'root/middleware/WAS', 'type': '2'},
  {'name': 'server1', 'id': 'root/middleware/WAS/server1', 'type': '3'},
  {'name': '数据库', 'id': 'root/db', 'type': '1'},
  {'name': 'MySQL', 'id': 'root/db/MySQL', 'type': '2'},
  {'name': 'MYSQL1', 'id': 'root/db/MySQL/MYSQL1', 'type': '3'},
  {'name': '应用程序', 'id': 'root/application', 'type': '1'},
  {'name': 'APP', 'id': 'root/application/APP', 'type': '2'},
  {'name': 'CAMA_APP1', 'id': 'root/application/APP/CAMA_APP1', 'type': '3'},
  {'name': '其他软件', 'id': 'root/otherSoft', 'type': '1'},
  {'name': '其他软件', 'id': 'root/otherSoft/other', 'type': '2'},
  {'name': 'mycat', 'id': 'root/otherSoft/other/mycat', 'type': '3'},
  {'name': 'redis', 'id': 'root/otherSoft/other/redis', 'type': '3'},
  {'name': 'zookeeper', 'id': 'root/otherSoft/other/zookeeper', 'type': '3'}
];
export default {
  name: 'PageFlow',
  mounted () {
    let chartsContainer = this.$refs.flowCharts;
    const WIDTH = 1200;
    const HEIGHT = 700;
    let svg = d3.select(chartsContainer).append('svg').attr('width', WIDTH).attr('height', HEIGHT);
    let defs = svg.append('defs');
    defs.append('marker').attr('id', 'arrow').attr('markerWidth', 10).attr('markerHeight', 10).attr('refx', 5)
      .attr('refy', 5).attr('orient', 'auto').attr('markerUnits', 'strokeWidth').append('path').attr('fill', 'none').attr('stroke', '#b9b9b9')
      .attr('d', 'M4,4 L0,0 L0,8 z');
    defs.append('marker').attr('id', 'circle').attr('markerWidth', 5).attr('markerHeight', 5).attr('refx', 5)
      .attr('refy', 5).attr('orient', 'auto').attr('markerUnits', 'strokeWidth').append('circle').attr('fill', 'none').attr('stroke', '#555')
      .attr('cx', 2).attr('cy', 2).attr('r', 2);

    let nodeGroup = svg.append('g').classed('node-group', true);
    let linkGroup = svg.append('g').classed('link-group', true);
    // 生成树布局
    let tree = d3.tree().size([HEIGHT - 200, WIDTH - 200]);
    let stratify = d3.stratify().parentId((d) => {
      return d.id.substring(0, d.id.lastIndexOf('/'));
    });
    let root = stratify(nodeData);
    tree(root);

    // 交换xy
    //root.each(this.swapXY);

    let link = linkGroup.selectAll('.link').data(root.descendants().slice(1))
      .enter().append('path').attr('class', 'link').attr('fill', 'none').attr('stroke', '#555')
      .attr('stroke-opacity', 0.5).attr('stroke-width', '1.5px').attr('d', this.diagonal).attr('marker-start', 'url(#circle)').attr('marker-end', 'url(#arrow)');

    let node = nodeGroup.selectAll('.node')
      .data(root.descendants())
      .enter().append('g')
      .attr('class', function (d) {
        return 'node' + (d.children ? ' node--internal' : ' node--leaf');
      })
      .attr('transform', function (d) {
        return 'translate(' + d.y + ',' + d.x + ')';
      });
  },
  methods: {
    diagonal (d) {
      // let sweepFlag = 1;
      // if (d.x - d.parent.x > 0) {
      //   sweepFlag = 0;
      // }
      // return `M${d.parent.x},${d.parent.y}L${d.parent.x},${d.parent.y + 3}A5, 5 30,0 ${sweepFlag}, ${d.parent.x - 10} ${d.parent.y - 10}L${d.x}, ${d.parent.y - 10}`
      return 'M' + d.parent.y + ',' + d.parent.x
        + 'C' + (d.parent.y + 100) + ',' + d.parent.x
        + ' ' + (d.parent.y + 100) + ',' + d.x
        + ' ' + d.y + ',' + d.x;
    },
    swapXY(node) {
      let tmp = node.x;
      node.x = node.y;
      node.y = tmp;
    }
  }
};
</script>

<style scoped>
  .page-flow{
    width: 100%;
    height: 700px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  .page-flow-header{
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
  }

  .page-flow-main{
    width: 100%;
    height: 650px;
    background-color: #f2f2f2;
  }

  .node circle {
    fill: #999;
  }

  .node text {
    font: 10px sans-serif;
  }

  .node--internal circle {
    fill: #555;
  }

  .node--internal text {
    text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff;
  }

  .link{
    fill: none;
    stroke: #555;
    stroke-opacity: 0.4;
    stroke-width: 1.5px;
  }

  form {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    position: absolute;
    left: 10px;
    top: 10px;
  }

  label {
    display: block;
  }
</style>
