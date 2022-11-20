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

    const flavoursContainer2 = document.getElementById("clients2");
    const flavoursScrollWidth2 = flavoursContainer2.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer2.scrollLeft !== flavoursScrollWidth2) {
          flavoursContainer2.scrollTo(flavoursContainer2.scrollLeft + 1, 0);
        }

        if (flavoursContainer2.scrollLeft > 5780) {
          flavoursContainer2.scrollTo(0, 0);
        }
      }, 15);
    });

    const slider2 = document.querySelector(".clientsCoBody");
    let isDown2 = false;
    let startX2;
    let scrollLeft2;
    if (slider2) {
      slider2.addEventListener("mousedown", (e) => {
        isDown2 = true;
        slider2.classList.add("active");
        startX2 = e.pageX - slider2.offsetLeft2;
        scrollLeft2 = slider2.scrollLeft2;
      });
      slider2.addEventListener("mouseleave", () => {
        isDown = false;
        slider2.classList.remove("active");
      });
      slider2.addEventListener("mouseup", () => {
        isDown2 = false;
        slider2.classList.remove("active");
      });
      slider2.addEventListener("mousemove", (e) => {
        if (!isDown2) return;
        e.preventDefault();
        const x = e.pageX - slider2.offsetLeft2;
        const walk2 = (x - startX2) * 3; //scroll-fast
        slider2.scrollLeft2 = scrollLeft2 - walk2;
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
          <h2>Creiamo il match perfetto tra azienda e candidato.</h2>
          <p>
            Jobify Recruiting utilizza <span>tecnologie</span> che assolvono
            l'uomo da tutte quelle azioni ripetute nel tempo che non richiedono
            intelletto umano. Questo <span>velocizza</span> il processo di
            ricerca, ci rende più competitivi sul mercato e lascia più tempo
            all'Head Hunter nella fase di ricerca e selezione.
          </p>

          <div class="mainButton">
            <a href="#whyJobify"
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
          <div class="image">
            <div class="desc">
              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
                "
              ></div>
              <p>
                L'obiettivo è quello di investire il tempo risparmiato ponendo
                il rapporto umano al centro tra domanda e offerta, per creare il
                match “perfetto” tra azienda e candidato.
              </p>
            </div>

            <div class="desc" style="margin-left: 3rem">
              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe2.jpg);
                "
              ></div>
              <p>
                Per fare questo, intervistiamo l'azienda, approfondendo la
                cultura ed il clima aziendale, l'organigramma ed il
                funzionigramma, e l'eventuale riporto diretto della risorsa da
                inserire.
              </p>
            </div>

            <div class="desc">
              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
                "
              ></div>
              <p>
                Anche il candidato, approfondendo i suoi valori e le sue
                aspettative da un punto di vista professionale.
              </p>
            </div>
          </div>
        </div>

        <div class="numbersDiv">
          <h2>
            Le statistiche: ci aiutano a <span>prendere decisioni</span> in maniera
            consapevole
          </h2>
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
        <div class="workflow" id="workflow">
          <div class="workflowTitle">
            <h2 style="margin-bottom: 0rem !important">Schema del processo</h2>
          </div>
          <div class="buttons">
            <div class="btnScrollL" @click="workflowScrollSx()">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="#1e213d"
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
                fill="#1e213d"
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

        <div class="thirdPart" id="whyJobify">
          <div class="thirdPartDiv">
            <div class="first">
              <div class="col1">
                <h2>Perchè scegliere Jobify Recruiting?</h2>
                <p>
                  <span>Jobify Recruiting</span> utilizza tecnologie che
                  assolvono l'uomo da tutte quelle azioni ripetute nel tempo che
                  non richiedono intelletto umano. Questo
                  <span>velocizza</span> il processo di ricerca, ci rende più
                  competitivi sul mercato e lascia più tempo all'Head Hunter
                  nella fase di ricerca e selezione.
                </p>
                <p>
                  L'obiettivo è quello di investire il tempo risparmiato ponendo
                  il <span>rapporto umano</span> al centro tra
                  <span>domanda e offerta</span>, per creare il
                  <span>match “perfetto”</span> tra <span>azienda</span> e
                  <span>candidato</span>. Per fare questo, intervistiamo:
                </p>
                <p>
                  L'azienda, approfondendo la cultura ed il clima aziendale,
                  l'organigramma ed il funzionigramma, e l'eventuale riporto
                  diretto della risorsa da inserire;
                </p>
                <p>
                  Il candidato, approfondendo i suoi valori e le sue aspettative
                  da un punto di vista professionale.
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
                <h2>Efficace</h2>
                <p>
                  Analizza i bisogni dell’azienda e del candidato, con lo scopo
                  di ricercare la perfetta compatibilità tra la risorsa da
                  assumere e i bisogni e le aspettative dell’azienda. Questo
                  crea un rapporto di lavoro più stabile e duraturo nel tempo.
                </p>
              </div>
              <div class="feature">
                <h2>Scientifico</h2>
                <p>
                  Tutto il processo viene monitorato da dati specifici. Questi
                  ci aiutano a prendere decisioni in maniera consapevole
                </p>
              </div>
              <div class="feature">
                <h2>Rapido</h2>
                <p>
                  Ricorre a tecnologie A.I. e HR Tech. Assolve l’uomo da tutte
                  quelle azioni ripetute nel tempo che non richiedono intelletto
                  umano. Velocizza la ricerca e ci rende più competitivi sul
                  mercato
                </p>
              </div>
            </div>
            <div class="second">
              <div class="feature">
                <h2>Umano</h2>
                <p>
                  Il tempo risparmiato grazie all'utilizzo dell'intelligenza
                  artificiale, consente ai nostri head hunter di instaurare un
                  rapporto con i candidati e comprendere i loro valori, le loro
                  aspettative ed i loro bisogni.
                </p>
              </div>
              <div class="feature">
                <h2>Competitivo</h2>
                <p>
                  Essendo dei nativi digitali riusciamo a contenere i costi
                  fissi ed essere tra i più competitivi sul mercato
                </p>
              </div>
            </div>
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
                  fill="#1e213d"
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
                  fill="#1e213d"
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

        <div class="clientsCo" id="clients">
          <div class="titles">
            <h2>I nostri clienti</h2>
          </div>
          
          <div class="clientsCoBody" id="clients2">
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
            <div class="logoClient">
              <img
                src="https://static.wixstatic.com/media/aa2e06_cd3d54eb615144ca903cc5a5d5d754e7~mv2.png/v1/fill/w_214,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contaq%20Logo%20blu.png"
              />
            </div>
            <div class="logoClient">
              <img
                src="https://www.studiorossihr.com/wp-content/uploads/2020/10/logo-orizzontale500.png"
              />
            </div>
            <div class="logoClient">
              <img src="https://www.simol.com/static/img/logo.png" />
            </div>
            <div class="logoClient">
              <img
                src="https://www.serverplan.com/assets/images/serverplan.png"
              />
            </div>
            <div class="logoClient">
              <img src="https://www.autosystemspa.it/img/logo-autosystem.png" />
            </div>
            <div class="logoClient">
              <img src="http://www.casconehome.com/img/logo-cascone-home.png" />
            </div>
            <div class="logoClient">
              <img
                src="https://www.dotstay.com/workspace/static/img/logo_no-payoff.png"
              />
            </div>
            <div class="logoClient">
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTAuMiA1My4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTAuMiA1My4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5Bc3NldCA1PC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LjYsNDAuOGMtMywwLjEtNi0wLjgtOC41LTIuNWMtMi4xLTEuNS0zLjQtMy45LTMuNi02LjVoNy42YzAuMSwxLDAuNiwyLDEuNSwyLjZjMC45LDAuNiwyLDAuOSwzLjEsMC45CgljMi4zLDAsMy41LTAuNywzLjUtMi4xYzAtMC42LTAuMy0xLjItMC44LTEuNmMtMC44LTAuNS0xLjctMC44LTIuNi0xbC01LTEuM2MtMi0wLjQtMy44LTEuNS01LjEtMy4xYy0xLjEtMS41LTEuNy0zLjMtMS43LTUuMgoJYzAtMi4zLDEtNC40LDIuOS01LjdjMi4zLTEuNiw1LTIuMyw3LjgtMi4yYzIuNy0wLjEsNS4zLDAuNyw3LjUsMi4zYzIsMS41LDMuMiwzLjcsMy4zLDYuMWgtNy40Yy0wLjMtMS44LTEuNS0yLjctMy41LTIuNwoJYy0wLjgsMC0xLjYsMC4xLTIuMywwLjVjLTAuNSwwLjMtMC45LDAuOS0wLjksMS41YzAsMS4yLDEsMiwzLDIuNWw0LjcsMS4zYzIuMSwwLjQsNC4xLDEuNCw1LjYsM2MxLjIsMS41LDEuOCwzLjMsMS44LDUuMwoJYzAsMi40LTEuMSw0LjYtMy4xLDUuOUMzMS4yLDQwLjEsMjguNCw0MC45LDI1LjYsNDAuOCIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDguNyw1MS4zaC03LjNWMTMuNmg3LjN2M2MwLjgtMS4xLDEuOS0xLjksMy4xLTIuNWMxLjQtMC43LDMtMS4xLDQuNi0xLjFjMy40LDAsNi43LDEuNSw4LjksNC4xCgljMi40LDIuNywzLjcsNi4yLDMuNyw5LjhjMC4xLDMuNi0xLjIsNy4xLTMuNiw5LjhjLTIuMiwyLjYtNS41LDQuMS04LjksNC4xYy0xLjYsMC0zLjItMC4zLTQuNi0xLjFjLTEuMi0wLjYtMi4zLTEuNC0zLjEtMi41CglMNDguNyw1MS4zTDQ4LjcsNTEuM3ogTTUwLDMyLjFjMi43LDIuNyw3LDIuNyw5LjcsMGMwLDAsMCwwLDAsMGMxLjMtMS40LDEuOS0zLjMsMS44LTUuMmMwLjEtMS45LTAuNi0zLjgtMS44LTUuMgoJYy0yLjctMi43LTcuMS0yLjctOS43LDBjMCwwLDAsMCwwLDBjLTEuMywxLjQtMS45LDMuMy0xLjgsNS4yQzQ4LjEsMjguOCw0OC43LDMwLjcsNTAsMzIuMSIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODcuNSw0MC4yVjEzLjZoNy4zdjNjMS42LTIuNCw0LjItMy42LDcuNi0zLjZjMi45LTAuMiw1LjYsMSw3LjYsMy4xYzEuOSwyLjQsMi45LDUuNCwyLjcsOC40djE1LjZoLTcuM1YyNS44CgljMC4xLTEuNi0wLjMtMy4yLTEuMi00LjVjLTAuOC0xLjEtMi4xLTEuNy0zLjUtMS42Yy0xLjctMC4xLTMuMiwwLjctNC4zLDEuOWMtMS4yLDEuNi0xLjgsMy42LTEuNiw1LjZ2MTNIODcuNXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOC42LDQwLjhjLTIuOCwwLjItNS42LTEtNy40LTMuMmMtMS45LTIuNS0yLjgtNS41LTIuNi04LjZWMTMuNmg3LjN2MTQuMmMwLDQuMiwxLjUsNi4zLDQuNSw2LjMKCWMxLjYsMC4xLDMuMS0wLjcsNC0xLjljMS4xLTEuNywxLjYtMy43LDEuNS01LjZ2LTEzaDcuM3YyNi42aC03LjN2LTNDMTM0LjMsMzkuNiwxMzEuNSw0MSwxMjguNiw0MC44Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTcsNTEuM2gtNy4zVjEzLjZoNy4zdjNjMC44LTEuMSwxLjktMS45LDMuMS0yLjVjMS40LTAuNywzLTEuMSw0LjYtMS4xYzMuNCwwLDYuNywxLjUsOC45LDQuMQoJYzIuNCwyLjcsMy43LDYuMiwzLjYsOS44YzAuMSwzLjYtMS4yLDcuMS0zLjYsOS44Yy0yLjIsMi42LTUuNSw0LjEtOC45LDQuMWMtMS42LDAtMy4yLTAuMy00LjYtMS4xYy0xLjItMC42LTIuMy0xLjQtMy4xLTIuNVY1MS4zegoJIE0xNTguMiwzMi4xYzIuNywyLjcsNywyLjcsOS43LDBjMCwwLDAsMCwwLDBjMS4zLTEuNCwxLjktMy4zLDEuOC01LjJjMC4xLTEuOS0wLjYtMy44LTEuOC01LjJjLTIuNy0yLjctNy4xLTIuNy05LjcsMGMwLDAsMCwwLDAsMAoJYy0xLjMsMS40LTEuOSwzLjMtMS44LDUuMkMxNTYuMywyOC44LDE1NywzMC43LDE1OC4yLDMyLjEiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3My44LDQwLjIgODEuMSw0MC4yIDgxLjEsMjkuMyA3My44LDI5LjMgNzMuOCw0MC4yICIvPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjgxLjEsMTMuNiA3My44LDEzLjYgNzMuOCwyNC41IDgxLjEsMjQuNSA4MS4xLDEzLjYgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMCw1My4yIDAsMCAxMS44LDAgMTEuOCw1LjcgNy4zLDUuNyA3LjMsNDcuNSAxMS44LDQ3LjUgMTEuOCw1My4yIDAsNTMuMiAiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxOTAuMiwwIDE5MC4yLDUzLjIgMTc4LjQsNTMuMiAxNzguNCw0Ny41IDE4Mi45LDQ3LjUgMTgyLjksNS43IDE3OC40LDUuNyAxNzguNCwwIDE5MC4yLDAgIi8+Cjwvc3ZnPgo="
              />
            </div>
            <div class="logoClient">
              <img
                src="data:image/svg+xml,%3csvg width='330px' height='44px' viewBox='0 0 330 44' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3e %3ctitle%3elogo/mamacrowd_logo_2020%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='logo/mamacrowd_logo_2020' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cpath d='M166.56625,36.98 C163.632045,36.98 160.97066,36.3404424 158.589504,35.0603989 C156.203924,33.7779773 154.324101,31.9949099 152.957504,29.7172479 C151.589878,27.4378723 150.90625,24.8621823 150.90625,22 C150.90625,19.1378177 151.589878,16.5621277 152.957504,14.2827521 C154.324101,12.0050901 156.203924,10.2220227 158.589504,8.93960107 C160.970852,7.65945451 163.645559,7.02 166.60625,7.02 C169.099515,7.02 171.360682,7.45986212 173.385841,8.34156419 C175.416819,9.22579954 177.126792,10.4996255 178.510361,12.1599078 L178.814628,12.5250284 L173.926118,17.0374992 L173.588253,16.6472897 C171.789012,14.5692923 169.579799,13.54 166.92625,13.54 C165.276048,13.54 163.813432,13.8993497 162.530161,14.6164717 C161.250921,15.3313411 160.257591,16.3246708 159.542722,17.6039107 C158.8256,18.8871817 158.46625,20.349798 158.46625,22 C158.46625,23.650202 158.8256,25.1128183 159.542722,26.3960893 C160.257591,27.6753292 161.250921,28.6686589 162.530161,29.3835283 C163.813432,30.1006503 165.276048,30.46 166.92625,30.46 C169.578437,30.46 171.786893,29.418512 173.586299,27.3149815 L173.923837,26.920395 L178.8118,31.4323617 L178.512946,31.796964 C177.128781,33.4856458 175.410801,34.7741305 173.364706,35.6589285 C171.326642,36.5402534 169.059198,36.98 166.56625,36.98 Z M194.164274,28.7 L188.96625,28.7 L188.96625,36.5 L181.48625,36.5 L181.48625,7.5 L194.10625,7.5 C196.653926,7.5 198.877063,7.92673209 200.7724,8.78447577 C202.68401,9.6495839 204.165419,10.8852617 205.20564,12.4877645 C206.246974,14.0919814 206.76625,15.9866385 206.76625,18.16 C206.76625,20.3349847 206.239401,22.2246152 205.182841,23.8164988 C204.230907,25.2507467 202.919606,26.3803129 201.257273,27.2025453 L207.74483,36.5 L199.564274,36.5 L194.164274,28.7 Z M188.96625,13.78 L188.96625,22.54 L193.74625,22.54 C195.584471,22.54 196.951892,22.1457883 197.864182,21.3775444 C198.759309,20.6237534 199.20625,19.5652087 199.20625,18.16 C199.20625,16.7285934 198.759515,15.664659 197.867155,14.9249397 C196.954549,14.1684371 195.585771,13.78 193.74625,13.78 L188.96625,13.78 Z M224.44625,36.98 C221.458907,36.98 218.757584,36.3338821 216.349651,35.0404778 C213.937571,33.7448464 212.044272,31.9551953 210.677504,29.6772479 C209.310005,27.398084 208.62625,24.8357286 208.62625,22 C208.62625,19.1642714 209.310005,16.601916 210.677504,14.3227521 C212.044272,12.0448047 213.937571,10.2551536 216.349651,8.95952222 C218.757584,7.66611786 221.458907,7.02 224.44625,7.02 C227.433902,7.02 230.12894,7.66625926 232.523903,8.96008959 C234.921679,10.2554399 236.814097,12.0442585 238.193849,14.3208491 C239.575395,16.6004009 240.26625,19.1634713 240.26625,22 C240.26625,24.8365287 239.575395,27.3995991 238.193849,29.6791509 C236.814097,31.9557415 234.921679,33.7445601 232.523903,35.0399104 C230.12894,36.3337407 227.433902,36.98 224.44625,36.98 Z M224.44625,30.46 C226.014394,30.46 227.422274,30.1017448 228.678648,29.3856114 C229.932541,28.6708925 230.914032,27.6768989 231.629778,26.3960893 C232.3469,25.1128183 232.70625,23.650202 232.70625,22 C232.70625,20.349798 232.3469,18.8871817 231.629778,17.6039107 C230.914032,16.3231011 229.932541,15.3291075 228.678648,14.6143886 C227.422274,13.8982552 226.014394,13.54 224.44625,13.54 C222.878106,13.54 221.470226,13.8982552 220.213852,14.6143886 C218.959959,15.3291075 217.978468,16.3231011 217.262722,17.6039107 C216.5456,18.8871817 216.18625,20.349798 216.18625,22 C216.18625,23.650202 216.5456,25.1128183 217.262722,26.3960893 C217.978468,27.6768989 218.959959,28.6708925 220.213852,29.3856114 C221.470226,30.1017448 222.878106,30.46 224.44625,30.46 Z M262.258665,18.6348026 L256.265909,36.5 L248.624238,36.5 L239.095666,7.5 L246.870831,7.5 L252.836546,26.076783 L259.066564,7.5 L265.790331,7.5 L271.830666,26.2250392 L277.984257,7.5 L285.235897,7.5 L275.748754,36.5 L268.06297,36.5 L262.258665,18.6348026 Z M287.74625,7.5 L300.96625,7.5 C304.080668,7.5 306.843361,8.09641273 309.248833,9.29227589 C311.664986,10.4934492 313.549264,12.1906848 314.892357,14.3784028 C316.235698,16.5665258 316.90625,19.1104756 316.90625,22 C316.90625,24.8895244 316.235698,27.4334742 314.892357,29.6215972 C313.549264,31.8093152 311.664986,33.5065508 309.248833,34.7077241 C306.843361,35.9035873 304.080668,36.5 300.96625,36.5 L287.74625,36.5 L287.74625,7.5 Z M295.22625,13.82 L295.22625,30.18 L300.64625,30.18 C303.325738,30.18 305.436268,29.4428894 307.004571,27.9749583 C308.565477,26.5139504 309.34625,24.5339097 309.34625,22 C309.34625,19.4660903 308.565477,17.4860496 307.004571,16.0250417 C305.436268,14.5571106 303.325738,13.82 300.64625,13.82 L295.22625,13.82 Z' id='crowd' stroke='%234FBDBF' fill='%234EBDBF'%3e%3c/path%3e %3cpath d='M38.893058,21.0099512 L31.4329711,33.54 L27.9476609,33.54 L20.52875,21.3440343 L20.52875,36.5 L13.44875,36.5 L13.44875,7.5 L19.591288,7.5 L29.7854486,24.4254193 L39.8239731,7.5 L45.9273235,7.5 L46.0101806,36.5 L38.9299391,36.5 L38.893058,21.0099512 Z M71.2543888,30.5 L58.9231112,30.5 L56.4431112,36.5 L48.6984759,36.5 L61.6241902,7.5 L68.6728867,7.5 L81.6400295,36.5 L73.7343888,36.5 L71.2543888,30.5 Z M68.8004709,24.58 L65.10875,15.6666557 L61.4170291,24.58 L68.8004709,24.58 Z M109.733058,21.0099512 L102.272971,33.54 L98.7876609,33.54 L91.36875,21.3440343 L91.36875,36.5 L84.28875,36.5 L84.28875,7.5 L90.431288,7.5 L100.625449,24.4254193 L110.663973,7.5 L116.767323,7.5 L116.850181,36.5 L109.769939,36.5 L109.733058,21.0099512 Z M142.094389,30.5 L129.763111,30.5 L127.283111,36.5 L119.538476,36.5 L132.46419,7.5 L139.512887,7.5 L152.48003,36.5 L144.574389,36.5 L142.094389,30.5 Z M139.640471,24.58 L135.94875,15.6666557 L132.257029,24.58 L139.640471,24.58 Z' id='mama' stroke='%234A4A4A' fill='%234A4A4A'%3e%3c/path%3e %3c/g%3e %3c/svg%3e"
              />
            </div>
            <div class="logoClient">
              <img
                src="https://www.lostrillonecasa.it/assets/frontend/newlayout21/logo_nuovo_grande_nero.png"
              />
            </div>
          </div>
        </div>

        <div class="cols">
          <div class="glow2"></div>
          <div class="glow3"></div>
          <div class="glow4"></div>
          <div class="glow5"></div>
          <div class="col col_1">
            <p>Aziende</p>
            <h2>Fissa un appuntamento</h2>
            <div class="subtitle">
              Ricerchiamo il candidato perfetto rispetto le vostre esigenze,
              creiamo un rapporto più stabile e duraturo.
            </div>
            <div class="images">
              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe1.jpg);
                "
              ></div>

              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe2.jpg);
                "
              ></div>

              <div
                class="photo"
                style="
                  background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pe3.jpg);
                "
              ></div>
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
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .first { 
    background: #fff;
  }

  .first .cols {
    display: flex;
    margin-top: 8rem;
    padding-left: 9rem;
    padding-right: 9rem;
    padding-bottom: 3rem;
  }

  .cols .images {
    margin-top: 2rem;
    display: flex;
    align-items: center;
  }

  .images .photo {
    width: 8vw;
    height: 8vw;
    background-position: center;
    background-size: cover;
    border-radius: 25rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-right: 1.5rem;
  }

  .firstPart {
    text-align: left;
    width: 100%;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 6rem;
    padding-top: 9rem;
    margin-right: 0;
    background:#1e213d;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .firstPart p span {
    color: #c554a0;
    font-weight: 600;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    margin-bottom: 1rem;
    width: 50%;
  }

  .firstPart p {
    width: 50%;
    margin-top: 0.5rem;
    color: #fff;
    font-size: 18px;
    text-align: left;
    line-height: 22px;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  .firstPart .image {
    height: 100%;
    width: 50%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    /*background-image: url(/src/assets/glob2.png);*/
    background-image: none;
    background-size: cover;
    background-position: center;
    background-size: 80%;
    background-repeat: no-repeat;
    position: absolute;
    top: 5%;
    right: 0;
    margin-right: 0;
  }

  .firstPart .image .desc {
    display: flex;
    align-items: center;
    width: 100%;
    background: #00225e8f;
    backdrop-filter: blur(3px);
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    padding-left: 1.1rem;
    padding-right: 1.1rem;
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-bottom: 1.5rem;
  }

  .firstPart .image .desc .photo {
    width: 60px;
    height: 60px;
    background-position: center;
    background-size: cover;
    border-radius: 25rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-right: 1rem;
  }

  .firstPart .image .desc p {
    width: 80%;
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    color: #fff;
    margin: 0 !important;
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
    color: #1e213d;
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
    color: #1e213d;
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
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
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
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
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
    background: #1e213d;
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
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    color: #1e213d;
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
    color: #cccccc;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300 !important;
  }

  .br .background {
    margin-left: auto;
  }

  .workflow p span {
    color: #c554a0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600 !important;
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
    padding-bottom: 10rem;
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
    margin-bottom: 2rem;
  }

  .clientsCo .titles h2 {
    color: #1e213d;
    font-size: 64px;
    font-weight: 800 !important;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .clientsCo .part {
    width: fit-content;
  }

  .logoClient {
    width: 135px;
    height: 135px;
    padding: 1rem;
    margin-left: 3rem;
    float: left;
    padding-right: 3rem;
    display: contents;
  }

  .logoClient img {
    width: 135px;
    height: auto;
    margin-right: 5rem;
  }

  .numbersDiv {
    margin-top: 10rem;
    padding-bottom: 8rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .numbersDiv h2 {
    color: #1e213d;
    font-size: 56px;
    line-height: 56px;
    font-weight: 600;
    letter-spacing: -2.5px;
    width: 50%;
    margin-left: 2rem;
  }

  .numbersDiv h2 span{
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 600;
  }

  .numbersDiv .numbers {
    display: flex;
    margin-top: 3rem;
  }

  .numbersDiv .numbers .number {
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    background: #1e213d;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    width: 35%;
  }

  .number h3 {
    color: #fff;
    font-size: 50px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: -2.5px;
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .number .subtitle {
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 700;
  }

  .number p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
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
    background: #1e213d;
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
    background: #1e213d;
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
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
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
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/storie.jpg);
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
    color: #1e213d;
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
    background: #1e213d;
    border-radius: 30px;
    padding: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    box-shadow: rgb(0 35 117 / 20%) 0px 8px 24px;
    height: auto;
  }

  .feedbackDiv .feedbacks .feedback .quote {
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
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
    color: #cccccc;
    font-weight: 300;
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
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .thirdPartDiv {
    background: transparent;
    border-radius: 30px;
  }

  .thirdPartDiv .first {
    background: transparent;
    display: flex;
    padding-left: 3rem;
    padding-right: 3rem;
    position: relative;
  }

  .thirdPartDiv .first span {
    color: #c554a0;
    font-weight: 600;
  }

  .thirdPartDiv .first h2 {
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 5rem;
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .thirdPartDiv .first p {
    width: 60%;
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
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
    margin-top: 2rem;
    display: flex;
  }

  .second .feature {
    margin-right: 2rem;
    width: 30%;
    background: #1e213d;
    border-radius: 30px;
    padding: 3rem;
  }

  .second .feature h2 {
    color: #fff;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  .second .feature p {
    color: #cccccc;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300 !important;
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
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/ph17.jpg);
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
