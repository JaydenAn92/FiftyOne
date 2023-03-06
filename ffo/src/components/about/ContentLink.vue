<template>
  <article :class="`about-content-link parallaxItem ${this.class}`">
    <h2 class="about-content-link__h2" v-html="title"></h2>
    <div class="about-content-link__desc" v-html="description"></div>
    <router-link :to="link" class="about-content-link__btn">
      {{ buttonText }}
      <span class="about-content-link__btn--icon">
        <font-awesome-icon icon="fa-solid fa-arrow-right" />
      </span>
    </router-link>
  </article>
</template>
<script>
export default {
  name: 'ContentLink',
  props: {
    class: String,
    title: String,
    description: String,
    buttonText: String,
    link: String
  }
}
</script>
