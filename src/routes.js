import Vue from 'vue';
import Router from 'vue-router';

const components = {
    'index'       : require('./views/index.vue')
};

// install router
Vue.use(Router);

// routing
let router = new Router();

// vue-router文档参考 http://vuejs.github.io/vue-router/index.html
// 如果当前组件的route-view里面映射的区域没有什么内容，可以在改组件的路由规则下配置一个subRoutes
router.map({
    '/index'                               : {
        component: components.index,
        subRoutes: {
            '/': {
                component: {
                    template: ''
                }
            }
        }
    },

    //  not found
    '*': {
        component: {
            template:
            '<div style="margin-top:50px;">' +
            '<h1>404 Not Found!!!</h1>' +
            '</div>'
        }
    }
});

router.redirect({
    '/': 'index'
})

export default router;
