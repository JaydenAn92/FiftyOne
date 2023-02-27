<template>
  <div class="our-service white-section">
    <div class="swiper-image__container">
      <div class="swiper-image" data-parallax-speed="fast"></div>
    </div>
    <div class="swiper-container">
      <h2 class="swiper__title">Our Services</h2>
      <swiper
        :pagination="{
          type: 'fraction'
        }"
        :effect="'fade'"
        :slidesPerView="1"
        :loop="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="slide in services" :key="slide.id">
          <div class="swiper-text">
            <p class="swiper-text--sub-title">"{{ slide.title }}"</p>
            <p class="swiper-text--contents">
              {{ slide.content }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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
  },
  data() {
    return {
      services: [
        {
          id: 0,
          title:
            'Web Service뿐만 아니라 Mobile도 아우르는 강력한 Cross Business 구축 경험 및 기술 보유',
          content:
            'Web과 Mobile의 경계가 허물어지고 있는 Digital Marketing Trend를 분석하고, 이를 선도하기 위해 꾸준한 Mobile 기술 투자(HTML5&UX)를 이행하여 관련 Technology 및 Skill을 보유'
        },
        {
          id: 1,
          title: '다양한 산업/고객의 인터넷 및 모바일 서비스 구축 및 운영',
          content:
            '협업에 최적화된 내부 업무 Process를 바탕으로 기획, 디자인, 개발, QM 등 통합(integrated) 서비스를 제공'
        },
        {
          id: 2,
          title:
            'Adobe Marketing Cloud Solution에 대한 공식 Partner로서 다양한 경험 및 업계 선도',
          content:
            'Adobe Marketing Cloud Solution의 공식 Partner사로 다수의 Global Project 수행 및 구축 경험을 통해 Digital Marketing 분야 업계 선도'
        },
        {
          id: 3,
          title:
            '다년간의 전문성을 보유한 인적자원과 효율적 Service 개발 및 Know-how 보유',
          content:
            '성공적 프로젝트 수행을 위해 적합 기술을 가진 Division/ Team을 엄선하고, 전문 인력 선별 투입으로 높은 고객만족도 제공'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/swiper';
</style>
