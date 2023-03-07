<template>
  <div class="talk-slide white-section">
    <swiper
      :slidesPerView="auto"
      :initialSlide="0"
      :centeredSlides="true"
      :loop="true"
      :freeMode="true"
      :loopedSlides="2"
      :pagination="{
        type: 'bullets',
        clickable: true
      }"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false
      }"
      :modules="modules"
      class="talk-slide__warpper"
    >
      <swiper-slide v-for="element in cultureData" :key="element">
        <div class="talk-slide__text-box">
          <p class="talk-slide__text-box__desc" v-html="element.desc"></p>
          <span class="talk-slide__text-box__name" v-if="element.name">{{
            element.name
          }}</span>
          <span class="talk-slide__text-box__title" v-if="element.title">{{
            element.title
          }}</span>
          <span class="talk-slide__text-box__sub-title" v-if="element.team">{{
            element.team
          }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/swiper.css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    cultureData: Array
  },
  setup() {
    return {
      modules: [Pagination, Autoplay]
    }
  }
}
</script>

<style lang="scss">
.talk-slide {
  position: relative;
  width: 100%;
  z-index: 3;
  background-color: #fff;
  overflow: hidden;
  .swiper {
    padding: 7vw 33.3vw 6vw;
    @media only screen and (min-width: 1300px) {
      padding: 7vw 33.3vw 6vw;
    }
    @media only screen and (min-width: 1000px) and (max-width: 1300px) {
      padding: 7vw 25vw 6vw;
    }
    @media only screen and (min-width: 690px) and (max-width: 1000px) {
      padding: 7vw 20vw 6vw;
    }
    @media only screen and (max-width: 690px) {
      padding: 7vw 7.5vw 6vw;
    }
    &-slide {
      opacity: 0.3;
      &.swiper-slide-active {
        opacity: 1;
        .talk-slide__text-box {
          .talk-slide__text-box__desc {
            color: #fff;
            background-color: #6d6d6d;
          }
          .talk-slide__text-box__desc:after {
            background-color: #6d6d6d;
          }
        }
      }
    }
    &-pagination {
      position: absolute;
      left: 0%;
      bottom: 2.6vw;
      padding: 0;
      margin: 0 auto;
      width: 100%;
      text-align: center;
      line-height: 1;
      @media only screen and (max-width: 690px) {
        bottom: 0;
      }
    }
    &-pagination-bullet {
      position: relative;
      margin: 0 5px;
      width: 30px;
      height: 30px;
      background-color: transparent;
      opacity: 0.25;
      border-radius: 0;
      @media only screen and (max-width: 690px) {
        width: 12px;
      }
      &::before {
        display: block;
        content: '';
        clear: both;
        position: absolute;
        top: 13px;
        left: 0;
        width: 100%;
        height: 4px;
        background-color: #6d6d6d;
        @media only screen and (max-width: 690px) {
          height: 2px;
        }
      }
      &.swiper-pagination-bullet-active {
        opacity: 1;
      }
      &.swiper-pagination-bullet-active:before {
        background-color: #6d6d6d;
      }
    }
  }
  &--init .swiper-slide:last-child {
    position: absolute;
    left: -99.9%;
    top: 0;
    @media only screen and (min-width: 1300px) {
      position: absolute;
      left: -99.9%;
      top: 0;
    }
    @media only screen and (max-width: 690px) {
      position: relative;
      left: initial;
      top: initial;
    }
  }
  .talk-slide__text-box {
    text-align: center;
    padding: 15px;
    &__desc {
      padding: 50px 50px 50px 100px;
      border-radius: 10px;
      margin-bottom: 40px;
      transition: background-color 0.2s ease;
      -webkit-transition: background-color 0.2s ease;
      quotes: '\201C''\201D';
      position: relative;
      color: #000;
      font-size: 14px;
      font-family: Chakra Petch;
      line-height: 1.8;
      text-align: left;
      @media only screen and (max-width: 690px) {
        padding: 30px;
      }
    }
    &__desc:before {
      font-family: sans-serif;
      content: open-quote;
      position: absolute;
      left: 29px;
      top: 50px;
      opacity: 0.4;
      color: rgba(0, 0, 0, 0.27);
      font-size: 130px;
      line-height: 115px;
      @media only screen and (max-width: 690px) {
        display: none;
      }
    }
    &__desc:after {
      position: absolute;
      width: 28px;
      height: 28px;
      display: block;
      content: '';
      border-radius: 5px;
      overflow: hidden;
      transform: rotate(-135deg);
      -ms-transform: rotate(-135deg);
      -webkit-transform: rotate(-135deg);
      top: 100%;
      left: 50%;
      margin-left: -20px;
      margin-top: -19px;
      transition: all 0.2s ease;
      -webkit-transition: all 0.2s ease;
    }
    &__name,
    &__title {
      display: block;
      color: #000;
      font-size: 16px;
      font-family: Roboto;
      font-weight: 700 !important;
      line-height: 22px;
      text-transform: capitalize;
      letter-spacing: 0;
    }
    &__sub-title {
      display: block;
      color: rgba(0, 0, 0, 0.5);
      font-family: Roboto;
      font-weight: 700;
      font-size: 14px;
      line-height: 22px;
      text-transform: capitalize;
      letter-spacing: 0;
    }
  }
}
</style>
