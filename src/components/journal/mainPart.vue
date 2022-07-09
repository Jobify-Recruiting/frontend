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
        <div class="topContent">
          <div class="img1"></div>
          <div class="firstTitle">
            <p>APR 22, 2022</p>
            <h2>Sustainability at Jobify: the technology transformation</h2>
            <div class="subtitle">
              Sustainability at Jobify: the technology transformation
            </div>
            <div class="btnRead">Leggi di più &nbsp;&nbsp;></div>
          </div>
        </div>
        <div class="secondPart">
          <div class="articles">
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
          </div>

          <router-link to="/contact">
            <div class="articlesButton">Carica altro <span>></span></div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");

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
  font-family: "planer", sans-serif;
}

@media (min-width: 1024px) {
  .flowSingleBtn {
    margin-top: 15rem;
  }

  .first {
    padding-top: 5rem;
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
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
    letter-spacing: 1px;
    font-size: 64px;
    line-height: 64px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 24px;
  }

  .topContent {
    display: flex;
    align-items: center;
    margin-top: 5rem;
    padding-left: 11rem;
    padding-right: 11rem;
    padding-bottom: 5rem;
  }

  .topContent .img1 {
    width: 70%;
    background-image: url("/src/assets/ph15.jpg");
    border-radius: 44px;
    height: 30vw;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .topContent .img1:hover {
    transform: scale(1.02);
  }

  .firstTitle {
    margin-left: 5rem;
    width: 40%;
  }

  .firstTitle p {
    font-weight: 700;
    font-size: 12px;
    color: rgba(217, 217, 217, 0.64);
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }

  .firstTitle .subtitle {
    font-size: 16px;
    color: rgb(196, 184, 184);
    line-height: 22px;
    letter-spacing: 1.1px;
    margin-bottom: 4rem;
    margin-top: 1rem;
  }

  .firstTitle h2 {
    color: white;
    font-size: 40px;
    line-height: 42px;
  }

  .firstTitle .btnRead {
    border-top: solid 1px #23396275;
    padding-top: 2rem;
    color: #0062f5;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .secondPart {
    background: white;
    padding-left: 11rem;
    padding-right: 11rem;
    padding-bottom: 5rem;
  }

  .articles {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0rem;
  }

  .articles .article {
    float: left;
    margin-top: 6rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    width: 29%;
  }

  .articles .article .image {
    background-image: url("/src/assets/ph15.jpg");
    border-radius: 34px;
    height: 15vw;
    background-position: center;
    background-size: cover;
    padding: 2rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .articles .article .image:hover {
    transform: scale(1.02);
  }

  .article .image .hover {
    width: 100%;
    height: 100%;
    background: #00000093; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to bottom,
      #00000093,
      transparent
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to bottom,
      #00000093,
      transparent
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    position: absolute;
    top: 0;
    left: 0;
    border-radius: 34px;
  }

  .article .image .date {
    font-weight: 700;
    font-size: 14px;
    color: rgba(255, 255, 255, 1);
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 2rem;
    margin-left: auto;
    width: fit-content;
  }

  .article .title {
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.5px;
    margin-top: 2rem;
    color: #000;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .article .subtitle {
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin-top: 1rem;
    color: rgb(51, 51, 51);
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .articlesButton {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    letter-spacing: 2px;
    margin-top: 6rem;
    text-transform: uppercase;
    margin-left: auto;
    margin-right: auto;
  }

  .articlesButton span {
    margin-left: 0.4rem;
  }

  .articlesButton:hover {
    background: #003585;
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
