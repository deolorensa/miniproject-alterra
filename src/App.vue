<template>
  <div id="app">
    <nav>
      <NavbarMain/>
    </nav>
      <router-link to="/"></router-link>
    <router-view/>
  </div>
</template>

<script>
import NavbarMain from "./components/NavbarMain.vue";
export default {
    components: { NavbarMain },
    mounted: function () {
      document.title = "Uang Saku";
      },
}
</script>

<style>
</style>
