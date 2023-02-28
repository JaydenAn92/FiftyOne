<template>
  <div class="who">
    <AboutMain
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/about-contact-visual.jpg"
      subTitle="CONTACT"
      :title="['Want To Work With Us?']"
      contents="더피프티원은 다양한 프로젝트 경험과 구성인력의 전문화로 조직간 <br/> Co-Work을 통해 성공적인 프로젝트를 진행합니다."
    />
    <div class="contact-map">
      <div class="contact-map__container">
        <div class="contact-map__map"></div>
        <div class="contact-map__txt">
          <div class="contact-map__txt__container">
            <h2>Location.</h2>
            <p>
              우리에게 의뢰할 프로젝트가 있으신가요? 혹은 우리와 함께 성장하고
              싶으신가요?<br />
              방문, 전화, 팩스, 메일로 얼마든 문의해 주세요.
            </p>
            <div class="contact-map__info">
              <h4>(주)더피프티원</h4>
              <p>
                서울특별시 강남구 봉은사로18길 58<br />
                Tel: 02 332 6251 / 2<br />
                Fax: 02 332 6253<br />
                Email: contact@the-51.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationTemplate
      nextPathName="who"
      projectNextImg="http://www.the-51.com/wp-content/uploads/2019/06/about-contact-link.jpg"
      projectNextTitle="WHO WE ARE"
    />
  </div>
</template>

<script>
import AboutMain from '@/components/about/AboutMain.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  components: {
    AboutMain,
    PaginationTemplate
  },
  mounted() {
    window.scrollTo(0, 0)

    const text = document.querySelector('.contact-map__txt')
    setTimeout(() => {
      text.style.transform = 'scale(1)'
    }, 800)
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/whoView';
.contact-map {
  width: 100%;
  background-color: black;
  font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
  text-align: left;
  &__container {
    width: 100%;
    height: 100%;
    display: flex;
    @media only screen and (max-width: 690px) {
      flex-direction: column;
    }
  }
  &__map {
    flex: 1;
  }
  &__txt {
    flex: 1;
    min-height: 750px;
    background-color: #383838;
    transform: scale(0);
    transition: all ease-in-out 0.5s;
    @media only screen and (max-width: 690px) {
      min-height: 0;
    }
    &__container {
      padding: 15%;
      color: white;
      h2 {
        font-size: 56px;
        line-height: 59px;
        font-weight: 700;
        @media only screen and (max-width: 690px) {
          font-size: 42px;
          line-height: 44.25px;
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
        font-weight: 400;
        margin-top: 7px;
        @media only screen and (max-width: 690px) {
        }
      }
    }
  }
  &__info {
    margin-top: 10%;
    h4 {
      font-size: 20px;
      line-height: 34px;
      font-weight: 400;
    }
    p {
      margin-top: 8px;
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
    }
  }
}
</style>
