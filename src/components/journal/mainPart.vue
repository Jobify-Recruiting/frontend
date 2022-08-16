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

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    const slider = document.querySelector(".featuredContent");
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }
  },
  methods: {
    btnScrollSx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
    },
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="titlePage">News</div>
        <div class="topContent">
          <div class="img1"></div>
          <div class="firstTitle">
            <p>APR 22, 2022</p>
            <h2>Sustainability at Jobify: the technology transformation</h2>
            <div class="subtitle">
              Sustainability at Jobify: the technology transformation, Jobify:
              the technology transformation, Sustainability at : the technology
              transformation
            </div>
            <div class="btnRead">
              Leggi di più &nbsp;&nbsp;<span
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
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <div class="titlePage2">Recruitment</div>
        <div class="secondPart">
          <div class="articles articles2">
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
          </div>
        </div>

        <div class="fifthDiv">
          <div class="adviser">
            <div class="col">
              <h3><span>Segui le nostre storie</span> le nostre storie</h3>
              <div class="divInput">
                <router-link to="/stories"
                  ><button class="btn">Storie</button></router-link
                >
              </div>
            </div>
            <div class="col_image"></div>
          </div>
        </div>

        <div class="titlePage2">Temporary HR management</div>
        <div class="secondPart">
          <div class="articles articles2">
            <div class="article">
              <div class="image">
                <div class="hover"></div>
                <div class="date">APR 22, 2022</div>
              </div>
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
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
              <div class="desctitle">Update</div>
              <div class="title">
                Sustainability at Jobify: the technology transformation
              </div>
              <div class="subtitle">
                Sustainability at Jobify: the technology transformation
              </div>
            </div>
          </div>
        </div>

        <div class="fifthDiv">
          <div class="adviser">
            <div class="col">
              <h3>
                <span>Iscriviti oggi alla newsletter</span> di Jobify Recruiting
                per restare aggiornato sul mondo HR
              </h3>
              <div class="divInput">
                <div class="input">
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Inserisci la tua email"
                  />
                </div>
                <router-link to="/newsletter"
                  ><button class="btn">Iscriviti</button></router-link
                >
              </div>
            </div>
            <div class="col_image"></div>
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

@media (min-width: 1024px) and (max-width: 1312px) {
  .articles2 .article[data-v-c1d84998] {
    float: left;
    margin-top: 3rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    width: 40% !important;
    background: #fff;
    border-radius: 25px;
  }
}
@media (min-width: 1024px) {
  .flowSingleBtn {
    margin-top: 15rem;
  }

  .first {
    padding-top: 5rem;
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

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #fff;
    font-weight: 800;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .titlePage2 {
    font-size: 34px;
    line-height: 38px;
    color: #010712;
    font-weight: 800;
    margin-left: 12.5rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
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
    margin-top: 2rem;
    border-radius: 30px;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-bottom: 5rem;
    background: white;
  }

  .topContent .img1 {
    width: 70%;
    background-image: url("/src/assets/ph15.jpg");
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
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
    margin-left: 2rem;
    width: 40%;
    margin-right: 2rem;
    color: #010712;
  }

  .firstTitle p {
    font-size: 12px;
    color: #273350;
    font-weight: 800;
    letter-spacing: 0.5px;
    line-height: 1.33333;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .firstTitle .subtitle {
    font-size: 16px;
    color: #273350;
    line-height: 20px;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  .firstTitle h2 {
    color: #010712;
    font-size: 46px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .firstTitle .btnRead {
    padding-top: 2rem;
    color: #0062f5;
    font-weight: 800;
    float: right;
    font-size: 12px;
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .secondPart {
    padding-left: 11rem;
    padding-right: 11rem;
    margin-bottom: 5rem;
  }

  .articles {
    display: flex;
    flex-wrap: wrap;
    margin-top: 0rem;
  }

  .articles2 .article {
    float: left;
    margin-top: 3rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    width: 45% !important;
    background: #fff;
    border-radius: 25px;
  }

  .articles .article {
    float: left;
    margin-top: 1rem;
    margin-bottom: 2rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    width: 29%;
    background: #fff;
    border-radius: 25px;
  }

  .articles .article .image {
    background-image: url("/src/assets/ph15.jpg");
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
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
    border-radius: 25px;
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
    letter-spacing: -0.02em;
    margin-top: 0.5rem;
    font-weight: 600;
    color: #000;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }

  .article .desctitle {
    font-size: 14px;
    line-height: 20px;
    margin-top: 1.5rem;
    color: #6e6e73;
    font-weight: 600;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    text-transform: uppercase;
  }

  .article .subtitle {
    font-size: 16px;
    line-height: 20px;
    margin-top: 1rem;
    color: rgb(51, 51, 51);
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    padding-bottom: 2rem;
  }

  .articlesButton {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    margin-top: 6rem;
    margin-left: auto;
    margin-right: auto;
  }

  .articlesButton span {
    margin-left: 0.4rem;
  }

  .articlesButton:hover {
    background: #fff;
    color: #0062f5;
  }

  .second {
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: #010712;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 9999px;
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
    border-radius: 9999px;
    background-clip: padding-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /*background: #555;*/
  }

  .featuredContent {
    height: 100%;
    width: 100%;
    background-color: #010712;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .featuredContent.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .featureds .titles {
    align-items: center;
    display: flex;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-bottom: 2rem;
  }

  .featureds .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
  }

  .featureds .titles h2 {
    width: fit-content;
    font-size: 34px;
    line-height: 38px;
    color: #fff;
    font-weight: 800;
  }

  .featureds .btnScrollR {
    width: fit-content;
    background: white;
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .featureds .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: #fff;
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .featureds .featured {
    border-radius: 30px;
    background-color: #6398ef29;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-image: url(/src/assets/ph17.jpg);
    background-size: cover;
    background-position: center;
    width: 75vw;
    float: left;
    height: 35vw;
    position: relative;
  }
  .featured .hover {
    background: #ada996;
    background: -webkit-linear-gradient(
      to bottom,
      #000000d1,
      #00000027,
      #0000000a,
      transparent
    );
    background: linear-gradient(
      to bottom,
      #000000d1,
      #00000027,
      #0000000a,
      transparent
    );
    height: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .featured .text {
  }

  .featured h2 {
    color: #fff;
    padding: 2rem;
    padding-bottom: 0.5rem;
    padding-top: 0;
    font-size: 38px;
    line-height: 42px;
    width: 30vw;
  }
  .featured p {
    color: #fff;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .fifthDiv {
    padding-left: 3rem;
    padding-right: 3rem;
    padding-bottom: 4rem;
  }

  .fifthDiv .adviser {
    background: #161b22;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding: 6rem;
  }
  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 90%;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.04em;
    font-weight: 600;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(116deg, #00ffbf 0%, #0076ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 60px;
    background-image: url(/src/assets/searchimage.png);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    width: 50%;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }

  .input {
    width: 95%;
    margin-right: 1rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 97%;
    float: right;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 3rem;
    padding-bottom: 1rem;
    height: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: rgba(38, 43, 49, 0.486);
    border: 2px solid #b3b3b326;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  input:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
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
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .btn:hover {
    background: #ffffff;
    color: #0062f5;
  }

  .btn span {
    padding-left: 0.4rem;
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
