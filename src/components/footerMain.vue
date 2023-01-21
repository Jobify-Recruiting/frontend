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
    <div class="content">
      <div class="col-logo">
        <a href="/">
          <img src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2FLogo%20Jobify%20versioni%20estese_Tavola%20disegno%201%20copia%2010.png?alt=media&token=baed9f0b-c891-4524-9635-60e4ea397134" />
        </a>
        <div class="title2">Iscriviti alla newsletter</div>
        <div class="divInput">
          <!--<div class="input">
            <input
              id="nav"
              class="input"
              type="text"
              placeholder="Inserisci la tua email"
              name="email1" 
              v-model="email1"
            />
          </div>-->
            <a href="https://www.linkedin.com/newsletters/jobify-recruiting-newsletter-6967759642458251264/" target="blank">
              <button class="btn">Iscriviti alla newsletter</button>
            </a>
        </div>
        <!--<div class="checkbox">
          <input type="checkbox" />
          <p>
            Accetto i
            <a href="https://www.iubenda.com/termini-e-condizioni/18605079" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Termini e Condizioni ">Termini e Condizioni</a>
          </p>
        </div>-->
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
      <div class="col">
        <div class="title">Associati</div>
        <a href="https://www.aidp.it/" target="blank"> 
          <div class="link">
            <img src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FAIDP-logo.png?alt=media&token=7818036f-5aeb-4961-a536-5c0497eabc6c" />
          </div>
        </a>
        <a href="https://www.assolombarda.it/" target="blank"> 
          <div class="link">
            <img src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fassolombarda.png?alt=media&token=d0f6b530-9bc3-4829-a9ad-75b8a3a5b9e7" />
          </div>
        </a>
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
          <div class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
            </svg>
          </div>
        </a>
        <a href="https://www.linkedin.com/company/jobify-recruiting/">
          <div class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
          </div>
        </a>
        <a href="https://www.instagram.com/jobify_recruiting/">
          <div class="link">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
    <div class="bottom_signed">
      <div class="left">
        <a href="">
          <div class="link">
            Website made by Miutifin Project
          </div>
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

  .link img{
    width: 100%;
    margin-bottom: 1.5rem;
  }

  .footer .bottom {
    padding-bottom: 0.5rem;
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
    margin-right: 2rem;
    color: rgb(199, 199, 199);
    font-weight: 400;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  .footer .bottom_signed {
    padding-bottom: 4rem;
    padding-top: 0rem;
    margin-left: 5rem;
    margin-right: 5rem;
    display: flex;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .bottom_signed .link {
    margin-right: 2rem;
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

  a:hover{
    text-decoration: unset;
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
    font-weight: 600;
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
