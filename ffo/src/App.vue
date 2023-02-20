<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/work">Work</router-link> |
    <router-link to="/about">About us</router-link> |
    <router-link to="/about/who">Who we are</router-link> |
    <router-link to="/about/contact">Contact us</router-link> |
    <router-link to="/culture">Culture</router-link> |
    <router-link to="/culture/hello">Hello! the fifty one</router-link> |
    <router-link to="/culture/insight">Insight</router-link> |
    <router-link to="/recruit">Recruit</router-link>
  </nav>
  <button @click="gnbBtnClick()">gnb</button>
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

nav {
  padding: 30px;
  display: none;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
let num = '1'
export default {
  name: 'App',
  components: {},
  methods: {
    gnbBtnClick() {
      const wef = document.querySelector('nav')
      console.log(wef)
      if (num === '1') {
        wef.style.display = 'block'
        num = '2'
      } else if (num === '2') {
        wef.style.display = 'none'
        num = '1'
      }
    }
  }
}
</script>
