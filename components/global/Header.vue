<template lang="pug">
  header.navbar.navbar-expand-lg.navbar-light.bg-light.fixed-top.header-nav
    nav.container
      n-link.navbar-brand(v-scroll-to="'#pageTop'" to)
        img.logo(src="~/assets/images/logo.png")
      .toggle-button
        client-only
          tasty-burger-button(
            type="spin"
            color="black"
            size="s"
            :active="isActive"
            @toggle="toggleNavMenu"
            ref="burgerButton"
          )
      .collapse-menu
        ul.navbar-nav.ml-auto
          li.nav-item
            n-link.nav-link(v-scroll-to="'#about'" to) ABOUT
          li.nav-item
            n-link.nav-link(v-scroll-to="'#profile'" to) PROFILE
          li.nav-item
            n-link.nav-link(v-scroll-to="'#blog'" to) BLOG
          li.nav-item
            n-link.nav-link(v-scroll-to="'#flow'" to) FLOW
          li.nav-item
            n-link.nav-link(v-scroll-to="'#contact'" to) CONTACT
    #navbarMenu.container
      ul.navbar-nav(@click="toggleActive")
        li.nav-item
          n-link.nav-link(v-scroll-to="'#about'" to) ABOUT
        li.nav-item
          n-link.nav-link(v-scroll-to="'#profile'" to) PROFILE
        li.nav-item
          n-link.nav-link(v-scroll-to="'#blog'" to) BLOG
        li.nav-item
          n-link.nav-link(v-scroll-to="'#flow'" to) FLOW
        li.nav-item
          n-link.nav-link(v-scroll-to="'#contact'" to) CONTACT
</template>

<script>
export default {
  data() {
    return {
      activeLink: "",
      isActive: false
    };
  },
  methods: {
    toggleNavMenu(active) {
      const nav = document.querySelector("#navbarMenu");
      active ? nav.classList.add("visible") : nav.classList.remove("visible");
    },
    toggleActive() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="sass" scoped>
.header-nav
  .logo
    font-weight: bold
    height: 40px
  .toggle-button
    display: none
    margin-top: 5px
    button
      outline: none
  #navbarMenu
    display: none
  .nav-item
    font-family: $en-accent-family
    margin-left: 20px
    &.active
      font-weight: bold
@include media-breakpoint-down(md)
  .toggle-button
    display: block !important
  .collapse-menu
    display: none
  #navbarMenu
    display: block !important
    position: fixed
    top: 80px
    left: 50%
    transform: translateX(-50%)
    width: 100%
    background-color: $light-grey
    visibility: hidden
    opacity: 0
    transition: 0.3s
    &.visible
      visibility: visible
      opacity: 1
    .navbar-nav
      width: 100%
      padding: 0 20px
      .nav-item
        padding: 20px 0
        border-bottom: 1px solid $secondary-grey
        margin-left: 0 !important
        &:last-child
          border-bottom: none
</style>
