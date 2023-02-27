<template>
  <article class="about-awards">
    <h5 class="parallaxItem">AWARDS</h5>
    <div class="about__heading-subject">
      <p class="parallaxItem">We’ve received many</p>
      <p class="parallaxItem">awards, and we’re not</p>
      <p class="parallaxItem">very shy about it.</p>
    </div>
    <div class="awards-list">
        <div class="awards-item parallaxItem" v-for="(item, index) in awardData" :key="index">
            <div class="awards-item__inr">
                <span class="awards-item__title">{{item.title}}</span>
                <span class="awards-item__desc">{{item.desc}}</span>
                <span class="awards-item__year">{{item.year}}</span>
                <router-link :to="item.link" class="awards-item__link" v-show="item.link.length"><span>{{item.title}}이동</span></router-link>
            </div>
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
