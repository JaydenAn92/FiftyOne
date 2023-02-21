<template>
  <div class="culture-intro">
    <div class="culture-intro__container">
      <div class="culture-intro-text">
        <div class="culture-intro-text__title">
          <div
            class="culture-intro-text__container"
            v-for="el in title"
            :key="el"
          >
            <h2>{{ el }}</h2>
          </div>
        </div>
        <div class="culture-intro-text__content">
          <p v-html="content" />
        </div>
      </div>
      <div class="culture-intro-img">
        <div class="culture-intro-img__item" v-for="el in imgSrc" :key="el">
          <img :src="el" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CultureIntro',
  props: {
    title: Array,
    content: String,
    imgSrc: Array
  }
}
</script>

<style lang="scss">
.culture-intro {
  width: 100%;
  padding-top: calc(100vw * 0.1);
  padding-bottom: calc(100vw * 0.1);
  background: white;
  position: relative;
  z-index: 10;
  &__container {
    display: flex;
    align-items: center;
    width: 1370px;
    margin: 0 auto;
  }
  &-text {
    flex: 1;
    text-align: left;
    &__container {
      overflow: hidden;
    }
    h2 {
      font-size: 56px;
      font-weight: 700;
      line-height: 59px;
      margin-bottom: 7px;
    }
    &__title {
      margin-bottom: 40px;
    }
    &__content {
      line-height: 30px;
      max-width: 500px;
      font-size: 16px;
    }
  }
  &-img {
    flex: 1;
    min-height: 540px;
    position: relative;
    margin-left: 2%;
    &__item {
      position: absolute;
      box-shadow: 0 60px 135px rgb(0 0 0 / 14%), 0 15px 65px rgb(0 0 0 / 14%);
      &:nth-child(1) {
        top: 0;
        left: 0;
        z-index: 2;
      }
      &:nth-child(2) {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &:nth-child(3) {
        bottom: 0;
        right: 0;
        z-index: 1;
      }
    }
  }
}
</style>
