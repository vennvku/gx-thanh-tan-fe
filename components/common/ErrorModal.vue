<template>
  <div class="auth__modal">
    <b-modal id="error-modal" hide-header centered footer-class="border-top-0">
      <template #default="">
        <span v-if="error" class="modal__sentence">{{
          $t(`error.serverError.${error}`)
        }}</span>
      </template>
      <template #modal-footer="{ cancel }">
        <b-button
          block
          class="error-btn btn-confirm m-auto"
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
  name: 'ErrorModal',
  data() {
    return {
      error: null,
    }
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$bus.$on('server-error', (params) => {
        self.error = params.error
        self.$bvModal.show('error-modal')
      })
    })
  },
}
</script>
