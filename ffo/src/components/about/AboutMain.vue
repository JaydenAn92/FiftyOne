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

<style></style>
