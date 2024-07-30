<template>
  <div class="create-category">
    <validation-observer ref="observer" v-slot="{ invalid }">
      <b-form autocomplete="off" @submit.stop.prevent="onSubmit()">
        <div class="top-create-category">
          <b-button
            class="btn-save btn-top-create-category"
            :disabled="invalid"
            type="submit"
          >
            <save-icon class="icon-top-create-category" />
            <span class="title-top-create-category">{{
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

        <div class="main-create-category">
          <div class="content-left-create-category">
            <b-form-group class="form-no-icon">
              <validation-provider
                v-slot="validationContext"
                name="nameCategoryVi"
                rules="required|max:255"
              >
                <div class="form-input">
                  <b-form-input
                    id="nameCategoryVi"
                    v-model.trim="nameCategoryVi"
                    name="nameCategoryVi"
                    autocomplete="off"
                    :state="getValidationState(validationContext)"
                    class="form-bordered"
                    :class="{
                      'is-empty': regex.isEmpty(nameCategoryVi),
                      isset: nameCategoryVi,
                    }"
                    placeholder=""
                  />
                  <div class="clearfix"></div>
                  <label class="form-label form-bordered" for="nameCategoryVi">
                    {{ $t('input.nameCategoryVi') }}
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

            <b-form-group class="form-no-icon">
              <validation-provider
                v-slot="validationContext"
                name="nameCategoryEn"
                rules="required|max:255"
              >
                <div class="form-input">
                  <b-form-input
                    id="nameCategoryEn"
                    v-model.trim="nameCategoryEn"
                    name="nameCategoryEn"
                    autocomplete="off"
                    :state="getValidationState(validationContext)"
                    class="form-bordered"
                    :class="{
                      'is-empty': regex.isEmpty(nameCategoryEn),
                      isset: nameCategoryEn,
                    }"
                    placeholder=""
                  />
                  <div class="clearfix"></div>
                  <label class="form-label form-bordered" for="nameCategoryEn">
                    {{ $t('input.nameCategoryEn') }}
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

            <b-form-group class="form-no-icon">
              <validation-provider
                v-slot="validationContext"
                name="url"
                rules="required|max:255"
              >
                <div class="form-input">
                  <b-form-input
                    id="url"
                    v-model.trim="url"
                    name="url"
                    autocomplete="off"
                    :state="getValidationState(validationContext)"
                    class="form-bordered"
                    :class="{ 'is-empty': regex.isEmpty(url), isset: url }"
                    placeholder=""
                    @keydown.space.prevent
                  />
                  <div class="clearfix"></div>
                  <label class="form-label form-bordered" for="url">
                    {{ $t('input.url') }}
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

            <div class="option-create-category">
              <div class="title-option-create-category">
                {{ $t('categoryManagement.create.fixedMenu') }}
              </div>

              <div class="select-option-create-category">
                <b-form-select
                  v-model="selectedFixedPage"
                  class="select-form"
                  :options="fixedPageOptions"
                >
                </b-form-select>
              </div>
            </div>

            <div
              v-if="showTypeMenu"
              class="option-create-category option-type-menu"
            >
              <div class="title-option-create-category">
                {{ $t('categoryManagement.create.parentChildMenu') }}
              </div>

              <div class="select-option-create-category">
                <b-form-select
                  v-model="selectedTypeMenu"
                  class="select-form"
                  :options="typeMenuOptions"
                >
                </b-form-select>
              </div>
            </div>
          </div>

          <div class="content-right-create-category">
            <b-collapse v-model="selectedTypeMenu">
              <div v-if="selectedTypeMenu" class="multi-option-create-category">
                <div class="title-multi-option-create-category">
                  {{ $t('categoryManagement.create.choosenParentMenu') }}
                </div>

                <validation-provider
                  v-slot="validationContext"
                  name="category"
                  rules="required"
                >
                  <b-form-select
                    id="categoryParent"
                    v-model="selectedParentMenu"
                    name="categoryParent"
                    :state="getValidationState(validationContext)"
                    :select-size="categoriesData.length + 1"
                    class="select-form"
                  >
                    <b-form-select-option :value="null" :disabled="true">
                      ----{{ $t('select.selectParentMenu') }}----
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
              </div>
            </b-collapse>
          </div>
        </div>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON, regex } from '~/utils/constants'

export default {
  name: 'CategoryManagementEdit',
  components: {
    saveIcon: ICON.save,
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      regex,
      nameCategoryVi: null,
      nameCategoryEn: null,
      url: null,
      selectedFixedPage: 0,
      fixedPageOptions: [],
      selectedTypeMenu: false,
      typeMenuOptions: [],
      selectedParentMenu: null,
      categoriesData: [],

      showTypeMenu: true,
    }
  },
  async fetch() {
    await this.$store.dispatch(
      'admin/category/category/showDetail',
      Number(this.$route.query.id)
    )
    await this.$store.dispatch('admin/category/category/getList')
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.categoryManagementEdit'
      )}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.admin.category.category.isCallApi,
      category: (state) => state.admin.category.category.category,
      categories: (state) => state.admin.category.category.categories,
    }),
  },
  watch: {
    category: {
      handler(data) {
        if (data) {
          this.nameCategoryVi = data.name.vi
          this.nameCategoryEn = data.name.en
          this.url = data.url
          this.selectedFixedPage = data.is_fixed_page
          this.showTypeMenu = !data.has_children
          this.selectedParentMenu = data.parent_id
          this.selectedTypeMenu = !data.is_parent
        }
      },
    },
    categories: {
      handler(data) {
        if (data.length > 0) {
          this.categoriesData = data.filter(
            (category) => category.id !== parseInt(this.$route.query.id)
          )
        } else {
          this.categoriesData = []
        }
      },
    },
    '$i18n.locale': function () {
      this.setCategoryOptions()
    },
    selectedTypeMenu: function () {
      if (this.selectedTypeMenu === false) {
        this.selectedParentMenu = null
      }
    },
  },
  mounted() {
    this.$store.dispatch(
      'common/path/setCurrentPath',
      'admin-content-category-management'
    )
  },
  created() {
    this.setCategoryOptions()
  },

  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    setCategoryOptions() {
      this.fixedPageOptions = [
        { value: 1, text: this.$t('select.fixed_page') },
        { value: 0, text: this.$t('select.orther') },
      ]

      this.typeMenuOptions = [
        { value: false, text: this.$t('select.parentMenu') },
        { value: true, text: this.$t('select.childrenMenu') },
      ]
    },
    previousPage() {
      this.$router.go(-1)
    },
    getDataToUpdate() {
      return {
        nameVi: this.nameCategoryVi,
        nameEn: this.nameCategoryEn,
        url: this.url,
        is_fixed_page: this.selectedFixedPage,
        parent_id: this.selectedParentMenu,
      }
    },
    onSubmit() {
      const payload = this.getDataToUpdate()

      this.$store.dispatch('admin/category/category/update', {
        id: Number(this.$route.query.id),
        payload,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/category/create';
</style>
