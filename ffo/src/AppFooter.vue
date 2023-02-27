<template>
  <FooterCom v-if="!this.isHome" />
</template>
<script>
import FooterCom from '@/components/FooterCom.vue'
export default {
  components: {
    FooterCom
  },
  mounted() {
    if (!this.isHome) {
      const app = document.querySelector('#app')
      const footerHeight = document.querySelector('#footer .footer').clientHeigh
      app.style.paddingBottom = footerHeight + 'px'
      console.log(this.isHome())
    }
  },
  methods: {
    isHome() {
      return document.querySelectorAll('.home').length
    }
  }
}
</script>
