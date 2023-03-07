<template>
  <div class="navScreen">
    <nav>
      <ul class="navList">
        <li>
          <router-link to="/" @click.prevent="gnbBtnClick()">Home</router-link>
        </li>
        <li>
          <router-link to="/work" @click.prevent="gnbBtnClick()"
            >Work</router-link
          >
        </li>
        <li>
          <router-link to="/about" @click.prevent="gnbBtnClick()"
            >About us</router-link
          >
          <div class="subMenu about">
            <router-link to="/about/who" @click.prevent="gnbBtnClick()"
              >Who we are</router-link
            >
            <router-link to="/about/contact" @click.prevent="gnbBtnClick()"
              >Contact us</router-link
            >
          </div>
        </li>
        <li>
          <router-link to="/culture" @click.prevent="gnbBtnClick()"
            >Culture</router-link
          >
          <div class="subMenu culture">
            <router-link to="/culture" @click.prevent="gnbBtnClick()"
              >Hello! the fifty one</router-link
            >
            <router-link to="/culture/insight" @click.prevent="gnbBtnClick()"
              >Insight</router-link
            >
          </div>
        </li>
        <li>
          <router-link to="/recruit" @click.prevent="gnbBtnClick()"
            >Recruit</router-link
          >
        </li>
      </ul>
    </nav>
    <ul class="snsList">
      <li class="facebook">
        <a target="_blank" href="https://blog.naver.com/the_51">
          <font-awesome-icon icon="fa-brands fa-facebook-f" />
        </a>
      </li>
      <li class="youtube">
        <a
          target="_blank"
          href="https://www.youtube.com/channel/UCWD7HJBP5pbpu_NHeb6tBEw"
        >
          <font-awesome-icon icon="fa-brands fa-youtube" />
        </a>
      </li>
      <li class="instagram">
        <a target="_blank" href="https://www.instagram.com/the_fiftyone/">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
    </ul>
    <p class="bottom-text">© 2019 the Fiftyone Corp.</p>
  </div>

  <div class="header">
    <router-link to="/" class="logo">
      <img
        class="default-logo"
        src="http://www.the-51.com/wp-content/uploads/2019/06/header-logo.png"
      />
      <img
        class="dark-logo"
        src="http://www.the-51.com/wp-content/uploads/2019/06/header-logo_B.png"
      />
    </router-link>
    <a class="navBtn" @click.prevent="gnbBtnClick()">
      <span>
        <i class="lines"></i>
      </span>
    </a>
  </div>
</template>

<script>
let num = '1'
export default {
  name: 'HeaderLayout',
  mounted() {
    document.addEventListener('scroll', this.scrollEvents)
  },
  methods: {
    gnbBtnClick() {
      const blurred = document.querySelector('.blurred')
      const navScreen = document.querySelector('.navScreen')
      const nav = document.querySelector('nav')
      const navBtn = document.querySelector('.navBtn')
      const snsList = document.querySelector('.snsList')
      const bottomText = document.querySelector('.bottom-text')
      const app = document.querySelector('#app')
      const logo = document.querySelector('.logo')
      if (num === '1') {
        navScreen.onwheel = function (e) {
          e.preventDefault()
          e.stopPropagation()
        }
        // blurred.style.filter = 'blur(5px)'
        blurred.classList.add('blurred--active')
        // app.style.marginBottom = '0'
        navBtn.classList.remove('dark')
        logo.classList.remove('dark')
        setTimeout(function () {
          navScreen.classList.add('active')
          nav.classList.add('active')
          navBtn.classList.add('active')
        }, 500)
        setTimeout(function () {
          snsList.classList.add('active')
          bottomText.classList.add('active')
        }, 1000)
        num = '2'
      } else if (num === '2') {
        app.classList.remove('active')
        // app.style.marginBottom = '412px'
        // blurred.style.filter = 'none'
        blurred.classList.remove('blurred--active')
        navBtn.classList.remove('active')
        snsList.classList.remove('active')
        bottomText.classList.remove('active')
        num = '1'
        navScreen.classList.add('close')
        setTimeout(function () {
          navScreen.classList.remove('close')
          navScreen.classList.remove('active')
          nav.classList.remove('active')
        }, 500)
      }
    },
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const whiteSec = document.querySelectorAll('.white-section')
      const logo = document.querySelector('.logo')
      const navBtn = document.querySelector('.navBtn')
      if (whiteSec) {
        if (num !== '1') return
        let isWhiteSectionInView = false
        whiteSec.forEach((el) => {
          const whiteTop =
            window.pageYOffset + el.getBoundingClientRect().top
          const whiteBottom =
            whiteTop + el.clientHeight
          if (documentTop > whiteTop - 30 && documentTop < whiteBottom) {
            isWhiteSectionInView = true
          }
        })
        if (!isWhiteSectionInView) {
          navBtn.classList.remove('dark')
          logo.classList.remove('dark')
        } else {
          navBtn.classList.add('dark')
          logo.classList.add('dark')
        }
      }
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/views/nav';
</style>
