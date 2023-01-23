<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';

import Globe from "globe.gl";
export default {
  name: "welcome",
  components: {},
  data() {
    return {
      office1: "officeMilan",
      office2: "officeDubai",
      office3: "officeTrencin",
      name: "",
      surname: "",
      email: "",
      mobile: "",
      details: "",
    };
  },
  mounted() {
    // Gen random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["#007bff", "#00f544", "#a100ffe6", "#00bbffe6"][
          Math.round(Math.random() * 3)
        ],
        ["#007bff", "#00f544", "#a100ffe6", "#00bbffe6"][
          Math.round(Math.random() * 3)
        ],
      ],
    }));

    Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .arcsData(arcsData)
      .backgroundColor("rgba(0,0,0,0)")
      .arcColor("color")
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 10000 + 500)(
      document.getElementById("globeViz")
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {
    openOffice(x1) {
      let content = document.querySelector("#" + x1);
      console.log(content);
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";

      let content2 = document.querySelector(".bg1");
      content2.style.width = "100%";
      content2.style.opacity = "1";
      content2.style.visibility = "visible";
      content2.style.display = "inline";
    },
    closePopup() {
      let content = document.querySelector(".bg1");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    openOffice2(x1) {
      let content = document.querySelector("#" + x1);
      console.log(content);
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";

      let content2 = document.querySelector(".bg2");
      content2.style.width = "100%";
      content2.style.opacity = "1";
      content2.style.visibility = "visible";
      content2.style.display = "inline";
    },
    closePopup2() {
      let content = document.querySelector(".bg2");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    openOffice3(x1) {
      let content = document.querySelector("#" + x1);
      console.log(content);
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";

      let content2 = document.querySelector(".bg3");
      content2.style.width = "100%";
      content2.style.opacity = "1";
      content2.style.visibility = "visible";
      content2.style.display = "inline";
    },
    closePopup3() {
      let content = document.querySelector(".bg3");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    requestContact(){
      const db = firebase
        .initializeApp({ projectId: "jobify-d2a24" })
        .firestore();

        const current = new Date();
      const date =
        current.getDate() +
        "-" +
        (current.getMonth() + 1) +
        "-" +
        current.getFullYear();
      const time =
        current.getHours() +
        ":" +
        current.getMinutes() +
        ":" +
        current.getSeconds();

        const dateTime = date + " " + time;

        const data = {
          name: this.name,
          surname: this.surname,
          email: this.email,
          mobile: this.mobile,
          details: this.details,
          data: dateTime,
        };

        db.collection("richieste_contattaci")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Richiesta Contatto";
          document.getElementById("subtitle").innerHTML = "Richiesta inviata con successo.";
          setTimeout(() => {
            document.getElementById("notify").style.display = "none";
          }, 6000); // 👈️ time in milliseconds
          });
    }
  },
};
</script>

<template>
  <div class="first">
    <div id="globeViz"></div>
    <div class="hover1"></div>
    <div class="glow"></div>
    <div class="glow2"></div>
    <div class="glow3"></div>
    <div class="glow4"></div>
    <div class="glow5"></div>
    <div class="glow6"></div>
    <div class="mainTitle">
      <div class="titleFirst">
        Jobify Recruiting: il tuo partner per la ricerca talenti In Italia
      </div>
    </div>
    <div class="gradient"></div>

    <div class="office" id="officeMilan" @click="openOffice(office1)">
      <div class="image"></div>
      <h4>Milan</h4>
      <p>Sede principale</p>
    </div>

    <div class="bgTransparent bg1">
      <div class="closeMenu" @click="closePopup()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
      <div class="popup">
        <div class="header">
          <div class="col col_1">
            <p>Sede Principale</p>
            <h2>Milano, IT</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">Via copernico, 38 - 20125 Milano, Italia</div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <div class="subtitle">+39 340 763 6209</div>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >info@jobifyrecruiting.it</a
            >
          </div>
        </div>
        <div class="body">
          <div class="images">
            <div class="img1"></div>
            <div class="img2">
              <img class="mainImage" src="/src/assets/ph16.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bgTransparent bg2">
      <div class="closeMenu" @click="closePopup2()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
      <div class="popup">
        <div class="header">
          <div class="col col_1">
            <p>Sede</p>
            <h2>Dubai, EAU</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">
              120 Sheikh Zayed Rd - Umm Al Sheiÿ Emirati Arabi Uniti
            </div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <div class="subtitle">+971 52 892 5497</div>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >davide.maggio@jobconsultinghr.it</a
            >
          </div>
        </div>
        <div class="body">
          <div class="images">
            <div class="img1">
              <img
                class="mainImage"
                src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fph17.jpg?alt=media&token=afb18c7e-0935-4868-9059-651e03ab91d1"
              />
            </div>
            <div class="img2">
              <img
                class="mainImage"
                src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fph18.jpg?alt=media&token=e1da6c72-9039-471d-8d33-20d25c79f26d"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bgTransparent bg3">
      <div class="closeMenu" @click="closePopup3()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
      <div class="popup">
        <div class="header">
          <div class="col col_1">
            <p>Sede</p>
            <h2>Trencin, SL</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">Povazka, 36 - 91101 Slovacchia</div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <div class="subtitle">00421/902.505.385</div>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >davide.maggio@jobconsultinghr.it</a
            >
          </div>
        </div>
        <div class="body">
          <div class="images">
            <div class="img1">
              <img class="mainImage" src="/src/assets/ph15.jpg" />
            </div>
            <div class="img2">
              <img class="mainImage" src="/src/assets/ph16.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cols">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          class=" width-full z-1"
          style="z-index: 10;"
          >
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
          </svg>
          <div class="colsBody">
            <div class="col col_1">
        <p>Contattaci</p>
        <h2>Fissa <span>un appuntamento</span></h2>
        <div class="subtitle">
          Contattare Jobify Recruiting, agenzia di head hunting con sede a Milano, significa trovare la persona giusta
          da inserire al giusto posto in azienda. Da sempre siamo specializzati nella ricerca e valorizzazione di talenti e
          troviamo il candidato perfetto per rispondere alle esigenze aziendali. Il risultato? Un rapporto azienda-
          talento duraturo ed efficace, per la piena soddisfazione della persona e il raggiungimento degli obiettivi di
          business.
        </div>
      </div>
      <div class="col col_2 transition">
        <h3>Contattaci</h3>
        <div
          class="input"
          style="display: flex; width: 100%; margin: 0 0 1.5rem 0"
        >
          <input
            style="width: 100%; margin: 0 1.5rem 0 0"
            id="nav"
            class="input"
            type="text"
            name="name" 
            v-model="name"
            placeholder="Nome"
          />

          <input
            id="nav"
            style="width: 100%; margin: 0"
            class="input"
            type="text"
            name="surname" 
            v-model="surname"
            placeholder="Cognome"
          />
        </div>
        <div class="input" style="display: flex; width: 100%; margin: 0">
          <input
            id="nav"
            class="input"
            type="text"
            name="email" 
            v-model="email"
            placeholder="Email"
          />
        </div>
        <div class="input" style="display: flex; width: 100%; margin: 0">
          <input
            id="nav"
            class="input"
            type="text"
            name="mobile" 
            v-model="mobile"
            placeholder="Telefono"
          />
        </div>
        <div class="input" style="display: flex; width: 100%; margin: 0">
          <input
            id="nav"
            class="input"
            type="text"
            name="details" 
            v-model="details"
            placeholder="Dettagli"
          />
        </div>

        <div class="formButton">
          <button class="btn" @click="requestContact()">
              Invia
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
          >
        </div>
      </div>
          </div>
      
    </div>

    <div class="notify" id="notify">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c2550" class="bi bi-check-lg" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
          <div class="text">
            <div class="title" id="title">
              
            </div>
            <div class="subtitle" id="subtitle">

            </div>
          </div>
        </div>
  </div>
</template>

<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");

*{
  font-family: "Merienda";
}

@media (min-width: 1600px) {
  #globeViz {
    left: 25% !important;
  }
}

@media (min-width: 1440px) {
  #officeMilan {
    top: 32% !important;
    left: 78% !important;
  }

  #officeDubai {
    top: 49%;
    left: 67%;
  }

  #officeTrencin {
    top: 34%;
    left: 59%;
  }
}

@media (min-width: 1024px) {

  .notify{
    position: fixed;
    right: 2%;
    bottom: 10%;
    background: #fff;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    border-radius: 20px;
    z-index: 20;
    width: 30%;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .notify .title{
    color: #0c2550;
    font-size: 16px;
    line-height: 18px;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 700;
  }

  .notify .subtitle{
    color: #0c2550;
    font-size: 14px;
    line-height: 18px;
    margin-left: 1rem;
  }

  #officeMilan {
    top: 32%;
    left: 77%;
  }

  #officeDubai {
    top: 49%;
    left: 67%;
  }

  #officeTrencin {
    top: 34%;
    left: 59%;
  }

  .first {
    background: #0c2550;
  }

  #globeViz {
    position: fixed;
    left: 25%;
    top: 28%;
    cursor: pointer;
    transform: scale(1.5);
    z-index: 2;
  }

  .hover1 {
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0;
    z-index: 3;
  }

  .glow {
    position: fixed;
    width: 5vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 15%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
  }

  .glow3 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 35%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
  }

  .glow4 {
    position: fixed;
    width: 5vw;
    opacity: 0.5;
    top: 30%;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow5 {
    position: fixed;
    width: 5vw;
    right: 21%;
    top: 70%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
  }

  .glow6 {
    position: fixed;
    width: 5vw;
    left: 30%;
    top: 60%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.4);
  }

  .mainTitle {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 7rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 22rem;
    z-index: 1;
    position: fixed;
  }

  .mainTitle h2 {
    color: white;
    font-size: 18px;
    line-height: 22px;
    margin-top: 5rem;
    font-weight: 200;
    text-align: center;
  }

  .mainTitle2 {
    width: fit-content;
    float: right;
    margin-top: 3rem;
    margin-right: 5rem;
    z-index: 4;
    color: #fff;
    font-size: 150px;
    line-height: 150px;
    letter-spacing: -0.04em;
    font-weight: 500;
    position: fixed;
    right: 5%;
    bottom: 15%;
  }

  .datas {
    display: flex;
    border-top: 2px solid #0a1e4375;
    margin-top: 0;
    width: fit-content;
    position: absolute;
    bottom: -15%;
  }

  .datas p {
    margin-bottom: 0 !important;
    letter-spacing: 1px;
  }

  .datas .item {
    margin-right: 6rem;
    text-align: left;
    margin-top: 1.5rem;
  }

  .titleFirst {
    font-size: 84px;
    line-height: 84px;
    letter-spacing: -0.04em;
    margin-left: 5rem;
    color: #fff;
    font-weight: 600 !important;
    width: 50%;
  }

  .gradient {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    background: transparent;
    padding-top: 15rem;
  }

  .office {
    position: fixed;
    top: 10%;
    transition: all 0.3s ease-out;
    z-index: 3;
  }

  .office:hover {
    transform: scale(1.5);
  }

  .office .image {
    width: 5vw;
    height: 5vw;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fph15.jpg?alt=media&token=4bb8f423-f8c0-41a0-a343-e22c1d89bb40);
    background-position: center;
    background-size: cover;
    border-radius: 25rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
  }

  .office .image2 {
    width: 5vw;
    height: 5vw;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fph17.jpg?alt=media&token=afb18c7e-0935-4868-9059-651e03ab91d1);
    background-position: center;
    background-size: cover;
    border-radius: 25rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
  }

  .office .image3 {
    width: 5vw;
    height: 5vw;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fph19.jpg?alt=media&token=f0c9ef2e-9746-47f7-8972-6d05eacdb404);
    background-position: center;
    background-size: cover;
    border-radius: 25rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
  }

  .office h4 {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    font-weight: 500;
    text-align: center;
    margin-bottom: 0 !important;
  }

  .office p {
    color: #fff;
    font-size: 12px;
    line-height: 16px;
    font-weight: 300;
    text-align: center;
  }

  .bgTransparent {
    position: fixed;
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    opacity: 0;
    width: 0%;
  }

  .popup {
    position: fixed;
    z-index: 10;
    background: #0c2550;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 3%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
      rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .popup .header {
    display: flex;
  }

  .col_1 {
    width: 120%;
  }

  .col_2 { 
    margin-left: 5rem;
  }

  .col_3 {
    margin-top: 2rem;
  }

  .col p {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 10px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .col h4 {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 10px;
    line-height: 10px;
    align-items: center;
    font-weight: 700;
  }

  .col h4 span {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    font-size: 14px;
    line-height: 14px;
  }

  .col h2 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 54px;
    line-height: 54px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .col h3 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .col .subtitle {
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 18px;
  }

  .images {
    display: flex;
    margin-top: 6rem;
  }

  .images .img1 {
    width: 60%;
    margin-right: 2rem;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FSede%20Milano%20box%20grande.png?alt=media&token=f972bb81-b26c-45e3-9fa1-40d670b492f1);
    background-position: center;
    background-size: cover;
    height: 28vw;
    border-radius: 30px;}

  .images .img2 {
    width: 30%;
    margin-left: 2rem;
  }

  .images .img1 img {
    width: 100%;
    border-radius: 40px;
    z-index: 1;
  }

  .images .img2 img {
    width: 100%;
    border-radius: 40px;
    z-index: 1;
  }

  .mailto {
    margin: 0;
    padding: 0;
    text-transform: none;
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 1px solid rgb(211, 211, 211);
    border-radius: 0 !important;
    margin-bottom: 1rem;
  }

  .closeMenu {
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

  .closeMenu:hover {
    border-color: white;
    transform: rotate(90deg);
  }

  .cols{
    z-index: 10;
    margin-top: 25rem;
  }

  .colsBody{
    display: flex;
    margin-top: 0rem;
    padding-bottom: 5rem;
    padding-left: 6rem;
    padding-right: 6rem;
    z-index: 10;
    background: #fff;
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

  .cols .col {
    padding-top: 5rem;
  }

  .cols .col p {
    text-transform: uppercase;
    color: #000;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .cols .col h4 {
    text-transform: uppercase;
    color: #000;
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
    color: #000;
    letter-spacing: -0.04em;
    font-size: 56px;
    line-height: 65px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .cols .col h2 span{
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
    font-size: 56px;
    font-weight: 700;
    line-height: 56px;
    padding-right: 0.05rem;
    letter-spacing: -0.06em !important;
  }

  .cols .col h3 {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: #000;
    font-size: 18px;
    line-height: 22px;
  }

  .input {
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
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
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .formButton {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: fit-content;
  }
}

@media (max-width: 1023px) {
}

@media (min-width: 1920px) {
  #globeViz {
    left: 25% !important;
    top: 12%;
  }

  #officeMilan {
    top: 17% !important;
    left: 78% !important;
  }

  #officeDubai {
    top: 49%;
    left: 64%;
  }

  #officeTrencin {
    top: 34%;
    left: 57%;
  }

  .Iam {
    font: normal 40px/50px Planer, sans-serif;
    font-size: 230px;
    line-height: 230px;
    letter-spacing: -0.04em;
    margin-left: 5rem;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
  }

  .mainTitle2 {
    width: fit-content;
    float: right;
    margin-top: 3rem;
    margin-right: 5rem;
    z-index: 4;
    color: #fff;
    font-size: 150px;
    line-height: 150px;
    letter-spacing: -0.04em;
    font-weight: 500;
    position: fixed;
    right: 10%;
    bottom: 20%;
  }
}

@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}

@-webkit-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@-moz-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@-o-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
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
