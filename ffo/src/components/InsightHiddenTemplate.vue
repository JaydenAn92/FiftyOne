<template>
  <div class="news-detail-container">
    <FullPageTop
      :title="data.title"
      :subTitle="data.subTitle"
      :bgImg="data.bg"
      type="scroll"
    />
    <div class="news-detail-warp">
      <div class="news-detail">
        <div class="news-contents">
          <h4 v-if="data.newsTitle">{{ data.newsTitle }}</h4>
          <div
            :class="newsDetail"
            v-for="newsDetail in data.detail"
            :key="{ newsDetail }"
          >
            <div class="logo-title-warp" v-if="newsDetail.newsDesc.logoImg">
              <div class="logo-title-img">
                <img :src="newsDetail.newsDesc.logoImg" />
              </div>
              <div class="logo-title-text" v-if="newsDetail.newsDesc.logoText">
                <p>{{ newsDetail.newsDesc.logoText }}</p>
              </div>
            </div>

            <div
              v-for="newsDetailText in newsDetail.newsDesc"
              :key="{ newsDetailText }"
              :class="{ newsDetailText }"
            >
              <img
                class="par-img"
                v-if="newsDetailText.parImg"
                :src="newsDetailText.parImg"
              />
              <img
                class="par-img-center par-img"
                v-if="newsDetailText.parImgCenter"
                :src="newsDetailText.parImgCenter"
              />
              <p class="par-desc-center" v-if="newsDetailText.parDescCenter">
                {{ newsDetailText.parDescCenter }}
              </p>
              <p class="par-desc" v-if="newsDetailText.parDesc">
                {{ newsDetailText.parDesc }}
              </p>
              <p class="par-title-s" v-if="newsDetailText.parTitleSm">
                <strong>{{ newsDetailText.parTitleSm }}</strong>
              </p>
              <p class="par-info" v-if="newsDetailText.parInfo">
                {{ newsDetailText.parInfo }}
              </p>
              <h4 class="par-inter-title" v-if="newsDetailText.parTitleLg">
                <strong>{{ newsDetailText.parTitleLg }}</strong>
              </h4>
            </div>

            <div
              v-for="newsInterview in newsDetail.newsDesc"
              :key="{ newsInterview }"
              :class="{ newsInterview }"
            >
              <div class="par-inter-img" v-if="newsInterview.parInterviewImg">
                <img :src="newsInterview.parInterviewImg" />
              </div>
              <strong
                class="par-inter-sub"
                v-if="newsInterview.parInterviewTitle"
                >{{ newsInterview.parInterviewTitle }}</strong
              >
              <p class="par-inter-desc" v-if="newsInterview.parIntervieDesc">
                {{ newsInterview.parIntervieDesc }}
              </p>
            </div>

            <div
              :class="`recruit-warp-outer ${
                data.type.contents === `RECRUIT` ? `recruit` : ``
              }`"
            >
              <div
                class="recruit-warp-inner"
                v-for="recruitDetail in newsDetail.newsDesc"
                :key="{ recruitDetail }"
              >
                <div class="recruit-inner">
                  <h4 class="recruit-tit">
                    <span>{{ recruitDetail.recruitTitle }}</span>
                  </h4>
                  <p class="recruit-desc" v-if="recruitDetail.recruitDesc">
                    {{ recruitDetail.recruitDesc }}
                  </p>
                  <span class="recruit-sub" v-if="recruitDetail.recruitSub">{{
                    recruitDetail.recruitSub
                  }}</span>
                  <span class="recruit-quote"></span>
                </div>
              </div>
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
  padding-top: calc(50vw * 0.1);
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
      .par-desc {
        padding-bottom: 27px;
        display: inline-block;
        &.parImg {
          padding-bottom: 0;
        }
        &.parTitle {
          padding-bottom: 0;
        }
      }
      h4,
      .par-inter-title > strong {
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
      .parInterTitle {
        padding-bottom: 20px !important;
      }
      .par-inter-title {
        padding-bottom: 1% !important;
        margin: 35px 0 0 0 !important;
      }
      .par-img {
        width: 100%;
        margin-bottom: 2%;
      }
      .par-desc-center {
        text-align: center;
        padding-bottom: 27px;
      }
      .par-img-center {
        max-width: 660px;
        width: 100%;
        text-align: center;
        display: inherit;
        padding-bottom: 27px;
        margin: 15px auto;
        @media only screen and (max-width: 1000px) {
          max-width: 600px;
          @media only screen and (max-width: 690px) {
            max-width: 420px;
            @media only screen and (max-width: 480px) {
              max-width: 320px;
            }
          }
        }
      }
      .par-title-s > strong {
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
  .logo-title-warp {
    display: flex;
    justify-content: left;
    padding-bottom: 27px;
    .logo-title-img {
      width: 35px;
      height: 15px;
      > img {
        display: inline-block;
        width: 100%;
      }
    }
    .logo-title-text {
      margin-left: 15px;
      width: 100%;
      > p {
        font-size: 16px;
        font-weight: 400;
        color: #000;
      }
    }
  }
  .newsInterview {
    .par-desc {
      display: block;
    }
    .par-inter-img {
      &::after {
        display: inline-block;
        clear: both;
        content: '';
      }
      > img {
        width: 234px;
        height: 234px;
        margin-right: 20px;
        float: left;
      }
      @media only screen and (max-width: 1000px) {
        float: initial;
        margin: 0 auto 25px;
        width: 280px;
        height: 280px;
      }
    }
    .par-inter-sub {
      font-weight: 600;
      line-height: 1.8;
    }
    .par-inter-desc + .par-inter-desc {
      padding-top: 27px;
    }
  }
  .recruit-warp-inner {
    .recruit-inner {
      @media only screen and (max-width: 690px) {
        font-size: 18px;
        line-height: 30.6px;
      }
      .recruit-tit > span {
        text-decoration: underline;
      }
      .recruit-desc {
        margin-bottom: 20px;
      }
      .recruit-sub {
        position: relative;
        padding-left: 30px;
        font-size: 16px;
        &:before {
          position: absolute;
          display: block;
          top: 50%;
          left: 0;
          width: 20px;
          height: 2px;
          content: ' ';
          -ms-transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          background-color: #fff;
        }
      }
      .recruit-quote {
        right: 30px;
        bottom: 30px;
        height: 17px;
        width: 19px;
        display: block;
        background-image: url(http://www.the-51.com/wp-content/themes/salient/salient/img/icons/quote.png);
        position: absolute;
      }
    }
  }
  .recruit-warp-outer.recruit {
    position: relative;
    background-color: #ff7061;
    padding: 8% 10%;
    margin-bottom: 60px;
    color: #fff;
    font-size: 20px;
    line-height: 34px;
    letter-spacing: 0;
  }
}
</style>
