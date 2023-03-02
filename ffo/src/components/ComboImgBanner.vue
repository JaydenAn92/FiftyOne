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
  methods: {
    textFilter(el) {
      el.splits('<br/>')
      console.log(el)
    }
  }
}
</script>
<style lang="scss">
.combo-banner {
  position: relative;
  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0;
  }
  &__item {
    position: relative;
    &:last-child {
      @include screen(large) {
        grid-row: 1 / span 2;
        grid-column: 3 / span 4;
        gap: 0;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
    &--bg {
      .combo-banner__title {
        padding: 0 21px 171px;
        position: relative;
        top: initial;
        left: initial;
        @include screen(large) {
          padding: 23px;
        }
      }
    }
  }
  &__title {
    position: absolute;
    top: 23px;
    left: 23px;
    p {
      color: #fff;
      font-size: 22px;
      line-height: 26px;
      letter-spacing: 0;
      font-weight: 400;
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
      text-align: left;
      text-transform: none;
    }
  }
}
</style>
