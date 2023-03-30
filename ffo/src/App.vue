<template>
  <!-- <PageTransition /> -->
  <HeaderLayout />
  <div class="blurred">
    <!-- <router-view /> -->
    <router-view v-slot="{ Component, route }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
  <FooterCom v-show="this.isMain" />
  <TopBtn />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
<script>
// import func from 'vue-editor-bridge'
// import PageTransition from '@/components/PageTransition.vue'
import HeaderLayout from '@/components/layouts/HeaderLayout.vue'
import FooterCom from '@/components/layouts/FooterCom.vue'
import TopBtn from '@/components/TopBtn.vue'

export default {
  name: 'App',
  data() {
    return {
      isMain: null
    }
  },
  components: {
    // PageTransition,
    HeaderLayout,
    FooterCom,
    TopBtn
  },
  watch: {
    $route(to, from) {
      if (to.name === 'home') {
        this.isMain = false
      } else {
        this.isMain = true
      }
    }
  }
}
</script>
