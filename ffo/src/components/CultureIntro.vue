<template>
  <div class="culture-intro">
    <div class="culture-intro__container">
      <div class="culture-intro-text">
        <div class="culture-intro-text__title">
          <div
            class="culture-intro-text__container"
            v-for="el in title"
            :key="el"
          >
            <h2>{{ el }}</h2>
          </div>
        </div>
        <div class="culture-intro-text__content">
          <p v-html="content" />
        </div>
      </div>
      <div class="culture-intro-img">
        <div class="culture-intro-img__item" v-for="el in imgSrc" :key="el">
          <img :src="el" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CultureIntro',
  props: {
    title: Array,
    content: String,
    imgSrc: Array
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const cultureIntroContent =
        document.querySelector('.culture-intro').offsetTop
      const titleTextEls = document.querySelectorAll(
        '.culture-intro-text__container h2'
      )
      const contentsText = document.querySelector(
        '.culture-intro-text__content p'
      )
      const imgEls = document.querySelectorAll('.culture-intro-img__item')
      if (documentTop >= cultureIntroContent) {
        for (let i = 0; i < titleTextEls.length; i += 1) {
          titleTextEls[i].style.animationName = 'translateY'
          titleTextEls[i].style.animationDelay = `0.1 + ${i / 10}s`
        }
        contentsText.style.animationName = 'translateY'
        imgEls.forEach((el) => {
          el.style.animationName = 'scale'
        })
      }
    }
  }
}
</script>

<style lang="scss">
.culture-intro {
  width: 100%;
  padding-top: calc(100vw * 0.1);
  padding-bottom: calc(100vw * 0.1);
  background: white;
  position: relative;
  z-index: 10;
  &__container {
    display: flex;
    align-items: center;
    width: 1370px;
    margin: 0 auto;
  }
  &-text {
    flex: 1;
    text-align: left;
    &__container {
      overflow: hidden;
    }
    h2 {
      font-size: 56px;
      font-weight: 700;
      line-height: 59px;
      margin-bottom: 7px;
      transform: translateY(100%);
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
    }
    @keyframes translateY {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0%);
      }
    }
    &__title {
      margin-bottom: 40px;
    }
    &__content {
      line-height: 30px;
      max-width: 500px;
      font-size: 16px;
      overflow: hidden;
      p {
        transform: translateY(100%);
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        animation-delay: 0.5s;
        font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
      }
    }
  }
  &-img {
    flex: 1;
    min-height: 540px;
    position: relative;
    margin-left: 2%;
    &__item {
      position: absolute;
      box-shadow: 0 60px 135px rgb(0 0 0 / 14%), 0 15px 65px rgb(0 0 0 / 14%);
      transform: scale(0);
      opacity: 0;
      animation-duration: 0.5s;
      animation-fill-mode: forwards;
      transform-origin: center;
      &:nth-child(1) {
        top: 25%;
        left: 25%;
      }
      &:nth-child(2) {
        bottom: 0;
        right: 0;
        z-index: 1;
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        top: 0;
        left: 0;
        z-index: 2;
        animation-delay: 0.4s;
      }
      @keyframes scale {
        0% {
          transform: scale(0);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }
    }
  }
}
</style>
