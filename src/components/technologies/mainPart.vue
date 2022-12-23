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
  },
  methods: {},
};
</script>
<template>
  <div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="first">
        <h2>La ricerca e selezione innovativa</h2>
        <p>
          GitHub Copilot uses the OpenAI Codex to suggest code and entire
          functions in real-time, right from your editor.
        </p>

        <div class="mainButton">
          <a href="#first"
            ><button class="btn1">
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
          <a href="#first"><button class="btn2">Scopri di più</button></a>
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
        <div class="col-lg">
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
            <h2 class="transition">
              <span>The full power of Visual Studio Code</span>
            </h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions.
              <span>Work in the browser or hand off to your desktop.</span>
            </p>
            <a href="#first"
              ><button class="btn1 transition">Scopri di più</button></a
            >
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/ph3.jpeg" />
            <img class="img2 transition" src="/src/assets/ph3.jpeg" />
          </div>
        </div>
      </div>

      <div class="fourth">
        <div class="cols">
          <div class="col-dx">
            <img class="img transition" src="/src/assets/chip.png" />
          </div>
          <div class="col-sx">
            <h2 class="transition">
              The <span>full power</span> of Visual Studio Code
            </h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of
              <span
                >extensions. Work in the browser or hand off to your
                desktop.</span
              >
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
        </div>
      </div>

      <div class="third">
        <div class="cols">
          <div class="col-sx">
            <h2 class="transition">
              <span>The full power of Visual Studio Code</span>
            </h2>
            <p class="transition">
              Use the full power of Visual Studio Code, including the editor,
              terminal, debugger, version control, settings sync, and the entire
              ecosystem of extensions.
              <span>Work in the browser or hand off to your desktop.</span>
            </p>
            <a href="#first"
              ><button class="btn1 transition">Scopri di più</button></a
            >
          </div>
          <div class="col-dx">
            <img class="img transition" src="/src/assets/ph3.jpeg" />
            <img class="img2 transition" src="/src/assets/ph3.jpeg" />
          </div>
        </div>
      </div>

      <div class="fifth">
        <div class="col-sx">
          <h2 class="transition">
            The full power of Visual <span>Studio Code</span>
          </h2>
          <p class="transition">
            Use the full power of Visual Studio Code,, version control, settings
            sync, and the entire ecosystem of
            <span
              >extensions. Work in the browser or hand off to your
              desktop.</span
            >
          </p>
        </div>
        <div class="col-dx">
          <img class="img transition" src="/src/assets/ph3.jpeg" />
          <img class="img transition" src="/src/assets/ph3.jpeg" />
          <img class="img transition" src="/src/assets/ph3.jpeg" />
        </div>
      </div>

      <div class="quotes">
        <div class="cols">
          <div class="col1">
            <div class="title">Flight Reports</div>
            <p>
              Hundreds of engineers, including our own, use jobify Recruiting
              every day.
            </p>
          </div>
          <div class="col2">
            <div class="title">
              " This is the single most mind-blowing application of machine
              learning I’ve ever seen.
            </div>
            <p>Mike Krieger // Co-founder, Job</p>
          </div>
        </div>
        <div class="cols">
          <div class="col1">
            <div class="title">Flight Reports</div>
            <p>
              Hundreds of engineers, including our own, use jobify Recruiting
              every day.
            </p>
          </div>
          <div class="col2">
            <div class="title">
              " This is the single most mind-blowing application of machine
              learning I’ve ever seen.
            </div>
            <p>Mike Krieger // Co-founder, Job</p>
          </div>
        </div>
        <div class="cols">
          <div class="col3">
            <div class="title">
              " This is the single most mind-blowing application of machine
              learning I’ve ever seen.
            </div>
            <p>Mike Krieger // Co-founder, Job</p>
          </div>
          <div class="col3">
            <div class="title">
              " This is the single most mind-blowing application of machine
              learning I’ve ever seen.
            </div>
            <p>Mike Krieger // Co-founder, Job</p>
          </div>
          <div class="col3">
            <div class="title">
              " This is the single most mind-blowing application of machine
              learning I’ve ever seen.
            </div>
            <p>Mike Krieger // Co-founder, Job</p>
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
              <div class="card-header" id="heading1">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse1"
                    aria-expanded="false"
                    aria-controls="collapse1"
                  >
                    <p>></p>
                    Collapsible Group Item #1
                  </button>
                </h2>
              </div>

              <div
                id="collapse1"
                class="collapse"
                aria-labelledby="heading1"
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
              <div class="card-header" id="heading2">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse2"
                    aria-expanded="false"
                    aria-controls="collapse2"
                  >
                    <p>></p>
                    Collapsible Group Item #1
                  </button>
                </h2>
              </div>

              <div
                id="collapse2"
                class="collapse"
                aria-labelledby="heading2"
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
              <div class="card-header" id="heading3">
                <h2 class="mb-0">
                  <button
                    class="btn btn-link btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapse3"
                    aria-expanded="false"
                    aria-controls="collapse3"
                  >
                    <p>></p>
                    Collapsible Group Item #1
                  </button>
                </h2>
              </div>

              <div
                id="collapse3"
                class="collapse"
                aria-labelledby="heading3"
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
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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
  font-family: 'Work Sans', sans-serif;
}

@media (min-width: 1024px) {
  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    z-index: 10;
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    right: -8%;
    top: 5%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(210, 255, 46, 0.9);
    z-index: 10;
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    right: -8%;
    top: 2%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    z-index: 10;
  }

  .mainButton {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    margin-top: 1.5rem;
  }

  .btn1 {
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
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
  }

  .btn1:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn1 span {
    padding-left: 0.4rem;
  }

  .mainButton .btn2 {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 26px !important;
    border-radius: 20px;
    background: transparent;
    color: #ffffff;
    border-color: #fff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin-top: 1rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
  }

  .mainButton .btn2:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .first {
    padding: 9rem;
    padding-top: 14rem;
    text-align: center;
  }

  .first h2 {
    font-size: 68px;
    color: #fff;
    line-height: 72px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .first p {
    color: #627597;
    font-size: 20px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    line-height: 24px;
    font-weight: 400 !important;
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
    -webkit-box-shadow: 0px 0px 105px 39px rgb(94 105 255 / 44%);
    -moz-box-shadow: 0px 0px 105px 39px rgb(94 105 255 / 44%);
    box-shadow: 0px 0px 105px 39px rgb(94 105 255 / 44%);
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
    margin-top: 0rem;
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
    letter-spacing: -2.5px;
  }

  .third .cols .col-sx h2 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2867b2  100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
  }

  .third .cols .col-sx p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
    margin-bottom: 1.5rem;
  }

  .third .cols .col-sx p span {
    color: #fff;
    font-weight: 400 !important;
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
    margin-top: 10rem;
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
    letter-spacing: -2.5px;
  }

  .fourth .cols .col-sx h2 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2867b2  100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
  }

  .fourth .cols .col-sx p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .fourth .cols .col-sx p span {
    color: #fff;
    font-weight: 400 !important;
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
    margin-top: 3rem;
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
    margin-bottom: 0 !important;
  }

  .elementsFlex .element h3 {
    color: #fff;
    font-size: 30px;
    line-height: 34px;
    font-weight: 700;
    margin-top: 0.2rem;
    letter-spacing: -2.5px;
  }

  .fifth {
    margin-top: 20rem;
  }

  .fifth .cols {
    display: flex;
    width: 100%;
    align-items: center;
  }

  .fifth .col-sx {
    width: 90%;
    padding-left: 7rem;
    padding-bottom: 3rem;
  }

  .fifth .col-sx h2 {
    color: #fff;
    font-size: 50px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -2.5px;
    text-align: center;
  }

  .fifth .col-sx h2 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2867b2  100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
  }

  .fifth .col-sx p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
    margin-top: 0.5rem;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .fifth .col-sx p span {
    color: #fff;
    font-weight: 400 !important;
  }

  .fifth .col-dx {
    width: 50%;
    padding-left: 7rem;
    display: flex;
  }

  .fifth .col-dx .img {
    width: 60%;
    border-radius: 6px;
    -webkit-box-shadow: 0px 0px 105px 39px rgb(46 81 255 / 20%);
    -moz-box-shadow: 0px 0px 105px 39px rgba(46, 81, 255, 20%);
    box-shadow: 0px 0px 105px 39px rgb(46 91 255 / 20%);
    border: 1px solid #0d0d0d;
    z-index: 1;
    margin-right: 2rem;
  }

  .quotes {
    margin-top: 10rem;
  }

  .quotes .cols {
    display: flex;
    padding-left: 7rem;
    padding-right: 7rem;
    padding-top: 5rem;
  }

  .quotes .col1 {
    margin-right: 3rem;
    width: 30%;
    border-top: 1px solid #62759734;
    padding-top: 3rem;
  }

  .quotes .col1 .title {
    color: #fff;
    font-weight: 700;
    font-size: 34px;
    line-height: 34px;
    letter-spacing: -0.04em;
  }

  .quotes .col1 p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
    margin-top: 0.9rem;
  }

  .quotes .col2 {
    margin-left: 3rem;
    width: 70%;
    border-top: 1px solid #62759734;
    padding-top: 3rem;
  }

  .quotes .col2 .title {
    font-weight: 700;
    font-size: 74px;
    line-height: 74px;
    background: -webkit-linear-gradient(300deg, #93bef5 20%, #f37be3 70%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em;
  }

  .quotes .col2 p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
    margin-top: 0.9rem;
  }

  .quotes .col3 {
    margin-right: 3rem;
    width: 30%;
    border-top: 1px solid #62759734;
    padding-top: 3rem;
  }

  .quotes .col3 .title {
    color: #fff;
    font-weight: 500;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -0.04em;
  }

  .quotes .col3 p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400 !important;
    margin-top: 0.9rem;
  }

  .sixth {
    width: 100%;
    text-align: center;
    margin-top: 15rem;
  }

  .sixthContainer {
    display: flex;
  }

  .sixth h2 {
    color: #fff;
    font-size: 50px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .sixth p {
    color: #627597;
    font-size: 20px;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    line-height: 24px;
    font-weight: 400 !important;
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
    font-size: 50px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    letter-spacing: -2.5px;
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

  .seventh .btn {
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
    line-height: 20px !important;
    color: #627597;
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
