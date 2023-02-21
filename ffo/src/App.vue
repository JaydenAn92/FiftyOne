<template>
  <div class="navScreen">
    <nav>
      <router-link to="/" @click="gnbBtnClick()">Home</router-link>
      <router-link to="/work" @click="gnbBtnClick()">Work</router-link>
      <router-link to="/about" @click="gnbBtnClick()">About us</router-link>
      <router-link to="/about/who" @click="gnbBtnClick()"
        >Who we are</router-link
      >
      <router-link to="/about/contact" @click="gnbBtnClick()"
        >Contact us</router-link
      >
      <router-link to="/culture" @click="gnbBtnClick()">Culture</router-link>
      <router-link to="/culture/hello" @click="gnbBtnClick()"
        >Hello! the fifty one</router-link
      >
      <router-link to="/culture/insight" @click="gnbBtnClick()"
        >Insight</router-link
      >
      <router-link to="/recruit" @click="gnbBtnClick()">Recruit</router-link>
    </nav>
  </div>
  <div class="header">
    <a> the 51 logo </a>
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
let num = '1'
export default {
  name: 'App',
  components: {},
  methods: {
    gnbBtnClick() {
      const navScreen = document.querySelector('.navScreen')
      console.log(navScreen)
      if (num === '1') {
        // navScreen.style.display = 'block'
        navScreen.classList.add('active')
        num = '2'
      } else if (num === '2') {
        // navScreen.style.display = 'none'
        navScreen.classList.remove('active')
        num = '1'
      }
    }
  }
}
</script>
