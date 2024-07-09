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
              <NuxtLink :to="`${slideNew.categories.url}/${slideNew.slug}`">
                <b-img :src="slideNew.photo" :alt="`Slide ${index + 1}`">
                </b-img>
              </NuxtLink>

              <div class="wrapper-text-slider">
                <h4 class="text-slide">
                  <NuxtLink :to="`${slideNew.categories.url}/${slideNew.slug}`">
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
          <NuxtLink :to="`${listNew.categories.url}/${listNew.slug}`">
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
      // slideNews: [
      //   {
      //     src: require('@/assets/img/1.jpg'),
      //     title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
      //   },
      //   {
      //     src: require('@/assets/img/2.jpg'),
      //     title:
      //       'Thiếu Nhi Thánh Thể Hạt thành phố Huế mừng lễ Mình Máu Thánh Chúa Kitô năm 2024',
      //   },
      //   {
      //     src: require('@/assets/img/3.jpg'),
      //     title:
      //       'TNTT Hiệp Đoàn Hải Vân Mừng Lễ Mình và Máu Thánh Chúa Kitô – Bổn mạng phong trào Thiếu Nhi Thánh Thể năm 2024',
      //   },
      //   {
      //     src: require('@/assets/img/4.jpg'),
      //     title: 'Thánh Lễ Ban Bí tích Thêm Sức tại Giáo sở Nước Ngọt năm 2024',
      //   },
      //   {
      //     src: require('@/assets/img/5.jpg'),
      //     title:
      //       'Caritas Huế – Nối kết tình thân gia đình trẻ em OVC trong ngày sinh hoạt 02.6.2024',
      //   },
      // ],
      // listNews: [
      //   {
      //     title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
      //   },
      //   {
      //     title:
      //       'Thiếu Nhi Thánh Thể Hạt thành phố Huế mừng lễ Mình Máu Thánh Chúa Kitô năm 2024',
      //   },
      //   {
      //     title:
      //       'TNTT Hiệp Đoàn Hải Vân Mừng Lễ Mình và Máu Thánh Chúa Kitô – Bổn mạng phong trào Thiếu Nhi Thánh Thể năm 2024',
      //   },
      // ],
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
