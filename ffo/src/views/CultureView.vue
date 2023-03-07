<template>
  <div class="culture">
    <FullPageTop
      title="Here, <br/> The Fifty One"
      subTitle="Culture"
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/culture-hello-visual.jpg"
      type="scroll"
    />
    <CultureIntro
      :title="['Hello,', 'The Fifty One']"
      content="회사는 때때로
    하루 중 가장 긴 시간을 보내는 장소가 됩니다. 더피프티원은 따뜻한 관심과
    든든한 지원을 통해, 오랜 시간을 함께하는 직원들을 위한 또 하나의 가족이
    되고자 합니다. <br />
    또한 무엇보다 우리가 함께 일하는 과정이 즐거워야 하기에 직원들의 창의성을
    극대화 하기 위하여 쾌적하고 창의적인 근무환경을 제공하고 있습니다.
    비지니스와 크리에이티브의 균형을 조화롭게 하기 위한 회사 노력을 통해 줄거운
    업무 환경이 되도록 합니다."
      :imgSrc="[
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-cascading03.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-cascading02.jpg',
        'http://www.the-51.com/wp-content/uploads/2019/06/culture-hello-cascading01.jpg'
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
      cultureData: CultureData.benefits,
      ComboImgBannerData: CultureData.comboBanner.hello,
      ImgBannerData: CultureData.wideImgBanner.hello
    }
  }
}
</script>
