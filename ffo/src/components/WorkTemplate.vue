<template>
  <FullPageTop
    :title="data.title"
    :subTitle="data.subTitle"
    :bgImg="data.bgImg"
  />
  <div class="work">
    <div class="work-info">
      <div class="work-info__container">
        <div class="work-info__wrap">
          <ul class="work-info__list">
            <li>
              <h5>Client</h5>
              <p>{{ data.client }}</p>
            </li>
          </ul>
          <ul class="work-info__list">
            <li>
              <h5>Open</h5>
              <p>{{ data.open }}</p>
            </li>
          </ul>
        </div>
        <ul class="work-info__list work-info__list--role">
          <li>
            <h5>Role</h5>
            <p v-for="role in data.role" :key="{ role }">{{ role }}</p>
          </li>
        </ul>
        <div class="work-info__text">
          <h3>{{ data.infoTitle }}</h3>
          <p v-html="data.infoContent"></p>
        </div>
      </div>
    </div>
    <div
      :class="img.type ? 'work-img work-img__max' : 'work-img'"
      v-for="img in data.img"
      :key="{ img }"
    >
      <img :src="img.url" />
    </div>
    <div class="work-partnership">
      <div class="work-partnership__container">
        <h2>Partnership</h2>
        <ul class="work-partnership__list">
          <li v-for="partnership in data.partnership" :key="{ partnership }">
            <div :class="partnership.icon">
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
    }
    &__wrap {
      flex: 0.2;
    }
    &__list {
      flex: 0.2;
      li {
        font-family: 'Chakra Petch', 'Roboto', 'Noto Sans KR', sans-serif;
        text-align: left;
        font-size: 13px;
        line-height: 17px;
        h5 {
          font-weight: 700;
          margin-bottom: 7px;
        }
        p {
          margin-top: 8px;
          margin-bottom: 24px;
        }
      }
      &--role {
        p {
          line-height: 22px;
          margin-top: 0 !important;
          margin-bottom: 0 !important;
        }
      }
    }
    &__text {
      font-family: 'Chakra Petch', 'Roboto', 'Noto Sans KR', sans-serif;
      text-align: left;
      flex: 0.6;
      h3 {
        font-size: 24px;
        line-height: 32px;
        margin-bottom: 30px;
      }
      p {
        font-size: 13px;
        line-height: 26px;
      }
    }
  }
  &-img {
    width: 100%;
    background-color: white;
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
    padding-top: calc(100vw * 0.1);
    padding-bottom: calc(100vw * 0.1);
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
  }
}
</style>
