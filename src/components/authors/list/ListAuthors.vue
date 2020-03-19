<template>
  <b-container>
    <h2>Listagem de autores</h2>
    <hr />
    <b-form-group
      id="input-search-group"
      label="Busque o autor:"
      label-for="input-search"
      description="Filtro para as colunas nome ou sobrenome"
    >
      <b-form-input
        id="input-search"
        v-model="search"
        type="search"
        required
        placeholder="Comece a digitar para filtrar"
      ></b-form-input>
    </b-form-group>
    <m-table :items="authorsData" :filter="search" :fields="fields" ></m-table>
  </b-container>
</template>

<script>
import Table from '../../shared/Table.vue';

export default {
  name: 'ListAuthors',
  components: {
    'm-table': Table,
  },
  data() {
    return {
      search: '',
      searchAuthorSelected: [],
      authorsData: [],
      fields: [
        { key: 'id', label: 'Id', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'surname', label: 'Sobrenome', sortable: true },
      ],
    };
  },

  mounted() {
    this.axios.get('/authors').then((response) => {
      let newId = 0;
      this.authorsData = response.data.map(
        ({
          id,
          ...restAtributes
        }) => {
          newId += 1;
          return { id: newId, ...restAtributes };
        },
      );
    });
  },
};
</script>

<style scoped>

</style>
