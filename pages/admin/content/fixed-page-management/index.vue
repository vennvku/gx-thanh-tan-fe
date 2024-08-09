<template>
  <div class="management">
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
      <vue-good-table
        id="article-management-table"
        :columns="columns"
        :rows="categoriesData"
        :sort-options="{ enabled: false }"
      >
        <template slot="table-column" slot-scope="props">
          <span class="text-center">
            {{ $t('fixedPageManagement.data.header.' + props.column.label) }}
          </span>
        </template>
        <template slot="table-row" slot-scope="props">
          <div v-if="props.column.field === 'no'" class="text-center">
            <b>{{ calcOrderNumber(props.row.originalIndex) }}</b>
          </div>

          <div v-else-if="props.column.field === 'name_category'">
            <div class="title-article">{{ props.row.name[$i18n.locale] }}</div>
          </div>

          <div v-else-if="props.column.field === 'status'" class="text-center">
            <div
              v-if="props.row.status === 1"
              class="publish-icon-admin icon-table-admin"
            >
              <publish-icon />
            </div>
            <div
              v-if="props.row.status === 0"
              class="un-publish-icon-admin icon-table-admin"
            >
              <un-publish-icon />
            </div>
          </div>

          <div v-else-if="props.column.field === 'action'">
            <b-button
              v-if="props.row.page === null"
              class="btn-action btn-create"
              @click.stop="routeCreate(props.row.id)"
            >
              <add-icon />
              <span class="text-btn-action">Create</span></b-button
            >

            <b-button
              v-else
              class="btn-action btn-edit"
              @click.stop="routeEdit(props.row.id)"
            >
              <edit-icon />
              <span class="text-btn-action">Edit</span></b-button
            >
          </div>
        </template>

        <div v-if="!isCallApi" slot="emptystate" class="text-center">
          <i class="fa-regular fa-face-sad-tear"></i>
          {{ $t('error.data.empty') }}
        </div>
      </vue-good-table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { ICON, SCREEN_PATH } from '~/utils/constants'

export default {
  name: 'FixedPageManagement',
  components: {
    searchAdminIcon: ICON.searchAdmin,
    EditIcon: ICON.edit,
    PublishIcon: ICON.publish,
    UnPublishIcon: ICON.unPublish,
    AddIcon: ICON.add,
  },
  layout: 'authenticated',
  middleware: 'auth/auth',
  data() {
    return {
      ICON,
      SCREEN_PATH,
      keywords: null,
      columns: [
        {
          label: 'no',
          field: 'no',
          width: '50px',
        },
        {
          label: 'name_category',
          field: 'name_category',
        },
        {
          label: 'status',
          field: 'status',
          width: '200px',
        },
        {
          label: 'action',
          field: 'action',
          width: '200px',
        },
      ],
      categoriesData: [],
    }
  },
  async fetch() {
    await this.$store.dispatch('admin/category/category/getFixedPage')
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t(
        'admin.page.fixedPageManagement'
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
        } else {
          this.categoriesData = []
        }
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

    routeCreate(id) {
      return this.$router.push({
        name: SCREEN_PATH.ADMIN.CONTENT.FIXED_PAGE_MANAGEMENT.CREATE,
        query: { id },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/management';
</style>
