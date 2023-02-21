<template>
  <h3></h3>
  <div class="swiper-container--talk">
    <swiper
      :slidesPerView="3"
      :slidesPerGroup= "1"
      :centeredSlides="true"
      :loop ="true"
      :loopedSlides="2"
      :pagination="{
        type: 'bullets'
      }"
      :modules="modules"
      class="talk-swiper"
    >
      <swiper-slide v-for="element in data" :key="{ element }">
        <div class="slide-container">
          <p class="slide-text">{{ element.text }}</p>
          <span class="slide-tit">{{ element.title }}</span>
          <span class="slide-subtit">{{ element.subtitle }}</span>
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
  },
  data() {
    return {
      isTrue: true,
      data: [
        {
          id: 0,
          text: '이번 워크샵에 와 있는 모두는 누군가의 상사이면서 부하입니다. 즐거움 속에서도 스스로에게 이런 자문을 하게 되었는데요. 이번 워크샵으로 한번에 좋은 관리자가 될 수는 없겠지만, 모르고 있었던 관리자의 스킬에 대해서 배울 수 있는 기회였습니다. 다가올 하반기에도 더피프티원 화이팅:) ',
          title: '김홍진',
          subtitle: 'Creative Center, Chief'
        },
        {
          id: 1,
          text: '이번 워크샵에 와 있는 모두는 누군가의 상사이면서 부하입니다. 즐거움 속에서도 스스로에게 이런 자문을 하게 되었는데요. 이번 워크샵으로 한번에 좋은 관리자가 될 수는 없겠지만, 모르고 있었던 관리자의 스킬에 대해서 배울 수 있는 기회였습니다. <br/>다가올 하반기에도 더피프티원 화이팅:) ',
          title: '이동원',
          subtitle: 'Creative Center, Chief'
        },
        {
          id: 2,
          text: '평소에 오래 뵙기 힘든 분들이 모여 여러가지 이야기를 들을 수 있어 유익한 시간이었습니다. 조직의 구성원으로서 회사와 함께 성장하는 인재가 되어야 겠다는 다짐을 하며 다녀온 워크샵이었습니다. ',
          title: '오샘',
          subtitle: 'UI Publish'
        },
        {
          id: 3,
          text: 'Salient is by far the most astonishing WP theme out there! I literally could not be happier that I chose to buy your theme! Your regular updates and superb attention to detail blows me away every time I visit my new site! ',
          title: 'Zak Reid',
          subtitle: 'Instructor, Skate Nao'
        }
      ]
    }
  }
}
</script>

<style>
.swiper-container--talk {
  position: relative;
  z-index: 3;
  background-color:#fff;
}
.swiper-container--talk .swiper {
  padding:7vw 0 6vw;
}
.swiper-container--talk .swiper-slide {
  opacity: .3;
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
.swiper-container--talk .swiper-slide.swiper-slide-active {
  opacity: 1;
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
  bottom:0px;
  padding: 0;
  margin:0 auto;
  width:100%;
  text-align: center;
  line-height: 1;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet {
  margin: 0 5px;
  width: 30px;
  height: 4px;
  background-color: #6d6d6d;
  opacity: .25;
  border-radius: 0;
}
.swiper-container--talk .swiper-pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
  background-color: #333;
  opacity: 1;
}
</style>
