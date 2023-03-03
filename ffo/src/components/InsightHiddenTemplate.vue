<template>
  <div class="news-detail-container">
    <FullPageTop
      :title="data.detail.newsTitle"
      :subTitle="data.subTitle"
      :bgImg="data.bg"
      type="scroll"
    />
    <div class="news-detail-warp">
      <div class="news-detail">
        <div class="news-contents">
          <h4 v-if="data.detail.newsTitle">{{ data.detail.newsTitle }}</h4>
          <div class="logo-title-warp">
            <div class="logo-title-img" v-if="data.detail.logoTitle.logoImg">
              <img :data-src="data.detail.logoTitle.logoImg" />
            </div>
            <div class="logo-title-text" v-if="data.detail.logoTitle.logoText">
              <img :data-src="data.detail.logoTitle.logoText" />
            </div>
          </div>
          <div class="news-info">
            <div v-for="newsDesc in data.detail.newsDesc" :key="{ newsDesc }">
              <strong class="par-title" v-if="newsDesc.parTitle">{{
                newsDesc.parTitle
              }}</strong>
              <p class="par-desc" v-if="newsDesc.parDesc">
                {{ newsDesc.parDesc }}
              </p>
              <p class="par-info" v-if="newsDesc.parInfo">
                {{ newsDesc.parInfo }}
              </p>
              <img
                class="par-img"
                v-if="newsDesc.parImg"
                :src="newsDesc.parImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <PaginationTemplate
      :prevText="projectPrevId ? 'Previous Project' : ''"
      :nextText="projectNextId ? 'Next Project' : ''"
      prevPathName="insight-template"
      nextPathName="insight-template"
      :projectPrevId="projectPrevId ? projectPrevId : ''"
      :projectNextId="projectNextId ? projectNextId : ''"
      :projectPrevImg="projectPrev ? projectPrev.thumbnail : ''"
      :projectNextImg="projectNext ? projectNext.thumbnail : ''"
      :projectPrevTitle="projectPrev ? projectPrev.title : ''"
      :projectNextTitle="projectNext ? projectNext.title : ''"
      :arrow="true"
    />
  </div>
</template>
<script>
import FullPageTop from '@/components/FullPageTop.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  components: {
    FullPageTop,
    PaginationTemplate
  },
  props: {
    data: [Object, Function],
    projectPrev: [Object, Function],
    projectNext: [Object, Function],
    projectPrevId: [String, Function],
    projectNextId: [String, Function]
  }
}
</script>
<style lang="scss">
.news-detail-warp {
  position: relative;
  z-index: 10;
  font-family: 'Chakra Petch', 'Roboto', 'Noto Sans KR', sans-serif;
  padding-top: calc(100vw * 0.1);
  padding-bottom: calc(100vw * 0.1);
  background-color: white;
  .news-detail {
    text-align: left;
    max-width: 1550px;
    margin: 0 auto;
    padding: 0 90px;
    .news-contents {
      max-width: 1000px;
      margin: 0 auto;
      font-size: 14px;
      color: #333;
      line-height: 1.8;
      .news-info > div {
        padding-bottom: 27px;
        display: inline-block;
        &:last-child {
          padding-bottom: 0;
        }
      }
      h4 {
        font-size: 20px;
        line-height: 34px;
        margin-bottom: 4%;
        margin-top: 10px;
        font-weight: 600;
        @media only screen and (max-width: 690px) {
          font-size: 18px;
          line-height: 30.6px;
        }
      }
      .par-img {
        width: 100%;
      }
      .par-title {
        font-weight: 600;
      }
    }
    @media only screen and (max-width: 1000px) {
      max-width: 600px;
      padding: 0;
    }
    @media only screen and (max-width: 690px) {
      max-width: 420px;
    }
    @media only screen and (max-width: 480px) {
      max-width: 320px;
    }
  }
}
</style>
