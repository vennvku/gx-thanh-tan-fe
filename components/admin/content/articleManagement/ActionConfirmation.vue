<template>
  <div class="setting__modal">
    <b-modal
      id="article-action-confirmation"
      hide-header
      centered
      no-close-on-backdrop
      footer-class="border-top-0"
    >
      <template #default="">
        <div
          class="modal-close__button"
          @click="$bvModal.hide('article-action-confirmation')"
        ></div>
        <div class="modal-icon icon-action"><activity-icon /></div>
      </template>
      <template #modal-footer="{ cancel }">
        <div class="modal-wrapper-content-footer">
          <div class="modal-title-content-footer">{{ $t('admin.cofirm') }}</div>
          <div v-if="actionText" class="modal-describe-content-footer">
            {{ actionText }} <b>{{ listIdArticles.length }}</b>
            {{ $t('articleManagement.modal.article') }}
          </div>
          <div class="modal-wrapper-btn-content-footer">
            <b-button class="btn-oke btn-confirm" @click="onSubmit()">
              <span>{{ $t('button.okAction') }}</span>
            </b-button>

            <b-button class="btn-cancel btn-confirm" @click="cancel()">
              <span>{{ $t('button.cancel') }}</span>
            </b-button>
          </div>
        </div>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { ICON } from '~/utils/constants'

export default {
  name: 'CategoryDeleteConfirmation',
  components: {
    ActivityIcon: ICON.activity,
  },
  props: {
    idAction: {
      type: Number,
      default: () => null,
    },
    listIdArticles: {
      type: Array,
      default: () => null,
    },
  },
  computed: {
    actionText() {
      const actionMessages = {
        1: this.$t('articleManagement.modal.publish'),
        2: this.$t('articleManagement.modal.unpublish'),
        3: this.$t('articleManagement.modal.feature'),
        4: this.$t('articleManagement.modal.unFeature'),
        5: this.$t('articleManagement.modal.trash'),
      }
      return actionMessages[this.idAction] || null
    },
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('update-article-action-done', () => {
        this.$bvModal.hide('article-action-confirmation')
      })
    })
  },
  methods: {
    onSubmit() {
      const payload = {
        id_action: this.idAction,
        list_id_articles: this.listIdArticles,
      }
      this.$store.dispatch(
        'admin/article/article/updateArticlesAction',
        payload
      )
    },
  },
}
</script>
