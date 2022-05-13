<template>
  <div>
        <div class="container flex flex-wrap justify-center">
          <div v-for="article in newsList" id="article" :key="article.original_title" class="">
              <div class="max-w-sm bg-white rounded-lg  shadow-md hover:bg-sky-50 m-3">
              <a href="https://www.themoviedb.org/">
                  <img class="" :src="'https://image.tmdb.org/t/p/w500/'+article.poster_path" alt="" />
              </a>
              <div class="p-5">
                <a href="https://www.themoviedb.org/">
                  <h5 class="my-1 text-2xl font-bold tracking-tight text-sky-800">{{ article.original_title }}</h5>
                </a>
                <p class="max-h-20 mb-3 truncate font-normal text-gray-700 ">{{ article.overview }}</p>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>


<script>
export default {
computed: {
    newsList() {
      return this.$store.state.newsList
    }
  },
  mounted() {
    this.fetchNews({
      keyword:"" || "money",
    })
  },
  methods: {
    fetchNews({keyword}) {
      this.$store.dispatch('fetchNews',{
        keyword,
      })
    }
  }
};
</script>
<style>
</style>


