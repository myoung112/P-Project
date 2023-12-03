<template>
  <div class="container">
    <div class="div">
      <div class="div-2">
        <div class="div-3">
          <div class="div-4">NUTRITION FOR YOU</div>
          <div class="div-5">
            <router-link to="/ManaGement" class="link">이전기록</router-link>
            <router-link to="/LoGin" class="link">로그아웃</router-link>
          </div>
          <div class="div-9">내 식단의 영양소가 궁금하다면?</div>
          <div class="div-10">
            <div class="div-11">
              <img loading="lazy" srcSet="/images/sc-1.png" class="img"/>
              <div class="div-12">직접 찍을게요</div>
                <img loading="lazy" srcSet="/images/sc-2.png" class="img-2"/>
            </div>
            <div class="div-13">
              <div class="div-14">파일을 가져올게요</div>
              <label for="fileInput" class="file-input-label">
              <img loading="lazy" srcSet="/images/sc-3.png" class="img-3"/>
            </label>
            <input
                id="fileInput"
                type="file"
                ref="fileInput"
                style="display: none"
                @change="handleFileChange"
              />
            </div>
            <Loading v-if="loading" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from 'axios';
import Loading from '@/components/LoaDing.vue';

export default {
components: {
 Loading,
},
data() {
 return {
   loading: false,
 };
},
methods: {
 openFileInput() {
   this.$refs.fileInput.click();
 },
 async uploadFile(file) {
   this.loading = true;
   try {
     const formData = new FormData();
     formData.append('file', file);
     const response = await axios.post('http://example.com/upload', formData);
     console.log(response.data);
     this.loading = false;
   } catch (error) {
     console.error('Error uploading file:', error);
     this.loading = false;
   }
 },
 handleFileChange(event) {
   const file = event.target.files[0];
   this.uploadFile(file);
 },
},
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
   rgba(177, 206, 184, 0.8) 0%,
   rgba(177, 206, 184, 0.8) 0.01%,
   rgba(203, 224, 205, 0.8) 100%
 );
 overflow: hidden;
 position: relative;
 display: flex;
 height: 100vh;
 width: 100%;
}
@media (max-width: 991px) {
 .div-2 {
   max-width: 100%;
 }
}
.div-3 {
 position: relative;
 display: flex;
 width: 100%;
 flex-direction: column;
 padding: 0 4vw;
}
@media (max-width: 991px) {
 .div-3 {
   max-width: 100%;
   margin-bottom: 4vw;
   padding: 0 2vw;
 }
}
.div-4 {
 color: #335d3c;
 align-self: stretch;
 margin-left: -3.1vw;
 margin-top: 0.8vh;
 font: 1.5vw GmarketSansMedium;
}
@media (max-width: 991px) {
 .div-4 {
   max-width: 100%;
   font-size: 5vw;
 }
}
.div-5 {
  margin-top: 4.5vh;
  text-align: right;
  margin-right: 7vw;
}
.link{
 color: #577d60;
 align-self: stretch;
 font: 1.7vw GmarketSansBold;
 margin-top: 4.5vh;
 margin-right: 3vw;
 text-decoration: none;
}
.div-9 {
 justify-content: center;
 color: #335d3c;
 text-align: center;
 align-self: center;
 margin-top: 4.5vh; 
 max-width: 91.7vw;
 margin-left: -4vw; 
font: 3.7vw GmarketSansBold;
}
@media (max-width: 991px) {
 .div-9 {
   max-width: 100%;
   font-size: 4vw;
  margin-top: 4vh;
 }
}
.div-10 {
 align-self: center;
 display: flex;
 margin-top: 19.8vh;
width: 96.3vw;
 max-width: 100%;
 justify-content: space-between;
 gap: 2vw;
padding: 0 1px;
}
@media (max-width: 991px) {
 .div-10 {
   flex-wrap: wrap;
   margin-top: 4vh;
 }
}
.div-11 {
 display: flex;
 flex-grow: 1;
 flex-basis: 0%;
 flex-direction: column;
}
.img{
  position: absolute;
  top: 31vh; 
  left: 44vw; 
  height: 20vh;
  width: 10vw;
  transform: rotate(134deg);
}
.div-12 {
 color: #335d3c;
 text-align: center;
 margin-top: -2vh;
 margin-left: 1vw;
 font: 2.5vw GmarketSansBold;
}
@media (max-width: 991px) {
 .div-12 {
   font-size: 4vw;
 }
}
.file-input-label {
  cursor: pointer;
}
.img-2 {
 aspect-ratio: 0.75;
 object-fit: contain;
 object-position: center;
 width: 15vw;
 overflow: hidden;
 align-self: center;
 margin-top: 0vh;
 margin-left: -1vw;
 max-width: 100%;
}
@media (max-width: 991px) {
 .img-2 {
   margin-top: 4vh;
 }
}
.div-13 {
 align-self: start;
 display: flex;
 flex-grow: 1;
 flex-basis: 0%;
 flex-direction: column;
}
.div-14 {
 color: #335d3c;
 text-align: center;
 margin-top: -1vh;
 margin-right: 14vw;
 font: 2.5vw GmarketSansBold;
}
@media (max-width: 991px) {
 .div-14 {
   font-size: 4vh;
 }
}
.img-3 {
 position: absolute;
 right: 28vw;
 aspect-ratio: 0.96;
 object-fit: contain;
 object-position: center;
 width: 16vw;
 overflow: hidden;
 align-self: center;
 margin-top: 3vh;
 max-width: 100%;
}
@media (max-width: 991px) {
 .img-3 {
   margin-top: 4vh;
 }
}
</style>