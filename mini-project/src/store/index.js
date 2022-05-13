import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newsList: [],
    info: '',
  },
  getters: {
  },
  mutations: {
    setNewsList(state, playload) {
      state.newsList = playload;
    },
    setInfo(state, playload) {
      state.info = playload;
    }
  },
  actions: {
    fetchNews(store, ){
      axios
          .get(`https://api.themoviedb.org/3/search/movie?api_key=05393432969715caf794d0e7943379f0&query=money&language=en-US&page=1`,{
            params: {
              limit:6,
              offset: 6,
            }
          })
          .then((response) => {store.commit('setNewsList', response.data.results);
        })
          .catch((error) => { store.commit("setInfo", error)
        })
    },
  },
  modules: {
  }
})
