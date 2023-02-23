<template>
  <div class="work-template">
    <WorkTemplate
      :data="this.currentProduct"
      :partnershipLength="this.partnershipLength"
    />
  </div>
</template>

<script>
import WorkTemplate from '@/components/WorkTemplate.vue'
import ProductList from '@/assets/data/projectList.json'

export default {
  name: 'work-template',
  components: {
    WorkTemplate
  },
  data() {
    return {
      currentProduct: Array,
      partnershipLength: Number
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
      }
    }
    this.partnershipLength = this.currentProduct.partnership.length
  }
}
</script>
