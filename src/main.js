import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;
import store from './store';
import './quasar'


new Vue({
  render: (h) => h(App),
  store,
}).$mount('#app');
