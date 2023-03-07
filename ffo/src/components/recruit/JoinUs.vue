<template>
  <article class="recruit-joinus">
    <div class="inner">
      <div class="txt-wrap">
        <h3 class="tit">WANT TO JOIN US?</h3>
        <span class="desc"
          >이력서 및 포트폴리오 첨부하여 <br class="pc-hidden" />메일 제목
          “입사지원” 표기 후 메일로 접수</span
        >
        <div class="email-wrap">
          recruit@the-51.com
          <input type="hidden" id="email-address" value="recruit@the-51.com" />
          <div
            class="recruit-pointer"
            style="top: 1453px; left: 255px; opacity: 0; z-index: -1"
          ></div>
        </div>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  name: 'JoinUs'
}
</script>
<style lang="scss">
@import '@/assets/scss/views/recruit.scss';
</style>
