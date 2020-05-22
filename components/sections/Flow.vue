<template lang="pug">
  .flow
    .container
      ul.timeline
        li.tl-header
        li.tl-item
          .tl-wrap
            .tl-content.box
              .box-arrow
              .box-header まずは無料相談
              .box-divider
              .box-body
                | お子様の学習に関してのお悩みをお聞かせください。
                | まずはお悩みの解決をする方法を一緒に考えましょう。
                | 課題を整理し、ご家族として対応できる部分、我々が解決する部分を整理する面談を実施しましょう。
        li.tl-item.tl-left
          .tl-wrap
            .tl-content.box
              .box-arrow
              .box-header 学力診断 & 無料体験授業
              .box-divider
              .box-body
                | 学習レベルを確認するため、学力診断テストを実施します。
                | 学力や今回の課題に応じて適した授業を無料でご体験いただきます。
                | お子様に体験いただくことにより、我々の授業の形態を理解いただくとともに、学習の意欲を高めていただくことが目的となります。
        li.tl-item
          .tl-wrap
            .tl-content.box
              .box-arrow
              .box-header お見積り
              .box-divider
              .box-body
                | 学力診断テスト、無料体験授業を経て、得られた情報から改めて適切なプランをご提案いたします。
                | プランの内容、料金に関してご理解いただいた上でごお申し込みをいただきたいので、ご理解いただけるよう説明を差し上げます。
        li.tl-item.tl-left
          .tl-wrap
            .tl-content.box
              .box-arrow
              .box-header お申し込み
              .box-divider
              .box-body
                | 体験授業を受けていただき、ご納得いただけた方に限りお申し込みに進んでいただきます。
                | 授業のスケジュール調整も行いますので、直近のご予定、ご希望のご予定を控えていただけるとスムーズです。
        li.tl-item
          .tl-wrap
            .tl-content.box
              .box-arrow
              .box-header 授業開始！
              .box-divider
              .box-body
                | ここまでお疲れさまでした。無事お申し込みも完了し、授業開始となります。
                | ここからがスタートです。お子様、ご家族様と伴走し、学習が楽しくなる環境づくりに努めてまいります。
</template>

<style lang="sass" scoped>
.timeline
  padding: 0
  margin: 0
  box-sizing: border-box
  list-style: none
  .tl-item
    @include media-breakpoint-up(sm)
      margin-left: 50%
    @include media-breakpoint-down(xs)
      margin-left: 0
    .tl-wrap
      padding: 15px 0 15px 20px
      border-style: solid
      border-width: 0 0 0 2px
      margin: 0 0 0 -1px
      &:before
        content: ""
        width: 10px
        height: 10px
        background-color: white
        box-shadow: 0 0 0 4px white
        border-color: inherit
        border-width: 3px
        border-radius: 50%
        border-style: solid
        margin: 0 0 0 -26px
        position: relative
        top: 13px
        float: left
      .tl-content
        width: 100%
        background-color: #63AEE5
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.15)
        padding: 0.5rem 1rem
        margin-bottom: 1.5rem
        position: relative
        .box-arrow
          position: absolute
          top: 18px
          left: 0
          margin-top: -7px
          &:before
            content: ""
            width: 0
            height: 0
            border-width: 7px 7px 7px 0
            border-style: solid
            border-color: transparent
            position: absolute
            right: 0
          &:after
            content: ""
            width: 0
            height: 0
            border-width: 6px 6px 6px 0
            border-style: solid
            border-top-color: transparent
            border-bottom-color: transparent
            border-right-color: #63AEE5
            border-left-color: transparent
            position: absolute
            top: 1px
            right: 0
    @include media-breakpoint-up(sm)
      &.tl-left
        margin-left: 0
        margin-right: 50%
        .tl-wrap
          padding: 15px 20px 15px 0
          border-width: 0 2px 0 0
          margin: 0 -1px 0 0
          &:before
            margin: 0 -26px 0 0
            float: right
          .box-arrow
            left: auto
            right: 0
            &:before
              border-width: 7px 0 7px 7px
              right: auto
              left: 0
            &:after
              border-width: 6px 0 6px 6px
              border-right-color: transparent
              border-left-color: #63AEE5
              right: auto
              left: 0
  .box
    color: white
    font-size: 14px
    .box-header
      font-size: 18px
      font-weight: bold
      padding: 1rem
    .box-divider
      border-bottom: 1px solid white
      margin: 0 16px
      height: 0
    .box-body
      padding: 1rem
</style>