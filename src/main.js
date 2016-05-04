import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import Router from './routes';

Vue.use(VueResource)

// Vue环境设置
Vue.config.debug = process.env.NODE_ENV !== 'production'

Router.start(App, '#app');
window.vmCache = {};
Router.beforeEach( (transition) => {
    // let from = transition.from;
    // if(from.keepAlive) {
    //     cache[from.path] = from.router._views;
    // }
    // if(cache[transition.to.path]) {
    //     transition.to.router._views = cache[transition.to.path];
    //     // transition.abort();
    //     // return;
    // }
    if ( transition.to.auth ) {
        let from = transition.from;
        let to = transition.to;

        window.scrollTo(0, 0);
        transition.next();
    }
});


