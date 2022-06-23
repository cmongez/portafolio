import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCPj2amCzmG9P7Vn6m9ng70UXNSstrzF7k",
  authDomain: "portafolio-2c0fd.firebaseapp.com",
  databaseURL: "https://portafolio-2c0fd-default-rtdb.firebaseio.com",
  projectId: "portafolio-2c0fd",
  storageBucket: "portafolio-2c0fd.appspot.com",
  messagingSenderId: "75419984127",
  appId: "1:75419984127:web:1880457a609eab7c99acca",
  measurementId: "G-5QZMPRFH6Y"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import 'bootstrap/dist/js/bootstrap.js'
