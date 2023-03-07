<template>
  <div class="who-main">
    <div
      class="who-main__img"
      :style="{
        backgroundImage: `url(${bgImg})`
      }"
    ></div>
    <div class="who-main__txt">
      <h5>{{ subTitle }}</h5>
      <div
        class="who-main__txt__title"
        v-for="title in this.title"
        :key="{ title }"
      >
        <h2>{{ title }}</h2>
      </div>
      <p v-html="contents" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutMain',
  props: {
    bgImg: String,
    subTitle: String,
    title: Array,
    contents: String
  },
  mounted() {
    const mainText = document.querySelector('.who-main__txt')
    const titleEls = document.querySelectorAll('.who-main__txt h2')
    setTimeout(() => {
      mainText.querySelector('h5').style.opacity = '1'
      mainText.querySelector('h5').style.transform = 'translateY(0)'
      for (let i = 0; i < titleEls.length; i += 1) {
        setTimeout(() => {
          titleEls[i].style.opacity = '1'
          titleEls[i].style.transform = 'translateY(0)'
        }, 200 + i * 100)
      }
      setTimeout(() => {
        mainText.querySelector('p').style.opacity = '1'
        mainText.querySelector('p').style.transform = 'translateY(0)'
      }, 500)
    }, 500)
  }
}
</script>

<style lang="scss">
.who-main {
  width: 100%;
  height: 100%;
  padding-top: calc(13vw);
  padding-bottom: calc(13vw);
  position: relative;
  &__txt {
    position: relative;
    width: 100%;
    max-width: 1550px;
    margin: 0 auto;
    padding: 0 90px;
    color: white;
    text-align: left;
    @media only screen and (max-width: 690px) {
      padding: 0;
      max-width: 320px;
    }
    h5 {
      color: rgba(255, 255, 255, 0.74);
      font-size: 16px;
      line-height: 25px;
      font-weight: 700;
      margin-bottom: 7px;
      transition: all ease-in-out 0.5s;
      opacity: 0;
      transform: translateY(100px);
    }
    &__title {
      overflow: hidden;
      h2 {
        font-size: 56px;
        line-height: 59px;
        font-weight: 700;
        transition: all ease-in-out 0.5s;
        opacity: 0;
        transform: translateY(100px);
        @media only screen and (max-width: 1300px) and (min-width: 1000px) {
          font-size: 47.6px;
          line-height: 50.15px;
        }
        @media only screen and (max-width: 690px) {
          font-size: 42px;
          line-height: 44.25px;
        }
      }
      & + & {
        margin-top: 7px;
      }
    }
    p {
      margin-top: 24px;
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      line-height: 30px;
      font-weight: 400;
      transition: all ease-in-out 0.5s;
      opacity: 0;
      transform: translateY(100px);
    }
  }
  &__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    &::after {
      content: '';
      display: inline-block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba($color: #0a0a0a, $alpha: 0.5);
    }
  }
}
</style>
