<template>
  <div class="work-template">
    <!-- <WorkTemplate :data="$route.params" /> -->
    {{ title }}
    {{ $route.params.name }}
  </div>
</template>

<script>
// import WorkTemplate from '@/components/WorkTemplate.vue'
// import ProductList from '@/assets/data/projectList.json'

export default {
  name: 'work-template',
  components: {
    // WorkTemplate
  }
}
</script>
