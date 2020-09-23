<template lang="pug">
.about
  .container
    .row.about-section
      .col-lg-6.order-lg-2.mb-sx-3
        img(v-lazy="about.fields.section1_image.fields.file.url")
      .col-lg-6.order-lg-1
        .description(v-html="parseDescription(about.fields.section1_text)")
    .row
      .col-lg-6.mb-sx-3
        img(v-lazy="about.fields.section2_image.fields.file.url")
      .col-lg-6
        .description(v-html="parseDescription(about.fields.section2_text)")
</template>

<script>
export default {
  props: {
    about: {
      type: Object,
    },
  },
  methods: {
    parseDescription(text) {
      return text.replace(/\n/g, "<br>");
    },
  },
};
</script>

<style lang="sass" scoped>
.about
  .about-section
    margin-bottom: 150px
  img
    width: 100%
    @include media-breakpoint-down(md)
      margin-bottom: 15px
  .description
    color: $primary-grey
    font-size: 14px
    line-height: 1.7
</style>