<template>
  <div>
    <div v-if="type">
      <div v-if="typeCategory === 1">
        <detail-fixed-page :id-category="idCategory" />
      </div>
      <div v-else><dynamic-layout /></div>
    </div>
    <div v-else>Trang tin tuc</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DynamicLayout from '~/components/menu/DynamicLayout'
import DetailFixedPage from '~/components/pages/DetailFixedPage'

export default {
  name: 'MenuPage',
  components: {
    DynamicLayout,
    DetailFixedPage,
  },
  data() {
    return {
      typeCategory: null,
      idCategory: null,
    }
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
  watch: {
    type: {
      handler(data) {
        if (data) {
          this.typeCategory = data.type
          this.idCategory = data.category_id
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch('common/path/setCurrentPath', this.firstSegment)
  },
}
</script>
