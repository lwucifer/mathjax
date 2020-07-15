<template>
  <div class="page-wrap layout-default">
    <Header />

    <nuxt class="page-content"/>

    <Footer />
  </div>
</template>

<script>
import Header from "~/components/layout/Header"
import Footer from "~/components/layout/Footer"

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";
</style>
