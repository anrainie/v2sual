<template>
  <div :style="model.style" ref="wrap" :class="wrapClass" class="signet">
    <canvas id="signet" width="300" height="300" :style="model.style"></canvas>
  </div>
</template>
<script>
import { widget, composite } from "../../assets/js/v2-view.js";
import { edit } from "../../assets/js/edit.js";
import { constants } from 'fs';
export default {
  name: "v2Signet",
  mixins: [widget, edit],
  mounted() {
	  let context = this.$el.childNodes[0].getContext("2d");
			  
		this.innerRender(context,this.model.data)
    
  },
  methods: {
    innerRender(context, option) {
	  var BORDER = Number(option.signetBorder) || 2, //边框粗细
	  	fontPosition=[], 
        signetContent = option.signetContent || [
          { value: "xx支行" },
          { value: "业务专用章" }
        ], //印章内容
        signetWidth = Number(option.signetWidth) || 200, //印章宽
        signetHeight = Number(option.signetHeight) || 200, //印章高
        signetX = Number(option.signetX) || 0, //印章横向位移
        signetY = Number(option.signetY) || 0, //印章纵向位移
        innerContentY = Number(option.innerContentY) || 0, //内容纵向位移
        contentFontSize = Number(option.contentFontSize) || 22,
        contentFontFamily = option.contentFontFamily || "Helvetica",
        contentFontWeight = option.contentFontWeight || "normal",
        d = signetWidth > signetHeight ? signetWidth : signetHeight, //直径
        r = d / 2, //半径
        x = d / 2 + signetX + BORDER, //印章中心点x
        y = d / 2 - Math.abs(signetHeight - signetWidth) / 2 + BORDER, //印章中心点y
        i,
        ratioX,
        ratioY,
        content;
      context.lineWidth = BORDER;
      context.strokeStyle = "#f00";
      context.fillStyle = "rgba( 0, 0, 0, 0)";
      context.beginPath();
      ratioX = signetWidth / d; //横轴缩放比率
      ratioY = signetHeight / d; //纵轴缩放比率
      context.save();
      context.scale(ratioX, ratioY);
      context.arc(x / ratioX, y / ratioY, r, 0, Math.PI * 2);
      context.closePath();
      context.restore();
      context.stroke();

      //画五角星
      // if (!!showIcon) {
      // 	create5star(context, x, y, 30, "#f00", 0);
      // }

      //normal
      // bold
      // bolder
      // lighter

      // 绘制印章内容
      context.font =
        contentFontWeight + " " + contentFontSize + "px " + contentFontFamily;
      context.textBaseline = "middle"; //设置文本的垂直对齐方式
      context.textAlign = "center"; //设置文本的水平对对齐方式
      context.lineWidth = 1;
      context.fillStyle = "#f00";
      fontPosition = [];
      if (signetContent && signetContent.length) {
        context.save();
        for (i = -1; (content = signetContent[++i]); ) {
			console.log(option.signetContent)
          if (content.display) {
            context.fillText(
              content.value,
              x,
              y * ratioY + r / 3 + (contentFontSize + 8) * i + innerContentY
            );
          }
          console.log(y * ratioY + r / 3 + contentFontSize * i + innerContentY);
          console.log(x - context.measureText(content.value).width / 2);
          fontPosition.push({
            content: content.value,
            x: x - context.measureText(content.value).width / 2,
            y: y * ratioY + r / 3 + contentFontSize * i + innerContentY,
            fontFamily: contentFontFamily
          });
        }
      }
      context.restore();

      // 绘制印章单位
      createTitle(context, option);

      //重置画板
      context.rotate(0);
      context.translate(0 - x, 0 - y);

      // 绘制印章单位
      function createTitle(context, option) {
        var company = option.signetTitle || "赞同科技电子印章模型", //印章标题
          titleY = Number(option.titleY) || 0, //标题纵向位移
          titleFontSize = Number(option.titleFontSize) || "40",
          titleFontFamily = option.titleFontFamily || "Helvetica",
          titleFontWeight = option.titleFontWeight || "normal",
          startAngle = Number(option.startAngle) || 195,
          count = company.length, // 字数
          chars = company.split(""),
          c,
          w,
          h,
          mark,
          firstAngle,
          angle,
          totalAngle,
          z,
          g,
          offset,
          wordArc,
          mid;

        mark = startAngle <= 180 ? 1 : -1;
        totalAngle = 180 + 2 * mark * Math.abs(180 - startAngle); //总旋转的角度
        firstAngle = (startAngle * Math.PI) / 180; //正圆第一旋转的位置
        angle = (totalAngle * Math.PI) / 180 / (count - 1); // 每个字要旋转的角度
        context.font =
          titleFontWeight + " " + titleFontSize + "px " + titleFontFamily;

        //椭圆
        if (signetWidth !== signetHeight) {
          c = chars[i]; // 需要绘制的字符
          w = signetWidth / 2 - titleY - 20;
          h = signetHeight / 2 - titleY - 20;
          mid = Math.floor(count / 2);
          wordArc = Math.asin(titleFontSize / (h * 2)); //半个字的弧度
          offset = count % 2 == 0 ? wordArc : 0;
          for (var i = 0; i < count; i++) {
            c = chars[i]; // 需要绘制的字符
            //angle = (i - mid) * ( 2 * wordArc);
            angle = (i - mid) * (2 * wordArc) + offset;
            z = x + w * Math.sin(angle);
            g = y - h * Math.cos(angle);
            context.translate(z, g);
            context.rotate((2 * i - 2 * mid + 1) * wordArc);
            context.fillText(c, 0, 0); // 此点为字的中心点
            context.setTransform(1, 0, 0, 1, 0, 0);
          }
          return;
        }

        //正圆
        context.translate(x, y); // 平移到此位置,
        for (var i = 0; i < count; i++) {
          c = chars[i]; // 需要绘制的字符
          if (i == 0) context.rotate(firstAngle);
          //5 6
          else context.rotate(angle);
          context.save();
          context.translate(r - 20 - titleY, 0); // 平移到此位置,此时字和x轴垂直
          context.rotate(Math.PI / 2); // 旋转90度,让字平行于x轴
          context.fillText(c, 0, 0); // 此点为字的中心点
          context.restore();
        }
      }

      //绘制五角星
      /**
       * 创建一个五角星形状. 该五角星的中心坐标为(sx,sy),中心到顶点的距离为radius,rotate=0时一个顶点在对称轴上
       * rotate:绕对称轴旋转rotate弧度
       */
      function create5star(context, sx, sy, radius, color, rotato) {
        context.save();
        context.fillStyle = color;
        context.translate(sx, sy); //移动坐标原点
        context.rotate(Math.PI + rotato); //旋转
        context.beginPath(); //创建路径
        var x = Math.sin(0);
        var y = Math.cos(0);
        var dig = (Math.PI / 5) * 4;
        for (var i = 0; i < 5; i++) {
          //画五角星的五条边
          var x = Math.sin(i * dig);
          var y = Math.cos(i * dig);
          context.lineTo(x * radius, y * radius);
        }
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
      }
    }
  }
};
</script>

<style>
	.signet{
		position: relative;
	}
	.signet>canvas{
		position: absolute;
	}
</style>

