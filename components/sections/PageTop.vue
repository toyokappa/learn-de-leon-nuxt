<template lang="pug">
  #pageTop
    hooper(:settings="hooperSettings")
      slide
        .page-top(v-lazy:backgroundImage="topImage1")
          .title-area
            .title-lg Learn de Leon
            .subtitle 「やる」だけじゃない、思考力を育てる
      slide
        .page-top(v-lazy:backgroundImage="topImage2")
          .title-area
            .title-sm 教育を「エンタメ」に
            .subtitle Education to Entertainment
      hooper-pagination(slot="hooper-addons")
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
import "hooper/dist/hooper.css";
import topImage1 from "~/assets/images/top_image.jpg";
import topImage2 from "~/assets/images/top_image2.jpg";

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1,
        infiniteScroll: true,
        autoPlay: true,
        playSpeed: 7000,
        transition: 750,
        hoverPause: false,
        mouseDrag: false,
        touchDrag: false,
        shortDrag: false,
        wheelControl: false
      },
      topImage1,
      topImage2
    };
  }
};
</script>

<style lang="sass">
.hooper
  .hooper-pagination
    .hooper-indicators
      .hooper-indicator
        width: 10px
        height: 10px
        margin: 0 4px
        border-radius: 50%
        &.is-active, &:hover
          background-color: #63AEE5
</style>

<style lang="sass" scoped>
.hooper
  height: 100%
.page-top
  position: relative
  width: 100%
  height: 100vh
  background-size: cover
  background-position: center center
  &:after
    content: ''
    width: 100%
    height: 100vh
    background-color: rgba(0, 0, 0, 0.2)
    position: absolute
    top: 0
    left: 0
  .title-area
    position: absolute
    top: 50%
    left: 50%
    transform: translateX(-50%) translateY(-50%)
    color: white
    font-family: $en-accent-family
    text-align: center
    width: 100%
    margin: auto
    z-index: 100
    @include media-breakpoint-up(sm)
      .title-lg
        font-size: 60px
        font-weight: bold
        letter-spacing: 5px
      .title-sm
        font-size: 54px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 24px
        letter-spacing: 3px
    @include media-breakpoint-down(xs)
      .title-lg
        font-size: 36px
        font-weight: bold
        letter-spacing: 5px
      .title-sm
        font-size: 30px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 16px
        letter-spacing: 3px
</style>