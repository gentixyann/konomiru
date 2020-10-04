import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import { routes } from './route';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAGNUWmcdndD9eqFPAVGMohflGv9tjNNg8",
  authDomain: "konomiru-429d7.firebaseapp.com",
  databaseURL: "https://konomiru-429d7.firebaseio.com",
  projectId: "konomiru-429d7",
  storageBucket: "konomiru-429d7.appspot.com",
  messagingSenderId: "44258461880",
  appId: "1:44258461880:web:43d4e46eb645daa937cc4d",
  measurementId: "G-KJQ26V0WBS"
};
firebase.initializeApp(firebaseConfig);


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
