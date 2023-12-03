<template>
    <div class="div">
      <div class="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/61fd20d886db0b7bed240efaf5a1877cdc713d59311a9d8465885c3e98942390?"
          class="img"
        />
        <div class="div-3"></div>
        <div class="div-4">
          <div class="div-5">
            <div class="column">
              <div class="div-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/91a9d54e93de7895745de82a3167b11c90be0ef68dbc2272085ed322a92d5292?"
                  class="img-2"
                />
                <div class="div-7">음식 이름</div>
                <div class="div-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b377e09f27107342d0bb1f85a2451eeb0426936d0bea0ec0c35698daa9b87973?"
                    class="img-3"
                  />
                  <div class="div-9">
                    매장 이름<br />매장 설명<br /><br />매장 주소
                  </div>
                </div>
              </div>
            </div>
            <div class="column-2">
              <div class="div-10">
                <div class="div-11">
                  <div class="div-12">이전 기록</div>
                  <div class="div-13">회원 관리</div>
                  <div class="div-14">로그아웃</div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/675e170e4347e891a70e6daaec865f3513fb455b1693a8cae15ccbdbc312c049?"
                  class="img-4"
                />
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
    width: 100%;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
    }
  }
  .div-5 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-5 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 33%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column {
      width: 100%;
    }
  }
  .div-6 {
    position: relative;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-6 {
      max-width: 100%;
    }
  }
  .img-2 {
    aspect-ratio: 1.33;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 991px) {
    .img-2 {
      max-width: 100%;
    }
  }
  .div-7 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 516px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 28px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-7 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-8 {
    background-color: #f0ffd1;
    display: flex;
    flex-direction: column;
    padding: 0 20px 50px;
  }
  @media (max-width: 991px) {
    .div-8 {
      max-width: 100%;
    }
  }
  .img-3 {
    aspect-ratio: 2.48;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
  }
  @media (max-width: 991px) {
    .img-3 {
      max-width: 100%;
    }
  }
  .div-9 {
    color: #000;
    text-align: center;
    align-self: center;
    margin: 12px 0 68px;
    font: 700 75px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-9 {
      font-size: 40px;
      margin-bottom: 40px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 67%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-10 {
    position: relative;
    display: flex;
    margin-top: 15px;
    flex-grow: 1;
    flex-direction: column;
    align-items: end;
  }
  @media (max-width: 991px) {
    .div-10 {
      max-width: 100%;
    }
  }
  .div-11 {
    display: flex;
    margin-right: 58px;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-11 {
      max-width: 100%;
      margin-right: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-12 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-13 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-14 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .img-4 {
    aspect-ratio: 1.05;
    object-fit: contain;
    object-position: center;
    width: 100%;
    overflow: hidden;
    align-self: stretch;
    margin-top: 22px;
  }
  @media (max-width: 991px) {
    .img-4 {
      max-width: 100%;
    }
  }
  </style>