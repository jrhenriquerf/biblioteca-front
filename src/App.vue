<template>
  <div id="app">
    <m-topbar :routes="routes" />
    <div class="body">
      <router-view></router-view>
    </div>
    <m-footer />
  </div>
</template>

<script>
import TopBar from './components/shared/TopBar.vue';
import Footer from './components/shared/Footer.vue';
import routes from './routes';

export default {
  name: 'App',
  components: {
    'm-topbar': TopBar,
    'm-footer': Footer,
  },
  data() {
    return {
      routes: routes.filter((route) => route.showOnMenu),
    };
  },
};
</script>

<style>
  html, body, #app {
    height: 100%;
  }
  .body {
    min-height: 80%;
  }
  .multiselect-vue .multiselect__tags {
    border: 1px solid #ced4da;
  }
</style>
