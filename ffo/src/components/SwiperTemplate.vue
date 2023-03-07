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
              {{ slide.desc }}
            </p>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import ServiceData from '@/assets/data/about.json'
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
    return {
      modules: [Pagination, Navigation]
    }
  },
  data() {
    return {
      services: ServiceData.ourServices
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/swiper';
</style>
