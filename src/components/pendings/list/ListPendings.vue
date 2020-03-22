<template>
  <b-container>
    <h2>Listagem de pendências</h2>
    <hr />
    <b-form-input
      id="input-search"
      v-model="search"
      type="search"
      required
      placeholder="Comece a digitar para filtrar"
    ></b-form-input>
    <m-table :items="pendingsData" :filter="search" :fields="fields" ></m-table>
  </b-container>
</template>

<script>
import Table from '../../shared/Table.vue';
import PendingService from '../../../domain/pending/services/PendingService';

export default {
  name: 'ListPendings',
  components: {
    'm-table': Table,
  },
  data() {
    return {
      search: '',
      pendingsData: [],
      fields: [
        { key: 'id', label: 'Id', sortable: true },
        { key: 'name', label: 'Nome', sortable: true },
        { key: 'surname', label: 'Sobrenome', sortable: true },
      ],
    };
  },

  mounted() {
    this.pendingservice.list().then((response) => {
      let newId = 0;
      this.pendingsData = response.data.map(
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
    this.pendingService = new PendingService(this.axios);
  },
};
</script>

<style scoped>
  .bt-new {
    margin-bottom: 10px;
  }
</style>
