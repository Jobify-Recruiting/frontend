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
      id:"",
      job_title:"",
      location:"",
      company:"",
      contact:"",
      publication_date:"",
      closing_date: "",
      contract_type: "",
      area_funzione: "",
    };
  },
  async mounted() {

    const db = firebase
        .initializeApp({ projectId: "jobify-d2a24" })
        .firestore();

    const querySnapshot = await getDocs(collection(db, "storie_dei_talenti"));
    querySnapshot.forEach((doc) => {
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

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";
    
  },
  methods: {
    uploadJob(){
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
          id:this.id,
          job_title:this.job_title,
          location:this.location,
          company:this.company,
          contact:this.contact,
          publication_date:this.publication_date,
          closing_date: this.closing_date,
          contract_type: this.contract_type,
          area_funzione: this.area_funzione,
        };

        db.collection("offerte_di_lavoro")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Storia del talento";
          document.getElementById("subtitle").innerHTML = "Storia avvenuta con successo.";
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
          <div class="firstPartBody">
            <div class="subtitle">Caricamento di una posizione di lavoro</div>
              <h2>Carica una nuova posizione lavorativa</h2>

              <p>
                Questa è una sezione dedicata unicamente agli amministratori di Jobify Recruiting.
              </p>
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
        <div class="notify" id="notify">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c2550" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
      </div>
      <div class="text">
        <div class="title" id="title"></div>
        <div class="subtitle" id="subtitle"></div>
      </div>
    </div>
        <div class="second">
          <div class="featureds">
            <div class="titles">
              <h2>Carica</h2>
            </div>
            <div class="featuredContent">
              <div class="input">
                <h3>ID</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci ID"
                  name="id" 
                  v-model="id"
                />
              </div>
              <div class="input">
                <h3>Job Title</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci job title"
                  name="job_title" 
                  v-model="job_title"
                />
              </div>
              <div class="input">
                <h3>Location</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci location"
                  name="location" 
                  v-model="location"
                />
              </div>
              <div class="input">
                <h3>Azienda</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci company"
                  name="company" 
                  v-model="company"
                />
              </div>
              <div class="input">
                <h3>Contact</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci contact di riferimento in Jobify"
                  name="contact" 
                  v-model="contact"
                />
              </div>
              <div class="input">
                <h3>Data di pubblicazione</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci la data di pubblicazione"
                  name="publication_date" 
                  v-model="publication_date"
                />
              </div>
              <div class="input">
                <h3>Data di chiusura</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci la data di chiusura"
                  name="closing_date" 
                  v-model="closing_date"
                />
              </div>
              <div class="input">
                <h3>Tipo di contratto</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci tipo di contratto"
                  name="contract_type" 
                  v-model="contract_type"
                />
              </div>
              <div class="input">
                <h3>Area funzionale</h3>
                <input
                  id="nav"
                  class="input"
                  type="text"
                  placeholder="Inserisci area funzionale"
                  name="area_funzione" 
                  v-model="area_funzione"
                />
              </div>
              <button class="btn" @click="uploadJob()">Carica offerta</button>
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

*{
  font-family: "Merienda";
}

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

  .second {
    padding-bottom: 5rem;
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
    background-size: cover;
    background-position: center;
    width: 18vw;
    float: left;
    /*height: 11vw;*/
    height: 18vw;
    position: relative;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }

  .input {
    width: 95%;
    margin-bottom: 1rem;
  }

  .input h3{
    font-size: 20px;
    line-height: 24px;
    color: #000;
  }

  .input input {
    font-size: 14px;
    border-radius: 12px;
    color: #000;
    box-shadow: none;
    width: 97%;
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

  .input textarea {
    font-size: 14px;
    border-radius: 12px;
    color: #000;
    box-shadow: none;
    width: 97%;
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
    color: #000;
    opacity: 1; /* Firefox */
  }

  input:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  textarea:focus {
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
