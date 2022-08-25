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

    window.onload = function () {
      var popup = document.querySelector(".suggestWords");
      var overlay = document.getElementById("suggestWordsOverlay");
      var openButton = document.querySelector(".searchKey");
      document.onclick = function (e) {
        if (e.target.id == "suggestWordsOverlay") {
          popup.style.display = "none";
          overlay.style.display = "none";
        }
        if (e.target === openButton) {
          popup.style.display = "block";
          overlay.style.display = "block";
        }
      };
    };

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    const slider = document.querySelector(".filtersContent");
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
      let content = document.querySelector(".filtersContent");
      const itemWidth = content.querySelector(".position").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".filtersContent");
      const itemWidth = content.querySelector(".position").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
    },

    suggestWords() {
      let content = document.querySelector(".suggestWords");
      content.style.width = "40%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";
      var overlay = document.getElementById("suggestWordsOverlay");
      overlay.style.display = "block";
    },

    closeSuggestWords() {
      let content = document.querySelector(".suggestWords");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "none";
    },

    jobAlert() {
      let content = document.querySelector(".bg1");
      content.style.width = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";
    },

    closePopup() {
      let content = document.querySelector(".bg1");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    sendCV() {
      let content = document.querySelector(".bg2");
      content.style.width = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";
    },

    closePopup2() {
      let content = document.querySelector(".bg2");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="glow5"></div>
      <div class="glow6"></div>
      <div class="glow7"></div>
      <div class="first">
        <div class="title">
          <div class="titleDiv">
            <h2>Posizioni aperte</h2>
            <p>Cerca tra i lavori attuali</p>
          </div>
        </div>
        <div class="search">
          <div class="searchKey" @click="suggestWords()">
            <input
              id="nav"
              class="input searchBar"
              type="text"
              name="searchbar"
              autocomplete="off"
              placeholder="Cerca parola chiave"
            />
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                />
              </svg>
            </span>
          </div>
          <div class="suggestWords">
            <div id="suggestWordsOverlay"></div>
            <div class="suggestTopDiv">
              <h5>Parole chiave</h5>
              <div class="closesuggestWords" @click="closeSuggestWords()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-x-lg"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
                  ></path>
                </svg>
              </div>
            </div>

            <div class="keyWords">
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
              <div class="keyWord">Farm</div>
            </div>
          </div>
        </div>
        <div class="container">
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#home">Farm</a></li>
            <li><a data-toggle="tab" href="#menu1">Finance</a></li>
            <li><a data-toggle="tab" href="#menu2">IT Tech</a></li>
            <li><a data-toggle="tab" href="#menu3">Generalist</a></li>
            <li @click="jobAlert()"><a href="#">Crea una Job Alert</a></li>
          </ul>

          <div class="tab-content">
            <div id="home" class="tab-pane fade in active">
              <h3>HOME</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div id="menu1" class="tab-pane fade">
              <h3>Menu 1</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div id="menu2" class="tab-pane fade">
              <h3>Menu 2</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
            </div>
            <div id="menu3" class="tab-pane fade">
              <h3>Menu 3</h3>
              <p>
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
        </div>

        <div class="bgTransparent bg1">
          <div class="closeMenu" @click="closePopup()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
          </div>
          <div class="popup">
            <div class="body">
              <div class="jobAlertHeader">
                <div class="subtitle">Job alert</div>
                <h2>Attiva la job alert per le posizioni più interessanti</h2>

                <div class="photo"></div>
              </div>
              <div class="jobAlert">
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
                    placeholder="Nome"
                  />

                  <input
                    id="nav"
                    style="width: 100%; margin: 0"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Cognome"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Email"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Linkedin Url"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Telefono"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Dettagli"
                  />
                </div>

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
            </div>
          </div>
        </div>

        <div class="bgTransparent bg2">
          <div class="closeMenu" @click="closePopup2()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
          </div>
          <div class="popup">
            <div class="body">
              <div class="jobAlertHeader">
                <div class="subtitle">Manda il tuo cv</div>
                <h2>
                  Qui potrai inviare il tuo CV direttamente a Jobify Recruiting
                </h2>

                <div class="photo"></div>
              </div>
              <div class="jobAlert">
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
                    placeholder="Nome"
                  />

                  <input
                    id="nav"
                    style="width: 100%; margin: 0"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Cognome"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Email"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Linkedin Url"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Telefono"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Dettagli"
                  />
                </div>

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
            </div>
          </div>
        </div>

        <div id="home" class="filters" style="margin-top: 7rem">
          <div class="filtersTop">
            <h2>Posizioni aperte</h2>
            <div class="filtersPositions">
              <div class="blur"></div>
              <div class="dropdown">
                <button
                  class="filterPosition dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Città
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <div class="separetor"></div>
              <div class="dropdown">
                <button
                  class="filterPosition dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Data
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
              <div class="separetor"></div>
              <div class="dropdown">
                <button
                  class="filterPosition dropdown-toggle"
                  type="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Contratto
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="buttons" style="margin-left: unset !important">
              <div class="btnScrollL" @click="btnScrollSx()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#fff"
                  class="bi bi-chevron-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>
              </div>
              <div class="btnScrollR" @click="btnScrollDx()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#fff"
                  class="bi bi-chevron-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="content filtersContent">
            <div class="position">
              <div class="blur"></div>
              <div class="topPosition">
                <div
                  class="photo"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
                  "
                >
                  <div class="photoBlur">
                    <p>
                      Inserire la descrizione della posizione del progetto, la
                      descrizione della posizione del progetto, della posizione
                      del progetto,
                    </p>
                  </div>
                </div>
              </div>

              <div class="content">
                <div class="subtitle" style="padding-left: 0.5rem">
                  Professione
                </div>
                <h2>Web developer</h2>
                <div class="infos">
                  <div class="info">
                    <div class="subtitle">Città</div>
                    <p>Milano</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Tempo</div>
                    <p>Indeterminato</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Stipendio</div>
                    <p>€ 1.500/mese</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <a href=""
                  ><div class="button">
                    Apri ora
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
                    </span></div
                ></a>
              </div>
            </div>
            <div class="position">
              <div class="blur"></div>
              <div class="topPosition">
                <div
                  class="photo"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe2.jpg);
                  "
                >
                  <div class="photoBlur">
                    <p>
                      Inserire la descrizione della posizione del progetto, la
                      descrizione della posizione del progetto, della posizione
                      del progetto,
                    </p>
                  </div>
                </div>
              </div>

              <div class="content">
                <div class="subtitle" style="padding-left: 0.5rem">
                  Professione
                </div>
                <h2>Web developer</h2>
                <div class="infos">
                  <div class="info">
                    <div class="subtitle">Città</div>
                    <p>Milano</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Tempo</div>
                    <p>Indeterminato</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Stipendio</div>
                    <p>€ 1.500/mese</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <a href=""
                  ><div class="button">
                    Apri ora
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
                    </span></div
                ></a>
              </div>
            </div>
            <div class="position">
              <div class="blur"></div>
              <div class="topPosition">
                <div
                  class="photo"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
                  "
                >
                  <div class="photoBlur">
                    <p>
                      Inserire la descrizione della posizione del progetto, la
                      descrizione della posizione del progetto, della posizione
                      del progetto,
                    </p>
                  </div>
                </div>
              </div>

              <div class="content">
                <div class="subtitle" style="padding-left: 0.5rem">
                  Professione
                </div>
                <h2>Web developer</h2>
                <div class="infos">
                  <div class="info">
                    <div class="subtitle">Città</div>
                    <p>Milano</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Tempo</div>
                    <p>Indeterminato</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Stipendio</div>
                    <p>€ 1.500/mese</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <a href=""
                  ><div class="button">
                    Apri ora
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
                    </span></div
                ></a>
              </div>
            </div>
            <div class="position">
              <div class="blur"></div>
              <div class="topPosition">
                <div
                  class="photo"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe4.jpeg);
                  "
                >
                  <div class="photoBlur">
                    <p>
                      Inserire la descrizione della posizione del progetto, la
                      descrizione della posizione del progetto, della posizione
                      del progetto,
                    </p>
                  </div>
                </div>
              </div>

              <div class="content">
                <div class="subtitle" style="padding-left: 0.5rem">
                  Professione
                </div>
                <h2>Web developer</h2>
                <div class="infos">
                  <div class="info">
                    <div class="subtitle">Città</div>
                    <p>Milano</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Tempo</div>
                    <p>Indeterminato</p>
                  </div>

                  <div class="info">
                    <div class="subtitle">Stipendio</div>
                    <p>€ 1.500/mese</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <a href=""
                  ><div class="button">
                    Apri ora
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
                    </span></div
                ></a>
              </div>
            </div>
          </div>
        </div>

        <div class="secondPart2">
          <div class="title">
            <h2>Jobify ricerca e seleziona talenti con umanità</h2>
            <p>
              una frase in cui spieghiamo che crediamo ad una Selezione umana
              che ha come obiettivo quello di capire le aspettative del
              candidato come uomo e donna prima di tutto e poi come
              professionista, analizzando i valori e quello che si aspetta
              dall’azienda in cui va a lavorare (scrivimi questo testo )
            </p>
          </div>
          <div class="steps">
            <div class="step transition">
              <div class="number">1</div>
              <div class="title">Crea profilo</div>
              <div class="text">
                Get updates on the GitHub activity you've subscribed to. Use the
                notifications inbox to customize, triage, and manage your
                updates.
              </div>
            </div>
            <div class="step transition" style="margin-top: 3rem">
              <div class="number">2</div>
              <div class="title">Crea profilo</div>
              <div class="text">
                Get updates on the GitHub activity you've subscribed to. Use the
                notifications inbox to customize, triage, and manage your
                updates.
              </div>
            </div>
            <div class="step transition" style="margin-top: 6rem">
              <div class="number">3</div>
              <div class="title">Crea profilo</div>
              <div class="text">
                Get updates on the GitHub activity you've subscribed to. Use the
                notifications inbox to customize, triage, and manage your
                updates.
              </div>
            </div>
          </div>
        </div>

        <div class="ctaCV" style="background: rgb(161 161 161 / 10%)">
          <div class="blur"></div>
          <div class="cols">
            <div class="col col-padding" id="positions">
              <h3 style="color: #fff">
                Non hai trovato <span>offerte in linea</span> con le tue
                aspettative?
              </h3>
              <div class="button" @click="sendCV()">
                Manda il tuo CV
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
                </span>
              </div>
            </div>
            <div
              class="col"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/img_h1.png);
                background-size: cover;
              "
            ></div>
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
    right: 0%;
    top: 8%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(210, 255, 46, 0.2);
    -moz-box-shadow: 0px 0px 105px 45px rgba(210, 255, 46, 0.2);
    box-shadow: 0px 0px 105px 45px rgba(210, 255, 46, 0.2);
    z-index: 10;
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    right: 0%;
    top: 18%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.2);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.2);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.2);
    z-index: 10;
  }

  .glow4 {
    position: absolute;
    left: 45%;
    top: 43%;
    width: 50vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgb(46 222 255 / 50%);
    -moz-box-shadow: 0px 0px 105px 45px rgb(46 222 255 / 50%);
    box-shadow: 0px 0px 105px 45px rgb(46 222 255 / 50%);
    z-index: 0;
  }

  .glow5 {
    position: absolute;
    left: 5%;
    top: 43%;
    width: 40vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    z-index: 0;
  }

  .glow6 {
    position: absolute;
    left: 5%;
    top: 43%;
    width: 16vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgb(255 166 46 / 50%);
    -moz-box-shadow: 0px 0px 105px 45px rgb(255 166 46 / 50%);
    box-shadow: 0px 0px 105px 45px rgb(255 166 46 / 50%);
    z-index: 0;
  }

  .glow7 {
    position: absolute;
    width: 5vw;
    transform: scale(3.5);
    top: 10%;
    left: 50%;
    z-index: 1;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.2);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.2);
    box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.2);
  }

  .first {
    padding-bottom: 5rem;
  }

  .first .titleDiv {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 3rem;
  }

  .first .searchKey {
    margin-left: auto;
    margin-right: auto;
    z-index: 10;
  }
  .cols {
    display: flex;
  }

  .colImage {
    width: 35%;
  }

  .colPositions {
    width: 65%;
    margin-left: 5rem;
    padding-bottom: 5rem;
  }

  .cols .col1 {
    position: fixed;
  }

  .avatar {
    width: 49%;
    position: fixed;
  }

  .main {
    background: #010b15;
    padding-top: 8rem;
    position: relative;
  }

  .title {
    display: flex;
  }

  .title .btnDiv {
    margin-left: auto;
    margin-right: 5rem;
  }

  .title h2 {
    font-size: 54px;
    color: #fff;
    line-height: 58px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .title p {
    color: #627597;
    font-size: 20px;
    width: 100%;
    line-height: 24px;
    font-weight: 400 !important;
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
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .main2 {
    background: #010b15;
    padding-top: 1rem;
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

  .filters {
    width: 100%;
    margin-top: 3rem;
    z-index: 10;
  }
  .filtersTop {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .filters .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 6rem;
  }

  .filters .btnScrollR {
    width: fit-content;
    background: transparent;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .filters .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: transparent;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .filters .filtersContent {
    display: flex;
    width: 98vw;
    height: 100%;
    padding-bottom: 0rem;
    padding-left: 3rem;
    padding-right: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .content.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .filters h2 {
    font-size: 30px;
    line-height: 34px;
    margin-left: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
  }

  .filters .filter {
    padding: 0rem;
    background: rgb(161 161 161 / 10%);
    border-radius: 10px;
    width: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.5s all;
    float: left;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    align-items: center;
  }

  .filters .filter:hover {
    background: rgb(255 255 255 / 0%);
  }

  .blur {
    width: 100%;
    left: 0;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(12px);
    top: 0;
    border-radius: 10px;
  }

  .filter h3 {
    font-size: 28px;
    color: #fff;
    line-height: 28px;
    width: 15vw;
    font-weight: 500;
    letter-spacing: -1px;
    margin-top: 4rem;
    padding-left: 1rem;
  }
  .filter h4 {
    font-size: 24px;
    color: #fff;
    line-height: 36px;
    padding-right: 1rem;
    font-weight: 200;
    width: fit-content;
    margin-left: auto;
  }

  .filter p {
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    font-weight: 700;
  }

  .filter .icon {
    font-size: 32px;
    color: #fff;
    line-height: 24px;
    font-weight: 700;
    text-align: right;
    margin-top: 1rem;
  }
  .positions h2 {
    font-size: 34px;
    line-height: 36px;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
  }

  .position {
    background: rgba(38, 43, 49, 0.486);
    margin-bottom: 2rem;
    width: fit-content;
    float: left;
    margin-right: 1.5rem;
    border-radius: 12px;
    padding: 1rem;
    border-bottom: 4px solid #008cff;
    border: 3px solid transparent;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .position:hover {
    border-color: #b3b3b326;
    margin-bottom: 1rem;
  }

  .photoBlur p {
    display: none;
    line-height: 14px !important;
  }

  .position:hover >>> .photoBlur {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 12px;
    background: #7474bf;
    background: -webkit-linear-gradient(to top, #348ac7, #7474bf);
    background: linear-gradient(to top, #348ac700, #141c24c7);
  }

  .position:hover >>> .photoBlur p {
    display: inline;
  }

  .topPosition .photo {
    width: 24vw;
    height: 22vw;

    background-position: center;
    background-size: cover;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }

  .position .content {
    padding-left: 0rem !important;
    margin-top: 1rem;
  }

  .position .subtitle {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1px !important;
  }

  .position .right {
    margin-left: 0rem;
    display: flex;
    align-items: center;
  }

  .position h2 {
    font-size: 24px;
    line-height: 26px;
    margin-left: 0 !important;
    font-weight: 700;
    color: #fff;
    padding-left: 0.5rem;
  }

  .position p {
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }

  .position .content .infos {
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 0rem !important;
    background: #19232d;
    border-radius: 12px;
  }

  .position .content .infos p {
    margin-right: 1.5rem;
    font-weight: 300;
    color: #fff;
    margin-bottom: 0rem !important;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
  }

  .position .button {
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
    margin-top: 1rem;
    margin-left: 0 !important;
  }

  .position .button span {
    margin-left: 0.4rem;
  }

  .position .button:hover {
    background: #fff;
    color: #0062f5;
  }

  .search {
    display: flex;
    width: 100%;
    margin-top: 2rem;
  }

  .searchKey {
    width: 40%;
    margin-right: 4rem;
  }

  .searchKey input {
    font-size: 16px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
    float: right;
    padding-left: 1rem;
    padding-top: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 1.5rem;
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

  .searchKey span {
    position: absolute;
    color: white;
    right: 2%;
    top: 12%;
    font-size: 16px;
    cursor: pointer;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .searchKey span:hover {
    background-color: rgba(27, 36, 46, 0.9);
  }

  .searchLocation {
    width: 40%;
    margin-right: 4rem;
  }

  .searchLocation input {
    font-size: 16px;
    background-color: #1c1c1c;
    border: 0;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
    float: right;
    padding-left: 1rem;
    padding-top: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 1.5rem;
    height: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: rgba(38, 43, 49, 0.486);
  }

  .searchLocation span {
    position: absolute;
    color: white;
    right: 2%;
    top: 9%;
    font-size: 16px;
    cursor: pointer;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .searchLocation span:hover {
    background-color: rgba(27, 36, 46, 0.9);
  }

  .ctaCV {
    width: 90%;
    height: 300px;
    background-color: white;
    border-radius: 12px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
  }

  .ctaCV .cols {
    height: 100%;
  }

  .ctaCV .col-padding {
    padding: 5rem;
  }

  .ctaCV .col h3 {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .ctaCV .col h3 span {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    color: #0062f5;
  }

  .ctaCV .col {
    width: 50%;
    height: 100%;
  }

  .ctaCV .button {
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
    margin-top: 2rem;
    cursor: pointer;
  }

  .ctaCV .button span {
    margin-left: 0.4rem;
  }

  .ctaCV .button:hover {
    background: #fff;
    color: #0062f5;
  }

  .filtersPositions {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: rgb(161 161 161 / 10%);
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 12px;
  }

  .filtersPositions .filterPosition {
    color: rgb(196, 196, 196);
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    display: flex;
    cursor: pointer;
    align-items: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: transparent;
    border: none;
  }

  .filtersPositions .filterPosition:hover {
    color: white;
  }

  .dropdown-menu {
    background: #131b23;
    border: 2px solid #b3b3b326;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 12px;
    margin-top: 2rem;
  }

  .dropdown-item {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
    border-radius: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
  }

  .dropdown-item:hover {
    color: #fff;
    background: #3e455052;
  }

  .dropdown-menu li a {
    color: #fff;
  }

  .filtersPositions .separetor {
    width: 1px;
    height: 2vw;
    background: transparent;
    margin-right: 2rem;
    margin-left: 2rem;
  }

  .filtersPositions .filterPosition p {
    transform: rotate(90deg);
    margin-left: 1.2rem;
    margin-top: 0 !important;
    margin-bottom: 0rem !important;
  }

  .nav {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    border-bottom: none;
  }

  .nav li {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    border-radius: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  .nav li:hover {
    background: #3e455052;
  }

  .nav li:hover ::v-deep(a) {
    color: #fff;
  }

  .nav li a {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 16px;
  }

  .nav li a:hover {
    color: #fff;
  }

  .suggestWords {
    position: absolute;
    left: 30%;
    width: 0%;
    top: 90%;
    font-size: 16px;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #131b23;
    border: 2px solid #b3b3b326;
    z-index: 5;
    visibility: hidden;
    opacity: 0;
    display: unset;
  }

  .closesuggestWords {
    margin-left: auto;
    cursor: pointer;
  }

  .suggestTopDiv {
    width: 100%;
    display: flex;
    align-items: center;
  }

  #suggestWordsOverlay {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }

  .suggestWords h5 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0 !important;
  }

  .suggestWords .keyWords {
    margin-top: 1rem;
  }

  .suggestWords .keyWord {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    background: #3e455052;
    width: fit-content;
    border-radius: 12px;
    float: left;
    margin-right: 0.5rem;
    margin-bottom: 0.7rem;
  }

  .jobAlert {
    font-size: 16px;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    padding: 2rem;
  }

  .bg1 {
    width: 0%;
    opacity: 0;
    visibility: hidden;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .bg2 {
    width: 0%;
    opacity: 0;
    visibility: hidden;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .bgTransparent {
    position: fixed;
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .popup {
    position: fixed;
    z-index: 10;
    background: #0308129f;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 5%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
      rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .popup .body {
    display: flex;
  }

  .popup .body .jobAlertHeader {
    width: 50%;
    padding: 2rem;
  }

  .popup .body .jobAlertHeader h2 {
    color: #fff;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 3rem;
  }

  .popup .body .jobAlertHeader .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .popup .body .jobAlertHeader .photo {
    background: transparent;
    border-radius: 30px;
    background-image: url(/src/assets/storie.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70%;
  }

  .popup .body .jobAlertHeader .bell {
    margin-top: 5rem;
    margin-left: 5rem;
    transform: rotate(-20deg);
  }

  .popup .body .jobAlertHeader .bell2 {
    position: absolute;
    transform: rotate(20deg);
  }

  .closeMenu {
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 2rem;
    width: fit-content;
    padding: 1rem;
    border-radius: 16px;
    border: 2px solid #0a1e4375;
    color: white;
    font-size: 18px;
    line-height: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .closeMenu:hover {
    border-color: white;
    transform: rotate(90deg);
  }

  .jobAlert .input {
    width: 95%;
    margin-bottom: 1.5rem;
  }

  .jobAlert .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 95%;
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

  .jobAlert::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  .jobAlert input:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  .jobAlert .select select {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 95%;
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

  .jobAlert select:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  .secondPart2 {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart2 .title {
    display: inline !important;
  }

  .secondPart2 h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 .title p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 .cols {
    margin-top: 5rem !important;
  }

  .secondPart2 .cols .col2 {
    width: 30%;
  }

  .steps {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    width: fit-content;
    display: flex;
    margin-left: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .step {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
    background: #03111f;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    float: left;
    transition: all 0.3s ease-out;
    text-align: left;
    -webkit-box-shadow: 0px 0px 105px 39px rgb(46 81 255 / 20%);
    -moz-box-shadow: 0px 0px 105px 39px rgba(46, 81, 255, 20%);
    box-shadow: 0px 0px 105px 3px rgb(46 91 255 / 5%);
  }

  .step .number {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    background: linear-gradient(90.91deg, #027bfd -24.67%, #5162fb 53.55%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    margin-bottom: 1rem;
  }

  .step .title {
    color: #fff;
    margin-left: 0 !important;
    font-size: 38px;
    line-height: 42px;
    font-weight: 700;
    letter-spacing: -0.04em !important;
    width: 100% !important;
    margin-bottom: 0.2rem;
  }

  .step .text {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }
}

@media (max-width: 1023px) {
}
</style>
