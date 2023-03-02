<template>
  <div
    class="wide-banner"
    :style="{
      backgroundImage: ImgBannerData.bgImg ? `url(${ImgBannerData.bgImg})` : ''
    }"
  >
    <div
      :class="
        ImgBannerData.button
          ? 'wide-banner__container wide-banner__container--btn'
          : 'wide-banner__container'
      "
    >
      <h2 class="wide-banner__title" v-if="ImgBannerData.title">
        {{ ImgBannerData.title }}
      </h2>
      <p class="wide-banner__desc" v-if="ImgBannerData.desc">
        {{ ImgBannerData.desc }}
      </p>
      <router-link
        :to="{ name: 'insight' }"
        v-if="ImgBannerData.button"
        class="wide-banner__button"
      >
        <span>{{ ImgBannerData.button.name }}</span>
      </router-link>
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
    content: '';
    clear: both;
    max-width: 670.42px;
    width: 48.9361%;
    @media only screen and (max-width: 1000px) {
      display: none;
    }
  }
  &__container {
    padding: calc(100vw * 0.1) 0;
    max-width: 880px;
    width: 100%;
    color: #fff;
    text-align: left;
    @media only screen and (max-width: 1000px) {
      margin-left: 2.1%;
      max-width: 670.42px;
      width: 48.9361%;
    }
    @include screen(mobile) {
      margin: 0 auto;
      max-width: 320px;
      width: 100%;
    }
    &--btn {
      padding: calc(100vw * 0.05) 0;
      @media only screen and (max-width: 1000px) {
        margin-left: 0;
        max-width: 600px;
        width: 100%;
      }
      @include screen(mobile) {
        margin: 0 auto;
        max-width: 420px;
        width: 100%;
      }
      @media only screen and (max-width: 480px) {
        margin: 0 auto;
        max-width: 320px;
        width: 100%;
      }
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
    @media only screen and (max-width: 1300px) {
      font-size: 47.6px;
      line-height: 50.15px;
    }
    @media only screen and (max-width: 1000px) {
      font-size: 44.8px;
      line-height: 54.2px;
    }
    @include screen(mobile) {
      font-size: 42px;
      line-height: 51.25px;
    }
  }
  &__desc {
    color: rgba(255, 255, 255, 0.9);
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px;
  }
  &__button {
    display: block;
    margin-top: 50px;
    border-color: rgba(255, 255, 255, 0.75);
    color: rgb(255, 255, 255);
    max-width: 107.14px;
    letter-spacing: 1px;
    text-align: center;
    text-decoration: none;
    text-transform: none !important;
    border-radius: 4px;
    border: 2px solid rgba(255, 255, 255, 0.75);
    span {
      display: block;
      padding: 13px 22px;
      font-size: 14px;
      font-family: 'Chakra Petch', sans-serif;
      font-weight: 500;
      line-height: 20px;
      color: #fff;
    }
  }
}
</style>
