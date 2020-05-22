<template lang="pug">
  .contact
    .contact-wrapper.container
      .row
        .offset-lg-3.offset-md-2.col-lg-6.col-md-8
          form.contact-form(@submit="sendMail")
            .form-group
              label.sr-only(for="inputName") Name
              input.form-control(
                type="text"
                placeholder="Name"
                name="inputName"
                id="inputName"
                v-model="contactForm.name"
                required
              )
            .form-group
              label.sr-only(for="inputEmail") E-mail
              input.form-control(
                type="email"
                placeholder="E-mail"
                name="inputEmail"
                id="inputEmail"
                v-model="contactForm.email"
                required
              )
            .form-group
              label.sr-only(for="inputMessage") Message
              textarea.form-control(
                placeholder="Message"
                name="inputMessage"
                id="inputMessage"
                rows="5"
                v-model="contactForm.message"
              )
            .button-area
              button.btn.btn-default.btn-submit(
                type="submit"
                id="submitButton"
              )
                i.fas.fa-check.mr-2
                | SUBMIT
      .access
        | 〒370-0603 群馬県邑楽郡邑楽町中野2730-4
        br
        | TEL 0276-78-3270
      ul.social-links
        li.item
          a.link(href="https://twitter.com/learndeleon" target="new")
            i.fab.fa-twitter
        li.item
          a.link(href="https://instagram.com/learn_de_leon" target="new")
            i.fab.fa-instagram
        li.item
          a.link(href="https://line.me/ti/g2/ld9-FZAJ6faVdxfHpUnkVg" target="new")
            i.fab.fa-line
</template>

<script>
export default {
  data() {
    return {
      contactForm: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    async sendMail(e) {
      e.preventDefault();
      this.$nuxt.$loading.start();
      const mailer = this.$firebaseFunctions.httpsCallable("sendMail");
      try {
        await mailer(this.contactForm);
        this.$toast.success(
          "お問い合わせを受け付けました。ありがとうございました。",
          { duration: 5000 }
        );
        this.resetForm();
      } catch (err) {
        this.$toast.error(
          "お問い合わせに失敗しました。時間をおいて再度お試しください。",
          { duration: 5000 }
        );
        console.log(err);
        throw err;
      } finally {
        this.$nuxt.$loading.finish();
      }
    },
    resetForm() {
      this.contactForm = { name: "", email: "", message: "" };
    }
  }
};
</script>

<style lang="sass" scoped>
.contact
  .form-group
    margin-bottom: 5px
  input, textarea
    height: auto
    background-color: white
    border-radius: 0
    border: none
    padding: 15px
    margin: 0
    box-shadow: none
    resize: none
    outline: none
    &:focus
      background-color: white
      box-shadow: none
      outline: none
  .btn-submit
    display: block
    background-color: #fa4f3e
    color: white
    font-family: $en-accent-family
    font-size: 15px
    letter-spacing: 3px
    border: none
    padding: 15px 25px
    margin-left: auto
  .access
    color: $primary-grey
    font-family: $ja-accent-family
    letter-spacing: 3px
    text-align: center
    margin-top: 100px
    @include media-breakpoint-down(xs)
      font-size: 12px
  .social-links
    list-style: none
    text-align: center
    margin-top: 20px
    .item
      display: inline
      .link
        color: $primary-grey
    @include media-breakpoint-up(sm)
      .item
        font-size: 36px
        margin: 0 15px
    @include media-breakpoint-up(xs)
      .item
        font-size: 30px
        margin: 0 10px
</style>