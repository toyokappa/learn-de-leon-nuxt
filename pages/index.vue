<template lang="pug">
  #wrapper
    g-header
    section.section
      s-page-top
    section.section
      p-section-header#about(
        title="ランデレオンとは？"
        subtitle="About Learn de Leon"
        description="親御さんに知ってほしいこと"
      )
      s-about
    section.section
      p-section-header#profile(
        title="運営者・講師"
        subtitle="Member's Profile"
        description="ともに歩む仲間たち"
      )
      s-member(:memberList="memberList")
    section.section
      p-section-header#blog(
        title="最新情報"
        subtitle="Recent Blog Posts"
        description="最新の動向をコンテンツとしてお届け"
      )
      s-blog(:blogPosts="blogPosts")
      p-blog-link-button
    section.section
      p-section-header#flow(
        title="授業開始までの流れ"
        subtitle="How To Start"
        description="ご利用前にご安心いただくために"
      )
      s-flow
    section.section.section-grey
      p-section-header(
        title="お問い合わせ"
        subtitle="Get In Touch"
        description="些細なことでも お気軽に ご相談ください"
        titleColor="#63AEE5"
        subtitleColor="black"
      )
      s-contact
    g-footer
</template>

<script>
import GHeader from "@/components/global/Header";
import GFooter from "@/components/global/Footer";
import PSectionHeader from "@/components/parts/SectionHeader";
import PBlogLinkButton from "@/components/parts/BlogLinkButton";
import SPageTop from "@/components/sections/PageTop";
import SAbout from "@/components/sections/About";
import SMember from "@/components/sections/Member";
import SBlog from "@/components/sections/Blog";
import SFlow from "@/components/sections/Flow";
import SContact from "@/components/sections/Contact";

export default {
  components: {
    GHeader,
    GFooter,
    PSectionHeader,
    PBlogLinkButton,
    SPageTop,
    SAbout,
    SMember,
    SBlog,
    SFlow,
    SContact
  },
  async asyncData({ app }) {
    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blogPosts",
      order: "-sys.createdAt",
      limit: 3
    });
    const blogPosts = blogRes.items;

    const memberRes = await app.$ctfClient.getEntries({
      content_type: "member",
      order: "fields.position"
    });
    const memberList = memberRes.items;

    return {
      blogPosts,
      memberList
    };
  },
  head() {
    return {
      title: "Learn de Leon Official Site"
    };
  }
};
</script>

<style lang="sass">
</style>
