<template>
    <div class="div">
      <div class="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14ea9ba1d7a5a70e70856b2576a14c7675088736ad38413d149d2eb5577f71c9?"
          class="img"
        />
        <div class="div-3"></div>
        <div class="div-4">
          <div class="div-5">
            <div class="column">
              <div class="div-6">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/11cdb983258b48854815e626b6aecf7cd3985cdbe78d501159102303edb42a6f?"
                  class="img-2"
                />
                <div class="div-7">음식 이름</div>
                <div class="div-8">
                  <div class="div-9">
                    <div class="column-2"><div class="div-10">추천음식</div></div>
                    <div class="column-3">
                      <div class="div-11">
                        <div class="div-12">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b84dc97545bb0a4e83a5533bdf95cceb93a8af1b5970c1783693028f7aaac955?"
                            class="img"
                          />
                          <div class="div-13">지도</div>
                        </div>
                        <div class="div-14">음식 이름</div>
                        <div class="div-15">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb32c2544e664e261bde9d1dc940d16f0b38919bb6ac8b35b849e6999c323bd?"
                            class="img"
                          />
                          <div class="div-16">지도</div>
                        </div>
                        <div class="div-17">음식 이름</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column-4">
              <div class="div-18">
                <div class="div-19">
                  <div class="div-20">이전 기록</div>
                  <div class="div-21">회원 관리</div>
                  <div class="div-22">로그아웃</div>
                </div>
                <div class="div-23">
                  <div class="div-24">
                    <div class="div-25">
                      <div class="div-26">탄수화물</div>
                      <div class="div-27"></div>
                      <div class="div-28">100g</div>
                    </div>
                    <div class="div-29"></div>
                    <div class="div-30">
                      <div class="div-31">단백질</div>
                      <div class="div-32"></div>
                      <div class="div-33">100g</div>
                    </div>
                    <div class="div-34"></div>
                    <div class="div-35">
                      <div class="div-36">지방</div>
                      <div class="div-37"></div>
                      <div class="div-38">100g</div>
                    </div>
                  </div>
                  <div class="div-39"></div>
                  <div class="div-40">
                    <div class="div-41">총 칼로리</div>
                    <div class="div-42"></div>
                    <div class="div-43">100kcal</div>
                  </div>
                </div>
                <div class="div-44">
                  <div class="div-45">
                    <div class="column-5">
                      <div class="div-46">
                        <div class="div-47">100g</div>
                        <div class="div-48"></div>
                        <div class="div-49">100g</div>
                      </div>
                    </div>
                    <div class="column-6">
                      <div class="div-50">
                        <div class="div-51">100g</div>
                        <div class="div-52">100kcal</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="div-53">
                  <div class="div-54">
                    <div class="column-7">
                      <div class="div-55">
                        <div class="div-56">100g</div>
                        <div class="div-57"></div>
                        <div class="div-58">100g</div>
                      </div>
                    </div>
                    <div class="column-8">
                      <div class="div-59">
                        <div class="div-60">100g</div>
                        <div class="div-61">100kcal</div>
                      </div>
                    </div>
                  </div>
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
    aspect-ratio: 1.34;
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
 
  .div-9 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-9 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-2 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 27%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-2 {
      width: 100%;
    }
  }
  .div-10 {
    justify-content: center;
    color: #000;
    text-align: center;
    border: 1px solid #000;
    background-color: #d9d9d9;
    flex-grow: 1;
    width: 100%;
    padding: 252px 6px 202px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-10 {
      padding: 40px 0;
    }
  }
  .column-3 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 73%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-3 {
      width: 100%;
    }
  }
  .div-11 {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }
  .div-12 {
    flex-direction: column;
    overflow: hidden;
    position: relative;
    display: flex;
    aspect-ratio: 1.6889952153110048;
    width: 100%;
    align-items: end;
    padding: 0 0 50px 60px;
  }
  @media (max-width: 991px) {
    .div-12 {
      padding-left: 20px;
    }
  }
  .div-13 {
    position: relative;
    justify-content: center;
    color: #000;
    text-align: center;
    border-radius: 30px;
    background-color: #d9d9d9;
    margin-bottom: 61px;
    aspect-ratio: 1;
    align-items: center;
    height: 70px;
    padding: 0 14px;
    font: 400 24px Inter, sans-serif;
  }
  @media (max-width: 991px) {
    .div-13 {
      margin-bottom: 40px;
    }
  }
  .div-14 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 378px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 13px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-14 {
      padding: 0 20px;
    }
  }
  .div-15 {
    flex-direction: column;
    overflow: hidden;
    position: relative;
    display: flex;
    aspect-ratio: 1.6889952153110048;
    width: 100%;
    align-items: end;
    padding: 0 0 50px 60px;
  }
  @media (max-width: 991px) {
    .div-15 {
      padding-left: 20px;
    }
  }
  .div-16 {
    position: relative;
    justify-content: center;
    color: #000;
    text-align: center;
    border-radius: 30px;
    background-color: #d9d9d9;
    margin-bottom: 61px;
    aspect-ratio: 1;
    align-items: center;
    height: 70px;
    padding: 0 14px;
    font: 400 24px Inter, sans-serif;
  }
  @media (max-width: 991px) {
    .div-16 {
      margin-bottom: 40px;
    }
  }
  .div-17 {
    justify-content: center;
    color: #000;
    text-align: center;
    max-width: 378px;
    border: 1px solid #000;
    background-color: #d9d9d9;
    align-items: center;
    padding: 13px 60px;
    font: 500 40px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-17 {
      padding: 0 20px;
    }
  }
  .column-4 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 67%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-4 {
      width: 100%;
    }
  }
  .div-18 {
    position: relative;
    display: flex;
    margin-top: 15px;
    flex-grow: 1;
    flex-direction: column;
  }
  @media (max-width: 991px) {
    .div-18 {
      max-width: 100%;
    }
  }
  .div-19 {
    align-self: end;
    display: flex;
    margin-right: 58px;
    align-items: start;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-19 {
      max-width: 100%;
      margin-right: 10px;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-20 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-21 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-22 {
    color: #577d60;
    text-align: center;
    flex: 1;
    font: 700 38px Gmarket Sans TTF, sans-serif;
  }
  .div-23 {
    border: 1px solid #000;
    background-color: #fff;
    align-self: stretch;
    display: flex;
    margin-top: 21px;
    align-items: start;
    gap: 0px;
    padding: 0 20px;
  }
  @media (max-width: 991px) {
    .div-23 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-24 {
    align-self: stretch;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0px;
  }
  @media (max-width: 991px) {
    .div-24 {
      max-width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .div-25 {
    align-self: start;
    display: flex;
    margin-top: 28px;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-26 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-27 {
    background-color: #000;
    margin-top: 28px;
    height: 1px;
  }
  .div-28 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin-top: 133px;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-28 {
      margin-top: 40px;
    }
  }
  .div-29 {
    background-color: #000;
    align-self: stretch;
    width: 1px;
    height: 379px;
  }
  .div-30 {
    align-self: start;
    display: flex;
    margin-top: 28px;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-31 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-32 {
    background-color: #000;
    margin-top: 29px;
    height: 1px;
  }
  .div-33 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin-top: 133px;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-33 {
      margin-top: 40px;
    }
  }
  .div-34 {
    background-color: #000;
    align-self: stretch;
    width: 1px;
    height: 381px;
  }
  .div-35 {
    align-self: end;
    z-index: 1;
    display: flex;
    margin-top: 28px;
    flex-grow: 1;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-36 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-37 {
    background-color: #000;
    margin-top: 29px;
    height: 1px;
  }
  .div-38 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin-top: 133px;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-38 {
      margin-top: 40px;
    }
  }
  .div-39 {
    background-color: #000;
    align-self: stretch;
    width: 2px;
    height: 380px;
  }
  .div-40 {
    display: flex;
    margin-top: 27px;
    flex-basis: 0%;
    flex-direction: column;
  }
  .div-41 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-42 {
    background-color: #000;
    margin-top: 29px;
    height: 1px;
  }
  .div-43 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    margin-top: 134px;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-43 {
      margin-top: 40px;
    }
  }
  .div-44 {
    border: 1px solid #000;
    background-color: #fff;
    align-self: stretch;
    padding: 0 57px 0 80px;
  }
  @media (max-width: 991px) {
    .div-44 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-45 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-45 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-5 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 53%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-5 {
      width: 100%;
    }
  }
  .div-46 {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-46 {
      margin-top: 40px;
      justify-content: center;
    }
  }
  .div-47 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    margin: auto 0;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-48 {
    background-color: #000;
    width: 1px;
    height: 268px;
  }
  .div-49 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    margin: auto 0;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .column-6 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 47%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-6 {
      width: 100%;
    }
  }
  .div-50 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-50 {
      margin-top: 40px;
    }
  }
  .div-51 {
    justify-content: center;
    color: #000;
    text-align: center;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-52 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: start;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-53 {
    border: 1px solid #000;
    background-color: #fff;
    align-self: stretch;
    padding: 0 57px 0 80px;
  }
  @media (max-width: 991px) {
    .div-53 {
      max-width: 100%;
      padding: 0 20px;
    }
  }
  .div-54 {
    gap: 20px;
    display: flex;
  }
  @media (max-width: 991px) {
    .div-54 {
      flex-direction: column;
      align-items: stretch;
      gap: 0px;
    }
  }
  .column-7 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 53%;
    margin-left: 0px;
  }
  @media (max-width: 991px) {
    .column-7 {
      width: 100%;
    }
  }
  .div-55 {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 991px) {
    .div-55 {
      margin-top: 40px;
      justify-content: center;
    }
  }
  .div-56 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    margin: auto 0;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-57 {
    background-color: #000;
    width: 1px;
    height: 268px;
  }
  .div-58 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: center;
    width: 257px;
    margin: auto 0;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .column-8 {
    display: flex;
    flex-direction: column;
    line-height: normal;
    width: 47%;
    margin-left: 20px;
  }
  @media (max-width: 991px) {
    .column-8 {
      width: 100%;
    }
  }
  .div-59 {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin: auto 0;
  }
  @media (max-width: 991px) {
    .div-59 {
      margin-top: 40px;
    }
  }
  .div-60 {
    justify-content: center;
    color: #000;
    text-align: center;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  .div-61 {
    justify-content: center;
    color: #000;
    text-align: center;
    align-self: start;
    width: 257px;
    font: 500 32px Gmarket Sans TTF, sans-serif;
  }
  </style>