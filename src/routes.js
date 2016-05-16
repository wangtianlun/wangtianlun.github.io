import Vue from 'vue';
import Router from 'vue-router';

import index from './views/index.vue';
// 简历
import resume from './views/resume.vue';

// 展示类
import table from './components/Table/table.vue';
import spin  from './components/Spin/spin.vue'; 

const components = {
    'index'       : index,
    'resume'      : resume,
    'table'       : table,
    'spin'        : spin
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
                component: components.index
            },
            '/table': {
                component: components.table
            },
            '/spin': {
                component: components.spin
            }
        }
    },
    '/resume'                               : {
        component: components.resume
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
    '/': 'resume'
})

export default router;
