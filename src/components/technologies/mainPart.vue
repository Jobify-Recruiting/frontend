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
        <h2>La ricerca e selezione innovativa</h2>
        <p>
          GitHub Copilot uses the OpenAI Codex to suggest code and entire
          functions in real-time, right from your editor.
        </p>

        <div class="mainButton">
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

      <div class="second">
        <div class="col-sm-sx transition">
          <div class="rectangle-sm"></div>
          <div class="rectangles">
            <div class="rectangle-sm-sx"></div>

            <div class="rectangle-sm-dx"></div>
          </div>
          <div class="rectangle-lg"></div>
        </div>
        <div class="col-lg transition">
          <img class="mainImage" src="/src/assets/ph3.jpeg" />
          <div class="rectangle-md"></div>
        </div>
        <div class="col-sm-dx transition">
          <div class="rectangle-sm"></div>
          <div class="rectangles">
            <div class="rectangle-sm-sx"></div>

            <div class="rectangle-sm-dx"></div>
          </div>
          <div class="rectangle-lg"></div>
        </div>
      </div>

      <div class="third">
        <div class="cols">
          <div class="col-sx">
            <h2 class="transition">The full power of Visual Studio Code</h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions. Work in the browser or hand off to your
              desktop.
            </p>
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/ph3.jpeg" />
            <img class="img2 transition" src="/src/assets/ph3.jpeg" />
          </div>
        </div>
      </div>

      <div class="fourth">
        <div class="cols">
          <div class="col-sx">
            <h2 class="transition">The full power of Visual Studio Code</h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions. Work in the browser or hand off to your
              desktop.
            </p>
            <div class="elementsFlex">
              <div class="element transition">
                <p>CPUs up to</p>
                <h3>32 cores</h3>
              </div>
              <div class="element transition">
                <p>CPUs up to</p>
                <h3>32 cores</h3>
              </div>
              <div class="element transition">
                <p>CPUs up to</p>
                <h3>32 cores</h3>
              </div>
            </div>
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/chip.png" />
          </div>
        </div>
      </div>

      <div class="fifth">
        <div class="cols">
          <div class="col-sx">
            <h2 class="transition">The full power of Visual Studio Code</h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions. Work in the browser or hand off to your
              desktop.
            </p>
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/ph3.jpeg" />
          </div>
        </div>
      </div>

      <div class="fifth">
        <div class="cols">
          <div class="col-sx">
            <h2 class="transition">The full power of Visual Studio Code</h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions. Work in the browser or hand off to your
              desktop.
            </p>
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/ph3.jpeg" />
          </div>
        </div>
      </div>

      <div class="sixth">
        <h2 class="transition">La tecnologia a portata di mano per tutti.</h2>
        <p class="transition">La tecnologia vicino a te, sempre.</p>
        <div class="sixthContainer">
          <div class="col-sm-sx">
            <div class="rectangle transition"></div>
          </div>
          <div class="col-lg">
            <img class="mainImage transition" src="/src/assets/ph3.jpeg" />
          </div>
          <div class="col-sm-dx">
            <div class="rectangle transition"></div>
          </div>
        </div>
      </div>

      <div class="seventh">
        <div class="asks">
          <h2>Domande frequenti</h2>
          <div class="accordion" id="accordionExample">
            <div class="card transition">
              <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    <p>></p>
                    Collapsible Group Item #1
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Some placeholder content for the first accordion panel. This
                  panel is shown by default, thanks to the
                  <code>.show</code> class.
                </div>
              </div>
            </div>
            <div class="card transition">
              <div class="card-header" id="headingTwo">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <p>></p>
                    Collapsible Group Item #2
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Some placeholder content for the second accordion panel. This
                  panel is hidden by default.
                </div>
              </div>
            </div>
            <div class="card transition">
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <p>></p>
                    Collapsible Group Item #3
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default.
                </div>
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
  .mainButton {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .mainButton .btn {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 26px !important;
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
    z-index: 10;
  }

  .mainButton .btn:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .mainButton .btn span {
    padding-left: 0.4rem;
  }

  .first {
    padding: 9rem;
    padding-top: 14rem;
    text-align: center;
  }

  .first h2 {
    color: #fff;
    font-size: 64px;
    line-height: 68px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .first p {
    color: #c1c6cb;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1rem;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    letter-spacing: 0.5px;
  }

  .first .button {
    margin-left: auto;
    margin-right: auto;
  }

  .button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    letter-spacing: 1.5px;
    margin-top: 3rem;
    letter-spacing: 1px;
  }

  .button span {
    margin-left: 0.5rem;
  }

  .button:hover {
    background: #003585;
  }

  .second {
    display: flex;
    width: 100%;
  }

  .second .col-lg {
    width: 60%;
  }

  .second .col-sm-sx {
    width: 20%;
    margin-right: 2rem;
    margin-top: 8rem;
  }

  .second .col-sm-dx {
    width: 20%;
    margin-left: 2rem;
    margin-top: 8rem;
  }

  .second .col-sm-sx .rectangle-sm {
    width: 50%;
    margin-left: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-sx .rectangle-lg {
    width: 100%;
    margin-left: auto;
    height: 300px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-sx .rectangle-sm-dx {
    width: 60%;
    margin-left: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-sx .rectangle-sm-sx {
    width: 30%;
    margin-right: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-sx .rectangles {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .second .col-sm-dx .rectangle-sm {
    width: 50%;
    margin-right: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-dx .rectangle-lg {
    width: 100%;
    margin-left: auto;
    height: 300px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-dx .rectangle-sm-dx {
    width: 60%;
    margin-left: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-dx .rectangle-sm-sx {
    width: 30%;
    margin-right: auto;
    height: 120px;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .second .col-sm-dx .rectangles {
    display: flex;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .col-lg .mainImage {
    width: 100%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 105px 39px rgb(46 81 255 / 44%);
    -moz-box-shadow: 0px 0px 105px 39px rgba(46, 81, 255, 0.44);
    box-shadow: 0px 0px 105px 39px rgb(46 91 255 / 44%);
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .col-lg .rectangle-md {
    width: 100%;
    height: 100px;
    margin-top: 1rem;
    background: #0c1829;
    border-radius: 6px;
    box-shadow: 0 0 0 1px #0d0d0d, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
  }

  .third {
    margin-top: 10rem;
  }

  .third .cols {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .cols .col-sx {
    width: 50%;
    padding: 7rem;
  }

  .third .cols .col-sx h2 {
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .third .cols .col-sx p {
    color: #c1c6cb;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1rem;
    letter-spacing: 0.5px;
  }

  .cols .col-dx {
    width: 50%;
    padding: 7rem;
  }

  .cols .col-dx .img {
    width: 90%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    -moz-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .cols .col-dx .img2 {
    width: 60%;
    border-radius: 6px;
    border: 1px solid #0d0d0d;
    z-index: 1;
    position: absolute;
    right: 30%;
    top: 65%;
  }

  .fourth {
    margin-top: 15rem;
  }

  .fourth .cols {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .fourth .cols .col-sx {
    width: 50%;
    padding: 7rem;
  }

  .fourth .cols .col-sx h2 {
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .fourth .cols .col-sx p {
    color: #c1c6cb;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1rem;
    letter-spacing: 0.5px;
  }

  .fourth .cols .col-dx {
    width: 50%;
    padding: 7rem;
  }

  .fourth .cols .col-dx .img {
    width: 90%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    -moz-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .elementsFlex {
    display: flex;
    margin-top: 1rem;
  }

  .elementsFlex .element {
    margin-right: 3rem;
  }

  .elementsFlex .element p {
    color: #c1c6cb;
    font-size: 16px !important;
    line-height: 22px !important;
    font-weight: 700;
    letter-spacing: 0.5px;
  }

  .elementsFlex .element h3 {
    color: #fff;
    font-size: 30px;
    line-height: 34px;
    font-weight: 700;
    margin-top: 0.2rem;
    letter-spacing: 1px;
  }

  .fifth {
    margin-top: 5rem;
  }

  .fifth .cols {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .fifth .cols .col-sx {
    width: 50%;
    padding: 7rem;
  }

  .fifth .cols .col-sx h2 {
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .fifth .cols .col-sx p {
    color: #c1c6cb;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1rem;
    letter-spacing: 0.5px;
  }

  .fifth .cols .col-dx {
    width: 50%;
    padding: 7rem;
  }

  .fifth .cols .col-dx .img {
    width: 90%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    -moz-box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    box-shadow: 0px 0px 122px 10px rgba(46, 81, 255, 0.44);
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .sixth {
    width: 100%;
    text-align: center;
    margin-top: 5rem;
  }

  .sixthContainer {
    display: flex;
  }

  .sixth h2 {
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
  }

  .sixth p {
    color: #c1c6cb;
    font-size: 24px;
    line-height: 28px;
    margin-top: 1rem;
    letter-spacing: 0.5px;
    margin-bottom: 7rem;
  }

  .sixth .col-lg {
    width: 60%;
  }

  .sixth .col-sm-sx {
    width: 20%;
    margin-right: 2rem;
    margin-top: 8rem;
  }

  .sixth .col-sm-sx .rectangle {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/ph3.jpeg");
    background-size: cover;
    border-radius: 6px;
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .sixth .col-sm-dx {
    width: 20%;
    margin-left: 2rem;
    margin-top: 8rem;
  }

  .sixth .col-sm-dx .rectangle {
    width: 100%;
    height: 100%;
    background-image: url("/src/assets/ph3.jpeg");
    background-size: cover;
    border-radius: 6px;
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .sixth .col-lg .mainImage {
    width: 100%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 105px 39px rgb(46 81 255 / 44%);
    -moz-box-shadow: 0px 0px 105px 39px rgba(46, 81, 255, 0.44);
    box-shadow: 0px 0px 105px 39px rgb(46 91 255 / 44%);
    border: 1px solid #0d0d0d;
    z-index: 1;
  }

  .seventh {
    width: 100%;
    margin-top: 10rem;
    padding-bottom: 10rem;
  }

  .seventh .asks h2 {
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
  }

  .seventh .accordion {
    margin-top: 3rem;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }

  .seventh .accordion .card {
    background: transparent;
    border-bottom: 2px solid #111925 !important;
    padding-bottom: 1rem;
    padding-top: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 0;
  }

  .seventh .accordion .card:hover {
    border-bottom: 2px solid #233144 !important;
  }

  .seventh .accordion .card .btn:focus-visible {
    outline: none;
    box-shadow: none;
    text-decoration: none;
  }

  .seventh .accordion .card .btn:focus {
    outline: none;
    box-shadow: none;
    text-decoration: none;
  }

  .btn {
    padding: 0 !important;
  }

  .btn-link {
    color: #fff;
    font-weight: 700;
    font-size: 24px;
    align-items: center;
    display: flex;
    align-items: center;
  }

  .btn-link:hover {
    color: #fff;
    text-decoration: none;
  }

  .btn-link p {
    color: rgb(96, 133, 255);
    font-weight: 700;
    font-size: 18px;
    margin-right: 2rem;
    width: fit-content;
    transform: rotate(90deg);
    margin-bottom: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .collapsed p {
    transform: rotate(0deg);
  }

  .card-body {
    font-size: 16px !important;
    line-height: 24px !important;
    color: #c1c6cb;
  }

  code {
    font-size: 87.5%;
    color: #fff;
    word-wrap: break-word;
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
