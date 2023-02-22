<template>
  <div class="about">
    <section class="about">
      <div class="container">
        <AboutUs />
        <Awards :awardData="awardData" class="parallaxItem" />
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import AwardData from '@/assets/data/about.json'
import Awards from '@/components/about/Awards.vue'
import AboutUs from '@/components/about/AboutUs.vue'

export default {
  name: 'AboutView',
  components: {
    AboutUs,
    Awards
  },
  data() {
    return {
      awardData: AwardData.awards,
      currentScrollPos: 0
    }
  },
  mounted() {
    this.updateCurrentScrollPos()
    window.addEventListener('scroll', this.updateCurrentScrollPos, false)
  },
  methods: {
    settingParallaxItem() {
      const parallaxItemList = document.querySelectorAll('.parallaxItem')
      parallaxItemList.forEach((el) => {
        const pos = el.offsetTop
        if (this.currentScrollPos > pos) {
          el.classList.add('parallaxItem--active')
        } else el.classList.remove('parallaxItem--active')
      })
    },
    updateCurrentScrollPos() {
      this.currentScrollPos = window.scrollY + window.innerHeight * 0.75 // window 4분의1 지점에서 show
      this.settingParallaxItem()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/views/about.scss';
.parallaxItem {
  position: relative;
  top: 30px;
  opacity: 0;
  transition: top 0.3s, opacity 0.3s;

  &--active {
    top: 0;
    opacity: 1;
  }
}
</style>
