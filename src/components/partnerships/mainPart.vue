<script>
export default {
  name: "mainPart",
  components: {},
  data() {
    return {};
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
  methods: {},
};
</script>

<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="glow"></div>
        <div class="glow2"></div>
        <div class="glow3"></div>
        <div class="glow4"></div>
        <div class="firstPart">
          <div class="subtitle">Partnerships</div>
          <h2>Costruiamo l'ecosistema del domani.</h2>
          <p>
            Increase developer velocity. Secure every step. Automate entire
            workflows. Redefine collaboration. Trusted by over 83 million
            developers.
          </p>
          <div class="mainButton">
            <a href="#first"
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
        </div>

        <div class="thirdDiv" id="first">
          <div class="glow"></div>
          <div class="glow2"></div>
          <div class="glow3"></div>
          <div class="glow4"></div>
          <div class="glow6"></div>
          <div class="glow7"></div>
          <div class="content">
            <div class="partnersImgs">
              <a
                href="https://studiofelli.com/"
                class="partnerImg transition"
                style="
                  left: 32%;
                  top: -15%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo1.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.atempospa.it/"
                class="partnerImg transition"
                style="
                  right: 16%;
                  top: 4%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo2.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.uniroma1.it/it/pagina-strutturale/home"
                class="partnerImg transition"
                style="
                  right: 32%;
                  top: -18%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo3.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://it.talent.com/"
                class="partnerImg transition"
                style="
                  right: 12%;
                  top: 43%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo4.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.aidp.it/gruppo/lazio.php"
                class="partnerImg"
                style="
                  right: 22%;
                  top: 84%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo5.png);
                "
              >
                <div class="" style=""></div>
              </a>

              <a
                href="https://www.in-recruiting.com/it/"
                class="partnerImg"
                style="
                  top: 60%;
                  left: 18%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo6.png);
                "
                ><div class="" style=""></div
              ></a>

              <a
                href="https://www.up-communication.com/"
                class="partnerImg transition"
                style="
                  left: 13%;
                  top: 14%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo7.png);
                "
                ><div class="" style=""></div
              ></a>

              <a
                href="https://www.cafieropezzalieassociati.it/"
                class="partnerImg"
                style="
                  left: 41%;
                  top: 98%;
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo8.png);
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
                <h2>Partners</h2>
                <p
                  style="
                    width: 40% !important;
                    margin-left: auto;
                    margin-right: auto;
                    color: #fff !important;
                  "
                >
                  Jobify, la tua ricerca e selezione, la tua ricerca e
                  selezione, la tua ricerca e selezione, la tua ricerca e
                  selezione, la tua ricerca e selezione
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
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
                Redefine collaboration. Trusted by over 83 million developers.
              </div>
              <div class="text2">
                Increase developer velocity. Secure every step. Automate entire
                workflows. Redefine collaboration. Trusted by over 83 million
                developers.
              </div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="secondPart">
          <div class="cols">
            <div class="col col2">
              <div class="text">
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
                Redefine collaboration. Trusted by over 83 million developers.
              </div>
              <div class="text2">
                Increase developer velocity. Secure every step. Automate entire
                workflows. Redefine collaboration. Trusted by over 83 million
                developers.
              </div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
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
            fill="#030812"
            fill-opacity="1"
            d="M0,64L40,58.7C80,53,160,43,240,48C320,53,400,75,480,96C560,117,640,139,720,144C800,149,880,139,960,117.3C1040,96,1120,64,1200,53.3C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>-->
        <div class="cols">
          <div class="col col_1">
            <p>Partners</p>
            <h2>Diventa nostro partner</h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, cerchiamo talenti per
              creare il futuro, cerchiamo talenti per creare il futuro
            </div>
          </div>
          <div class="col col_2 transition">
            <h3>Invia richiesta</h3>
            <div
              class="input"
              style="display: flex; width: 95%; margin: 0 0 1rem 0"
            >
              <input
                style="width: 100%; margin: 0 1rem 0 0"
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Nome azienda"
              />

              <input
                id="nav"
                style="width: 100%; margin: 0"
                class="input"
                type="text"
                name="nickname"
                placeholder="Città"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Via"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Email"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Settore"
              />
            </div>

            <div class="formButton">
              <a href="#first"
                ><button class="btn">
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
              ></a>
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
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");

.transition {
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.transition.active {
  transform: translateY(0);
  opacity: 1;
}

* {
  /*font-family: "Alliance No.1", sans-serif;*/
  /*font-family: "planer", sans-serif;*/
  font-family: "Heebo", sans-serif;
}

@media (min-width: 1024px) {
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
    margin-left: auto;
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
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .first {
    padding-top: 3rem;
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
  }

  .first .cols {
    display: flex;
    margin-top: 8rem;
    padding-left: 9rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
  }

  .firstPart {
    text-align: center;
    padding-top: 8rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
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
  }

  .firstPart p {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }

  .cols .col_1 {
    width: 120%;
  }

  .cols .col_2 {
    margin-top: 2rem;
    margin-left: 5rem;
  }

  .cols .col_3 {
    margin-top: 5rem;
  }
  .cols .col p {
    text-transform: uppercase;
    color: #010b15;
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
    color: #010b15;
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #010b15;
    letter-spacing: -0.04em;
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
  }

  .secondPart {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart h2 {
    color: #010b15;
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
    color: #627597;
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
  }

  .secondPart .text span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }

  .secondPart .text2 {
    margin-top: 0.5rem;
    color: #627597;
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
    margin-top: 15rem;
    width: 100%;
    background-color: #010c18;
    padding-top: 10rem;
    background-image: url(/src/assets/glob.png);
    background-size: cover;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: -5%;
    top: 10%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 23%;
    left: -5%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 40%;
    right: -4%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    top: 55%;
    opacity: 0.5;
    right: -4%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
  }

  .glow6 {
    position: absolute;
    width: 5vw;
    top: 0%;
    opacity: 0.5;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px #2eff9de6;
    -moz-box-shadow: 0px 0px 105px 45px #2eff9de6;
    box-shadow: 0px 0px 105px 45px #2eff9de6;
  }

  .glow7 {
    position: absolute;
    width: 5vw;
    top: 60%;
    opacity: 0.5;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px #2eff9de6;
    -moz-box-shadow: 0px 0px 105px 45px #2eff9de6;
    box-shadow: 0px 0px 105px 45px #2eff9de6;
  }

  .glow9 {
    position: absolute;
    width: 5vw;
    top: 25%;
    opacity: 0.5;
    right: 10%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
  }

  .thirdDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .thirdDiv .title h2 {
    color: #fff;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .thirdDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
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
    color: #627597;
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
    background: #ffffff2b;
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
    background: #0107124a;
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
    background: #0107124a;
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
    background-image: url(/src/assets/ph10.png);
    background-position: center;
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
    background-image: url(/src/assets/ph10.png);
    background-position: center;
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
