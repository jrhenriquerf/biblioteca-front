<template>
  <div id="app">
    <m-topbar :routes="routes" />
    <router-view></router-view>
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

</style>
