<template>
  <div
    class="wide-banner"
    :style="{
      backgroundImage: ImgBannerData.bgImg ? `url(${ImgBannerData.bgImg})` : ''
    }"
  >
    <div class="wide-banner__container">
      <div class="wide-banner__text-box">
        <div class="wide-banner__title">
          <h2 v-for="el in ImgBannerData.title" :key="el">
            {{ el }}
          </h2>
        </div>
        <p
          class="wide-banner__desc"
          v-if="ImgBannerData.desc"
          v-html="ImgBannerData.desc"
        ></p>
        <router-link
          :to="{ name: 'insight' }"
          v-if="ImgBannerData.button"
          class="wide-banner__button"
        >
          <span>{{ ImgBannerData.button.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'WideImgBanner',
  props: {
    ImgBannerData: Object
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvents)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const targetWarpper = document.querySelector('.wide-banner').offsetTop
      const targetTitle = document.querySelectorAll('.wide-banner__title h2')
      const targetDesc = document.querySelector('.wide-banner__desc')
      const targetBtn = document.querySelector('.wide-banner__button')
      if (documentTop >= targetWarpper / 2 - 300) {
        for (let i = 0; i < targetTitle.length; i += 1) {
          targetTitle[i].style.animationName = 'bannerTextAnimation'
        }
        targetDesc.style.animationName = 'bannerTextAnimation'
        if (targetBtn) {
          targetBtn.style.animationName = 'bannerTextAnimation'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.wide-banner {
  position: relative;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 10;
  &__container {
    display: flex;
    justify-content: space-between;
    padding: calc(100vw * 0.1) 90px;
    width: 100%;
    max-width: 1550px;
    color: #fff;
    color: #fff;
    text-align: left;
    @media only screen and (min-width: 690px) and (max-width: 1000px) {
      padding: calc(100vw * 0.1) 0;
      max-width: 600px;
    }
    @media only screen and (max-width: 690px) {
      padding: calc(100vw * 0.1) 0;
      max-width: 420px;
    }
    @media only screen and (max-width: 480px) {
      padding: calc(100vw * 0.1) 0;
      margin: 0 auto;
      max-width: 300px;
    }
    &:before {
      display: inline-block;
      content: '';
      clear: both;
      width: 50%;
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }
  }
  &__text-box {
    padding-left: 2.1%;
    width: 50%;
    box-sizing: border-box;
    @media only screen and (max-width: 1000px) {
      padding-left: 0;
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 24px;
    font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
    text-transform: capitalize;
    letter-spacing: 0;
    font-size: 56px;
    line-height: 66px;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    h2 {
      opacity: 0;
      transition: all 1s ease;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      &:nth-child(1) {
        animation-delay: 0.5s;
      }
      &:nth-child(2) {
        animation-delay: 0.8s;
      }
    }
    @media only screen and (max-width: 1300px) {
      font-size: 47.6px;
      line-height: 50.15px;
    }
    @media only screen and (max-width: 1000px) {
      font-size: 44.8px;
      line-height: 54.2px;
    }
    @include screen(mobile) {
      font-size: 42px;
      line-height: 51.25px;
    }
  }
  &__desc {
    color: rgba(255, 255, 255, 0.9);
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
    opacity: 0;
    transition: all 1s ease;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }
  &__button {
    display: block;
    margin-top: 50px;
    border-color: rgba(255, 255, 255, 0.75);
    color: rgb(255, 255, 255);
    max-width: 107.14px;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: none;
    text-transform: none !important;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.75);
    opacity: 0;
    transition: all 1s ease;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    span {
      display: block;
      padding: 13px 22px;
      font-size: 14px;
      font-family: 'Chakra Petch', sans-serif;
      font-weight: 500;
      line-height: 20px;
      color: #fff;
    }
  }
  @keyframes bannerTextAnimation {
    0% {
      transform: translateY(200%);
      opacity: 0;
    }
    100% {
      transform: translate(0px, 0px);
      opacity: 1;
    }
  }
}
</style>
