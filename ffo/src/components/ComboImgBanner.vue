<template>
    <div class="combo-banner">
        <div class="combo-banner__item" v-for="element in ComboImgBannerData" :key="{ element }">
            <img class="combo-banner__img" :src="element.img" alt="">
            <span class="combo-banner__desc" v-if="element.desc">{{ element.desc }}</span>
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
.combo-banner .combo-banner__item img {
  width:100%;
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
