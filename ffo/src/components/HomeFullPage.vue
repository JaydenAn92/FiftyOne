<template>
  <div class="project-fullscreen">
    <ul class="project-slides">
      <li class="project-slide" v-for="(item, i) in slides" :key="i">
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
              <span v-for="(name, i) in item.title" :key="i">
                <span>{{ name }}</span>
              </span>
            </h2>
            <router-link :to="item.anchor">View Project</router-link>
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
  unmounted() {
    clearInterval(this.runInterval)
  },
  methods: {
    navBtn(i) {
      const dots = document.querySelectorAll('.dot')
      dots.forEach((element) => {
        element.classList.remove('current')
        element.style.pointerEvents = 'none'
      })
      setTimeout(() => {
        dots.forEach((element) => {
          element.style.pointerEvents = ''
        })
      }, 1750)
      dots[i].classList.add('current')
      const Lists = document.querySelectorAll('.project-slide')
      Lists.forEach((element) => {
        element.classList.remove('current')
      })
      Lists[i].classList.add('current')
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
      for (let j = 0; j < Lists.length; j++) {
        if (j < i) {
          Lists[j].classList.remove('next')
          Lists[j].classList.add('prev')
        } else if (j > i) {
          Lists[j].classList.remove('prev')
          Lists[j].classList.add('next')
        } else {
          Lists[j].classList.remove('next')
          Lists[j].classList.remove('prev')
        }
      }
    },
    fninterval() {
      const slideLists = document.querySelectorAll('.project-slide')
      const navs = document.querySelectorAll('.dot')
      for (let i = 0; i < slideLists.length; i++) {
        if (i === 0) {
          slideLists[i].classList.add('current')
          navs[i].classList.add('current')
        } else {
          slideLists[i].classList.add('next')
        }
      }
    },
    intervalSlide() {
      const navs = document.querySelectorAll('.dot')
      const slideLists = document.querySelectorAll('.project-slide')
      const arrItem = Array.from(slideLists)
      const getIndexItem = (classToSearch, list) => {
        return list.findIndex((elem) => elem.classList.contains(classToSearch))
      }
      const slideIndex = getIndexItem('current', arrItem)
      slideLists.item(slideIndex).classList.remove('current')
      navs.item(slideIndex).classList.remove('current')
      // there isn't a next element
      if (!slideLists.item(slideIndex).nextElementSibling) {
        slideLists.item(0).classList.add('current')
        navs.item(0).classList.add('current')
        for (let i = 0; i < slideLists.length; i++) {
          slideLists.item(i).classList.remove('prev')
          if (i > 0) {
            slideLists.item(i).classList.add('next')
          }
        }
      } else {
        // there is a next element
        slideLists.item(slideIndex).nextElementSibling.classList.remove('next')
        slideLists.item(slideIndex).nextElementSibling.classList.add('current')
        navs.item(slideIndex).nextElementSibling.classList.add('current')

        for (let i = 0; i <= slideIndex; i++) {
          slideLists.item(i).classList.remove('next')
          slideLists.item(i).classList.add('prev')
        }
      }
    },
    fnPrevBtn(event) {
      const navs = document.querySelectorAll('.dot')
      const currentNavs = document.querySelector('.dot.current')
      const currentEl = document.querySelector('.project-slide.current')
      const projectLists = document.querySelectorAll('.project-slide')
      const arrItem = Array.from(projectLists)
      const getIndexItem = (classToSearch, list) => {
        return list.findIndex((elem) => elem.classList.contains(classToSearch))
      }
      if (event.target.classList.contains('prev')) {
        event.target.style.pointerEvents = 'none'
        event.target.nextElementSibling.style.pointerEvents = 'none'
        setTimeout(() => {
          event.target.style.pointerEvents = ''
          event.target.nextElementSibling.style.pointerEvents = ''
        }, 1750)
      } else {
        event.target.closest('.prev').style.pointerEvents = 'none'
        event.target.closest('.prev').nextElementSibling.style.pointerEvents =
          'none'
        setTimeout(() => {
          event.target.closest('.prev').style.pointerEvents = ''
          event.target.closest('.prev').nextElementSibling.style.pointerEvents =
            ''
        }, 1750)
      }
      const slideIndex = getIndexItem('current', arrItem)
      currentEl.classList.remove('current')
      currentNavs.classList.remove('current')
      // there isn't a previous element
      if (!currentEl.previousElementSibling) {
        projectLists.item(projectLists.length - 1).classList.remove('next')
        projectLists.item(projectLists.length - 1).classList.add('current')
        navs.item(navs.length - 1).classList.add('current')
        for (let i = 0; i < projectLists.length; i++) {
          projectLists.item(i).classList.remove('next')
          if (i < projectLists.length - 1) {
            projectLists.item(i).classList.add('prev')
          }
        }
      } else {
        // there is a previous element
        currentEl.previousElementSibling.classList.remove('prev')
        currentEl.previousElementSibling.classList.add('current')
        currentNavs.previousElementSibling.classList.add('current')
        for (let i = slideIndex; i < projectLists.length; i++) {
          projectLists.item(i).classList.add('next')
        }
      }
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
    },
    fnNextBtn(event) {
      const navs = document.querySelectorAll('.dot')
      const currentNavs = document.querySelector('.dot.current')
      const projectLists = document.querySelectorAll('.project-slide')
      const currentEl = document.querySelector('.project-slide.current')
      const arrItem = Array.from(projectLists)
      const getIndexItem = (classToSearch, list) => {
        return list.findIndex((elem) => elem.classList.contains(classToSearch))
      }
      if (event.target.classList.contains('next')) {
        event.target.style.pointerEvents = 'none'
        event.target.previousElementSibling.style.pointerEvents = 'none'
        setTimeout(() => {
          event.target.style.pointerEvents = ''
          event.target.previousElementSibling.style.pointerEvents = ''
        }, 1750)
      } else {
        event.target.closest('.next').style.pointerEvents = 'none'
        event.target.closest(
          '.next'
        ).previousElementSibling.style.pointerEvents = 'none'
        setTimeout(() => {
          event.target.closest('.next').style.pointerEvents = ''
          event.target.closest(
            '.next'
          ).previousElementSibling.style.pointerEvents = ''
        }, 1750)
      }
      const slideIndex = getIndexItem('current', arrItem)
      currentEl.classList.remove('current')
      currentNavs.classList.remove('current')
      // there isn't a next element
      if (!currentEl.nextElementSibling) {
        projectLists.item(0).classList.add('current')
        navs.item(0).classList.add('current')
        for (let i = 0; i < projectLists.length; i++) {
          projectLists.item(i).classList.remove('prev')
          if (i > 0) {
            projectLists.item(i).classList.add('next')
          }
        }
      } else {
        // there is a next element
        currentEl.nextElementSibling.classList.remove('next')
        currentEl.nextElementSibling.classList.add('current')
        currentNavs.nextElementSibling.classList.add('current')
        for (let i = 0; i <= slideIndex; i++) {
          projectLists.item(i).classList.remove('next')
          projectLists.item(i).classList.add('prev')
        }
      }
      clearInterval(this.runInterval)
      this.runInterval = setInterval(this.intervalSlide, 7000)
    }
  }
}
</script>
