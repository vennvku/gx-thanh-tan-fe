<template>
  <div class="setting__modal">
    <b-modal
      id="category-delete-confirmation"
      hide-header
      centered
      no-close-on-backdrop
      footer-class="border-top-0"
    >
      <template #default="">
        <div
          class="modal-close__button"
          @click="$bvModal.hide('category-delete-confirmation')"
        ></div>
        <div class="modal-icon-delete"><trash-icon /></div>
      </template>
      <template #modal-footer="{ cancel }">
        <div class="modal-wrapper-content-footer">
          <div class="modal-title-content-footer">{{ $t('admin.cofirm') }}</div>
          <div class="modal-describe-content-footer">
            {{ $t('categoryManagement.modal.delete') }}
          </div>
          <div class="modal-wrapper-btn-content-footer">
            <b-button class="btn-oke btn-confirm" @click="onSubmit()">
              <span>{{ $t('button.ok') }}</span>
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
    TrashIcon: ICON.trash,
  },
  props: {
    id: {
      type: Number,
      default: () => null,
    },
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('delete-category-done', () => {
        this.$bvModal.hide('category-delete-confirmation')
      })
    })
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('admin/category/category/delete', this.id)
    },
  },
}
</script>
