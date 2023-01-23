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
  },
  methods: {},
};
</script>

<template>
  <div class="first">
    <div id="globeViz"></div>
    <div class="hover1"></div>
    <div class="glow"></div>
    <div class="glow2"></div>
    <div class="glow3"></div>
    <div class="glow4"></div>
    <div class="glow5"></div>
    <div class="glow6"></div>
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
    </div>
    <div class="gradient"></div>
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
</template>

<style scoped>

@media (min-width: 1600px) {
  #globeViz {
    left: 0% !important;
  }

  .Iam {
    padding-top: 3rem;
    font: normal 40px/50px Planer, sans-serif;
    color: #fff;
    font-size: 64px !important;
    margin-left: 10rem !important;
  }
}

@media (min-width: 1024px) {
  .first {
    background: #0c2550;
  }

  #globeViz {
    position: fixed;
    left: 0%;
    top: 40%;
    cursor: pointer;
    transform: scale(1.5);
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

  .glow4 {
    position: fixed;
    width: 5vw;
    opacity: 0.5;
    top: 30%;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow5 {
    position: fixed;
    width: 5vw;
    right: 21%;
    top: 70%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
  }

  .glow6 {
    position: fixed;
    width: 5vw;
    left: 30%;
    top: 60%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.4);
  }

  .mainTitle {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 15rem;
  }

  .mainTitle h2 {
    color: white;
    font-size: 18px;
    line-height: 22px;
    margin-top: 5rem;
    font-weight: 200;
    text-align: center;
  }

  .datas {
    display: flex;
    border-top: 2px solid #0a1e4375;
    margin-top: 0;
    width: fit-content;
    position: absolute;
    bottom: -15%;
  }

  .datas p {
    margin-bottom: 0 !important;
    letter-spacing: 1px;
  }

  .datas .item {
    margin-right: 6rem;
    text-align: left;
    margin-top: 1.5rem;
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
    line-height: 20px;
    font-size: 12px;
    font-weight: 600;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
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
    font-weight: 700;
    line-height: 20px;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .btn2:hover {
    background: #ed3fb4;
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
    font-size: 64px;
    margin-left: 5rem;
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

  .gradient {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    background: #7474bf;
    background: -webkit-linear-gradient(to right, #0c2550, #ffffff00);
    background: linear-gradient(to top, #0c2550, #ffffff00);
    padding-top: 15rem;
  }
}

@media (max-width: 1023px) {
}

@media (min-width: 1920px) {
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
