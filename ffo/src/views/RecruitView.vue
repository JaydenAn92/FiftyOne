<template>
  <div class="recruitFullPage">
    <FullPageTop
      title="<strong>PEOPLE <span>OF</span></strong><strong>THE <span>FIFTY ONE<em>.</em></span></strong>"
      bgImg="http://www.the-51.com/wp-content/uploads/2022/05/img-bg-recruit.png"
    />
  </div>
  <RecruitGride/>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import RecruitGride from '@/components/RecruitGride.vue'
export default {
  name: 'HomeView',
  components: {
    FullPageTop,
    RecruitGride
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/recruit';
@import '@/assets/scss/views/home';
</style>
