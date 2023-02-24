<template>
<div class="wide-banner">
  <div class="wide-banner__text-box">
    <h2 class="wide-banner__text-box__title" v-if="ImgBannerData.title" v-html="ImgBannerData.title" />
    <p class="wide-banner__text-box__desc" v-if="ImgBannerData.desc" v-html="ImgBannerData.desc" />
  </div>
</div>
</template>
<script>
export default {
  name: 'WideImgBanner',
  props: {
    ImgBannerData: Array
  }
  // computed: {
  //   bgImgData() {
  //     return {
  //       "bannerBg": "#ddfddfd"
  //     }
  //   }
  // }
}
</script>
<style lang="scss">
.wide-banner {
  // background:url(var(bannerBg))
  &__text-box {
    &__title {}
    &__desc {}
  }
}
</style>
