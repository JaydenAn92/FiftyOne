<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <RecruitGride/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// export default {
//   name: 'HomeView',
//   components: {
//     HelloWorld
//   }
// }
import RecruitGride from '@/components/RecruitGride.vue'
export default {
  name: 'HomeView',
  components: {
    RecruitGride
  }
}
</script>

<style lang="scss">
  @import "@/assets/scss/views/home";
</style>
