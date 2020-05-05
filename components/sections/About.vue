<template lang="pug">
  #about.about
    .process-container
      .process.know
        img(src="~/assets/images/know.svg")
        .label Know (知る)
      .process.grow
        img(src="~/assets/images/grow.svg")
        .label Grow (成長する)
      .process.enjoy
        img(src="~/assets/images/enjoy.svg")
        .label Enjoy (楽しむ)
      .process.want
        img(src="~/assets/images/want.svg")
        .label Want (したい)
</template>

<style lang="sass" scoped>
.about
  .process-container
    display: flex
    justify-content: center
    .process
      text-align: center
      margin: 0 30px
      img
        width: 100%
        max-width: 200px
        height: auto
        margin-bottom: 10px
</style>