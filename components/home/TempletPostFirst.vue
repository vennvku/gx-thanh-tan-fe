<template>
  <div class="templet-post-first">
    <div class="wrapper-caption">
      <h4 class="caption">
        <NuxtLink to=""> Tin Giáo xứ </NuxtLink>
      </h4>
    </div>

    <div class="wrapper-content">
      <div class="row">
        <div class="col-content w50">
          <div class="post-first-left">
            <NuxtLink to="">
              <div class="image-left">
                <b-img :src="require('@/assets/img/1.jpg')"></b-img>
              </div>
            </NuxtLink>

            <NuxtLink to="">
              <h4 class="title-left">
                Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B
              </h4>
            </NuxtLink>
          </div>
        </div>
        <div class="col-content w50">
          <div class="post-first-right">
            <div class="post-top">
              <div class="image-right">
                <NuxtLink to="">
                  <b-img :src="require('@/assets/img/1.jpg')"></b-img>
                </NuxtLink>
              </div>
              <NuxtLink to="">
                <h4 class="title-right">
                  Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B
                </h4>
              </NuxtLink>
            </div>
            <div class="post-bottom">
              <ul>
                <li v-for="(item, index) in mixNews" :key="index">
                  <NuxtLink to="" class="title">
                    {{ item.title }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TempletPostFirst',
  data() {
    return {
      mixNews: [
        {
          src: require('@/assets/img/1.jpg'),
          title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
        },
        {
          src: require('@/assets/img/2.jpg'),
          title:
            'Thiếu Nhi Thánh Thể Hạt thành phố Huế mừng lễ Mình Máu Thánh Chúa Kitô năm 2024',
        },
        {
          src: require('@/assets/img/3.jpg'),
          title:
            'TNTT Hiệp Đoàn Hải Vân Mừng Lễ Mình và Máu Thánh Chúa Kitô – Bổn mạng phong trào Thiếu Nhi Thánh Thể năm 2024',
        },
        {
          src: require('@/assets/img/4.jpg'),
          title: 'Thánh Lễ Ban Bí tích Thêm Sức tại Giáo sở Nước Ngọt năm 2024',
        },
        {
          src: require('@/assets/img/5.jpg'),
          title:
            'Caritas Huế – Nối kết tình thân gia đình trẻ em OVC trong ngày sinh hoạt 02.6.2024',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/home/templet-post-first';
</style>
