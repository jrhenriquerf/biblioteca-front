<template>
  <b-container>
    <h2>Listagem de livros</h2>
    <hr />
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-search-group"
        label="Busque o livro:"
        label-for="input-search"
        description="Filtro para as colunas Nome ou Sobrenome"
      >
        <b-form-input
          id="input-search"
          v-model="search"
          type="search"
          required
          placeholder="Comece a digitar para filtrar"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <label for="autor-filter">Autor: </label>
        <multiselect
          id="autor-filter"
          class="multiselect-vue"
          v-model="searchAuthorSelected"
          placeholder="Selecione um autor para filtrar"
          label="name"
          track-by="language"
          :options="authors"
          :multiple="true"
          :taggable="false">
        </multiselect>
      </b-form-group>
    </b-form>
    <m-table :items="booksData" :filter="search" :fields="fields" ></m-table>
  </b-container>
</template>

<script>
import Table from '../../shared/Table.vue';

export default {
  name: 'ListBooks',
  components: {
    'm-table': Table,
  },
  data() {
    return {
      search: '',
      searchAuthorSelected: [],
      booksData: [],
      authors: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ],
      fields: [
        { key: 'id', sortable: true },
        { key: 'title', label: 'Título', sortable: true },
        {
          key: 'authors',
          label: 'Autores',
          formatter: (author) => author.map(
            (authorMap) => (authorMap.surname ? `${authorMap.name} ${authorMap.surname}` : authorMap.name),
          ).join(', '),
        },
      ],
    };
  },

  methods: {
    onSubmit() {

    },

    onReset() {

    },
  },

  mounted() {
    this.axios.get('/books').then((response) => {
      let newId = 0;
      this.booksData = response.data.map(
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

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  .multiselect-vue .multiselect__tags {
    border: 1px solid #ced4da;
  }
</style>
