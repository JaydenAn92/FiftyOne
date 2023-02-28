<template>
  <div class="who">
    <AboutMain
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/about-who-visual.jpg"
      subTitle="WHO WE ARE"
      :title="['Special Group for', 'Digital Marketing']"
      contents="더피프티원은 매년 다양한 프로젝트 경험과 전문성 있는 인적자원으로 <br />프로젝트를 성공적으로 진행하며 업계를 선도합니다."
    />
    <WhoOverview />
    <SwiperTemplate />
    <WhoClient :client="this.client" />
    <PaginationTemplate
      nextPathName="contact"
      projectNextImg="http://www.the-51.com/wp-content/uploads/2019/06/about-who-link.jpg"
      projectNextTitle="CONTACT US"
    />
  </div>
</template>

<script>
import AwardData from '@/assets/data/about.json'
import SwiperTemplate from '@/components/SwiperTemplate.vue'
import AboutMain from '@/components/about/AboutMain.vue'
import WhoOverview from '@/components/about/WhoOverview.vue'
import WhoClient from '@/components/about/Client.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  components: {
    SwiperTemplate,
    AboutMain,
    WhoOverview,
    WhoClient,
    PaginationTemplate
  },
  data() {
    return {
      client: AwardData.ourClients
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', this.scrollEvents)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const whoOverview = document.querySelector('.who-overview')
      const whoOverviewLi = whoOverview.querySelectorAll('li')
      const swiper = document.querySelector('.our-service')
      const client = document.querySelector('.who-client')
      if (documentTop >= whoOverview.offsetTop / 2) {
        for (let i = 0; i < whoOverviewLi.length; i += 1) {
          setTimeout(() => {
            whoOverviewLi[i].style.opacity = '1'
            whoOverviewLi[i].style.transform = 'translateY(0)'
          }, 200 + i * 100)
        }
      }
      if (documentTop >= swiper.offsetTop / 2 - 200) {
        swiper.querySelector('.swiper-container').style.transform = 'scale(1)'
      }
      if (documentTop >= client.offsetTop / 2) {
        const clientTitle = client.querySelectorAll('h2')
        for (let i = 0; i < clientTitle.length; i += 1) {
          setTimeout(() => {
            clientTitle[i].style.opacity = '1'
            clientTitle[i].style.transform = 'translateY(0)'
          }, 200 + i * 100)
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/whoView';
</style>
