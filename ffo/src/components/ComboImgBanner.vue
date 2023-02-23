<template>
    <div class="combo-banner">
        <div class="combo-banner__box" v-for="element in ComboImgBannerData" :key="{ element }">
            <div :class="combo-banner__item" v-if="element.img || element.bg">
                <img class="combo-banner__img" :src="element.img" :alt="element.desc">
                <span class="combo-banner__desc" v-if="element.desc">{{ element.desc }}</span>
            </div>
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
.combo-banner {position:relative;}
</style>
