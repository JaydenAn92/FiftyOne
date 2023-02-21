<template>
  <div class="about">
    <AboutUs :flag="flag" :title="title" :paragraph="paragraph" />
    <SwiperTemplate />
  </div>
</template>

<script>
// import FullPageTop from '@/components/FullPageTop.vue'
import SwiperTemplate from '@/components/SwiperTemplate.vue'
import AboutUs from '@/components/AboutUs.vue'
export default {
  components: {
    // FullPageTop,
    SwiperTemplate,
    AboutUs
  },
  data() {
    return {
      flag: 'ABOUT US',
      title: ['Awesome', 'Global Capability'],
      paragraph:
        '우리는 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 Co-work을 통해 성공적인 프로젝트를 진행합니다.'
    }
  }
}
</script>
