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
                <p>{{ data.open }}</p>
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
          <h3 v-html="data.infoTitle" />
          <p v-html="data.infoContent" />
        </div>
      </div>
    </div>
    <div
      :class="img.type ? 'work-img work-img__max' : 'work-img'"
      v-for="img in data.img"
      :key="{ img }"
      :style="{
        backgroundColor: `#${img.bgColor}`,
        backgroundImage: `url(${img.bgImg})`,
        paddingTop: img.paddingTop,
        paddingBottom: img.paddingBottom,
        paddingLeft: img.paddingLeft,
        paddingRight: img.paddingRight
      }"
    >
      <img
        :src="img.url"
        :style="{
          maxWidth: img.maxWidth
        }"
      />
    </div>
    <div class="work-partnership">
      <div class="work-partnership__container">
        <h2>Partnership</h2>
        <ul class="work-partnership__list">
          <li v-for="partnership in data.partnership" :key="{ partnership }">
            <div class="work-partnership__icon">
              <img :src="partnership.url" />
            </div>
            <h5>{{ partnership.title }}</h5>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'

export default {
  name: 'WorkTemplate',
  components: {
    FullPageTop
  },
  props: {
    data: Object
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
      &--role {
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
      }
      h3 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
      }
      p {
        font-size: 13px;
        line-height: 26px;
      }
      strong {
        font-weight: 600;
      }
    }
  }
  &-img {
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
  }
  &-partnership {
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
}
</style>
