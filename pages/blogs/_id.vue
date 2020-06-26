<template lang="pug">
  #wrapper
    p-blog-header
    section.section
      p-blog-title
      s-blog-post(:blogPost="blogPost")
      m-next-prev(
        :nextPost="nextPost"
        :prevPost="prevPost"
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
import SBlogPost from "@/components/sections/BlogPost";
import MNextPrev from "@/components/modules/NextPrev";
import SContact from "@/components/sections/Contact";

export default {
  components: {
    GFooter,
    PBlogHeader,
    PBlogTitle,
    PSectionHeader,
    SBlogPost,
    MNextPrev,
    SContact
  },
  async asyncData({ app, params, payload }) {
    let blogPost
    if (payload) {
      blogPost = payload
    } else {
      const blogRes = await app.$ctfClient.getEntries({
        content_type: "blogPosts",
        "sys.id": params.id
      });
      blogPost = blogRes.items[0]
    }

    const prevRes = await app.$ctfClient.getEntries({
      content_type: "blogPosts",
      "sys.createdAt[lt]": blogPost.sys.createdAt,
      order: "-sys.createdAt",
      limit: 1
    })
    const prevPost = prevRes.items[0]
    const nextRes = await app.$ctfClient.getEntries({
      content_type: "blogPosts",
      "sys.createdAt[gt]": blogPost.sys.createdAt,
      order: "sys.createdAt",
      limit: 1
    })
    const nextPost = nextRes.items[0]
    return {
      blogPost,
      prevPost,
      nextPost
    };
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
</style>
