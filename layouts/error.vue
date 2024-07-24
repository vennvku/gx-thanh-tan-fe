<template>
  <div class="position-absolute error-page d-flex align-items-center">
    <div class="text-center error-alert">
      <h1
        v-if="error.statusCode === errorCode.PAGE_NOT_FOUND"
        class="error-alert--text"
      >
        {{ $t('error.pageErrors.pageNotFound') }}
      </h1>
      <h1 v-else>
        {{ $t('error.pageErrors.otherError') }}
      </h1>

      <b-button @click="goHome">Back to Home</b-button>
    </div>
  </div>
</template>

<script>
import { errorCode, IMAGE } from '~/utils/constants'
export default {
  name: 'ErrorLayout',
  layout: 'default-admin',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      errorCode,
      IMAGE,
    }
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/animation';
@import 'assets/scss/variables';

@mixin width() {
  width: 200px;

  @media screen and (max-width: 1500px) {
    width: 170px;
  }
  @media screen and (max-width: 1300px) {
    width: 150px;
  }
  @media screen and (max-width: 1200px) {
    width: 120px;
  }
  @media screen and (max-width: 992px) {
    width: 100px;
  }
  @media screen and (max-width: 768px) {
    width: 80px;
  }
  @media screen and (max-width: 576px) {
    width: 50px;
  }
}

.error-page {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .error-logo {
    margin-right: 20px;
    @media screen and (max-width: 992px) {
      margin-right: 10px;
    }

    .cct-wallet-logo {
      @include width;
      animation: jump 0.8s linear alternate infinite;
    }

    .shadow {
      @include width;
      border-radius: 50%;
      aspect-ratio: 3;
      background: black;
      opacity: 0.5;
      -webkit-filter: blur(10px);
      -webkit-transform: scale(1, 0.2);
    }
  }

  .error-alert {
    margin-left: 20px;

    @media screen and (max-width: 768px) {
      margin-left: 10px;
    }

    .error-alert--text {
      font-size: 40px;
      @media screen and (max-width: 1500px) {
        font-size: 34px;
      }
      @media screen and (max-width: 1300px) {
        font-size: 30px;
      }
      @media screen and (max-width: 1200px) {
        font-size: 25px;
      }
      @media screen and (max-width: 992px) {
        font-size: 20px;
      }
      @media screen and (max-width: 768px) {
        font-size: 18px;
      }
      @media screen and (max-width: 576px) {
        font-size: 16px;
      }
      @media screen and (max-width: 420px) {
        font-size: 14px;
      }
    }
  }
}

.light-mode {
  .error-alert {
    color: $secondary-color;
  }
}

.dark-mode {
  .error-alert {
    color: #dce3fa;
  }
}
</style>
