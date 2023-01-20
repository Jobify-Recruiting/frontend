<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';

export default {
  name: "mainPart",
  components: {},
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      linkedin: "",
      mobile: "",
      details: "",
    };
  },
  mounted() {
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

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";
  },
  methods: {
    requestWorkWithUs(){
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
          linkedin: this.linkedin,
          mobile: this.mobile,
          details: this.details,
          data: dateTime,
        };

        db.collection("richieste_lavoraConNoi")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Richiesta Lavora con Noi";
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
  <div>
    <div class="main">
      <div class="first">

        <div class="firstPart">
          <!--<div class="firstPartBody">
              <div
                class="people1"
                style="
                  top: 60%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe2.jpg);
                "
              ></div>
              <div
                class="people2"
                style="
                  top: 80%;
                  left: 15%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
                "
              ></div>
              <div
                class="people2"
                style="
                  top: 20%;
                  left: 5%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
                "
              ></div>
              <div
                class="people1"
                style="
                  top: 40%;
                  left: 12%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe4.jpeg);
                "
              ></div>

              <div
                class="people1"
                style="
                  top: 25%;
                  right: 10%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
                "
              ></div>
              <div
                class="people2"
                style="
                    top: 41%;
                    right: 2%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe4.jpeg);
                "
              ></div>
              <div
                class="people2"
                style="
                  top: 80%;
                  right: 10%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe2.jpg);
                "
              ></div>
              <div
                class="people1"
                style="
                  top: 60%;
                  right: 10%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
                "
              ></div>
              <div class="subtitle">Lavora con noi</div>
              <h2>Un team fatto di persone per le persone</h2>
              <p>
                Jobify Recruiting lavora con passione e impegno e mette competenza, tecnologia e umanità al servizio di
    clienti che possono essere di volta in volta candidati e aziende. Se pensi di possedere queste qualità entra
    nel nostro team.
              </p>
          </div>-->

          <div class="firstPartBody">
            <div class="subtitle">Lavora con noi</div>
              <h2>Un team fatto di persone per le persone</h2>

              <p>
                Jobify Recruiting lavora con passione e impegno e mette competenza, tecnologia e umanità al servizio di clienti che possono essere di volta in volta candidati e aziende. Se pensi di possedere queste qualità entra nel nostro team.
              </p>

              <div class="mainButton">
                <a href="#form"
                  ><button class="btn">
                    Scopri di più
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
                ></a>
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
        <div class="values">
          <div class="value1">
            <h2>I nostri valori</h2>
            <span>Jobify Recruiting crede nei valori</span> delle persone e seleziona per l’arricchimento costante del team chi ama
                  migliorarsi e crescere personalmente e professionalmente.
          </div>
          <div class="value2">
            <h2>I nostri ideali</h2>
                Creare il match perfetto tra aziende e persone è la nostra mission e per questo lavoriamo mettendo al
                centro ideali come <span>etica, professionalità e trasparenza.</span>
          </div>
        </div>

        <div class="secondPart">
          <div class="teamPhoto transition"></div>
          <div class="text">
            <h2>Entra nel nostro team</h2>
            <p>
              Se cerchi un’azienda giovane, flessibile e dinamica con cui lavorare sei nel posto giusto. Entra nel nostro
              team e scopri le opportunità aperte nella nostra squadra!
            </p>
          </div>
        </div>

        <div class="cols" id="form">
          <div class="col col_1">
            <p>Lavora con noi</p>
            <h2>Cerchiamo talenti per creare il futuro</h2>
            <div class="subtitle">
              Le posizioni di lavoro del team Jobify Recruiting sono tante e diverse e la nostra azienda è costantemente
alla ricerca di talenti per creare il futuro. Invia ora la tua candidatura!
            </div>
          </div>
          <div class="col col_2 transition">
            <h3>Candidati qui</h3>
            <div
              class="input"
              style="display: flex; width: 95%; margin: 0 0 1.5rem 0"
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
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="email" 
                v-model="email"
                placeholder="Email"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="linkedin" 
                v-model="linkedin"
                placeholder="Linkedin Url"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="mobile" 
                v-model="mobile"
                placeholder="Telefono"
              />
            </div>
            <div class="input">
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
              <button class="btn" @click="requestWorkWithUs()">
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

  .notify{
    position: fixed;
    right: 2%;
    bottom: 10%;
    background: #0c2550;
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
  }

  .notify .title{
    color: #fff;
    font-size: 16px;
    line-height: 18px;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 700;
  }

  .notify .subtitle{
    color: #fff;
    font-size: 14px;
    line-height: 18px;
    margin-left: 1rem;
  }

  .flowSingleBtn {
    margin-top: 15rem;
  }
  .flowSingleBtn2 {
    margin-right: auto !important;
  }
  .formButton {
    width: fit-content;
    margin-left: auto;
    margin-right: 1.5rem;
  }

  .mainButton {
    width: fit-content;
    margin-right: auto;
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

  .people1 {
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    width: 70px;
    height: 70px;
    margin-right: 1rem;
    position: absolute;
  }

  .people2 {
    background-size: cover;
    background-position: center;
    border-radius: 25rem;
    width: 100px;
    height: 100px;
    margin-right: 1rem;
    position: absolute;
  }

  .values {
    display: flex;
    width: 100%;
    padding-left: 12rem;
    padding-right: 12rem;
    margin-top: 5rem;
    z-index: 2;
  }

  .values h2 {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 48px;
    line-height: 52px;
    font-weight: 800;
  }

  .values .value1 {
    margin-right: 2rem;
    margin-top: 0.5rem;
    color: #000;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 30px;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .values .value2 {
    margin-right: 2rem;
    margin-top: 0.5rem;
    color: #000;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 30px;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .values span {
    color:#c554a0;
    font-weight: 500;
  }

  .first {
    background: #fff;
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
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2F010%20Lavora%20con%20noi%20un%20team%20fatto%20di%20persone.png?alt=media&token=a054eec2-4254-43b2-b730-ac8b46870df3);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -15%;
    right: 0;
    margin-right: 0;
  }

  .first .cols {
    display: flex;
    padding: 8rem;
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
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-bottom: 2rem;
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
    font-size: 20px;
    line-height: 24px;
  }

  .images {
    display: flex;
  }

  .images .img1 {
    width: 100%;
    height: 50vw;
    padding: 20rem;
  }

  .mailto {
    margin: 0;
    padding: 0;
    text-transform: none;
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 18px;
    border-bottom: 1px solid rgb(211, 211, 211);
    border-radius: 0 !important;
    margin-bottom: 0.5rem;
  }

  .input {
    width: 95%;
    margin-right: 4rem;
    margin-left: 4rem;
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

  .teamPhoto {
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FEntra%20nel%20nostro%20team.png?alt=media&token=5a99f56c-ece6-40d1-ab9c-2923c8708a2a);
    background-position: 50%;
    width: 100%;
    height: 40vw;
    border-radius: 30px;
    background-size: cover;
  }

  .secondPart {
    padding-top: 5rem;
    margin-top: 5rem;
    display: flex;
    align-items: center;
    padding: 8rem;
  }

  .secondPart .text {
    margin-left: 5rem;
  }

  .secondPart h2 {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 90%;
    margin-right: auto;
    text-align: left;
  }

  .secondPart p {
    color: #000;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 90%;
    margin-right: auto;
    text-align: left;
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
