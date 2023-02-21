<template>
  <div class="recruit">
    <div class="recruit--container">
      <div class="recruit--inner">
        <div class="recruit--title-area">
          <span>점심부터 휴가까지,<br class="mo-hidden"> 회사 다닐 맛 나는</span>
          <strong>THE51의 <br class="mo-hidden"> 남다른 혜택</strong><em>.</em>
        </div>
        <div class="recruit--cont-area">
          <ul class="recruit--benefits">
            <li>
              <div class="tit-wrap">
                <em>01</em>
                매일 매일 걱정 없는<br><strong>Happy Lunch</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="tit-wrap">
                <em>02</em>
                떠나고 싶을 때 떠나는<br><strong>Vacation</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="tit-wrap">
                <em>03</em>
                열심히 일한 당신께 드리는<br><strong>Reward & Gift</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="recruit--benefits">
            <li>
              <div class="tit-wrap">
                <em>04</em>
                모두가 친해지도록<br><strong>Workshop & <br>Party</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="tit-wrap">
                <em>05</em>
                아낌 없이 베푸는<br>조건 없는 Beneﬁts<br><strong>Beneﬁts</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
            <li>
              <div class="tit-wrap">
                <em>06</em>
                자기계발부터<br>역량 강화까지<br>든든한<strong>Support</strong>
              </div>
              <div class="img-wrap">
                <img>
              </div>
              <div class="txt-wrap">
                <ul>
                    <li>점심 식사용 법인카드 개인별 지급</li>
                </ul>
              </div>
            </li>
          </ul>
          <!-- <p>* 위 혜택은 프로젝트별 상이하며, 2022년도 혜택으로 매년 연장되거나 새로운 혜택으로 변경 될 수 있습니다.</p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecruitGride'
}
</script>
<style>
  dl,li,menu,ol,ul{
    list-style:none!important;
    margin:0;
    padding: 0;
  }
  .mo-hidden {
    display: block!important;
  }
  .recruit {
    background-color: #292929;
    letter-spacing: -1px;
  }
  .recruit--container {
    max-width: 1720px;
    margin: 0 auto;
    background-color: #292929;
    color: #fff;
    padding: 30px 0;
    list-style: none;
  }
  .recruit--container {
    width: 100%;
    background-color: #292929;
  }
  .recruit--inner {
    position: relative;
    width: 100%;
    display: flex;
  }
  .recruit--title-area {
    width: 25%;
    text-align: left;
    margin-left: 20px;
  }
  .recruit--title-area span {
    font-size: 20px;
    line-height: 25px;
    font-weight: bold;
  }
  .recruit--title-area strong {
    font-weight: bold;
    display: block;
    font-size: 60px;
  }
  .recruit--title-area em {
    color: #ff0000;
    font-size: 60px;
    display: inline-block;
  }
  .recruit--cont-area {
    width: auto;
    flex: 1;
    margin-right: 5px;
  }
  .recruit--benefits {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    text-align: left;
    margin-top: 50px;
  }
  .recruit--benefits li {
    width: calc(100% / 3);
    max-width: 370px;
  }
  .tit-wrap {
    display: block;
    font-size: 30px;
  }
  .tit-wrap em {
    display: block;
    font-style: inherit;
    color: rgba(255,255,255,0.8);
    margin-bottom: 5px;
  }
  .tit-wrap strong {
    font-weight: bold;
  }
  .img-wrap {
    height: 200px;
  }
  .txt-wrap {
    display: block;
  }
  .txt-wrap ul {
    padding-top: 10px;
  }
  .txt-wrap li {
    position: relative;
    color: rgba(255,255,255,0.8);
    font-size: 15px;
  }
</style>
