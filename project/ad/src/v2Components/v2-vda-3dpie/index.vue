<template>
  <div>
    <div
      :class="widgetClass"
      :style="model.commonStyle"
      class="chart-content"
      style="width:400px;height:400px"
      ref="_op_vda3DPie"
    ></div>
  </div>
</template>
<script>
export default {
  name: "v2-vda-3dpie",
  data() {
    return {
      chart: null,
      error: false,
      currentData:{},
      vdaData:{}
    };
  },
  methods: {
   draw3DPieByThreeJS(option){
              var _color = [0xc23531,0x2f4554,0x61a0a8,0xd48265,0x91c7ae,0x749f83,0xca8622,0xbda29a,0x6e7074,0x546570,0xc4ccd3];
              var color = option.color || _color;
              var data = option.data;
              var radius = option.itemStyle.radius || 20;
              var height = option.itemStyle.height || 100;
debugger;
              var scene = new THREE.Scene();
              var camera = new THREE.PerspectiveCamera(75, option.width / option.height, 1, 1000);
              camera.position.x = 100;
              camera.position.y = 100;
              camera.position.z = 100;
              camera.lookAt(new THREE.Vector3(0, 0, 0));
              var renderer = new THREE.WebGLRenderer({
              antialias: option.antialias || true,// 抗锯齿
              alpha: option.alpha || true,// 背景透明
            });
              renderer.setSize(option.width, option.height);
              var container = option.content;
              var controls = new THREE.OrbitControls( camera, container );
              container.appendChild(renderer.domElement);
            var ambientLight = new THREE.AmbientLight(0xffffff, 0.8);// 环境灯
            scene.add(ambientLight);
            var directionalLight1 = new THREE.DirectionalLight( 0xffffff, 0.3);// 右后侧灯
            directionalLight1.position.set( 1, 1, 1 );
            var directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0.3);// 左后侧灯
            directionalLight2.position.set( -1, 1, -1 );
            var directionalLight3 = new THREE.DirectionalLight( 0xffffff, 0.2);// 顶灯
            directionalLight3.position.set( 0, 1, 0 );
            scene.add(directionalLight1);
            scene.add(directionalLight2);
            scene.add(directionalLight3);
            var myObjects = [];
            var refreshFlag = false;
            assemblyModel(option);
            
            function assemblyModel(option){
              myObjects = [];
              var currentAngle = 0;
              option.data.forEach((item,index) => {
                var heightValue = toFloat(item.heightValue);
                var sector = toFloat(item.sector);
                var group = new THREE.Group();
                var geometry = new THREE.CylinderGeometry(radius, radius, height*heightValue, 64, 64, false, 0, (2*Math.PI)*sector);
                var material = new THREE.MeshPhongMaterial({'color': color[index], side: THREE.DoubleSide});
                var cylinder = new THREE.Mesh(geometry, material);
                var bottomPosition = (height-height*heightValue)/2*-1;// 位置贴底
                cylinder.position.set(0, bottomPosition, 0);
                cylinder.rotation.y = currentAngle;
                group.add(cylinder);

                var planeGeometry = new THREE.PlaneGeometry(radius, height*heightValue);
                var planeMaterial = new THREE.MeshLambertMaterial({color: color[index], side: THREE.DoubleSide});
                var plane_A = new THREE.Mesh(planeGeometry, planeMaterial);// 两侧封口
                var plane_B = new THREE.Mesh(planeGeometry, planeMaterial);// 两侧封口
                var rotateObjA = changePivot(radius/2, bottomPosition*-1, 0, plane_A);
                var rotateObjB = changePivot(radius/2, bottomPosition*-1, 0, plane_B);
                rotateObjA.rotation.y = currentAngle + 0.5*Math.PI;
                rotateObjB.rotation.y = currentAngle + 0.5*Math.PI + (2*Math.PI)*sector;
                rotateObjA.position.set(0,0,0);
                rotateObjB.position.set(0,0,0);
                group.add(rotateObjA);
                group.add(rotateObjB);
                myObjects.push(group);
                scene.add(group);

                currentAngle += (2*Math.PI)*sector;// 记录已占角度
              })
            }

            function animate() {
              requestAnimationFrame( animate );
              if(refreshFlag){
                clearScene();
                assemblyModel(option);
                refreshFlag = false;
              }
              renderer.render(scene, camera);
            }
            //通过x,y,z指定旋转中心，obj是要旋转的对象
            function changePivot(x,y,z,obj){
              var wrapper = new THREE.Object3D();
              wrapper.position.set(x,y,z);
              wrapper.add(obj);
              obj.position.set(-x,-y,-z);
              return wrapper;
            }
            function toFloat(percent){
              var weishu = parseFloat(percent).toString().includes('.')?parseFloat(percent).toString().split(".")[1].length:0;
              return (parseFloat(percent)*0.01).toFixed(weishu+2);
            }
            function update(newOption){
              refreshFlag = true;
              option = {
                ...option,
                ...newOption
              };
            }
            function clearScene(){
              // 从scene中删除模型并释放内存
              if(myObjects.length > 0){   
                for(var i = 0; i< myObjects.length; i++){
                  var currObj = myObjects[i];
                  // 判断类型
                  if(currObj instanceof THREE.Scene){
                    var children = currObj.children;
                    for(var i = 0; i< children.length; i++){
                      deleteGroup(children[i]);
                    } 
                  }else{        
                    deleteGroup(currObj);
                  }
                  scene.remove(currObj);
                }
              }
            }
            // 删除group，释放内存
            function deleteGroup(group) {
              if (!group) return;
              group.traverse(function (item) {
                // 删除掉所有的模型组内的mesh
                if (item instanceof THREE.Mesh) {
                  item.geometry.dispose(); // 删除几何体
                  item.material.dispose(); // 删除材质
                }
              });
            }
            animate();
            return {
              update
            }
          }
   },
  mounted() {
         // 调用
         debugger;
          var $pie = this.draw3DPieByThreeJS({
            "data": [{
              "heightValue": "20%",// 高度百分比
              "sector": "10%",// 扇形百分比
            },{
              "heightValue": "30%",// 高度百分比
              "sector": "20%",// 扇形百分比
            },{
              "heightValue": "50%",// 高度百分比
              "sector": "25%",// 扇形百分比
            },{
              "heightValue": "60%",// 高度百分比
              "sector": "25%",// 扇形百分比
            },{
              "heightValue": "40%",// 高度百分比
              "sector": "20%",// 扇形百分比
            }],
            "width": 1000,// 窗口宽
            "height": 600,// 窗口高
            "content":this.$refs._op_vda3DPie, // 渲染视图的dom对象
            "itemStyle":{
              "radius": 60,// 扇形体上下底面的半径，默认20,
              "height": 100,// 扇形体最大高度，默认100
            }
          });

          // 定时刷新数据
          setInterval(() => {
            var randomValue = [];
            var total = 0
            do{
              var r = parseInt(Math.random()*100);
              if(r>0){
                total += r;
                randomValue.push(r)
              }
            }while(randomValue.length < 5)
            $pie.update({
              "data": randomValue.map((item,index)=>{
                return {
                  "heightValue": (20+index*10)+"%",// 高度百分比
                  "sector": (item/total*100).toFixed(2)+"%",// 扇形百分比
                }
              })
            });
            console.log('随机数据：'+randomValue);
          }, 1000)
  }
};
</script>

<style lang="scss" scoped>
.chart-content {
  position: relative;
}
.chart-tips {
  position: absolute;
  padding: 10px;
  top: 160px;
  left: 20px;
  border: 1px solid #ccc;
  box-shadow: 1px 2px 6px #ccc;
  border-radius: 4px;
  background-color: #fff;
  display: none;
}
.chart-content:hover {
  color: blue;
}
.chart-content:hover + .chart-tips {
  display: block !important;
}
.chart-tips:hover {
  display: block !important;
}
</style>




