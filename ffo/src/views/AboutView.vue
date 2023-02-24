<template>
  <div class="about">
    <section class="about">
      <div class="container">
        <AboutUs />
        <Awards :awardData="awardData" />
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
    this.$parallaxShowUp()
  },
  methods: {
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
