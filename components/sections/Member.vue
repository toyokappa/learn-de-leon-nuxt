<template lang="pug">
  .member
    .container
      ul.member-list
        li.member-item(v-for="member in memberList" :key="member.fields.position")
          .photo(
            :style="`background-image: url(${memberPhoto(member.fields.photo)})`"
            @click="openProfile(member)"
          )
            .name {{ member.fields.name }}
          .title {{ member.fields.title }}
    .member-profile(
      v-if="existsProfile"
      @click="closeProfile()"
    )
      .container
        .profile-top.row
          .col-lg-3.col-sm-4
            .photo(:style="`background-image: url(${memberPhoto(memberProfile.fields.photo)})`")
          .col-lg-9.col-sm-8
            .name {{ memberProfile.fields.name }}
            .title {{ memberProfile.fields.title }}
            .resume(v-html="parseText(memberProfile.fields.resume)")
        .profile-bottom
          .introduction(v-html="parseText(memberProfile.fields.introduction)")
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
  data() {
    return {
      memberProfile: {}
    };
  },
  methods: {
    memberPhoto(photo) {
      return photo ? photo.fields.file.url : noPhoto;
    },
    parseText(text) {
      if (text) return text.replace(/\n/g, "<br>");
      return "";
    },
    openProfile(member) {
      this.memberProfile = member;
    },
    closeProfile() {
      this.memberProfile = {};
    }
  },
  computed: {
    existsProfile() {
      return Object.keys(this.memberProfile).length > 0;
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
        cursor: pointer
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
  .member-profile
    color: white
    width: 100%
    height: 100vh
    background-color: rgba(0, 0, 0, 0.9)
    padding: 100px 0
    position: fixed
    top: 0
    left: 0
    z-index: 1031 // Headerよりも上の層
    .profile-top
      padding-bottom: 50px
      border-bottom: 1px solid $primary-grey
      margin-bottom: 50px
      .photo
        width: 100%
        padding-bottom: 100%
        background-size: cover
        background-position: center center
        border-radius: 50%
      .name
        font-family: $ja-accent-family
        font-size: 24px
      .title
        color: $secondary-grey
        font-size: 14px
      .resume
        margin-top: 15px
</style>