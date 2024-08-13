<template>
  <div v-if="type">
    <div v-if="type.type === 1">
      <detail-fixed-page />
    </div>
    <div v-else><dynamic-layout /></div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DynamicLayout from '~/components/menu/DynamicLayout'
import DetailFixedPage from '~/components/pages/DetailFixedPage'

export default {
  name: 'FixedPage',
  components: {
    DynamicLayout,
    DetailFixedPage,
  },
  async fetch() {
    await this.$store.dispatch('category/category/getTypeCategory', {
      slug: this.$route.params.slug,
    })
  },
  computed: {
    ...mapState({
      type: (state) => state.category.category.type,
    }),
    firstSegment() {
      const path = this.$route.path
      const segments = path.split('/')
      return segments[1]
    },
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', this.firstSegment)
  },
}
</script>
