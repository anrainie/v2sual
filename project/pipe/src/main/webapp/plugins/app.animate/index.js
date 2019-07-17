import 'animate.css';
const uuidv4 = require('uuid/v4');

export default function (element, animate = '', delay = '', speed = '', loop = 1) {

	const context = this;

	return new Promise(async res => {
		const classList = element && element.classList;
		const c = ['animated', animate, delay, speed, loop === -1 ? 'infinite' : ''].filter(e => !!e);

		//假设是循环
		if (classList && classList.add) {
			classList.remove(c);
			if (loop < 0) {
				classList.add.apply(classList, c);
				res('animationend');
			} else if (loop > 0) {
				const handleAnimationEnd = (isKillIt) => {
					classList.remove.apply(classList, c);

					if (--loop && isKillIt!==true) {
						setTimeout(() => classList.add.apply(classList, c), 50);
						//element.addEventListener('animationend', handleAnimationEnd);
					} else {
						element.removeEventListener('animationend', handleAnimationEnd);

						//移除动画事件
						const uuid = element.dataset.animate;
						context.$animate = context.$animate || {};
						delete context.$animate[uuid];
						delete element.dataset.animate;

						res('animationend');
					}
					console.log(loop);
					console.log(context);
				}

				classList.add.apply(classList, c);
				element.addEventListener('animationend', handleAnimationEnd);

				//添加Element Animation ID
				const uuid = uuidv4();
				element.dataset.animate=uuid;
				context.$animate = context.$animate || {};
				context.$animate[uuid]=handleAnimationEnd;				
			}
		}

	})

}
