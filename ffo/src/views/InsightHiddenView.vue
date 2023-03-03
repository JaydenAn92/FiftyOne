<template>
  <div class="news">
    <FullPageTop
      title="INSIGHT"
      subTitle="Our News"
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/work-submain-visual.jpg"
    />
    <div class="news-list">
      <router-link
        :to="{ name: 'insight-template', params: { id: insight.id } }"
        v-for="insight in insightList"
        :key="{ insight }"
        :class="`thumb-warp ${insight.size} ${
          insight.type.contents === `RECRUIT` ? `recruit` : ``
        }`"
      >
        <div
          :class="`${
            insight.type.contents === `RECRUIT` ? `recruit_item` : `news_item`
          }`"
          :style="{
            backgroundImage: `url(${insight.thumbnail})`
          }"
        >
          <span
            :class="`${
              insight.type.contents === `RECRUIT` ? `recruit_title` : ``
            }`"
            v-html="`${insight.type.contents === `RECRUIT` ? `RECRUIT` : ``}`"
          />
          <h2 v-html="insight.title" />
          <div class="date">
            <span v-html="insight.subTitle" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import insightList from '@/assets/data/insightList.json'
export default {
  components: {
    FullPageTop
  },
  data() {
    return {
      insightList: insightList
    }
  },
  mounted() {
    document.addEventListener('scroll', this.scrollEvents)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const scrollTop = document.documentElement.scrollTop
      const thumbAnimation = () => {
        const newsListEls = document.querySelectorAll('.news-list a')
        if (newsListEls) {
          newsListEls.forEach((el) => {
            if (scrollTop >= el.offsetTop) {
              el.querySelector('div').style.transform = 'none'
            }
          })
        }
      }
      thumbAnimation()
    }
  }
  // data() {
  //   return {
  //     cultureData: CultureData.workshop
  //   }
  // }
}
</script>

<style lang="scss">
.news {
  .news-list {
    width: 100vw;
    min-height: 470vh;
    position: relative;
    z-index: 10;
    background: black;
    font-size: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media only screen and (max-width: 990px) {
      min-height: 650vh;
    }
    @media only screen and (max-width: 691px) {
      min-height: 1060vh;
    }
    .thumb-warp {
      display: inline-block;
      position: relative;
      text-decoration-line: none;
      background-color: #000;
      .news_item {
        transition: opacity 300ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
        opacity: 0.75;
        transition: all ease-in-out 0.5s;
        transform: translateY(50px);
        &:hover {
          opacity: 1;
        }
      }

      > div {
        width: 100%;
        height: 100%;
        transition: all ease-in-out 0.3s;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &::before {
          background: -webkit-linear-gradient(
            top,
            rgba(255, 255, 255, 0) 0%,
            rgba(0, 0, 0, 0) 1%,
            rgba(0, 0, 0, 0.06) 16%,
            rgba(0, 0, 0, 0.4) 75%,
            rgba(0, 0, 0, 0.6) 100%
          );
          bottom: 0;
          content: '';
          display: block;
          height: 50%;
          left: 0;
          position: absolute;
          transition: all 300ms cubic-bezier(0.42, 0, 0.58, 1) 0s;
          width: 100%;
          opacity: 1;
          z-index: 0;
        }
      }
      h2,
      span {
        color: #fff;
        font-family: Chakra Petch;
      }
      h2,
      .recruit_title {
        font-size: 16px;
        font-weight: 500;
        line-height: 22px;
        letter-spacing: 1px;
        position: absolute;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        @media only screen and (max-width: 990px) {
          font-size: 14px;
          line-height: 20px;
          bottom: 13%;
        }
        @media only screen and (max-width: 470px) {
          font-size: 16px;
        }
      }
      span {
        font-size: 12px;
        line-height: 22px;
        font-weight: 400;
        font-style: italic;
        position: absolute;
        bottom: 5.5%;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
      }
      .recruit_item {
        background-color: #ff7061;
        &:hover {
          background-color: #333;
        }
      }
    }
    .mid,
    .lg {
      grid-area: span 2 / span 2 / auto / auto;
      @media only screen and (max-width: 990px) {
        grid-area: span 4 / span 4 / auto / auto;
      }
      h2 {
        font-size: 30px;
        letter-spacing: 1px;
        line-height: 26px;
        @media only screen and (max-width: 470px) {
          font-size: 19px;
          line-height: 20px;
        }
      }
      span {
        font-size: 16px;
        line-height: 22px;
        @media only screen and (max-width: 470px) {
          font-size: 13px;
        }
      }
    }
    .sm {
      grid-area: span 1 / span 1 / auto / auto;
      @media only screen and (max-width: 990px) {
        grid-area: span 2 / span 2 / auto / auto;
      }
      @media only screen and (max-width: 691px) {
        grid-area: span 4 / span 8 / auto / auto;
      }
      h2 {
        bottom: 17%;
        width: 80%;
        @media only screen and (max-width: 990px) {
          bottom: 20%;
        }
      }
      span {
        bottom: 10%;
      }
      &.recruit {
        @media only screen and (max-width: 691px) {
          grid-area: span 2 / span 8 / auto / auto;
          h2 {
            font-size: 16px;
            line-height: 20px;
            bottom: 35%;
            font-weight: 600;
            width: 69%;
          }
          span {
            bottom: 21%;
          }
        }
        span {
          bottom: 31%;
        }
        .recruit_title {
          top: 28%;
          font-style: initial;
          text-decoration: underline;
          + h2 {
            bottom: 39%;
            width: 70%;
            font-weight: 600;
          }
        }
        &:after {
          content: '';
          display: inline-block;
          background: url(http://www.the-51.com/wp-content/themes/salient/salient/img/icons/quote.png)
            no-repeat;
          width: 20px;
          height: 17px;
          position: absolute;
          right: 5%;
          bottom: 5%;
          background-size: contain;
          @media only screen and (max-width: 691px) {
            bottom: 7%;
          }
        }
      }
    }
    .lg {
      grid-area: span 2 / span 4 / auto / auto;
      @media only screen and (max-width: 989px) {
        grid-area: span 4 / span 4 / auto / auto;
      }
    }
  }
}
</style>
