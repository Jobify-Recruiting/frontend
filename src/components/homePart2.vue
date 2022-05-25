<script>
export default {
  name: "homePart2",
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.onscroll = function () {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 2800 ||
        document.documentElement.scrollTop > 2800
      ) {
        console.log(document.documentElement.scrollTop);
        document.getElementById("text2").style.fontSize = "64px";
        document.getElementById("text2").style.lineHeight = "68px";
      } else {
        document.getElementById("text2").style.fontSize = "94px";
        document.getElementById("text2").style.lineHeight = "98px";
      }
    }
  },
  methods: {},
};
</script>

<template>
  <div class="dynamicContent">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="position-absolute width-full z-1"
      style="margin-bottom: -1rem"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#010712"></path>
    </svg>
    <div class="mainTitle" id="first">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>Jobify, la tua ricerca e selezione</h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
          </div>
          <div class="video"></div>
        </div>
      </div>
    </div>
    <div class="secondDiv" id="second">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>
              Guarda il nostro workflow, come lavoriamo
              <span>ogni giorno con i nostri clienti</span>
            </h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
          </div>
        </div>
        <div class="second">
          <div class="flow">
            <div class="elemsx">
              <h2>
                Guarda il nostro <span>workflow</span>, come lavoriamo ogni
                giorno con i nostri clienti
              </h2>
              <p>
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>
            </div>
            <div class="elemdx">
              <div class="image"></div>
            </div>
          </div>

          <div class="numbers">
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
          </div>

          <div class="flow">
            <div class="elemsx" style="padding-bottom: 10rem">
              <div class="image2"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
            </div>
            <div class="elemdx">
              <h2 class="elemH2" id="text2">
                Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti
              </h2>
              <p class="elemP">
                Qui scriviamo la descrizione riferito al testo superiore.
              </p>
            </div>
          </div>

          <div class="flowSingle">
            <div class="flowSingleContent">
              <h2 class="flowSingleTitle">
                Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti
              </h2>
              <a href="#first" class="flowSingleBtn">
                <span>Scopri di più <span>></span></span>
                <div class="liquid"></div>
              </a>
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

* {
  /*font-family: "Rogan-Regular";*/
  font-family: "Planer", sans-serif;
}

@media (min-width: 1024px) {
  .dynamicContent {
    margin-top: 5rem;
  }
  .mainTitle {
    height: 100%;
    width: 100%;
    padding-bottom: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #010712;
  }

  .mainTitle .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .content .first {
    display: flex;
    align-items: center;
  }

  .mainTitle .title h2 {
    color: white;
    font-size: 54px;
    font-weight: 700;
    width: 90%;
    line-height: 58px;
  }

  .mainTitle .title p {
    margin-top: 0.5rem;
    color: white;
    font-size: 24px;
    width: 90%;
    line-height: 28px;
  }

  .first .video {
    width: 70vw;
    height: 25vw;
    background: white;
    border-radius: 30px;
  }

  .secondDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #010712;
  }

  .secondDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .secondDiv .title h2 {
    color: white;
    font-size: 54px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 58px;
    font-family: "Alliance No.1", sans-serif;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.03em !important;
  }

  .secondDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #3bf0e4 0%, #bca1f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-family: "Alliance No.1", sans-serif;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.03em !important;
    font-weight: 800 !important;
  }

  .secondDiv .title p {
    margin-top: 0.5rem;
    color: white;
    font-size: 24px;
    width: 100%;
    text-align: center;
    line-height: 28px;
    letter-spacing: -0.03em !important;
  }

  .second .flow {
    margin-top: 15rem;
    display: flex;
    width: 100%;
  }

  .second .flow .elemsx {
    width: 50%;
    border-right: 2px solid #ffffff40;
    text-align: left;
    margin: 2rem;
  }

  .second .flow .elemsx h2 {
    color: white;
    font-size: 54px;
    line-height: 58px;
    font-weight: 700;
  }

  .second .flow .elemsx h2 span {
    color: white;
    font-size: 54px;
    line-height: 58px;
    font-weight: 700;
    background: -webkit-linear-gradient(-70deg, #3bf0e4 0%, #bca1f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .second .flow .elemsx p {
    margin-top: 0.5rem;
    color: rgb(219, 219, 219);
    font-size: 24px;
    width: 80%;
    line-height: 28px;
    letter-spacing: -0.03em !important;
    font-weight: 700;
  }

  .elemH2 {
    background: -webkit-linear-gradient(-70deg, #3bf0e4 0%, #bca1f7 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 94px;
    line-height: 98px;
    font-weight: 700;
    transition: all 0.5s ease-out;
  }

  .elemP {
    margin-top: 0.5rem;
    color: rgb(219, 219, 219);
    font-size: 24px;
    width: 80%;
    line-height: 28px;
    letter-spacing: -0.03em !important;
    font-weight: 700;
  }

  .elemP_image {
    margin-top: 15rem !important;
    color: rgb(219, 219, 219) !important;
    font-size: 24px !important;
    width: 90% !important;
    line-height: 28px !important;
    letter-spacing: -0.03em !important;
    font-weight: 700 !important;
  }

  .elemP_image span {
    margin-top: 15rem !important;
    color: rgb(115, 164, 255) !important;
    font-size: 24px !important;
    width: 90% !important;
    line-height: 28px !important;
    letter-spacing: -0.03em !important;
    font-weight: 700 !important;
  }

  .second .flow .elemdx {
    width: 50%;
  }

  .image {
    width: 100%;
    height: 20vw;
    background: white;
    left: -10%;
    margin-top: 10rem;
    border-radius: 30px;
  }

  .image2 {
    width: 100%;
    height: 33vw;
    background: white;
    right: 5%;
    border-radius: 30px;
    margin-bottom: 10rem;
  }

  .numbers {
    display: flex;
    padding: 5rem;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: auto;
    margin-top: 10rem;
  }

  .numbers .number {
    text-align: center;
    padding-left: 5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-right: 5rem;
  }

  .numbers .number .num {
    color: white;
    font-weight: 700;
    font-size: 32px;
  }

  @property --num {
    syntax: "<integer>";
    initial-value: 0;
    inherits: false;
  }

  .num {
    transition: --num 5s;
    counter-set: num var(--num);
    font-weight: 700;
    font-size: 32px;
  }
  .num::after {
    content: counter(num);
    font-weight: 700;
    font-size: 32px;
  }
  .num:hover {
    --num: 800;
  }

  .numbers .number .subtitle {
    color: #fff;
    font-size: 18px;
  }

  .second .flowSingle {
    display: flex;
    width: 100%;
  }

  .second .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle {
    color: white;
    font-size: 54px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 58px;
    font-family: "Alliance No.1", sans-serif;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.03em !important;
  }

  a {
    position: relative;
    padding: 14px 22px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    border-radius: 16px;
    margin-top: 3rem;
    cursor: pointer;
    font-family: "Planer";
  }

  a span {
    position: relative;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
    font-family: "Planer";
    letter-spacing: 5px;
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

  .flowSingleBtn {
    margin-left: auto;
    margin-right: auto;
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

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
