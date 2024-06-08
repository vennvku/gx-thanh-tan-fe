<template>
  <div class="auth__modal">
    <b-modal
      id="success-modal"
      hide-header
      centered
      footer-class="border-top-0"
    >
      <template #default="">
        <span v-if="success" class="modal__sentence">{{
          $t(`success.serverSuccess.${success}`)
        }}</span>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button
          block
          class="danger-btn btn-confirm m-auto"
          variant="primary"
          @click="cancel()"
        >
          <span>{{ $t('button.ok') }}</span>
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'SuccessModal',
  data() {
    return {
      success: null,
    }
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('server-success', (params) => {
        self.success = params.success
        self.$bvModal.show('success-modal')
      })
    })
  },
}
</script>
