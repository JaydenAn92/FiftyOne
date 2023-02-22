<template>
  <h3></h3>
  <div class="swiper-container--talk">
    <swiper
      :slidesPerView= '1'
      :centeredSlides= 'true'
      :loop= 'true'
      :loopedSlides='2'
      :pagination="{
        type: 'bullets',
      }"
      :breakpoints="{ 690:{ slidesPerView: '1' }, 1000:{ slidesPerView: '1' } }"
      :modules='modules'
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class='talk-swiper'
    >
      <swiper-slide v-for="element in cultureData" :key="{ element }">
        <div class="slide-container">
          <p class="slide-text">{{ element.desc }}</p>
          <span class="slide-tit">{{ element.name }}</span>
          <span class="slide-subtit">{{ element.team }}</span>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import { Pagination } from 'swiper'
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
    const onSwiper = (swiper) => {
      console.log(swiper)
      console.log(swiper.activeIndex)
      console.log(swiper.previousIndex)
      const target = document.querySelector('.swiper-container--talk .swiper-wrapper').lastElementChild
      console.log(target)
      target.classList.add('swiper-slide--last')
    }
    const onSlideChange = () => {
      const target = document.querySelector('.swiper-container--talk .swiper-wrapper').lastElementChild
      console.log(target)
      console.log('change')
    }
    return {
      onSwiper,
      onSlideChange,
      modules: [Pagination]
    }
  }
}
</script>

<style>
.swiper-container--talk {
  position: relative;
  width:100%;
  z-index: 3;
  background-color:#fff;
  overflow: hidden;
}
.swiper-container--talk .swiper {
  padding:7vw 0 6vw;
  overflow: visible;
}
.swiper-container--talk .swiper-slide {
  opacity: .3;
}
.swiper-container--talk .swiper-slide.swiper-slide-active {
  opacity: 1;
}
.swiper-container--talk .swiper-slide.swiper-slide--last {
  position: absolute;
  left:-33.3%;
  top:0;
}
.swiper-container--talk .slide-container {
  text-align: center;
  padding: 15px;
}
.swiper-container--talk .slide-container .slide-text {
  padding: 50px 50px 50px 100px;
  border-radius: 10px;
  margin-bottom: 40px;
  transition: background-color 0.2s ease;
  -webkit-transition: background-color 0.2s ease;
  quotes: "\201C""\201D";
  position: relative;
  color: #000;
  font-size: 14px;
  line-height: 1.8;
  text-align: left;
}
.swiper-container--talk .slide-container .slide-text:before {
  font-family: sans-serif;
  content: open-quote;
  position: absolute;
  left: 29px;
  top: 50px;
  opacity: 0.4;
  color: rgba(0,0,0,0.27);
  font-size: 130px;
  line-height: 115px;
}
.swiper-container--talk .slide-container .slide-text:after {
  position: absolute;
  width: 28px;
  height: 28px;
  display: block;
  content:"";
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
.swiper-container--talk .slide-container .slide-tit {
  display: block;
  color:#000;
  font-size: 16px;
  font-family: Roboto;
  font-weight: 700!important;
  line-height: 22px;
  text-transform: capitalize;
  letter-spacing: 0;
}
.swiper-container--talk .slide-container .slide-subtit {
  display: block;
  color: rgba(0,0,0,.5);
  font-family: Roboto;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  text-transform: capitalize;
  letter-spacing: 0;
}
.swiper-container--talk .swiper-slide.swiper-slide-active .slide-container .slide-text {
  color: #fff;
  background-color: #6d6d6d;
}
.swiper-container--talk .swiper-slide.swiper-slide-active .slide-container .slide-text:after {
  background-color: #6d6d6d;
}
.swiper-container--talk .swiper-pagination {
  position: absolute;
  left:0%;
  bottom:60px;
  padding: 0;
  margin:0 auto;
  width:100%;
  text-align: center;
  line-height: 1;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet {
  position: relative;
  margin: 0 5px;
  width: 30px;
  height: 30px;
  background-color: transparent;
  opacity: .25;
  border-radius: 0;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet::before {
  display:block;
  content:"";
  clear:both;
  position: absolute;
  top: 13px;
  left: 0;
  width:100%;
  height:4px;
  background-color: #6d6d6d;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  opacity: 1;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active:before {
  background-color: #333;
}
/* @media screen and (min-width: 620px) {

} */
/* @media only screen and (min-width:1600px){
  body .full-width-content .testimonial_slider[data-style="multiple_visible_minimal"].has-alf blockquote{width:29%}
}
*/
@media only screen and (min-width:1300px){
  .swiper-container--talk .swiper {margin:0 auto;width:33% !important;}
}
@media only screen and (min-width:1000px) and (max-width:1300px){
  .swiper-container--talk .swiper {margin:0 auto;width:50% !important;}
}
@media only screen and (min-width:690px) and (max-width:1000px){
  .swiper-container--talk .swiper {margin:0 auto;width:60% !important;}
}
@media only screen and (max-width:690px){
  .swiper-container--talk .swiper {margin:0 auto;width:85% !important;}
  .swiper-container--talk .slide-container .slide-text:before {
    display: none;
  }
  .swiper-container--talk .swiper-pagination {
    bottom: 0;
  }
  .swiper-container--talk .slide-container .slide-text {
    padding:30px;
  }
  .swiper-container--talk .swiper-pagination .swiper-pagination-bullet {
    width:12px;
  }
  .swiper-container--talk .swiper-pagination .swiper-pagination-bullet::before {
    height:2px;
  }
}
</style>
