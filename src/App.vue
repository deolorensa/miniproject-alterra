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
    components: { NavbarMain }
}
</script>

<style>
</style>
