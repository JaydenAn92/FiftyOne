<template>
  <a href="#" class="intoTop" @click.prevent="intoBtn">
    <font-awesome-icon icon="fa-solid fa-caret-up" />
  </a>
</template>

<script>
export default {
  name: 'TopBtn',
  methods: {
    intoBtn() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/topbtn';
</style>
