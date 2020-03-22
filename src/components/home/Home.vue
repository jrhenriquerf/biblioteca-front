<template>
  <b-container>
    <b-row>
      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary" @click="emprestar(1)">Emprestar</b-button>
            </div>
          </template>
        </b-card>

      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-danger" @click="devolver(2)">Devolver</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/400/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below as a natural
            lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This card has supporting text below as a natural lead-in to
            additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>

      <b-col col lg="3" md="4" sm="6" cols="12" class="mb-4">
        <b-card
          title="Title"
          img-src="https://placekitten.com/g/300/450"
          img-alt="Image"
          img-height="280"
          class="h-100"
          img-top>
          <b-card-text>
            This is a wider card with supporting text below
            as a natural lead-in to additional content.
          </b-card-text>
          <template v-slot:footer>
            <div class="text-center">
              <b-button variant="outline-primary">Emprestar</b-button>
            </div>
          </template>
        </b-card>
      </b-col>
    </b-row>

    <div class="mt-3">
      <h6 class="text-center">Páginas</h6>
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        per-page="12"
        align="fill"
        size="sm"
        @change="changePage" />
    </div>
  </b-container>
</template>

//fazer esse cara aqui https://bookscouter.com/search/buy/jucelino como referencia

<script>
import BookService from '../../domain/book/services/BookService';

export default {
  name: 'Home',
  data() {
    return {
      currentPage: 1,
      totalRows: 16,
      booksData: [],
    };
  },

  methods: {
    changePage(page) {
      console.log('Changing page', page);
    },

    emprestar(bookId) {
      console.log('Emprestar', bookId);
    },

    devolver(bookId) {
      console.log('Devolver', bookId);
    },
  },

  mounted() {
    // this.bookService.list().then((response) => {
    //   this.booksData = response.data;
    // });
  },

  created() {
    this.bookService = new BookService(this.axios);
  },
};
</script>

<style scoped>

</style>
