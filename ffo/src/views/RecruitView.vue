<template>
  <div class="recruit">
    <FullPageTop
      title="<strong>PEOPLE <span>OF</span></strong><strong>THE <span>FIFTY ONE<em>.</em></span></strong>"
      bgImg="http://www.the-51.com/wp-content/uploads/2022/05/img-bg-recruit.png"
    />
    <div class="container">
      <RecruitBenefit />
    </div>
  </div>
</template>
<script>
import FullPageTop from '@/components/FullPageTop.vue'
import RecruitBenefit from '@/components/recruit/Benefit.vue'
export default {
  name: 'RecruitView',
  components: {
    FullPageTop,
    RecruitBenefit
  }
}
</script>
