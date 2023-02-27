<template>
  <FullPageTop
    :title="data.title"
    :subTitle="data.subTitle"
    :bgImg="data.bgImg"
    sizeType="large"
  />
  <div class="work">
    <div class="work-info">
      <div class="work-info__container">
        <div class="work-info__wrap">
          <ul class="work-info__list">
            <li>
              <h5>Client</h5>
              <div class="work_info__content">
                <p v-for="client in data.client" :key="{ client }">
                  {{ client }}
                </p>
              </div>
            </li>
          </ul>
          <ul class="work-info__list">
            <li>
              <h5>Open</h5>
              <div class="work_info__content">
                <p v-for="open in data.open" :key="{ open }">{{ open }}</p>
              </div>
            </li>
          </ul>
        </div>
        <ul class="work-info__list work-info__list--role">
          <li>
            <h5 v-if="data.role">Role</h5>
            <h5 v-if="data.service">Service</h5>
            <div class="work_info__content" v-if="data.role">
              <p v-for="role in data.role" :key="{ role }">{{ role }}</p>
            </div>
            <div class="work_info__content" v-if="data.service">
              <p v-for="service in data.service" :key="{ service }">
                {{ service }}
              </p>
            </div>
          </li>
        </ul>
        <div class="work-info__text">
          <div class="work-info__text__header">
            <h3 v-html="data.infoTitle" />
            <p class="work-info__text__subTitle" v-if="data.infoSubTitle">
              {{ data.infoSubTitle }}
            </p>
          </div>
          <p v-html="data.infoContent" />
        </div>
      </div>
    </div>
    <div
      :class="
        contents.type ? 'work-contents work-contents__max' : 'work-contents'
      "
      v-for="contents in data.contents"
      :key="{ contents }"
      :style="{
        backgroundColor: contents.bgColor ? `#${contents.bgColor}` : '',
        backgroundImage: contents.bgImg ? `url(${contents.bgImg})` : '',
        paddingTop: contents.paddingTop ? contents.paddingTop : '',
        paddingBottom: contents.paddingBottom ? contents.paddingBottom : '',
        paddingLeft: contents.paddingLeft ? contents.paddingLeft : '',
        paddingRight: contents.paddingRight ? contents.paddingRight : ''
      }"
    >
      <div v-if="contents.src" class="work-contents__video">
        <video preload="auto" loop="" autoplay="" muted="" playsinline="">
          <source :src="contents.src" type="video/mp4" />
        </video>
        <p
          :style="{
            color: contents.textColor ? `#${contents.textColor}` : ''
          }"
        >
          Website Prototype Proposal
        </p>
      </div>
      <img
        v-else-if="contents.url"
        :src="contents.url"
        :style="{
          maxWidth: contents.maxWidth ? contents.maxWidth : ''
        }"
      />
      <div v-if="contents.title" class="work-contents__text">
        <h2 v-if="contents.title" v-html="contents.title" />
        <p v-if="contents.text" v-html="contents.text" />
      </div>
      <div
        class="work-contents__attachment"
        v-if="contents.attachmentImg"
        :style="{
          backgroundImage: `url(${contents.attachmentImg})`,
          height: contents.attachmentHeight
        }"
      ></div>
      <div v-if="contents.interview" class="work-contents__interview">
        <h2>Interview</h2>
        <TalkSlide :cultureData="contents.interview" />
      </div>
    </div>
    <div v-if="data.partnership" class="work-partnership">
      <div
        :class="
          partnershipLength >= 4
            ? 'work-partnership__container work-partnership__container--no-padding'
            : 'work-partnership__container'
        "
      >
        <h2>Partnership</h2>
        <ul class="work-partnership__list">
          <li v-for="partnership in data.partnership" :key="{ partnership }">
            <div class="work-partnership__icon">
              <img :src="partnership.url" />
            </div>
            <h5 v-html="partnership.title" />
          </li>
        </ul>
      </div>
    </div>
    <div v-if="data.result" class="work-result">
      <div class="work-result__container">
        <h2>Result</h2>
        <p v-html="data.result" />
      </div>
    </div>
    <PaginationTemplate
      :prevText="projectPrevId ? 'Previous Project' : ''"
      :nextText="projectNextId ? 'Next Project' : ''"
      prevPathName="work-template"
      nextPathName="work-template"
      :projectPrevId="projectPrevId ? projectPrevId : ''"
      :projectNextId="projectNextId ? projectNextId : ''"
      :projectPrevImg="projectPrev ? projectPrev.thumbnail : ''"
      :projectNextImg="projectNext ? projectNext.thumbnail : ''"
      :projectPrevTitle="projectPrev ? projectPrev.title : ''"
      :projectNextTitle="projectNext ? projectNext.title : ''"
    />
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import TalkSlide from '@/components/TalkSlide.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  name: 'WorkTemplate',
  components: {
    FullPageTop,
    TalkSlide,
    PaginationTemplate
  },
  props: {
    data: Object,
    partnershipLength: Number,
    projectPrev: Object,
    projectNext: Object,
    projectPrevId: String,
    projectNextId: String
  },
  mounted() {
    window.scrollTo(0, 0)
  },
  watch: {
    $route(to, from) {
      this.$router.go(to.fullPath)
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="scss">
.work {
  position: relative;
  z-index: 10;
  &-info {
    padding-top: calc(100vw * 0.1);
    padding-bottom: calc(100vw * 0.1);
    background-color: white;
    &__container {
      max-width: 1340px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      @media only screen and (max-width: 690px) {
        flex-wrap: wrap;
        max-width: 320px;
        margin: 0 auto;
      }
    }
    &__wrap {
      flex: 0.2;
      @media only screen and (max-width: 690px) {
        flex: 1;
      }
    }
    &__list {
      flex: 0.2;
      margin-bottom: 0;
      & + & {
        margin-top: 24px;
      }
      @media only screen and (max-width: 690px) {
        flex: 1;
      }
      li {
        font-family: 'Chakra Petch', 'Roboto', 'Noto Sans KR', sans-serif;
        text-align: left;
        font-size: 13px;
        line-height: 17px;
        h5 {
          font-weight: 700;
          margin-bottom: 7px;
        }
      }
      &--r ole {
        p {
          line-height: 22px;
        }
      }
    }
    &__content {
      margin-top: 8px;
      margin-bottom: 24px;
    }
    &__text {
      font-family: 'Chakra Petch', 'Roboto', 'Noto Sans KR', sans-serif;
      text-align: left;
      flex: 0.6;
      @media only screen and (max-width: 690px) {
        flex: initial;
        margin-top: 25px;
      }
      h3 {
        font-size: 24px;
        line-height: 32px;
      }
      p {
        font-size: 13px;
        line-height: 26px;
        &.work-info__text__subTitle {
          margin-top: 8px;
          font-size: 16px;
        }
      }
      strong {
        font-weight: 700;
      }
      &__header {
        margin-bottom: 30px;
      }
    }
  }
  &-contents {
    width: 100%;
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    img {
      width: 100%;
    }
    &__max {
      img {
        max-width: 50%;
        margin: 0 auto;
      }
    }
    &__video {
      position: relative;
      padding: 1% 0;
      video {
        width: 100%;
      }
      p {
        position: absolute;
        bottom: 5%;
        left: 50%;
        transform: translateX(-50%);
        font-size: 20px;
        line-height: 34px;
        font-weight: 400;
        @media only screen and (max-width: 690px) {
          font-size: 18px;
          line-height: 30.6px;
          width: 100%;
        }
      }
    }
    &__text {
      max-width: 1550px;
      margin: 0 auto;
      padding: 15% 90px 14%;
      text-align: left;
      color: white;
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      @media only screen and (max-width: 690px) {
        padding: 15% 20px 14%;
      }
      h2 {
        font-size: 56px;
        line-height: 59px;
        font-weight: 700;
        margin-bottom: 30px;
        @media only screen and (max-width: 690px) {
          font-size: 42px;
          line-height: 44.25px;
        }
      }
      p {
        font-size: 16px;
        line-height: 30px;
      }
    }
    &__attachment {
      background-attachment: fixed;
      background-position: center 0;
      background-size: cover;
    }
    &__interview {
      padding-top: calc(100vw * 0.08);
      background-color: white;
      h2 {
        font-size: 56px;
        line-height: 59px;
        font-weight: 700;
        font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      }
      .swiper-container--talk .swiper {
        padding: 3vw 0 6vw;
      }
    }
  }
  &-partnership {
    padding-top: calc(100vw * 0.08);
    padding-bottom: calc(100vw * 0.08);
    background-color: white;
    &__container {
      max-width: 1370px;
      width: 100%;
      margin: 0 auto;
      &--no-padding {
        .work-partnership__list {
          padding: 0;
        }
      }
    }
    h2 {
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      font-size: 56px;
      line-height: 59px;
      font-weight: 700;
      padding-bottom: 22px;
      position: relative;
      margin-bottom: 80px;
      @media only screen and (max-width: 690px) {
        font-size: 42px;
        line-height: 44.25px;
      }
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 3px;
        background: #6d6d6d;
      }
    }
    &__list {
      padding-right: 10%;
      padding-left: 10%;
      display: flex;
      align-items: flex-end;
      @media only screen and (max-width: 690px) {
        flex-direction: column;
        align-items: center;
        gap: 25px;
      }
      li {
        flex: 1;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h5 {
          color: #0a0a0a;
          text-align: center;
          font-family: Chakra Petch;
          font-size: 16px;
          line-height: 25px;
          font-weight: 700;
          padding-top: 35px;
        }
      }
    }
    &__icon {
      min-height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &-result {
    padding-top: calc(100vw * 0.08);
    padding-bottom: calc(100vw * 0.08);
    background-color: white;
    &__container {
      max-width: 1370px;
      width: 100%;
      margin: 0 auto;
    }
    h2 {
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      font-size: 56px;
      line-height: 59px;
      font-weight: 700;
      padding-bottom: 22px;
      position: relative;
      margin-bottom: 57px;
      @media only screen and (max-width: 690px) {
        font-size: 42px;
        line-height: 44.25px;
      }
    }
    p {
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      max-width: 950px;
      margin: 0 auto;
      font-size: 16px;
      line-height: 30px;
    }
  }
}
</style>
