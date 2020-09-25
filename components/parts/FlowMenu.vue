
<template lang="pug">
ul.menu
  li.menu-item(
    v-for="flowItem in flowItems",
    :class="{ selected: flowItem.fields.id === $store.state.content_id }",
    @click="changeContent(flowItem.fields.id)"
  ) {{ flowItem.fields.service }}
</template>

<script>
export default {
  props: {
    flowItems: {
      type: Array,
    },
  },
  methods: {
    changeContent(id) {
      this.$store.commit("changeContent", id);
    },
  },
};
</script>

<style lang="sass" scoped>
.menu
  display: flex
  justify-content: center
  padding: 0
  margin: 0 0 80px
  list-style: none
  .menu-item
    color: $accent-color
    font-size: 20px
    font-weight: bold
    padding: 15px 30px
    border: 1px solid $accent-color
    margin: 0 20px
    cursor: pointer
    &.selected
      color: white
      background-color: $accent-color
</style>