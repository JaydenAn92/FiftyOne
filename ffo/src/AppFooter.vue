<template>
  <FooterCom />
</template>
<script>
import FooterCom from '@/components/FooterCom.vue'
export default {
  components: {
    FooterCom
  },
  mounted() {
    const app = document.querySelector('#app')
    const footerHeight = document.querySelector('#footer .footer').clientHeight
    app.style.paddingBottom = footerHeight + 'px'
  }
}
</script>
