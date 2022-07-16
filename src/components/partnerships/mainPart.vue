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
          <div class="partners">
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo1.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo2.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo3.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo4.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo5.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo6.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo7.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
            <div
              class="partnerImg"
              style="
                background-image: url(/src/assets/partners/logo8.png);
                background-size: cover;
                background-position: center;
              "
            ></div>
          </div>
        </div>
        <div class="cols">
          <div class="col col_1">
            <p>Partners</p>
            <h2>Diventa nostro partner</h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, cerchiamo talenti per
              creare il futuro, cerchiamo talenti per creare il futuro
            </div>
            <div class="partners">
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo1.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo2.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo3.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo4.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo5.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo6.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo7.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
              <div
                class="partnerImg"
                style="
                  background-image: url(/src/assets/partners/logo8.png);
                  background-size: cover;
                  background-position: center;
                "
              ></div>
            </div>
          </div>
          <div class="col col_2">
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

            <a href="#first" class="flowSingleBtn">
              <span>Invia <span>></span></span>
              <div class="liquid"></div>
            </a>
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
  a {
    position: relative;
    padding: 14px 22px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    border-radius: 25rem;
    cursor: pointer;
    font-family: "Planer";
    margin-left: auto;
    margin-right: 2rem;
  }

  a span {
    position: relative;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
    font-family: "Planer";
    letter-spacing: 2px;
    font-weight: 600;
    z-index: 1;
  }

  a .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #0062f5;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  a .liquid::after,
  a .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #000;
  }

  a .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  a .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  a:hover .liquid {
    top: -120px;
  }

  .first {
    padding: 5rem;
    padding-top: 3rem;
  }

  .first .cols {
    display: flex;
    margin-top: 20rem;
    margin-bottom: 3rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .firstPart {
    padding-left: 4rem;
    padding-right: 4rem;
    text-align: center;
    padding-top: 8rem;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 72px;
    line-height: 76px;
    font-weight: 800;
    margin-bottom: 2rem;
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
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: rgb(211, 211, 211);
    font-size: 18px;
    line-height: 22px;
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

  .partners {
    display: flex;
    flex-wrap: wrap;
    margin-top: 3rem;
    margin-left: auto;
    width: fit-content;
    margin-right: auto;
  }

  .partnerImg {
    width: 100px;
    height: 100px;
    background: #010712;
    border-radius: 16px;
    float: left;
    margin-right: 2rem;
    margin-bottom: 2rem;
  }

  .glow {
    position: absolute;
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
