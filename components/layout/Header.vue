<template>
  <div class="header" :class="headerSticky">
    <div class="container">
      <div class="header-content">
        <div class="header-logo" @click.prevent="redirectHome">
          <Logo />
        </div>
        <div class="header-menu">
          <div class="header-menu-item">
            <n-link to="#section0">HOME</n-link>
          </div>
          <div class="header-menu-item">
            <n-link to="#section3">Features</n-link>
          </div>
          <div class="header-menu-item">
            <n-link to="#section4">About</n-link>
          </div>
          <div class="header-menu-item">
            <n-link to="#section5">Why us</n-link>
          </div>
          <div class="header-menu-item">
            <n-link to="#section6">Clients</n-link>
          </div>
          <div class="header-menu-item">
            <n-link to="#section7">Pricing</n-link>
          </div>
          <div class="header-menu-item p-0">
            <a class="btn" target='blank' href="./">
              <IconArrowDown/>
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/common/Logo.vue";
import IconArrowDown from "~/assets/svg/icons/arrow-down.svg?inline";

export default {
  components: {
    Logo,
    IconArrowDown
  },

  data() {
    return {
      headerSticky: ""
    };
  },

  methods: {
    handleScroll(event) {
      if (document.documentElement.scrollTop > 45) {
        this.headerSticky = "sticky";
      } else {
        this.headerSticky = "";
      }
    },

    redirectHome() {
      window.location="/";
    }
  },

  created() {
    if (process.client) {
      document.addEventListener("scroll", this.handleScroll);
    }
  },

  destroyed() {
    if (process.client) {
      document.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/styles.scss";
</style>>
