<template>
<div class="wide-banner">
  <h2 class="wide-banner__title" v-if="element.title" v-html="element.desc" />
  <p class="wide-banner__desc" v-if="element.desc" v-html="element.desc" />
</div>
</template>
<script>
export default {
  name: 'WideImgBanner',
  props: {
    ImgBannerData: Array
  }
}
</script>
<style lang="scss">

</style>
