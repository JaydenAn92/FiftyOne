<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section class="award">
      <h5>AWARDS</h5>
      <div class="award-title-desc">
        <p class="parallaxItem">We’ve received many</p>
        <p class="parallaxItem">awards, and we’re not</p>
        <p class="parallaxItem">very shy about it.</p>
      </div>
      <Awards :awardData="awardData" class="parallaxItem"/>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import Awards from '@/components/about/awards.vue'
import AwardData from '@/assets/data/about.json'
export default {
  name: 'AboutView',
  components: {
    Awards
  },
  data() {
    return {
      awardData: AwardData.awards,
      currentScrollPos: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.updateCurrentScrollPos, false)
  },
  methods: {
    settingParallaxItem() {
      const parallaxItemList = document.querySelectorAll('.parallaxItem')
      parallaxItemList.forEach((el) => {
        const pos = el.offsetTop
        if (this.currentScrollPos > pos) el.classList.add('parallaxItem--active')
        else el.classList.remove('parallaxItem--active')
      })
    },
    updateCurrentScrollPos() {
      this.currentScrollPos = window.scrollY + (window.innerHeight * 0.75) // window 4분의1 지점에서 show
      this.settingParallaxItem()
    }
  }
}
</script>

<style lang="scss">
  .award {
    padding-top: 114px;
    background: #000;

    h5 {
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: 700;
      color: #fff;
    }
    &-title-desc {
      margin-bottom: 104px;
      p {
        font-size: 47px;
        color: #fff;
      }
    }
  }
  .parallaxItem {
    position: relative;
    top:30px;
    opacity: 0;
    transition: top .3s, opacity .3s;

    &--active {
      top:0;
      opacity: 1;
    }
  }
</style>
