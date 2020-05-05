<template lang="pug">
  #wrapper
    p-blog-header
    section.section
      p-blog-title
      s-blog-post(:blogPost="blogPost")
    section.section.section-dark
      p-section-header(
        title="お問い合わせ"
        subtitle="Get In Touch"
        description="気兼ねなく お気軽に ご連絡ください"
        titleColor="#CC9933"
        subtitleColor="white"
      )
      // Contact
    Footer
</template>

<script>
import GFooter from "@/components/global/Footer";
import PBlogHeader from "@/components/parts/BlogHeader";
import PBlogTitle from "@/components/parts/BlogTitle";
import PSectionHeader from "@/components/parts/SectionHeader";
import SBlogPost from "@/components/sections/BlogPost";
// import Contact from "@/components/Contact";

export default {
  components: {
    GFooter,
    PBlogHeader,
    PBlogTitle,
    PSectionHeader,
    SBlogPost
  },
  async asyncData({ app, params, payload }) {
    if (payload) return { blogPost: payload };

    const blogRes = await app.$ctfClient.getEntries({
      content_type: "blogPosts",
      "sys.id": params.id
    });
    const blogPost = blogRes.items[0];
    return { blogPost };
  },
  head() {
    const { title, description, eyecatch } = this.blogPost.fields;
    const pageTitle = `${title} | Lean de Loen Official Blog`;
    const imageUrl = `https:${eyecatch.fields.file.url}`;
    return {
      title: pageTitle,
      meta: [
        { name: "description", content: this.blogPost.fields.description },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: imageUrl },
        { name: "twitter:title", content: pageTitle },
        { name: "twitter:description", content: description },
        { property: "og:title", content: pageTitle },
        { property: "og:type", content: "article" },
        { property: "og:image", content: imageUrl },
        { property: "og:description", content: description }
      ]
    };
  }
};
</script>

<style lang="sass">
#wrapper
  .section
    padding-bottom: 100px
  .section-dark
    background-color: $primary-dark
</style>
