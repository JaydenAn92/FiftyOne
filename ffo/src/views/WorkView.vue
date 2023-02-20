<template>
  <div class="work">
    <Nav></Nav>
    <h1>This is an work page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/views/NavView.vue'

export default {
  name: 'WorkView',
  components: {
    Nav
  }
}
</script>
