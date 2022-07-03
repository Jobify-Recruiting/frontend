<script>
import Globe from "globe.gl";
export default {
  name: "welcome",
  components: {},
  data() {
    return {};
  },
  mounted() {
    // Gen random data
    const N = 20;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: (Math.random() - 0.5) * 180,
      startLng: (Math.random() - 0.5) * 360,
      endLat: (Math.random() - 0.5) * 180,
      endLng: (Math.random() - 0.5) * 360,
      color: [
        ["#000aff", "#bbbdff", "#b4ffa3", "#ce00ff"][
          Math.round(Math.random() * 3)
        ],
        ["#000aff", "#bbbdff", "#b4ffa3", "#ce00ff"][
          Math.round(Math.random() * 3)
        ],
      ],
    }));

    Globe()
      .globeImageUrl("//unpkg.com/three-globe/example/img/earth-night.jpg")
      .arcsData(arcsData)
      .backgroundColor("rgba(0,0,0,0)")
      .arcColor("color")
      .arcDashLength(() => Math.random())
      .arcDashGap(() => Math.random())
      .arcDashAnimateTime(() => Math.random() * 10000 + 500)(
      document.getElementById("globeViz")
    );

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    window.scrollTo({ top: 0, behavior: "smooth" });
  },
  methods: {},
};
</script>

<template>
  <div id="globeViz"></div>
  <div class="hover1"></div>
  <div class="glow"></div>
  <div class="glow2"></div>
  <div class="glow3"></div>
  <div class="mainTitle">
    <div class="Iam">
      <p>Jobify è</p>
      <b>
        <div class="innerIam">
          leggera<br />
          a theme in progress<br />
          built on bootstrap<br />
          how I learn stuff<br />
          how we do it
        </div>
      </b>
    </div>
    <h2>
      Ricerca e selezione al servizio delle aziende e del candidato e selezione
      al servizio delle aziende e del candidato e selezione al servizio delle
      aziende e del candidato
    </h2>
    <div class="" style="display: flex; align-items: center">
      <a href="#first"
        ><button class="btn">Scopri di più <span>></span></button></a
      >

      <a href="#first"
        ><button class="btn2">Chi siamo<span>></span></button></a
      >
    </div>
    <!--<div class="" style="display: flex">
      <a href="#first">
        <span>Scopri di più <span>></span></span>
        <div class="liquid"></div>
      </a>
    </div>-->
    <div
      class="test"
      style="
        display: flex;
        border-top: 2px solid #0a1e4375;
        position: absolute;
        bottom: -5%;
      "
    >
      <div
        class="item"
        style="margin-right: 4rem; text-align: left; margin-top: 2rem"
      >
        <p style="color: white; font-size: 24px; line-height: 18px">+ 100</p>
        <p style="color: #cdd4db; font-size: 16px">ore</p>
      </div>
      <div
        class="item"
        style="margin-right: 4rem; text-align: left; margin-top: 2rem"
      >
        <p style="color: white; font-size: 24px; line-height: 18px">+ 100</p>
        <p style="color: #cdd4db; font-size: 16px">ore</p>
      </div>
      <div
        class="item"
        style="margin-top: 2rem; margin-right: 4rem; text-align: left"
      >
        <p style="color: white; font-size: 24px; line-height: 18px">+ 100</p>
        <p style="color: #cdd4db; font-size: 16px">ore</p>
      </div>
      <div
        class="item"
        style="margin-top: 2rem; margin-right: 4rem; text-align: left"
      >
        <p style="color: white; font-size: 24px; line-height: 18px">+ 100</p>
        <p style="color: #cdd4db; font-size: 16px">ore</p>
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
  #globeViz {
    position: fixed;
    left: 20%;
    cursor: pointer;
  }

  .hover1 {
    position: absolute;
    height: 100%;
    width: 60%;
    left: 0;
  }

  .glow {
    position: fixed;
    width: 5vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 15%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
  }

  .glow3 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 35%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
  }

  .mainTitle {
    margin-left: 3rem;
    padding-bottom: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 12rem;
    width: 65%;
  }

  .mainTitle h2 {
    color: white;
    font-size: 20px;
    line-height: 24px;
    margin-top: 5rem;
    width: 75%;
  }

  a {
    position: relative;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    cursor: pointer;
    font-family: "Planer";
  }

  /*a {
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
  }*/

  .btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 22px;
    border-radius: 25rem;
    background: #0062f5;
    color: #ffffff;
    line-height: 20px;
    font-size: 12px;
    font-family: "Planer";
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    margin-right: 1.5rem;
  }

  .btn:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .btn2 {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 22px;
    border-radius: 25rem;
    background: transparent;
    color: #ffffff;
    border: 1px solid #fff;
    font-weight: 700;
    line-height: 20px;
    font-size: 12px;
    font-family: "Planer";
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .btn2:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn2 span {
    padding-left: 0.4rem;
  }

  .Iam {
    padding-top: 3rem;
    font: normal 40px/50px Planer, sans-serif;
    color: #fff;
    font-size: 45px;
  }
  .Iam p {
    height: 50px;
    float: left;
    margin-right: 0.3em;
    font-weight: 700;
  }
  .Iam b {
    float: left;
    overflow: hidden;
    position: relative;
    height: 50px;
  }
  .Iam .innerIam {
    display: inline-block;
    color: #0062f5;
    font-weight: 700;
    position: relative;
    white-space: nowrap;
    top: 0;
    left: 0;

    /*animation*/
    -webkit-animation: move 5s;
    -moz-animation: move 5s;
    -ms-animation: move 5s;
    -o-animation: move 5s;
    animation: move 5s;
    /*animation-iteration-count*/
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    /*animation-delay*/
    -webkit-animation-delay: 1s;
    -moz-animation-delay: 1s;
    -ms-animation-delay: 1s;
    -o-animation-delay: 1s;
    animation-delay: 1s;
  }
}

@media (max-width: 1023px) {
}

@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}

@-webkit-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@-moz-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@-o-keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
  }
}
@keyframes move {
  0% {
    top: 0px;
  }
  20% {
    top: -50px;
  }
  40% {
    top: -100px;
  }
  60% {
    top: -150px;
  }
  80% {
    top: -200px;
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
