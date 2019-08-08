import util from '../util/index'
const { _require, _import } = util;

export default {

    data() {

        return {
            ...(this.$parent && this.$parent.params) || (this.$route && Object.keys(this.$route.query).length && this.$route.query) || {}
        }
    },
    beforeRouteEnter(to, from, next) {
        next((vm) => {
            let toComp = vm.$router.getMatchedComponents(to)[1] ? vm.$router.getMatchedComponents(to)[1] : vm.$router.getMatchedComponents(to)[0];

            toComp.resume && toComp.resume.call(vm);

            vm.__resume && vm.__resume();

        })
    },
    beforeRouteLeave(to, from, next) {
        let fromCom = this.$router.getMatchedComponents(from)[1] ? this.$router.getMatchedComponents(from)[1] : this.$router.getMatchedComponents(from)[0];

        fromCom.pause && fromCom.pause.call(this);

        this.__pause && this.__pause();

        next();
    },
    methods: {

        async open(option) {
            let {
                status,
                page,
                path,
                title,
                type,
                params,
                hideCancelBtn,
                hideConfirmBtn,
                confirmCallback,
                cancelCallback,
                other
            } = option;
            let routerTemp = this.$router.options.routes;
            let routerUrl;
            let openedTabs;
            let self = this.$store.state.openedTabs ? this : this.$root;

            if (status === false || status === 'false') return;
            path = !path ? page : path;
            if (path.charAt(0) !== '/') {
                path = `/${path}`
            }
            let hasIn = routerTemp[0].children.some((item) => item.path === path); //判断是否存在路由表里
            if (!self.beforeOpen || await self.beforeOpen(option)) {
                switch (type) {
                    case 'SUB':

                        self.$store.commit("set_D_visible", true);
                        self.$store.commit("setModalCallback", {
                            cancel: cancelCallback,
                            confirm: confirmCallback,
                            hideCancelBtn: hideCancelBtn,
                            hideConfirmBtn: hideConfirmBtn
                        })


                        self.$store.commit("set_subPageHref", page);
                        self.$store.commit("set_subPageParams", params);
                        self.$store.commit("set_subPageTitle", title);

                        self.__pause && self.__pause();


                        break;
                    case 'WINDOW':


                        localStorage.setItem('openWindow', page);

                        routerUrl = window.location.origin + '/#/' + page + (params && '?params=' + JSON.stringify(params));

                        window.open(encodeURI(routerUrl))

                        break;

                    case 'SELF':
                        if (!hasIn) {
                            routerTemp[0].children.push({
                                path: path,
                                component: other ? _require(page) : _import(page),
                                meta: {
                                    title: title,
                                    type: 'SELF'
                                },
                            });

                            self.$router.addRoutes(routerTemp);

                        } else {
                            routerTemp[0].children.map((item) => {
                                if (item.path === path) {
                                    item.meta.type = 'SELF';
                                    item.meta.title = title;
                                }
                            });

                        }
                        self.$router.push({
                            path: path,
                            query: params
                        });


                        break;
                    default:

                        openedTabs = self.$store.state.openedTabs;

                        if (openedTabs.filter(item => item.route === path).length) {  //已经在tab页
                            self.$router.push({
                                path: path,
                                query: params
                            });
                            self.$store.commit("set_active_index", path);
                        } else {


                            if (!hasIn) { //不存在路由表里
                                routerTemp[0].children.push({
                                    path: path,
                                    props: true,
                                    component: other ? _require(page) : _import(page),
                                    meta: {
                                        title: title,
                                        type: 'BLANK'
                                    },
                                });
                                self.$router.addRoutes(routerTemp);

                            } else {

                                routerTemp[0].children.map((item) => {
                                    if (item.path === path) {
                                        item.meta.type = 'BLANK';
                                        item.meta.title = title;
                                    }
                                });
                            }

                            self.$router.push({
                                path: path,
                                query: params
                            });
                        }


                }
            }


        },
        async close(option) {
            let {
                path
            } = option || {
                path: ''
            },
                openedTabs, URLQueryMap = {};

            let self = this.$store.state.openedTabs ? this : this.$root;

            if (!self.beforeClose || await self.beforeClose(option)) {
                if (self.$store.state.subDialogVisible) {

                    self.$store.commit("set_D_visible", false);

                } else {

                    path = !path ? self.$router.currentRoute.path : path;

                    self.$store.commit("delete_tabs", path);
                    openedTabs = self.$store.state.openedTabs;
                    URLQueryMap = self.$store.state.URLQueryMap;

                    if (openedTabs && openedTabs.length >= 1) {

                        self.$store.commit("set_active_index", openedTabs[openedTabs.length - 1].route);

                        self.$router.push({
                            path: self.$store.state.activeIndex,
                            query: URLQueryMap[self.$store.state.activeIndex] || {}
                        });

                    }
                }
            }

        },
        getUID() {
            return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36)
        },
        getParams() {
            let reg = new RegExp("(^|&)params=([^&]*)(&|$)");
            let query = window.location.hash.split("?")[1] && window.location.hash.split("?")[1].match(reg);

            query && (query = JSON.parse(unescape(decodeURI(query[2]))));

            return query || {};
        },
        $get(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            !params && (params = {});
            params.ctoken = ctoken;
            return this.$axios.get(url, { params: params });
        },
        $post(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            return this.$axios.post(`${url}?ctoken=${ctoken}`, params);
        },
        $putAxios(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            return this.$axios.put(`${url}?ctoken=${ctoken}`, params);
        },
        $deleteAxios(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            !params && (params = {});
            params.ctoken = ctoken;
            return this.$axios.delete(url, { params: params });
        }
    }
}