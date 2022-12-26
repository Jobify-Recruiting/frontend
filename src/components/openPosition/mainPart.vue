<script>
export default {
  name: "mainPart",
  components: {},
  data() {
    return {
      storie: [
                {
                  nickname: "Mattia Musumeci",
                  ruolo: "Sviluppatore PHP",
                  azienda: "CONTAQ",
                  data: "1 Dicembre 2022",
                  storia_testo: "L’approccio umano è stato una componente fondamentale di tutto il processo. E’ stato molto importante per me il supporto, non solo dal punto di vista tecnico, durante tutta la durata della selezione. Ogni mia domanda o richiesta è stata accolta mettendo sempre in primo piano le mie necessità senza avere alcuna forzatura o costrizione di alcun tipo. Del servizio offerto mi hanno colpito la serietà, l’empatia e la cura del cliente. Molte aziende spesso trattano le risorse che cercano come numeri mentre qui ho notato un approccio completamente diverso e di totale cura della persona. Non sono mai stato lasciato solo ed ho sempre ricevuto l’appoggio di Chiara (la ragazza che ha curato il tutto) e questo è stato di grande aiuto per me. Per ultimo ma ovviamente non meno importante, la possibilità di ricevere un’offerta molto più alta della mia attuale RAL grazie all’intermediazione di Chiara, nel mio caso ho ricevuto un’offerta superiore di 10k alla mia attuale retribuzione",
                },
                {
                  nickname: "Stefano Binucci",
                  ruolo: "Consulente Commerciale in P.Iva",
                  azienda: "STUDIO FELLI",
                  data: "1 Dicembre 2022",
                  storia_testo: "Umanamente, mi ha colpito l’approccio di JOBIFY in quanto sono stato messo subito a mio agio nel potermi presentare in un clima sereno, dove sentirmi veramente ascoltato. Mi sono sentito seguito e sostenuto dall’inizio dell’iter di selezione, dal primo contatto telefonico, sino alle fasi successive, dove ho avuto un contatto e aggiornamento costante avendo un professionista a cui fare sempre riferimento .  Ho apprezzato la tempestività delle comunicazioni e il clima distensivo creato in mio favore per arrivare sereno e preparato sull’azienda al colloquio finale.",
                },
                {
                  nickname: "Valeria Peluso",
                  ruolo: "Segretaria Commerciale",
                  azienda: "STRAGROUP ",
                  data: "1 Dicembre 2022",
                  storia_testo: "Ringrazio Jobify recruiting per avermi selezionata e portato a buon fine la mia candidatura. In qualità di candidata sono stata scrupolosamente seguita in tutte le fasi del processo di selezione dall' Head Hunter Martina Di Palma che ha ascoltato le mie aspettative lavorative, professionali e personali, incrociandole con le esigenze dell'azienda. Doppio ringraziamento per lo svolgimento della selezione interamente da remoto, che ha azzerato completamente i costi economici e temporali. Che dire finalmente un'agenzia di recruiting al passo con i tempi e soprattutto attenta al capitale umano!",
                },
                {
                  nickname: "Gavina Fadda",
                  ruolo: "Car Rental Agent (BS)",
                  azienda: "AUTOSYSTEM",
                  data: "1 Dicembre 2022",
                  storia_testo: "Rispetto alle agenzie di recruiting sono spesso stata molto diffidente, mi sono ricreduta durante la mia esperienza con Jobify Recruiting. Questo soprattutto grazie alla professionalità di Martina che ha gestito il processo di selezione con un approccio umano, oltre che professionale e con molta chiarezza in tutti gli step. Quindi chiarezza e professionalità contraddistinguono la Jobify Recruiting. ",
                },
                {
                  nickname: "Giulia Miccoli",
                  ruolo: "Inside Sales",
                  azienda: "DOTSTAY ",
                  data: "1 Dicembre 2022",
                  storia_testo: "L'esperienza vissuta con Jobify è stata molto positiva, l'azienda è stata un tramite perfetto tra me e il mio attuale datore di lavoro. Hanno seguito con molta attenzione tutta la fase di assunzione: dalla prima telefonata orientativa fino alla firma del contratto, tutto sempre con estrema umanità e professionalità",
                },
                {
                  nickname: "Marco G.",
                  ruolo: "Addetto alle vendite (Malta)",
                  azienda: "CASCONE HOME ",
                  data: "1 Dicembre 2022",
                  storia_testo: "Mi sono sentito valorizzato, dal primo contatto tramite linkedin, in cui ho ricevuto un messaggio targhetizzato, chiaro e per nulla impersonale. Le mie precedenti esperienze con le apl non sono state positive, in quanto non avevo questo costante rapporto di condivisione e aggiornamento con la parte hr. Ho riscontrato in jobify l’attenzione nel mettere il candidato al centro del processo di r&s , dove essere considerato una persona con le proprie ambizioni e talento da far incrociare perfettamente con le richieste dell’azienda. La chiarezza a partire dall’annuncio, sino all’orientamento verso il colloquio finale con l’azienda mi ha fatto sentire sicuro e seguito.",
                },
              ],
    };
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

    if (this.$route.query.jobalert == "open"){
      this.jobAlert();
    }

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

    for (let i = 0; i < this.storie.length; i++) {
      var nickname = document.getElementById("username"+i);
      nickname.textContent = this.storie[i].nickname;

      var ruolo = document.getElementById("jobtitle"+i);
      ruolo.textContent = this.storie[i].ruolo;
    }
  },
  methods: {
    btnScrollSx() {
      let content = document.querySelector(".filtersContent");
      const itemWidth = content.querySelector(".position").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
    },

    btnScrollDx() {
      let content = document.querySelector(".filtersContent");
      const itemWidth = content.querySelector(".position").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
    },

    btnScrollSx2() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
    },

    btnScrollDx2() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
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

    closePopup2() {
      let content = document.querySelector(".bg2");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    story(x){
      let content = document.querySelector(".story");
      content.style.display = "inline";

      var nickname = document.getElementById("nickname");
      nickname.textContent = this.storie[x-1].nickname;

      var azienda = document.getElementById("azienda");
      azienda.textContent = this.storie[x-1].azienda;

      var data = document.getElementById("data");
      data.textContent = this.storie[x-1].data;

      var ruolo = document.getElementById("ruolo");
      ruolo.textContent = this.storie[x-1].ruolo;

      var storia_testo = document.getElementById("storia_testo");
      storia_testo.textContent = this.storie[x-1].storia_testo;
    },

    close_story(x){
      let close_story = document.getElementById(x);
      close_story.style.display = "none";
    }
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
      <div class="glow8"></div>
      <div class="first">
        <div style="background: #0c2550; padding-top: 10rem;">
          <div class="title">
          <div class="titleDiv">
            <h2>Cerchi Lavoro?</h2>
            <p>Offerte di lavoro</p>
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
        </div>
        
        <div class="container2">
          <div class="navMain"><ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#Farm">Farm</a></li>
            <li><a data-toggle="tab" href="#Finance">Finance</a></li>
            <li><a data-toggle="tab" href="#IT">IT Tech</a></li>
            <li><a data-toggle="tab" href="#Hr">HR</a></li>
            <li><a data-toggle="tab" href="#Digital">Digital</a></li>
            <li @click="jobAlert()" class="btn">
              <a href="#">Crea una Job Alert</a>
            </li>
          </ul></div>

          <div class="tab-content">
            <div id="Farm" class="tab-pane in active">
              <div class="filters">
                <div class="filtersTop">
                  <h2>Posizioni aperte <span>Farm</span></h2>
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        fill="#0c2550"
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
                        fill="#0c2550"
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
            </div>
            <div id="Finance" class="tab-pane fade">
              <div class="filters" style="margin-top: 7rem">
                <div class="filtersTop">
                  <h2>Posizioni aperte <span>Finance</span></h2>
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        fill="#0c2550"
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
                        fill="#0c2550"
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
            </div>
            <div id="IT" class="tab-pane fade">
              <div class="filters" style="margin-top: 7rem">
                <div class="filtersTop">
                  <h2>Posizioni aperte <span>IT Tech</span></h2>
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        fill="#0c2550"
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
                        fill="#0c2550"
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
            </div>
            <div id="Hr" class="tab-pane fade">
              <div class="filters" style="margin-top: 7rem">
                <div class="filtersTop">
                  <h2>Posizioni aperte <span>HR</span></h2>
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        fill="#0c2550"
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
                        fill="#0c2550"
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
            </div>
            <div id="Digital" class="tab-pane fade">
              <div class="filters" style="margin-top: 7rem">
                <div class="filtersTop">
                  <h2>Posizioni aperte <span>Digital</span></h2>
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        <li>
                          <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
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
                        fill="#0c2550"
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
                        fill="#0c2550"
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                            Inserire la descrizione della posizione del
                            progetto, la descrizione della posizione del
                            progetto, della posizione del progetto,
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
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Nome della job alert (es. sviluppatore)"
                  />
                </div>
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

                <div class="checkbox">
                  <input type="checkbox" />
                  <p>
                    Accetto i
                    <router-link to="">&nbsp;termini e condizioni.</router-link>
                  </p>
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

        <div class="secondPart2">
          <div class="title">
            <h2>
              Jobify Recruiting: mettiamo il <span>talento</span> al servizio delle aziende
              
            </h2>
            <p>
              Tante sono le aziende che cercano candidati nel settore <span>Farm, Finance, IT Tech e HR</span> e tanti i candidati che
              cercano l’azienda ideale in cui collocarsi per una carriera professionale ricca di soddisfazioni. In tutto questo
              Jobify Recruiting ha il compito di creare il match perfetto tra talento e azienda.
            </p>
          </div>
          <div class="steps">
            <div class="step transition">
              <div class="title">Intervista azienda</div>
              <div class="text">
                In Jobify Recruiting approfondiamo il clima aziendale, l’organigramma e il funzionigramma dell’azienda per
trovare la migliore risorsa da inserire con un rapporto consulenziale e diretto.
              </div>
            </div>
            <div class="step transition">
              <div class="title">Intervista talento</div>
              <div class="text">
                Jobify Recruiting va oltre il job title, le hard skill e le soft skill e lavora in modo da approfondire il mondo di
valori, le attese e le aspettative del candidato, che diventa non più risorsa umana ma potenziale da
sviluppare in azienda.
              </div>
            </div>
          </div>
        </div>

        <h2 class="ctaTitle">Jobify Recruiting: ricerca e selezione talenti</h2>

        <div class="ctaCV" style="background: #0c2550">
          <div class="blur"></div>
          <div class="cols">
            <div class="col col-padding" id="positions">
              <h3 style="color: #fff">
                Jobify Recruiting ti permette di inserire in azienda <span>la risorsa giusta</span> nei settori Farm, Finance, IT, Tech e HR.
              </h3>
              <router-link to="/workers">
              <div class="button">
                Trova lavoro
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
            </router-link>
            </div>
            <div
              class="col"
              style="
                background-image: url(/src/assets/storie.jpg);
                background-size: cover;
                border-radius: 30px;
                background-repeat: no-repeat;
                background-position: center;
              "
            ></div>
          </div>
        </div>

        <div class="featureds">
          <div class="titles">
            <h2>Storie dei talenti</h2>
            <div class="buttons">
              <div class="btnScrollL" @click="btnScrollSx2()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="#0c2550"
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
                  fill="#0c2550"
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
              <div class="featured" @click="story(1)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    L’approccio umano è stato una componente fondamentale di tutto il processo...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username0"></div>
                  <div class="jobtitle" id="jobtitle0"></div>
                </div>
              </div>
              <div class="featured" @click="story(2)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    Umanamente, mi ha colpito l’approccio di JOBIFY in quanto sono stato messo subito...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username1"></div>
                  <div class="jobtitle" id="jobtitle1"></div>
                </div>
              </div>
              <div class="featured" @click="story(3)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    Ringrazio Jobify recruiting per avermi selezionata e portato a buon fine la mia...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username2"></div>
                  <div class="jobtitle" id="jobtitle2"></div>
                </div>
              </div>
              <div class="featured" @click="story(4)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    Rispetto alle agenzie di recruiting sono spesso stata molto diffidente...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username3"></div>
                  <div class="jobtitle" id="jobtitle3"></div>
                </div>
              </div>
              <div class="featured" @click="story(5)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    L'esperienza vissuta con Jobify è stata molto positiva...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username4"></div>
                  <div class="jobtitle" id="jobtitle4"></div>
                </div>
              </div>
              <div class="featured" @click="story(6)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 1, 2022</p>
                  <h2>
                    Mi sono sentito valorizzato, dal primo contatto tramite linkedin, in cui ho ricevuto un messaggio...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username5"></div>
                  <div class="jobtitle" id="jobtitle5"></div>
                </div>
              </div>
          </div>
          <div class="story" id="1">
              <div class="content">
                <div class="close_story" @click="close_story(1)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22"
                                height="22"
                                fill="#0c2550" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
                <div class="nickname" id="nickname"></div>
                <div style="display: flex; align-items: center; width: 100%; text-align: center;">
                  <div class="ruolo" id="ruolo"></div> 
                  <div class="azienda" id="azienda"></div> 
                  <div class="data" id="data"></div>
                </div>
                <div class="storia_testo" id="storia_testo"></div>
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

  .story{
    display: none;
    position: fixed;
    top: 0;
    background: #0000008a;
    width: 100%;
    height: 100%;
    z-index: 15;
  }

  .story .content{
    display: inline;
    position: fixed;
    top: 15%;
    background: white;
    width: 100%;
    height: 100%;
    padding: 2rem;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    padding-top: 7rem;
  }

  .story .content .close_story{
    cursor: pointer;
    width: fit-content;
    margin-left: auto;
  }

  .story .content .nickname{
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
  }

  .story .content .azienda{
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    margin-top: 0.5rem;
  }
  .story .content .data{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #273350;
    margin-right: auto;
    width: fit-content;
    margin-left: 1rem;
  }

  .story .content .ruolo{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #273350;
    margin-right: 1rem;
    margin-left: auto;
    width: fit-content;
  }

  .story .content .storia_testo{
    padding-left: 20rem;
    padding-right: 20rem;
    margin-top: 3rem;
    overflow-y: scroll;
    height: 65%;
  }
  
  .second {
    padding-bottom: 5rem;
  }
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

  .glow8 {
    position: absolute;
    width: 20vw;
    transform: scale(3.5);
    top: 0%;
    left: 42%;
    z-index: 1;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.4);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.4);
    box-shadow: 0px 0px 105px 45px rgba(0, 174, 255, 0.4);
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
    background: #fff;
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
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .main2 {
    background: #0c2550;
    padding-top: 1rem;
  }

  /*filtri*/
  .contaniner2 {
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 100% !important;
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
    margin-bottom: 1rem;
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
    color: #0c2550;
    margin-bottom: 0;
  }

  .filters h2 span {
    color: #0062f5;
    font-weight: 700;
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
    background: #fff;
    margin-bottom: 2rem;
    width: fit-content;
    float: left;
    margin-right: 1.5rem;
    border-radius: 30px;
    padding: 1rem;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
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

  .position:hover :deep(.photoBlur) {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 12px;
    background: #7474bf;
    background: -webkit-linear-gradient(to top, #348ac7, #7474bf);
    background: linear-gradient(to top, #348ac700, #141c24c7);
  }

  .position:hover :deep(.photoBlur) p {
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
    color: rgb(25 35 45);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1px !important;
  }

  .position .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .position h2 {
    font-size: 24px;
    line-height: 26px;
    margin-left: 0 !important;
    font-weight: 700;
    color: rgb(25 35 45);
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
    background: #fff;
    border-radius: 12px;
    border: 2px solid #80808038;
  }

  .position .content .infos p {
    margin-right: 1.5rem;
    font-weight: 300;
    color: rgb(25 35 45);
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
    background: #ed3fb4;
    color: #fff;
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

  .ctaTitle {
    color: #0c2550;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 4rem;
  }

  .ctaCV {
    width: 90%;
    background-color: white;
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
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
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .ctaCV .col {
    width: 50%;
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
    background: #ed3fb4;
    color: #fff;
  }

  .filtersPositions {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #0c2550;
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

  .navMain{
    background: #0c2550;
  }

  .nav {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    border-bottom: none;
    padding-bottom: 17rem;
  }

  .nav .btn {
    margin-top: 0rem !important;
    line-height: 24px !important;
  }

  .nav .btn a {
    font-size: 15px;
    color: #fff !important;
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

  .nav li .active {
    background: #3e455052;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    border-radius: 12px;
    transition: all 0.3s ease-out;
    cursor: pointer;
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
    background: #0c25509f;
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
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/storie.jpg);
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

  .jobAlert .checkbox {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .jobAlert .checkbox input {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .jobAlert .checkbox p {
    margin-bottom: 0 !important;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
  }

  .secondPart2 {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart2 .title {
    display: inline !important;
  }

  .secondPart2 h2 {
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 h2 span {
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
  }

  .secondPart2 .title p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300 !important;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 .title p span {
    color: #c554a0;
    font-weight: 600;
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
    position: relative;
  }

  .step {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    float: left;
    width: 50%;
    transition: all 0.3s ease-out;
    text-align: left;
    background: #0c2550;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
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
    margin-left: 0 !important;
    width: 100% !important;
    color: #cccccc;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300 !important;
    margin-top: 0.5rem;
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
    color: #0c2550;
    font-weight: 700;
    margin-top: 3rem;
    letter-spacing: -2.5px;
    width: fit-content;
  }

  .featureds .btnScrollR {
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

  .featureds .btnScrollL {
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

  .featureds .featured {
    border-radius: 30px;
    background-color: #6398ef29;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/story.jpg);
    background-size: cover;
    background-position: center;
    width: 75vw;
    float: left;
    height: 35vw;
    position: relative;
    cursor: pointer;
  }

  .featured .info_story{
    position: absolute;
    bottom: 0;
    padding: 2rem;
    width: 100%;
    background: #ada996;
    background: -webkit-linear-gradient( to top, #000000d1, #00000075, #0000000f, transparent );
    background: linear-gradient( to top, #000000d1, #00000075, #0000000f, transparent );
    border-radius: 30px;
    width: 100%;
  }

  .featured .info_story .username{
    color: white;
    font-size: 16px;
    font-weight: 600;
  }

  .featured .info_story .jobtitle{
    color: white;
    font-size: 14px;
    font-weight: 300;
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
</style>
