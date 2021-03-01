import Vue from 'vue';
import App from './App.vue';
import router from './route';
import vuetify from './plugins/vuetify';
import { store } from './store/store';

import VueSignature from "vue-signature-pad";

Vue.use(VueSignature);
Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
