<template>
  <b-container>
    <h2>Listagem de autores</h2>
    <hr />
    <b-row>
      <b-col>
        <div class="bt-new float-right">
          <router-link to="newAuthor">
            <b-button variant="primary">Novo autor</b-button>
          </router-link>
        </div>
      </b-col>
    </b-row>
    <b-form-input
      id="input-search"
      v-model="search"
      type="search"
      required
      placeholder="Comece a digitar para filtrar"
    ></b-form-input>
    <m-table :items="authorsData" :filter="search" :fields="fields" ></m-table>
  </b-container>
</template>

<script>
import Table from '../../shared/Table.vue';
import AuthorService from '../../../domain/author/services/AuthorService';

export default {
  name: 'ListAuthors',
  components: {
    'm-table': Table,
  },
  data() {
    return {
      search: '',
      authorsData: [],
      fields: [
        { key: 'id', label: 'Id', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'surname', label: 'Sobrenome', sortable: true },
      ],
    };
  },

  mounted() {
    this.authorService.list().then((response) => {
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

  created() {
    this.authorService = new AuthorService(this.axios);
  },
};
</script>

<style scoped>
  .bt-new {
    margin-bottom: 10px;
  }
</style>
