import 'animate.css';

export default (element, animate = '', delay = '', speed = '', callback, loop = false) => {
    const c = ['animated', animate, delay, speed, loop ? 'infinite' : ''];
    const handleAnimationEnd = () => {
        element.classList.remove.apply(element.classList, c);
        element.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }
    element.classList.add.apply(element.classList, c);
    element.addEventListener('animationend', handleAnimationEnd);
}