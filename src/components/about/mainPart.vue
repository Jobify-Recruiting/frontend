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
        <div class="flex">
          <div class="image1 transition"></div>
          <div class="image2 transition"></div>
        </div>
        <div class="image3 transition"></div>
        <div class="quote bold">
          <span>“We’re big on</span> developing technologies that go way beyond
          what’s available commercially. We envision the perfect solution. Then
          we build something even better!”
          <div class="author">Davide Maggio</div>
          <div class="jobtitle">Founder & CEO</div>
        </div>
      </div>

      <div class="bg">
        <div class="fifthPart">
          <div class="numbers">
            <div class="number transition">60</div>
            <div class="subtitle transition">persone</div>
          </div>
          <div class="text3">
            “We’re big on developing technologies that go way beyond what’s
            available commercially. We envision the perfect solution. Then we
            build something even better!”
          </div>
        </div>
      </div>

      <div class="sixtPart">
        <h2>We are inventors, builders, and doers</h2>
        <div class="team1">
          <div class="person">
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
        </div>

        <h4>Team esecutivo</h4>

        <div class="team2">
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
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person">
            <div class="photo"></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
        </div>
      </div>

      <div class="seventhPart">
        <div class="text">
          <h2>Lavora con noi in <span>Jobify</span></h2>
          <p>Come on board and grow more than you ever thought possible.</p>

          <a href="#first" class="flowSingleBtn2">
            <span
              >Scopri di più
              <span
                ><span
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    /></svg></span></span
            ></span>
            <div class="liquid"></div>
          </a>
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
  color: #627597 !important;
  transition: 1s all ease;
}

.bold.active {
  color: #fff !important;
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
    padding: 14px 26px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    border-radius: 20px;
    cursor: pointer;
    margin-top: 2rem;
    letter-spacing: 2px;
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

  .secondPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 5rem;
    background: #030812;
  }

  .secondPart .text1 {
    padding-top: 10rem;
    color: #627597;
    font-size: 36px;
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
    background: #030812;
  }

  .thirdPart .text1 {
    color: #627597;
    font-size: 36px;
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
    background: #030812;
  }

  .flex {
    display: flex;
  }

  .fourthPart .image1 {
    width: 50vw;
    height: 30vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .fourthPart .image2 {
    width: 25vw;
    height: 30vw;
    margin-left: 6rem;
    margin-top: 3rem;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .fourthPart .image3 {
    width: 40vw;
    height: 30vw;
    margin-left: 8rem;
    margin-top: 3rem;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .fourthPart .quote {
    margin-top: 5rem;
    width: 60%;
    color: #fff;
    font-size: 40px;
    line-height: 44px;
    font-weight: 400;
    margin-left: auto;
  }

  .fourthPart .quote span {
    margin-left: 5rem;
  }

  .fourthPart .quote .author {
    margin-top: 2rem;
    width: 60%;
    color: #fff;
    font-size: 30px;
    line-height: 34px;
    font-weight: 300;
    margin-left: 2rem;
  }

  .fourthPart .quote .jobtitle {
    margin-top: 0rem;
    width: 60%;
    color: #627597;
    font-size: 24px;
    line-height: 28px;
    font-weight: 300;
    margin-left: 2rem;
  }

  .bg {
    background: #030812;
  }

  .fifthPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background-image: linear-gradient(
      to top,
      #e0c3fc 20%,
      #8ec5fc 55%,
      transparent 100%
    );
  }

  .fifthPart .numbers {
    display: flex;
    align-items: center;
  }

  .fifthPart .number {
    text-align: center;
    font-size: 600px;
    color: white;
    margin-left: auto;
    margin-right: 0;
    font-weight: 600;
    line-height: 500px;
  }

  .fifthPart .subtitle {
    text-align: center;
    font-size: 100px;
    transform: rotate(-90deg);
    color: white;
    width: fit-content;
    height: fit-content;
    margin: 0;
    margin-right: auto;
    font-weight: 200;
  }
  .fifthPart .text3 {
    margin-top: 5rem;
    width: 100%;
    color: #030812;
    width: 50%;
    font-size: 40px;
    line-height: 44px;
    font-weight: 400;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .sixtPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #030812;
  }

  .sixtPart h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    font-size: 64px;
    font-weight: 800 !important;
    width: 40%;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .sixtPart h4 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #fff;
    font-size: 14px;
    font-weight: 500 !important;
    width: 40%;
    line-height: 18px;
    letter-spacing: 2px !important;
    text-transform: uppercase;
    margin-top: 3rem;
    margin-bottom: 6rem;
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
    margin-top: 5rem;
    display: flex;
    flex-wrap: wrap;
  }

  .person {
    width: fit-content;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    float: left;
    position: relative;
    margin-bottom: 3rem;
  }

  .team1 .person .photo {
    width: 28vw;
    height: 25vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .team2 .person .photo {
    width: 17vw;
    height: 17vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .photo:hover {
    transform: scale(1.1);
  }

  .person .name {
    text-align: center;
    margin-top: 2rem;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }

  .person .jobtitle {
    text-align: center;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
    color: #627597;
    margin-top: 0.2rem;
  }

  .seventhPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #030812;
    display: flex;
    align-items: center;
  }
  .seventhPart .text {
    width: 60%;
  }

  .seventhPart .text h2 {
    color: #fff;
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
    font-size: 26px;
    line-height: 30px;
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
