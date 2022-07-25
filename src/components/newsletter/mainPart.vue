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
        <div class="cols">
          <div class="col col_1">
            <p>Registrati</p>
            <h2>
              <span>Iscriviti alla nostra newsletter</span> per rimanere
              aggiornato sul mondo HR
            </h2>
            <div class="subtitle">
              Segui il mondo hr da vicino attraverso gli articoli e le storie di
              Jobify, poi segui il mondo hr da vicino attraverso gli articoli e
              le storie di Jobify, poi e segui il mondo hr da vicino attraverso
              gli articoli e le storie di Jobify
            </div>
          </div>
          <div class="col col_3">
            <div
              class="input"
              style="display: flex; width: 95%; margin: 0 0 1.5rem 0"
            >
              <input
                style="width: 100%; margin: 0 1.5rem 0 0"
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="La tua email"
              />

              <div class="formButton">
                <a href="#first"
                  ><button class="btn">
                    Iscriviti
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
  }

  .cols .col_1 {
    width: 120%;
  }

  .cols .col_2 {
    margin-top: 5rem;
    margin-left: 3rem;
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
    font-size: 14px;
    line-height: 14px;
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
    font-size: 44px;
    line-height: 44px;
    font-weight: 600;
  }

  .cols .col h2 span {
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: 1px;
    font-size: 46px;
    line-height: 46px;
    font-weight: 700;
  }

  .cols .col .subtitle {
    margin-top: 1.5rem;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
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
    font-size: 16px;
    line-height: 20px;
    border-bottom: 1px solid rgb(211, 211, 211);
    border-radius: 0 !important;
    margin-bottom: 0.5rem;
  }

  .formButton {
    width: fit-content;
    margin-left: auto;
    margin-right: 1.5rem;
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
  }

  .btn:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .input {
    width: 95%;
    margin-right: 4rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
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
