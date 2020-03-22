<template>
  <div>
    <b-table
      striped hover
      :current-page="currentPage"
      :per-page="perPage"
      @filtered="onFiltered"
      show-empty
      emptyText="Não há registros para exibir"
      v-bind="$attrs">
    </b-table>
    <div class="mt-6">
      <b-pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"
        align="right" >
      </b-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',

  data() {
    return {
      currentPage: 1,
      perPage: 10,
      totalRows: 1,
    };
  },

  watch: {
    items(propItems) {
      this.totalRows = propItems.length;
    },
  },

  methods: {
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>
