<template>
  <div class="management">
    <div class="top-management">
      <button class="btn-news" @click="routeCreate()">
        <add-icon class="icon-news" />
        <span class="title-news">{{ $t('button.new') }}</span>
      </button>

      <b-dropdown class="dropdown-action" :disabled="!isAnyCheckboxSelected">
        <template #button-content>
          <div class="wrapper-content-action">
            <three-dots-line-icon class="icon-content-action" />
            <span class="title-content-action">{{ $t('select.action') }}</span>
            <arrow-bottom-admin-icon class="icon-content-action" />
          </div>
        </template>

        <b-dropdown-item-button
          v-for="(action, key) in ACTIONS_ARTICLE"
          :key="key"
          @click="handleActionClick(action)"
        >
          <div class="wrapper-item-action">
            <component
              :is="action.icon"
              class="icon-item-action"
              :style="{ color: action.color }"
            />
            <span class="title-item-action">{{
              $t('select.' + action.text)
            }}</span>
          </div>
        </b-dropdown-item-button>
      </b-dropdown>
    </div>

    <div
      class="wrapper-control-management"
      :class="{ 'show-filter-detail': isShowFilterDetail }"
    >
      <div class="control-management">
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
        <div class="filter">
          <div class="content-control-filter" @click="showFilterDetail()">
            <span>{{ $t('select.filterOptions') }}</span>
            <arrow-bottom-admin-icon class="icon-control-filter" />
          </div>
          <div class="clear-control-filter" @click="hideFilterDetail()">
            <span>{{ $t('select.clear') }}</span>
          </div>
        </div>
        <div class="sort">
          <b-form-select v-model="selectedSort" class="select-sort select-form">
            <b-form-select-option :value="0">{{
              $t('select.idDescending')
            }}</b-form-select-option>
            <b-form-select-option :value="1">{{
              $t('select.idAscending')
            }}</b-form-select-option>
          </b-form-select>
        </div>
      </div>

      <div class="filter-detail">
        <div class="item-filter-detail">
          <b-form-select
            v-model="selectedFeature"
            class="select-form"
            :options="featureOptions"
          >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select
            v-model="selectedCategory"
            class="select-form"
            :options="categoryOptions"
          >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select
            v-model="selectedPublish"
            class="select-form"
            :options="publishOptions"
          >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select
            v-model="selectedAuthor"
            class="select-form"
            :options="authorOptions"
          >
          </b-form-select>
        </div>
      </div>
    </div>

    <div class="table-conent">
      <vue-good-table
        id="article-management-table"
        :columns="columns"
        :rows="articlesData"
        :sort-options="{ enabled: false }"
      >
        <template slot="table-column" slot-scope="props">
          <span v-if="props.column.label === 'checkbox'">
            <b-form-checkbox disabled></b-form-checkbox>
          </span>
          <span v-else class="text-center">
            {{ $t('articleManagement.data.header.' + props.column.label) }}
          </span>
        </template>
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field === 'no'" class="text-center">
            <b>{{ calcOrderNumber(props.row.originalIndex) }}</b>
          </div>

          <div
            v-else-if="props.column.field === 'checkbox'"
            class="text-center"
          >
            <b-form-checkbox v-model="selectedArticles" :value="props.row.id">
            </b-form-checkbox>
          </div>

          <div
            v-else-if="props.column.field === 'is_featured'"
            class="text-center"
          >
            <div
              v-if="props.row.is_featured === true"
              class="feature-icon-admin icon-table-admin"
            >
              <feature-icon @click="toggleFeaturedArticle(props.row.id, 0)" />
            </div>
            <div
              v-if="props.row.is_featured === false"
              class="un-feature-icon-admin icon-table-admin"
            >
              <un-feature-icon
                @click="toggleFeaturedArticle(props.row.id, 1)"
              />
            </div>
          </div>

          <div v-else-if="props.column.field === 'is_show'" class="text-center">
            <div
              v-if="props.row.is_show === true"
              class="publish-icon-admin icon-table-admin"
            >
              <publish-icon @click="toggleStatusArticle(props.row.id, 0)" />
            </div>
            <div
              v-if="props.row.is_show === false"
              class="un-publish-icon-admin icon-table-admin"
            >
              <un-publish-icon @click="toggleStatusArticle(props.row.id, 1)" />
            </div>
          </div>

          <div v-else-if="props.column.field === 'title'">
            <div class="title-article">
              {{ props.row.translations.vi.title }}
            </div>
            <div class="alias-article">
              <span class="alias-article-name">Slug:</span>
              {{ props.row.slug }}
            </div>
            <div class="category-article">
              <span class="category-article-name">Category:</span>
              {{ props.row.categories.name.vi }}
            </div>
          </div>

          <div v-else-if="props.column.field === 'author'" class="text-center">
            {{ props.row.author.name }}
          </div>

          <div
            v-else-if="props.column.field === 'created_at'"
            class="text-center"
          >
            {{ props.row.created_at | dayTimeDisplay }}
          </div>

          <div v-else-if="props.column.field === 'id'" class="text-center">
            {{ props.row.id }}
          </div>
        </template>
        <div v-if="!isCallApi" slot="emptystate" class="text-center">
          <i class="fa-regular fa-face-sad-tear"></i>
          {{ $t('error.data.empty') }}
        </div>
      </vue-good-table>

      <div class="table-bottom">
        <div class="total-item">
          <span class="total-name">{{ `${$t('table.total')}:` }}</span>
          {{ ` ${rows | formatNumber} ${$t('table.article')}` }}
        </div>
        <div class="pagination-admin">
          <b-pagination
            v-if="rows > perPage"
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            class="m-0 pagination-table"
            first-number
            last-number
          ></b-pagination>
        </div>
      </div>
    </div>
    <action-confirmation
      :id-action="idActionConfirm"
      :list-id-articles="selectedArticles"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON, SCREEN_PATH, ACTIONS_ARTICLE } from '~/utils/constants'
import ActionConfirmation from '~/components/admin/content/articleManagement/ActionConfirmation'

export default {
  name: 'ArticleManagement',
  components: {
    addIcon: ICON.add,
    ArrowBottomAdminIcon: ICON.arrowBottomAdmin,
    ThreeDotsLineIcon: ICON.threeDotsLine,
    PublishIcon: ICON.publish,
    UnPublishIcon: ICON.unPublish,
    FeatureIcon: ICON.feature,
    UnFeatureIcon: ICON.unFeature,
    TrashIcon: ICON.trash,
    searchAdminIcon: ICON.searchAdmin,
    ActionConfirmation,
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      ACTIONS_ARTICLE,
      keywords: null,
      selectedSort: 0,
      isShowFilterDetail: false,
      idActionConfirm: null,
      selectedArticles: [],
      columns: [
        {
          label: 'no',
          field: 'no',
          width: '50px',
        },
        {
          label: 'checkbox',
          field: 'checkbox',
          width: '50px',
        },
        {
          label: 'featured',
          field: 'is_featured',
          width: '100px',
        },
        {
          label: 'status',
          field: 'is_show',
          width: '120px',
        },
        {
          label: 'title',
          field: 'title',
        },
        {
          label: 'author',
          field: 'author',
        },
        {
          label: 'created_at',
          field: 'created_at',
        },

        {
          label: 'id',
          field: 'id',
          width: '50px',
        },
      ],

      featureOptions: [
        { value: null, text: '-- Please select Featured --', disabled: true },
      ],
      categoryOptions: [
        { value: null, text: '-- Please select Category --', disabled: true },
      ],
      publishOptions: [
        { value: null, text: '-- Please select Publish --', disabled: true },
      ],
      authorOptions: [
        { value: null, text: '-- Please select Author --', disabled: true },
      ],

      selectedFeature: null,
      selectedCategory: null,
      selectedPublish: null,
      selectedAuthor: null,

      perPage: 10,
      rows: null,
      currentPage: 1,
      articlesData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('admin/article/article/getList')
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t('admin.page.articleManagement')}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.admin.article.article.isCallApi,
      articles: (state) => state.admin.article.article.articles,
    }),
    isAnyCheckboxSelected() {
      return this.selectedArticles.length > 0
    },
  },
  watch: {
    articles: {
      handler(data) {
        if (data.result.length > 0) {
          this.articlesData = data.result
          this.rows = data.total
          this.currentPage = data.current_page
        } else {
          this.tagsData = []
          this.rows = null
          this.currentPage = 1
        }
      },
    },
    currentPage: {
      async handler() {
        await this.getArticleList()
      },
    },
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('update-article-action-done', () => {
        this.selectedArticles = []
      })
    })
  },
  methods: {
    calcOrderNumber(orgNumber) {
      let number = orgNumber + 1
      if (this.currentPage > 1) {
        number = number + this.perPage * this.currentPage - this.perPage
      }

      return number
    },
    formatNumber(value) {
      return this.$options.filters.formatNumber(value)
    },
    dayTimeDisplay(date) {
      return this.$options.filters.dayTimeDisplay(date)
    },
    async getArticleList() {
      await this.$store.dispatch('admin/article/article/getList', {
        page: this.currentPage,
        keyword: this.keywords,
      })
    },
    async search() {
      this.currentPage = 1
      await this.getTagList()
    },
    showFilterDetail() {
      this.isShowFilterDetail = true
    },
    hideFilterDetail() {
      this.isShowFilterDetail = false
    },
    toggleFeaturedArticle(articleId, feature) {
      const payload = {
        is_featured: feature,
      }
      this.$store.dispatch('admin/article/article/updateArticleManagement', {
        id: Number(articleId),
        payload,
      })
    },
    toggleStatusArticle(articleId, status) {
      const payload = {
        is_show: status,
      }
      this.$store.dispatch('admin/article/article/updateArticleManagement', {
        id: Number(articleId),
        payload,
      })
    },
    handleActionClick(action) {
      this.idActionConfirm = action.id
      this.$bvModal.show('article-action-confirmation')
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
</style>
