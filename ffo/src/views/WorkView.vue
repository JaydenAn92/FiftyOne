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
          gridColumn: project.column,
          gridRow: project.row
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
        <h3 v-html="project.thumbnailText" />
      </router-link>
    </div>
    <PaginationTemplate
      prevText="Previous"
      nextText="Next"
      prevPathName="culture"
      NextPathName="about"
      projectPrevImg="http://www.the-51.com/wp-content/uploads/2019/06/work-submain-link01.jpg"
      projectNextImg="http://www.the-51.com/wp-content/uploads/2019/06/work-submain-link02.jpg"
      projectPrevTitle="Culture"
      projectNextTitle="About Us"
    />
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import projectList from '@/assets/data/projectList.json'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  components: {
    FullPageTop,
    PaginationTemplate
  },
  data() {
    return {
      projectList: projectList
    }
  }
}
</script>

<style lang="scss">
.work {
  .project {
    &-list {
      width: 100vw;
      min-height: 1000vh;
      position: relative;
      z-index: 10;
      background: white;
      font-size: 0;
      display: grid;
      grid-template-rows: repeat(2, 20vw);
      grid-template-columns: repeat(4, 1fr);
      @media only screen and (max-width: 690px) {
        display: flex;
        flex-direction: column;
      }
      a {
        display: inline-block;
        position: relative;
        @media only screen and (max-width: 690px) {
          flex: 1;
        }
        &:hover {
          .project-img {
            transform: scale(1.2);
          }
          .project-container::after {
            opacity: 1;
          }
        }
        h3 {
          font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 600;
          position: absolute;
          bottom: 5%;
          left: 2%;
          color: white;
        }
      }
    }
    &-container {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      position: relative;
      @media only screen and (max-width: 690px) {
        height: 90vw;
      }
      &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all ease-in-out 0.3s;
        background-color: rgba($color: #000000, $alpha: 0.7);
        opacity: 0;
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      transition: all ease-in-out 0.3s;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
