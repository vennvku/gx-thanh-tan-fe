<template>
  <div class="page-layout">
    <div class="row">
      <div class="col-content pad-320">
        <div class="main-content">
          <div class="wrapper-top-article">
            <div class="top-article">
              <div class="thumb-art-top-article">
                <NuxtLink to="">
                  <b-img :src="featuredArticle.src"></b-img>
                </NuxtLink>
              </div>
              <div class="title-top-article">
                <h4>
                  <NuxtLink to="">
                    {{ featuredArticle.title }}
                  </NuxtLink>
                </h4>

                <p class="des-top-article">
                  {{ featuredArticle.des }}
                </p>
              </div>
            </div>
          </div>
          <div class="wrapper-bottom-article">
            <div
              v-for="(listArticle, indexListArticle) in listArticles"
              :key="indexListArticle"
              class="column-bottom-article"
            >
              <div class="thumb-art-bottom-article">
                <NuxtLink to="">
                  <b-img :src="listArticle.src"></b-img>
                </NuxtLink>
              </div>
              <h4 class="title-bottom-article">
                <NuxtLink to="">
                  {{ listArticle.title }}
                </NuxtLink>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="col-content fit-320">
        <div class="side-content">
          <h3 class="top-latest-news">Mới nhất</h3>
          <ul class="list-latest-news">
            <li
              v-for="(latestArticle, indexLatestArticle) in latestArticles"
              :key="indexLatestArticle"
              class="item-latest-news"
            >
              <h5 class="title-latest-news">
                <NuxtLink to="">
                  {{ latestArticle.title }}
                </NuxtLink>
              </h5>
              <div class="thumb-art-latest-news">
                <NuxtLink to="">
                  <b-img :src="latestArticle.src"></b-img>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TempletSectionTopPage',
  data() {
    return {
      featuredArticle: {
        src: require('@/assets/img/1.jpg'),
        title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
        des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
      },
      listArticles: [
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
      ],
      latestArticles: [
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
@import 'assets/scss/pages/templet/templet-section-top-page';
</style>
