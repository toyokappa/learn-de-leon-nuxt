<template lang="pug">
  #pageTop.page-top
    .title-area
      .title Learn de Leon
      .subtitle 「やる」だけじゃない、思考力を育てる。
</template>

<style lang="sass" scoped>
.page-top
  position: relative
  width: 100%
  height: 100vh
  background-image: url("~assets/images/top_image.jpg")
  background-size: cover
  background-position: center center
  &:after
    content: ''
    width: 100%
    height: 100vh
    background-color: rgba(0, 0, 0, 0.15)
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
      .title
        font-size: 60px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 24px
        letter-spacing: 3px
    @include media-breakpoint-down(xs)
      .title
        font-size: 42px
        font-weight: bold
        letter-spacing: 5px
      .subtitle
        font-size: 16px
        letter-spacing: 3px
</style>