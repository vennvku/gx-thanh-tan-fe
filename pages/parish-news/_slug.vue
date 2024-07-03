<template>
  <div class="cont-view">
    <div class="chain-navs">
      <ul>
        <li>
          <NuxtLink :to="SCREEN_PATH.TOP">
            <span>{{ $t('menu.home') }}</span>
          </NuxtLink>
        </li>
        <li class="double-right-icon">
          <b-img :src="ICON.doubleRight"></b-img>
        </li>
        <li>{{ $t('menu.news.heading') }}</li>
        <li class="double-right-icon">
          <b-img :src="ICON.doubleRight"></b-img>
        </li>
        <li class="active">
          <NuxtLink to="/">
            <span>{{ $t('menu.news.subMenus.parishNews') }}</span>
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="lead-title">
      Trò chơi ô chữ – Chúa nhật X Thường niên 2024 – Năm B
    </div>

    <div class="date">Thứ 6, 28-06-2024</div>

    <div class="content-detail-page">
      <p>Tin Mừng (Mc 3,20-35)</p>
      <p>Xa-tan đã tận số.</p>
      <p>✠Tin Mừng Chúa Giê-su Ki-tô theo thánh Mác-cô.</p>
      <p>
        20 Khi ấy, Đức Giê-su và các môn đệ trở về nhà, và đám đông lại kéo đến,
        nên Người và các môn đệ không sao ăn uống được. 21 Thân nhân của Người
        hay tin ấy, liền đi bắt Người, vì họ nói rằng Người đã mất trí.
      </p>
      <p>
        22 Còn các kinh sư từ Giê-ru-sa-lem xuống thì lại nói rằng Người bị quỷ
        vương Bê-en-dê-bun ám, và Người dựa thế quỷ vương mà trừ quỷ. 23 Đức
        Giê-su liền gọi họ đến, dùng dụ ngôn mà nói với họ: “Xa-tan làm sao trừ
        Xa-tan được? 24 Nước nào tự chia rẽ, nước ấy không thể bền; 25 nhà nào
        tự chia rẽ, nhà ấy không thể vững. 26 Vậy Xa-tan mà chống Xa-tan, Xa-tan
        mà tự chia rẽ, thì không thể tồn tại, nhưng đã tận số. 27 Không ai có
        thể vào nhà kẻ mạnh mà cướp của được, nếu không trói kẻ mạnh ấy trước
        đã, rồi mới cướp sạch nhà nó.
      </p>
      <p>
        28 “Tôi bảo thật các ông: mọi tội lỗi và lời phạm thượng, dù nói phạm
        thượng nhiều đến mấy đi nữa, thì cũng sẽ được tha cho con cái loài
        người. 29 Nhưng ai nói phạm đến Thánh Thần, thì chẳng đời nào được tha,
        mà còn mắc tội muôn đời.” 30 Đó là vì họ đã nói: “Ông ấy bị thần ô uế
        ám.”
      </p>
      <p>
        31 Mẹ và anh em Đức Giê-su đến, đứng ở ngoài, cho gọi Người ra. 32 Lúc
        ấy, đám đông đang ngồi chung quanh Người. Có kẻ nói với Người rằng:
        “Thưa Thầy, có mẹ và anh em chị em Thầy ở ngoài kia đang tìm Thầy!” 33
        Nhưng Người đáp lại: “Ai là mẹ tôi? Ai là anh em tôi?” 34 Rồi Người rảo
        mắt nhìn những kẻ ngồi chung quanh và nói: “Đây là mẹ tôi, đây là anh em
        tôi. 35 Ai thi hành ý muốn của Thiên Chúa, người ấy là anh em chị em
        tôi, là mẹ tôi.”
      </p>
    </div>
  </div>
</template>

<script>
import { SCREEN_PATH, ICON } from '~/utils/constants'

export default {
  name: 'DetailArticle',
  data() {
    return {
      SCREEN_PATH,
      ICON,
    }
  },
}
</script>

<style lang="scss" scoped>
@import 'assets/scss/pages/detail-page';
</style>
