import 'animate.css';

export default (element, animate = '', delay = '', speed = '', loop = 1) => {

    return new Promise(async res => {
        const c = ['animated', animate, delay, speed, loop === -1 ? 'infinite' : ''].filter(e=>!!e);

        //假设是循环
        if (loop < 0) {
            element.classList.add.apply(element.classList, c);
            res('animationend');
        } else if (loop > 0) {
            const handleAnimationEnd = () => {
                element.classList.remove.apply(element.classList, c);
                if (--loop) {
                    element.classList.add.apply(element.classList, c);
                } else {
                    element.removeEventListener('animationend', handleAnimationEnd)
                    res('animationend');
                }
            }
            element.classList.add.apply(element.classList, c);
            element.addEventListener('animationend', handleAnimationEnd);
        }
    })

}
