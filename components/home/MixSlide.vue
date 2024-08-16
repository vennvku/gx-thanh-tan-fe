<template>
  <div class="mix-slide">
    <div
      class="wrapper-slider"
      @mouseenter="pauseAutoSlide"
      @mouseleave="startAutoSlide"
    >
      <div class="slider">
        <div class="list-image-slider">
          <div
            v-for="(slideNew, index) in slideNews"
            :key="index"
            class="item-slider"
            :class="{ active: index === activeIndex }"
          >
            <div class="content-item-slider">
              <NuxtLink
                :to="`tin-tuc/${slideNew.categories.url}/${slideNew.slug}`"
              >
                <b-img :src="slideNew.photo" :alt="`Slide ${index + 1}`">
                </b-img>
              </NuxtLink>

              <div class="wrapper-text-slider">
                <h4 class="text-slide">
                  <NuxtLink
                    :to="`tin-tuc/${slideNew.categories.url}/${slideNew.slug}`"
                  >
                    {{ slideNew.translations[$i18n.locale].title }}
                  </NuxtLink>
                </h4>
                <ul class="dots">
                  <li
                    v-for="(dot, indexdot) in slideNews"
                    :key="indexdot"
                    :class="{ active: indexdot === activeIndex }"
                    @click="setSlide(indexdot)"
                  ></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="news-bottom-slide">
      <ul>
        <li v-for="(listNew, index) in listNews" :key="index">
          <NuxtLink :to="`tin-tuc/${listNew.categories.url}/${listNew.slug}`">
            {{ listNew.translations[$i18n.locale].title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MixSlide',
  props: {
    slideNews: {
      type: Array,
      default: () => [],
    },
    listNews: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      activeIndex: 0,
      interval: null,
    }
  },
  mounted() {
    this.startAutoSlide()
    window.addEventListener('resize', this.reloadSlider)
  },
  beforeDestroy() {
    clearInterval(this.interval)
    window.removeEventListener('resize', this.reloadSlider)
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.slideNews.length
    },
    prevSlide() {
      this.activeIndex =
        this.activeIndex - 1 < 0
          ? this.slideNews.length - 1
          : this.activeIndex - 1
    },
    setSlide(index) {
      this.activeIndex = index
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000)
    },
    pauseAutoSlide() {
      clearInterval(this.interval)
    },
    reloadSlider() {
      // Reload logic if needed
    },
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/home/mix-slide';
</style>
