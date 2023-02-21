<template>
  <div class="about-us">
    <div class="about-us-constent primary">
      <div class="primary-constent">
        <span class="flag">{{ flag }}</span>
        <h3 class="title">
          <div v-for="element in title" :key="element">{{ element }}</div>
        </h3>
        <p class="content-text">{{ paragraph }}</p>
        <ul class="social">
          <li>
            <a target="_blank" href="https://blog.naver.com/the_51">
              <font-awesome-icon icon="fa-brands fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCWD7HJBP5pbpu_NHeb6tBEw"
            >
              <font-awesome-icon icon="fa-brands fa-youtube" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/the_fiftyone/">
              <font-awesome-icon icon="fa-brands fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="about-us-constent secondary">
      <img
        class="img-with-animation skip-lazy animated-in"
        src="http://www.the-51.com/wp-content/uploads/2019/06/about-submain-visual.jpg"
        srcset="
          http://www.the-51.com/wp-content/uploads/2019/06/about-submain-visual.jpg         960w,
          http://www.the-51.com/wp-content/uploads/2019/06/about-submain-visual-600x621.jpg 600w,
          http://www.the-51.com/wp-content/uploads/2019/06/about-submain-visual-628x650.jpg 628w,
          http://www.the-51.com/wp-content/uploads/2019/06/about-submain-visual-768x795.jpg 768w
        "
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUs',
  props: {
    flag: String,
    title: Array,
    paragraph: String
  }
}
</script>

<style>
.about-us {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-color: #000;
  color: #fff;
  position: relative;
  z-index: 2;
  /* overflow: hidden; */
}
.about-us-constent {
  width: 50%;
}
.about-us-constent.primary {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
}
.about-us-constent.primary .flag {
  display: block;
  margin-bottom: 24px;
  color: #bfbfbf;
  font-size: 16px;
  line-height: 25px;
  font-weight: 700;
}
.about-us-constent.primary .title {
  margin-bottom: 24px;
  font-size: 56px;
  line-height: 59px;
  font-weight: 700;
}
.about-us-constent.primary .content-text {
  margin-bottom: 44px;
  color: #bfbfbf;
  font-size: 16px;
  line-height: 30px;
  font-weight: 400;
}
.about-us-constent .primary-constent {
  max-width: 670px;
}
.about-us-constent.secondary {
  height: 100vh;
  overflow: hidden;
}
.social {
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin-bottom: 50px;
}
.social a {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid #fff;
  opacity: 0.3;
  color: #fff;
}
.social a:active,
.social a:hover {
  opacity: 1;
}
.social li {
  list-style: none;
}
</style>
