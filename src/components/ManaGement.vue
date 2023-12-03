<template>
    <div class="div">
      <div class="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/203f155bf6e28033b37dd6afc1f81579d90f10f9b665ac94e6acfa1838b87528?"
          class="img"
        />
        <div class="div-3"></div>
        <div class="div-4">
          <div class="div-5">NUTRITION FOR YOU</div>
          <div class="div-6">
            <router-link to="/SearCh" class="login-link">찾아보기</router-link>
            <router-link to="/LoGin" class="login-link">로그아웃</router-link>
          </div>
        </div>
        <div class="div-10">
          <div class="div-11">
            <div class="column">
              <div class="div-12">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/12174ef79e4bc1cae7194f0bbfb94acb3c641eb42c9201ea745c6d38eb3144a2?"
                  class="img-2"
                />
                <div class="div-13">음식 이름</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec4cc25fb90f405c1d71215e26dd27dddd0290bd3487932c60f1f10ab8a1d137?"
                  class="img-3"
                />
                <div class="div-14">음식 이름</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b89af0db80f744fa7ae3bf8b6692f28aa57f6c5a478792d61b7b3c819da905f1?"
                  class="img-4"
                />
                <div class="div-15">음식 이름</div>
              </div>
            </div>
            <div class="column-2">
              <div class="div-16">
                <div class="div-17">
                  <div class="div-18">먹은 전체 g수</div>
                  <div class="div-19">탄수화물</div>
                  <div class="div-20">단백치</div>
                  <div class="div-21">지방</div>
                  <div class="div-22">총 칼로리</div>
                </div>
                <div class="div-23">
                  <div class="div-24">100g</div>
                  <div class="div-25">100g</div>
                  <div class="div-26">100g</div>
                  <div class="div-27">100g</div>
                  <div class="div-28">100g</div>
                </div>
                <div class="div-29">
                  <div class="div-30">100g</div>
                  <div class="div-31">100g</div>
                  <div class="div-32">100g</div>
                  <div class="div-33">100g</div>
                  <div class="div-34">100g</div>
                </div>
                <div class="div-35">
                  <div class="div-36">100g</div>
                  <div class="div-37">100g</div>
                  <div class="div-38">100g</div>
                  <div class="div-39">100g</div>
                  <div class="div-40">100g</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .div-2 {
    flex-direction: column;
    fill: linear-gradient(
      180deg,
      rgba(203, 224, 205, 0.8) 0%,
      rgba(177, 206, 184, 0.8) 0.01%,
      rgba(203, 224, 205, 0.8) 100%
    );
    overflow: hidden;
    position: relative;
    display: flex;
    min-height: 1024px;
    width: 100%;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .img {
    position: absolute;
    inset: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
  }
  .div-3 {
    position: relative;
    background-color: rgba(255, 255, 255, 0.45);
    display: flex;
    min-height: 40px;
    width: 100%;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
    }
  }
  .div-4 {
    position: relative;
    display: flex;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
    margin: 21px 37px 0 38px;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
      margin-right: 10px;
      flex-wrap: wrap;
    }
  }
  .div-5 {
    color: #335d3c;
    text-align: center;
    flex-grow: 1;
    flex-basis: auto;
    font: 700 75px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-5 {
      font-size: 40px;
    }
  }
  .div-6 {
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-7 {
    color: #577d60;
    text-align: center;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-8 {
    color: #577d60;
    text-align: center;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-9 {
    color: #577d60;
    text-align: center;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-10 {
    position: relative;
    margin-top: 129px;
    width: 100%;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
      margin-top: 40px;
    }
  }
  .div-11 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-11 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 25%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-12 {
    position: relative;
    z-index: 1;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .img-2 {
    aspect-ratio: 1.7;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  .div-13 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 378px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 12px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      padding: 0 20px;
    }
  }
  .img-3 {
    aspect-ratio: 1.7;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  .div-14 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 378px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 12px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      padding: 0 20px;
    }
  }
  .img-4 {
    aspect-ratio: 1.7;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  .div-15 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 378px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 12px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-15 {
      padding: 0 20px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 75%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-16 {
    border: 1px solid #000;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-grow: 1;
    padding-bottom: 50px;
    flex-direction: column;
    width: 100%;
  }
  @media (max-width: 991px) {
    .div-16 {
      max-width: 100%;
    }
  }
  .div-17 {
    display: flex;
    justify-content: space-between;
    gap: 0px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .div-17 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-18 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    padding: 16px 14px 9px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-19 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    padding: 16px 49px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-19 {
      padding: 0 20px;
    }
  }
  .div-20 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    align-items: center;
    padding: 17px 60px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-20 {
      padding: 0 20px;
    }
  }
  .div-21 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    align-items: center;
    padding: 17px 60px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-21 {
      padding: 0 20px;
    }
  }
  .div-22 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    padding: 16px 47px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-22 {
      padding: 0 20px;
    }
  }
  .div-23 {
    display: flex;
    margin-top: 89px;
    flex-direction: column;
    padding: 0 72px;
  }
  @media (max-width: 991px) {
    .div-23 {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-24 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: stretch;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-24 {
      max-width: 100%;
    }
  }
  .div-25 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 0 0 216px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-25 {
      margin-left: 10px;
    }
  }
  .div-26 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin-top: -33px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  .div-27 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 219px 0 0;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-27 {
      margin-right: 10px;
    }
  }
  .div-28 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin-top: -34px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  .div-29 {
    display: flex;
    margin-top: 203px;
    flex-direction: column;
    padding: 0 72px;
  }
  @media (max-width: 991px) {
    .div-29 {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-30 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: stretch;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-30 {
      max-width: 100%;
    }
  }
  .div-31 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 0 0 216px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-31 {
      margin-left: 10px;
    }
  }
  .div-32 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin-top: -34px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  .div-33 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 220px 0 0;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-33 {
      margin-right: 10px;
    }
  }
  .div-34 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin-top: -34px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  .div-35 {
    display: flex;
    flex-direction: column;
    margin: 233px 0 40px;
    padding: 0 72px;
  }
  @media (max-width: 991px) {
    .div-35 {
      max-width: 100%;
      margin-top: 40px;
      padding: 0 20px;
    }
  }
  .div-36 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: stretch;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-36 {
      max-width: 100%;
    }
  }
  .div-37 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 0 0 215px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-37 {
      margin-left: 10px;
    }
  }
  .div-38 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin-top: -34px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  .div-39 {
    justify-content: center;
    color: #000;
    text-align: center;
    z-index: 1;
    margin: -34px 219px 0 0;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-39 {
      margin-right: 10px;
    }
  }
  .div-40 {
    justify-content: center;
    color: #000;
    text-align: center;
    margin-top: -34px;
    font: 300 32px Gmarket Sans TTF, sans-serif;
  }
  </style>