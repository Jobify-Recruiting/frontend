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
        <div class="cols">
          <div class="col col_1">
            <p>Lavora con noi</p>
            <h2>Cerchiamo talenti per creare il futuro</h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, cerchiamo talenti per
              creare il futuro, cerchiamo talenti per creare il futuro
            </div>
          </div>
          <div class="col col_2">
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

            <a href="#first" class="flowSingleBtn">
              <span>Inizia ora <span>></span></span>
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
    padding: 8rem;
    padding-top: 3rem;
  }

  .first .cols {
    display: flex;
    margin-top: 8rem;
    margin-bottom: 3rem;
    padding-left: 4rem;
    padding-right: 4rem;
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
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
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
