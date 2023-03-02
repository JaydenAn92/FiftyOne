export default {
  install(Vue) {
    // parallax scroll show and up motion
    Vue.config.globalProperties.$parallaxShowUp = function () {
      const parallaxItemList = document.querySelectorAll('.parallaxItem')
      if (!parallaxItemList.length) return
      settingParallaxItem(parallaxItemList)
    }
    let currentScrollPos = 0
    const settingParallaxItem = (parallaxItemList) => {
      currentScrollPos = window.scrollY + window.innerHeight * 0.75
      parallaxItemList.forEach((el) => {
        const clientRect = el.getBoundingClientRect()
        const relativeTop = clientRect.top
        const scrolledTopLength = window.pageYOffset
        const absoluteTop = scrolledTopLength + relativeTop
        if (currentScrollPos > absoluteTop) {
          el.classList.add('parallaxItem--active')
        } else {
          el.classList.remove('parallaxItem--active')
        }
      })
    }
  }
}
