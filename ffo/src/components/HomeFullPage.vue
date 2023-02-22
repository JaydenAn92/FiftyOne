<template>
  <div>
    <ul class="project-slides">
      <li class="project-slide" v-for="item in slides" :key="item">
        <div class="bg-outer-wrap">
          <div class="bg-outer">
            <div class="bg-inner-wrap">
              <div
                class="slide-bg"
                :style="{ backgroundImage: `url('${item.bgimg}'` }"
              ></div>
            </div>
          </div>
        </div>
        <div class="project-info">
          <div class="container">
            <h2>
              <span v-for="name in item.title" :key="name">{{ name }}</span>
            </h2>
            <a :href="item.anchor">View Project</a>
          </div>
        </div>
      </li>
    </ul>
    <div class="controls-wrap">
      <div class="slider-nav">
        <button
          class="dot"
          v-for="(nav, index) in slides"
          :key="index"
          @click.prevent="navBtn(index)"
        >
          <span></span>
        </button>
      </div>
      <div class="slider-controls">
        <a class="prev" href="#" @click.prevent="fnPrevBtn">
          <font-awesome-icon icon="fa-solid fa-angle-left"
        /></a>
        <a class="next" href="#" @click.prevent="fnNextBtn">
          <font-awesome-icon icon="fa-solid fa-angle-right"
        /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFullPage',
  props: {
    slides: Array
  },
  mounted() {
    this.fninterval()
    this.runInterval = setInterval(this.intervalSlide, 7000)
  },
  methods: {
    navBtn(i) {
      console.log('clicked')
      const Lists = document.querySelectorAll('.project-slide')
      Lists.forEach((element) => {
        element.classList.remove('current')
      })
      Lists[i].classList.add('current')
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
    },
    fninterval() {
      const slideLists = document.querySelectorAll('.project-slide')
      for (const item in slideLists) {
        if (item === '0') {
          slideLists[item].classList.add('current')
        }
      }
    },
    intervalSlide() {
      const slideLists = document.querySelectorAll('.project-slide')
      const arrItem = Array.from(slideLists)
      const getIndexItem = (classToSearch, list) => {
        return list.findIndex((elem) => elem.classList.contains(classToSearch))
      }
      const slideIndex = getIndexItem('current', arrItem)
      slideLists.item(slideIndex).classList.remove('current')
      if (!slideLists.item(slideIndex).nextElementSibling) {
        slideLists.item(0).classList.add('current')
      } else {
        slideLists.item(slideIndex).nextElementSibling.classList.add('current')
      }
    },
    fnPrevBtn() {
      const projectLists = document.querySelectorAll('.project-slide')
      const currentEl = document.querySelector('.project-slide.current')
      currentEl.classList.remove('current')
      if (!currentEl.previousElementSibling) {
        projectLists.item(projectLists.length - 1).classList.add('current')
      } else {
        currentEl.previousElementSibling.classList.add('current')
      }
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
    },
    fnNextBtn() {
      const projectLists = document.querySelectorAll('.project-slide')
      const currentEl = document.querySelector('.project-slide.current')
      currentEl.classList.remove('current')
      if (!currentEl.nextElementSibling) {
        projectLists.item(0).classList.add('current')
      } else {
        currentEl.nextElementSibling.classList.add('current')
      }
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
    }
  }
}
</script>
