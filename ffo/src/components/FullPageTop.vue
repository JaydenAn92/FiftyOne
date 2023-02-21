<template>
  <div class="full-page">
    <div class="full-page-wrap">
      <div
        class="full-page-image"
        :style="{ backgroundImage: `url(${bgImg})` }"
      ></div>
      <div class="full-page-text">
        <h1>{{ title }}</h1>
        <p>{{ subTitle }}</p>
      </div>
      <div class="scroll-bottom">
        <a @click="scrollDown" href="#" class="section-down-arrow"
          ><svg
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
            ></path></svg
        ></a>
      </div>
    </div>
  </div>
  <div class="scroll"></div>
</template>

<script>
export default {
  name: 'FullPageTop',
  props: {
    title: String,
    subTitle: String,
    bgImg: String
  },
  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollDown() {
      const scroll = document.querySelector('.scroll')
      window.scrollTo({ top: scroll.scrollHeight, behavior: 'smooth' })
    },
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const scrollTop = document.querySelector('.scroll').offsetTop
      const text = document.querySelector('.full-page-text')
      if (documentTop >= scrollTop / 2) {
        text.style.opacity = 0
      }
      if (documentTop < scrollTop / 2) {
        text.style.opacity = 1
      }
      console.log(documentTop, scrollTop / 2)
    }
  }
}
</script>

<style>
.full-page {
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 2;
}
.full-page-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
}
.full-page-image {
  width: 100%;
  height: 100%;
}
.full-page-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  transition: opacity ease-in-out 0.5s;
}
.full-page-text h1 {
  font-size: 5.5vw;
  line-height: 5.9vw;
  margin: 0 auto;
}
.full-page-text p {
  font-size: 20px;
  line-height: 40px;
  font-weight: 500;
}
.scroll-bottom {
  width: 49px;
  color: white;
  line-height: 50px;
  font-size: 25px;
  position: absolute;
  bottom: 13px;
  left: 50%;
  transform: translateX(-50%);
}
.scroll-bottom::before {
  position: absolute;
  content: '';
  display: block;
  left: 50%;
  margin-left: -1px;
  top: 22px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 2px;
  height: 6px;
  border-radius: 10px;
  animation-name: opacity-down;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}
.nectar-scroll-icon {
  width: 30px;
  opacity: 0.5;
  animation-name: scroll-down;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}
@keyframes scroll-down {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(25%);
  }
}
@keyframes opacity-down {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.scroll {
  position: relative;
  width: 100%;
  height: 3000px;
  background-color: white;
  z-index: 10;
}
</style>
