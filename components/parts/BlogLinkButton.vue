<template lang="pug">
  .blog-link-button
    .container
      n-link.blog-link(to="/blogs/")
        span Go to 
        strong Learn de Leon's Blog
        i.fas.fa-angle-double-right.ml-2
</template>

<style lang="sass" scoped>
.blog-link
  color: black
  font-family: $en-accent-family
  padding: 15px 20px
  border: 2px solid black
  &:hover
    color: white
    text-decoration: none
    background-color: black
  @include media-breakpoint-down(sm)
    .blog-link
      font-size: 18px
  @include media-breakpoint-down(xs)
    .blog-link
      font-size: 14px
</style>