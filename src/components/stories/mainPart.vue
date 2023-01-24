<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "mainPart",
  components: {},
  data() {
    return {
      storie: [
                
              ],

              stories: [],
              length: 8,
    };
  },
  async mounted() {

    const db = firebase
        .initializeApp({ projectId: "jobify-d2a24" })
        .firestore();

    const querySnapshot = await getDocs(collection(db, "storie_dei_talenti"));
    querySnapshot.forEach((doc) => {
      this.storie.push({ 
        nickname: doc.data().nickname,
        ruolo: doc.data().ruolo,
        azienda: doc.data().azienda,
        data: doc.data().data,
        storia_testo: doc.data().storia_testo,
        background: doc.data().background,
      });
    });
    
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/3d680cada3.js"
    );
    document.head.appendChild(recaptchaScript);

    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowY = "scroll";

    function reveal() {
      var reveals = document.querySelectorAll(".transition");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const slider = document.querySelector(".featuredContent");
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }
    
    const firebaseConfig = {
        apiKey: "AIzaSyDvtosJB--sCCj3TlZhuGBWxvToa0c12ec",
        authDomain: "jobify-d2a24.firebaseapp.com",
        databaseURL: "https://jobify-d2a24-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "jobify-d2a24",
        storageBucket: "jobify-d2a24.appspot.com",
        messagingSenderId: "27249165508",
        appId: "1:27249165508:web:b5f27662b7488d85b57591",
        measurementId: "G-KZXCNHDBT0"
    };

  },
  methods: {

    loadMore() {
      if (this.length == this.storie.length) {
        
      };

      if (this.length > this.storie.length) {
        
        this.length = this.storie.length;
      };

      if (this.length < this.storie.length) {
        this.length = this.length + 8;

        if (this.length > this.storie.length) {
        
          this.length = this.storie.length;
          let btn_load_more = document.querySelector("#btn_load_more");
          btn_load_more.style.display = "none";
        };

        if(this.length == this.storie.length){
          let btn_load_more = document.querySelector("#btn_load_more");
          btn_load_more.style.display = "none";
        }

      };
        
    },

    story(x){
      let content = document.querySelector(".story");
      content.style.display = "inline";

      var nickname = document.getElementById("nickname");
      nickname.textContent = this.storie[x-1].nickname;

      var azienda = document.getElementById("azienda");
      azienda.textContent = this.storie[x-1].azienda;

      var ruolo = document.getElementById("ruolo");
      ruolo.textContent = this.storie[x-1].ruolo;

      var storia_testo = document.getElementById("storia_testo");
      storia_testo.textContent = this.storie[x-1].storia_testo;
    },

    close_story(x){
      let close_story = document.getElementById(x);
      close_story.style.display = "none";
    },
  },
  computed: {
    storie() {
      return this.storie.slice(0, this.length);
    },
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="firstPart">

          <div class="firstPartBody">
            <div class="subtitle">storie dei talenti</div>
              <h2>Ogni persona ha un talento e ogni talento racchiude in sé un’opportunità di lavoro</h2>

              <p>
                Il compito di Jobify
          Recruiting è proprio questo: creare il match perfetto tra persona e azienda, talento e impresa per collocare
          le persone giuste al posto giusto. Un compito che da sempre svolgiamo con la massima cura e attenzione
          come testimoniano <span>le storie dei talenti che abbiamo raccolto in questa pagina.</span>
          Perché nessuna persona è priva di talento e ciascuno può e deve trovare l’azienda capace di valorizzarlo.
              </p>

              <div class="mainButton">
                <router-link to="/workers"
                  ><button class="btn">
                    Scopri i servizi per il candidato
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-arrow-right-short"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                        />
                      </svg>
                    </span></button
                ></router-link>
              </div>
              <div class="image">
              </div>
          </div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          class="position-absolute width-full z-1"
          style="bottom: 0"
          >
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
          </svg>
        </div>
        <div class="second">
          <div class="featureds">
            <div class="titles">
              <h2>Storie dei talenti</h2>
            </div>
            <div class="featuredContent" id="featureds">
                <div 
                      v-for="(featured, index) in storie"
                      class="featured"
                      v-bind:key="featured"
                      v-bind:style="{ backgroundImage: 'url(' + featured.background + ')' }"
                      @click="story(index + 1)"
                    >
                      <div class="hover"></div>
                </div> 
            </div>
            <div class="load_more">
              <p>{{ this.length }} di {{ this.storie.length }} storie dei talenti viste</p>
              <button class="btn" @click="loadMore" id="btn_load_more">Vedi altre storie dei talenti</button>
            </div>
            <div class="story" id="1">
              <div class="close_story" @click="close_story(1)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22"
                                height="22"
                                fill="#0a1e4375" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
              <div class="content">
                <div class="nickname" id="nickname"></div>
                <div style="display: flex; align-items: center; width: 100%; text-align: center;">
                  <div class="ruolo" id="ruolo"></div> 
                  <div class="azienda" id="azienda"></div> 
                </div>
                <div class="storia_testo" id="storia_testo"></div>
                <div class="story_signed">
                  <h4>Storie dei talenti di <span style="color: #0062f5; font-style: italic;">Jobify Recruiting.</span></h4>
                  <h5>"Prima persone e poi professionisti"</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fifthDiv">
          <div class="adviser">
            <div class="col">
              <h3>
                <span>Contattaci e prenota un appuntamento</span> per trovare i migliori talenti per la tua azienda.
              </h3>
              <div class="divInput">
                <router-link to="/contact"
                  ><button class="btn">Contattaci</button></router-link
                >
              </div>
            </div>
            <div class="col" data-v-1672ca76="" style="background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fmatch_perfetto.png?alt=media&token=c27b57b6-190f-4931-a118-6c43fae019fe); background-size: cover; border-radius: 30px; background-position: top;"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");

.transition {
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.transition.active {
  transform: translateY(0);
  opacity: 1;
}

*{
  font-family: "Merienda";
}

@media (min-width: 1024px) {

  .first {
    background: #fff;
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .firstPart {
    text-align: left;
    width: 100%;
    padding-bottom: 6rem;
    padding-top: 9rem;
    margin-right: 0;
    background:#0c2550;
  }

  .firstPartBody{
    padding-left: 10rem;
    padding-right: 10rem;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .firstPart p span {
    color: #c554a0;
    font-weight: 600;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    margin-bottom: 1rem;
    width: 50%;
  }

  .firstPart p {
    width: 50%;
    margin-top: 0.5rem;
    color: #fff;
    font-size: 18px;
    text-align: left;
    line-height: 22px;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  .firstPart .image {
    height: 54vh;
    width: 56%;
    padding-left: 8rem;
    padding-right: 0;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FStorie%20di%20talenti.png?alt=media&token=25dc28b1-df37-43ff-8bd0-934c02355d24);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -15%;
    right: 0;
    margin-right: 0;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #000;
    font-weight: 800;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .titlePage2 {
    font-size: 34px;
    line-height: 38px;
    color: #000;
    font-weight: 800;
    margin-left: 12.5rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .cols .col_1 {
    width: 120%;
  }

  .cols .col_2 {
    margin-left: 5rem;
  }

  .cols .col_3 {
    margin-top: 5rem;
  }

  .cols .col p {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .cols .col h4 {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    align-items: center;
    font-weight: 700;
  }

  .cols .col h4 span {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-size: 18px;
    line-height: 18px;
  }

  .cols .col h2 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 64px;
    line-height: 64px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 24px;
  }

  .topContent {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    border-radius: 30px;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-bottom: 5rem;
    background: white;
  }

  .topContent .img1 {
    width: 70%;
    background-image: url("/src/assets/ph15.jpg");
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    height: 30vw;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .topContent .img1:hover {
    transform: scale(1.02);
  }

  .firstTitle {
    margin-left: 2rem;
    width: 40%;
    margin-right: 2rem;
    color: #000;
  }

  .firstTitle p {
    font-size: 12px;
    color: #273350;
    font-weight: 800;
    letter-spacing: 0.5px;
    line-height: 1.33333;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .firstTitle .subtitle {
    font-size: 16px;
    color: #273350;
    line-height: 20px;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  .firstTitle h2 {
    color: #000;
    font-size: 46px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .firstTitle .btnRead {
    padding-top: 2rem;
    color: #0062f5;
    font-weight: 800;
    float: right;
    font-size: 12px;
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .secondPart {
    padding-left: 11rem;
    padding-right: 11rem;
    margin-bottom: 5rem;
  }

  .story{
    display: none;
    position: fixed;
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .story .content{
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 10;
    background: #0c25509f;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 5%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .story .close_story{
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 2rem;
    width: fit-content;
    padding: 1rem;
    border-radius: 16px;
    border: 2px solid #0a1e4375;
    color: white;
    font-size: 18px;
    line-height: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .story .close_story:hover {
    border-color: white;
    color: #fff;
    transform: rotate(90deg);
  }

  .story .close_story:hover svg {
    fill: #fff;
  }

  .story .content .nickname{
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
  }

  .story .content .azienda{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: auto;
  }
  .story .content .data{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: auto;
    width: fit-content;
    margin-left: 1rem;
  }

  .story .content .ruolo{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: 1rem;
    margin-left: auto;
    width: fit-content;
  }

  .story .content .storia_testo{
    padding-left: 20rem;
    padding-right: 20rem;
    margin-top: 3rem;
    overflow-y: scroll;
    height: 65%;
    font-weight: 300;
    color: #fff;
    text-align: center;
  }
  
  .story .content .story_signed{
    display: flex;
    align-items: center;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
  }

  .story .content .story_signed h4{
    color: #fff;
    font-size: 20px;
    line-height: 24px;
  }

  .story .content .story_signed h5{
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    margin-left: 0.5rem;
    font-style: oblique;
  }

  .second {
    padding-bottom: 5rem;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 9999px;
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
    border-radius: 9999px;
    background-clip: padding-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /*background: #555;*/
  }

  .featuredContent {
    height: 100%;
    width: 84%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    position: relative;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  .featuredContent.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .featureds .titles {
    align-items: center;
    display: flex;
    margin-left: 10rem;
    margin-right: 10rem;
    margin-bottom: 2rem;
  }

  .featureds .titles h2 {
    font-size: 40px;
    line-height: 42px;
    color: #000;
    font-weight: 800;
    margin-top: 3rem;
    letter-spacing: -0.02em;
    width: fit-content;
  }

  .featured {
    border-radius: 30px;
    background-color: #0089cc;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-size: 104%;
    background-position: center;
    background-repeat: no-repeat;
    width: 18vw;
    float: left;
    /*height: 11vw;*/
    height: 18vw;
    position: relative;
    transition: 0.3s all;
    border: 3px solid transparent;
  }

  .featured:hover {
    border-color:#027bfd
  }

  .featured .info_story{
    bottom: 0;
    padding: 2rem;
    padding-top: 1rem;
    width: 100%;
    border-radius: 30px;
    width: 100%;
  }

  .featured .info_story .basic_informations{
    margin-right: auto;
  }

  .featured .info_story .username{
    color: white;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
  }

  .featured .info_story .jobtitle{
    color: white;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  .featured .info_story .text_preview{
    color: white;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .featured .hover {
    height: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .featured h2 {
    color: #fff;
    padding: 2rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    font-size: 30px;
    line-height: 0;
    width: 30vw;
  }
  
  .featured p {
    color: #fff;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .featureds .featured2 {
    border-radius: 30px;
    background-color: #0c2550;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-size: cover;
    background-position: center;
    width: 18vw;
    /*height: 11vw;*/
    height: 19vw;
    position: relative;
  }

  .featured2 .info_story{
    bottom: 0;
    padding: 2rem;
    padding-top: 1rem;
    width: 100%;
    border-radius: 30px;
    width: 100%;
  }

  .featured2 .info_story .basic_informations{
    margin-right: auto;
  }

  .featured2 .info_story .username{
    color: #fff;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
  }

  .featured2 .info_story .jobtitle{
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  .featured2 .info_story .text_preview{
    color: #fff;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .featured2 .hover {
    height: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .featured2 h2 {
    color: #0089cc;
    padding: 2rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    font-size: 30px;
    line-height: 0;
    width: 30vw;
  }
  
  .featured2 p {
    color: #0089cc;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .load_more{
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    border-top: 2px solid #00000012;
    padding-top: 1rem;
    text-align: center;
  }

  .load_more p{
    font-size: 18px;
    line-height: 22px;
    color: #000;
  }

  .fifthDiv {
    padding: 3rem;
    padding-bottom: 8rem;
  }

  .fifthDiv .adviser {
    background: #0c2550;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 72%;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(-70deg,#2867b2 0%,#01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.06em;
    font-weight: 700 !important;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 60px;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fmatch_perfetto.png?alt=media&token=c27b57b6-190f-4931-a118-6c43fae019fe);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    width: 50%;
  }

  .sixtPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: transparent;
  }

  .sixtPart h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000;
    font-size: 54px;
    font-weight: 800 !important;
    width: 60%;
    line-height: 58px;
    letter-spacing: -0.04em !important;
  }
  
  .sixtPart .description{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #000;
    padding-bottom: 2rem;
    width: 80%;
  }

  .sixtPart .sixtPartButton{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .sixtPart h4 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #000;
    font-size: 18px;
    font-weight: 500 !important;
    width: 40%;
    line-height: 18px;
    letter-spacing: 1.5px !important;
    text-transform: uppercase;
    margin-top: 3rem;
    margin-bottom: 0rem;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }

  .input {
    width: 95%;
    margin-right: 1rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 97%;
    float: right;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 3rem;
    padding-bottom: 1rem;
    height: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: rgba(38, 43, 49, 0.486);
    border: 2px solid #b3b3b326;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  input:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  .btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 26px;
    border-radius: 20px;
    background: #0062f5;
    color: #ffffff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 50%;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .feedbackDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 5rem;
    width: 100%;
    background-color: transparent;
    padding-top: 5rem;
  }

  .feedbackDiv .content {
    padding: 0rem !important;
  }

  .feedbackDiv h2 {
    color: #fff;
    font-size: 40px;
    font-weight: 800 !important;
    text-align: center;
    line-height: 44px;
    letter-spacing: -0.03em !important;
  }

  .feedbackDiv .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 5rem;
  }

  .feedbackDiv .btnScrollR {
    width: fit-content;
    background: #fff;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .feedbackDiv .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: #fff;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .feedbackDiv .feedbacks {
    display: flex;
    height: 100%;
    width: 100%;
    padding-right: 8rem;
    background-color: transparent;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .feedbacks.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .feedbackDiv .feedbacks .feedback {
    background: #f4f5f6;
    border-radius: 30px;
    padding: 1.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    height: auto;
  }

  .feedbackDiv .feedbacks .feedback .quote {
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
    font-size: 80px;
    line-height: 0;
    letter-spacing: 1.5px;
    line-height: 38px;
    margin-bottom: 0;
    padding-top: 1rem;
  }

  .feedbackDiv .feedbacks .feedback h3 {
    color: #000;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
    width: 40vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #000;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 0rem;
    font-weight: 500;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #3e3f40;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 16px;
    margin-bottom: 0rem;
    font-weight: 300;
  }
  .feedbackDiv .feedbacks .feedback .feedbackInfo {
    display: flex;
    align-items: center;
  }

  .feedbackDiv .feedbacks .feedback .feedbackInfo .feedbackInfoPhoto {
    background-image: url(/src/assets/ph9.JPG);
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }
}

@media (max-width: 1023px) {
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
