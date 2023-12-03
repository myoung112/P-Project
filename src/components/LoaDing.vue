<template>
    <div class="div">
      <div class="div-2">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2225ca20932d5bb0b4572609eaa749e3fd179fd39883c9b3b09f6eb3f3f1fd2?"
          class="img"
        />
        <div class="div-3">NUTRITION FOR YOU</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/abff6f098c278638a6d8d61e7bad6da8401ac1e545b6e72eadb933dc72514218?"
          class="img-2"
        />
        <div class="div-4">잠시만 기다려 주세요</div>
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
    align-items: start;
    padding: 50px 80px 50px 46px;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
      padding: 0 20px;
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
    color: #335d3c;
    text-align: center;
    margin-top: 14px;
    max-width: 430px;
    font: 700 75px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      font-size: 40px;
    }
  }
  .img-2 {
    aspect-ratio: 0.89;
    object-fit: contain;
    object-position: center;
    width: 112px;
    align-items: center;
    overflow: hidden;
    align-self: center;
    margin-top: 333px;
    max-width: 100%;
  }
  @media (max-width: 991px) {
    .img-2 {
      margin-top: 40px;
    }
  }
  .div-4 {
    position: relative;
    justify-content: center;
    color: #2f5b38;
    text-align: center;
    align-self: center;
    max-width: 599px;
    margin: 42px 0 257px;
    font: 700 60px Gmarket Sans TTF, sans-serif;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
      font-size: 40px;
      margin: 40px 0;
    }
  }
  </style>