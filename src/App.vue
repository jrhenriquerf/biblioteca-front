<template>
  <div id="app">
    <m-topbar :routes="routes" />
    <router-view></router-view>
  </div>
</template>

<script>
import TopBar from './components/shared/TopBar.vue';
import routes from './routes';

export default {
  name: 'App',
  components: {
    'm-topbar': TopBar,
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
