export default function (element, animate = '', delay = '', speed = '', loop = 1) {

	const context = this;

	return new Promise(async res => {

		if(element && element.dataset){
			const uuid=element.dataset.animate;
			
			const $animate=context.$animate;

			if($animate && typeof $animate[uuid] === 'function'){
				$animate[uuid](true);
			}
		}

		res('animationkilled');
	});
}
