<template>
  <div class="wrapper-login-admin">
    <div class="login-admin">
      <div class="form-container sign-in">
        <div class="wrapper-form-sign-in">
          <div class="title-sign-in">SIGN IN</div>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <b-form autocomplete="off" @submit.stop.prevent="onSubmit()">
              <b-form-group>
                <validation-provider
                  v-slot="validationContext"
                  name="email"
                  rules="required|email|max:255"
                >
                  <div class="form-input">
                    <i class="fa-solid fa-envelope form-icon"></i>
                    <b-form-input
                      id="email"
                      v-model.trim="email"
                      type="email"
                      name="email"
                      autocomplete="off"
                      :state="getValidationState(validationContext)"
                      class="auth-form"
                      :class="{ 'is-empty': regex.isEmpty(email) }"
                      placeholder=""
                      @keydown.space.prevent
                    />
                    <div class="clearfix"></div>
                    <label class="form-label" for="email"> Email </label>
                    <div class="animated--border"></div>
                  </div>
                  <div
                    class="error"
                    :class="{ 'error-effect': validationContext.errors[0] }"
                  >
                    {{ validationContext.errors[0] }}
                  </div>
                </validation-provider>
              </b-form-group>
              <b-form-group>
                <validation-provider
                  v-slot="validationContext"
                  name="password"
                  rules="required|passwordRegex|max:16"
                >
                  <div class="form-input">
                    <i class="fa-solid fa-key form-icon"></i>
                    <b-form-input
                      id="password"
                      v-model="password"
                      :type="showPassword ? 'text' : 'password'"
                      name="new-password"
                      autocomplete="off"
                      :state="getValidationState(validationContext)"
                      class="auth-form"
                      :class="{ 'is-empty': regex.isEmpty(password) }"
                      placeholder=""
                      @keydown.space.prevent
                    />
                    <div class="clearfix"></div>
                    <label class="form-label" for="password"> Password </label>
                    <div class="animated--border"></div>
                  </div>
                  <div
                    class="error"
                    :class="{ 'error-effect': validationContext.errors[0] }"
                  >
                    {{ validationContext.errors[0] }}
                  </div>
                </validation-provider>
              </b-form-group>
              <b-form-checkbox
                id="show-password"
                v-model="showPassword"
                name="show-password"
                :value="true"
                :unchecked-value="false"
              >
                Hiển thị mật khẩu
              </b-form-checkbox>
              <b-button
                type="submit"
                block
                class="primary-btn btn-login"
                variant="primary"
                :disabled="invalid || isCallApi"
              >
                <b-spinner v-if="isCallApi" small />
                <span v-if="!isCallApi">Đăng nhập</span>
              </b-button>
            </b-form>
          </validation-observer>
        </div>
      </div>

      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of admin features</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { IMAGE, ICON, regex } from '~/utils/constants'

export default {
  name: 'SignIn',
  layout: 'default-admin',
  data() {
    return {
      IMAGE,
      ICON,
      regex,
      email: null,
      password: null,
      showPassword: false,
    }
  },
  head() {
    return {
      title: `${this.$t('title')} | ${this.$t('admin.page.signIn')}`,
    }
  },
  computed: {
    ...mapState({
      isCallApi: (state) => state.auth.auth.isCallApi,
    }),
  },
  methods: {
    getValidationState({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    onSubmit() {
      this.$store.dispatch('auth/auth/login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/admin/auth';
</style>
