<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomeFullPage :slides="slides" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import HomeFullPage from '@/components/HomeFullPage.vue'
import mainSlide from '@/assets/data/mainSlide.json'
export default {
  name: 'HomeView',
  data() {
    return {
      slides: mainSlide
    }
  },
  components: {
    // HelloWorld,
    HomeFullPage
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/home';
</style>
