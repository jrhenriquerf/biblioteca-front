<template>
  <div>
    <b-table
      striped hover
      :items="items"
      :current-page="currentPage"
      :per-page="perPage"
      :fields="fields"
      :filter="filter"
      @filtered="onFiltered"
    >
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
  props: {
    items: {
      Type: Array,
      required: true,
    },
    fields: Array,
    filter: String,
  },

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
