<template>
    <Spin fix>
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="5" stroke-miterlimit="10"></circle>
            </svg>
        </div>
    </Spin>
</template>

<script>
    import Spin from '../spin'

    export default {
        name: 'SvgSpin',

        components:{
            Spin
        }
    }
</script>

<style>
.demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.demo-spin-col {
    height: 100px;
    position: relative;
    border: 1px solid #eee;
}



/*loading*/

.loader {
    width: 30px;
    height: 30px;
    position: relative;
    margin: 0 auto;
}

.circular {
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
    height: 100%;
    -webkit-transform-origin: center center;
    -ms-transform-origin: center center;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    -webkit-animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@-webkit-keyframes rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes rotate {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@-webkit-keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124;
    }
}

@-webkit-keyframes color {
    100%,
    0% {
        stroke: #0057e7;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #0057e7;
    }
    80%,
    90% {
        stroke: #0057e7;
    }
}

@keyframes color {
    100%,
    0% {
        stroke: #0057e7;
    }
    40% {
        stroke: #0057e7;
    }
    66% {
        stroke: #0057e7;
    }
    80%,
    90% {
        stroke: #0057e7;
    }
}
</style>