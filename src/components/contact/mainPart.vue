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
        <!--<div class="titlePage">Sedi</div>-->
        <div class="cols">
          <div class="col col_1">
            <p>Sede Principale</p>
            <h2>Milano, IT</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">Via copernico, 38 - 20125 Milano, Italia</div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >davide.maggio@jobconsultinghr.it</a
            >
            <div class="subtitle">+39 340 763 6209</div>
          </div>
        </div>

        <div class="images">
          <div class="img1">
            <img class="mainImage" src="/src/assets/ph15.jpg" />
          </div>
          <div class="img2">
            <img class="mainImage" src="/src/assets/ph16.jpg" />
          </div>
        </div>
      </div>

      <div class="first">
        <div class="cols">
          <div class="col col_1">
            <p>Sede</p>
            <h2>Dubai, EAU</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">
              120 Sheikh Zayed Rd - Umm Al Sheiÿ Emirati Arabi Uniti
            </div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >davide.maggio@jobconsultinghr.it</a
            >
            <div class="subtitle">+971 52 892 5497</div>
          </div>
        </div>

        <div class="images">
          <div class="img1">
            <img class="mainImage transition" src="/src/assets/ph17.jpg" />
          </div>
          <div class="img2">
            <img class="mainImage transition" src="/src/assets/ph18.jpg" />
          </div>
        </div>
      </div>

      <div class="first">
        <div class="cols">
          <div class="col col_1">
            <p>Sede</p>
            <h2>Trencin, SL</h2>
          </div>
          <div class="col col_2">
            <h4><span>•</span> Indirizzo</h4>
            <div class="subtitle">Povazka, 36 - 91101 Slovacchia</div>
          </div>
          <div class="col col_3">
            <h4><span>•</span> Contatti</h4>
            <a href="mailto:davide.maggio@jobconsultinghr.it" class="mailto"
              >davide.maggio@jobconsultinghr.it</a
            >
            <div class="subtitle">00421/902.505.385</div>
          </div>
        </div>

        <div class="images">
          <div class="img1">
            <img class="mainImage transition" src="/src/assets/ph19.jpg" />
          </div>
          <div class="img2">
            <img class="mainImage transition" src="/src/assets/ph20.jpg" />
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
  a {
    position: relative;
    padding: 14px 22px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    border-radius: 25rem;
    margin-top: 3rem;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  a span {
    position: relative;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
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

  .first {
    padding: 5rem;
    padding-top: 10rem;
  }

  .first .titlePage {
    font-size: 50px;
    line-height: 54px;
    color: #fff;
    font-weight: 800;
    margin-left: 3rem;
    margin-bottom: 4rem;
  }

  .first .cols {
    display: flex;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .cols .col_1 {
    width: 120%;
  }

  .cols .col_2 {
    margin-top: 5rem;
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
  }

  .cols .col h4 {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    align-items: center;
    font-weight: 600;
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
    letter-spacing: 1px;
    font-size: 74px;
    line-height: 74px;
  }

  .cols .col .subtitle {
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 18px;
  }

  .images {
    display: flex;
    margin-top: 6rem;
  }

  .images .img1 {
    width: 65%;
    margin-right: 2rem;
  }

  .images .img2 {
    width: 35%;
    margin-left: 2rem;
  }

  .images .img1 img {
    width: 100%;
    border-radius: 60px;
    z-index: 1;
  }

  .images .img2 img {
    width: 100%;
    border-radius: 60px;
    z-index: 1;
  }

  .mailto {
    margin: 0;
    padding: 0;
    text-transform: none;
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 18px;
    border-bottom: 1px solid rgb(211, 211, 211);
    border-radius: 0 !important;
    margin-bottom: 0.5rem;
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
