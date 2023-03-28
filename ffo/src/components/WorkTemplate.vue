<template>
  <FullPageTop
    :title="data.title"
    :subTitle="data.subTitle"
    :bgImg="data.bgImg"
    sizeType="large"
    type="scroll"
  />
  <div class="work">
    <div class="work-info white-section">
      <div class="work-info__container">
        <div class="work-info__wrap">
          <ul class="work-info__list">
            <li>
              <h5>Client</h5>
              <div class="work_info__content">
                <p v-for="client in data.client" :key="{ client }">
                  {{ client }}
                </p>
              </div>
            </li>
          </ul>
          <ul class="work-info__list">
            <li>
              <h5>Open</h5>
              <div class="work_info__content">
                <p v-for="open in data.open" :key="{ open }">{{ open }}</p>
              </div>
            </li>
          </ul>
        </div>
        <ul class="work-info__list work-info__list--role">
          <li>
            <h5 v-if="data.role">Role</h5>
            <h5 v-if="data.service">Service</h5>
            <div class="work_info__content" v-if="data.role">
              <p v-for="role in data.role" :key="{ role }">{{ role }}</p>
            </div>
            <div class="work_info__content" v-if="data.service">
              <p v-for="service in data.service" :key="{ service }">
                {{ service }}
              </p>
            </div>
          </li>
        </ul>
        <div class="work-info__text">
          <div v-if="data.infoTitle" class="work-info__text__header">
            <h3 v-html="data.infoTitle" />
            <p class="work-info__text__subTitle" v-if="data.infoSubTitle">
              {{ data.infoSubTitle }}
            </p>
          </div>
          <p v-html="data.infoContent" />
        </div>
      </div>
    </div>
    <div
      :class="
        contents.type ? 'work-contents work-contents__max' : 'work-contents'
      "
      v-for="contents in data.contents"
      :key="{ contents }"
      :style="{
        backgroundColor: contents.bgColor ? `#${contents.bgColor}` : '',
        backgroundImage: contents.bgImg ? `url(${contents.bgImg})` : '',
        paddingTop: contents.paddingTop ? contents.paddingTop : '',
        paddingBottom: contents.paddingBottom ? contents.paddingBottom : '',
        paddingLeft: contents.paddingLeft ? contents.paddingLeft : '',
        paddingRight: contents.paddingRight ? contents.paddingRight : ''
      }"
    >
      <div v-if="contents.src" class="work-contents__video">
        <video preload="auto" loop="" autoplay="" muted="" playsinline="">
          <source :src="contents.src" type="video/mp4" />
        </video>
        <p
          :style="{
            color: contents.textColor ? `#${contents.textColor}` : ''
          }"
        >
          Website Prototype Proposal
        </p>
      </div>
      <div
        v-if="contents.grid"
        class="work-contents__grid"
        :style="{
          gridTemplateColumns: contents.gridTemplateColumns
            ? contents.gridTemplateColumns
            : ''
        }"
      >
        <div
          v-for="grid in contents.grid"
          :key="{ grid }"
          class="work-contents__grid-list"
        >
          <img :data-src="grid" />
        </div>
      </div>
      <img
        v-if="contents.url"
        :data-src="contents.url"
        :style="{
          maxWidth: contents.maxWidth ? contents.maxWidth : ''
        }"
      />
      <div v-if="contents.title" class="work-contents__text">
        <h2 v-if="contents.title" v-html="contents.title" />
        <p v-if="contents.text" v-html="contents.text" />
      </div>
      <div
        class="work-contents__attachment"
        v-if="contents.attachmentImg"
        :style="{
          backgroundImage: `url(${contents.attachmentImg})`,
          height: contents.attachmentHeight
        }"
      ></div>
      <div v-if="contents.interview" class="work-contents-interview">
        <div class="work-contents-interview-title__container">
          <h2>Interview</h2>
        </div>
        <TalkSlide :cultureData="contents.interview" />
      </div>
    </div>
    <div v-if="data.partnership" class="work-partnership white-section">
      <div
        :class="
          data.partnership.length >= 4
            ? 'work-partnership__container work-partnership__container--no-padding'
            : 'work-partnership__container'
        "
      >
        <div class="work-partnership-title__container">
          <h2>Partnership</h2>
        </div>
        <ul class="work-partnership__list">
          <li
            v-for="partnership in data.partnership"
            :key="{ partnership }"
            :style="{
              width: `${100 / data.partnership.length}%`
            }"
          >
            <div class="work-partnership__icon">
              <img :src="partnership.url" />
            </div>
            <div class="work-partnership-text__container">
              <h5 v-html="partnership.title" />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="data.result" class="work-result">
      <div class="work-result__container">
        <h2>Result</h2>
        <p v-html="data.result" />
      </div>
    </div>
    <PaginationTemplate
      :prevText="projectPrev ? 'Previous Project' : ''"
      :nextText="projectNext ? 'Next Project' : ''"
      prevPathName="work-template"
      nextPathName="work-template"
      :projectPrevId="projectPrev.id ? projectPrev.id : ''"
      :projectNextId="projectNext.id ? projectNext.id : ''"
      :projectPrevImg="projectPrev ? projectPrev.thumbnail : ''"
      :projectNextImg="projectNext ? projectNext.thumbnail : ''"
      :projectPrevTitle="projectPrev ? projectPrev.title : ''"
      :projectNextTitle="projectNext ? projectNext.title : ''"
      :arrow="true"
    />
  </div>
</template>

<script>
import FullPageTop from '@/components/FullPageTop.vue'
import TalkSlide from '@/components/TalkSlide.vue'
import PaginationTemplate from '@/components/PaginationTemplate.vue'

export default {
  name: 'WorkTemplate',
  components: {
    FullPageTop,
    TalkSlide,
    PaginationTemplate
  },
  props: {
    data: [Object, Function],
    projectPrev: [Object, Function],
    projectNext: [Object, Function]
  },
  mounted() {
    window.scrollTo(0, 0)
    document.addEventListener('scroll', this.scrollEvents)
    setTimeout(() => {
      if (this.data.thumbnailText) {
        document.title = `${this.data.thumbnailText} - The 51 - digital marketing agency`
      }
    }, 1)
  },
  unmounted() {
    document.removeEventListener('scroll', this.scrollEvents)
  },
  methods: {
    animation(el) {
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    },
    scrollEvents() {
      const documentTop = document.documentElement.scrollTop
      const contentsEl = document.querySelectorAll('.work-contents')
      const partnership = document.querySelector('.work-partnership')
      const grid = document.querySelectorAll('.work-contents__grid')
      const result = document.querySelector('.work-result')
      contentsEl.forEach((el) => {
        if (documentTop >= el.offsetTop - 500 && el.querySelectorAll('img')) {
          el.querySelectorAll('img').forEach((el) => {
            el.src = el.dataset.src
          })
        }
        if (documentTop >= el.offsetTop + 500) {
          if (el.querySelector('img')) {
            this.animation(el.querySelector('img'))
          }
          if (el.querySelector('.work-contents__text')) {
            this.animation(el.querySelector('h2'))
            if (el.querySelector('p')) {
              this.animation(el.querySelector('p'))
            }
          }
          if (el.querySelector('.work-contents-interview')) {
            this.animation(
              el.querySelector('.work-contents-interview-title__container h2')
            )
          }
        }
      })
      if (partnership && documentTop >= partnership.offsetTop + 300) {
        partnership
          .querySelector('.work-partnership-title__container')
          .classList.add('active')
        const partnershipEls = partnership.querySelectorAll(
          '.work-partnership__list li'
        )
        for (let i = 0; i < partnershipEls.length; i += 1) {
          setTimeout(() => {
            this.animation(
              partnershipEls[i].querySelector('.work-partnership__icon img')
            )
            setTimeout(() => {
              this.animation(
                partnershipEls[i].querySelector(
                  '.work-partnership-text__container h5'
                )
              )
            }, 100)
          }, 500 + i * 100)
        }
      }
      for (let j = 0; j < grid.length; j += 1) {
        if (grid[j] && documentTop >= grid[j].offsetTop + 300) {
          const gridEls = grid[j].querySelectorAll('.work-contents__grid-list')
          for (let i = 0; i < gridEls.length; i += 1) {
            setTimeout(() => {
              this.animation(gridEls[i].querySelector('img'))
            }, 500 + i * 100)
          }
        }
      }
      if (result && documentTop >= result.offsetTop + 300) {
        this.animation(result.querySelector('.work-result h2'))
        this.animation(result.querySelector('.work-result p'))
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/components/work';
</style>
