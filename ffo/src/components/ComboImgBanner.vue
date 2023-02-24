<template>
    <div class="combo-banner">
        <div :class=" element.img ? 'combo-banner__item' : 'combo-banner__item--bg'" v-for="element in ComboImgBannerData" :key="{ element }" :style="{ background: `'${element.bg}'` }">
            <img class="combo-banner__img" :src="element.img" alt="" v-if="element.img">
            <span class="combo-banner__title" v-if="element.title">{{ element.title }}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'ComboImgBanner',
  props: {
    ComboImgBannerData: Array
  }
}
</script>
<style>
.combo-banner {
  position:relative;
}
.combo-banner .combo-banner__item {
  position: relative;
}
.combo-banner .combo-banner__item--bg {
}
.combo-banner .combo-banner__item img {
  width:100%;
}
.combo-banner .combo-banner__item .combo-banner__title {
  position:absolute;
  top:15px;
  left:15px;
  color:#fff;
  font-size: 22px;
  line-height: 26px;
  text-transform: none;
  letter-spacing: 0;
  font-weight: 400;
  font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif !important;
}
@media only screen and (min-width: 690px) {
.combo-banner {
  display: grid;
  grid-template-columns:repeat(4, 1fr);
  grid-template-rows:repeat(2, 1fr)
}
.combo-banner .combo-banner__item:last-child {
  grid-row: 1 / span 2;
  grid-column: 3 / span 4;
}
}
</style>
