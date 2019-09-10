<template>

	<div v-if="model.openTitle"  :data-city="model.title"  :class="widgetClass" :data-seq="model.level" class="animated fadeIn v2-rotate-ctn" :style="model.commonStyle" >
								<div class="trade-volume-count">{{model.value}}</div>
								<div class="location">
									<div class="font surface"></div>
									<div class="right surface"></div>
									<div class="back surface"></div>
									<div class="left surface"></div>
									<div class="top surface"></div>
									<div class="bottom-shadow"></div>
						</div>
		</div>
			<div v-else  :class="widgetClass" class="animated fadeIn v2-rotate-ctn" :style="model.commonStyle" >
								<div class="location">
									<div class="font surface"></div>
									<div class="right surface"></div>
									<div class="back surface"></div>
									<div class="left surface"></div>
									<div class="top surface"></div>
									<div class="bottom-shadow"></div>
						</div>
		</div>


</template>
<script>
export default {
  name: "v2-rotate-bar",

  data() {
    return {

    };
  }
};
</script>

<style lang="scss">
.v2-rotate-ctn{
	position: relative;

   &[data-seq="1"][data-seq]:after {
		background-color: #fb473a;
	}
	&[data-seq="2"][data-seq]:after {
		background-color: #e96819;
	}
	&[data-seq="3"][data-seq]:after {
		background-color: #ce9500;
	}
	&[data-seq="4"][data-seq]:after {
		background-color: #00addc;
	}
	&[data-seq="5"][data-seq]:after {
		background-color: #00b831;
	}
	&[data-city] {
		background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAmCAYAAAAiPrKqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjhERjAxNEY2NDQ3MTFFOTg0QjlFRDMyNTAxNDU1OEMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjhERjAxNTA2NDQ3MTFFOTg0QjlFRDMyNTAxNDU1OEMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyOERGMDE0RDY0NDcxMUU5ODRCOUVEMzI1MDE0NTU4QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyOERGMDE0RTY0NDcxMUU5ODRCOUVEMzI1MDE0NTU4QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiLt/PsAAAGMSURBVHja7Ny7SsNQHIDx09bF26KiS19BdzefoOjqrIOSJzBDU9A+gC1d3Lwiii41oA6KBcVBcCiOBS+LUhQqNWJb4olg0RJB40FP4PuW02YK//OjnGRoRIxkRGtm2piSS04Q/bA2H0yJp6qTWcptiPJDhQnRt5N2RLTlwmCtVl/ZWszHwERBin7AFBeusO31va7L61smQ8FBSUwdctkp7J/EixclpkLBQUlMMbmunZ8Wh44Oz5gI/foXav6qdJPYzReYBikBNb25bIt6o8E0SM0Zynl+YRKk9imPCFAEKAIUEaAIUAQoIkARoAhQBCgiQBGgCFBEgCJAEaCIAEWAIp3r7mwHFKnDND455n1MAYqUYOrr70nNDgsLUKQMk3ctYh677n/fWPnuXqwubIvHqsMuhRjTGyi//4f668y0YUlUSVCFG5M2h/K5mazl3Zx3k+9PC6Q/Jm/ftH1tAKrwY9LutUET1cQoqEKISTtQTVQDvaAKISZtDuVfHdTlkmQ7tckXk3tgfPr+KsAAzxWJLKskdDgAAAAASUVORK5CYII=');
		width: 148px;
		height: 38px;
		position: absolute;
		transition: transform 0.5s;
	}
}

	[data-seq]:after {
		content: "TOP"attr(data-seq);
		position: absolute;
		top: 8px;
		left: 6px;
		height: 16px;
		line-height: 16px;
		font-size: 14px;
		width:34px;
		color: #e8f2fe;
		text-align: center;
		background-color: #00addc;
		border-radius: 0 4px 0 4px;
		padding: 0 4px;
	}
	[data-city]:before {
		content: attr(data-city);
		color: #e8f2fe;
		line-height: 32px;
		padding-left: 56px;
		font-size: 16px;
	}


    .location {
		position: absolute;
		transform-style: preserve-3d;
		perspective: 200px;
		perspective-origin: center top;
		width: 20px;
		height: 100px;
		left: 50%;
		top: -24px;
		margin-left: -10px;
	}
	.surface {
		width: 20px;
		height: 30px;
		clip-path: polygon(0% 0%, 100% 0%, 50% 100%);
		background-color: #e6483c;
		position: absolute;
		top: 70px;
		left: 0;
		transform-origin: center center;
	}
	.top.surface {
		width: 20px;
		height: 20px;
		background-color: #02c3f2;
		position: absolute;
		top: 61px;
		left: 0;
		transform: rotateX(90deg);
		clip-path: none;
		animation: location_top 5s linear infinite;
	}
	[data-seq="1"] .top.surface {
		background-color: #ff8077;
	}
	[data-seq="1"] .font.surface{
		animation: location_font_top1 5s linear infinite;
	}
	[data-seq="1"] .right.surface{
		animation: location_right_top1 5s linear infinite;
	}
	[data-seq="1"] .back.surface{
		animation: location_back_top1 5s linear infinite;
	}
	[data-seq="1"] .left.surface{
		animation: location_left_top1 5s linear infinite;
	}
	[data-seq="2"] .top.surface {
		background-color: #fc8b49;
	}
	[data-seq="2"] .font.surface{
		animation: location_font_top2 5s linear infinite;
	}
	[data-seq="2"] .right.surface{
		animation: location_right_top2 5s linear infinite;
	}
	[data-seq="2"] .back.surface{
		animation: location_back_top2 5s linear infinite;
	}
	[data-seq="2"] .left.surface{
		animation: location_left_top2 5s linear infinite;
	}
	[data-seq="3"] .top.surface {
		background-color: #f4c63a;
	}
	[data-seq="3"] .font.surface{
		animation: location_font_top3 5s linear infinite;
	}
	[data-seq="3"] .right.surface{
		animation: location_right_top3 5s linear infinite;
	}
	[data-seq="3"] .back.surface{
		animation: location_back_top3 5s linear infinite;
	}
	[data-seq="3"] .left.surface{
		animation: location_left_top3 5s linear infinite;
	}
	[data-seq="5"] .top.surface {
		background-color: #00f161;
	}
	[data-seq="5"] .font.surface{
		animation: location_font_top5 5s linear infinite;
	}
	[data-seq="5"] .right.surface{
		animation: location_right_top5 5s linear infinite;
	}
	[data-seq="5"] .back.surface{
		animation: location_back_top5 5s linear infinite;
	}
	[data-seq="5"] .left.surface{
		animation: location_left_top5 5s linear infinite;
	}

	.font.surface {
		/*background-color: blue;*/
		transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		animation: location_font 5s linear infinite;
	}
	.right.surface {
		/*background-color: yellow;*/
		transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		animation: location_right 5s linear infinite;
	}
	.back.surface {
		/*background-color: green;*/
		transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		animation: location_back 5s linear infinite;
	}
	.left.surface {
		/*background-color: red;*/
		transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		animation: location_left 5s linear infinite;
	}

	@keyframes location_top {
		0% { 
			transform: rotateY(45deg) rotateX(90deg); 
		}
		100% { 
			transform: rotateY(-315deg) rotateX(90deg); 
		}
	}
	@keyframes location_font_top1 {
		0% { 
			background-color: #e6483c;
			transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		}
		50% {
			background-color: #e6483c;
		}
		75% {
			background-color: #ffaaa3;
		}
		100% { 
			background-color: #e6483c;
			transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_right_top1 {
		0% { 
			background-color: #ffaaa3;
			transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		}
		75% {
			background-color: #e6483c;
		}
		100% { 
			background-color: #ffaaa3;
			transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_back_top1 {
		0% { 
			background-color: #e6483c;
			transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		}
		25%{
			background-color: #ffaaa3;
		}
		100% { 
			background-color: #e6483c;
			transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_left_top1 {
		0% { 
			background-color: #ffaaa3;
			transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		}
		25% {
			background-color: #e6483c;
		}
		50% {
			background-color: #ffaaa3;
		}
		100% { 
			background-color: #ffaaa3;
			transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_font_top2 {
		0% { 
			background-color: #d67741;
			transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		}
		50% {
			background-color: #d67741;
		}
		75% {
			background-color: #ffd0b3;
		}
		100% { 
			background-color: #d67741;
			transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_right_top2 {
		0% { 
			background-color: #ffd0b3;
			transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		}
		75% {
			background-color: #d67741;
		}
		100% { 
			background-color: #ffd0b3;
			transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_back_top2 {
		0% { 
			background-color: #d67741;
			transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		}
		25%{
			background-color: #ffd0b3;
		}
		100% { 
			background-color: #d67741;
			transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_left_top2 {
		0% { 
			background-color: #ffd0b3;
			transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		}
		25% {
			background-color: #d67741;
		}
		50% {
			background-color: #ffd0b3;
		}
		100% { 
			background-color: #ffd0b3;
			transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_font_top3 {
		0% { 
			background-color: #bc9004;
			transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		}
		50% {
			background-color: #bc9004;
		}
		75% {
			background-color: #fff5c8;
		}
		100% { 
			background-color: #bc9004;
			transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_right_top3 {
		0% { 
			background-color: #fff5c8;
			transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		}
		75% {
			background-color: #bc9004;
		}
		100% { 
			background-color: #fff5c8;
			transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_back_top3 {
		0% { 
			background-color: #bc9004;
			transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		}
		25%{
			background-color: #fff5c8;
		}
		100% { 
			background-color: #bc9004;
			transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_left_top3 {
		0% { 
			background-color: #fff5c8;
			transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		}
		25% {
			background-color: #bc9004;
		}
		50% {
			background-color: #fff5c8;
		}
		100% { 
			background-color: #fff5c8;
			transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_font_top5 {
		0% { 
			background-color: #00b831;
			transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		}
		50% {
			background-color: #00b831;
		}
		75% {
			background-color: #70f49e;
		}
		100% { 
			background-color: #00b831;
			transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_right_top5 {
		0% { 
			background-color: #70f49e;
			transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		}
		75% {
			background-color: #00b831;
		}
		100% { 
			background-color: #70f49e;
			transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_back_top5 {
		0% { 
			background-color: #00b831;
			transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		}
		25%{
			background-color: #70f49e;
		}
		100% { 
			background-color: #00b831;
			transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_left_top5 {
		0% { 
			background-color: #70f49e;
			transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		}
		25% {
			background-color: #00b831;
		}
		50% {
			background-color: #70f49e;
		}
		100% { 
			background-color: #70f49e;
			transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_font {
		0% { 
			background-color: #0091b9;
			transform: rotateY(45deg) translateZ(-5px) rotateX(20deg);
		}
		50% {
			background-color: #0091b9;
		}
		75% {
			background-color: #80d7f5;
		}
		100% { 
			background-color: #0091b9;
			transform: rotateY(-315deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_right {
		0% { 
			background-color: #80d7f5;
			transform: rotateY(135deg) translateZ(-5px) rotateX(20deg);
		}
		75% {
			background-color: #0091b9;
		}
		100% { 
			background-color: #80d7f5;
			transform: rotateY(-225deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_back {
		0% { 
			background-color: #0091b9;
			transform: rotateY(225deg) translateZ(-5px) rotateX(20deg);
		}
		25%{
			background-color: #80d7f5;
		}
		100% { 
			background-color: #0091b9;
			transform: rotateY(-135deg) translateZ(-5px) rotateX(20deg);
		}
	}
	@keyframes location_left {
		0% { 
			background-color: #80d7f5;
			transform: rotateY(315deg) translateZ(-5px) rotateX(20deg);
		}
		25% {
			background-color: #0091b9;
		}
		50% {
			background-color: #80d7f5;
		}
		100% { 
			background-color: #80d7f5;
			transform: rotateY(-45deg) translateZ(-5px) rotateX(20deg);
		}
	}

    .trade-volume-count {
		position: absolute;
		left: 90px;
		top: 5px;
		font-family: 悦黑;
    font-weight: normal;
    font-size: 15px;
    color: #f0f6fc;
   
	}
	[data-seq="1"] .bottom-shadow {
		animation: boxShadow1 0.8s linear infinite;
	}
	[data-seq="2"] .bottom-shadow {
		animation: boxShadow2 0.8s linear infinite;
	}
	[data-seq="3"] .bottom-shadow {
		animation: boxShadow3 0.8s linear infinite;
	}
	.bottom-shadow {
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: rgba(255,255,255,0.8);
		border-radius: 50%;
		top: 94px;
		left: 5px;
		transform: rotateX(90deg);
		animation: boxShadow 0.8s linear infinite;
	}
	@keyframes boxShadow1 {
		0% {
			box-shadow: 0 0 0px 0px rgba(255,255,255,0),
			0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2),
			0 0 0px 40px rgba(255,255,255,0.2),
			0 0 0px 50px rgba(255,255,255,0.2);
		}
		100% {
			box-shadow: 0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2),
			0 0 0px 40px rgba(255,255,255,0.2),
			0 0 0px 50px rgba(255,255,255,0.2),
			0 0 0px 60px rgba(255,255,255,0);
		}
	}
	@keyframes boxShadow2 {
		0% {
			box-shadow: 0 0 0px 0px rgba(255,255,255,0),
			0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2),
			0 0 0px 40px rgba(255,255,255,0.2);
		}
		100% {
			box-shadow: 0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2),
			0 0 0px 40px rgba(255,255,255,0.2),
			0 0 0px 50px rgba(255,255,255,0);
		}
	}
	@keyframes boxShadow3 {
		0% {
			box-shadow: 0 0 0px 0px rgba(255,255,255,0),
			0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2);
		}
		100% {
			box-shadow: 0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0.2),
			0 0 0px 40px rgba(255,255,255,0);
		}
	}
	@keyframes boxShadow {
		0% {
			box-shadow: 0 0 0px 0px rgba(255,255,255,0),
			0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2);

		}
		100% {
			box-shadow: 0 0 0px 10px rgba(255,255,255,0.2),
			0 0 0px 20px rgba(255,255,255,0.2),
			0 0 0px 30px rgba(255,255,255,0);
		}
	}
</style>