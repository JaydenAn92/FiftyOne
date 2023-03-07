<template>
  <div class="combo-banner">
    <div
      :class="
        element.img
          ? 'combo-banner__item'
          : 'combo-banner__item combo-banner__item--bg'
      "
      v-for="element in ComboImgBannerData"
      :key="{ element }"
      :style="{ backgroundColor: element.bgColor ? `${element.bgColor}` : '' }"
    >
      <img
        class="combo-banner__img"
        :src="element.img"
        alt=""
        v-if="element.img"
      />
      <span
        class="combo-banner__title"
        v-if="element.title"
        v-html="element.title"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComboImgBanner',
  props: {
    ComboImgBannerData: Array
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvents)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const targetWarpper = document.querySelector('.combo-banner').offsetTop
      const target = document.querySelectorAll('.combo-banner__item')
      if (documentTop >= targetWarpper / 2 - 300) {
        for (let i = 0; i < target.length; i += 1) {
          target[i].style.animationName = 'flipImg'
        }
      }
    }
  }
}
</script>
<style lang="scss">
.combo-banner {
  position: relative;
  z-index: 10;
  background-color: #fff;
  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0;
  }
  &__item {
    position: relative;
    transition: all 1s ease;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;
    &:nth-child(1) {
      animation-delay: 0.1s;
    }
    &:nth-child(2) {
      animation-delay: 0.3s;
    }
    &:nth-child(3) {
      animation-delay: 0.5s;
    }
    &:nth-child(4) {
      animation-delay: 0.7s;
    }
    &:nth-child(5) {
      animation-delay: 0.9s;
    }
    @keyframes flipImg {
      from {
        transform: rotateX(-45deg) translateY(120px);
        opacity: 0;
      }
      to {
        transform: rotateX(0deg) translate(0px, 0px);
        opacity: 1;
      }
    }
    &:last-child {
      @include screen(large) {
        grid-row: 1 / span 2;
        grid-column: 3 / span 4;
        gap: 0;
      }
    }
    img {
      width: 100%;
    }
    &--bg {
      padding: 23px 23px 171px;
      @media only screen and (max-width: 690px) {
        padding: 10px 21px 171px;
      }
      .combo-banner__title {
        display: block;
        position: relative;
        top: initial;
        left: initial;
      }
    }
  }
  &__title {
    position: absolute;
    top: 23px;
    left: 23px;
    color: #fff;
    font-size: 22px;
    line-height: 26px;
    letter-spacing: 0;
    font-weight: 400;
    font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
    text-align: left;
    text-transform: none;
    text-align: left;
  }
}
</style>
