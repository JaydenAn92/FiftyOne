<template>
  <div class="recruit">
    <WorkTemplate :data="this.work[0]" />
  </div>
</template>

<script>
import WorkTemplate from '@/components/WorkTemplate.vue'
export default {
  components: {
    WorkTemplate
  },
  data() {
    return {
      work: [
        {
          id: 0,
          title: 'HYUNDAICARD <br/> My Company',
          subTitle: 'Web & Mobile Site',
          bgImg:
            'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard-main.png',
          client: '현대카드',
          open: '2022.06',
          role: ['UX Planning', 'Design', 'Publishing'],
          infoTitle: '현대법인카드 PC/Mobile 웹 구축',
          infoContent:
            '현대카드는 화폐 그 이상의 가치와 혁신을 담은 카드 플레이트와 디자인, 프리미엄카드 패키지, 그리고<br/> 잊혀졌던 아날로그 감성과 영감을 일깨워주는 라이브러리, 전 세계 최정상급 아티스트를 초청해 최고의<br/> 공연을 선사하는 슈퍼콘서트와 컬처프로젝트, 실험적인 시각예술 전시를 선보이는 스토리지 전시까지<br/> 혁신적인 브랜딩과 마케팅으로 트렌드를 주도하고 있습니다.<br/> 최신 가이드를 적용하여 현대법인카드에서도 일관된 브랜드 Identity를 느낄 수 있도록 하였습니다.',
          img: [
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_01.png'
            },
            {
              type: 'max',
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_02.png',
              bgColor: 'F3F6FA'
            },
            {
              type: 'max',
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_03.png',
              bgColor: 'F3F6FA'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_04.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_05.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_06.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_07.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_08.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_09.png'
            },
            {
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/hyndaicard_10.png'
            }
          ],
          partnership: [
            {
              icon: 'adobe',
              title: 'Adobe Korea',
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-adobe.png'
            },
            {
              icon: 'Hyundaicard',
              title: 'Hyundaicard My Company',
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-hyundaicard.png'
            },
            {
              icon: 'Fifty-One',
              title: 'The Fifty-One',
              url: 'http://www.the-51.com/wp-content/uploads/2022/11/logo-the51.png'
            }
          ]
        }
      ]
    }
  }
}
</script>
