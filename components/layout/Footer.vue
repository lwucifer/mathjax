<template>
  <div class="footer">
  <div class="container">
    <div class="copy-right">
      <h6>Upbeat youtube player</h6>
      © 2020 Music Pro, All rights reserved
    </div>
    <div class="socials">
      <div class="icons mb-3">
        <a href="#" target="blank"><IconFacebook/></a>
        <a href="#" target="blank"><IconGoogle/></a>
        <a href="#" target="blank"><IconTwitter/></a>
      </div>
      <div class="links">
        <a href="#" target="blank">Download</a>
        <a href="#" target="blank">Features</a>
        <a href="#" target="blank">Terms & Privacy</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import IconTwitter from "~/assets/svg/icons/twitter.svg?inline";
import IconGoogle from "~/assets/svg/icons/google.svg?inline";
import IconFacebook from "~/assets/svg/icons/facebook.svg?inline";

export default {
  components: {
    IconTwitter,
    IconGoogle,
    IconFacebook
  },

  methods: {
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";
</style>>
