<template lang="pug">
  #wrapper
    p-blog-header
    section.section
      p-blog-title
      s-blog(:blogPosts="blogPosts")
      m-paging(
        :total="blogRes.total"
        :limit="blogRes.limit"
        :skip="blogRes.skip"
      )
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
import GFooter from "@/components/global/Footer";
import PBlogHeader from "@/components/parts/BlogHeader";
import PBlogTitle from "@/components/parts/BlogTitle";
import PSectionHeader from "@/components/parts/SectionHeader";
import SBlog from "@/components/sections/Blog";
import SContact from "@/components/sections/Contact";
import MPaging from "@/components/modules/Paging";

export default {
  components: {
    GFooter,
    PBlogHeader,
    PBlogTitle,
    PSectionHeader,
    SBlog,
    SContact,
    MPaging
  },
  async asyncData({ route, app, env }) {
    let pageNum = 1;
    if (typeof route.params.page !== "undefined") {
      pageNum = parseInt(route.params.page);
    }
    const limit = env.pageLimit;
    const skip = limit * pageNum - limit;
    let params = {
      content_type: "blogPosts",
      order: "-sys.createdAt",
      limit,
      skip
    };

    const blogRes = await app.$ctfClient.getEntries(params);
    const blogPosts = blogRes.items;

    return {
      blogRes,
      blogPosts
    };
  },
  head() {
    const pageTitle = "ランデレオン Official Blog";
    const imageUrl = "https://learndeleon.com/twitter_image.jpg";
    const description =
      "群馬県邑楽郡にて家庭教師事業を展開しているランデレオンの活動状況、お知らせをコンテンツとしてお届けしています。最新情報をお探しの方はこちらのブログを御覧ください。";
    return {
      title: pageTitle,
      meta: [
        { name: "description", content: description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:type", content: "website" },
        { property: "og:image", content: imageUrl },
        { property: "og:description", content: description }
      ]
    };
  }
};
</script>

<style lang="sass">
</style>
