<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';

export default {
  name: "footer",
  components: {},
  data() {
    return {
      email1:"",
    };
  },
  mounted() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("year").innerHTML = year;

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
    registerNewsletter(){
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
          email: this.email1,
          data: dateTime,
        };

        db.collection("newsletter")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Newsletter";
          document.getElementById("subtitle").innerHTML = "Iscrizione avvenuta con successo.";
          setTimeout(() => {
            document.getElementById("notify").style.display = "none";
          }, 6000); // 👈️ time in milliseconds
          });
    }
    
  },
};
</script>

<template>
  <div class="footer">
    <div class="notify" id="notify">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#33548c" class="bi bi-check-lg" viewBox="0 0 16 16">
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
    <div class="content">
      <div class="col-logo">
        <img src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2FLogo%20Jobify%20versioni%20estese_Tavola%20disegno%201%20copia%2010.png?alt=media&token=baed9f0b-c891-4524-9635-60e4ea397134" />
        <div class="title2">Iscriviti alla newsletter</div>
        <div class="divInput">
          <div class="input">
            <input
              id="nav"
              class="input"
              type="text"
              placeholder="Inserisci la tua email"
              name="email1" 
              v-model="email1"
            />
          </div>
            <button class="btn" @click="registerNewsletter()">Iscriviti</button>
        </div>
        <div class="checkbox">
          <input type="checkbox" />
          <p>
            Accetto i
            <a href="https://www.iubenda.com/termini-e-condizioni/18605079" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Termini e Condizioni ">Termini e Condizioni</a>
          </p>
        </div>
      </div>
      <div class="col">
        <div class="title">Servizi</div>
        <router-link to="/openposition">
          <div class="link">Offerte di lavoro</div></router-link
        >
        <router-link to="/companies">
          <div class="link">Sei un'azienda?</div></router-link
        >
        <router-link to="/workers">
          <div class="link">Trova lavoro</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Piattaforma</div>
        <router-link to="/partnerships">
          <div class="link">Partnerships</div></router-link
        >
        <router-link to="/journal">
          <div class="link">Journal</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Azienda</div>
        <router-link to="/about">
          <div class="link">Chi siamo</div></router-link
        >
        <router-link to="/stories">
          <div class="link">Storie dei talenti</div></router-link
        >
        <router-link to="/workwithus">
          <div class="link">Lavora con noi</div></router-link
        >
        <router-link to="/contact">
          <div class="link">Contattaci</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Sedi</div>
        <router-link to="/contact"> <div class="link">Milano</div></router-link>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="link">
          <span id="year"></span> &nbsp;&nbsp;•&nbsp;&nbsp; Jobify Recruiting Srl. (Aut. Min.
          Prot. N.F205S530526 del 26.07.2022)
        </div>
        <a href="https://www.iubenda.com/privacy-policy/18605079" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a>
        <a href="https://www.iubenda.com/termini-e-condizioni/18605079" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Termini e Condizioni ">Termini e Condizioni</a>
      </div>
      <div class="right">
        <a href="https://www.facebook.com/jobifyrecruiting">
          <div class="link">Facebook</div>
        </a>
        <a href="https://www.linkedin.com/company/jobify-recruiting/">
          <div class="link">Linkedin</div>
        </a>
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

  .footer {
    width: 100%;
    background: linear-gradient(
      211deg,
      #0c2550,
      #071b38,
      rgb(1 10 20),
      #0c2550
    );
    background-size: 300%;
    overflow: visible;
    animation: animated_text 5s ease-in-out infinite;
    -moz-animation: animated_text 5s ease-in-out infinite;
    -webkit-animation: animated_text 5s ease-in-out infinite;
    /*border-top-right-radius: 60px;
    border-top-left-radius: 60px;*/
    position: absolute;
    z-index: 6;
  }

  .footer .content {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
  }

  .footer .content .col-logo {
    width: 30%;
  }

  .col-logo img {
    width: 210px;
  }

  .footer .content .col {
    width: 27%;
    margin-left: 2rem;
  }

  .footer .checkbox {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .footer .checkbox input {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .footer .checkbox p {
    margin-bottom: 0 !important;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
  }

  .col-logo .title2 {
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .content .col .title {
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
  }

  .content .col .link {
    color: rgb(222 222 222);
    font-size: 14px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    letter-spacing: 1px;
    font-weight: 300;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .content .col .link:hover {
    color: #fff;
  }

  .footer .bottom {
    padding-bottom: 4rem;
    padding-top: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    border-top: 2px solid #0a1e4375;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .footer .bottom .left {
    display: flex;
  }

  .footer .bottom .right {
    display: flex;
    margin-left: auto;
  }

  .bottom .link {
    margin-right: 1rem;
    color: rgb(199, 199, 199);
    font-weight: 400;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .input {
    width: fit-content;
    margin-right: 0.5rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
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
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }
}

@media (max-width: 1023px) {
}

@-webkit-keyframes animated_text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes animated_text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
}
</style>
