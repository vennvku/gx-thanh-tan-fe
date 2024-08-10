<template>
  <div class="list-article">
    <ul>
      <li
        v-for="(listArticle, indexListArticle) in listArticles"
        :key="indexListArticle"
        class="item-article"
      >
        <div class="thumb-art-article">
          <NuxtLink to="">
            <b-img :src="listArticle.src"></b-img>
          </NuxtLink>
        </div>
        <div class="title-article">
          <h4>
            <NuxtLink to="">
              {{ listArticle.title }}
            </NuxtLink>
          </h4>

          <p class="des-article">
            {{ listArticle.des }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TempletListNewsPage',
  data() {
    return {
      listArticles: [
        {
          src: require('@/assets/img/1.jpg'),
          title: 'Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B',
          des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
        },
        {
          src: require('@/assets/img/2.jpg'),
          title:
            'Thiếu Nhi Thánh Thể Hạt thành phố Huế mừng lễ Mình Máu Thánh Chúa Kitô năm 2024',
          des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
        },
        {
          src: require('@/assets/img/3.jpg'),
          title:
            'TNTT Hiệp Đoàn Hải Vân Mừng Lễ Mình và Máu Thánh Chúa Kitô – Bổn mạng phong trào Thiếu Nhi Thánh Thể năm 2024',
          des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
        },
        {
          src: require('@/assets/img/4.jpg'),
          title: 'Thánh Lễ Ban Bí tích Thêm Sức tại Giáo sở Nước Ngọt năm 2024',
          des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
        },
        {
          src: require('@/assets/img/5.jpg'),
          title:
            'Caritas Huế – Nối kết tình thân gia đình trẻ em OVC trong ngày sinh hoạt 02.6.2024',
          des: 'Khi ấy, khi chiều đến, Đức Giê-su nói với các môn đệ: “Chúng ta sang bờ bên kia đi!” Bỏ đám đông ở lại, các ông chở Người đi, vì Người đang ở sẵn trên thuyền ; có những thuyền khác cùng theo Người.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/templet/templet-list-article-page';
</style>
