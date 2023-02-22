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
        <span class="dot" v-for="nav in slides" :key="nav">
          <span></span>
        </span>
      </div>
      <div class="slider-controls">
        <a class="prev" href="#">
          <font-awesome-icon icon="fa-solid fa-angle-left"
        /></a>
        <a class="next" href="#">
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
    console.log(this.slides)
    const slideLists = document.querySelectorAll('.project-slide')
    for (const item in slideLists) {
      if (item === '0') {
        slideLists[item].classList.add('current')
      }
    }
    const arrItem = Array.from(slideLists)
    const getIndexItem = (classToSearch, list) => {
      return list.findIndex((elem) => elem.classList.contains(classToSearch))
    }
    const intervalSlide = () => {
      const slideIndex = getIndexItem('current', arrItem)
      if (!slideLists.item(slideIndex).nextElementSibling) {
        slideLists.item(slideIndex).classList.remove('current')
        slideLists.item(0).classList.add('current')
      } else {
        slideLists.item(slideIndex).classList.remove('current')
        slideLists.item(slideIndex).nextElementSibling.classList.add('current')
      }
    }

    setInterval(() => {
      intervalSlide()
    }, 7000)
  }
}
</script>
