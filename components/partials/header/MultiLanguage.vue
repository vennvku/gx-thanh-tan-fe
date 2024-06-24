<template>
  <b-dropdown right class="switch-lang">
    <template #button-content>
      <div class="btn-bg">
        <b-img
          :src="lang === 'vi' ? IMAGE.lang.vi : IMAGE.lang.en"
          class="main-lang"
        />
        <span v-if="lang === 'vi'" class="main-lang-text">{{
          $t('language.vi')
        }}</span>
        <span v-else class="main-lang-text">{{ $t('language.en') }}</span>
      </div>
    </template>
    <b-dropdown-item-button @click="changeLanguage('vi')">
      <b-img :src="IMAGE.lang.vi" class="item-lang-image" />
      <span class="item-lang-text">{{ $t('language.vi') }}</span>
    </b-dropdown-item-button>
    <b-dropdown-item-button @click="changeLanguage('en')">
      <b-img :src="IMAGE.lang.en" class="item-lang-image" />
      <span class="item-lang-text">{{ $t('language.en') }}</span>
    </b-dropdown-item-button>
  </b-dropdown>
</template>

<script>
import { mapState } from 'vuex'
import { IMAGE } from '~/utils/constants'
export default {
  name: 'MultiLanguage',
  data() {
    return {
      IMAGE,
    }
  },
  computed: {
    ...mapState({
      lang: (state) => state.common.lang.locale,
    }),
  },
  methods: {
    changeLanguage(lang) {
      this.$store.dispatch('common/lang/switchLang', lang)
      this.refreshTooltipMessageErrors()
    },
    refreshTooltipMessageErrors() {
      const inputNodes = document.querySelectorAll('input.is-invalid')
      inputNodes.forEach((input) => {
        input.focus({ preventScroll: true })
        input.blur()
      })
    },
  },
}
</script>

<style lang="scss">
@import 'assets/scss/partials/header/multi-language';
</style>
