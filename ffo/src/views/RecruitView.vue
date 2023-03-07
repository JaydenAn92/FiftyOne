<template>
  <div class="recruit">
    <FullPageTop
      title="<strong>PEOPLE <span>OF</span></strong><strong>THE <span>FIFTY ONE<em>.</em></span></strong>"
      bgImg="http://www.the-51.com/wp-content/uploads/2022/05/img-bg-recruit.png"
    />
    <div class="container">
      <RecruitBenefit />
      <LeaderRecruit />
      <RecruitmentArea />
      <CrewTalent />
      <JoinUs />
    </div>
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import RecruitBenefit from '@/components/recruit/Benefit.vue'
import LeaderRecruit from '@/components/recruit/LeaderRecruit.vue'
import RecruitmentArea from '@/components/recruit/RecruitmentArea.vue'
import CrewTalent from '@/components/recruit/CrewTalent.vue'
import JoinUs from '@/components/recruit/JoinUs.vue'
export default {
  name: 'RecruitView',
  components: {
    FullPageTop,
    RecruitBenefit,
    LeaderRecruit,
    RecruitmentArea,
    CrewTalent,
    JoinUs
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/recruit';
@import '@/assets/scss/views/home';
</style>
