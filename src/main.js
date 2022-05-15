import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import 'flowbite';
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';



Vue.use(VueApollo)
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'https://joint-drum-43.hasura.app/v1/graphql'
  //'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

new Vue({
  el: '#app',
  router,
  store,
  // inject apolloProvider here like vue-router or vuex
  apolloProvider,
  render: h => h(App),
})


