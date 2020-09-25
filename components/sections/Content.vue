<template lang="pug">
.content
  .container
    p-flow-menu(:flowItems="flowItems")
    .contents.row(
      v-for="flowItem in flowItems",
      v-if="flowItem.fields.id === $store.state.content_id"
    )
      .offset-sm-1.col-sm-10
        .markdown-body(v-html="$md.render(flowItem.fields.content)")
</template>

<script>
import PFlowMenu from "@/components/parts/FlowMenu";

export default {
  components: {
    PFlowMenu,
  },
  props: {
    flowItems: {
      type: Array,
    },
  },
};
</script>

<style lang="sass" scoped>
</style>