<template>
  <b-navbar toggleable="lg" type="dark" variant="dark" class="menu">
    <b-navbar-brand href="#">Biblioteca</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="(route, index) in routes" :key="index">
          <router-link :to="route.path || '/'" class="router-link">{{ route.titulo }}</router-link>
        </b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            Usuário
          </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Sair</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
  .router-link {
    color: rgba(255,255,255,.5);
  }

  .menu {
    margin-bottom: 20px;
  }
</style>
