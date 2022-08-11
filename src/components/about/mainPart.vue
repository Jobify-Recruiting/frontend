<script>
import welcome from "@/components/aboutWelcome.vue";

export default {
  name: "mainPart",
  components: { welcome },
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

    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowY = "scroll";

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

    function bold() {
      var reveals = document.querySelectorAll(".bold");

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
    window.addEventListener("scroll", bold);
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
      <welcome></welcome>

      <div class="secondPart">
        <div class="text1 bold">
          <span>Increase developer velocity. </span>Secure every step. Automate
          entire workflows. Redefine collaboration. Trusted by over 83 million
          developers.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Increase developer velocity. Secure every step. Automate entire
          workflows. <span>Redefine collaboration.</span> Trusted by over 83
          million developers.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Increase developer velocity. Secure every step. Automate entire
          workflows. Redefine collaboration.
          <span>Trusted by over 83 million developers.</span>
        </div>
      </div>
      <div class="fourthPart">
        <div class="rowImages">
          <div class="image1 transition"></div>
          <div class="image2 transition" style="margin-top: 5rem"></div>
          <div class="image1 transition"></div>
          <div class="image2 transition" style="margin-top: 5rem"></div>
        </div>
      </div>
      <div class="fifthPart">
        <div class="quotesDiv">
          <div class="quotes">
            <div class="quote">
              <div class="quoteh4">Cos'è <span>Jobify</span></div>
              <div class="quoteh5">
                Inserire descrizione o altro dell'azienda, descrizione o altro
                dell'azienda, altro Inserire descrizione o altro dell'azienda.
              </div>
            </div>
            <div class="quote">
              <div class="quoteh4">
                <span>Storia</span> di Jobify Recruiting
              </div>
              <div class="quoteh5">
                Inserire descrizione o altro dell'azienda, descrizione o altro
                dell'azienda, altro Inserire descrizione o altro dell'azienda,
                descrizione o altro dell'azienda.
              </div>
            </div>
          </div>
          <div class="quotes">
            <div class="quote">
              <div class="quoteh4">
                <span>Storia</span> di Jobify Recruiting
              </div>
              <div class="quoteh5">
                Inserire descrizione o altro dell'azienda, descrizione o altro
                dell'azienda, altro Inserire descrizione o altro dell'azienda,
                descrizione o altro dell'azienda.
              </div>
            </div>
            <div class="quote">
              <div class="quoteh4">Cos'è <span>Jobify</span></div>
              <div class="quoteh5">
                Inserire descrizione o altro dell'azienda, descrizione o altro
                dell'azienda, altro Inserire descrizione o altro dell'azienda.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sixtPart">
        <h2>We are inventors, builders, and doers</h2>
        <div class="team1">
          <div class="person2">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe4.JPeG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person2">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe3.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person2">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe2.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
        </div>

        <h4>Team esecutivo</h4>

        <div class="team2">
          <div class="person">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe1.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe2.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe3.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe4.JPeG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div
              class="photo"
              style="background-image: url(/src/assets/pe1.JPG)"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
        </div>
      </div>
      <div class="seventhPart">
        <div class="text">
          <h2>Lavora con noi in <span>Jobify</span></h2>
          <p>Come on board and grow more than you ever thought possible.</p>

          <div class="formButton">
            <a href="#first"
              ><button class="btn">
                Invia
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </span></button
            ></a>
          </div>
        </div>
        <div class="image transition"></div>
        <div class="image transition" style="margin-top: 8rem"></div>
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

.bold {
  color: #fff !important;
  transition: 1s all ease;
}

.bold.active {
  color: #627597 !important;
  opacity: 1;
}

* {
  /*font-family: "Alliance No.1", sans-serif;*/
  /*font-family: "planer", sans-serif;*/
  font-family: "Heebo", sans-serif;
}

@media (min-width: 1024px) {
  .main {
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
  }

  .flowSingleBtn {
    margin-top: 15rem;
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
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .btn:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .firstPart {
    display: flex;
  }

  .firstPart .col1 {
    width: 60%;
    padding: 10rem;
  }

  .firstPart .col1 .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
    width: fit-content;
  }

  .firstPart .col1 h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 72px;
    line-height: 76px;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .firstPart .col1 p {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }

  .firstPart .col1 p span {
    margin-top: 0.5rem;
    color: #d3d3d3;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }

  .firstPart .col2 {
    width: 40%;
    height: 40vw;
    background: transparent;
    border-bottom-left-radius: 60px;
    background-image: url(/src/assets/technology.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 7rem;
    z-index: 3;
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: -3%;
    top: 30%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    z-index: 1;
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 70%;
    right: 15%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 213, 255, 0.9);
    z-index: 1;
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 30%;
    right: 35%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(255, 225, 0, 0.9);
    z-index: 1;
  }
  .glow4 {
    position: absolute;
    width: 5vw;
    top: 30%;
    right: 20%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 157, 255, 0.9);
    z-index: 1;
  }

  .secondPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 5rem;
    background: #ffffff;
  }

  .secondPart .text1 {
    padding-top: 10rem;
    color: #627597;
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    width: 65%;
    margin-left: 3rem;
  }

  .secondPart .text1 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .thirdPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #ffffff;
  }

  .thirdPart .text1 {
    color: #627597;
    font-size: 40px;
    line-height: 40px;
    font-weight: 400;
    width: 65%;
    margin-left: 3rem;
  }

  .thirdPart .text1 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .fourthPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #fff;
  }

  .rowImages {
    display: flex;
  }

  .flex {
    display: flex;
  }

  .fourthPart .image1 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .fourthPart .image2 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .fifthPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #fff;
  }

  .quotesDiv {
    width: 100%;
    margin-top: 5rem;
  }

  .quote {
    width: 65vw;
    margin-left: auto;
    margin-right: auto;
  }

  .quotes {
    display: flex;
    margin-bottom: 5rem;
  }

  .quotes .quote {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .quotes .quoteh4 {
    font-size: 54px;
    line-height: 54px;
    font-weight: 800;
    color: #030812;
    margin-bottom: 1rem;
    text-align: left !important;
    letter-spacing: -0.04em;
  }
  .quotes .quoteh4 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
  }

  .quotes .quoteh5 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #627597;
    margin-bottom: 2rem;
  }

  .sixtPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 5rem;
    padding-bottom: 0rem;
    background: #fff;
  }

  .sixtPart h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #030812;
    font-size: 54px;
    font-weight: 800 !important;
    width: 40%;
    line-height: 58px;
    letter-spacing: -0.04em !important;
  }

  .sixtPart h4 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #030812;
    font-size: 14px;
    font-weight: 500 !important;
    width: 40%;
    line-height: 18px;
    letter-spacing: 2px !important;
    text-transform: uppercase;
    margin-top: 3rem;
    margin-bottom: 0rem;
  }

  .team1 {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    display: flex;
  }

  .team2 {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .person2 {
    width: fit-content;
    margin-left: 1.5rem;
    float: left;
    position: relative;
    margin-bottom: 3rem;
  }

  .person {
    width: 23%;
    margin-left: 1.5rem;
    float: left;
    position: relative;
    margin-bottom: 3rem;
  }

  .team1 .person2 .photo {
    width: 16vw;
    height: 16vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .team2 .person .photo {
    width: 13vw;
    height: 13vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  .photo:hover {
    transform: scale(1.1);
  }

  .person .name {
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    color: #030812;
    font-weight: 400;
  }

  .person .jobtitle {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: #627597;
    margin-top: 0.2rem;
  }

  .person2 .name {
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: #030812;
    font-weight: 400;
  }

  .person2 .jobtitle {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: #627597;
    margin-top: 0.2rem;
  }

  .seventhPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #fff;
    display: flex;
    align-items: center;
  }
  .seventhPart .text {
    width: 60%;
  }

  .seventhPart .text h2 {
    color: #030812;
    font-size: 64px;
    font-weight: 800 !important;
    width: 70%;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .seventhPart .text h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
  }

  .seventhPart .text p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 70%;
    margin-bottom: 5rem;
  }

  .seventhPart .image {
    width: 30vw;
    height: 30vw;
    margin-right: 2rem;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
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
