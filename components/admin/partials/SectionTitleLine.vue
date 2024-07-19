<template>
  <div class="section-title-admin">
    <span>{{ sectionTitle ? $t(`admin.page.${sectionTitle.page}`) : '' }}</span>
  </div>
</template>

<script>
export default {
  name: 'SectionTitleLine',
  props: {
    sectionTitle: {
      type: Object,
      required: true,
      default: () => {},
    },
  },
}
</script>

<style lang="scss" scoped>
.section-title-admin {
  font-size: 20px;
}
</style>
