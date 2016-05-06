require('../dist/style.css')

import Vue from 'vue'
import tableDocs from './example/tableDocs.vue';
import spinDocs  from './example/spinDocs.vue';

Vue.config.debug = true;

new Vue({
	el: '#Wrapper',
	components: {
		tableDocs,
		spinDocs
	},
	data () {
		return {

		}
	},
	ready () {

	}
})