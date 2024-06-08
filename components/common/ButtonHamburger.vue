<template>
  <b-button
    class="bg-transparent hamburger close-sidebar-btn hamburger--elastic"
    :class="{ 'is-active': isActive }"
    :data-class="dataClass"
    @click="eventClick()"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner"></span>
    </span>
  </b-button>
</template>

<script>
export default {
  name: 'ButtonHamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    dataClass: {
      type: String,
      default: () => '',
    },
  },
  methods: {
    eventClick() {
      this.$emit('eventClick')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/common/button-hamburger';
</style>
