<script>
export default {
  name: "homePart2",
  components: {},
  data() {
    return {};
  },
  mounted() {},
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
    align-items: center;
    width: 100%;
  }

  .second .flow .elemsx {
    width: 50%;
    border-right: 2px solid #dadfe95d;
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

  .second .flow .elemdx {
    width: 50%;
    text-align: center;
  }

  .second .flow .elemdx .image {
    width: 100%;
    height: 20vw;
    background: white;
    left: -10%;
    margin-top: 10rem;
    border-radius: 30px;
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
