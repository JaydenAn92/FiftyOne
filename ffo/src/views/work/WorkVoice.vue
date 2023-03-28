<template>
  <FullPageTop
    :title="data.title"
    :subTitle="data.subTitle"
    :bgImg="data.bgImg"
    sizeType="large"
  />
  <div class="work work-voice">
    <div class="work-info white-section">
      <div class="work-info__container">
        <div class="work-info__wrap">
          <ul class="work-info__list">
            <li>
              <h5>Client</h5>
              <div class="work_info__content">
                <p v-for="client in data.client" :key="{ client }">
                  {{ client }}
                </p>
              </div>
            </li>
          </ul>
          <ul class="work-info__list">
            <li>
              <h5>Open</h5>
              <div class="work_info__content">
                <p v-for="open in data.open" :key="{ open }">{{ open }}</p>
              </div>
            </li>
          </ul>
        </div>
        <ul class="work-info__list work-info__list--role">
          <li>
            <h5 v-if="data.role">Role</h5>
            <h5 v-if="data.service">Service</h5>
            <div class="work_info__content" v-if="data.role">
              <p v-for="role in data.role" :key="{ role }">{{ role }}</p>
            </div>
            <div class="work_info__content" v-if="data.service">
              <p v-for="service in data.service" :key="{ service }">
                {{ service }}
              </p>
            </div>
          </li>
        </ul>
        <div class="work-info__text">
          <div class="work-info__text__header">
            <h3 v-html="data.infoTitle" />
            <p class="work-info__text__subTitle" v-if="data.infoSubTitle">
              {{ data.infoSubTitle }}
            </p>
          </div>
          <p v-html="data.infoContent" />
        </div>
      </div>
    </div>
    <div class="work-contents">
      <img
        src="http://www.the-51.com/wp-content/uploads/2022/05/img-min-2.png"
      />
    </div>
    <div class="voice4_play">
      <video
        muted
        loop
        autoplay
        poster="http://www.the-51.com/wp-content/uploads/2022/05/mainPoster.jpg"
        id="mainPlay0"
      >
        <source
          src="http://www.the-51.com/wp-content/uploads/2022/05/voc_logo.mp4"
          type="video/mp4"
        />
      </video>
    </div>
    <!--배너 + 영상 -->
    <section class="banner_wrap">
      <p class="banner_tit"><strong>Part 01</strong>Situation Board</p>
      <!--영상 플레이-->
      <div class="selected_play">
        <video
          muted
          id="selectedVideo0"
          poster="http://www.the-51.com/wp-content/uploads/2022/05/13.jpg"
        >
          <source
            src="http://www.the-51.com/wp-content/uploads/2022/05/1_01.mp4"
          />
        </video>
      </div>
      <!--//영상 플레이-->
      <!-- Swiper -->
      <div class="voc_wrap">
        <div class="swiper mySwiper voc_paly_list" id="voc_paly_list0">
          <Swiper
            class="swiper-wrapper"
            :slidesPerView="4"
            :spaceBetween="0"
            :loop="true"
            :loopSlides="1"
            :observer="true"
            :observeParents="true"
            :slideToClickedSlide="true"
            :allowSlidePrev="false"
          >
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_01.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/0.jpg"
                alt=""
              />
              <div class="txt">Scene01 : Code zero situation</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_02.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-3.jpg"
                alt=""
              />
              <div class="txt">Scene02 : CCTV</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_03.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/2.jpg"
                alt=""
              />
              <div class="txt">Scene03 : Multitasking</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_04.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-4.jpg"
                alt=""
              />
              <div class="txt">Scene04 : Pop-up</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_01.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/0.jpg"
                alt=""
              />
              <div class="txt">Scene01 : Code zero situation</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_02.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-3.jpg"
                alt=""
              />
              <div class="txt">Scene02 : CCTV</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1-03.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/2.jpg"
                alt=""
              />
              <div class="txt">Scene03 : Multitasking</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/1_04.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-4.jpg"
                alt=""
              />
              <div class="txt">Scene04 : Pop-up</div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
      <!-- Swiper -->
    </section>
    <!--//배너 + 영상 -->
    <div class="work-contents">
      <img src="http://www.the-51.com/wp-content/uploads/2022/05/con_02.jpg" />
    </div>
    <div class="work-contents">
      <img
        src="http://www.the-51.com/wp-content/uploads/2022/05/con_03-1.png"
      />
    </div>
    <div class="work-contents">
      <img
        src="http://www.the-51.com/wp-content/uploads/2022/05/con_04-2.png"
      />
    </div>
    <div class="work-contents">
      <img src="http://www.the-51.com/wp-content/uploads/2022/05/21.png" />
    </div>
    <!--교차 영역-->
    <section class="voc4_list">
      <ul class="media_list" id="crossPlayList0">
        <li class="play rt70">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/poster0.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/code.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">CODE ZERO Situation</div>
          </div>
        </li>
        <li class="play ct63">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/poster1.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/tracking-1.mp4"
              />
            </video>
            <div class="txt">Location Tracking</div>
          </div>
        </li>
        <li class="play lt63">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/poster2.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/A_crime_1.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt ty02">Crime Matrix</div>
          </div>
        </li>
        <li class="play ctl40">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/poster3.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/weather.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">Weather Information</div>
          </div>
        </li>
        <li class="play ctr40">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/poster4.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/weather2-1.mp4"
              />
            </video>
            <div class="txt">Real time Air Quality Information</div>
          </div>
        </li>
      </ul>
    </section>
    <!--//교차 영역-->
    <!--배너 + 영상 -->
    <section class="banner_wrap">
      <p class="banner_tit"><strong>Part 02</strong>Police Intranet</p>
      <!--영상 플레이-->
      <div class="selected_play">
        <video
          muted
          id="selectedVideo1"
          poster="http://www.the-51.com/wp-content/uploads/2022/05/마스크-그룹-13.jpg"
          type="video/mp4"
        >
          <source
            src="http://www.the-51.com/wp-content/uploads/2022/05/2_01.mp4"
          />
        </video>
      </div>
      <!--//영상 플레이-->
      <!-- Swiper -->
      <div class="voc_wrap">
        <div class="swiper mySwiper voc_paly_list" id="voc_paly_list1">
          <Swiper
            class="swiper-wrapper"
            :slidesPerView="4"
            :spaceBetween="0"
            :loop="true"
            :loopSlides="1"
            :observer="true"
            :observeParents="true"
            :slideToClickedSlide="true"
            :allowSlidePrev="false"
          >
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_01.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-8.jpg"
                alt=""
              />
              <div class="txt">Scene01 : Location Tracking</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_02.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-5.jpg"
                alt=""
              />
              <div class="txt">Scene02 : Text Message</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_03.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-6.jpg"
                alt=""
              />
              <div class="txt">Scene03 : Send Image</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_04.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-7.jpg"
                alt=""
              />
              <div class="txt">Scene04 : Car Number Check</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_01.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-8.jpg"
                alt=""
              />
              <div class="txt">Scene01 : Location Tracking</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_02.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-5.jpg"
                alt=""
              />
              <div class="txt">Scene02 : Text Message</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_03.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-6.jpg"
                alt=""
              />
              <div class="txt">Scene03 : Send Image</div>
            </swiper-slide>
            <swiper-slide
              class="swiper-slide"
              data-play="http://www.the-51.com/wp-content/uploads/2022/05/2_04.mp4"
            >
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/img-7.jpg"
                alt=""
              />
              <div class="txt">Scene04 : Car Number Check</div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
      <!-- Swiper -->
    </section>
    <!--//배너 + 영상 -->
    <div class="work-contents">
      <img
        src="http://www.the-51.com/wp-content/uploads/2022/05/con_02-1.jpg"
      />
    </div>
    <div class="work-contents">
      <img src="http://www.the-51.com/wp-content/uploads/2022/05/con_03.png" />
    </div>
    <div class="work-contents">
      <img src="http://www.the-51.com/wp-content/uploads/2022/05/con_04.png" />
    </div>
    <!--교차 영역-->
    <section class="voc4_list ty02">
      <ul class="media_list">
        <li class="play vl">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po0.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross01.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">Incoming Call</div>
          </div>
        </li>
        <li class="play vr">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po1.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross02.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">Police Unified Search</div>
          </div>
        </li>
        <li class="play vl ty_02">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po2.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross03.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">Background Check</div>
          </div>
          <div class="img">
            <div class="in">
              <img
                src="http://www.the-51.com/wp-content/uploads/2022/05/04_img.jpg"
                alt=""
              />
            </div>
          </div>
        </li>
        <li class="play ct63">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po3.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross04.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">GPS Location Tracking</div>
          </div>
        </li>
        <li class="play vl50">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po5.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross05.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt ty02">Base Station Tracking</div>
          </div>
        </li>
        <li class="play vr50">
          <div class="video_wrap">
            <video
              muted
              poster="http://www.the-51.com/wp-content/uploads/2022/05/po6.jpg"
            >
              <source
                src="http://www.the-51.com/wp-content/uploads/2022/05/cross06.mp4"
                type="video/mp4"
              />
            </video>
            <div class="txt">Location Tracking Failure</div>
          </div>
        </li>
      </ul>
    </section>
    <div class="voice4_play">
      <video
        muted
        autoplay
        loop
        poster="http://www.the-51.com/wp-content/uploads/2022/05/mainPoster.jpg"
        id="mainPlay1"
        type="video/mp4"
      >
        <source
          src="http://www.the-51.com/wp-content/uploads/2022/05/voc_logo.mp4"
        />
      </video>
    </div>
    <!--//교차 영역-->
    <div class="work-contents">
      <img src="http://www.the-51.com/wp-content/uploads/2022/05/img-2.png" />
    </div>
    <div v-if="data.partnership" class="work-partnership">
      <div class="work-partnership__container">
        <div class="work-partnership-title__container">
          <h2>Partnership</h2>
        </div>
        <ul class="work-partnership__list">
          <li v-for="partnership in data.partnership" :key="{ partnership }">
            <div class="work-partnership__icon">
              <img :src="partnership.url" />
            </div>
            <div class="work-partnership-text__container">
              <h5 v-html="partnership.title" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="data.result" class="work-result">
      <div class="work-result__container">
        <h2>Result</h2>
        <p v-html="data.result" />
      </div>
    </div>
  </div>
  <PaginationTemplate
    :prevText="projectPrev ? 'Previous Project' : ''"
    :nextText="projectNext ? 'Next Project' : ''"
    prevPathName="work-template"
    nextPathName="work-template"
    :projectPrevId="projectPrev.id ? projectPrev.id : ''"
    :projectNextId="projectNext.id ? projectNext.id : ''"
    :projectPrevImg="projectPrev ? projectPrev.thumbnail : ''"
    :projectNextImg="projectNext ? projectNext.thumbnail : ''"
    :projectPrevTitle="projectPrev ? projectPrev.title : ''"
    :projectNextTitle="projectNext ? projectNext.title : ''"
    arrow="true"
  />
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/swiper.css'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  name: 'WorkVoice',
  components: {
    FullPageTop,
    Swiper,
    SwiperSlide,
    PaginationTemplate
  },
  props: {
    data: [Object, Function],
    projectPrev: [Object, Function],
    projectNext: [Object, Function]
  },
  methods: {
    animation(el) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    },
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const partnership = document.querySelector('.work-partnership')
      if (documentTop >= partnership.offsetTop + 300) {
        partnership
          .querySelector('.work-partnership-title__container')
          .classList.add('active')
        const partnershipEls = partnership.querySelectorAll(
          '.work-partnership__list li'
        )
        for (let i = 0; i < partnershipEls.length; i += 1) {
          setTimeout(() => {
            this.animation(
              partnershipEls[i].querySelector('.work-partnership__icon img')
            )
            setTimeout(() => {
              this.animation(
                partnershipEls[i].querySelector(
                  '.work-partnership-text__container h5'
                )
              )
            }, 100)
          }, 500 + i * 100)
        }
      }

      if (document.querySelector('.work-voice')) {
        for (let v = 0; v < document.querySelectorAll('video').length; v++) {
          document.querySelectorAll('video')[v].onclick = playPause
        }
        for (
          let sp = 0;
          sp < document.querySelectorAll('.selected_play').length;
          sp++
        ) {
          document.querySelectorAll('.selected_play')[sp].onclick =
            elemPlayPause
        }
        for (
          let vw = 0;
          vw < document.querySelectorAll('.video_wrap').length;
          vw++
        ) {
          if (vw !== 7) {
            document.querySelectorAll('.video_wrap')[vw].onclick = elemPlayPause
          }
        }
      }

      function playPause() {
        if (document.querySelector('.work-voice')) {
          const target = this.children[0]

          if (this.paused) {
            const playThisPromise = this.play()
            if (playThisPromise !== undefined) {
              playThisPromise.then((_) => {
                target.play()
              })
            }
          } else {
            this.pause()
          }
        }
      }

      function elemPlayPause() {
        if (document.querySelector('.work-voice')) {
          const target = this.children[0]
          if (target.paused) {
            const playThisPromise = target.play()
            if (playThisPromise !== undefined) {
              playThisPromise.then((_) => {
                target.play()
              })
            }
          } else {
            target.pause()
          }
        }
      }

      const crossAreaList = {}
      for (
        let ce = 0;
        ce < document.querySelectorAll('.video_wrap').length;
        ce++
      ) {
        crossAreaList['firstPlay' + ce] = {
          startTop:
            document.querySelectorAll('.video_wrap')[ce].getBoundingClientRect()
              .top + window.pageYOffset,
          played: false
        }
      }
      const swiperList = {}
      for (
        let sb = 0;
        sb < document.querySelectorAll('.selected_play').length;
        sb++
      ) {
        const el = document.querySelectorAll('.selected_play')
        const top = el[sb].getBoundingClientRect().top
        swiperList['bannerPlay' + sb] = {
          startTop: top + window.pageYOffset,
          played: false
        }
      }

      if (document.querySelector('.work-voice')) {
        window.onscroll = scrollCk
      }
      function scrollCk() {
        const scTop = document.querySelector('html').scrollTop

        Object.values(crossAreaList).forEach(function (ele, i) {
          if (
            scTop > ele.startTop - window.outerHeight * 0.6 - 120 &&
            ele.played === false &&
            document.querySelector('.work-voice')
          ) {
            document.querySelectorAll('.video_wrap')[i].classList.add('active')
            document.querySelectorAll('.video_wrap')[i].children[0].play()
            if (i === 7) {
              crossPlay(i)
            }
            ele.played = true
          }
        })

        Object.values(swiperList).forEach(function (ele, i) {
          if (
            scTop > ele.startTop - window.outerHeight * 0.45 &&
            ele.played === false &&
            document.querySelector('.work-voice')
          ) {
            const playSwapPromise = document
              .getElementById('selectedVideo' + i)
              .play()
            if (playSwapPromise !== undefined) {
              playSwapPromise.then((_) => {})
            }
            ele.played = true
          }
        })
      }
      function crossPlay(idx) {
        if (document.querySelector('.work-voice')) {
          if (idx) {
            const elem = document.querySelectorAll('.video_wrap')[idx]
            const target = elem.children[0]
            const playCrossPromise = target.play()
            if (playCrossPromise !== undefined) {
              playCrossPromise.then((_) => {
                target.play()
              })
            }
            setTimeout(function () {
              playingCheck(idx)
            }, 100)
          } else {
            document.querySelector('.media_list .in').classList.add('active')
          }
        }
      }

      let playCk
      function playingCheck(idx) {
        if (document.querySelector('.work-voice')) {
          const elem = document.querySelectorAll('.video_wrap')[idx].children[0]
          playCk = setTimeout(function mp4Play() {
            playCk = setTimeout(mp4Play, 100)
            if (elem.paused) {
              crossPlay()
              pausePlayCheck(elem)
            }
          }, 100)
        }
      }

      function pausePlayCheck(elem) {
        clearTimeout(playCk)
        elem.play()
      }

      const playBanners = document.querySelectorAll(
        '.voc_paly_list .swiper-slide'
      )
      if (document.querySelector('.work-voice')) {
        for (let pb = 0; pb < playBanners.length; pb++) {
          playBanners[pb].addEventListener('click', selectedPlay)
        }
      }

      function selectedPlay(e) {
        if (document.querySelector('.work-voice')) {
          const playSrc = this.dataset.play
          const target =
            this.closest('.voc_wrap').previousElementSibling.querySelector(
              'video'
            )
          target.pause()
          target.src = playSrc
          target.play()
        }
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.data.thumbnailText) {
        document.title = `${this.data.thumbnailText} - The 51 - digital marketing agency`
      }
    }, 1)
    if (document.querySelector('.work-voice')) {
      document.addEventListener('scroll', this.scrollEvents)
    }
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
@import '@/assets/scss/components/work';
.work {
  &.work-voice {
    background-color: black;
    .work-info {
      background-color: white;
    }
    .work-contents {
      img {
        transform: none;
        opacity: 1;
      }
    }
  }
}
ul {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
.swiperBundle {
  display: none;
}
.voice4_play {
  height: 0;
  overflow: hidden;
  position: relative;
  padding-top: 21%;
  video {
    width: auto;
    height: 100%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    visibility: visible !important;
  }
  img {
    width: 100%;
  }
}

.voc4_list {
  background: linear-gradient(#141414, #000);
  &.ty02 {
    background: linear-gradient(#000, #020202);
  }
  &:nth-of-type(2) .media_list {
    padding-top: 9%;
  }
  .media_list {
    padding: 5% 0 9% 0;
    overflow: hidden;
    video {
      width: 100%;
      visibility: visible !important;
    }
  }
}
.play {
  overflow: visible;
  margin-top: 10%;
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  &:first-of-type {
    margin-top: 0;
  }
  .video_wrap {
    width: 40%;
    position: relative;
    &.active {
      video {
        display: block;
        visibility: visible !important;
        margin: 0;
        padding: 0;
      }
      video,
      .txt {
        opacity: 1;
        transform: translate(0);
      }
      .txt {
        margin-top: 0.5vw;
      }
    }
  }
  video,
  .txt {
    transition: transform 0.5s linear, opacity 0.5s linear;
    transform: translateY(350px);
    opacity: 0;
  }

  &.rt70 {
    justify-content: flex-end;
    .video_wrap {
      width: 70%;
      &:after {
        content: '';
        position: absolute;
        width: 20%;
        height: calc(70vw * 0.48);
        right: 0;
        top: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0), #000);
      }
    }
  }
  &.ct63 .video_wrap {
    width: 63%;
  }
  &.lt63 {
    justify-content: flex-start;
    .video_wrap {
      width: 63%;
      &.active:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: linear-gradient(to right, #000 0, rgba(0, 0, 0, 0) 16%);
      }
    }
  }
  &.ctl40 .video_wrap {
    width: 40%;
    transform: translate(-40%, 0);
  }
  &.ctr40 {
    position: relative;
    margin-top: 0;
    overflow: visible;
    padding-top: 17%;
    .video_wrap {
      position: absolute;
      width: 40%;
      height: auto;
      top: 0;
      right: 0;
      margin-top: -25%;
      z-index: 5;
      transform: translate(-40%, 0%);
      video {
        box-shadow: -30px -30px 100px 50px rgb(0 0 0 / 80%);
      }
    }
  }
  &.vl {
    justify-content: flex-start;
    &.ty_02 {
      margin-top: 10%;
      padding: 0 9.5%;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      align-content: center;
      .video_wrap {
        width: 52.2% !important;
        margin-left: 0 !important;
        margin-top: 1.3vw;
      }
    }
    .video_wrap {
      margin-left: 8.5%;
    }
  }
  &.vr {
    margin-top: 0;
    justify-content: flex-end;
    padding-top: 16%;
    .video_wrap {
      width: 48%;
      position: absolute;
      top: 0;
      z-index: 5;
      transform: translate(0, -60%);
      &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: calc(48vw * 0.77);
        left: 0;
        top: 0;
        background: linear-gradient(to right, rgba(0, 0, 0, 0) 65%, #000 100%);
      }
    }
  }
  &.vl50 {
    justify-content: flex-start;
    .video_wrap {
      width: 48%;
      &.active:after {
        content: '';
        position: absolute;
        width: 100%;
        height: calc(48vw * 0.559);
        left: 0;
        top: 0;
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0) 16%
        );
      }
    }
  }
  &.vr50 .video_wrap {
    width: 48%;
  }
  &.vr50 {
    padding-top: 22%;
    margin-top: 0;
  }
  &.vr50 .video_wrap {
    width: 48%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 5;
    transform: translate(0, -50%);
    &.active:after {
      content: '';
      position: absolute;
      width: 100%;
      height: calc(48vw * 0.578);
      left: 0;
      top: 0;
      background: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, #000);
    }
  }
}

.media_list {
  .img {
    width: 41%;
    margin-top: 0;
    position: relative;
  }
  .in {
    opacity: 0;
    height: auto;
    transform: rotateX(-90deg);
    transform-origin: center;
    transition: all 0.5s linear;
    position: relative;
    bottom: 0;
    z-index: 5;
    margin-right: 10%;
    &.active {
      opacity: 1;
      transform-style: preserve-3d;
      transform: rotateX(0deg);
      margin-right: 0;
      overflow: hidden;
    }
    img {
      border-top-left-radius: 0.45vw;
      border-top-right-radius: 0.45vw;
      width: 100% !important;
    }
    .txt {
      font-size: 0.8vw;
      line-height: 1.5;
      color: #999;
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
      margin-top: -9px;
      &.ty02 {
        text-align: right;
      }
    }
  }
}
.banner {
  &_wrap {
    position: relative;
    margin-bottom: 9%;
    padding-bottom: 13%;
  }
  &_tit {
    text-align: center;
    font-size: 1.9vw;
    color: #656565 !important;
    font-family: Chakra Petch;
    margin: 0;
    padding: 9% 0 10% 0;
    line-height: 1.2;
    strong {
      color: #eaeaea !important;
      margin-right: 0.8vw;
    }
  }
}

.selected_play {
  width: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  video {
    width: 100%;
    position: relative;
    visibility: visible !important;
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      to bottom,
      #000 0%,
      rgba(0, 0, 0, 0.3) 24%,
      rgba(0, 0, 0, 0.4) 40%,
      #000 85%
    );
  }
}
.voc_wrap {
  width: 87%;
  overflow: hidden;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  transform: translateY(61vw);
  img {
    width: 100%;
  }
  .txt {
    color: #fff;
    font-size: 1vw;
    line-height: 2.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
.voc_paly_list {
  position: relative;
  display: flex;
  flex-flow: row nowrap;
  .swiper-slide {
    position: relative;
    width: calc((90vw - 90px) * 0.25);
    cursor: pointer;
    list-style: none;
    overflow: hidden;
    display: block;
    margin-right: 30px;
    &:last-of-type {
      margin-right: 0px;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.4);
      z-index: 1;
      top: 0;
      left: 0;
      transition: background-color 0.3s linear;
    }
    &.swiper-slide-active:after {
      content: '';
      background-color: rgba(0, 0, 0, 0);
    }
    img {
      width: 100% !important;
    }
    @media (max-width: 670px) {
      width: calc((90vw - 45px) * 0.25);
      margin-right: 15px;
    }
  }
}
</style>
