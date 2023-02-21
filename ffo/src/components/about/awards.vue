<template>
    <article class="awards-list">
        <div class="awards-item" v-for="(item, index) in awardData" :key="index">
            <div class="awards-item__inr">
                <span class="awards-item__title">{{item.title}}</span>
                <span class="awards-item__desc">{{item.desc}}</span>
                <span class="awards-item__year">{{item.year}}</span>
                <router-link :to="item.link" class="awards-item__link" v-show="item.link.length"><span>{{item.title}}이동</span></router-link>
            </div>
        </div>
    </article>
</template>

<script>
export default {
  name: 'AboutAwards',
  components: {},
  props: {
    awardData: Array
  }
}
</script>

<style lang="scss">
.awards {
  &-list {
    padding: 30px;
  }
  &-item {
    position: relative;

    &:not(:last-child) {
        border-bottom: 1px solid rgba(255,255,255,0.12);
    }
    &:after {
        content:'';
        display: block;
        position: absolute;
        bottom:0;
        left:0;
        z-index: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transform-origin: 50% 100%;
        transform: perspective(1000px) rotateX(90deg);
        transition: all .4s cubic-bezier(0.2,0,0.15,1);
    }
    &:hover:after {
        background-color: #ff7061;
        opacity: 1;
        transform: perspective(1000px) rotateX(0);
    }
    &__inr {
        display: flex;
        position: relative;
        z-index: 1;
        padding: 22px;
        font-size: 16px;
        color: #fff;
    }

    &__title {
        width: 25%;
    }
    &__desc {
        flex:1;
    }
    &__year {
        width: 25%;
    }
    &__link {
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height: 100%;

        span {
            overflow: hidden;
            font-size: 0;
            width: 0;
            height: 0;
            text-indent: -99px;
        }
    }
  }
}
</style>
