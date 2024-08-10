<template>
  <div class="box-category">
    <div class="wrapper-caption-box-category">
      <h4 class="caption-box-category">Tin Giáo Phận</h4>
    </div>

    <div class="content-box-category">
      <div class="left-box-category">
        <div class="content-left-box-category">
          <div class="thumb-art-box-category">
            <NuxtLink to="">
              <b-img :src="featuredArticle.src"></b-img>
            </NuxtLink>
          </div>
          <div class="title-box-category">
            <h4>
              <NuxtLink to="">
                {{ featuredArticle.title }}
              </NuxtLink>
            </h4>

            <p class="des-box-category">
              {{ featuredArticle.des }}
            </p>
          </div>
        </div>
      </div>

      <div class="right-box-category">
        <div class="list-box-category">
          <ul>
            <li
              v-for="(listArticle, indexListArticle) in listArticles"
              :key="indexListArticle"
              class="item-box-category"
            >
              <div class="title-list-box-category">
                <h4>
                  <NuxtLink to="">
                    {{ listArticle.title }}
                  </NuxtLink>
                </h4>
              </div>
              <div class="thumb-art-list-box-category">
                <NuxtLink to="">
                  <b-img :src="listArticle.src"></b-img>
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
  name: 'TempletBoxCategory',
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
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet/templet-box-category';
</style>
