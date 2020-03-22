<template>
  <b-container>
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    <h2>Novo livro</h2>
    <hr />
    <b-alert
      :show="alertCountDown"
      dismissible
      variant="success"
      @dismissed="alertCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>Cadastro realizado com sucesso, retornando para a listagem</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="alertCountDown"
        height="4px"
      ></b-progress>
    </b-alert>
    <ValidationObserver ref="form">
      <b-form @submit.prevent="onSubmit">
        <b-form-group label="Título do livro:" label-for="input-title">
            <ValidationProvider
                rules="required"
                v-slot="{ errors, classes }"
                key="title"
                name="título"
            >
            <b-form-input
                id="input-title"
                v-model="book.title"
                placeholder="Preencha o título do livro"
                :class="{ 'is-invalid': classes.failed, 'is-valid': classes.passed}"
            />
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-group label="Descrição do livro" label-for="textarea-description">
            <b-form-textarea
                id="textarea-description"
                v-model="book.description"
                placeholder="Prencha a descrição do livro"
            />
        </b-form-group>

        <b-form-group label="Autores:" label-for="combobox-author">
            <multiselect
                id="combobox-author"
                class="multiselect-vue"
                v-model="book.authors"
                placeholder="Selecione um autor"
                label="name"
                track-by="language"
                :options="authors"
                :multiple="true"
            />
        </b-form-group>

        <b-form-group label="Foto:" label-for="file-photo">
            <m-form-file
                v-model="book.file"
                placeholder="Selecione uma foto"
                drop-placeholder="Solte seu arquivo aqui"
                accept="image/*"
                browse-text="Procurar"
            />
        </b-form-group>

        <b-button type="submit" variant="primary">Cadastrar</b-button>
      </b-form>
    </ValidationObserver>
  </b-container>
</template>

<script>
import Book from '../../../domain/book/Book';
import FormFile from '../../shared/FormFile.vue';
import BookService from '../../../domain/book/services/BookService';

export default {
  data() {
    return {
      book: new Book(),
      breadcrumbItems: [
        {
          text: 'Listagem',
          to: {
            name: 'listBook',
          },
        },
        {
          text: 'Novo livro',
          active: true,
        },
      ],
      authors: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' },
      ],
      alertCountDown: 0,
      dismissSecs: 2,
    };
  },

  methods: {
    onSubmit() {
      this.$refs.form.validate().then((success) => {
        if (!success) {
          return;
        }

        if (this.book.id) {
          // this.service.update();
          return;
        }

        // this.service.save();
        this.book = new Book();
        this.$refs.form.reset();

        this.alertCountDown = 2;
        setTimeout(() => {
          this.goToList();
        }, 2000);
      });
    },

    goToList() {
      this.$router.push({ name: 'listBook' });
    },

    countDownChanged(dismissCountDown) {
      this.alertCountDown = dismissCountDown;
    },

    created() {
      this.service = new BookService(this.axios);

      if (this.id) {
        this.service.get(this.id).then((book) => {
          this.book = book;
        });
      }
    },
  },

  components: {
    'm-form-file': FormFile,
  },
};
</script>

<style>

</style>
