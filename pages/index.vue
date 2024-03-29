<template lang="pug">
#wrapper
  g-header
  section.section
    s-page-top
  section.section
    p-section-header#about(
      title="ランデレオンとは？",
      subtitle="About Learn de Leon",
      description="親御さんに知ってほしいこと"
    )
    s-about(:about="aboutItem")
  section.section
    p-section-header#content(
      title="事業紹介",
      subtitle="Service Lineup",
      description="多方面から教育をサポート"
    )
    s-content(:flowItems="flowItems")
  section.section
    p-section-header#profile(
      title="運営者・講師",
      subtitle="Member's Profile",
      description="ともに歩む仲間たち"
    )
    s-member(:memberList="memberList")
  section.section
    p-section-header#blog(
      title="最新情報",
      subtitle="Recent Blog Posts",
      description="最新の動向をコンテンツとしてお届け"
    )
    s-blog(:blogPosts="blogPosts")
    p-blog-link-button
  section.section
    p-section-header#flow(
      title="授業開始までの流れ",
      subtitle="How To Start",
      description="ご利用前にご安心いただくために"
    )
    s-flow(:flowItems="flowItems")
  section.section.section-grey
    p-section-header#contact(
      title="お問い合わせ",
      subtitle="Get In Touch",
      description="些細なことでも お気軽に ご相談ください",
      titleColor="#63AEE5",
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
import SContent from "@/components/sections/Content";
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
    SContent,
    SMember,
    SBlog,
    SFlow,
    SContact,
  },
  async asyncData({ app }) {
    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blogPosts",
      order: "-sys.createdAt",
      limit: 3,
    });
    const blogPosts = blogRes.items;

    const memberRes = await app.$ctfClient.getEntries({
      content_type: "member",
      order: "fields.position",
    });
    const memberList = memberRes.items;

    const aboutRes = await app.$ctfClient.getEntries({
      content_type: "about",
      order: "sys.createdAt",
      limit: 1,
    });
    const aboutItem = aboutRes.items[0];

    const flowRes = await app.$ctfClient.getEntries({
      content_type: "flow",
      order: "sys.createdAt",
    });
    const flowItems = flowRes.items;

    return {
      blogPosts,
      memberList,
      aboutItem,
      flowItems,
    };
  },
  head() {
    const pageTitle = "ランデレオン Official Site";
    const imageUrl = "https://learndeleon.jp/twitter_image.jpg";
    const description =
      "群馬県邑楽郡にて家庭教師事業を展開しているランデレオンの公式サイトです。教育における想い、運営者紹介、サービス体系紹介などをお届けしております。";
    return {
      title: pageTitle,
      meta: [
        { name: "description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:url", content: `https://${process.env.domain}` },
        { property: "og:type", content: "website" },
        { property: "og:image", content: imageUrl },
        { property: "og:description", content: description },
      ],
    };
  },
};
</script>

<style lang="sass">
</style>
