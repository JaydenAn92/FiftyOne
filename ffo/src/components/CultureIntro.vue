<template>
  <div class="culture-intro white-section">
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
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
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
      if (documentTop >= cultureIntroContent / 2 - 300) {
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
@import '@/assets/scss/components/cultureIntro';
</style>
