<template>
  <div class="work-template">
    <WorkVoice
      v-if="this.currentProduct.id === 'tvn-dramavoice-season4'"
      :data="this.currentProduct"
      :partnershipLength="this.partnershipLength"
      :projectPrev="this.projectPrev"
      :projectNext="this.projectNext"
      :projectPrevId="this.projectPrevId ? this.projectPrevId : ''"
      :projectNextId="this.projectNextId ? this.projectNextId : ''"
    />
    <WorkTemplate
      v-else
      :data="this.currentProduct"
      :partnershipLength="this.partnershipLength"
      :projectPrev="this.projectPrev"
      :projectNext="this.projectNext"
      :projectPrevId="this.projectPrevId ? this.projectPrevId : ''"
      :projectNextId="this.projectNextId ? this.projectNextId : ''"
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
      partnershipLength: Number,
      projectPrev: Array,
      projectNext: Array,
      projectPrevId: String,
      projectNextId: String
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
          this.projectPrevId = ProductList[i - 1].id
        }
        if (ProductList[i + 1]) {
          this.projectNext = ProductList[i + 1]
          this.projectNextId = ProductList[i + 1].id
        }
      }
    }
    if (this.currentProduct.partnership) {
      this.partnershipLength = this.currentProduct.partnership.length
    }
  }
}
</script>
