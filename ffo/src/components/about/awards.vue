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
  @import '@/assets/scss/components/awards.scss'
</style>
