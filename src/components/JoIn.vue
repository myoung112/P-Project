<template>
    <div class="div">
      <div class="div-2">
        <div class="div-3">NUTRITION FOR YOU</div>
        <div class="div-4">회원가입을 진행해주세요</div>
        <div class="column">
        <div class="div-5">id</div>
          <img class="img" alt="Image" src="/images/ji-1.png" />
          <input type="text" v-bind:style="inputStyle" v-model="id" />
            <div class="div-5">password</div>
            <img class="img2" alt="Image" src="/images/ji-2.png" />
          <input type="password" v-bind:style="inputStyle" v-model="pwd" />
            <div class="div-5">Nickname</div>
            <img class="img3" alt="Image" src="/images/ji-3.png" />
          <input type="Nickname" v-bind:style="inputStyle" v-model="Nickname" />
        <button class="div-11" @click="login">Done</button>
      </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        id: '',
        pwd: '',
        inputStyle: {
        width: '72%', 
        height:'3.5vw',
        borderRadius: '3vw', 
        fontSize: '1.8vw',
        marginTop: '1vw',
        marginLeft: '26vw',
        marginBottom: '1vw',
        textAlign: 'left',
        paddingLeft: '5.5vw',
        fontFamily: 'GmarketSansMedium'
      }
      };
    },
    methods: {
      login() {
        if (this.id === 'rjh' && this.pwd === '1234' && this.Nickname) {
          alert('회원가입 성공');
          this.$router.push('/LoGin');
        } else {
          alert('회원가입 실패');
        }
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

  @font-face {
        font-family: 'GmarketSansMedium';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
        font-weight: normal; font-style: normal;
    }

  @font-face {
        font-family: 'GmarketSansLight';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff');
        font-weight: normal; font-style: normal;
    }
  .div {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: -1.1vh;
  }
  .div-2 {
    flex-direction: column;
    background: linear-gradient(
      180deg,
      rgba(203, 224, 205, 0.8) 0%,
      rgba(177, 206, 184, 0.8) 0.01%,
      rgba(203, 224, 205, 0.8) 100%
    );
    overflow: hidden;
    position: relative;
    display: flex;
    height: 80.5vh;
    width: 100%;
    align-items: start;
    padding: 4.166vw 6.666vw 4.166vw 3.82vw;
  }
  @media (max-width: 991px) {
    .div-2 {
      max-width: 100%;
    }
  }
  .div-3 {
    position: relative;
    color: #335d3c;
    text-align: center;
    margin-top: -7.9vh;
    margin-left: -2.9vw;
    font: 1.5vw GmarketSansMedium;
  }
  @media (max-width: 991px) {
    .div-3 {
      max-width: 100%;
      font-size: 2.96px;
    }
  }
  .div-4 {
    position: relative;
    color: #335d3c;
    text-align: center;
    align-self: center;
    margin-top: 5vw; 
    margin-bottom: 2vw;
    margin-left: -2.5vw;
    max-width: 44.85vw; 
    font: 3.5vw GmarketSansBold;
  }
  @media (max-width: 991px) {
    .div-4 {
      max-width: 100%;
      font-size: 2.96vw;
      margin-top: 4.16vw;
    }
  }
  .column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 52%;
  margin-left: 0;
}
@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}
  .div-5{
    justify-content: center;
    color: #444d46;
    align-self: start;
    margin-bottom: -0.5vw;
    margin-left: 27vw;
    font: 1.6vw GmarketSansMedium;
}

.img{
  position: absolute;
  top: 36.6vh; 
  left: 30.3vw; 
  height: 7.6dvh;
  width: 3.6vw;
}
.img2{
  position: absolute;
  top: 52.5vh; 
  left: 30.3vw; 
  height: 6.6dvh;
  width: 3.4vw;
}
.img3{
  position: absolute;
  top: 67.8vh; 
  left: 30.3vw; 
  height: 6.6dvh;
  width: 3.1vw;
}
  .div-11 {
    position: relative;
    color: #fff;
    text-align: center;
    white-space: nowrap;
    justify-content: center;
    border-radius: 1.333vw;
    border: 0.5vw solid rgba(16, 185, 129, 0.5);
    box-shadow: 0 1.333vw 1.333vw 0 rgba(0, 0, 0, 0.25); 
    background-color: #0f7728;
    align-self: center;
    margin-top: 2.5vw;
    margin-left: 41vw;
    padding: 0.5vw 2vw; 
    font: 1.5vw GmarketSansBold; 
  }
  @media (max-width: 991px) {
    .div-11 {
      white-space: initial;
      margin: 5vw 0;
    }
  }
  </style>