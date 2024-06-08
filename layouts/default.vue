<template>
  <div class="default-layout app-container fixed-header">
    <app-header />
    <b-container class="container-wrapper position-relative" fluid="md">
      <nuxt class="page-content" />
    </b-container>
    <app-footer />
    <app-overlay />
    <error-modal />
    <success-modal />
    <app-loading />
  </div>
</template>

<script>
import AppHeader from '~/components/partials/AppHeader'
import AppFooter from '~/components/partials/AppFooter'
import AppOverlay from '~/components/partials/AppOverlay'
import ErrorModal from '~/components/common/ErrorModal'
import SuccessModal from '~/components/common/SuccessModal'
import AppLoading from '~/components/partials/AppLoading'

export default {
  name: 'LayoutDefault',
  components: {
    AppHeader,
    AppFooter,
    AppOverlay,
    ErrorModal,
    SuccessModal,
    AppLoading,
  },
}
</script>

<style scoped lang="scss">
@import 'assets/scss/variables';

.default-layout {
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;

  .container-wrapper {
    min-height: 150vh;
    padding-left: 0;
    padding-right: 0;
    z-index: 98;

    @media screen and (max-width: 1024px) {
      padding-top: 45px;
    }

    &.over-show {
      z-index: 109;
    }

    @media screen and (max-width: 991px) {
      padding-left: 0 !important;
      padding-right: 0 !important;
    }

    .page-content {
      padding: $default-main-padding-top 0;

      @media screen and (max-width: 1249px) {
        padding: $tablet-main-padding-top 0;
      }

      @media screen and (max-width: 767px) {
        padding: $mobile-main-padding-top 0;
      }

      @media screen and (max-width: 575px) {
        padding: $small-mobile-main-padding-top 0;
      }
    }
  }
}
</style>
