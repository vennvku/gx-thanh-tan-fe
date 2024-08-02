<template>
  <div class="create-article">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <b-form autocomplete="off" @submit.stop.prevent="onSubmit()">
        <div class="top-create-article">
          <b-button
            class="btn-save btn-top-create-article"
            :disabled="invalid"
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
                    <div class="title-slug-create-article">
                      <div class="title-create-article">
                        <b-form-group class="form-no-icon">
                          <validation-provider
                            v-slot="validationContext"
                            name="titleVi"
                            rules="required|max:255"
                          >
                            <div class="form-input">
                              <b-form-input
                                id="titleVi"
                                v-model.trim="titleVi"
                                name="titleVi"
                                autocomplete="off"
                                :state="getValidationState(validationContext)"
                                class="form-bordered"
                                :class="{
                                  'is-empty': regex.isEmpty(titleVi),
                                  isset: titleVi,
                                }"
                                placeholder=""
                              />
                              <div class="clearfix"></div>
                              <label
                                class="form-label form-bordered"
                                for="titleVi"
                              >
                                {{ $t('input.titleVi') }}
                              </label>
                              <div class="animated--border form-bordered"></div>
                            </div>
                            <div
                              class="error"
                              :class="{
                                'error-effect': validationContext.errors[0],
                              }"
                            >
                              {{ validationContext.errors[0] }}
                            </div>
                          </validation-provider>
                        </b-form-group>
                      </div>

                      <div class="slug-create-article">
                        <b-form-group class="form-no-icon">
                          <validation-provider
                            v-slot="validationContext"
                            name="slug"
                            rules="required|max:255"
                          >
                            <div class="form-input">
                              <b-form-input
                                id="slug"
                                v-model.trim="slug"
                                name="slug"
                                autocomplete="off"
                                :state="getValidationState(validationContext)"
                                class="form-bordered"
                                :class="{
                                  'is-empty': regex.isEmpty(slug),
                                  isset: slug,
                                }"
                                placeholder=""
                                @keydown.space.prevent
                              />
                              <div class="clearfix"></div>
                              <label
                                class="form-label form-bordered"
                                for="slug"
                              >
                                {{ $t('input.slug') }}
                              </label>
                              <div class="animated--border form-bordered"></div>
                            </div>
                            <div
                              class="error"
                              :class="{
                                'error-effect': validationContext.errors[0],
                              }"
                            >
                              {{ validationContext.errors[0] }}
                            </div>
                          </validation-provider>
                          <span class="note-slug">{{
                            $t('articleManagement.noteSlug')
                          }}</span>
                        </b-form-group>
                      </div>
                    </div>

                    <div class="description-article">
                      <div class="title-article-text">
                        {{ $t('articleManagement.descriptionTextVi') }}
                      </div>
                      <b-form-textarea
                        id="textarea-auto-height"
                        v-model="descriptionVi"
                        :placeholder="$t('input.descriptionVi')"
                        rows="5"
                        max-rows="8"
                      ></b-form-textarea>
                    </div>

                    <div class="title-article-text">
                      {{ $t('articleManagement.articleTextVi') }}
                    </div>

                    <validation-provider name="contentVi" rules="required">
                      <vue-editor
                        id="editor-article-vi"
                        v-model="contentVi"
                        :editor-toolbar="CUSTOM_TOOLBAR_EDITOR"
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
                    <div class="title-slug-create-article">
                      <div class="title-create-article">
                        <b-form-group class="form-no-icon">
                          <validation-provider
                            v-slot="validationContext"
                            name="titleEn"
                            rules="max:255"
                          >
                            <div class="form-input">
                              <b-form-input
                                id="titleEn"
                                v-model.trim="titleEn"
                                name="titleEn"
                                autocomplete="off"
                                :state="getValidationState(validationContext)"
                                class="form-bordered"
                                :class="{
                                  'is-empty': regex.isEmpty(titleEn),
                                  isset: titleEn,
                                }"
                                placeholder=""
                              />
                              <div class="clearfix"></div>
                              <label
                                class="form-label form-bordered"
                                for="titleEn"
                              >
                                {{ $t('input.titleEn') }}
                              </label>
                              <div class="animated--border form-bordered"></div>
                            </div>
                            <div
                              class="error"
                              :class="{
                                'error-effect': validationContext.errors[0],
                              }"
                            >
                              {{ validationContext.errors[0] }}
                            </div>
                          </validation-provider>
                        </b-form-group>
                      </div>
                    </div>

                    <div class="description-article">
                      <div class="title-article-text">
                        {{ $t('articleManagement.descriptionTextEn') }}
                      </div>
                      <b-form-textarea
                        id="textarea-auto-height"
                        v-model="descriptionEn"
                        :placeholder="$t('input.descriptionEn')"
                        rows="5"
                        max-rows="8"
                      ></b-form-textarea>
                    </div>

                    <div class="title-article-text">
                      {{ $t('articleManagement.articleTextEn') }}
                    </div>
                    <vue-editor
                      id="editor-article-en"
                      v-model="contentEn"
                      :editor-toolbar="CUSTOM_TOOLBAR_EDITOR"
                    ></vue-editor>
                  </div>
                </b-tab>

                <b-tab>
                  <template #title>
                    <b-img
                      v-if="activeTabContent === 2"
                      :src="ICON.lineTab"
                      class="line-bottom-tab"
                    ></b-img>
                    <span>{{ $t('tabs.imagesAndLink') }}</span>
                  </template>
                  <p>Nội dung của Tab 2</p>
                </b-tab>
              </b-tabs>
            </div>

            <div class="option-create-article">
              <ul class="list-feature-option-article">
                <li class="item-feature-option-article">
                  <div class="title-feature-option-article">
                    {{ $t('articleManagement.status') }}
                  </div>
                  <b-form-select
                    v-model="selectedPublish"
                    class="select-form"
                    :options="publishOptions"
                  >
                  </b-form-select>
                </li>

                <li class="item-feature-option-article">
                  <div class="title-feature-option-article">
                    {{ $t('articleManagement.category') }}
                    <span class="required">(*)</span>
                  </div>

                  <validation-provider name="category" rules="required">
                    <b-form-select
                      v-model="selectedCategory"
                      class="select-form"
                    >
                      <b-form-select-option :value="null" :disabled="true">
                        {{ $t('select.selectCategory') }}
                      </b-form-select-option>
                      <b-form-select-option
                        v-for="(category, key) in categoriesData"
                        :key="key"
                        :value="category.id"
                      >
                        {{ category.name[$i18n.locale] }}
                      </b-form-select-option>
                    </b-form-select>
                  </validation-provider>
                </li>

                <li class="item-feature-option-article">
                  <div class="title-feature-option-article">
                    {{ $t('articleManagement.featured') }}
                  </div>
                  <div class="wrapper-toggle-switch-feature">
                    <label class="toggle-switch">
                      <input
                        v-model="checkFeature"
                        type="checkbox"
                        name="check-feature"
                        :value="true"
                        :unchecked-value="false"
                      />
                      <div class="toggle-switch-background">
                        <div class="toggle-switch-handle"></div>
                      </div>
                    </label>
                    <span
                      v-if="checkFeature"
                      class="text-toggle-switch-feature active"
                    >
                      {{ $t('articleManagement.featureYes') }}
                    </span>
                    <span v-else class="text-toggle-switch-feature">
                      {{ $t('articleManagement.featureNo') }}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import slugify from 'slugify'
import { ICON, regex, CUSTOM_TOOLBAR_EDITOR } from '~/utils/constants'

export default {
  name: 'ArticleManagementCreate',
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
      checkFeature: false,
      titleVi: null,
      titleEn: null,
      slug: null,
      contentVi: null,
      contentEn: null,
      descriptionVi: null,
      descriptionEn: null,
      selectedPublish: 1,
      selectedCategory: null,
      photo: null,
      publishOptions: [],
      categoriesData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('admin/category/category/getList')
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.articleManagementCreate'
      )}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.admin.category.category.isCallApi,
      categories: (state) => state.admin.category.category.categories,
    }),
  },
  watch: {
    categories: {
      handler(data) {
        if (data.length > 0) {
          this.categoriesData = this.filterCategories(data)
        } else {
          this.categoriesData = []
        }
      },
    },
    titleVi(newTitle) {
      this.slug = slugify(newTitle, {
        lower: true,
        strict: true,
        locale: 'vi',
      })
    },

    '$i18n.locale': function () {
      this.setOptions()
    },
  },
  mounted() {
    this.$store.dispatch(
      'common/path/setCurrentPath',
      'admin-content-article-management'
    )
  },
  created() {
    this.setOptions()
  },

  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    handleTabChange(index) {
      this.activeTabContent = index
    },
    setOptions() {
      this.publishOptions = [
        { value: 1, text: this.$t('select.publish') },
        { value: 0, text: this.$t('select.unPublish') },
      ]
    },

    filterCategories(categories) {
      const result = []

      function traverse(categories) {
        categories.forEach((category) => {
          // Nếu là danh mục con với is_fixed_page = 0
          if (category.is_fixed_page === 0 && !category.is_parent) {
            result.push(category)
          }

          // Nếu là danh mục cha và không có danh mục con
          if (
            category.is_parent &&
            (!category.children || category.children.length === 0)
          ) {
            result.push(category)
          }

          // Đệ quy để kiểm tra các danh mục con
          if (category.children && category.children.length > 0) {
            traverse(category.children)
          }
        })
      }

      traverse(categories)
      return result
    },
    getDataToCreate() {
      return {
        photo: this.photo,
        titleVi: this.titleVi,
        titleEn: this.titleEn,
        slug: this.slug,
        contentVi: this.contentVi,
        contentEn: this.contentEn,
        descriptionVi: this.descriptionVi,
        descriptionEn: this.descriptionEn,
        is_show: this.selectedPublish,
        is_featured: this.checkFeature,
        category_id: this.selectedCategory,
      }
    },
    previousPage() {
      this.$router.go(-1)
    },
    onSubmit() {
      const payload = this.getDataToCreate()
      this.$store.dispatch('admin/article/article/create', payload)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/article/create';
</style>
