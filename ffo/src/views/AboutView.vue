<template>
  <section class="about">
    <div class="container">
      <AboutUs />
    </div>
    <div class="about-layout-both white-section">
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
    <div class="about-imgbox parallaxItem">
      <img
        src="http://www.the-51.com/wp-content/uploads/2019/06/sub_about_01.jpg"
        alt=""
      />
    </div>
    <div class="container">
      <Awards :awardData="awardData" />
    </div>
    <div class="about-videobox parallaxItem">
      <div class="container">
        <div class="about-videobox__inr">
          <video
            class="nectar-video-bg"
            preload="auto"
            loop=""
            autoplay=""
            muted=""
            playsinline=""
          >
            <source
              src="http://www.the-51.com/wp-content/uploads/2019/06/the_fifty_one_instagram_video.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
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
  created() {
    window.scrollTo(0, 0)
  },
  mounted() {
    window.addEventListener('scroll', this.$parallaxShowUp)
  },
  unmounted() {
    window.removeEventListener('scroll', this.$parallaxShowUp)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/about.scss';
</style>
