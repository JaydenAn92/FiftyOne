<template>
  <!-- <FooterCom /> -->
  <FooterCom v-show="this.isMain" />
</template>
<script>
import FooterCom from '@/components/FooterCom.vue'
export default {
  data() {
    return {
      isMain: null
    }
  },
  components: {
    FooterCom
  },
  methods: {
    // changeRoute() {
    //   const app = document.querySelector('#app')
    //   const footer = document.querySelector('#footer .footer')
    //   footer.style.display = 'block'
    //   const footerHeight = document.querySelector('#footer .footer').clientHeigh
    //   app.style.paddingBottom = footerHeight + 'px'
    //   console.log('changeRoute')
    //   console.log(app)
    //   console.log(footerHeight)
    // }
  },
  watch: {
    $route(to, from) {
      if (to.name === 'home') {
        this.isMain = false
      } else {
        this.isMain = true
      }
      console.log(to.name)
    }
  }
}
</script>
