<template>
  <div class="management">
    <div class="top-management">
      <button class="btn-news">
        <add-icon class="icon-news" />
        <span class="title-news">{{ $t('button.new') }}</span>
      </button>

      <b-dropdown class="dropdown-action">
        <template #button-content>
          <div class="wrapper-content-action">
            <three-dots-line-icon class="icon-content-action" />
            <span class="title-content-action">{{ $t('select.action') }}</span>
            <arrow-bottom-admin-icon class="icon-content-action" />
          </div>
        </template>

        <b-dropdown-item-button v-for="(action, key) in actions" :key="key">
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
          <b-form-select v-model="selectedSort" class="select-sort">
            <b-form-select-option value="0">{{
              $t('select.idDescending')
            }}</b-form-select-option>
            <b-form-select-option value="1">{{
              $t('select.idAscending')
            }}</b-form-select-option>
          </b-form-select>
        </div>
      </div>

      <div class="filter-detail">
        <div class="item-filter-detail">
          <b-form-select>
            <b-form-select-option disabled
              >-- Please select Featured --</b-form-select-option
            >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select>
            <b-form-select-option disabled
              >-- Please select Category --</b-form-select-option
            >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select>
            <b-form-select-option disabled
              >-- Please select Publish --</b-form-select-option
            >
          </b-form-select>
        </div>

        <div class="item-filter-detail">
          <b-form-select>
            <b-form-select-option disabled
              >-- Please select Author --</b-form-select-option
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
            <b-form-checkbox :unchecked-value="null" disabled></b-form-checkbox>
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
            <b-form-checkbox :unchecked-value="null"></b-form-checkbox>
          </div>

          <div
            v-else-if="props.column.field === 'is_featured'"
            class="text-center"
          >
            <div
              v-if="props.row.is_featured === true"
              class="feature-icon-admin icon-table-admin"
            >
              <feature-icon />
            </div>
            <div
              v-if="props.row.is_featured === false"
              class="un-feature-icon-admin icon-table-admin"
            >
              <un-feature-icon />
            </div>
          </div>

          <div v-else-if="props.column.field === 'is_show'" class="text-center">
            <div
              v-if="props.row.is_show === true"
              class="publish-icon-admin icon-table-admin"
            >
              <publish-icon />
            </div>
            <div
              v-if="props.row.is_show === false"
              class="un-publish-icon-admin icon-table-admin"
            >
              <un-publish-icon />
            </div>
          </div>

          <div v-else-if="props.column.field === 'title'">
            <div class="title-article">
              {{ props.row.translations.vi.title }}
            </div>
            <div class="alias-article">
              <span class="alias-article-name">Alias:</span>
              {{ props.row.slug }}
            </div>
            <div class="category-article">
              <span class="category-article-name">Category:</span>
              {{ props.row.categories.name.vi }}
            </div>
          </div>

          <div v-else-if="props.column.field === 'created_at'">
            {{ props.row.created_at | dayDisplay }}
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON } from '~/utils/constants'

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
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      keywords: null,
      selectedSort: 0,
      isShowFilterDetail: false,
      actions: [
        { value: 1, text: 'publish', color: '#399918', icon: 'PublishIcon' },
        {
          value: 1,
          text: 'unPublish',
          color: '#ccc',
          icon: 'UnPublishIcon',
        },
        { value: 1, text: 'feature', color: '#FFC700', icon: 'FeatureIcon' },
        {
          value: 1,
          text: 'unFeature',
          color: '#ccc',
          icon: 'UnFeatureIcon',
        },
        { value: 1, text: 'trash', color: '#EE4E4E', icon: 'TrashIcon' },
      ],

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
      title: `${this.$t('title')} | ${this.$t('page.tagManagement')}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.admin.article.article.isCallApi,
      articles: (state) => state.admin.article.article.articles,
    }),
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
    dayDisplay(date) {
      return this.$options.filters.dayDisplay(date)
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
  },
}
</script>
<style lang="scss" scoped>
@import 'assets/scss/admin/management';
</style>
