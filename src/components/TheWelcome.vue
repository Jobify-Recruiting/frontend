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
        ["#007bff", "#00f544", "#a100ffe6", "#00bbffe6"][
          Math.round(Math.random() * 3)
        ],
        ["#007bff", "#00f544", "#a100ffe6", "#00bbffe6"][
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

    window.scrollTo({ top: 0, behavior: "smooth" });

    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (start - end) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const obj = document.getElementById("value");
    animateValue(obj, 0, -4000, 7000);

    const obj2 = document.getElementById("value2");
    animateValue(obj2, 0, -2000, 7000);

    const obj3 = document.getElementById("value3");
    animateValue(obj3, 0, -150, 7000);

    const obj4 = document.getElementById("value4");
    animateValue(obj4, 0, -100, 7000);
  },
  methods: {
    scrollgo(){
      window.scrollTo({ top: 700, behavior: "smooth" });
    }
  },
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
          umana<br />
          rapida<br />
          consulenziale<br />
          competitiva<br />
          scientifica
        </div>
      </b>
    </div>
    <h2>
      In jobify recruiting non ci limitiamo a valutare il talento soltanto attraverso il cv, quindi valutando hard e soft skills, ma prendiamo in considerazione anche i valori e 
          le aspettative professionali del candidato e la cultura aziendale della società.
    </h2>
    <div class="" style="display: flex; align-items: center">
      <button class="btn" @click="scrollgo()">Scopri di più</button>
    </div>
    <div class="datas">
      <div class="item">
        <p style="color: white; font-size: 22px; line-height: 18px" id="value">
          0
        </p>
        <p style="color: #cdd4db; font-size: 16px; line-height: 20px;">Screening telefonici</p>
      </div>
      <div class="item">
        <p style="color: white; font-size: 22px; line-height: 18px" id="value2">
          0
        </p>
        <p style="color: #cdd4db; font-size: 16px; line-height: 20px;">Talenti colloquiati</p>
      </div>
      <div class="item">
        <p style="color: white; font-size: 22px; line-height: 18px" id="value3">
          0
        </p>
        <p style="color: #cdd4db; font-size: 16px; line-height: 20px;">Progetti di R&S gestiti</p>
      </div>
      <div class="item">
        <p style="color: white; font-size: 22px; line-height: 18px" id="value4">
          0
        </p>
        <p style="color: #cdd4db; font-size: 16px; line-height: 20px;">Talenti assunti</p>
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

@media (max-width: 1023px) {
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
    margin-left: 2rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 8rem;
    width: 50%;
    padding-bottom: 10rem;
  }

  .mainTitle h2 {
    color: white;
    font-size: 18px;
    line-height: 22px;
    margin-top: 5rem;
    width: 80%;
    font-weight: 200;
  }

  .datas {
    display: flex;
    border-top: 2px solid #2d3152;
    margin-top: 0;
    width: fit-content;
    position: absolute;
    bottom: -15%;
  }

  .datas p {
    margin-bottom: 0.5rem !important;
    letter-spacing: 1px;
  }

  .datas .item {
    margin-right: 3rem;
    text-align: left;
    margin-top: 1.5rem;
    width: 100px;
  }

  a {
    position: relative;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    cursor: pointer;
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
    margin-right: 1.5rem;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
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
    padding: 14px 26px;
    border-radius: 20px;
    background: #fff;
    color: #0062f5;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .btn2:hover {
    background: #0062f5;
    color: #fff;
    font-weight: 600;
  }

  .btn2 span {
    padding-left: 0.4rem;
  }

  .Iam {
    padding-top: 3rem;
    font: normal 40px/50px Planer, sans-serif;
    color: #fff;
    font-size: 60px;
    width: 50vw;
  }
  .Iam p {
    height: 50px;
    float: left;
    margin-right: 0.3em;
    font-weight: 500;
    letter-spacing: -2.5px;
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
    font-weight: 500;
    letter-spacing: -2.5px;
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

@media(max-width: 1400px){
  .mainTitle h2 {
    margin-top: 11rem;
  }
}

@media (min-width: 1600px) {
  #globeViz {
    left: 20% !important;
  }

  .mainTitle {
    margin-left: 8rem !important;
  }
}

@media (min-width: 1920px) {
  #globeViz {
    left: 30% !important;
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
