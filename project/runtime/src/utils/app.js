import _import from '@/router/_import_production.js'
import _require from '@/router/_require_pro.js'
import router from '../router'
import Layout from '@/views/Layout'


export default {

    
    
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
            let routerTemp = global.antRouter;
            let globalPageMap = global.pageMap;
            let routerUrl;
            let openedTabs;

            let self = this.$store.state.openedTabs? this:this.$root;

            if (status === false || status === 'false') return;
            
            path = !path ? page : path;

            let haseAdded = !routerTemp.filter(item => item.children && item.children.length && item.children[0].path === path.replace('/', '')).length;
            if (!self.beforeOpen || await self.beforeOpen(option)) {
                switch (type) {
                    case 'SUB':

                        self.$store.commit("set_D_visible", true);
                        self.$store.commit("setModalCallback", {
                            cancel: cancelCallback,
                            confirm: confirmCallback,
                            hideCancelBtn:hideCancelBtn,
                            hideConfirmBtn:hideConfirmBtn
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
                        if (haseAdded) {
                            routerTemp = routerTemp.concat([{
                                path: '',
                                component: Layout,
                                hidden: true,
                                meta: {
                                    title: title
                                },
                                props: true,
                                children: [{
                                    path: path,
                                    component: other ? _require(page) : _import(page),
                                    //component:_import(page),
                                    meta: {
                                        title: title,
                                        type: 'SELF'
                                    },
                                }]
                            }]);

                            router.addRoutes(routerTemp);
                     
                            global.antRouter = routerTemp;

                            globalPageMap[path] = true;
                        } else {
                            routerTemp = routerTemp.map((item) => {
                                if (item.children && item.children.length && item.children[0].path === path.replace('/', '')) {
                                    item.children[0].meta.type = 'SELF';
                                    item.children[0].meta.title = title
                                }
                            });
                        }

                        router.push({
                            path: path,
                            query: params
                        });


                        break;
                    default:

                        openedTabs = self.$store.state.openedTabs;

                        if (openedTabs.filter(item => item.route === path).length) {
                            router.push({
                                path: path,
                                query: params
                            });
                            self.$store.commit("set_active_index", path);
                        } else {

                            if (!page && path !== '') {
                                routerTemp = routerTemp.filter(item => (item.children && item.children.length && item.children[0].path !== path.replace('/', '')) || (!item.children) || !item.children.length)
                            }


                            if (!routerTemp.filter(item => item.children && item.children.length && item.children[0].path === path.replace('/', '')).length) {
                                routerTemp = routerTemp.concat([{
                                    path: '',
                                    component: Layout,
                                    hidden: true,
                                    meta: {
                                        title: title
                                    },
                                    props: true,
                                    children: [{
                                        path: path,
                                        props: true,
                                        component: other ? _require(page) : _import(page),
                                        meta: {
                                            title: title,
                                            type: 'BLANK'
                                        },
                                    }]
                                }]);


                                router.addRoutes(routerTemp);
                                global.antRouter = routerTemp;


                            } else {

                                routerTemp = routerTemp.map((item) => {
                                    if (item.children && item.children.length && item.children[0].path === path.replace('/', '')) {

                                        item.children[0].meta.type = 'BLANK';
                                        item.children[0].meta.title = title;

                                    }
                                });
                            }

                            router.push({
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
                openedTabs;

         let self = this.$store.state.openedTabs? this:this.$root;
         

            if (!self.beforeClose || await self.beforeClose(option)) {
                if (self.$store.state.subDialogVisible) {

                    self.$store.commit("set_D_visible", false);

                } else {

                    path = !path ? self.$router.currentRoute.path : path;

                    global.antRouter = global.antRouter.filter(item => (item.children && item.children.length && (item.children[0].path) !== path) || (item.children && !item.children.length) || (!item.children));


                    self.$store.commit("delete_tabs", path);
                    openedTabs = self.$store.state.openedTabs;

                    if (openedTabs && openedTabs.length >= 1) {

                        self.$store.commit("set_active_index", openedTabs[openedTabs.length - 1].route);

                        router.push({
                            path: self.$store.state.activeIndex
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
            
            !params&&(params = {});
            params.ctoken = ctoken;
            return global.$axios.get(url, {params:params});
        },
        $post(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            return global.$axios.post(`${url}?ctoken=${ctoken}`, params);
        },
        $putAxios(url, params) {
            var ctoken = localStorage.getItem('ctoken');

            return global.$axios.put(`${url}?ctoken=${ctoken}`, params);
        },
        $deleteAxios(url, params) {
            var ctoken = localStorage.getItem('ctoken');
            
            !params&&(params = {});
            params.ctoken = ctoken;
            return global.$axios.delete(url, {params:params});
        }
    }
}