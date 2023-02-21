<template>
  <div class="swiper-container">
    <h2 class="title">Our Services</h2>
    <swiper
      :pagination="{
        type: 'fraction'
      }"
      :slidesPerView="1"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <div class="swiper-text">
          <p class="sub-title">
            Web Service뿐만 아니라 Mobile도 아우르는 강력한 Cross Business 구축
            경험 및 기술 보유
          </p>
          <p class="contents">
            Web과 Mobile의 경계가 허물어지고 있는 Digital Marketing Trend를
            분석하고, 이를 선도하기 위해 꾸준한 Mobile 기술 투자(HTML5&UX)를
            이행하여 관련 Technology 및 Skill을 보유
          </p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="swiper-text">
          <p class="sub-title">
            다양한 산업/고객의 인터넷 및 모바일 서비스 구축 및 운영
          </p>
          <p class="contents">
            협업에 최적화된 내부 업무 Process를 바탕으로 기획, 디자인, 개발, QM
            등 통합(integrated) 서비스를 제공
          </p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="swiper-text">
          <p class="sub-title">
            Adobe Marketing Cloud Solution에 대한 공식 Partner로서 다양한 경험
            및 업계 선도
          </p>
          <p class="contents">
            Adobe Marketing Cloud Solution의 공식 Partner사로 다수의 Global
            Project 수행 및 구축 경험을 통해 Digital Marketing 분야 업계 선도
          </p>
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="swiper-text">
          <p class="sub-title">
            다년간의 전문성을 보유한 인적자원과 효율적 Service 개발 및 Know-how
            보유
          </p>
          <p class="contents">
            성공적 프로젝트 수행을 위해 적합 기술을 가진 Division/ Team을
            엄선하고, 전문 인력 선별 투입으로 높은 고객만족도 제공
          </p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Navigation } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination, Navigation]
    }
  }
}
</script>

<style>
.title {
  margin-block: 20px;
  font-weight: 700;
  font-size: 56px;
  line-height: 59px;
}
.swiper {
  width: 70%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  line-height: 40px;
  font-weight: 400;
}
.swiper-text {
  width: 70%;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.sub-title {
  font-weight: bold;
  padding-bottom: 10px;
}
.contents {
  color: #333;
  line-height: 1.6;
  font-size: 14px;
}
</style>
