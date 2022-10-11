<script>
export default {
  name: "homePart2",
  components: {},
  data() {
    return {};
  },
  mounted() {
    window.onscroll = function () {
      scrollFunction();
    };

    const flavoursContainer = document.getElementById("feedbacksContainer");
    const flavoursScrollWidth = flavoursContainer.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }

        if (flavoursContainer.scrollLeft > 13500) {
          flavoursContainer.scrollTo(0, 0);
        }
      }, 15);
    });

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

    call_btn() {
      document.querySelector(".calendly-badge-content").click();
    },

    show_more(x1) {
      let content = document.querySelector("." + x1);
      content.style.height = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";

      let content2 = document.querySelector("." + x1 + "_show");
      content2.style.display = "none";

      const fruits = ["step1", "step2", "step3", "step4", "step5"];
      fruits.forEach(myFunction);

      function myFunction(item) {
        if (item != x1) {
          let content = document.querySelector("." + item);
          content.style.height = "0%";
          content.style.opacity = "0";
          content.style.visibility = "hidden";
          content.style.display = "none";
        }

        if ("." + x1 + "_show" != "." + item + "_show") {
          let content2 = document.querySelector("." + item + "_show");
          content2.style.display = "block";
        }
      }
    },
  },
};
</script>

<template>
  <div class="dynamicContent">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="position-absolute width-full z-1"
      style="top: -1.8rem"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
    </svg>

    <div class="mainTitle" id="second">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>
              <span class="gradientTitle">Jobify Recruiting</span>, la tua
              ricerca e selezione
            </h2>
            <p>
              Siamo un’agenzia per la ricerca di talenti,
              <span style="color: #010c18; font-weight: 500"
                >digitale e dinamica</span
              >, formata da persone giovani e multilingue.
            </p>
            <div class="" style="display: flex; align-items: center">
              <router-link to="/companies"
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
          </div>
          <div class="video transition">
            <iframe
              width="600"
              height="350"
              src="https://www.youtube.com/embed/-VmEWZsUIGY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>

    <div class="clientsCo">
      <div class="clientsCoBorder">
        <div class="clientsCoLink">
          <h2>I clienti di Jobify Recruiting</h2>
        </div>
        <div class="clientsCoBody">
          <div
            class="logoClient"
            style="
              background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-4.png);
            "
          ></div>

          <div
            class="logoClient"
            style="
              background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/athena_logo.png);
            "
          ></div>

          <div
            class="logoClient"
            style="
              background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-etwo.png);
            "
          ></div>
          <div
            class="logoClient"
            style="
              background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-border-white-1-1.png);
            "
          ></div>

          <div
            class="logoClient"
            style="
              background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-OrfinSito.png);
            "
          ></div>
        </div>
      </div>
    </div>

    <div class="secondDiv" id="second">
      <div class="content">
        <div class="first" style="display: inline !important">
          <div class="title">
            <h2>
              <span>Che servizi offre Jobify</span>
            </h2>
            <p>
              Siamo convinti che l’affidabilita e la competenza possano creare
              rapporti e valore professionale, con le nostre aziende clienti.
              <br />
            </p>
            <div class="steps">
              <router-link to="/companies">
                <div class="feature transition">
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#0062f5"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </div>
                  <div class="title">Ricerca e selezione del personale</div>
                  <div class="text">
                    Get updates on the GitHub activity you've subscribed to. Use
                    the notifications inbox to customize, triage, and manage
                    your updates.
                  </div>
                  <div class="featureShowMore" @click="show_more('step1')">
                    Scopri di più
                  </div>
                </div></router-link
              >

              <router-link to="/">
                <div class="feature transition" @click="call_btn()">
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#0062f5"
                      class="bi bi-calendar-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                      />
                    </svg>
                  </div>
                  <div class="title">Servizio somministrazione di lavoro</div>
                  <div class="text">
                    Get updates on the GitHub activity you've subscribed to. Use
                    the notifications inbox to customize, triage, and manage
                    your updates.
                  </div>
                  <div class="featureShowMore" @click="show_more('step1')">
                    Fissa un appuntamento
                  </div>
                </div></router-link
              >
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
              <span>Jobify Recruiting</span> utilizza tecnologie che assolvono
              l'uomo da tutte quelle azioni ripetute nel tempo che non
              richiedono intelletto umano. Questo <span>velocizza</span> il
              processo di ricerca, ci rende più competitivi sul mercato e lascia
              più tempo all'Head Hunter nella fase di ricerca e selezione.
            </p>
            <p>
              L'obiettivo è quello di investire il tempo risparmiato ponendo il
              <span>rapporto umano</span> al centro tra
              <span>domanda e offerta</span>, per creare il
              <span>match “perfetto”</span> tra <span>azienda</span> e
              <span>candidato</span>. Per fare questo, intervistiamo:
            </p>
          </div>
          <div class="col2">
            <div class="glow9"></div>
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
      </div>
    </div>

    <div class="workflow" id="workflow">
      <div class="workflowTitle">
        <h2 class="workflowTitle2" style="margin-bottom: 0rem !important">
          Creiamo un processo di ricerca e selezione:
        </h2>
      </div>
      <div class="workflowFlex">
        <div class="step_workflow">
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0062f5"
                class="bi bi-graph-up-arrow"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                />
              </svg>
            </div>
            <div class="text">Efficenza</div>
          </div>
          <div class="show_more step1_show" @click="show_more('step1')">
            Scopri di più
          </div>

          <div class="body step1">
            Analizza i bisogni dell’azienda e del candidato, con lo scopo di
            ricercare la perfetta compatibilità tra la risorsa da assumere e i
            bisogni e le aspettative dell’azienda. Questo crea un rapporto di
            lavoro più stabile e duraturo nel tempo.
          </div>
        </div>

        <div class="circle2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#161b22"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>

        <div class="step_workflow">
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0062f5"
                class="bi bi-alarm"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                />
                <path
                  d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                />
              </svg>
            </div>
            <div class="text">Scientifico</div>
          </div>
          <div class="show_more step2_show" @click="show_more('step2')">
            Scopri di più
          </div>

          <div class="body step2">
            Tutto il processo viene monitorato da dati specifici. Questi ci
            aiutano a prendere decisioni in maniera consapevole.
          </div>
        </div>

        <div class="circle2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#161b22"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>

        <div class="step_workflow">
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0062f5"
                class="bi bi-bullseye"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                />
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                />
                <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg>
            </div>
            <div class="text">Rapido</div>
          </div>
          <div class="show_more step3_show" @click="show_more('step3')">
            Scopri di più
          </div>

          <div class="body step3">
            Ricorre a tecnologie A.I. e HR Tech. Assolve l’uomo da tutte quelle
            azioni ripetute nel tempo che non richiedono intelletto umano.
            Velocizza la ricerca e ci rende più competitivi sul mercato
          </div>
        </div>

        <div class="circle2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#161b22"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>

        <div class="step_workflow">
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0062f5"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                />
              </svg>
            </div>
            <div class="text">Umano</div>
          </div>

          <div class="show_more step4_show" @click="show_more('step4')">
            Scopri di più
          </div>

          <div class="body step4">
            Il tempo risparmiato grazie all'utilizzo dell'intelligenza
            artificiale, consente ai nostri head hunter di instaurare un
            rapporto con i candidati e comprendere i loro valori, le loro
            aspettative ed i loro bisogni.
          </div>
        </div>

        <div class="circle2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="#161b22"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            />
          </svg>
        </div>

        <div class="step_workflow">
          <div class="header">
            <div class="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="#0062f5"
                class="bi bi-trophy"
                viewBox="0 0 16 16"
              >
                <path
                  d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"
                />
              </svg>
            </div>
            <div class="text">Competitivo</div>
          </div>

          <div class="show_more step5_show" @click="show_more('step5')">
            Scopri di più
          </div>

          <div class="body step5">
            Essendo dei nativi digitali riusciamo a contenere i costi fissi ed
            essere tra i più competitivi sul mercato
          </div>
        </div>
      </div>
    </div>

    <div class="fifthDiv">
      <div class="adviser transition">
        <div class="col">
          <h3>
            <span>Jobify Recruiting crea il matching</span> perfetto tra azienda
            e candidato
          </h3>
          <button class="btn" @click="call_btn()">
            Fissa appuntamento
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
          </button>
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
              fill="#010712"
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
              fill="#010712"
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
              dedizione e una importante preparazione culturale.Doti preziose
              nel contesto lavorativo di riferimento.
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
              Con Davide portiamo avanti da tempo diverse iniziative in ambito
              HR. La sua voglia di ridisegnare il futuro del settore con
              approcci innovativi lo rende un esempio da seguire. Cultura,
              competenza, serietà e tanta voglia di fare sono solo alcune delle
              qualità che contraddistinguono Davide.
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
              Posso descrivere Davide semplicemente in due parole: “competenza”
              e “voglia di fare”. La sua spiccata professionalità gli consente
              di muoversi in qualsiasi contesto.
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
                  Direttore delle Risorse Umane e Organizzazione AG Group Italy
                </p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Lavoro con Davide in ambito associativo AIDP ed è un vero piacere.
              Davide è un vero appassionato di tutte le diverse sfaccettature
              del mondo HR e la sua principale dote direi che è la curiosità.
              Ascolta ed approfondisce.È generoso e si mette sempre a
              disposizione. I suoi punti di forza direi problem solving e forte
              competenza nei processi di selezione e sviluppo delle risorse
              umane.
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
              supportato da una gran voglia e volontà di fare cose innovative e
              con grande competenza.
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
              Un profilo a 360 gradi già raggiunto in giovane età. Davide è un
              professionista che ha maturato competenze importanti in diversi
              ambiti culturali, produttivi e geografici. A tutto questo si
              aggiunge energia e attenzione elementi dimostrati dalla sua
              attività di commentatore in diversi ambiti multimediali.
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
              Ho conosciuto Davide Maggio e ho avuto l’opportunità di apprezzare
              le sue competenze specifiche, nell’area HR, nella più estesa
              accezione dell’espressione, collaborando su specifici incarichi
              professionali e su altri fronti, non ultimo quello della
              pubblicistica e della editoria divulgativa e di approfondimento.
              Ho apprezzato le sue qualità umane e professionali, in termini di
              efficace ed efficiente risposta alle necessità informative e
              problematiche del mio Studio.
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
              Ogni volta che entro in contatto con Davide c'è sempre qualcosa di
              nuovo da scoprire ed una opportunità da cogliere. Poche
              chiacchiere, dritto al punto, focus e sempre con il sorriso.
              Difficile non entrare in sintonia. Per un settore come il nostro,
              quello delle Risorse Umane, l'affidabilità, la preparazione, le
              relazioni e la concretezza sono i quattro elementi cardine che
              creano la differenza tra dilettanti e professionisti. Davide è al
              top in tutti e quattro.
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
              caffè amichevole ad un bar. È un professionista di ampie vedute e
              con un acuto spirito di osservazione che mi ha trasmesso molto,
              sia professionalmente sia umanamente.
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
              Innamorato del suo lavoro al punto da trasmettere tale passione
              anche a chi come me, opera in un settore differente. Lo definirei
              un “Freccia Rossa”.
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
              solida preparazione a 360° in questo settore, una cultura generale
              ampia e un modo di lavorare improntato al raggiungimento di
              obiettivi specifici. Ha una ottima conoscenza delle best pratices
              americane e del mondo aziendale italiano. Una rara profondità
              psicologica e dei valori etici "antichi" ne fanno un
              professionista estremamente affidabile e performante. Ho avuto la
              fortuna di collaborare in vari contesti e si è sempre dimostrato
              un leader giovane, con esperienza di oltre 7 anni nel ruolo di HR
              Manager, e una persona per bene. Se avete un'azienda e volete fare
              la differenza nelle Risorse Umane, Davide Maggio fa al caso
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
              essere non solo un professionista centrato sul pezzo in ciò che
              fa, ma fa della sua umiltà personale e fame di sapere il perno in
              cui ruota la sua essenza di HR manager.
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
                  Formatore soft skills e HR, Consulente delle Politiche Attive
                  del lavoro. Presso Adecco & Randstad
                </p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Dimenticate i pregiudizi sul ruolo dell’HR. Davide Maggio è una
              vera e necessaria rivoluzione nel settore delle risorse umane.
              Lavorare con Davide comporta un arricchimento umano e
              professionale. Un talento giovane, determinato, pieno di risorse
              creative e innovative, ma soprattutto dedito all’ascolto attivo
              del cliente, è una necessaria rivoluzione nelle RU.
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
              professionali. Dialogando con lui traspare fin da subito la forte
              passione e dedizione verso il proprio lavoro. Ha inoltre spiccate
              doti d’ascolto e osservazione. Davide è un esempio per tutti i
              giovani che voglio intraprendere un percorso professionale in un
              settore ad alta competitività come quello delle risorse umane.
              Lavorare con Davide ti arricchisce come professionista e come
              individuo.
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
              proprio lavoro che si impegna sempre a svolgere al meglio. Ha già
              una buona esperienza acquisita, ma al contempo sa ascoltare ed è
              sempre pronto a migliorarsi. Da un anno è in partnership con
              Kekyjob e si è rivelato un elemento utile ed efficace per la
              crescita dell'azienda.
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
              flessibile e sensibile alle esigenze del cliente capace di offrire
              sempre un servizio di qualità.
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
              Ho conosciuto Davide in occasione della nostra collaborazione per
              la Rubrica HR di Bianco Lavoro. Da subito mi ha colpito la sua
              professionalità e il suo entusiasmo. Davide è un manager
              determinato, preparato, intraprendente con la voglia costante di
              migliorarsi e aggiornarsi. Ottimo problem solver, svolge il suo
              lavoro con impegno e dedizione per trovare la migliore soluzione
              al problema. Un professionista completo a 360°, un talento che
              tutte le aziende vorrebbero on-board.
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
              Ho conosciuto Davide non molto tempo fa,subito ho percepito la sua
              voglia di fare bene e la sua grande determinazione nel raggiungere
              obiettivi. Oggi sto conoscendo oltre al professionista anche una
              persona vera e sincera che vuole condividere relazioni umane
              propio come me. Vi consiglio Davide come persona di valori e come
              professionista.
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
              Davide Maggio è un nuovo e vero amico. Giovane intraprendente e
              brillante, capace di vedere il vero potenziale nelle persone e di
              valorizzarlo, è un leader capace e un talentuoso manager. Ciò che
              ha colpito profondamente la mia attenzione di lui, il giorno in
              cui ci siamo conosciuti, è stata la forza del suo carattere e come
              questa fosse indirizzata naturalmente verso la cura e l'attenzione
              presso gli altri. Un grande uomo e professionista, un altruista e
              solidale amico
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
                  Professore Presso i Ministeri dell'Economia e Finanza e della
                  Difesa. Direttore e editore di Edizioni &100
                </p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Ho avuto modo di collaborare con Davide Maggio, persona di grande
              competenza, capacità e talento. Puntuale, brillante e affidabile,
              ha saputo cogliere l'esigenza della nostra azienda, fornendo
              soluzioni efficaci e vincenti. A ciò si aggiunge una forte
              connotazione empatica e un vivo entusiasmo, che caratterizzano
              piacevolmente l'esperienza professionale, aggiungendone valore.
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
              Lavorare con David è sinonimo di professionalità e affidabilità, a
              tal punto che il suo modus operandi riesce a rendere semplice ogni
              processo. Mirabile è l'abilità nel cercare soluzioni adatte al
              contesto o anche solo far notare prospettive alternative e
              innovative.
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
              dedizione e una importante preparazione culturale.Doti preziose
              nel contesto lavorativo di riferimento.
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
              Con Davide portiamo avanti da tempo diverse iniziative in ambito
              HR. La sua voglia di ridisegnare il futuro del settore con
              approcci innovativi lo rende un esempio da seguire. Cultura,
              competenza, serietà e tanta voglia di fare sono solo alcune delle
              qualità che contraddistinguono Davide.
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

    <div class="fourthDiv" id="fourth">
      <div class="content">
        <div class="first">
          <div class="title">
            <div class="subtitle">
              Milano &nbsp;&nbsp;•&nbsp;&nbsp; Dubai &nbsp;&nbsp;•&nbsp;&nbsp;
              Trencin
            </div>
            <h2>Resta in <span>contatto</span> con noi</h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
            <router-link to="/contact"
              ><button class="btn">
                Contattaci
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
        </div>
        <div class="contentImage">
          <div class="square transition"></div>
          <div class="square2 transition"></div>
          <div class="square3 transition"></div>
          <div class="square4 transition"></div>
          <div class="rectangle transition"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Calendly badge widget begin -->

<style
  href="https://assets.calendly.com/assets/external/widget.css"
  rel="stylesheet"
></style>
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
  .dynamicContent {
    margin-top: 10rem;
  }
  .mainTitle {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .mainTitle .content {
    padding: 5rem;
    padding-top: 4rem;
  }

  .content .first {
    display: flex;
    align-items: center;
    z-index: 5;
  }

  .mainTitle .title h2 {
    color: #010712;
    font-size: 64px;
    font-weight: 800;
    width: 90%;
    line-height: 64px;
    letter-spacing: -0.06em !important;
  }

  .mainTitle .title p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 90%;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .first .video {
    width: fit-content;
    height: fit-content;
    background: #010712;
    border-radius: 30px;
  }

  .gradientTitle {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
    font-size: 64px;
    font-weight: 700;
    line-height: 68px;
    padding-right: 0.05rem;
    letter-spacing: -0.03em !important;
  }

  .clientsCo {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
    background-color: #fff;
  }

  .clientsCoBorder {
    display: flex;
    align-items: center;
    border: 2px solid #80808038;
    padding-top: 3rem;
    padding-bottom: 3rem;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .clientsCoLink h2 {
    width: fit-content;
    margin-left: 6rem;
    background: -webkit-linear-gradient(-70deg, #7346db 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 40px;
    font-weight: 800;
    line-height: 44px;
    letter-spacing: -0.04em !important;
  }

  .clientsCoLink p {
    width: fit-content;
    margin-left: 6rem;
    color: #010712;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.01em !important;
    border: 2px solid #80808038;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 30px;
    margin-top: 1rem;
  }

  .clientsCoBody {
    padding-left: 6rem;
    padding-right: 6rem;
    display: contents;
    align-items: center;
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
  }

  .secondDiv {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
    width: 100%;
    background-color: #fff;
  }

  .secondDiv .title h2 {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 87%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .secondDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
  }

  .secondDiv .title p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .second .flow {
    margin-top: 10rem;
    display: flex;
    width: 100%;
  }

  .steps {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: fit-content;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .step {
    text-align: center;
    background: #161b22;
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
    cursor: pointer;
  }

  .step:hover {
    transform: scale(1.1);
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
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
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
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .step .text {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 3rem;
  }

  .thirdPart {
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    background: white;
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

  .thirdPartDiv .first span {
    color: #0062f5;
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

  .feature {
    text-align: center;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    min-height: 26vw;
    float: left;
    transition: all 0.3s ease-out;
    text-align: left;
    cursor: pointer;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 25vw;
  }

  .feature:hover {
    transform: scale(1.1);
  }

  .feature .number {
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

  .feature .title {
    color: #010712;
    margin-left: 0 !important;
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: -0.04em !important;
    width: 100% !important;
    margin-bottom: 1rem;
  }

  .feature .text {
    color: #627597;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }

  .featureShowMore {
    color: #0062f5;
    cursor: pointer;
    font-weight: 500;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-top: 2rem;
  }

  .imageStep {
    width: 37vw;
    height: 20vw;
    margin-right: 2rem;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/candidato.jpg);
    background-position: center;
    background-size: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-bottom: 3rem;
    margin-right: 0;
  }

  .workflow {
    background: #fff;
    padding-top: 10rem;
    padding-bottom: 0;
  }

  .workflow .workflowTitle2 {
    background: -webkit-linear-gradient(-70deg, #db469f 0%, #2188ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
    font-size: 64px;
    line-height: 68px;
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
    background: #161b22;
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

  .workflowFlexTitle {
    margin-bottom: 0rem !important;
    color: #010712 !important;
    font-size: 64px !important;
    font-weight: 800 !important;
    text-align: center !important;
    line-height: 68px !important;
    letter-spacing: -0.03em !important;
    background: transparent !important;
    -webkit-text-fill-color: none !important;
  }

  .workflowFlex {
    margin-top: 10rem;
    padding-bottom: 10rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 100%;
    background-color: #fff;
    align-items: center;
    position: relative;
  }

  .workflowFlex .workflowLogo {
    width: 170px;
    margin-top: 0.5rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #0062f5;
  }

  .workflowLogo img {
    width: 100%;
  }

  .workflowFlex .hr {
    width: 85vw;
    height: 5px;
    background: #0e3f70;
    top: 15%;
    border-radius: 15px;
  }

  .flowScheme {
    position: relative;
    height: 5vw;
  }

  .flowScheme .flowElement {
    position: absolute;
    bottom: -20%;
    width: fit-content;
  }

  .flowElement .flowElementMB5 {
    margin-bottom: 5rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .flowElement .flowElementNumber {
    font-size: 24px;
    line-height: 24px;
    color: #0062f5;
    font-weight: 700 !important;
    background: #74acff71; /* fallback for old browsers */
    /*-webkit-clip-path: polygon(
      50% 0%,
      95% 25%,
      95% 75%,
      50% 100%,
      5% 75%,
      5% 25%
    );
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);*/
    padding: 1rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    border-radius: 30px;
  }

  .flowElement .flowElementTitle {
    font-size: 18px;
    line-height: 18px;
    color: #627597 !important;
    font-weight: 700 !important;
    width: 10px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .flowElement p {
    margin-bottom: 0 !important;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    text-align: center;
  }

  .workflowFlex .step_workflow {
    margin-right: 2em;
    margin-left: 2rem;
    width: fit-content;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 25px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .step_workflow .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .step_workflow .show_more {
    color: #0062f5;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    font-weight: 500;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .step_workflow .show_more:hover {
    color: #0045ad;
  }

  .step_workflow .body {
    margin-top: 1rem;
    color: #010712;
    font-size: 14px;
    line-height: 14px;
    display: none;
    opacity: 0;
    height: 0%;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .step_workflow .icon {
    width: fit-content;
  }

  .step_workflow .text {
    text-align: center;
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: #010712;
    padding-top: 0.5rem;
    margin-left: 0.8rem;
  }

  .btn2 {
    background: transparent;
    border: none;
    font-family: "planer", sans-serif;
    color: #2d2e2f;
    font-size: 24px;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0;
    padding-right: 0;
    font-weight: 700;
    margin-top: 1.5rem;
    border-bottom: 2px solid #8c909481;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    line-height: 35px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .btn2 a {
    position: relative;
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0px !important;
    display: inline !important;
    text-decoration: none;
    text-transform: none !important;
    width: fit-content !important;
    overflow: hidden !important;
    margin-top: 0 !important;
    cursor: pointer;
    font-family: "Planer";
  }

  .btn2 span {
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 24px;
  }

  .btn .btnSpan {
    color: #2d2e2f !important;
    font-weight: 700 !important;
    letter-spacing: 1px !important;
    font-size: 24px !important;
  }

  .btn2:hover {
    border-color: #2d2e2f;
  }

  .progress-container {
    background-color: rgba(150, 150, 150, 0.6);
    height: 10px;
    width: 100%;
  }

  .progress-bar {
    background-color: #2196f3;
    height: 10px;
    width: 0%;
  }

  .content {
    padding: 2em;
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

  .elemsx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 39%;
    left: -5%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    position: absolute;
    top: 36%;
    left: 0%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 img {
    width: 80%;
  }

  .elemsx .elemdx_rectangle4 {
    width: 450px;
    height: 450px;
    background: #c700ff2b;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px #c700ff2b;
    position: absolute;
    top: 65%;
    left: -5%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle6 {
    width: 350px;
    height: 400px;
    background: #010712;
    border: 2px solid #010712;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 66%;
    left: 5%;
    z-index: 1;
    padding: 2rem;
  }

  .elemdx_rectangle6 .elemdx_text {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle6 .elemdx_text span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle6 .elemdx_text2 {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle6 .elemdx_text2 span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .second .flow .elemsx {
    width: 60%;
    text-align: left;
    padding-bottom: 4rem;
  }

  .second .flow .elemsx h2 {
    color: #010712;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-right: 2rem;
    letter-spacing: -0.04em !important;
  }

  .second .flow .elemsx h2 span {
    color: white;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    letter-spacing: -0.04em !important;
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    padding-right: 0.05rem;
  }

  .second .flow .elemsx p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    font-weight: 400 !important;
    letter-spacing: 0.2px;
  }

  .elemH2 {
    color: #010712;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-left: 2rem;
    transition: all 0.5s ease-out;
    letter-spacing: -0.04em !important;
  }

  .elemH2 span {
    background: -webkit-linear-gradient(116deg, #00ffbf 0%, #0076ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    transition: all 0.5s ease-out;
    letter-spacing: -0.04em !important;
  }

  .elemH2_v2 {
    color: #010712;
  }

  .elemH2_v2 .elemH2_v2Span {
    background: -webkit-linear-gradient(
      -70deg,
      #6000ffa8 0%,
      #ed4e50 100%
    ) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    -webkit-box-decoration-break: clone !important;
    font-size: 94px;
    line-height: 98px;
    font-weight: 800;
    transition: all 0.5s ease-out;
    padding-right: 1rem;
  }

  .elemP {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    margin-left: 2rem;
    font-weight: 400 !important;
  }

  .elemP_image {
    margin-top: 18rem !important;
    color: #627597 !important;
    font-size: 20px !important;
    width: 90% !important;
    line-height: 24px !important;
    font-weight: 400 !important;
  }

  .elemP_image span {
    margin-top: 15rem !important;
    color: #010c18 !important;
    font-size: 20px !important;
    width: 90% !important;
    line-height: 24px !important;
    font-weight: 800 !important;
  }

  .elemP_point {
    position: absolute;
    left: -9%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }

  .elemP_point2 {
    position: absolute;
    right: -3%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }

  .second .flow .elemdx {
    width: 60%;
  }

  .elemdx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: #00e9d359;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0 220 207 / 35%);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0 220 207 / 35%);
    box-shadow: 0px 0px 133px 17px rgb(0 220 207 / 35%);
    position: absolute;
    top: 40%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle2 {
    width: 450px;
    height: 250px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 42%;
    left: 30%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    background: #010712;
    border: 3px solid #324567;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 44%;
    left: 20%;
    z-index: 1;
    padding: 2rem;
  }

  .elemdx_rectangle3 .elemdx_text {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text2 {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle3 .elemdx_text2 span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text3 {
    background: rgb(0 74 255);
    border-radius: 8px;
    padding: 0.4rem;
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text3 span {
    margin-top: 0 !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text4 {
    background: rgb(0 74 255);
    border-radius: 8px;
    padding: 0.4rem;
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle3 .elemdx_text4 span {
    margin-top: 0 !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx .elemdx_rectangle4 {
    width: 350px;
    height: 450px;
    background: rgb(0 119 255 / 17%);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    position: absolute;
    top: 65%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle5 {
    height: 60%;
    background: rgba(0, 255, 234, 0.07);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    position: absolute;
    top: 30%;
    left: 15%;
    z-index: 0;
  }

  .elemdx .elemdx_rectangle6 {
    width: 350px;
    height: 450px;
    position: absolute;
    top: 66%;
    left: 33%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle6 img {
    width: 100%;
  }

  .second .flow .elemdx p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  .image {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    background-image: url(/src/assets/analysis.png);
    background-size: cover;
    background-position: center;
    position: absolute;
  }

  .image2 {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    margin-bottom: 5rem;
    background-image: url(/src/assets/searchimage.png);
    background-size: cover;
    background-position: center;
  }

  .image3 {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    margin-bottom: 10rem;
    background-image: url(/src/assets/webpcimage.png);
    background-size: cover;
    background-position: center;
  }

  .numbers .numbersHR_left {
    position: absolute;
    background: #e8ebf1;
    width: 10%;
    height: 3px;
    left: 0;
  }

  .numbers .numbersHR_right {
    position: absolute;
    background: #e8ebf1;
    width: 10%;
    height: 3px;
    right: 0;
  }

  .numbers {
    display: flex;
    padding: 5rem;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: auto;
    margin-top: 10rem;
  }

  .numbers .number {
    text-align: center;
    padding-left: 5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-right: 5rem;
  }

  .numbers .number .num {
    color: #0059ff;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -0.03em;
  }

  @property --num {
    syntax: "<integer>";
    initial-value: 700;
    inherits: false;
  }

  .num {
    transition: --num 5s;
    counter-set: num var(--num);
    font-weight: 700;
    font-size: 32px;
  }
  .num::after {
    content: counter(num);
    font-weight: 700;
    font-size: 32px;
  }
  .num:hover {
    --num: 800;
  }

  .numbers .number .subtitle {
    color: #627597;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 300;
  }

  .second .flowSingle {
    display: flex;
    width: 100%;
  }

  .second .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
    margin-top: 10rem;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle .flowSingleTitleSpan {
    color: #010712;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: -0.04em !important;
    font-weight: 800;
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .partnersButton {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
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
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .flowSingleBtn {
    margin-left: auto;
    margin-right: auto;
  }

  .third {
    height: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    background-color: #fff;
  }

  .third .flowSingle {
    display: flex;
    width: 100%;
  }

  .third .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
  }

  .third .flowSingle .flowSingleContent .flowSingleTitle {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .third .flowSingle .flowSingleContent .flowSingleTitle .flowSingleTitleSpan {
    color: #010712;
    font-size: 64px;
    line-height: 68px;
    font-weight: 700;
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .second .flowSingle .flowSingleContent p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 100%;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 400;
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

  .fourthDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 8rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #010c18;
    padding-top: 8rem;
  }

  .fourthDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .fourthDiv .title .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 2.5rem;
  }

  .fourthDiv .title h2 {
    color: #fff;
    font-size: 64px;
    font-weight: 800 !important;
    width: 40%;
    text-align: left;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .fourthDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
  }

  .fourthDiv .title p {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    width: 40%;
    text-align: left;
    line-height: 24px;
    font-weight: 400 !important;
    margin-bottom: 1rem;
  }

  .contentImage {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }

  .contentImage .square {
    width: 350px;
    height: 470px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    margin-left: auto;
    margin-right: 10rem;
    margin-top: 9rem;
  }

  .contentImage .square2 {
    width: 250px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 0;
    right: 0;
  }

  .contentImage .square3 {
    width: 250px;
    height: 250px;
    background: rgba(0, 153, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 153, 255, 0.17);
    position: absolute;
    top: 10%;
    right: 30%;
  }

  .contentImage .square4 {
    width: 250px;
    height: 250px;
    background: rgba(162, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(162, 0, 255, 0.17);
    position: absolute;
    top: 50%;
    right: 5%;
  }

  .contentImage .rectangle {
    width: 500px;
    height: fit-content;
    background: transparent;
    background-image: url(/src/assets/assistant.png);
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 10%;
    right: 5%;
    padding: 15rem;
  }

  .contentImage .rectangle h2 {
    font-size: 54px;
    line-height: 58px;
    font-weight: 800;
  }

  .contentImage .rectangle p {
    font-size: 22px;
    line-height: 26px;
    margin-top: 2rem;
    font-weight: 400;
  }

  .feedbackDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 5rem;
    width: 100%;
    background-color: #fff;
    padding-top: 5rem;
  }

  .feedbackDiv .content {
    padding: 0rem !important;
  }

  .feedbackDiv h2 {
    color: #010712;
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
    background-color: #fff;
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
    background: #f4f5f6;
    border-radius: 30px;
    padding: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
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
    color: #010712;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 2rem;
    width: 40vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #010712;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 0rem;
    font-weight: 500;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #3e3f40;
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

  .fifthDiv {
    background: #fff;
    padding: 5rem;
    padding-bottom: 5rem;
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
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/storie.jpg);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 42%;
  }
}

@media (max-width: 1023px) {
}

@media (min-width: 1920px) {
  .elemsx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgb(156 0 126 / 17%);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    position: absolute;
    top: 49%;
    left: -6%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    position: absolute;
    top: 47%;
    left: 0%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle4 {
    width: 450px;
    height: 450px;
    background: #c700ff2b;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px #c700ff2b;
    position: absolute;
    top: 75%;
    left: -6%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle6 {
    width: 350px;
    height: 400px;
    background: #010712;
    border: 3px solid #324567;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 76%;
    left: 0%;
    z-index: 1;
    padding: 2rem;
  }
  .elemP_point {
    position: absolute;
    left: -6%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }
  .elemP_point2 {
    position: absolute;
    right: -2%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }
}

@media (max-width: 1350px) {
  .workflowFlex {
    flex-wrap: wrap;
  }

  .workflowFlex .step_workflow {
    float: left;
    margin-bottom: 2rem;
  }

  .steps {
    display: inherit !important;
  }
}

@-webkit-keyframes animated_text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@-moz-keyframes animated_text {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
@keyframes animated_text {
  0% {
    background-position: 0px 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0px 50%;
  }
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
