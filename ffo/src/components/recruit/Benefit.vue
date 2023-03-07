<template>
  <article class="recruit-benefit">
    <div class="recruit__heading">
      <h3>
        <span
          >점심부터 휴가까지, <br class="mo-hidden" />회사 다닐 맛 나는</span
        >
        <strong> THE51의 <br class="mo-hidden" />남다른 혜택<em>.</em> </strong>
      </h3>
      <span class="desc pc-hidden"
        >위 혜택은 프로젝트별 상이하며, 2022년도 혜택으로 매년 연장되거나 새로운
        혜택으로 변경 될 수 있습니다.</span
      >
    </div>
    <div class="recruit__content">
      <ul class="recruit-benefit__list">
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>01</em>매일 매일 걱정 없는 <br /><strong>Happy Lunch</strong>
          </div>
          <div class="icon-wrap"><i class="icon icon-01"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>점심 식사용 법인카드 <br class="pc-hidden" />개인별 지급</li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>02</em>떠나고 싶을 때 <br class="pc-hidden" />떠나는
            <br class="mo-hidden" />
            <strong>Vacation</strong>
          </div>
          <div class="icon-wrap"><i class="icon icon-02"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>연차는 기본, <br class="pc-hidden" />일주일 여름휴가까지</li>
              <li>경조휴가, 출산휴가, 육아휴직도 눈치 NO!</li>
              <li>입사 3년, 6년에 한 번 2주 리프레시 휴가</li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>03</em>열심히 일한 <br />
            당신께 드리는 <br />
            <strong>Reward &amp; Gift</strong>
          </div>
          <div class="icon-wrap"><i class="icon icon-03"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>매년 우수부서, 우수직원 시상에 따라 상금 지급</li>
              <li>설날&amp;추석 명절에 백화점 상품권 지급</li>
              <li>
                선임급 이상 인재 추천 시 <br class="mo-hidden" />100만원 지급
              </li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>04</em>모두가 친해지도록 <br /><strong
              >Workshop &amp; <br class="mo-hidden" />Party</strong
            >
          </div>
          <div class="icon-wrap"><i class="icon icon-04"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>매년 센터별 자유로운 컨셉으로 <br />워크숍 및 파티</li>
              <li>연말엔 기분 좋은 선물 증정 이벤트</li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>05</em>아낌 없이 <br class="pc-hidden" />베푸는
            <br class="mo-hidden" />조건 없는 <br class="pc-hidden" /><strong
              >Beneﬁts</strong
            >
          </div>
          <div class="icon-wrap"><i class="icon icon-05"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>더피프티원의 아이덴티티를 담은 굿즈(Welcome kit) 증정</li>
              <li>예고 없이 진행하는 게릴라 이벤트</li>
              <li>365일 다양한 음료 및 과자 상시 비치</li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>06</em>자기계발부터 <br />역량 강화까지
            <br class="mo-hidden" />든든한 <strong>Support</strong>
          </div>
          <div class="icon-wrap"><i class="icon icon-06"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>외부 강사를 통한 전문 교육</li>
              <li>도서구입비 지원</li>
              <li>직군별 외부 온라인 교육 지원</li>
            </ul>
          </div>
        </li>
        <li class="recruit-benefit__item">
          <div class="tit-wrap">
            <em>07</em>근무환경을 <strong>Flexible</strong>
          </div>
          <div class="icon-wrap"><i class="icon icon-07"></i></div>
          <div class="txt-wrap">
            <ul>
              <li>
                성과관리시스템을 통한 성과 보상과 <br class="mo-hidden" />승진
                기회!
              </li>
              <li>12시부터 1시 30분까지 여유로운<br />점심시간!</li>
            </ul>
          </div>
        </li>
      </ul>
      <span class="desc mo-hidden"
        >* 위 혜택은 프로젝트별 상이하며, 2022년도 혜택으로 매년 연장되거나
        새로운 혜택으로 변경 될 수 있습니다.</span
      >
    </div>
  </article>
</template>
<script>
export default {
  name: 'RecruitBenefit',
  data() {
    return {
      deviceMode: ''
    }
  },
  mounted() {
    this.reSettingBenefit()
    window.addEventListener('resize', this.reSettingBenefit)
  },
  methods: {
    reSettingBenefit() {
      this.checkDevice()
      this.settingGapBenefit()
    },
    checkDevice() {
      if (window.innerWidth > 1000) {
        this.deviceMode = 'pc'
      } else {
        this.deviceMode = 'mobile'
      }
    },
    settingGapBenefit() {
      const benefitList = document.querySelectorAll('.recruit-benefit__item')
      this.clearGapBenefit(benefitList)
      benefitList.forEach((el, index) => {
        const befHeight = el.offsetHeight
        el.classList.add('recruit-benefit__item--fit')
        const fitHeight = el.offsetHeight
        el.classList.remove('recruit-benefit__item--fit')
        if (this.deviceMode === 'pc') {
          if (index + 3 >= benefitList.length) return
          benefitList[index + 3].style.marginTop = `-${befHeight - fitHeight}px`
        } else {
          if (index + 2 >= benefitList.length) return
          benefitList[index + 2].style.marginTop = `-${befHeight - fitHeight}px`
        }
      })
    },
    clearGapBenefit(benefitList) {
      benefitList.forEach((el) => {
        el.style = ''
      })
    }
  }
}
</script>
<style lang="scss">
@import '@/assets/scss/views/recruit.scss';
</style>
