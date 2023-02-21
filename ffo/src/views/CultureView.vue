<template>
  <div class="culture">
    <h1>This is an Culture page</h1>
    <TalkSlide text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas laboriosam odio sapiente eveniet illo libero suscipit voluptatem at odit. Aperiam explicabo eaque cumque dolor quod? Pariatur numquam modi voluptates nihil?" title="Lorem" subtitle="Lorem ipsum" />
  </div>
</template>

<script>
// @ is an alias to /src
import TalkSlide from '@/components/TalkSlide.vue'
export default {
  name: 'CultureView',
  components: {
    TalkSlide
  }
}
</script>
