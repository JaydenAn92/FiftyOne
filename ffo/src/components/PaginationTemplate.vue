<template>
  <div class="project-pagination">
    <div
      class="project-pagination__item project-pagination__item--prev"
      v-if="projectPrevImg"
    >
      <router-link
        :to="{
          name: prevPathName,
          params: { id: projectPrevId ? projectPrevId : '' }
        }"
      >
        <div class="project-pagination-container">
          <div
            class="project-img"
            :style="{
              backgroundImage: `url(${projectPrevImg})`
            }"
          ></div>
        </div>
        <div class="project-pagination__text">
          <span v-if="prevText">{{ prevText }}</span>
          <h3 v-html="projectPrevTitle" />
        </div>
      </router-link>
    </div>
    <div
      class="project-pagination__item project-pagination__item--next"
      v-if="projectNextImg"
    >
      <router-link
        :to="{
          name: nextPathName,
          params: { id: projectNextId ? projectNextId : '' }
        }"
      >
        <div class="project-pagination-container">
          <div
            class="project-img"
            :style="{
              backgroundImage: `url(${projectNextImg})`
            }"
          ></div>
        </div>
        <div class="project-pagination__text">
          <span v-if="nextText">{{ nextText }}</span>
          <h3 v-html="projectNextTitle" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationTemplate',
  props: {
    prevText: String,
    nextText: String,
    prevPathName: String,
    nextPathName: String,
    projectPrevId: String,
    projectNextId: String,
    projectPrevImg: String,
    projectNextImg: String,
    projectPrevTitle: String,
    projectNextTitle: String
  }
}
</script>

<style lang="scss">
.project-pagination {
  width: 100vw;
  height: 15vw;
  display: flex;
  @media only screen and (max-width: 690px) {
    height: 80vh;
    flex-direction: column;
  }
  &__item {
    flex: 1;
    overflow: hidden;
    &--prev {
      .project-pagination__text {
        text-align: right;
        @media only screen and (max-width: 690px) {
          text-align: center;
        }
      }
      a {
        &:hover {
          .project-pagination__text {
            transform: translateX(40px) translateZ(0);
          }
        }
      }
    }
    &--next {
      .project-pagination__text {
        text-align: left;
        @media only screen and (max-width: 690px) {
          text-align: center;
        }
      }
      a {
        &:hover {
          .project-pagination__text {
            transform: translateX(-40px) translateZ(0);
          }
        }
      }
    }
    a {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      text-decoration: none;
      &:hover {
        .project-pagination-container::after {
          background-color: rgba($color: #000000, $alpha: 0.8);
        }
        .project-img {
          transform: scale(1.2);
        }
      }
    }

    .project-pagination-container {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: all ease-in-out 0.3s;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }
      .project-img {
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        transition: all ease-in-out 0.3s;
      }
    }
  }
  &__text {
    color: white;
    font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
    transition: all ease-in-out 0.3s;
    h3 {
      font-size: 30px;
      line-height: 36px;
      font-weight: 400;
    }
    span {
      display: block;
      text-transform: capitalize;
      font-size: 14px;
      line-height: 30px;
      font-weight: 500;
    }
  }
}
</style>
