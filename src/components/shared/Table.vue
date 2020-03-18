<template>
  <div>
    <b-table striped hover :items="items"></b-table>
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
  },
};
</script>
