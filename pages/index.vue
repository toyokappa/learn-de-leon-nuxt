<template lang="pug">
  div
    g-header
    section.section
      s-page-top
    section.section
      p-section-header(
        title="ランデレオンとは？"
        subtitle="About Learn de Leon"
        description="親御さんに知ってほしいこと"
      )
      s-about
    g-footer
</template>

<script>
import GHeader from "@/components/global/Header";
import GFooter from "@/components/global/Footer";
import PSectionHeader from "@/components/parts/SectionHeader";
import SPageTop from "@/components/sections/PageTop";
import SAbout from "@/components/sections/About";

export default {
  components: {
    GHeader,
    GFooter,
    PSectionHeader,
    SPageTop,
    SAbout
  }
};
</script>

<style lang="sass">
.section
  margin-bottom: 100px
</style>
