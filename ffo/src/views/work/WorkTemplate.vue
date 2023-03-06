<template>
  <div class="work-template">
    <WorkVoice
      v-if="this.currentProduct.id === 'tvn-dramavoice-season4'"
      :data="this.currentProduct"
      :projectPrev="this.projectPrev"
      :projectNext="this.projectNext"
    />
    <WorkTemplate
      v-else
      :data="this.currentProduct"
      :projectPrev="this.projectPrev"
      :projectNext="this.projectNext"
    />
  </div>
</template>

<script>
import WorkTemplate from '@/components/WorkTemplate.vue'
import ProductList from '@/assets/data/projectList.json'
import WorkVoice from '@/views/work/WorkVoice.vue'

export default {
  name: 'work-template',
  components: {
    WorkTemplate,
    WorkVoice
  },
  data() {
    return {
      currentProduct: Array,
      projectPrev: Array,
      projectNext: Array
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  mounted() {
    for (let i = 0; i < ProductList.length; i += 1) {
      if (ProductList[i].id === this.$route.params.id) {
        this.currentProduct = ProductList[i]
        if (ProductList[i - 1]) {
          this.projectPrev = ProductList[i - 1]
        }
        if (ProductList[i + 1]) {
          this.projectNext = ProductList[i + 1]
        }
      }
    }
  }
}
</script>
