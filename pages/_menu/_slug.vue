<template>
  <div>
    <div v-if="type">
      <div v-if="type.type === 1">This is Fixed Page Sub</div>
      <div v-else>
        <dynamic-layout />
      </div>
    </div>
    <div v-else>Trang tin tuc</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DynamicLayout from '~/components/menu/DynamicLayout'

export default {
  name: 'MenuPage',
  components: {
    DynamicLayout,
  },
  data() {
    return {
      slug: this.$route.params.slug,
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
  },
}
</script>
