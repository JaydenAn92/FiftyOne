<template>
  <div class="culture">
    <FullPageTop
      title="Capacity Building Leader Workshop 2019"
      subTitle="The Fiftyone Insight"
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-visual.jpg"
      sizeType="large"
      type="scroll"
    />
    <CultureIntro
      :title="['For A Better Company']"
      content="3월 10일~11일 이틀간 가평의 교원비전센터에서 더피프티원의 관리자들의 역량 강화를 위한 워크샵이 진행되었습니다. <br/>
이번 워크샵은 더피프티원의 중심축 역할을 해주시는 관리자들을 대상으로보다 발전적인 회사의 미래를 구상하고 관리자로서의 역할을 다시 한번 생각해보는 워크샵이었습니다. 지금부터 그 현장을 소개합니다."
      :imgSrc="[
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-cascading03.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-cascading02.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-cascading01.jpg'
      ]"
    />
    <ComboImgBanner :ComboImgBannerData="ComboImgBannerData" />
    <WideImgBanner :ImgBannerData="ImgBannerData" />
    <TalkSlide :cultureData="cultureData" />
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import CultureIntro from '@/components/CultureIntro.vue'
import ComboImgBanner from '@/components/ComboImgBanner.vue'
import WideImgBanner from '@/components/WideImgBanner.vue'
import TalkSlide from '@/components/TalkSlide.vue'
import CultureData from '@/assets/data/culture.json'
export default {
  components: {
    FullPageTop,
    CultureIntro,
    ComboImgBanner,
    WideImgBanner,
    TalkSlide
  },
  data() {
    return {
      cultureData: CultureData.workshop,
      ComboImgBannerData: CultureData.comboBanner.insight,
      ImgBannerData: CultureData.wideImgBanner.insight
    }
  }
}
</script>
