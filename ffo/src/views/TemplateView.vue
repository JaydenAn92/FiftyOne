<template>
  <div>
    <!-- <FullPageTop
      title="Capacity Building Leader Workshop 2019"
      subTitle="The Fiftyone Insight"
      bgImg="http://www.the-51.com/wp-content/uploads/2019/06/culture-insight-visual.jpg"
    /> -->
    <h1>string 바인딩</h1>
    <h1>Hello {{ userName }}</h1>
    <br />

    <h1>html</h1>
    <div v-html="htmlString"></div>

    <br />

    <h1>v-model 양방향 바인딩</h1>
    <input type="text" v-model="userName" />

    <br />

    <h1>@click methods</h1>
    <button @click="myFunction">클릭</button>
    <button @click="increaseCounter">Add 1</button>
    <p>{{ counter }}</p>
    <br />

    <h1>스타일 바인딩</h1>
    <div :style="style1">스타일 바인딩</div>
    <button @click="style1.color = 'blue'">색상바꾸기</button>
    <div></div>

    <br />

    <h1>v-for</h1>
    <ul>
      <li v-for="element in data" :key="{ element }">{{ element.title }}</li>
    </ul>

    <br />

    <h1>v-if v-else</h1>
    <div v-if="isTrue" @click="change">true</div>
    <div v-else @click="change">false</div>
  </div>
</template>

<script>
// import FullPageTop from '@/components/FullPageTop.vue'
export default {
  name: 'TemplateView',
  // components: {
  //   FullPageTop
  // },
  methods: {
    change() {
      if (this.isTrue) {
        this.isTrue = false
      } else {
        this.isTrue = true
      }
    },
    myFunction() {
      console.log(this.userName)
    },
    increaseCounter() {
      this.counter += 1
    }
  },
  data() {
    return {
      isTrue: true,
      data: [
        {
          id: 0,
          title: 'Sinrim station 30 meters away'
        },
        {
          id: 1,
          title: 'Changdong Aurora Bedroom(Queen-size)'
        }
      ],
      userName: 'the-51',
      htmlString: '<p style="color:red;">The-51</p>',
      style1: {
        color: 'green',
        fontSize: '30px'
      },
      counter: 0
    }
  }
}
</script>

<style></style>
