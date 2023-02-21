<template>
  <div class="navScreen">
    <nav>
      <ul class="navList">
        <li>
          <router-link to="/" @click="gnbBtnClick()">Home</router-link>
        </li>
        <li>
          <router-link to="/work" @click="gnbBtnClick()">Work</router-link>
        </li>
        <li>
          <router-link to="/about" @click="gnbBtnClick()">About us</router-link>
          <div class="subMenu about">
            <router-link to="/about/who" @click="gnbBtnClick()"
              >Who we are</router-link
            >
            <router-link to="/about/contact" @click="gnbBtnClick()"
              >Contact us</router-link
            >
          </div>
        </li>
        <li>
          <router-link to="/culture" @click="gnbBtnClick()"
            >Culture</router-link
          >
          <div class="subMenu culture">
            <router-link to="/culture" @click="gnbBtnClick()"
              >Hello! the fifty one</router-link
            >
            <router-link to="/culture/insight" @click="gnbBtnClick()"
              >Insight</router-link
            >
          </div>
        </li>
        <li>
          <router-link to="/recruit" @click="gnbBtnClick()"
            >Recruit</router-link
          >
        </li>
      </ul>
    </nav>
    <p class="bottom-text" style="opacity: 0.7">© 2019 the Fiftyone Corp.</p>
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
  </div>
  <div class="header">
    <a>
      <img
        class="default-logo"
        src="http://www.the-51.com/wp-content/uploads/2019/06/header-logo.png"
      />
    </a>
    <button class="navBtn" @click="gnbBtnClick()">gnb</button>
  </div>
  <router-view />
  <!-- <FooterCom /> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style lang="scss">
@import '@/assets/scss/views/nav';
</style>

<script>
// import func from 'vue-editor-bridge'
let num = '1'
export default {
  name: 'App',
  components: {},
  methods: {
    gnbBtnClick() {
      const navScreen = document.querySelector('.navScreen')
      const nav = document.querySelector('nav')
      console.log(navScreen)
      if (num === '1') {
        // navScreen.style.display = 'block'
        navScreen.classList.add('active')
        nav.classList.add('active')
        num = '2'
      } else if (num === '2') {
        navScreen.classList.remove('active')
        nav.classList.remove('active')
        num = '1'
        // navScreen.classList.add('close')
        // setTimeout(function () {
        //   navScreen.classList.remove('close')
        //   navScreen.classList.remove('active')
        //   nav.classList.remove('active')
        // }, 2000)
      }
    }
  }
}
</script>
