<template>
  <div class="work">
    <FullPageTop
      title="Finding the right one is <br/> what we do best."
      subTitle="What We Made"
      bgVideo="http://www.the-51.com/wp-content/uploads/2019/06/The-Fiftyone-2019-Showreel.mp4"
      type="scroll"
    />
    <div class="project-list">
      <router-link
        :to="{ name: 'work-template', params: { id: project.id } }"
        v-for="project in projectList"
        :key="{ project }"
        :style="{
          gridColumn: project.column,
          gridRow: project.row
        }"
      >
        <div class="project-container">
          <img class="project-img" :data-src="project.thumbnail" />
          <h3
            v-html="project.thumbnailText"
            :style="{ color: project.textColor ? `#${project.textColor}` : '' }"
          />
        </div>
      </router-link>
    </div>
    <div class="work-stats white-section">
      <div class="work-stats__container">
        <h2>Project Stats</h2>
        <ul class="work-stats__list">
          <li>
            <div class="work-stats__num">
              <h2>
                <span class="work-stats__years">0</span>
              </h2>
              <div class="work-stats__symbol">
                <span>years</span>
              </div>
            </div>
            <h5>Trough years of experience Having Gained experience</h5>
          </li>
          <li>
            <div class="work-stats__num">
              <h2>
                <span class="work-stats__members">0</span>
              </h2>
              <div class="work-stats__symbol">
                <span>members</span>
              </div>
            </div>
            <h5>With specialties in each field Creative Professionals</h5>
          </li>
          <li>
            <div class="work-stats__num">
              <h2>
                <span class="work-stats__projects">0</span>
              </h2>
              <div class="work-stats__symbol">
                <span>projects</span>
              </div>
            </div>
            <h5>Focus on projects through selection and focus</h5>
          </li>
        </ul>
      </div>
    </div>
    <PaginationTemplate
      prevText="Previous"
      nextText="Next"
      prevPathName="culture"
      nextPathName="about"
      projectPrevImg="http://www.the-51.com/wp-content/uploads/2019/06/work-submain-link01.jpg"
      projectNextImg="http://www.the-51.com/wp-content/uploads/2019/06/work-submain-link02.jpg"
      projectPrevTitle="Culture"
      projectNextTitle="About Us"
    />
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import projectList from '@/assets/data/projectList.json'
import PaginationTemplate from '@/components/PaginationTemplate.vue'
let yearsCurrent = 0
let membersCurrent = 0
let projectsCurrent = 0
let flag = true
export default {
  components: {
    FullPageTop,
    PaginationTemplate
  },
  data() {
    return {
      projectList: projectList
    }
  },
  mounted() {
    flag = true
    document.querySelector('.work-stats__years').innerHTML = 0
    document.querySelector('.work-stats__members').innerHTML = 0
    document.querySelector('.work-stats__projects').innerHTML = 0
    document.addEventListener('scroll', this.scrollEvents)

    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.src = entry.target.dataset.src
          observer.unobserve(entry.target)
        }
      })
    })

    const images = document.querySelectorAll('.project-img')
    images.forEach((el) => io.observe(el))
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const thumbnailAnimation = () => {
        const projectEls = document.querySelectorAll('.project-list a')
        if (projectEls) {
          projectEls.forEach((el) => {
            if (documentTop >= el.offsetTop) {
              el.querySelector('.project-container').style.transform = 'none'
            }
          })
        }
      }
      const statsEvents = () => {
        const stats = document.querySelector('.work-stats__list')
        const year = document.querySelector('.work-stats__years')
        const member = document.querySelector('.work-stats__members')
        const project = document.querySelector('.work-stats__projects')
        const vh = window.innerHeight
        if (documentTop >= stats.offsetTop - vh && flag === true) {
          yearsCurrent = 0
          membersCurrent = 0
          projectsCurrent = 0
          const YearsInterval = () =>
            setInterval(() => {
              if (yearsCurrent >= 11) {
                return clearInterval(YearsInterval)
              } else {
                yearsCurrent = yearsCurrent += 1
                year.innerHTML = yearsCurrent
              }
            }, 100)
          YearsInterval()

          const MembersInterval = () =>
            setInterval(() => {
              if (membersCurrent >= 104) {
                return clearInterval(MembersInterval)
              } else {
                membersCurrent = membersCurrent += 1
                member.innerHTML = membersCurrent
              }
            }, 10)
          MembersInterval()

          const ProjectsInterval = () =>
            setInterval(() => {
              if (projectsCurrent >= 138) {
                return clearInterval(ProjectsInterval)
              } else {
                projectsCurrent = projectsCurrent += 1
                project.innerHTML = projectsCurrent
              }
            }, 5)
          ProjectsInterval()

          flag = false
        }
      }
      thumbnailAnimation()
      statsEvents()
    }
  }
}
</script>

<style lang="scss">
.work {
  .project {
    &-list {
      width: 100vw;
      min-height: 1000vh;
      position: relative;
      z-index: 10;
      background: white;
      font-size: 0;
      display: grid;
      grid-template-rows: repeat(2, 20vw);
      grid-template-columns: repeat(4, 1fr);
      @media only screen and (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }
      @media only screen and (max-width: 690px) {
        display: flex;
        flex-direction: column;
      }
      a {
        display: inline-block;
        position: relative;
        perspective: 2000px;
        background-color: black;
        @media only screen and (max-width: 1000px) {
          flex: 1;
        }
        @media only screen and (max-width: 690px) {
          flex: 1;
        }
        &:hover {
          .project-img {
            transform: scale(1.2);
          }
          .project-container::after {
            opacity: 1;
          }
        }
        h3 {
          font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 600;
          position: absolute;
          bottom: 5%;
          left: 2%;
          color: white;
          z-index: 1;
        }
      }
    }
    &-container {
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      transition: all ease-in-out 0.5s;
      transform: rotateX(-45deg) translateY(120px);
      @media only screen and (max-width: 1000px) {
        height: 50vw;
      }
      @media only screen and (max-width: 690px) {
        height: 90vw;
      }
      &::after {
        content: '';
        display: inline-block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        transition: all ease-in-out 0.3s;
        background-color: rgba($color: #000000, $alpha: 0.7);
        opacity: 0;
      }
    }
    &-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: all ease-in-out 0.3s;
    }
  }
  &-stats {
    padding-top: calc(100vw * 0.08);
    padding-bottom: calc(100vw * 0.08);
    background-color: white;
    &__container {
      max-width: 1370px;
      width: 100%;
      margin: 0 auto;
      &--no-padding {
        .work-partnership__list {
          padding: 0;
        }
      }
    }
    h2 {
      font-family: 'Chakra Petch', 'Noto Sans KR', sans-serif;
      color: #000000;
      font-size: 56px;
      line-height: 59px;
      font-weight: 700;
      position: relative;
      @media only screen and (max-width: 690px) {
        font-size: 42px;
        line-height: 44.25px;
      }
      span {
        color: #6d6d6d;
        font-size: 90px;
        line-height: 90px;
      }
    }
    &__num {
      display: flex;
      justify-content: center;
      align-items: flex-end;
    }
    &__list {
      gap: 2.1%;
      margin-top: 4% !important;
      display: flex;
      align-items: flex-start;
      @media only screen and (max-width: 1000px) {
        flex-direction: column;
        align-items: center;
        gap: 25px;
      }
      li {
        padding: 4%;
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
    &__icon {
      min-height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__symbol {
      span {
        font-size: 18px;
        line-height: 24px;
        color: #6d6d6d;
      }
    }
  }
  .project-pagination {
    @media only screen and (max-width: 690px) {
      height: 40vh;
    }
    &__text {
      text-align: center;
    }
  }
}
</style>
