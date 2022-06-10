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
        document.body.scrollTop > 3000 ||
        document.documentElement.scrollTop > 3000
      ) {
        console.log(document.documentElement.scrollTop);
        document.getElementById("text2").style.fontSize = "74px";
        document.getElementById("text2").style.lineHeight = "68px";
      } else {
        document.getElementById("text2").style.fontSize = "94px";
        document.getElementById("text2").style.lineHeight = "98px";
      }

      if (
        document.body.scrollTop > 8500 ||
        document.documentElement.scrollTop > 8500
      ) {
        document.getElementById("text3").style.fontSize = "74px";
        document.getElementById("text3").style.lineHeight = "68px";
      } else {
        document.getElementById("text3").style.fontSize = "94px";
        document.getElementById("text3").style.lineHeight = "98px";
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
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
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
          <div class="video">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/-VmEWZsUIGY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
                Guarda il nostro <span>workflow, come lavoriamo ogni</span>
                giorno con i nostri clienti
              </h2>
              <p>
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>
              <button class="btn2">
                <a href="#">Entra ora nel mondo Jobify <span>></span></a>
              </button>
            </div>
            <div class="elemdx">
              <div class="image"></div>
              <p class="elemdxP_small">
                Qui scriviamo la descrizione riferito al testo superiore.
              </p>
            </div>
          </div>

          <div class="numbers">
            <div class="numbersHR_left"></div>
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
            <div class="numbersHR_right"></div>
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
              <div class="elemP_point2"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2"></div>
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
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>

              <div class="elemdx_rectangle1"></div>
              <div class="elemdx_rectangle2"></div>
              <div class="elemdx_rectangle3"></div>

              <div class="elemdx_rectangle4"></div>
              <div class="elemdx_rectangle5"></div>
              <div class="elemdx_rectangle6"></div>
            </div>
          </div>

          <div class="flowSingle">
            <div class="flowSingleContent">
              <h2 class="flowSingleTitle">
                Guarda il nostro workflow, come
                <span>lavoriamo ogni giorno con i nostri clienti</span>
              </h2>
              <a href="#first" class="flowSingleBtn">
                <span>Scopri di più <span>></span></span>
                <div class="liquid"></div>
              </a>
            </div>
          </div>
          <div class="flow">
            <div class="elemsx" style="padding-bottom: 10rem">
              <h2 class="elemH2_v2" id="text2">
                Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti
              </h2>
              <p class="">
                Qui scriviamo la descrizione riferito al testo superiore. Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>

              <div class="elemdx_rectangle1"></div>
              <div class="elemdx_rectangle3"></div>

              <div class="elemdx_rectangle4"></div>
              <div class="elemdx_rectangle6"></div>
            </div>
            <div class="elemdx">
              <div class="image3"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
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
              <div class="elemP_point2"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
            </div>
            <div class="elemdx">
              <h2 class="elemH2" id="text3">
                Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti
              </h2>
              <p class="elemP">
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>

              <div class="elemdx_rectangle1"></div>
              <div class="elemdx_rectangle2"></div>
              <div class="elemdx_rectangle3"></div>

              <div class="elemdx_rectangle4"></div>
              <div class="elemdx_rectangle5"></div>
              <div class="elemdx_rectangle6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="thirdDiv" id="third">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="content">
        <div class="partnersImgs">
          <div
            class="partnerImg"
            style="
              left: 15%;
              background-image: url(/src/assets/ph1.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              right: 15%;
              top: 20%;
              background-image: url(/src/assets/ph4.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              right: 3%;
              background-image: url(/src/assets/ph5.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              right: 0%;
              top: 43%;
              background-image: url(/src/assets/ph3.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              right: 10%;
              top: 75%;
              background-image: url(/src/assets/ph2.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              top: 55%;
              background-image: url(/src/assets/ph3.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              left: 5%;
              top: 25%;
              background-image: url(/src/assets/ph6.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg"
            style="
              left: 12%;
              top: 75%;
              background-image: url(/src/assets/ph1.jpeg);
              background-size: cover;
              background-position: center;
            "
          ></div>

          <div class="partnerImg3" style="left: 0%"></div>
          <!--<div class="partnerImg4" style="left: 0%"></div>-->

          <div class="partnerImg5" style="left: -5%; top: 30%"></div>

          <div class="partnerImg3" style="left: -5%; top: 80%"></div>

          <div class="partnerImg3" style="left: 80%; top: 50%"></div>

          <div class="partnerImg5" style="left: 70%"></div>

          <div class="partnerImg5" style="left: 95%; top: 25%"></div>

          <div class="partnerImg3" style="left: 95%; top: 80%"></div>

          <div class="partnerImg5" style="left: 15%; top: 55%"></div>

          <div class="partnerImg5" style="left: 10%; top: 95%"></div>

          <div class="partnerImg5" style="left: 25%; top: 75%"></div>

          <div class="partnerImg3" style="left: 30%; top: 15%"></div>

          <div class="partnerImg3" style="left: 70%; top: 75%"></div>

          <div class="partnerImg3" style="left: 100%; top: 5%"></div>

          <div class="partnerImg3" style="left: 100%; top: 60%"></div>

          <div class="partnerImg5" style="left: 85%; top: 95%"></div>

          <!--<div class="partnerImg2" style="left: 15%"></div>
          <div class="partnerImg2" style="right: 15%; top: 20%"></div>
          <div class="partnerImg2" style="right: 3%"></div>
          <div class="partnerImg2" style="right: 0%; top: 43%"></div>
          <div class="partnerImg2" style="right: 10%; top: 75%"></div>
          <div class="partnerImg2" style="top: 55%"></div>
          <div class="partnerImg2" style="left: 5%; top: 25%"></div>
          <div class="partnerImg2" style="left: 12%; top: 75%"></div>-->
        </div>
        <div class="first" style="display: inherit !important">
          <div class="title">
            <h2>Partners</h2>
            <p
              style="
                width: 70% !important;
                margin-left: auto;
                margin-right: auto;
              "
            >
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
            <a href="#first" class="flowSingleBtn">
              <span>Scopri di più <span>></span></span>
              <div class="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="fourthDiv" id="fourth">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>Resta in <span>contatto</span> con noi</h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
            <a href="#first" class="flowSingleBtn2">
              <span>Scopri di più <span>></span></span>
              <div class="liquid"></div>
            </a>
          </div>
        </div>
        <div class="contentImage">
          <div class="square"></div>
          <div class="square2"></div>
          <div class="square3"></div>
          <div class="square4"></div>
          <div class="rectangle">
            <h2>Assistenza H24</h2>
            <p>Siamo a tua completa disposizione.</p>
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
  /*font-family: "Alliance No.1", sans-serif;*/
  font-family: "planer", sans-serif;
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
    background-color: #fff;
  }

  .mainTitle .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .content .first {
    display: flex;
    align-items: center;
    padding-bottom: 5rem;
  }

  .mainTitle .title h2 {
    color: #010712;
    font-size: 54px;
    font-weight: 700;
    width: 90%;
    line-height: 58px;
  }

  .mainTitle .title p {
    margin-top: 0.5rem;
    color: #6c6c6c;
    font-size: 22px;
    width: 90%;
    line-height: 32px;
    font-weight: 700 !important;
  }

  .first .video {
    width: fit-content;
    height: fit-content;
    background: #010712;
    border-radius: 30px;
  }

  .secondDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .secondDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .secondDiv .title h2 {
    color: #010712;
    font-size: 60px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 64px;
    letter-spacing: -0.03em !important;
  }

  .secondDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.03em !important;
    font-weight: 800 !important;
  }

  .secondDiv .title p {
    margin-top: 0.5rem;
    color: #6c6c6c;
    font-size: 22px;
    width: 100%;
    text-align: center;
    line-height: 32px;
    font-weight: 700 !important;
  }

  .second .flow {
    margin-top: 15rem;
    display: flex;
    width: 100%;
  }

  .btn2 {
    background: transparent;
    border: none;
    font-family: "planer", sans-serif;
    color: #2d2e2f;
    font-size: 24px;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0.3rem;
    font-weight: 700;
    margin-top: 1.5rem;
    border-bottom: 3px solid #8c909481;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .btn2 a {
    position: relative;
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0px !important;
    display: inline !important;
    text-decoration: none;
    text-transform: none !important;
    width: fit-content !important;
    overflow: hidden !important;
    margin-top: 0 !important;
    cursor: pointer;
    font-family: "Planer";
  }

  .btn2 span {
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 24px;
  }

  .btn2:hover {
    border-bottom: 3px solid #2d2e2f;
  }

  .elemsx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 49%;
    left: -25%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 53%;
    left: -15%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle4 {
    width: 450px;
    height: 450px;
    background: #c700ff2b;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px #c700ff2b;
    position: absolute;
    top: 75%;
    left: -25%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle6 {
    width: 350px;
    height: 400px;
    background: #010712;
    border: 2px solid #010712;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 77%;
    left: -15%;
    z-index: 1;
  }

  .second .flow .elemsx {
    width: 60%;
    border-right: 2px solid #0a1e4375;
    text-align: left;
    margin: 2rem;
    padding-bottom: 4rem;
  }

  .second .flow .elemsx h2 {
    color: #010712;
    font-size: 74px;
    line-height: 68px;
    font-weight: 700;
    margin-right: 2rem;
  }

  .second .flow .elemsx h2 span {
    color: white;
    font-size: 64px;
    line-height: 68px;
    font-weight: 700;
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .second .flow .elemsx p {
    margin-top: 2rem;
    color: #6c6c6c;
    font-size: 24px;
    width: 80%;
    line-height: 32px;
    font-weight: 700 !important;
  }

  .elemH2 {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 94px;
    line-height: 98px;
    font-weight: 700;
    transition: all 0.5s ease-out;
    margin-left: 2rem;
  }

  .elemH2_v2 {
    background: -webkit-linear-gradient(-70deg, #6000ffa8 0%, #ed4e50 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 94px;
    line-height: 98px;
    font-weight: 700;
    transition: all 0.5s ease-out;
    padding-right: 1rem;
  }

  .elemP {
    margin-top: 0.5rem;
    color: #6c6c6c;
    font-size: 22px;
    width: 80%;
    line-height: 32px;
    margin-left: 2rem;
    font-weight: 700 !important;
  }

  .elemP_image {
    margin-top: 25rem !important;
    color: #6c6c6c !important;
    font-size: 24px !important;
    width: 90% !important;
    line-height: 28px !important;
    font-weight: 700 !important;
  }

  .elemP_image span {
    margin-top: 15rem !important;
    color: #227aff !important;
    font-size: 24px !important;
    width: 90% !important;
    line-height: 28px !important;
    font-weight: 700 !important;
  }

  .elemP_point {
    position: absolute;
    left: -9%;
    width: 30px;
    height: 30px;
    background: white;
    border: 2px solid #98a1b0;
    border-radius: 25rem;
  }

  .elemP_point2 {
    position: absolute;
    right: -3%;
    width: 30px;
    height: 30px;
    background: white;
    border: 2px solid #98a1b0;
    border-radius: 25rem;
  }

  .second .flow .elemdx {
    width: 60%;
  }

  .elemdx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 37%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle2 {
    width: 450px;
    height: 250px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 40%;
    left: 30%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    background: #010712;
    border: 2px solid #010712;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 43%;
    left: 20%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle4 {
    width: 350px;
    height: 450px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 65%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle5 {
    width: 600px;
    height: 60%;
    background: rgba(0, 255, 234, 0.07);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    position: absolute;
    top: 30%;
    left: 15%;
    z-index: 0;
  }

  .elemdx .elemdx_rectangle6 {
    width: 350px;
    height: 450px;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 68%;
    left: 40%;
    z-index: 1;
  }

  .second .flow .elemdx p {
    margin-top: 2rem;
    color: #6c6f73;
    font-size: 24px;
    width: 80%;
    line-height: 28px;
  }

  .elemdxP_small {
    margin-top: 5rem !important;
  }

  .image {
    width: 100%;
    height: 43vw;
    background: #010712;
    left: -10%;
    margin-top: 10rem;
    border-radius: 15px;
    -webkit-box-shadow: 0px 0px 133px 9px rgb(3 149 217 / 17%);
    -moz-box-shadow: 0px 0px 133px 9px rgba(3, 149, 217, 0.17);
    box-shadow: 0px 0px 133px 9px #0d5cffb5;
    background-image: url(/src/assets/ph1.jpeg);
    background-size: cover;
    background-position: center;
  }

  .image2 {
    width: 100%;
    height: 43vw;
    background: #010712;
    right: -5%;
    margin-top: 2rem;
    border-radius: 15px;
    margin-bottom: 10rem;
    -webkit-box-shadow: 0px 0px 133px 9px rgb(110 110 110 / 17%);
    -moz-box-shadow: 0px 0px 133px 9px rgba(110, 110, 110, 0.17);
    box-shadow: 0px 0px 133px 9px rgba(61, 177, 255, 0.705);
    background-image: url(/src/assets/ph2.jpeg);
    background-size: cover;
    background-position: center;
  }

  .image3 {
    width: 100%;
    height: 43vw;
    background: #010712;
    left: -10%;
    margin-top: 5rem;
    border-radius: 15px;
    margin-bottom: 10rem;
    -webkit-box-shadow: 0px 0px 133px 9px rgb(0 174 255 / 17%);
    -moz-box-shadow: 0px 0px 133px 9px rgba(0, 174, 255, 0.17);
    box-shadow: 0px 0px 133px 9px #6000ffa8;
    background-image: url(/src/assets/ph3.jpeg);
    background-size: cover;
    background-position: center;
  }

  .numbers .numbersHR_left {
    position: absolute;
    background: #0a1e4375;
    width: 10%;
    height: 3px;
    left: 0;
  }

  .numbers .numbersHR_right {
    position: absolute;
    background: #0a1e4375;
    width: 10%;
    height: 3px;
    right: 0;
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
    color: #010712;
    font-weight: 700;
    font-size: 32px;
  }

  @property --num {
    syntax: "<integer>";
    initial-value: 700;
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
    color: #010712;
    font-size: 18px;
  }

  .second .flowSingle {
    display: flex;
    width: 100%;
  }

  .second .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
    margin-top: 10rem;
    margin-bottom: 5rem;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.03em !important;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle span {
    color: #010712;
    font-size: 64px;
    line-height: 68px;
    font-weight: 700;
    background: -webkit-linear-gradient(-70deg, #9700bd 0%, #0097dd 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
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

  .flowSingleBtn2 {
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
    background-image: url(https://github.githubassets.com/images/modules/site/security/grid2.svg);
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

  .thirdDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .thirdDiv .title h2 {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .thirdDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.03em !important;
    font-weight: 800 !important;
  }

  .thirdDiv .title p {
    margin-top: 0.5rem;
    color: #6c6c6c;
    font-size: 22px;
    width: 100%;
    text-align: center;
    line-height: 32px;
    font-weight: 700;
  }

  .partnersImgs {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .partnerImg {
    width: 100px;
    height: 100px;
    background: #010712;
    border-radius: 16px;
    position: absolute;
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
    width: 75px;
    height: 75px;
    background: #0107124a;
    border-radius: 16px;
    position: absolute;
    background: rgba(0, 140, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
  }

  .partnerImg5 {
    width: 75px;
    height: 75px;
    background: #0107124a;
    border-radius: 16px;
    position: absolute;
    background: rgba(0, 255, 136, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
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

  .fourthDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
    padding-top: 10rem;
  }

  .fourthDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .fourthDiv .title h2 {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 40%;
    text-align: left;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .fourthDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.03em !important;
    font-weight: 800 !important;
  }

  .fourthDiv .title p {
    margin-top: 0.5rem;
    color: #6c6f73;
    font-size: 24px;
    width: 40%;
    text-align: left;
    line-height: 28px;
  }

  .contentImage {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .contentImage .square {
    width: 350px;
    height: 470px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    margin-left: auto;
    margin-right: 10rem;
    margin-top: 9rem;
  }

  .contentImage .square2 {
    width: 250px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 0;
    right: 0;
  }

  .contentImage .square3 {
    width: 250px;
    height: 250px;
    background: rgba(0, 153, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 153, 255, 0.17);
    position: absolute;
    top: 10%;
    right: 30%;
  }

  .contentImage .square4 {
    width: 250px;
    height: 250px;
    background: rgba(162, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(162, 0, 255, 0.17);
    position: absolute;
    top: 50%;
    right: 5%;
  }

  .contentImage .rectangle {
    width: 400px;
    height: fit-content;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(122, 122, 122, 0.089);
    position: absolute;
    top: 20%;
    right: 10%;
    padding: 5rem;
  }

  .contentImage .rectangle h2 {
    font-size: 54px;
    line-height: 58px;
    font-weight: 800;
  }

  .contentImage .rectangle p {
    font-size: 24px;
    line-height: 28px;
    margin-top: 2rem;
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
