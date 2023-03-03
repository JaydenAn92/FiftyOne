<template>
  <div class="full-page">
    <div
      :class="type ? 'full-page-wrap full-page-wrap__scroll' : 'full-page-wrap'"
    >
      <div class="full-page-video" v-if="bgVideo">
        <div class="full-page-video-overlay"></div>
        <video preload="auto" loop="" autoplay="" muted="" playsinline="">
          <source type="video/mp4" :src="bgVideo" />
        </video>
      </div>
      <div
        v-else
        class="full-page-image"
        :style="{ backgroundImage: `url(${bgImg})` }"
      ></div>
      <div class="full-page-text">
        <h1 :class="sizeType" v-html="title" />
        <p>{{ subTitle }}</p>
      </div>

      <div class="scroll-bottom">
        <a @click.prevent="scrollDown" class="section-down-arrow">
          <svg
            class="nectar-scroll-icon"
            viewBox="0 0 30 45"
            enable-background="new 0 0 30 45"
          >
            <path
              class="nectar-scroll-icon-path"
              fill="none"
              stroke="#ffffff"
              stroke-width="2"
              stroke-miterlimit="10"
              d="M15,1.118c12.352,0,13.967,12.88,13.967,12.88v18.76  c0,0-1.514,11.204-13.967,11.204S0.931,32.966,0.931,32.966V14.05C0.931,14.05,2.648,1.118,15,1.118z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FullPageTop',
  props: {
    title: String,
    subTitle: String,
    bgImg: String,
    bgVideo: String,
    sizeType: String,
    type: String
  },
  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', this.scrollEvents)
    const fullPageImg = document.querySelector('.full-page-image')
    if (fullPageImg) {
      setTimeout(() => {
        fullPageImg.style.transform = 'scale(1)'
      }, 700)
    }
  },
  methods: {
    scrollDown() {
      const height = document.querySelector('.full-page').clientHeight
      window.scrollTo({ top: height, behavior: 'smooth' })
    },
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const fullPageContent = document.querySelector(
        '.full-page-wrap.full-page-wrap__scroll'
      )
      const text = document.querySelector(
        '.full-page-wrap__scroll .full-page-text'
      )
      if (fullPageContent) {
        text.style.opacity = 1 - documentTop / 600
        if (0 + documentTop / 50 <= 100) {
          fullPageContent.style.transform = `translateY(-${
            0 + documentTop / 50
          }%)`
        }
        if (documentTop / 50 >= 25) {
          fullPageContent.style.opacity = 1 - documentTop / 600
        } else {
          fullPageContent.style.opacity = 1
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/fullPage';
</style>
