<template lang="pug">
  .about
    .container
      .row.about-section
        .col-lg-6.order-lg-2.mb-sx-3
          img(v-lazy="tampopo")
        .col-lg-6.order-lg-1
          .description
            | 「ランデレオン」は、群馬県邑楽郡を中心に展開している家庭教師事業団体です。
            br
            br
            | 「ランデレオン」という名前はは英語の「Learn（学ぶ）」とスペイン語の「ディエンテ・デ・レオン（たんぽぽ）」の2つの言葉を組み合わせて作りました。
            br
            br
            | 「たんぽぽ」はどんな状況にも適用でき、自らの力で種を作り、風にのってあらゆる場所に行くことができます。とても強い花です。
            br
            br
            | 学びの世界でたんぽぽの様に、どんな状況でもて適用でき、自らが考えて行動をし、あらゆる分野で活躍をするための基礎力を育てたい、そういう想いを込めて「ランデレオン」という名をつけました。
            br
            br
            | 実際の授業でも、お子さんの自主性を育てることに重きをおいています。最終的には我々のもとを巣立ち、自ら学習を進めてもらえるような土壌づくりを目標としています。
      .row
        .col-lg-6.mb-sx-3
          img(v-lazy="learn")
        .col-lg-6
          .description
            | 私達は、「知る」ことで「成長する」、「成長する」ことで「楽しくなる」、「楽しくなる」ことで「また知りたくなる」、このサイクルを大事にしています。
            br
            br
            | このサイクルによって生み出されるのは、「学び」だけではなありません。「何かをしたい」という感情を引き出すことができます。
            br
            br
            | この「何かをしたい」という感情こそが、行動や学びの原動力となるのです。やらされて勉強をするのではなく、自らの欲求のもと学ぶのです。
            br
            br
            | 私達は、当然ながら学習指導要領に基づいた勉強の仕方を教えます。しかし、学校の予備として教えるつもりはありません。
            br
            br
            | 子どもたちが楽しく、柔軟に、そして今後の社会を生き抜くための考える力を養います。そういった個別のカリキュラムも用意しています。
            br
            br
            | 私達は、一人として同じ教え方をすることはありません。短期集中で詰め込み型の子もいれば、大器晩成であとから実績がついてくる子もいます。計算が得意な子もいれば、暗記が得意な子もいます。
            br
            br
            | 100人いれば100通りの教え方が必要であると考えです。そういった考えで一人ひとりに合った学習サポートを行うことをお約束します。
</template>

<script>
import tampopo from "@/assets/images/tampopo.jpg"
import learn from "@/assets/images/learn.svg"

export default {
  data() {
    return {
      tampopo,
      learn
    }
  }
}
</script>

<style lang="sass" scoped>
.about
  .about-section
    margin-bottom: 150px
  img
    width: 100%
    @include media-breakpoint-down(md)
      margin-bottom: 15px
  .description
    color: $primary-grey
    font-size: 14px
    line-height: 1.7
</style>