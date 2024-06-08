<template>
  <div
    class="overlay"
    :class="{ 'show-overlay': showOverlay }"
    @click="closeSidebar()"
  ></div>
</template>

<script>
export default {
  name: 'AppOverlay',
  data() {
    return {
      showOverlay: false,
    }
  },
  mounted() {
    this.$bus.$on('toggle-sidebar', () => {
      this.showOverlay = !this.showOverlay
    })
  },
  methods: {
    closeSidebar() {
      this.$bus.$emit('toggle-sidebar')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/variables';

.overlay {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 699;
  background-color: rgba(52, 58, 64, 0.5);
  cursor: pointer;
  display: none;
  opacity: 0;
  transform: translateX($sidebar-width);
  transition: all 0.3s ease-in;

  &.show-overlay {
    display: block;
    opacity: 1;
    transform: translateX(0);

    @media screen and (max-width: 575px) {
      display: none;
      opacity: 0;
      transform: translateX($sidebar-width);
    }
  }
}
</style>
