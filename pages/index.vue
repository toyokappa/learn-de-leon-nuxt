<template lang="pug">
  div
    g-header
    s-page-top
    g-footer
</template>

<script>
import GHeader from "@/components/global/Header";
import GFooter from "@/components/global/Footer";
import SPageTop from "@/components/sections/PageTop";

export default {
  components: {
    GHeader,
    GFooter,
    SPageTop
  }
};
</script>

<style lang="sass"></style>
