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
        <div class="glow5"></div>

        <div class="firstPart">
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
              top: 90%;
              left: 10%;
              background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
            "
          ></div>
          <div
            class="people2"
            style="
              top: 10%;
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
              top: 5%;
              right: 10%;
              background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
            "
          ></div>
          <div
            class="people2"
            style="
              top: 45%;
              right: 0%;
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
              top: 100%;
              right: 0%;
              background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
            "
          ></div>
          <div class="subtitle">Lavora con noi</div>
          <h2>Il team al centro di tutti i processi umani.</h2>
          <p>
            Increase developer velocity. Secure every step. Automate entire
            workflows. Redefine collaboration. Trusted by over 83 million
            developers.
          </p>
          <div class="mainButton">
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
        <div class="values" style="margin-top: 20rem">
          <div class="value1">
            <h2>Valori</h2>
            <span>Increase developer velocity.</span> Secure every step.
            Automate entire workflows. Redefine collaboration. Trusted by over
            83 million developers.
          </div>
          <div class="value2" style="margin-top: 3rem">
            <h2>Valori</h2>
            Increase developer velocity. Secure every step. Automate entire
            workflows. Redefine collaboration.
            <span>Trusted by over 83 million developers.</span>
          </div>
        </div>

        <div class="secondPart">
          <div class="teamPhoto transition"></div>
          <div class="text">
            <h2>Il team al centro</h2>
            <p>
              Increase developer velocity. Secure every step. Automate entire
              workflows. Redefine collaboration. Trusted by over 83 million
              developers.
            </p>
          </div>
        </div>

        <div class="cols">
          <div class="col col_1">
            <p>Lavora con noi</p>
            <h2>Cerchiamo talenti per creare il futuro</h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, cerchiamo talenti per
              creare il futuro, cerchiamo talenti per creare il futuro
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
                name="nickname"
                placeholder="Nome"
              />

              <input
                id="nav"
                style="width: 100%; margin: 0"
                class="input"
                type="text"
                name="nickname"
                placeholder="Cognome"
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
                placeholder="Linkedin Url"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Telefono"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Dettagli"
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
    margin-top: 10rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .values h2 {
    color: #010b15;
    letter-spacing: -0.04em;
    font-size: 48px;
    line-height: 52px;
    font-weight: 800;
  }

  .values .value1 {
    margin-right: 2rem;
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
  }

  .values .value2 {
    margin-right: 2rem;
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
  }

  .values span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .first {
    padding: 8rem;
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

  .firstPart {
    text-align: center;
    padding-top: 8rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
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
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  .firstPart p {
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }

  .first .cols {
    display: flex;
    margin-top: 10rem;
    margin-bottom: 3rem;
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
    color: #010b15;
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
    background-image: url(/src/assets/team.jpg);
    background-position: center;
    width: 100%;
    height: 40vw;
    border-radius: 30px;
  }

  .secondPart {
    padding-top: 5rem;
    margin-top: 5rem;
    display: flex;
    align-items: center;
  }

  .secondPart .text {
    margin-left: 5rem;
  }

  .secondPart h2 {
    color: #010b15;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 90%;
    margin-right: auto;
    text-align: left;
  }

  .secondPart p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 90%;
    margin-right: auto;
    text-align: left;
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: 10%;
    top: 30%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 70%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 75%;
    left: 80%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    top: 30%;
    opacity: 0.5;
    left: 85%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 255, 179, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 255, 179, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 255, 179, 0.9);
  }

  .glow5 {
    position: absolute;
    width: 5vw;
    top: 10%;
    opacity: 0.5;
    left: 65%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 255, 179, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 255, 179, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.9);
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
