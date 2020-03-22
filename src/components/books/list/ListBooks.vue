<template>
  <b-container>
    <h2>Listagem de livros</h2>
    <hr />
    <b-row>
      <b-col>
        <div class="bt-new float-right">
          <router-link to="newBook">
            <b-button variant="primary">Novo livro</b-button>
          </router-link>
        </div>
      </b-col>
    </b-row>
    <b-form-group
      id="input-search-group"
      label="Busque o livro:"
      label-for="input-search"
      description="Filtro para a coluna Título"
    >
      <b-form-input
        id="input-search"
        v-model="filterTableObject.search"
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
        v-model="filterTableObject.authors"
        placeholder="Selecione um autor para filtrar"
        :custom-label="nameWithSurname"
        track-by="surname"
        :options="authors"
        :multiple="true"
        :taggable="false" >
      </multiselect>
    </b-form-group>
    <m-table
      :items="booksData"
      :filter-function="filterTable"
      :fields="fields"
      :filter="filterTableObject" >
    </m-table>
  </b-container>
</template>

<script>
import Table from '../../shared/Table.vue';
import BookService from '../../../domain/book/services/BookService';
import AuthorService from '../../../domain/author/services/AuthorService';

export default {
  name: 'ListBooks',
  components: {
    'm-table': Table,
  },
  data() {
    return {
      filterTableObject: {
        search: '',
        authors: [],
      },
      filterOn: [],
      booksData: [],
      authors: [],
      fields: [
        { key: 'id', sortable: true },
        { key: 'title', label: 'Título', sortable: true },
        {
          key: 'authors',
          label: 'Autores',
          formatter: (author) => author.map(
            (authorMap) => (authorMap.surname ? `${authorMap.name} ${authorMap.surname}` : authorMap.name),
          ).join(', '),
          filterByFormatted: true,
        },
      ],
    };
  },

  methods: {
    nameWithSurname({ name, surname }) {
      return `${name} ${surname}`;
    },

    filterTable(item, filter) {
      if (filter.authors.length === 0 || filter.search === '') {
        return true;
      }
      console.log('filter', item, filter, this.searchAuthorSelected);

      let search = true;
      if (filter.search !== '') {
        search = item.title.includes(filter.search);
      }

      let authors = true;
      if (filter.authors.length > 0) {
        authors = item.authors.filter(
          (author) => filter.authors
            .map((searchAuthor) => searchAuthor.title)
            .includes(`${author.name} ${author.name}`),
        ).length > 0;
      }

      return search && authors;
    },
  },

  mounted() {
    this.bookService.list().then((response) => {
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

    this.authorService.list().then((response) => {
      this.authors = response.data;
    });
  },

  created() {
    this.bookService = new BookService(this.axios);
    this.authorService = new AuthorService(this.axios);
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
  .bt-new {
    margin-bottom: 10px;
  }
</style>
