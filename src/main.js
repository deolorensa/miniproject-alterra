import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './index.css'
import 'flowbite';
import VueApollo from 'vue-apollo'
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';
import { WebSocketLink } from 'apollo-link-ws'
import { getMainDefinition } from 'apollo-utilities'
import {split} from 'apollo-link'


Vue.use(VueApollo)
Vue.use(VueSweetalert2);


Vue.config.productionTip = false

const httpLink = new HttpLink({
  // You should use an absolute URL here
  uri: 'https://joint-drum-43.hasura.app/v1/graphql'
  //'https://api.graphcms.com/simple/v1/awesomeTalksClone'
})

const wsLink = new WebSocketLink({
  uri:'wss://joint-drum-43.hasura.app/v1/graphql',
  options:{
    reconnect:true,
  },
})

const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true,
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


