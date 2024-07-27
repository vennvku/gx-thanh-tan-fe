<template>
  <div class="management">
    <div class="top-management">
      <button class="btn-news" @click="routeCreate()">
        <add-icon class="icon-news" />
        <span class="title-news">{{ $t('button.new') }}</span>
      </button>
    </div>

    <div class="wrapper-control-management">
      <div class="control-management start-item">
        <div class="search">
          <b-form-input
            v-model="keywords"
            type="text"
            class="search-input"
            :placeholder="$t('input.search')"
            autocomplete="off"
          />
          <b-button class="btn-search" @click="search()">
            <search-admin-icon class="search-icon" />
          </b-button>
        </div>
      </div>
    </div>

    <div class="table-conent">
      <div class="table-category">
        <div class="thead-category">
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.name') }}
          </div>
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.fixed_page') }}
          </div>
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.position') }}
          </div>
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.status') }}
          </div>
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.created_at') }}
          </div>
          <div class="item-thead-category">
            {{ $t('categoryManagement.data.header.action') }}
          </div>
        </div>
        <div class="tbody-category">
          <div
            v-for="category in categoriesData"
            :key="category.id"
            class="wrapper-row-parent"
            :class="{ 'no-children': !category.has_children }"
          >
            <div
              v-if="category.has_children"
              class="toggle-row-parent"
              @click="toggleCollapseCategory(category.id)"
            >
              <arrow-up-admin-icon v-if="collapseCategoryStates[category.id]" />
              <arrow-bottom-admin-icon v-else />
            </div>

            <div class="tbody-category-row row-parent">
              <div class="item-row-parent">
                <category-parent class="icon-item-row-parent" />
                {{ category.name[$i18n.locale] }}
              </div>
              <div class="item-row-parent">
                <b-form-select
                  v-if="!category.has_children"
                  :value="category.is_fixed_page"
                  :options="isFixedPageOptions"
                  class="category-management-select-form"
                  @change="toggleFixedPage(category.id, $event)"
                ></b-form-select>
              </div>
              <div class="item-row-parent">
                {{ category.position }}
                <div class="wrapper-move-category">
                  <move-up-icon
                    v-if="!isFirstItemCategory(category.position)"
                    class="icon-move-category icon-move-up"
                    @click="moveUpCategory(category.id)"
                  />
                  <move-bottom-icon
                    v-if="
                      !isLastItemCategory(category.position, categoriesData)
                    "
                    class="icon-move-category icon-move-bottom"
                    @click="moveBottomCategory(category.id)"
                  />
                </div>
              </div>
              <div class="item-row-parent">
                <publish-icon
                  v-if="category.status === 1"
                  class="icon-table-admin publish-icon-admin"
                  @click="toggleStatusCategory(category.id, 0)"
                />
                <un-publish-icon
                  v-else
                  class="icon-table-admin un-publish-icon-admin"
                  @click="toggleStatusCategory(category.id, 1)"
                />
              </div>
              <div class="item-row-parent">
                {{ category.created_at | dayDisplay }}
              </div>
              <div class="item-row-parent item-content-left">
                <b-button class="btn-action btn-edit">
                  <edit-icon />
                  <span class="text-btn-action">Edit</span></b-button
                >

                <b-button
                  v-if="!category.has_children"
                  class="btn-action btn-trash"
                >
                  <trash-icon />
                </b-button>
              </div>
            </div>

            <b-collapse
              v-if="category.has_children"
              v-model="collapseCategoryStates[category.id]"
            >
              <div
                v-for="child in category.children"
                :key="child.id"
                class="tbody-category-row row-children"
              >
                <div class="item-row-children">
                  <category-children class="icon-item-row-children" />
                  {{ child.name[$i18n.locale] }}
                </div>
                <div class="item-row-children">
                  <b-form-select
                    :value="child.is_fixed_page"
                    :options="isFixedPageOptions"
                    class="category-management-select-form"
                    @change="toggleFixedPage(child.id, $event)"
                  >
                  </b-form-select>
                </div>
                <div class="item-row-children">
                  {{ child.position }}
                  <div class="wrapper-move-category">
                    <move-up-icon
                      v-if="!isFirstItemCategory(child.position)"
                      class="icon-move-category icon-move-up"
                      @click="moveUpCategory(child.id)"
                    />
                    <move-bottom-icon
                      v-if="
                        !isLastItemCategory(child.position, category.children)
                      "
                      class="icon-move-category icon-move-bottom"
                      @click="moveBottomCategory(child.id)"
                    />
                  </div>
                </div>
                <div class="item-row-children">
                  <publish-icon
                    v-if="child.status === 1"
                    class="icon-table-admin publish-icon-admin"
                  />
                  <un-publish-icon
                    v-else
                    class="icon-table-admin un-publish-icon-admin"
                  />
                </div>
                <div class="item-row-children">
                  {{ child.created_at | dayDisplay }}
                </div>
                <div class="item-row-children">
                  <b-button class="btn-action btn-edit">
                    <edit-icon />
                    <span class="text-btn-action">Edit</span></b-button
                  >

                  <b-button class="btn-action btn-trash">
                    <trash-icon />
                  </b-button>
                </div>
              </div>
            </b-collapse>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON, SCREEN_PATH } from '~/utils/constants'

export default {
  name: 'CategoryManagement',
  components: {
    addIcon: ICON.add,
    searchAdminIcon: ICON.searchAdmin,
    ArrowBottomAdminIcon: ICON.arrowBottomAdmin,
    ArrowUpAdminIcon: ICON.arrowUpAdmin,
    CategoryParent: ICON.categoryParent,
    CategoryChildren: ICON.categoryChildren,
    EditIcon: ICON.edit,
    TrashIcon: ICON.trash,
    PublishIcon: ICON.publish,
    UnPublishIcon: ICON.unPublish,
    moveUpIcon: ICON.moveUp,
    moveBottomIcon: ICON.moveBottom,
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      keywords: null,
      visible: true,
      categoriesData: [],
      collapseCategoryStates: {},
      isFixedPageOptions: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('admin/category/category/getList')
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.categoryManagement'
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
          this.categoriesData = data

          this.categoriesData.forEach((category) => {
            this.$set(this.collapseCategoryStates, category.id, false)
          })
        } else {
          this.categoriesData = []
        }
      },
    },
    '$i18n.locale': function () {
      this.setIsFixedPageOption()
    },
  },
  created() {
    this.setIsFixedPageOption()
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('move-category-done', () => {
        this.getCategoryList()
      })
    })
  },
  methods: {
    dayDisplay(date) {
      return this.$options.filters.dayDisplay(date)
    },
    async getCategoryList() {
      await this.$store.dispatch('admin/category/category/getList', {
        keyword: this.keywords,
      })
    },
    setIsFixedPageOption() {
      this.isFixedPageOptions = [
        { value: 1, text: this.$t('select.fixed_page') },
        { value: 0, text: this.$t('select.orther') },
      ]
    },
    toggleCollapseCategory(id) {
      this.$set(
        this.collapseCategoryStates,
        id,
        !this.collapseCategoryStates[id]
      )
    },
    toggleFixedPage(categoryId, isFixedPage) {
      const payload = {
        is_fixed_page: isFixedPage,
      }

      this.$store.dispatch('admin/category/category/updateCategoryManagement', {
        id: Number(categoryId),
        payload,
      })
    },
    toggleStatusCategory(categoryId, _status) {
      const payload = {
        status: _status,
      }

      this.$store.dispatch('admin/category/category/updateCategoryManagement', {
        id: Number(categoryId),
        payload,
      })
    },
    isFirstItemCategory(position) {
      return (
        position === Math.min(...this.categoriesData.map((c) => c.position))
      )
    },
    isLastItemCategory(position, categories) {
      return position === Math.max(...categories.map((c) => c.position))
    },
    moveUpCategory(categoryId) {
      const payload = {
        id: Number(categoryId),
      }
      this.$store.dispatch('admin/category/category/moveUpCategory', payload)
    },
    moveBottomCategory(categoryId) {
      const payload = {
        id: Number(categoryId),
      }
      this.$store.dispatch(
        'admin/category/category/moveBottomCategory',
        payload
      )
    },
    async search() {
      this.currentPage = 1
      await this.getCategoryList()
    },
    routeCreate() {
      return this.$router.push({
        name: SCREEN_PATH.ADMIN.CONTENT.ARTICLE_MANAGEMENT.CREATE,
      })
    },
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/admin/management';
@import 'assets/scss/admin/category/category-management';
</style>
