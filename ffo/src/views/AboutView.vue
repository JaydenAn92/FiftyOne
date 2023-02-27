<template>
  <section class="about">
    <div class="container">
      <AboutUs />
    </div>
    <div class="about-layout-both">
      <div class="container">
        <ContentLink
          class="about-layout-both__lt"
          title="About The Fifty One"
          description="더피프티원은 전문화된 기술과 인력으로 통합 디지털 마케팅 서비스를 제공하는 Creative Design Agency 입니다."
          buttonText="WHO WE ARE"
          link="/about/who"
        />
        <ContentLink
          class="about-layout-both__rt"
          title="Want To Work Us?"
          description="우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고 싶으신가요?<br />방문, 전화, 팩스 메일로 얼마든 문의해 주세요."
          buttonText="CONTACT"
          link="/about/contact"
        />
      </div>
    </div>
    <div class="container">
      <Awards :awardData="awardData" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
import AwardData from '@/assets/data/about.json'
import Awards from '@/components/about/Awards.vue'
import AboutUs from '@/components/about/AboutUs.vue'
import ContentLink from '@/components/about/ContentLink.vue'

export default {
  name: 'AboutView',
  components: {
    AboutUs,
    Awards,
    ContentLink
  },
  data() {
    return {
      awardData: AwardData.awards,
      currentScrollPos: 0
    }
  },
  mounted() {
    this.$parallaxShowUp()
  },
  unmounted() {
    this.$clearParallaxShowUp()
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/about.scss';
.parallaxItem {
  position: relative;
  top: 30px;
  opacity: 0;
  transition: top 0.3s, opacity 0.3s;

  &--active {
    top: 0;
    opacity: 1;
  }
}
</style>
