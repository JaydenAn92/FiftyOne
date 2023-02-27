<template>
<div class="wide-banner" :style="{ backgroundImage: ImgBannerData.bgImg ? `url(${ImgBannerData.bgImg})` : '' }">
  <div class="wide-banner__container">
    <h2 class="wide-banner__title" v-if="ImgBannerData.title" v-html="ImgBannerData.title" />
    <p class="wide-banner__desc" v-if="ImgBannerData.desc" v-html="ImgBannerData.desc" />
    <a :href="ImgBannerData.button.url" v-if="ImgBannerData.button" target="">
      <span v-html="ImgBannerData.button.desc"></span>
    </a>
  </div>
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
.wide-banner {
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:before {
      display: inline-block;
      content:"";
      clear:both;
      max-width: 670.42px;
      width: 48.9361%;
      @media only screen and (max-width: 1000px) {
        display: none;
      }
    }
  &__container {
    padding:calc(100vw * 0.10) 0;
    max-width: 880px;
    width: 100%;
    color:#fff;
    text-align: left;
    @media only screen and (max-width: 690px) {
      margin:0 auto;
      max-width: 320px;
    }
    @media only screen and (min-width: 1000px) {
      margin-left: 2.1%;
      max-width: 670.42px;
      width:48.9361%;
    }
  }
  &__title {
    margin-bottom: 24px;
    font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
    text-transform: capitalize;
    letter-spacing: 0;
    font-size: 56px;
    line-height: 66px;
    font-weight: 700;
    -webkit-font-smoothing: antialiased;
    @media only screen and (max-width: 690px) {
      font-size: 42px;
      line-height: 51.25px;
    }
    @media only screen and (min-width: 690px) {
      font-size: 44.8px;
      line-height: 54.2px;
    }
    @media only screen and (min-width: 1000px) {
      font-size: 47.5px;
      line-height: 50.15px;
    }
  }
  &__desc {
    color:rgba(255,255,255,.9);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }

}
</style>
