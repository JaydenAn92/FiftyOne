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
        :style="{
          width: project.width,
          height: project.height
        }"
      >
        <div class="project-container">
          <div
            class="project-img"
            :style="{
              backgroundImage: `url(${project.thumbnail})`
            }"
          ></div>
        </div>
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
  width: 100vw;
  min-height: 100vh;
  position: relative;
  z-index: 10;
  background: white;
  font-size: 0;
  display: flex;
}
.project-list a {
  display: inline-block;
  flex: 1;
}
.project-container {
  width: 100%;
  height: 100%;
}
.project-img {
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
