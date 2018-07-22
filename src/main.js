// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.component('loading-item', {
  template: `<div class="timeline-item">
    <div class="animated-background">
      <div class="background-masker header-top"></div>
      <div class="background-masker header-left"></div>
      <div class="background-masker header-right"></div>
      <div class="background-masker header-bottom"></div>
      <div class="background-masker subheader-left"></div>
      <div class="background-masker subheader-right"></div>
      <div class="background-masker subheader-bottom"></div>
    </div>
  </div>`,
});

Vue.component('user-item', {
  props: ['email', 'name'],
  template: `<div>
      <h2 v-text="name"></h2>
      <p v-text="email"></p>
    </div>`,
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
