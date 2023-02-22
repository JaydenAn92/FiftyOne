<template>
  <div class="work">
    <FullPageTop
      title="Finding the right one is <br/> what we do best."
      subTitle="What We Made"
      bgVideo="http://www.the-51.com/wp-content/uploads/2019/06/The-Fiftyone-2019-Showreel.mp4"
    />
    <div class="project-list">
      <router-link
        :to="{ name: 'work-template', params: { id: project.id } }"
        v-for="project in projectList"
        :key="{ project }"
      >
        <img :src="project.thumbnail" />
      </router-link>
    </div>
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import projectList from '@/assets/data/projectList.json'

export default {
  components: {
    FullPageTop
  },
  data() {
    return {
      projectList: projectList
    }
  }
}
</script>

<style>
.project-list {
  width: 100%;
  display: flex;
  position: relative;
  z-index: 10;
  background: white;
}
</style>
