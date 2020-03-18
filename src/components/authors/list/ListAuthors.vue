<template>
  <b-container>
    <h2>Listagem de autores</h2>
    <hr />
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-search-group"
        label="Busque o autor:"
        label-for="input-search"
        description="Pesquise pelas colunas Nome ou Sobrenome"
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
        <multiselect
          v-model="searchAuthorSelected"
          :multiple="true"
          :close-on-select="false"
          :clear-on-select="false"
          :preserve-search="true"
          placeholder="Selecione um autor para filtrar"
          label="name"
          track-by="name"
          :preselect-first="true"
          :options="options">
          <template slot="selection" slot-scope="{ values, search, isOpen }">
            <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
              {{ values.length }} options selected
            </span>
            </template>
        </multiselect>
      </b-form-group>
    </b-form>
    <m-table :items="authors"></m-table>
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
      authors: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
      searchAuthorSelected: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ],
    };
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>

</style>
