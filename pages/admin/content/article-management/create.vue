<template>
  <div class="create-article">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <!-- @submit.stop.prevent="onSubmit()" -->
      <b-form autocomplete="off">
        <div class="top-create-article">
          <b-button class="btn-save btn-top-create-article" :disabled="invalid">
            <add-icon class="icon-top-create-article" />
            <span class="title-top-create-article">{{
              $t('button.saveAndClose')
            }}</span>
          </b-button>

          <button class="btn-close">
            <span>{{ $t('button.close') }}</span>
            <div class="icon">
              <i class="fa fa-remove"></i>
            </div>
          </button>
        </div>

        <div class="main-create-article">
          <div class="title-slug-create-article">
            <div class="title-create-article">
              <b-form-group class="form-no-icon">
                <validation-provider
                  v-slot="validationContext"
                  name="title"
                  rules="required|max:255"
                >
                  <div class="form-input">
                    <b-form-input
                      id="title"
                      v-model.trim="title"
                      name="title"
                      autocomplete="off"
                      :state="getValidationState(validationContext)"
                      class="form-bordered"
                      :class="{ 'is-empty': regex.isEmpty(title) }"
                      placeholder=""
                      @keydown.space.prevent
                    />
                    <div class="clearfix"></div>
                    <label class="form-label form-bordered" for="title">
                      {{ $t('input.title') }}
                    </label>
                    <div class="animated--border form-bordered"></div>
                  </div>
                  <div
                    class="error"
                    :class="{ 'error-effect': validationContext.errors[0] }"
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
                      :class="{ 'is-empty': regex.isEmpty(slug) }"
                      placeholder=""
                      @keydown.space.prevent
                    />
                    <div class="clearfix"></div>
                    <label class="form-label form-bordered" for="slug">
                      {{ $t('input.slug') }}
                    </label>
                    <div class="animated--border form-bordered"></div>
                  </div>
                  <div
                    class="error"
                    :class="{ 'error-effect': validationContext.errors[0] }"
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

          <div class="wrapper-tabs-main">
            <b-tabs lazy @input="handleTabChange">
              <b-tab active>
                <template #title>
                  <b-img
                    v-if="activeTabContent === 0"
                    :src="ICON.lineTab"
                    class="line-bottom-tab"
                  ></b-img>
                  <span>{{ $t('tabs.content') }}</span>
                </template>
                <div class="tab-content-article">
                  <div class="article-text">
                    <div class="title-article-text">
                      {{ $t('articleManagement.articleText') }}
                    </div>
                    <vue-editor
                      id="editor-article"
                      v-model="content"
                      :editor-toolbar="CUSTOM_TOOLBAR_EDITOR"
                    ></vue-editor>
                  </div>
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

                      <b-form-select
                        v-model="selectedCategory"
                        class="select-form"
                        :options="categoryOptions"
                      >
                      </b-form-select>
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
              </b-tab>
              <b-tab>
                <template #title>
                  <b-img
                    v-if="activeTabContent === 1"
                    :src="ICON.lineTab"
                    class="line-bottom-tab"
                  ></b-img>
                  <span>{{ $t('tabs.imagesAndLink') }}</span>
                </template>
                <p>Nội dung của Tab 2</p>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { ICON, regex, CUSTOM_TOOLBAR_EDITOR } from '~/utils/constants'

export default {
  name: 'ArticleManagementCreate',
  components: {
    addIcon: ICON.add,
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
      title: null,
      slug: null,
      content: null,
      selectedPublish: 1,
      selectedCategory: null,
      publishOptions: [],
      categoryOptions: [{ value: null, text: 'Uncategorised', disabled: true }],
    }
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.articleManagementCreate'
      )}`,
    }
  },
  watch: {
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
    saveContent() {
      // console.log(this.content)
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/article/create';
</style>
