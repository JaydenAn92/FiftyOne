<template>
  <div class="page-transition">
    <span class="mask-top"></span><span class="mask-right"></span
    ><span class="mask-bottom"></span><span class="mask-left"></span>
  </div>
</template>

<script>
export default {
  name: 'PageTransition',
  watch: {
    $route(to, from) {
      const page = document.querySelector('.page-transition')
      page.classList.remove('hidden')
      page.style.display = 'block'
      setTimeout(() => {
        page.classList.add('hidden')
      }, 800)
      setTimeout(() => {
        page.style.display = 'none'
      }, 1500)
    }
  },
  mounted() {
    const page = document.querySelector('.page-transition')
    setTimeout(() => {
      page.classList.add('hidden')
    }, 800)
    setTimeout(() => {
      page.style.display = 'none'
    }, 1500)
  }
}
</script>

<style lang="scss">
.page-transition {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10000;
  span {
    position: absolute;
    background-color: #191919;
    transition: all ease-in-out 0.5s;
  }
  .mask-top {
    top: 0;
    left: 0;
    height: 50%;
    width: 100%;
  }
  .mask-right {
    top: 0;
    right: 0;
    height: 100%;
    width: 50%;
  }
  .mask-bottom {
    bottom: 0;
    right: 0;
    height: 50%;
    width: 100%;
  }
  .mask-left {
    top: 0;
    left: 0;
    height: 100%;
    width: 50%;
  }
  &.hidden {
    .mask-top {
      transform: translateY(-100%) translateZ(0);
    }
    .mask-right {
      transform: translateX(100%) translateZ(0);
    }
    .mask-bottom {
      transform: translateY(100%) translateZ(0);
    }
    .mask-left {
      transform: translateX(-100%) translateZ(0);
    }
  }
}
</style>
