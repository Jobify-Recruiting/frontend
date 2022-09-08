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

    const flavoursContainer = document.getElementById("feedbacksContainer");
    const flavoursScrollWidth = flavoursContainer.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }

        if (flavoursContainer.scrollLeft > 13000) {
          flavoursContainer.scrollTo(0, 0);
        }
      }, 15);
    });

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    const slider = document.querySelector(".feedbacks");
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
      let content = document.querySelector(".feedbacks");
      const itemWidth = content.querySelector(".feedback").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".feedbacks");
      const itemWidth = content.querySelector(".feedback").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    btnScrollSx2() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx2() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    btnScrollSx3() {
      let content = document.querySelector(".clientsCoBody");
      const itemWidth = content.querySelector(".logoClient").clientWidth;
      content.scrollBy({ left: -itemWidth * 7, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx3() {
      let content = document.querySelector(".clientsCoBody");
      const itemWidth = content.querySelector(".logoClient").clientWidth;
      content.scrollBy({ left: itemWidth * 7, top: 0, behavior: "smooth" });
    },

    workflowScrollSx() {
      let content = document.querySelector(".workflowFlex");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    workflowScrollDx() {
      let content = document.querySelector(".workflowFlex");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },
  },
};
</script>

<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="glow"></div>
        <div class="glow2"></div>
        <div class="glow3"></div>
        <div class="glow4"></div>
        <div class="glow5"></div>
        <div class="firstPart">
          <div class="subtitle">Companies</div>
          <h2>Costruiamo l'ecosistema del domani.</h2>
          <p>
            Increase developer velocity. Secure every step. Automate entire
            workflows. Redefine collaboration. Trusted by over 83 million
            developers.
          </p>
          <div class="mainButton">
            <a href="#first"
              ><button class="btn">
                Scopri di più
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
          <div class="image"></div>
        </div>
        <div class="workflow" id="workflow">
          <div class="workflowTitle">
            <h2 style="margin-bottom: 0rem !important">Il nostro workflow</h2>
          </div>
          <div class="buttons">
            <div class="btnScrollL" @click="workflowScrollSx()">
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
            <div class="btnScrollR" @click="workflowScrollDx()">
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
          <div
            class="workflowFlex"
            style="
              display: flex;
              height: 100%;
              width: 100%;
              overflow-x: scroll;
              overflow-y: hidden;
              flex-wrap: nowrap;
              align-items: center;
              position: relative;
            "
          >
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="background transition">
                  <div class="number">1</div>
                  <h2>Intervista al cliente</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, la tua
                    ricerca e selezione
                  </p>
                </div>
              </div>
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">2</div>
                  <h2>Job description</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, la tua
                    ricerca e selezione
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">3</div>
                  <h2>Lancio annuncio & Head Hunting</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                  </p>
                </div>
              </div>
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">4</div>
                  <h2>Screening CV</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                    Jobify, la tua ricerca e selezione, la tua ricerca e
                    selezione, la tua ricerca e selezione, la tua ricerca e
                    selezione, la tua ricerca e selezione
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">5</div>
                  <h2>Screening telefonico</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    la tua ricerca e selezione,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                    la tua ricerca e selezione, la tua ricerca e selezione
                  </p>
                </div>
              </div>
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">6</div>
                  <h2>Videocolloquio</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                  </p>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">7</div>
                  <h2>Presentazione Short list</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                  </p>
                </div>
              </div>
              <div class="column workflowColumn" style="width: 35vw">
                <div class="circle2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#fff"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </div>
                <div class="background transition">
                  <div class="number">8</div>
                  <h2>Colloqui one-toone con l'azienda</h2>
                  <p>
                    Descrizione dello step, Jobify, la tua ricerca e selezione,
                    la tua ricerca e selezione, la tua ricerca e selezione, la
                    tua ricerca e selezione, la tua ricerca e selezione, Jobify,
                    <span
                      >la tua ricerca e selezione, la tua ricerca e
                      selezione</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="numbersDiv">
          <h2>I nostri numeri nei mesi precedenti</h2>
          <div class="numbers">
            <div class="number transition">
              <h3>40%</h3>
              <div class="subtitle">Reduction</div>
              <p>in developer onboarding time</p>
            </div>
            <div class="number transition">
              <h3>654%</h3>
              <div class="subtitle">Return on investment</div>
              <p>over 3 years</p>
            </div>
            <div class="number transition">
              <h3>45</h3>
              <div class="subtitle">Minutes saved</div>
              <p>per developer, per day</p>
            </div>
          </div>
          <div class="numbers">
            <div class="number transition">
              <h3>40%</h3>
              <div class="subtitle">Reduction</div>
              <p>in developer onboarding time</p>
            </div>
            <div class="number transition">
              <h3>654%</h3>
              <div class="subtitle">Return on investment</div>
              <p>over 3 years</p>
            </div>
            <div class="number transition">
              <h3>45</h3>
              <div class="subtitle">Minutes saved</div>
              <p>per developer, per day</p>
            </div>
          </div>
        </div>
        <div class="secondPart">
          <div class="cols">
            <div class="col col2">
              <div class="titleH3">Perchè scegliere Jobify?</div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
              </div>

              <div class="titleH3">Perchè scegliere Jobify?</div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
              </div>
            </div>
            <div class="col colImage">
              <div class="image2 transition"></div>
            </div>
          </div>
        </div>
        <div class="secondPart">
          <div class="cols">
            <div class="col colImage">
              <div class="image transition"></div>
            </div>
            <div class="col col2">
              <div class="titleH3">Perchè scegliere Jobify?</div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
              </div>

              <div class="titleH3">Perchè scegliere Jobify?</div>
              <div class="text">
                Redefine collaboration. Trusted by over 83 million developers.
                <span
                  >Increase developer velocity. Secure every step. Automate
                  entire workflows.</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="fifthDiv">
          <div class="adviser transition">
            <div class="col">
              <h3>Trova il candidato giusto <span>per la tua azienda</span></h3>
              <router-link to="/stories"
                ><button class="btn">
                  Scopri di più
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
              ></router-link>
            </div>
            <div class="col_image"></div>
          </div>
        </div>
        <div class="feedbackDiv" id="feedback">
          <div class="content">
            <h2>I clienti dicono di noi</h2>
            <div class="buttons">
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
            <div class="feedbacks" id="feedbacksContainer">
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Dal nostro primo incontro ho riconosciuto in Davide volontà,
                  dedizione e una importante preparazione culturale.Doti
                  preziose nel contesto lavorativo di riferimento.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-16-at-21.11.17-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Stefano Ruscito</p>
                    <p class="worktitle">Sales Account presso Umana spa</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Con Davide portiamo avanti da tempo diverse iniziative in
                  ambito HR. La sua voglia di ridisegnare il futuro del settore
                  con approcci innovativi lo rende un esempio da seguire.
                  Cultura, competenza, serietà e tanta voglia di fare sono solo
                  alcune delle qualità che contraddistinguono Davide.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-10-at-18.01.29-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Fabio Panella</p>
                    <p class="worktitle">
                      Director of Sales & Operations SEUR - Talent.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Posso descrivere Davide semplicemente in due parole:
                  “competenza” e “voglia di fare”. La sua spiccata
                  professionalità gli consente di muoversi in qualsiasi
                  contesto.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-17-at-19.19.22-2-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Calabrese</p>
                    <p class="worktitle">
                      Direttore delle Risorse Umane e Organizzazione AG Group
                      Italy
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Lavoro con Davide in ambito associativo AIDP ed è un vero
                  piacere. Davide è un vero appassionato di tutte le diverse
                  sfaccettature del mondo HR e la sua principale dote direi che
                  è la curiosità. Ascolta ed approfondisce.È generoso e si mette
                  sempre a disposizione. I suoi punti di forza direi problem
                  solving e forte competenza nei processi di selezione e
                  sviluppo delle risorse umane.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-21-at-19.47.39-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Micaroni</p>
                    <p class="worktitle">
                      Responsabile relazioni sindacali e contenzioso del lavoro
                      AUTOSTRADE PER L’ITALIA SPA
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho avuto modo di conoscere Davide all'interno della community
                  AIDP. E ne ho subito tratto un'ottima impressione. Dinamico,
                  aperto a capire il mondo HR che gli sta intorno e capace di
                  portare contributi professionali di valore. Tutto questo
                  supportato da una gran voglia e volontà di fare cose
                  innovative e con grande competenza.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-22-at-11.14.00-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Nicola Rossi</p>
                    <p class="worktitle">
                      Senior Director, Managing Director Italy at Monster Italia
                    </p>
                  </div>
                </div>
              </div>

              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Un profilo a 360 gradi già raggiunto in giovane età. Davide è
                  un professionista che ha maturato competenze importanti in
                  diversi ambiti culturali, produttivi e geografici. A tutto
                  questo si aggiunge energia e attenzione elementi dimostrati
                  dalla sua attività di commentatore in diversi ambiti
                  multimediali.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/david-trotti-2.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Davide Tratti</p>
                    <p class="worktitle">Presidente regionale AIDP Lazio</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide Maggio e ho avuto l’opportunità di
                  apprezzare le sue competenze specifiche, nell’area HR, nella
                  più estesa accezione dell’espressione, collaborando su
                  specifici incarichi professionali e su altri fronti, non
                  ultimo quello della pubblicistica e della editoria divulgativa
                  e di approfondimento. Ho apprezzato le sue qualità umane e
                  professionali, in termini di efficace ed efficiente risposta
                  alle necessità informative e problematiche del mio Studio.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/1517557072323.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pasquale Dui</p>
                    <p class="worktitle">
                      Avvocato e Docente presso Università Bicocca
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ogni volta che entro in contatto con Davide c'è sempre
                  qualcosa di nuovo da scoprire ed una opportunità da cogliere.
                  Poche chiacchiere, dritto al punto, focus e sempre con il
                  sorriso. Difficile non entrare in sintonia. Per un settore
                  come il nostro, quello delle Risorse Umane, l'affidabilità, la
                  preparazione, le relazioni e la concretezza sono i quattro
                  elementi cardine che creano la differenza tra dilettanti e
                  professionisti. Davide è al top in tutti e quattro.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-12-at-16.03.00-1-2-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Fattizio</p>
                    <p class="worktitle">CEO di Euspert- Bianco lavoro</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è una persona da cui puoi apprendere qualcosa
                  conversando di fronte ad un tavolo di lavoro o sorseggiando un
                  caffè amichevole ad un bar. È un professionista di ampie
                  vedute e con un acuto spirito di osservazione che mi ha
                  trasmesso molto, sia professionalmente sia umanamente.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Serena-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Serena Di Maria</p>
                    <p class="worktitle">
                      Dottoressa in Lingue Orientali e content creator
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  “Davide, professionale, attento, intuitivo e travolgente.
                  Innamorato del suo lavoro al punto da trasmettere tale
                  passione anche a chi come me, opera in un settore differente.
                  Lo definirei un “Freccia Rossa”.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/foto_ylenia_muratore-Ottimizzata.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Ylenia Muratore</p>
                    <p class="worktitle">
                      Transfer Pricing Consultant presso Deloitte spa
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è un giovane talento del mondo HR e unisce a una
                  solida preparazione a 360° in questo settore, una cultura
                  generale ampia e un modo di lavorare improntato al
                  raggiungimento di obiettivi specifici. Ha una ottima
                  conoscenza delle best pratices americane e del mondo aziendale
                  italiano. Una rara profondità psicologica e dei valori etici
                  "antichi" ne fanno un professionista estremamente affidabile e
                  performante. Ho avuto la fortuna di collaborare in vari
                  contesti e si è sempre dimostrato un leader giovane, con
                  esperienza di oltre 7 anni nel ruolo di HR Manager, e una
                  persona per bene. Se avete un'azienda e volete fare la
                  differenza nelle Risorse Umane, Davide Maggio fa al caso
                  vostro.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Albino.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Albino Ruberti</p>
                    <p class="worktitle">Project Manager e Business Coach</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Problem solver e consulenza risorse Umane sono i principi che
                  caratterizzano Davide. Professionista attento alla cura dei
                  dettagli.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Antonio-Signorello.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Antonio Signorello</p>
                    <p class="worktitle">
                      HR recruiter service, fives Interlogistics spa
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho il piacere di conoscere e collaborare con Davide il quale
                  dimostra in ogni occasione di confronto e scambio di idee di
                  essere non solo un professionista centrato sul pezzo in ciò
                  che fa, ma fa della sua umiltà personale e fame di sapere il
                  perno in cui ruota la sua essenza di HR manager.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-19.20.29-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Cinzia Calzavara</p>
                    <p class="worktitle">
                      Formatore soft skills e HR, Consulente delle Politiche
                      Attive del lavoro. Presso Adecco & Randstad
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Dimenticate i pregiudizi sul ruolo dell’HR. Davide Maggio è
                  una vera e necessaria rivoluzione nel settore delle risorse
                  umane. Lavorare con Davide comporta un arricchimento umano e
                  professionale. Un talento giovane, determinato, pieno di
                  risorse creative e innovative, ma soprattutto dedito
                  all’ascolto attivo del cliente, è una necessaria rivoluzione
                  nelle RU.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-13-at-12.15.45-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marta De Prezzo</p>
                    <p class="worktitle">Junior HR recruiter randstand</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Attendo, acuto e dal profondo spessore umano e professionale,
                  Davide Maggio ha più volte dato modo di creare valore e
                  opportunità al network di professionisti che lo circondano.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Gianluca-Caputo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Gianluca Caputo</p>
                    <p class="worktitle">CEO Softmine Srl</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide è un HR manager che stimo profondamente. Nonostante la
                  giovane età - grazie alle sue competenze e alla sua
                  determinazione- ha già raggiunto importanti traguardi
                  professionali. Dialogando con lui traspare fin da subito la
                  forte passione e dedizione verso il proprio lavoro. Ha inoltre
                  spiccate doti d’ascolto e osservazione. Davide è un esempio
                  per tutti i giovani che voglio intraprendere un percorso
                  professionale in un settore ad alta competitività come quello
                  delle risorse umane. Lavorare con Davide ti arricchisce come
                  professionista e come individuo.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-22.41.13-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marika Orlandi</p>
                    <p class="worktitle">
                      Talent Acquisition Specialist di Facile.it
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho trovato in Davide un giovane professionista entusiasta del
                  proprio lavoro che si impegna sempre a svolgere al meglio. Ha
                  già una buona esperienza acquisita, ma al contempo sa
                  ascoltare ed è sempre pronto a migliorarsi. Da un anno è in
                  partnership con Kekyjob e si è rivelato un elemento utile ed
                  efficace per la crescita dell'azienda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-13-at-00.20.13-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Francesco Margreth</p>
                    <p class="worktitle">CEO di kekyjob Srl</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide è un esperto HR Manager, estremamente professionale,
                  flessibile e sensibile alle esigenze del cliente capace di
                  offrire sempre un servizio di qualità.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/NOme-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pasquale De Luca bossa</p>
                    <p class="worktitle">HR Manager</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide in occasione della nostra collaborazione
                  per la Rubrica HR di Bianco Lavoro. Da subito mi ha colpito la
                  sua professionalità e il suo entusiasmo. Davide è un manager
                  determinato, preparato, intraprendente con la voglia costante
                  di migliorarsi e aggiornarsi. Ottimo problem solver, svolge il
                  suo lavoro con impegno e dedizione per trovare la migliore
                  soluzione al problema. Un professionista completo a 360°, un
                  talento che tutte le aziende vorrebbero on-board.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Francesca.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Francesca Sardella</p>
                    <p class="worktitle">HR Business presso IVI RMA GLOBAL</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide non molto tempo fa,subito ho percepito la
                  sua voglia di fare bene e la sua grande determinazione nel
                  raggiungere obiettivi. Oggi sto conoscendo oltre al
                  professionista anche una persona vera e sincera che vuole
                  condividere relazioni umane propio come me. Vi consiglio
                  Davide come persona di valori e come professionista.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-19-at-09.39.21-5-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Alessandro Gian Maria Ferri</p>
                    <p class="worktitle">CEO edicole &100</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è un nuovo e vero amico. Giovane intraprendente
                  e brillante, capace di vedere il vero potenziale nelle persone
                  e di valorizzarlo, è un leader capace e un talentuoso manager.
                  Ciò che ha colpito profondamente la mia attenzione di lui, il
                  giorno in cui ci siamo conosciuti, è stata la forza del suo
                  carattere e come questa fosse indirizzata naturalmente verso
                  la cura e l'attenzione presso gli altri. Un grande uomo e
                  professionista, un altruista e solidale amico
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Laurent-otimizzato-e1617780132679.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Laurent Vercken de Vreuschmen</p>
                    <p class="worktitle">
                      Professore Presso i Ministeri dell'Economia e Finanza e
                      della Difesa. Direttore e editore di Edizioni &100
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho avuto modo di collaborare con Davide Maggio, persona di
                  grande competenza, capacità e talento. Puntuale, brillante e
                  affidabile, ha saputo cogliere l'esigenza della nostra
                  azienda, fornendo soluzioni efficaci e vincenti. A ciò si
                  aggiunge una forte connotazione empatica e un vivo entusiasmo,
                  che caratterizzano piacevolmente l'esperienza professionale,
                  aggiungendone valore.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Piace-ELena.-ottimizzata.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Elena Piave</p>
                    <p class="worktitle">
                      Coordinatore Nazionale - Consorzio Progresso
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Lavorare con David è sinonimo di professionalità e
                  affidabilità, a tal punto che il suo modus operandi riesce a
                  rendere semplice ogni processo. Mirabile è l'abilità nel
                  cercare soluzioni adatte al contesto o anche solo far notare
                  prospettive alternative e innovative.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-02-at-23.46.37-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Chiara Temperanza</p>
                    <p class="worktitle">
                      HR Assistant & Recruiter, KOHLER Engines EMEA
                    </p>
                  </div>
                </div>
              </div>

              <div class="feedback is-clone">
                <p class="quote">"</p>
                <h3>
                  Dal nostro primo incontro ho riconosciuto in Davide volontà,
                  dedizione e una importante preparazione culturale.Doti
                  preziose nel contesto lavorativo di riferimento.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-16-at-21.11.17-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Stefano Ruscito</p>
                    <p class="worktitle">Sales Account presso Umana spa</p>
                  </div>
                </div>
              </div>
              <div class="feedback is-clone">
                <p class="quote">"</p>
                <h3>
                  Con Davide portiamo avanti da tempo diverse iniziative in
                  ambito HR. La sua voglia di ridisegnare il futuro del settore
                  con approcci innovativi lo rende un esempio da seguire.
                  Cultura, competenza, serietà e tanta voglia di fare sono solo
                  alcune delle qualità che contraddistinguono Davide.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-10-at-18.01.29-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Fabio Panella</p>
                    <p class="worktitle">
                      Director of Sales & Operations SEUR - Talent.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="featureds">
          <div class="titles">
            <h2>Storie</h2>
            <div class="buttons">
              <div class="btnScrollL" @click="btnScrollSx2()">
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
              <div class="btnScrollR" @click="btnScrollDx2()">
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
          <div class="featuredContent">
            <div class="featured">
              <div class="hover"></div>
              <div class="text">
                <p>April 22, 2022</p>
                <h2>
                  Conserving mangroves to protect local livelihoods and the
                  planet
                </h2>
              </div>
            </div>
            <div class="featured">
              <div class="hover"></div>
              <div class="text">
                <p>April 22, 2022</p>
                <h2>
                  Conserving mangroves to protect local livelihoods and the
                  planet
                </h2>
              </div>
            </div>
            <div class="featured">
              <div class="hover"></div>
              <div class="text">
                <p>April 22, 2022</p>
                <h2>
                  Conserving mangroves to protect local livelihoods and the
                  planet
                </h2>
              </div>
            </div>
            <div class="featured">
              <div class="hover"></div>
              <div class="text">
                <p>April 22, 2022</p>
                <h2>
                  Conserving mangroves to protect local livelihoods and the
                  planet
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div class="thirdPart">
          <div class="thirdPartDiv">
            <div class="first">
              <div class="col1">
                <h2>Be part of the world’s largest security community.</h2>
                <p>
                  Understand your dependence on the software supply chain, and
                  how you can contribute back.
                </p>
                <p>
                  Understand your dependence on the software supply chain, and
                  how you can contribute back.
                </p>
                <p>
                  Understand your dependence on the software supply chain, and
                  how you can contribute back.
                </p>
              </div>
              <div class="col2">
                <div class="glow4"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="250"
                  fill="#fff"
                  class="bi bi-building transition"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                  />
                  <path
                    d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"
                  />
                </svg>
              </div>
            </div>
            <div class="second">
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
            </div>
            <div class="second">
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
              <div class="feature">
                <h2>Notifications</h2>
                <p>
                  Get updates on the GitHub activity you've subscribed to. Use
                  the notifications inbox to customize, triage, and manage your
                  updates.
                </p>
                <div class="btn3">Learn more</div>
              </div>
            </div>
          </div>
        </div>
        <div class="clientsCo" id="clients">
          <div class="titles">
            <h2>Clienti</h2>
            <div class="buttons">
              <div class="btnScrollL" @click="btnScrollSx3()">
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
              <div class="btnScrollR" @click="btnScrollDx3()">
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
          <div class="clientsCoBody">
            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-4.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/athena_logo.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-etwo.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-border-white-1-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-OrfinSito.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/studio-felli-1-1.jpg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-07-at-22.44.28-1.jpeg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/06/logo_bit4id.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-5.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-3-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/10/logo.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-2.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-autoscuole-furia-3-1.jpg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logoaziendavisibile300.jpg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo20white.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/LOGO_ESTESO_FIRMA-300x74-1.jpg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Schermata-2020-07-10-alle-16.59.13-1-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo_irec-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/AG_LOGO_CLAIM_BIANCO-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/PentaFinanziamentiItalia.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Cattura-4.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Unione-professionisti-1.jpg"
              />
            </div>
          </div>
        </div>
        <div class="partners">
          <div class="partnersPart">
            <div class="col1">
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo5.png);
                  "
                ></div
              ></a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo6.png);
                  "
                ></div
              ></a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo7.png);
                  "
                ></div
              ></a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo8.png);
                  "
                ></div
              ></a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo1.png);
                  "
                ></div>
              </a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo2.png);
                  "
                ></div>
              </a>
              <a href="">
                <div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo3.png);
                  "
                ></div
              ></a>
              <a href=""
                ><div
                  class="partnerImg2 transition"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo4.png);
                  "
                ></div
              ></a>
            </div>
            <div class="col1">
              <h2>Costruiamo l'ecosistema del domani.</h2>
              <p>
                Increase developer velocity. Secure every step. Automate entire
                workflows. Redefine collaboration. Trusted by over 83 million
                developers.Redefine collaboration. Trusted collaboration over 83
                milliocollaborationn developers.
              </p>
            </div>
          </div>
        </div>
        <div class="cols">
          <div class="col col_1">
            <p>Aziende</p>
            <h2>Fissa un appuntamento</h2>
            <div class="subtitle">
              Cerchiamo talenti per creare il futuro, cerchiamo talenti per
              creare il futuro, cerchiamo talenti per creare il futuro
            </div>
          </div>
          <div class="col col_2 transition">
            <h3>Invia richiesta</h3>
            <div
              class="input"
              style="display: flex; width: 95%; margin: 0 0 1rem 0"
            >
              <input
                style="width: 100%; margin: 0 1rem 0 0"
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Nome azienda"
              />

              <input
                id="nav"
                style="width: 100%; margin: 0"
                class="input"
                type="text"
                name="nickname"
                placeholder="Città"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Via"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Email"
              />
            </div>
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Settore"
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
  </div>
</template>
<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");

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
  .flowSingleBtn {
    margin-top: 15rem;
  }

  .flowSingleBtn2 {
    margin-right: auto !important;
  }

  .formButton {
    width: fit-content;
    margin-left: auto;
    margin-right: 1.5rem;
  }

  .mainButton {
    width: fit-content;
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

  .first {
    padding-top: 3rem;
    background: #010b15;
  }

  .first .cols {
    display: flex;
    margin-top: 8rem;
    padding-left: 9rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
  }

  .firstPart {
    text-align: left;
    width: 100%;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 6rem;
    padding-top: 6rem;
    margin-right: 0;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 72px;
    line-height: 76px;
    font-weight: 800;
    margin-bottom: 1rem;
    width: 50%;
  }

  .firstPart p {
    width: 50%;
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    text-align: left;
    line-height: 24px;
    font-weight: 400;
  }

  .firstPart .image {
    height: 100%;
    width: 50%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    background-image: url(/src/assets/glob2.png);
    background-size: cover;
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    position: absolute;
    top: 5%;
    right: 0;
    margin-right: 0;
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
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 28px;
    line-height: 32px;
    font-weight: 300;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
  }

  .secondPart {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart h2 {
    color: #010b15;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart .titleH3 {
    margin-bottom: 1rem;
    color: #fff;
    font-size: 44px;
    line-height: 48px;
    width: 80%;
    margin-left: 3rem;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .secondPart .text {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
    margin-bottom: 10rem;
  }

  .secondPart .text span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .secondPart .cols {
    margin-top: 5rem !important;
  }

  .secondPart .cols .col2 {
    width: 30%;
  }

  .image {
    width: 30vw;
    height: 35vw;
    margin-right: 2rem;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
  }

  .image2 {
    width: 30vw;
    height: 35vw;
    margin-right: 2rem;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-right: auto;
  }

  .input {
    width: 95%;
    margin-right: 4rem;
    margin-left: 4rem;
    margin-bottom: 1.5rem;
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

  .workflow {
    padding-top: 10rem;
    padding-bottom: 0;
  }

  .workflow .workflowTitle h2 {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
    font-size: 50px;
    line-height: 54px;
    font-weight: 800 !important;
    letter-spacing: -0.04em !important;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
  }

  .workflow .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 5rem;
  }

  .workflow .btnScrollR {
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

  .workflow .btnScrollL {
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

  .workflow .columns {
    display: flex;
  }

  .workflow .columns .column {
    padding: 3rem;
    width: 70%;
    display: flex;
    align-items: center;
  }

  .workflow .columns .column .background {
    background: #03111f;
    padding: 3rem;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    width: 35vw;
  }

  .workflow .columns .column .circle {
    position: absolute;
    right: -1%;
  }

  .workflow .columns .column .circle2 {
    position: absolute;
    left: -1%;
  }

  .workflow .columns .mt10 {
    margin-top: 15rem;
  }

  .workflow .columns .br {
    border-right: 4px solid #dbd7d78a;

    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .workflow .columns .number {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    color: #010712;
    font-size: 74px;
    font-weight: 800 !important;
    line-height: 78px;
    letter-spacing: -0.04em !important;
    margin-bottom: 1rem;
  }

  .workflow .columns .column h2 {
    color: #fff;
    font-size: 38px;
    font-weight: 800 !important;
    line-height: 42px;
    letter-spacing: -0.04em !important;
  }

  .workflow p {
    color: #627597;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400 !important;
  }

  .br .background {
    margin-left: auto;
  }

  .workflow p span {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400 !important;
  }

  .partners {
    width: 100%;
  }

  .partnersPart {
    display: flex;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-right: 8rem;
    align-items: center;
  }

  .partnersPart .col1 h2 {
    color: #fff;
    font-size: 50px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -2.5px;
    text-align: left;
    width: 80%;
    margin-left: auto;
  }

  .partnersPart .col1 p {
    color: #627597;
    font-size: 20px;
    text-align: left;
    line-height: 24px;
    font-weight: 400 !important;
    width: 80%;
    margin-left: auto;
  }

  .partnerImg2 {
    width: 150px;
    height: 150px;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-top: 2rem;
    padding: 1rem;
    float: left;
    margin-bottom: 0rem;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
  }

  .clientsCo {
    width: 100%;
  }

  .clientsCoBody {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .clientsCoBody.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .clientsCo .titles {
    align-items: center;
    display: flex;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-bottom: 2rem;
  }

  .clientsCo .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
  }

  .clientsCo .titles h2 {
    font-size: 50px;
    line-height: 54px;
    color: #fff;
    font-weight: 700;
    margin-top: 3rem;
    letter-spacing: -2.5px;
    width: fit-content;
  }

  .clientsCo .btnScrollR {
    width: fit-content;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .clientsCo .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .clientsCo .part {
    width: fit-content;
  }

  .logoClient {
    width: 135px;
    height: 135px;
    padding: 1rem;
    border-radius: 25rem;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    transition: all 0.3s ease-out;
    margin-right: 3rem;
    margin-left: 3rem;
    float: left;
    position: relative;
  }

  .logoClient img {
    width: 135px;
    height: auto;
  }

  .numbersDiv {
    margin-top: 10rem;
    padding-bottom: 8rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .numbersDiv h2 {
    color: #fff;
    font-size: 50px;
    line-height: 54px;
    font-weight: 700;
    letter-spacing: -2.5px;
    width: 50%;
    margin-left: 2rem;
  }

  .numbersDiv .numbers {
    display: flex;
    margin-top: 3rem;
  }

  .numbersDiv .numbers .number {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
    background: #03111f;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    width: 35%;
  }

  .number h3 {
    color: #fff;
    font-size: 80px;
    line-height: 84px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .number .subtitle {
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }

  .number p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
  }

  .glow {
    width: 5vw;
    opacity: 0.5;
    transform: scale(3.5);
    left: 3%;
    top: 23%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.4);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    transform: scale(3.5);
    top: 80%;
    z-index: 15;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
    box-shadow: 0px 0px 105px 45px rgba(0, 255, 213, 0.2);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 55%;
    left: 105%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.3);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 10%;
    opacity: 0.5;
    left: 110%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
  }
  .glow5 {
    position: absolute;
    width: 5vw;
    transform: scale(4.5);
    top: 90%;
    opacity: 0.5;
    left: 110%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.3);
  }

  .secondPart2 {
    padding-top: 5rem;
    margin-bottom: 0rem;
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

  .fifthDiv {
    background: transparent;
    padding: 3rem;
  }

  .fifthDiv .adviser {
    background: #03111f;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding: 6rem;
  }
  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 72%;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;
    font-weight: 600;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(116deg, #00ffbf 0%, #0076ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 30px;
    background-image: url(/src/assets/storie.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 42%;
  }

  .feedbackDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 8rem;
    width: 100%;
    background-color: transparent;
    padding-top: 10rem;
  }

  .feedbackDiv h2 {
    color: #fff;
    font-size: 64px;
    font-weight: 800 !important;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .feedbackDiv .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 5rem;
  }

  .feedbackDiv .btnScrollR {
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

  .feedbackDiv .btnScrollL {
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

  .feedbackDiv .feedbacks {
    display: flex;
    height: 100%;
    width: 100%;
    padding-right: 8rem;
    background-color: transparent;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .feedbacks.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .feedbackDiv .feedbacks .feedback {
    background: #03111f;
    border-radius: 30px;
    padding: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    box-shadow: rgb(0 35 117 / 20%) 0px 8px 24px;
    height: auto;
  }

  .feedbackDiv .feedbacks .feedback .quote {
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
    font-size: 80px;
    letter-spacing: 1.5px;
    line-height: 38px;
    margin-bottom: 0;
    padding-top: 1rem;
  }

  .feedbackDiv .feedbacks .feedback h3 {
    color: #fff;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 2rem;
    width: 40vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #ffffff;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 0rem;
    font-weight: 500;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #c1c1c1;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 16px;
    margin-bottom: 0rem;
    font-weight: 300;
  }
  .feedbackDiv .feedbacks .feedback .feedbackInfo {
    display: flex;
    align-items: center;
  }

  .feedbackDiv .feedbacks .feedback .feedbackInfo .feedbackInfoPhoto {
    background-image: url(/src/assets/ph9.JPG);
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  .thirdPart {
    margin-top: 10rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .thirdPartDiv {
    background: #03111f;
    border-radius: 30px;
    padding: 5rem;
  }

  .thirdPartDiv .first {
    background: transparent;
    display: flex;
    padding-left: 3rem;
    padding-right: 3rem;
    position: relative;
  }

  .thirdPartDiv .first h2 {
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 5rem;
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .thirdPartDiv .first p {
    width: 60%;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    margin-top: 3rem;
  }

  .first .col2 .building2 {
    position: absolute;
    top: 0%;
    left: -10%;
    top: 20%;
    transform: rotate(20deg);
  }

  .thirdPartDiv .second {
    background: transparent;
    display: flex;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 5rem;
    display: flex;
  }

  .second .feature {
    width: 25%;
    margin-right: 8rem;
  }

  .second .feature h2 {
    color: #fff;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  .second .feature p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }

  .second .feature .btn3 {
    color: #0062f5;
    cursor: pointer;
    padding-bottom: 0.1rem;
    width: fit-content;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid transparent;
  }

  .second .feature .btn3:hover {
    border-bottom: 1px solid #0062f5;
  }

  .seventh {
    width: 100%;
    margin-top: 6rem;
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

  .seventh .btn {
    background: transparent !important;
  }

  .featuredContent {
    height: 100%;
    width: 100%;
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
    font-size: 50px;
    line-height: 54px;
    color: #fff;
    font-weight: 700;
    margin-top: 3rem;
    letter-spacing: -2.5px;
    width: fit-content;
  }

  .featureds .btnScrollR {
    width: fit-content;
    background: transparent;
    border: 1px solid #fff;
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
    background: transparent;
    border: 1px solid #fff;
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
    font-size: 30px;
    line-height: 34px;
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
