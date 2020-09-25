<template lang="pug">
.flow
  .container
    ul.menu
      li.menu-item(
        v-for="flowItem in flowItems",
        :class="{ selected: flowItem.fields.id === $store.state.content_id }",
        @click="changeContent(flowItem.fields.id)"
      ) {{ flowItem.fields.service }}
    ul.timeline(
      v-for="flowItem in flowItems",
      v-if="flowItem.fields.id === $store.state.content_id"
    )
      li.tl-header
      li.tl-item(
        v-for="(flow, index) in flowItem.fields.flows",
        :class="{ 'tl-left': index % 2 == 1 }"
      )
        .tl-wrap
          .tl-content.box
            .box-arrow
            .box-header {{ flow.label }}
            .box-divider
            .box-body {{ flow.body }}
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
.timeline
  padding: 0
  margin: 0
  box-sizing: border-box
  list-style: none
  .tl-item
    @include media-breakpoint-up(sm)
      margin-left: 50%
    @include media-breakpoint-down(xs)
      margin-left: 0
    .tl-wrap
      padding: 15px 0 15px 20px
      border-style: solid
      border-width: 0 0 0 2px
      margin: 0 0 0 -1px
      &:before
        content: ""
        width: 10px
        height: 10px
        background-color: white
        box-shadow: 0 0 0 4px white
        border-color: inherit
        border-width: 3px
        border-radius: 50%
        border-style: solid
        margin: 0 0 0 -26px
        position: relative
        top: 13px
        float: left
      .tl-content
        width: 100%
        background-color: $accent-color
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.15)
        padding: 0.5rem 1rem
        margin-bottom: 1.5rem
        position: relative
        .box-arrow
          position: absolute
          top: 18px
          left: 0
          margin-top: -7px
          &:before
            content: ""
            width: 0
            height: 0
            border-width: 7px 7px 7px 0
            border-style: solid
            border-color: transparent
            position: absolute
            right: 0
          &:after
            content: ""
            width: 0
            height: 0
            border-width: 6px 6px 6px 0
            border-style: solid
            border-top-color: transparent
            border-bottom-color: transparent
            border-right-color: $accent-color
            border-left-color: transparent
            position: absolute
            top: 1px
            right: 0
    @include media-breakpoint-up(sm)
      &.tl-left
        margin-left: 0
        margin-right: 50%
        .tl-wrap
          padding: 15px 20px 15px 0
          border-width: 0 2px 0 0
          margin: 0 -1px 0 0
          &:before
            margin: 0 -26px 0 0
            float: right
          .box-arrow
            left: auto
            right: 0
            &:before
              border-width: 7px 0 7px 7px
              right: auto
              left: 0
            &:after
              border-width: 6px 0 6px 6px
              border-right-color: transparent
              border-left-color: $accent-color
              right: auto
              left: 0
  .box
    color: white
    font-size: 14px
    .box-header
      font-size: 18px
      font-weight: bold
      padding: 1rem
    .box-divider
      border-bottom: 1px solid white
      margin: 0 16px
      height: 0
    .box-body
      padding: 1rem
</style>