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
  <button class="navBtn" @click="gnbBtnClick()">gnb</button>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navScreen {
  padding: 0;
  background-color: #111111;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.93;
  display: none;
  align-items: center;
  justify-content: center;
}

.navScreen.active {
  display: flex;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav {
  display: flex;
  flex-direction: column;
}

.navBtn {
  position: relative;
  z-index: 100;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
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
