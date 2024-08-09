<template>
  <div class="create-article">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <b-form autocomplete="off" @submit.stop.prevent="onSubmit()">
        <div class="top-create-article">
          <b-button
            class="btn-save btn-top-create-article"
            :disabled="isSubmitDisabled || invalid"
            type="submit"
          >
            <save-icon class="icon-top-create-article" />
            <span class="title-top-create-article">{{
              $t('button.saveAndClose')
            }}</span>
          </b-button>

          <button class="btn-close" type="button" @click="previousPage">
            <span>{{ $t('button.close') }}</span>
            <div class="icon">
              <i class="fa fa-remove"></i>
            </div>
          </button>
        </div>

        <div class="main-create-article">
          <div v-if="categoryData" class="title-main-create-article">
            {{ $t('fixedPageManagement.edit.titleTop') }}
            {{ categoryData.name[$i18n.locale] }}
          </div>

          <div class="wrapper-tabs-main">
            <div class="wrapper-content-tabs-main">
              <b-tabs lazy @input="handleTabChange">
                <b-tab active>
                  <template #title>
                    <b-img
                      v-if="activeTabContent === 0"
                      :src="ICON.lineTab"
                      class="line-bottom-tab"
                    ></b-img>
                    <span>{{ $t('tabs.contentVi') }}</span>
                  </template>
                  <div class="article-text">
                    <validation-provider name="contentVi" rules="required">
                      <vue-editor
                        id="editor-article-vi"
                        v-model="contentVi"
                        :editor-toolbar="CUSTOM_TOOLBAR_EDITOR"
                        @input="validateContentVi"
                      ></vue-editor>
                    </validation-provider>
                  </div>
                </b-tab>

                <b-tab>
                  <template #title>
                    <b-img
                      v-if="activeTabContent === 1"
                      :src="ICON.lineTab"
                      class="line-bottom-tab"
                    ></b-img>
                    <span>{{ $t('tabs.contentEn') }}</span>
                  </template>
                  <div class="article-text">
                    <validation-provider name="contentEn" rules="">
                      <vue-editor
                        id="editor-article-en"
                        v-model="contentEn"
                        :editor-toolbar="CUSTOM_TOOLBAR_EDITOR"
                      ></vue-editor>
                    </validation-provider>
                  </div>
                </b-tab>
              </b-tabs>
            </div>
          </div>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON, regex, CUSTOM_TOOLBAR_EDITOR } from '~/utils/constants'

export default {
  name: 'FixedPageManagementEdit',
  components: {
    saveIcon: ICON.save,
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      regex,
      CUSTOM_TOOLBAR_EDITOR,
      activeTabContent: 0,
      isSubmitDisabled: true,
      contentVi: null,
      contentEn: null,
      categoryData: null,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'admin/category/category/showDetail',
      Number(this.$route.query.categoryId)
    )

    await this.$store.dispatch(
      'admin/article/article/showDetail',
      Number(this.$route.query.articleId)
    )
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.fixedPageManagementEdit'
      )}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.admin.category.category.isCallApi,
      category: (state) => state.admin.category.category.category,
      article: (state) => state.admin.article.article.article,
    }),
  },
  watch: {
    article: {
      handler(data) {
        if (data) {
          this.contentVi = data.translations.vi.content
          this.contentEn = data.translations.en.content
        }
      },
    },
    category: {
      handler(data) {
        if (data) {
          this.categoryData = data
        } else {
          this.categoryData = null
        }
      },
    },
  },
  mounted() {
    this.$store.dispatch(
      'common/path/setCurrentPath',
      'admin-content-fixed-page-management'
    )
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    handleTabChange(index) {
      this.activeTabContent = index
    },
    validateContentVi(value) {
      this.isSubmitDisabled = !value.trim()
    },
    getDataToUpdate() {
      return {
        contentVi: this.contentVi,
        contentEn: this.contentEn,
      }
    },
    previousPage() {
      this.$router.go(-1)
    },
    onSubmit() {
      const payload = this.getDataToUpdate()
      this.$store.dispatch('admin/article/article/updateFixedPage', {
        id: Number(this.$route.query.articleId),
        payload,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/article/create';
</style>
