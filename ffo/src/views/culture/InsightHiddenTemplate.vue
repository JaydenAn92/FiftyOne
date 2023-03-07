<template>
  <div class="insight-template">
    <InsightTemplate
      v-if="this.currentProduct.id"
      :data="this.currentProduct"
      :projectPrev="this.projectPrev"
      :projectNext="this.projectNext"
      :projectPrevId="this.projectPrevId"
      :projectNextId="this.projectNextId"
    />
  </div>
</template>

<script>
import InsightTemplate from '@/components/InsightHiddenTemplate.vue'
import insightList from '@/assets/data/insightList.json'

export default {
  name: 'insight-template',
  components: {
    InsightTemplate
  },
  data() {
    return {
      currentProduct: Array,
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
    for (let i = 0; i < insightList.length; i += 1) {
      if (insightList[i].id === this.$route.params.id) {
        this.currentProduct = insightList[i]
        if (insightList[i - 1]) {
          this.projectPrev = insightList[i - 1]
          this.projectPrevId = insightList[i - 1].id
        }
        if (insightList[i + 1]) {
          this.projectNext = insightList[i + 1]
          this.projectNextId = insightList[i + 1].id
        }
      }
    }
  }
}
</script>
