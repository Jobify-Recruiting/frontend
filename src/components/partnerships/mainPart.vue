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
      city: "",
      address: "",
      email: "",
      industry: "",
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

  },
  methods: {
    requestPartner(){
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
          city: this.city,
          address: this.address,
          email: this.email,
          industry: this.industry,
          data: dateTime,
        };

        db.collection("richieste_partners")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Richiesta Partner";
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
          <div class="firstPartBody">
            <div class="subtitle">Partnerships</div>
              <h2>Una crescita solida con chi crede nei valori di Jobify Recruiting</h2>

              <p>
                Da sempre Jobify Recruiting seleziona partner strategici per la crescita del business. Il nostro partner ideale crede nei valori dell’agenzia di head hunting ed è pronto a mettersi a disposizione per contribuire al suo successo e al nostro.
              </p>

              <div class="mainButton">
                <a href="#partners"
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

        <div class="thirdDiv" id="partners">
          <div class="content">
            <div class="partnersImgs">
              <a
                href="https://studiofelli.com/"
                target="blank"
                class="partnerImg transition"
                style="
                  left: 31%;
                  top: -18%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo1.png?alt=media&token=03248c4f-dd05-46d4-aa48-2a379d97d659);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.value4you.it/"
                target="blank"
                class="partnerImg transition"
                style="
                  right: 16%;
                  top: 15%;
                  background-image: url(https://www.value4you.it/wp-content/uploads/2020/04/logo_w.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/home"
                target="blank"
                class="partnerImg transition"
                style="
                  right: 32%;
                  top: -18%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo3.png?alt=media&token=aeee0210-dfef-47dc-8617-59228505717a);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://it.talent.com/"
                target="blank"
                class="partnerImg transition"
                style="
                  right: 18%;
                  top: 60%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo4.png?alt=media&token=d02f1c3d-d0c0-447a-8895-14e09350edb7);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.aidp.it/gruppo/lazio.php"
                target="blank"
                class="partnerImg"
                style="
                  right: 45%;
                  top: 94%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo5.png?alt=media&token=a3a5026a-ec46-420a-81e9-abc97e134f6f);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.in-recruiting.com/it/"
                target="blank"
                class="partnerImg"
                style="
                  top: 60%;
                  left: 18%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo6.png?alt=media&token=54ac02b4-d5e2-429a-8926-ff40e9e7dfe4);
                "
                ><div class="" style=""></div
              ></a>

              <a
                href="https://www.up-communication.com/"
                target="blank"
                class="partnerImg transition"
                style="
                  left: 13%;
                  top: 14%;
                  background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Flogo7.png?alt=media&token=96c67df3-7cb6-4436-967e-440cc4236351);
                "
                ><div class="" style=""></div
              ></a>
            </div>
            <div
              class="first"
              style="
                display: inherit !important;
                background: transparent !important;
                padding-bottom: 3rem !important;
              "
            >
              <div class="title">
                <h2>Le partnership attive</h2>
                <p
                  style="
                    width: 40% !important;
                    margin-left: auto;
                    margin-right: auto;
                    color: #000 !important;
                  "
                >
                Pochi partner di qualità eccellente: è questo il modo di lavorare di Jobify Recruiting, l’agenzia di head
                hunting fatta dalle persone per le persone.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="secondPart">
          <div class="cols">
            <div class="col colImage">
              <div class="image transition"></div>
            </div>
            <div class="col col2">
              <div class="text">
                <span>Un partner è un’azienda che collabora con un’altra e ne condivide mission, vision e valori,</span> in vista di un
obiettivo comune. Nel nostro caso, Jobify Recruiting collabora con enti, aziende e associazioni per diventare
un punto di riferimento nel settore della selezione, ricerca e valorizzazione dei talenti.
              </div>
              <div class="text2">
                Ogni persona ha un talento e ogni talento può essere valorizzato dalla giusta azienda. Questo è il nostro
modo di pensare e lavorare, e il modo di pensare e lavorare che chiediamo a chi <span>sceglie di collaborare con
noi, diventando partner di Jobify Recruiting.</span>
              </div>
            </div>
          </div>
        </div>
        <div class="secondPart">
          <div class="cols">
            <div class="col col2">
              <div class="text">
                <span>La nostra missione, e quella di chi decide di diventare nostro partner, è quella di creare il punto di incontro
tra la persona che cerca lavoro</span> e l’azienda disposta ad assumerla. Si tratta di un match che deve essere
perfetto e corrispondere alle esigenze di entrambe le parti, che decidono di unirsi nel nome degli stessi
valori e ideali, andando oltre la tradizionale visione del candidato come risorsa umana da “sfruttare”, sulla
base di un dato job title ed esperienza.
              </div>
              <div class="text2">
                In Jobify Recruiting, quelle che per la classica agenzia di recruiting sono risorse umane, diventano persone e
talenti e, ai nostri partner, chiediamo la stessa visione innovativa di <span>un mercato del lavoro in continua
evoluzione e cambiamento.</span>
              </div>
            </div>
            <div class="col colImage">
              <div class="image2 transition"></div>
            </div>
          </div>
        </div>
        <!--<svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style="position: absolute; top: 60%; z-index: 10"
        >
          <path
            fill="#0c2550"
            fill-opacity="1"
            d="M0,64L40,58.7C80,53,160,43,240,48C320,53,400,75,480,96C560,117,640,139,720,144C800,149,880,139,960,117.3C1040,96,1120,64,1200,53.3C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>-->
        <div class="cols">
          <div class="col col_1">
            <p>Partners</p>
            <h2>Diventa<br><span>nostro partner</span> </h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, persone disposte a mettersi in gioco e aziende innovative pronte a
              offrire opportunità di lavoro e crescita personale e professionale. Diventa nostro partner!
            </div>
          </div>
          <div class="col col_2 transition">
            <h3>Invia la richiesta</h3>
            <div
              class="input"
              style="display: flex; width: 95%; margin: 0 0 1rem 0"
            >
              <input
                style="width: 100%; margin: 0 1rem 0 0"
                id="nav"
                class="input"
                type="text"
                name="name" 
                v-model="name"
                placeholder="Nome azienda"
              />

              <input
                id="nav"
                style="width: 100%; margin: 0"
                class="input"
                type="text"
                name="city" 
                v-model="city"
                placeholder="Città"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="address" 
                v-model="address"
                placeholder="Via"
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
                name="industry" 
                v-model="industry"
                placeholder="Settore"
              />
            </div>

            <div class="formButton">
              <button class="btn" @click="requestPartner()">
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

  .first {
    background: #fff;
  }

  .first .cols {
    display: flex;
    margin-top: 8rem;
    padding-left: 9rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
  }

  /*.firstPart {
    padding-top: 11rem;
    padding-bottom: 15rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    background: #0c2550;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 72px;
    line-height: 76px;
    font-weight: 800;
    margin-bottom: 1rem;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .firstPart p {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    color: #000;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }*/

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
    height: 65vh;
    width: 56%;
    padding-left: 8rem;
    padding-right: 0;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FPartnership%20Una%20crescita%20solida.png?alt=media&token=340abd73-707f-40d3-8d64-963d734556e8);
    background-position: right;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
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
    color: #000;
    letter-spacing: -0.04em;
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .cols .col h2 span{
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.03em !important;
    font-size: 56px;
    line-height: 65px;
    font-weight: 700;
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

  .secondPart {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart h2 {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart .text {
    margin-top: 0.5rem;
    color: #000;
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
  }

  .secondPart .text span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
    font-size: 26px;
    line-height: 30px;
  }

  .secondPart .text2 {
    margin-top: 0.5rem;
    color: #000;
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    margin-top: 3rem;
    width: 80%;
    margin-left: 5rem;
    margin-bottom: 3rem;
  }

  .secondPart .cols {
    margin-top: 5rem !important;
  }

  .secondPart .cols .col2 {
    width: 30%;
  }

  .thirdDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
    padding-top: 10rem;
    background-image: url(/src/assets/glob.png);
    background-size: cover;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .thirdDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .thirdDiv .title h2 {
    color: #000;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .thirdDiv .title h2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
  }

  .thirdDiv .title p {
    margin-top: 0.5rem;
    color: #000;
    font-size: 20px;
    width: 100%;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }

  .partnersButton {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .partnersImgs {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .partnerImg {
    width: 135px;
    height: 135px;
    /*background: rgba(162, 0, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);*/
    background: #0c2550;
    -webkit-box-shadow: 0px 0px 133px 17px #005dff2b;
    -moz-box-shadow: 0px 0px 133px 17px #005dff2b;
    box-shadow: 0px 0px 133px 17px #005dff2b;
    border: 1px solid #fff;
    padding: 1rem;
    border-radius: 25rem;
    position: absolute;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    transition: all 0.3s ease-out;
  }

  .partnerImg:hover {
    transform: scale(2);
  }

  .partnerImg2 {
    width: 105px;
    height: 105px;
    background: transparent;
    border: 2px solid #0a1e4375;
    border-radius: 16px;
    position: absolute;
  }

  .partnerImg3 {
    width: 45px;
    height: 45px;
    background: #0c25504a;
    border-radius: 25rem;
    position: absolute;
    background: rgba(0, 140, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
  }

  .partnerImg5 {
    width: 45px;
    height: 45px;
    background: #0c25504a;
    border-radius: 25rem;
    position: absolute;
    background: rgba(0, 255, 136, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
  }

  .partnerImg4 {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 2px solid #b5b7ba;
    border-radius: 16px;
    position: absolute;
  }

  .image {
    width: 30vw;
    height: 35vw;
    margin-right: 2rem;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FPartnership%20-%20Partner.png?alt=media&token=df915e04-bf6c-49f5-8831-14fb1d7f20f3);
    background-position: 75%;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
  }

  .image2 {
    width: 30vw;
    height: 35vw;
    margin-right: 2rem;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FPartnership%20-%20Mission.png?alt=media&token=7c7babb6-df72-42a3-9708-2fe8e1875b73);
    background-position: 88%;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-right: auto;
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

  .glow {
    width: 5vw;
    opacity: 0.5;
    transform: scale(3.5);
    left: 3%;
    top: 23%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    transform: scale(3.5);
    top: 70%;
    z-index: 15;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
    box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 55%;
    left: 105%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 10%;
    opacity: 0.5;
    left: 110%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
  }
  .glow5 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 90%;
    opacity: 0.5;
    left: 110%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
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
