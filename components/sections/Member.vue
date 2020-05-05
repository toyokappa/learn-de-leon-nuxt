<template lang="pug">
  .member
    .container
      ul.member-list
        li.member-item(v-for="member in memberList" :key="member.fields.position")
          .photo(:style="`background-image: url(${memberPhoto(member.fields.photo)})`")
            .name {{ member.fields.name }}
          .title {{ member.fields.title }}
</template>

<script>
import noPhoto from "@/assets/images/no_photo_member.jpg";

export default {
  props: {
    memberList: {
      type: Array,
      required: true
    }
  },
  methods: {
    memberPhoto(photo) {
      return photo ? photo.fields.file.url : noPhoto;
    }
  }
};
</script>

<style lang="sass" scoped>
.member
  .member-list
    list-style: none
    display: flex
    justify-content: center
    flex-wrap: wrap
    .member-item
      @include media-breakpoint-up(sm)
        margin: 0 15px 15px
      @include media-breakpoint-down(xs)
        margin: 0 10px 10px
      .photo
        background-size: cover
        background-position: center center
        border-radius: 50%
        margin-bottom: 5px
        position: relative
        overflow: hidden
        @include media-breakpoint-up(sm)
          width: 150px
          height: 150px
        @include media-breakpoint-down(xs)
          width: 120px
          height: 120px
        .name
          color: white
          font-size: 12px
          text-align: center
          width: 100%
          background-color: rgba(0, 0, 0, 0.5)
          padding: 5px 0
          position: absolute
          bottom: 0
      .title
        color: $primary-grey
        font-size: 12px
        text-align: center
</style>