<template>
  <b-container>
    <b-breadcrumb :items="breadcrumbItems"></b-breadcrumb>
    <h2>Novo autor</h2>
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
        <b-form-group
          label="Nome do autor:"
          label-for="input-name"
        >
          <ValidationProvider
            rules="required"
            v-slot="{ errors, classes }"
            key="author"
            name="autor">
            <b-form-input
              id="input-name"
              v-model="author.name"
              placeholder="Preencha o nome do autor"
              :class="{ 'is-invalid': classes.failed, 'is-valid': classes.passed}"
            ></b-form-input>
            <span class="invalid-feedback">{{ errors[0] }}</span>
          </ValidationProvider>
        </b-form-group>

        <b-form-group label="Sobrenome do autor:" label-for="input-author">
            <b-form-input
              id="input-author"
              v-model="author.surname"
              placeholder="Preencha o sobrenome do autor"
            ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Cadastrar</b-button>
      </b-form>
    </ValidationObserver>
  </b-container>
</template>

<script>
import Author from '../../../domain/author/Author';
import AuthorService from '../../../domain/author/services/AuthorService';

export default {
  data() {
    return {
      author: new Author(),
      breadcrumbItems: [
        {
          text: 'Listagem',
          to: {
            name: 'listAuthor',
          },
        },
        {
          text: 'Novo autor',
          active: true,
        },
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

        if (this.author.id) {
          // this.service.update(this.author);
          return;
        }

        // this.service.save(this.author);
        this.author = new Author();
        this.$refs.form.reset();

        this.alertCountDown = 2;
        setTimeout(() => {
          this.goToList();
        }, 2000);
      });
    },

    goToList() {
      this.$router.push({ name: 'listAuthor' });
    },

    countDownChanged(dismissCountDown) {
      this.alertCountDown = dismissCountDown;
    },

    created() {
      this.service = new AuthorService(this.axios);

      if (this.id) {
        this.service.get(this.id).then((author) => {
          this.author = author;
        });
      }
    },
  },
};
</script>

<style>

</style>
