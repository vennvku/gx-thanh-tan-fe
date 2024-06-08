<template>
  <div
    v-if="show"
    class="loading d-flex align-items-center justify-content-center"
  >
    <div class="loading-wrapper">
      <span class="one"></span>
      <span class="two"></span>
      <span class="three"></span>
      <span class="four"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppLoading',
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    this.$bus.$on('toggle-loading', () => {
      this.show = !this.show
    })
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/animation';

.loading {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(52, 58, 64, 0.5);
  z-index: 999;

  .loading-wrapper {
    span {
      position: absolute;
      display: block;
      width: 30px;
      aspect-ratio: 1;
      border-radius: 50%;
      animation: speed 2s infinite ease-in-out;

      &.one {
        background: #4285f4;
        animation-delay: 1.5s;
      }

      &.two {
        background: #ea4335;
        animation-delay: 1s;
      }

      &.three {
        background: #fbbc05;
        animation-delay: 0.5s;
      }

      &.four {
        background: #34a853;
      }
    }
  }
}
</style>
