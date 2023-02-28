<template>
  <div class="who">
    <AboutMain
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/about-who-visual.jpg"
      subTitle="WHO WE ARE"
      :title="['Special Group for', 'Digital Marketing']"
      contents="더피프티원은 매년 다양한 프로젝트 경험과 전문성 있는 인적자원으로 <br />프로젝트를 성공적으로 진행하며 업계를 선도합니다."
    />
    <div class="who-overview">
      <div class="who-overview__container">
        <div class="who-overview__header">
          <h5>Overview</h5>
          <h2>There are many numbers in between '0' and '100'</h2>
        </div>
        <div class="who-overview__contents">
          <p>
            '0'과 '100'사이에는 많은 숫자가 존재합니다.<br />
            '100'이 모든것을 이루어낸 '완성'을 의미한다면 '0'은 이루어나가야
            하는 '미완성'을 의미합니다. <br />
            누군가는 모든것을 이루어낸 '100'에 큰 의미를 부여하지만 우리는 '0'과
            '100'사이의<br />
            '51(fifty-one)'에 주목합니다. '51'은 가능과 불가능을 구분짓는
            '가능성'을 의미하기 때문입니다. 불가능을 가능으로 만드는 '51'의
            순간을 우리는 함께 경험할 것입니다.
          </p>
          <p>
            If '100' represents 'complete' that achieved everything '0'
            represents 'incomplete' that has to achieve everything While someone
            gives significant meaning to '100' we focus on '51(fifty-one)'
            between '0' and '100'<br />
            '51' represents 'possibility' that defferentiates possible and
            impossible We will experience the moment of '51' making the
            impossible to possible all together.
          </p>
        </div>
        <div class="who-overview-footer">
          <div class="who-overview-footer__container">
            <ul>
              <li>
                <h4>Company</h4>
                <p>
                  (주)더피프티원<br />
                  조종영 대표이사<br />
                  2011년 4월 11일(법인설립)<br />
                  80명(자회사 정규직원 포함)
                </p>
              </li>
              <li>
                <h4>Business field</h4>
                <p>
                  디지털마케팅 에이전시<br />
                  디지털 콘텐츠 서비스<br />
                  UX컨설팅 서비스
                </p>
              </li>
              <li>
                <h4>Contact</h4>
                <p>
                  Head Office<br />
                  서울특별시 강남구 봉은사로18길 58
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <SwiperTemplate />
    <div class="who-client">
      <div class="who-client__container">
        <h5>Our Clients</h5>
        <div class="who-client-title">
          <div class="who-client-title__container">
            <h2>These are the customers</h2>
          </div>
          <div class="who-client-title__container">
            <h2>who trusted us.</h2>
          </div>
        </div>
        <div class="who-client-list">
          <ul>
            <li v-for="client in this.client" :key="{ client }">
              <img :src="client" />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <PaginationTemplate
      nextPathName="contact"
      projectNextImg="http://www.the-51.com/wp-content/uploads/2019/06/about-who-link.jpg"
      projectNextTitle="CONTACT US"
    />
  </div>
</template>

<script>
import SwiperTemplate from '@/components/SwiperTemplate.vue'
import AboutMain from '@/components/about/AboutMain.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  components: {
    SwiperTemplate,
    AboutMain,
    PaginationTemplate
  },
  data() {
    return {
      client: [
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo01.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo02.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo03.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo04.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo05.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo06.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo07.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo08.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo09.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo10.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo11.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo12.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo13.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo14.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo15.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo16.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo17.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo18.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo19.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/about-who-logo20.jpg'
      ]
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
      if (documentTop >= swiper.offsetTop) {
        swiper.querySelector('.swiper-container').style.transform = 'scale(1)'
      }
      if (documentTop >= client.offsetTop) {
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
