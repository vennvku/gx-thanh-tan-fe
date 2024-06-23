<template>
  <div class="main-head">
    <div class="row">
      <div class="col-content pad-320">
        <div class="row">
          <div class="col-content w50 w50-head">
            <mix-slide />
          </div>
          <div class="col-content w50 w50-head">
            <div class="mix-news">
              <div class="mix-news-top">
                <ul>
                  <li v-for="(mainNew, index) in mainNews" :key="index">
                    <div class="wrapper-title">
                      <NuxtLink to="" class="title">
                        {{ mainNew.title }}
                      </NuxtLink>
                      <div v-if="(index == 0) | (index == 1)" class="info">
                        <NuxtLink to=""> {{ mainNew.tag }} </NuxtLink>
                      </div>
                    </div>
                    <div v-if="(index == 0) | (index == 1)" class="thumb">
                      <NuxtLink to="">
                        <b-img :src="mainNew.src"></b-img>
                      </NuxtLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content fit-320">
        <div class="sidebar-right-head">
          <div class="lm-quan-xu">
            <div class="img">
              <NuxtLink to="">
                <b-img :src="require('@/assets/img/lm-quan-xu.jpg')"></b-img>
              </NuxtLink>
            </div>
            <NuxtLink to="lm-quan-xu">
              <h4 class="title">Linh mục Phêrô Nguyễn Văn Phước</h4></NuxtLink
            >
            <h5 class="des">Quản xứ Giáo xứ Thanh Tân</h5>
          </div>

          <div class="wrapper-gio-le">
            <span class="title-gio-le">Giờ Lễ tại Giáo xứ</span>

            <div class="content-gio-le">
              <div class="title-day">
                <span>Thứ 2</span>
                <span class="arrow-right-day">
                  <b-img :src="ICON.rightArrow2"></b-img>
                </span>
                <span>Thứ 7</span>
              </div>
              <div class="gio-le">
                <span class="icon-day"
                  ><b-img :src="ICON.morning"></b-img
                ></span>

                <span class="text-day"
                  ><strong>Sáng:</strong> <i>05h05</i></span
                >
              </div>

              <div class="gio-le">
                <span class="icon-day"><b-img :src="ICON.night"></b-img></span>

                <span class="text-day"
                  ><strong>Chiều:</strong> <i>18h30</i></span
                >
              </div>
            </div>

            <div class="content-gio-le">
              <div class="title-day"><span>Chủ nhật</span></div>
              <div class="gio-le">
                <span class="icon-day"
                  ><b-img :src="ICON.morning"></b-img
                ></span>

                <span class="text-day"
                  ><strong>Sáng:</strong> <i>06h00</i></span
                >
              </div>

              <div class="gio-le">
                <span class="icon-day"><b-img :src="ICON.night"></b-img></span>

                <span class="text-day"
                  ><strong>Chiều:</strong> <i>17h30</i></span
                >
              </div>
            </div>

            <div class="chi-tiet-gio-le">Xem giờ lễ chi tiết: Tại đây</div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-content pad-320"><templet-post-first /></div>
      <div class="col-content fit-320">2</div>
    </div>
  </div>
</template>

<script>
import MixSlide from '~/components/home/MixSlide'
import TempletPostFirst from '~/components/home/TempletPostFirst'
import { ICON } from '~/utils/constants'

export default {
  name: 'DefaultPage',
  components: {
    MixSlide,
    TempletPostFirst,
  },
  data() {
    return {
      ICON,
      mainNews: [
        {
          src: require('@/assets/img/1.jpg'),
          title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
          tag: 'Tin Giáo Phận',
        },
        {
          src: require('@/assets/img/2.jpg'),
          title:
            'Thiếu Nhi Thánh Thể Hạt thành phố Huế mừng lễ Mình Máu Thánh Chúa Kitô năm 2024',
          tag: 'Tin Giáo Phận',
        },
        {
          src: require('@/assets/img/3.jpg'),
          title:
            'TNTT Hiệp Đoàn Hải Vân Mừng Lễ Mình và Máu Thánh Chúa Kitô – Bổn mạng phong trào Thiếu Nhi Thánh Thể năm 2024',
          tag: 'Tin Giáo Phận',
        },
        {
          src: require('@/assets/img/4.jpg'),
          title: 'Thánh Lễ Ban Bí tích Thêm Sức tại Giáo sở Nước Ngọt năm 2024',
          tag: 'Tin Giáo Phận',
        },
        {
          src: require('@/assets/img/5.jpg'),
          title:
            'Caritas Huế – Nối kết tình thân gia đình trẻ em OVC trong ngày sinh hoạt 02.6.2024',
          tag: 'Tin Giáo Phận',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/main/home';
</style>
