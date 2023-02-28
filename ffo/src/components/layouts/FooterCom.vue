<template>
  <div class="footer">
    <div class="footer--content">
      <div class="footer--text">
        <h3><a href="#">The Fifty One</a></h3>
        <p>Bongeunsa-ro 18-gil 58, Gangnam-gu, Seoul, Republic of Korea</p>
      </div>
      <div class="footer--copy">
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
        <p class="copyright">© the Fiftyone Corp.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'FooterCom'
}
</script>
<style scoped>
.footer {
  position: relative;
  background-image: url(https://source.unsplash.com/T9CktnMI8TQ);
  background-color: #191919 !important;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 0;
  will-change: opacity;
  background-size: cover;
  background-position: center;
  color: #ffffff !important;
  text-align: center;
}
.footer::after {
  opacity: 0.8;
  position: absolute;
  width: 100%;
  height: 100%;
  content: '';
  left: 0;
  top: 0;
  background-color: inherit;
}
.footer a {
  color: #ffffff;
  text-decoration: none;
}
.footer--text {
  padding: 70px 0 40px;
}
.footer--text h3 {
  font-weight: 600;
}
.footer--text p {
  margin-top: 16px;
  line-height: 30px;
}
.footer--content {
  position: relative;
  z-index: 1;
}
.footer--copy {
  padding: 45px 0 70px;
}
.footer--copy .copyright {
  color: #878787;
  font-size: 12px;
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
}
.social a:active,
.social a:hover {
  opacity: 1;
}
.social li {
  list-style: none;
}
@media only screen and (max-width: 767px) {
  .footer {
    position: relative;
  }
}
</style>
