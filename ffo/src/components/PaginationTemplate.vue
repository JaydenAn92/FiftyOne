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
          <span v-if="arrow" class="line"></span>
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
          <span v-if="arrow" class="line"></span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationTemplate',
  props: {
    prevText: [String, Function],
    nextText: [String, Function],
    prevPathName: [String, Function],
    nextPathName: [String, Function],
    projectPrevId: [String, Function],
    projectNextId: [String, Function],
    projectPrevImg: [String, Function],
    projectNextImg: [String, Function],
    projectPrevTitle: [String, Function],
    projectNextTitle: [String, Function],
    arrow: [Boolean, Function]
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
.project-pagination {
  width: 100%;
  height: 30vh;
  display: flex;
  @media only screen and (max-width: 690px) {
    height: 40vh;
    flex-direction: column;
  }
  @media only screen and (max-width: 690px) and (max-width: 1000px) {
    height: 65vh;
    flex-direction: column;
  }
  &__item {
    flex: 1;
    overflow: hidden;
    &--prev {
      .project-pagination__text {
        text-align: right;
        @media only screen and (max-width: 1000px) {
          text-align: center;
        }
        @media only screen and (max-width: 690px) {
          text-align: center;
        }
        .line {
          left: -20%;
          &::after {
            content: '<';
            left: 0;
          }
        }
      }
      a:has(.line) {
        &:hover {
          .project-pagination__text {
            transform: translateX(40px) translateZ(0);
            padding-left: 4%;
          }
        }
      }
    }
    &--next {
      .project-pagination__text {
        text-align: left;
        @media only screen and (max-width: 1000px) {
          text-align: center;
        }
        @media only screen and (max-width: 690px) {
          text-align: center;
        }
        .line {
          right: -20%;
          &::after {
            content: '>';
            right: 0;
          }
        }
      }
      a:has(.line) {
        &:hover {
          .project-pagination__text {
            transform: translateX(-40px) translateZ(0);
            padding-right: 4%;
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
        .line {
          transform: translateX(0) scaleX(1);
          &::after {
            transform: translateY(-50%) translateX(0);
          }
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
        @media only screen and (max-width: 690px) {
          background-color: rgba($color: #000000, $alpha: 0.8);
        }
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
    position: relative;
    @media only screen and (max-width: 690px) {
      max-width: 320px;
    }
    h3 {
      font-size: 30px;
      line-height: 36px;
      font-weight: 400;
      @media only screen and (max-width: 690px) {
        font-size: 24px;
        line-height: 28.8px;
      }
    }
    span {
      display: block;
      text-transform: capitalize;
      font-size: 14px;
      line-height: 30px;
      font-weight: 500;
    }
    .line {
      display: inline-block;
      height: 2px;
      width: 45px;
      opacity: 1;
      background-color: #fff;
      position: absolute;
      top: 50%;
      transform: translateX(-50px) scaleX(0);
      transition: all ease-in-out 0.3s;
      @media only screen and (max-width: 690px) {
        display: none;
      }
      &::after {
        position: absolute;
        color: white;
        top: 50%;
        font-size: 16px;
        transform: translateY(-50%) translateX(-50px);
        transition: all ease-in-out 0.3s;
      }
    }
  }
}
</style>
