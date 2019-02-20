import '../../node_modules/@fortawesome/fontawesome-free/js/all.min.js';

import Vue from 'vue';

import App from '/js/components/App.vue';

Vue.config.productionTip = false;

window.app = new Vue({
	render(h) {
		return h(App);
	},
});

window.app.$mount('#app');
