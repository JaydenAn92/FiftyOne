<template>
  <div class="recruit">
    <h1>This is an Recruit page</h1>
    <RecruitGride/>
  </div>
</template>

<script>
// @ is an alias to /src
import RecruitGride from '@/components/RecruitGride.vue'
export default {
  name: 'HomeView',
  components: {
    RecruitGride
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/home';
</style>
