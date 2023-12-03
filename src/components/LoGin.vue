<template>
  <div class="div">
    <div class="div-2">
      <div class="div-3"></div>
      <div class="div-4">
        <div class="div-5">NUTRITION FOR YOU</div>
        <div class="div-6">로그인을 진행해주세요</div>
        <div class="div-7">
          <div class="div-8">
            <div class="column">
              <div class="div-9">
                <div class="div-10">id</div>
                <img class="img" alt="Image" src="/images/lg-1.png" />
                <input type="text" v-bind:style="inputStyle" v-model="id" />
                <div class="div-12">password</div>
                <img class="img-2" alt="Image" src="/images/lg-2.png" />
                <input type="password" v-bind:style="inputStyle" v-model="pwd" />
                <button class="btn-14" @click="login">Login</button>
                <router-link to="/JoIn" class="login-link">아직 계정이 없으신가요?</router-link>
              </div>
            </div>
            <div class="column-2">
              <img
                loading="lazy"
                srcSet="..." 
                class="img-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      id: '',
      pwd: '',
      inputStyle: {
        width: '80%', 
        height: '8vh',
        borderRadius: '3vw', 
        fontSize: '1.8vw',
        marginLeft: '27vw',
        textAlign: 'left',
        paddingLeft: '5.5vw',
        fontFamily: 'GmarketSansMedium'
      }
    };
  },
  methods: {
    
    name: 'LoGin',

    async login() {
      const auth = getAuth();
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.id, this.pwd);
        const user = userCredential.user;
        console.log('로그인 성공', user);
        // 로그인 성공 후의 처리 (예: 라우터 이동)
        this.$router.push('/SearCh');
      } catch (error) {
        console.error('로그인 실패', error);
        // 로그인 실패 후의 처리 (예: 에러 메시지 표시)
        alert('로그인 실패: ' + error.message);
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
  background: linear-gradient(
      180deg,
      rgba(203, 224, 205, 0.8) 0%,
      rgba(177, 206, 184, 0.8) 0.01%,
      rgba(203, 224, 205, 0.8) 100%
    );
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -1.1vh;
}
.div-4 {
  position: relative;
  display: flex;
  margin-top: 49.5vh;
  width: 100%;
  padding-left: 0vw;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-4 {
    max-width: 100%;
  }
}
.div-5 {
  color: #335d3c;
  text-align: center;
  font: 1.5vw GmarketSansMedium;
  margin-left: -78vw;
  margin-top: -29vw;
}
@media (max-width: 991px) {
  .div-5 {
    max-width: 100%;
  }
}
.div-6 {
  color: #335d3c;
  text-align: center;
  align-self: center;
  max-width: 62.5vw;
  margin: 10vh 0 0 2.4vw;
  font: 3.5vw GmarketSansBold;
}
.div-7 {
  align-self: center;
  margin-top: 8.6vh;
  width: 100%;
  max-width: 107.5vw;
}
@media (max-width: 991px) {
  .div-7 {
    max-width: 100%;
    margin-top: 4vw;
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
.div-10 {
  justify-content: center;
  color: #444d46;
  align-self: start;
  margin-left: 28vw;
  margin-top: 0vw;
  font: 2vw GmarketSansMedium;
}
@media (max-width: 991px) {
  .div-10 {
    margin-left: 1vw;
  }
}
.img{
  position: absolute;
  top: -20.5vh; 
  left: 27.5vw; 
  height: 8dvh;
  width: 4vw;
}

.img-2{
  position: absolute;
  top: -1.9vh; 
  left: 27.5vw; 
  height: 7dvh;
  width: 3.8vw;
}
.div-12 {
  justify-content: center;
  color: #444d46;
  align-self: start;
  max-width: 32.1vw;
  margin-left: 28vw;
  margin-top: 2vw;
  font: 2vw GmarketSansMedium;
}
@media (max-width: 991px) {
  .div-12 {
    margin-left: 1vw;
  }
}
.btn-14 {
  color: #fff;
  text-align: center;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 1.2vw;
  border: 0.1vw solid rgba(16, 185, 129, 0.5);
  box-shadow: 0 0.4vw 0.4vw 0 rgba(0, 0, 0, 0.25);
  background-color: #0f7728;
  align-self: center;
  margin-top: 5.7vh;
  margin-left: 45vw;
  width: 15.4vw;
  max-width: 17%;
  padding: 1vh 1vw;
  font: 1.5vw GmarketSansBold;
  cursor: pointer;
  outline: none;
}
.btn-14:active {
  background-color: #0b591d;
  box-shadow: 0 0.2vw 0.2vw 0 rgba(0, 0, 0, 0.25);
}
@media (max-width: 991px) {
  .btn-14 {
    white-space: initial;
    margin-top: 4vw;
    padding-left: 0.1vw;
  }
}
.login-link {
  color: #002f0a;
  text-align: center;
  margin-left: 39vw;
  margin-right: auto;
  max-width: 45.4vw;
  font: 2vw GmarketSansMedium;
  white-space: nowrap;
  text-decoration: none;
  display: block;
  margin-top: 3vh;
}
.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 48%;
  margin-left: 2vw;
}
@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}
</style>
