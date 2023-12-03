<template>
    <div id="app">
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <div class="div-5">NUTRITION FOR YOU</div>
        </div>
        <div id="nav">
          <router-link to="/LoGin" class="login-link" @click="goToLoginPage">LOGIN</router-link>
        </div>
        <img
          loading="lazy"
          srcSet="/images/main.png"
          class="img-2"
        />
        <img
          loading="lazy"
          srcSet="/images/main-2.png"
          class="img-3"
        />
        <div class="flexcontainer">
              <p class="text">
                <span class="span">
                  탄수화물 00g
                  <br />
                </span>
              </p>
              <p class="text">
                <span class="span">
                  단백질 00g
                  <br />
                </span>
              </p>
              <p class="text">
                <span class="span">지방 00g</span>
              </p>
            </div>
      </div>
    </div>
    
    <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
  
    methods: {
      goToLoginPage() {
        this.$router.push('/LoGin');
    }
  }
  };
  </script>
  
  <style scoped>
    @font-face {
        font-family: 'GmarketSansBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
        font-weight: normal; font-style: normal;
    }

  .div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.div-2 {
  background-image: url('/public/images/main-back.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: rgba(162, 198, 170, 0.81); */
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  height: 100vh; 
  width: 100%;
  align-items: center;
  margin-top: -1vh;
}
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
  position: relative;
  display: flex;
  margin-top: 10vh;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  padding: 0 2%;
}

@media (max-width: 991px) {
  .div-3 {
    max-width: 100%;
    
  }
}
  .div-5 {
    color: #335d3c;
    text-align: center;
    margin-top: -1.7vh;
    font: 700 4.5vw GmarketSansBold, sans-serif; 
}

@media (max-width: 991px) {
    .div-5 {
        max-width: 100%;
        font-size: 4.5vw; 
        margin-top: -11vh; 
    }
}

.login-link {
    color: #577d60;
    font-family: 'GmarketSansBold';
    font-size: 2.1vw; 
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    text-decoration: none;

    position: absolute;
    left: 72vw; 
    top: 26vh;
    width: 10vw; 
}

.flexcontainer {
    margin-top: -2vh; 
}
.text {
    align-self: stretch;
    color: #335d3c;
    font-family: 'GmarketSansBold';
    font-size: 2.5vw;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    margin-bottom: -3.3vh;
    margin-left: 27vw;
}
.img-2 {
    width: 34%;
    height: auto;
    margin-top: 6vh;
    margin-left: 20vw;
    fill: #cbe0cd;
    overflow: hidden;
    align-self: stretch;
    z-index: 1;
}
  @media (max-width: 991px) {
    .img-2 {
      max-width: 100%;
      height: auto;
      margin-top: 7vh;
      margin-left: 20vw;
    }
  }
  .img-3 {
    width: 7.7vw;
    height: auto;
    margin-top: -63vh;
    margin-left: 50vw;
    fill: #cbe0cd;
    overflow: hidden;
    align-self: stretch;
    z-index: 1;
    transform: rotate(340deg);
}
    
  @media (max-width: 991px) {
    .img-3 {
      max-width: 100%;
      height: auto;
      
    }
}



  </style>