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
  methods: {
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

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="#fff"
                    class="bi bi-file-earmark-richtext bell"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                    />
                    <path
                      d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
                    />
                  </svg>
                </span>

                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="150"
                    height="150"
                    fill="#0062f5"
                    class="bi bi-file-earmark-richtext bell2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"
                    />
                    <path
                      d="M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"
                    />
                  </svg>
                </span>
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
        <div class="firstPart">
          <div class="firstPartBody">
            <div class="subtitle">Trova lavoro</div>
          <h2>Jobify Recruiting è la risposta giusta!</h2>
          <p>Su Jobify Recruiting trovi ogni giorno nuove offerte in ambito Farm, Finance, IT, Tech, HR.</p>
          <div class="mainButton">
            <router-link to='/openposition/?jobalert=open'
              ><button class="btn">
                Crea una job alert
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
          <div class="image"></div>
          </div>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="position-absolute width-full z-1"
      style="bottom: 0"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
          </svg>
        </div>

        <div class="thirdPart">
          <div class="thirdPartDiv">
            <div class="first">
              <div class="col1">
                <h2><span>Trova con noi</span> il tuo prossimo lavoro.</h2>
                <p>
                  Se sei un candidato in cerca di lavoro e cerchi nuove opportunità professionali Jobify Recruiting ti mette in
                  contatto con l’azienda giusta per te. Il nostro obiettivo è creare il match perfetto tra risorse umane e
                  aziende che assumono, andando oltre una visione tradizionale basata su job title e competenze tecniche,
                  hard e soft skill.
                </p>
                <p>
                  Quello che ti aiutiamo a fare in modo rapido e efficace è collocarti in una realtà imprenditoriale con cui
                  condividi valori e ideali, perché il dipendente migliore è quello felice di contribuire al successo e alla crescita
                  aziendale.
                </p>
              </div>
              <div class="col2">
                <div class="glow4"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="250"
                  fill="#fff"
                  class="bi bi-people transition"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                  />
                </svg>
              </div>
            </div>
            <h3><span>Gli strumenti</span><br> che mettiamo a tua disposizione</h3>
            <div class="second">
              
              <div class="feature">
                <div
                  class="img_feature"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/curriculum.jpg);
                  "
                ></div>
                <h2>Il Curriculum Vitae</h2>
                <p>
                  Creare un CV efficace non è semplice e per questo nella ricerca del tuo prossimo lavoro puoi affidarti a
                  Jobify Recruiting. Troverai un team che sa tradurre le tue competenze e i tuoi talenti in un documento
                  professionale con cui presentarti alle aziende.
                </p>
                <a href="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/documenti_template%2FTemplate%20CV%20.docx?alt=media&token=f02bcd04-aeb7-4fbc-b61b-f7de0cbfcfcc" download><div class="btn3">Scarica</div></a>
              </div>
              <div class="feature">
                <div
                  class="img_feature"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/colloquio.jpg);
                  "
                ></div>
                <h2>Il colloquio</h2>
                <p>
                  Il segreto per arrivare preparati al colloquio è conoscere l’azienda che offre la posizione per cui ci si
                  candida. Tanti sono gli accorgimenti da tenere a mente e i dettagli da non trascurare e per questo in Jobify
                  Recruiting trovi un consulente che ti accompagna in questa fase delicata della ricerca lavoro.
                </p>
                <div class="btn3">Scopri di più</div>
              </div>
              <div class="feature">
                <div
                  class="img_feature"
                  style="
                    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/lettera.jpg);
                  "
                ></div>
                <h2>La lettera di presentazione</h2>
                <p>
                  Le aziende non amano lettere di presentazione standardizzate e semplici copia e incolla inviati in massa.
                  Una lettera di presentazione efficace è centrata sulla posizione e sull’azienda per cui ci si candida e
                  prepararla è sicuramente più semplice se si può contare sul supporto di Jobify Recruiting.
                </p>
                <a href="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/documenti_template%2FLettera%20motivazionale%20-%20Template.docx?alt=media&token=cd248b19-cbaf-449b-8105-ae9cccf09dde" download><div class="btn3">Scarica</div></a>
              </div>
            </div>
          </div>
        </div>

        <div class="workflow" id="workflow">
          <div class="workflowTitle">
            <h2 style="margin-bottom: 0rem !important">
              Schema del processo
            </h2>
          </div>
          <div class="buttons">
            <div class="btnScrollL" @click="workflowScrollSx()">
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
            <div class="btnScrollR" @click="workflowScrollDx()">
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
                    Trovare lavoro rapidamente significa avere le idee chiare non solo sull’azienda per cui ci si candida e sulla
                    posizione, ma anche sulle proprie esigenze, valori e ideali e aspettative. Per questo in Jobify Recruiting
                    intervistiamo i candidati in modo da proporre solo annunci in linea con quello che si vuole dal nuovo lavoro.
                  </p>
                </div>
              </div>
              <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
              <div class="column workflowColumn" style="width: 35vw !important">
                
                <div class="background transition">
                  <div class="number">2</div>
                  <h2>Job description</h2>
                  <p>
                    Chi cerca lavoro lo fa a partire da una determinata Job Description: sapere chi si è e cosa si sa fare, quali
                    sono i propri talenti e potenzialità significa presentarsi alle aziende con una marcia in più rispetto agli altri
                    candidati. Per questo in Jobify Recruiting conoscendo le soft e hard skills troviamo l’annuncio per mettere
                    la persona giusta nell’azienda giusta.
                  </p>
                </div>
              </div>
            </div>
            <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw !important">
                <div class="background transition">
                  <div class="number">3</div>
                  <h2>Head Hunting e incontro con l’azienda</h2>
                  <p>
                    Dopo l’intervista e l’analisi della job description abbiamo in mano gli strumenti per cominciare la ricerca del
                    lavoro e le basi per creare il match vincente tra azienda e candidato. Fare Head Hunting significa trovare la
                    soluzione migliore per entrambe le parti e portare a un rapporto di lavoro proficuo e che dura nel tempo.
                  </p>
                </div>
              </div>
              <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
              <div class="column workflowColumn" style="width: 35vw !important">
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
            <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw !important">
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
              <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
              <div class="column workflowColumn" style="width: 35vw !important">
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
            <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
            <div class="columns">
              <div class="column workflowColumn" style="width: 35vw">
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
              <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
              <div class="column workflowColumn" style="width: 35vw">
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
                      Cosa devo fare per trovare lavoro con Jobify Recruiting
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
                    La prima cosa da fare è <code>contattarci</code> per ottenere supporto nella redazione del CV e della lettera di
                    presentazione. Successivamente verrai intervistato in modo da farci capire chi sei e cosa desideri e sulla
                    base dell’analisi del tuo potenziale ti proporremo offerte di lavoro in linea con le tue aspettative.
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
                      In quanto tempo posso trovare lavoro con Jobify Recruiting
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
                    In media la ricerca di lavoro dura dai XX ai XX mesi, ma si tratta di un periodo di <code>tempo variabile</code> che
                    dipende dalle competenze del candidato e dalla disponibilità di offerte da parte delle aziende.
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
                      In quali settori posso trovare lavoro con Jobify Recruiting?
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
                    La nostra agenzia di head hunting è attiva nei settori <code>Farm, Finance, IT, Tech, HR.</code> In particolare ci
                    occupiamo di trovare nuove opportunità di carriera a chi occupa una posizione di middle e top
                    management.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div class="fifthDiv">
          <div class="adviser transition">
            <div class="col">
              <h3>
                <span>Scopri le posizioni aperte</span><br> su Jobify Recruiting
              </h3>
              <router-link to="/openposition">
                      <div class="button">
                        Guarda le offerte di lavoro
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
                    ></router-link>
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

*{
  font-family: "Merienda";
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

  .btn2 {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 26px;
    border-radius: 20px;
    background: transparent;
    color: #ffffff;
    border: 1px solid #fff;
    line-height: 18px;
    margin-left: 1rem;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
  }

  .btn2:hover {
    background: #ffffff;
    color: #0062f5;
    font-weight: 600;
  }

  .btn2 span {
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

  .firstPart {
    text-align: left;
    width: 100%;
    padding-bottom: 15rem;
    padding-top: 15rem;
    margin-right: 0;
    background: #0c2550;
  }

  .firstPartBody{
    padding-left: 10rem;
    padding-right: 10rem;
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
    float: left;
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  .firstPart .image {
    width: 51%;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2F012%20Trova%20lavoro.png?alt=media&token=81ced77b-78ef-451f-b65b-3746472ef446);
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    position: absolute;
    top: -20%;
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
    color: #0c2550;
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
    color: #0c2550;
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #0c2550;
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
    color: #0c2550;
    letter-spacing: -0.04em;
    font-size: 60px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart .text {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    width: 80%;
    margin-left: 3rem;
  }

  .secondPart .text span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
  }

  .secondPart .text2 {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 26px;
    line-height: 30px;
    font-weight: 400;
    margin-top: 3rem;
    width: 80%;
    margin-left: 5rem;
    margin-bottom: 3rem;
  }

  .secondPart .cols {
    margin-top: 5rem !important;
  }

  .secondPart .cols .col2 {
    width: 30%;
  }

  .fourthPart {
    padding-top: 5rem;
    margin-top: 3rem;
  }

  .fourthPart .title h2 {
    color: #0c2550;
    letter-spacing: -0.04em;
    font-size: 50px;
    line-height: 54px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .fourthPart .subtitle p {
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 0.5rem;
  }

  .jobs {
    padding-top: 5rem;
    margin-top: 3rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    width: fit-content;
    margin-left: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .jobs .job {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    text-align: center;
    background: #0c2550;
    border-radius: 30px;
    z-index: 14;
    margin-right: 3rem;
    margin-left: 3rem;
    margin-bottom: 3rem;
    float: left;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  .jobs .job:hover {
    transform: scale(1.2);
  }

  .jobs .job h2 {
    color: #fff;
    font-size: 40px;
    line-height: 44px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .jobs .job .subtitle {
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  .jobs .job p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
  }

  .thirdPart {
    margin-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .thirdPartDiv {
    background: transparent;
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
    width: 100%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-bottom: 5rem;
    color: #0c2550;
  }

  .thirdPartDiv .first h2 span{
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 5rem;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .thirdPartDiv h3 {
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-top: 5rem;
    color: #0c2550;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .thirdPartDiv h3 span{
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 5rem;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .thirdPartDiv .first p {
    width: 100%;
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
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
    margin-top: 2rem;
    display: flex;
  }

  .second .feature {
    width: 35%;
    margin-right: 3rem;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 30px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .second .feature .img_feature {
    background-size: cover;
    width: 100%;
    height: 10vw;
    border-radius: 25px;
  }

  .second .feature h2 {
    color: #0c2550;
    font-size: 30px;
    line-height: 34px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-top: 2rem;
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
    margin-left: auto;
  }

  .second .feature .btn3:hover {
    border-bottom: 1px solid #0062f5;
  }

  .secondPart .title {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .secondPart .title h2 {
    color: #0c2550;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  .secondPart .title p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .workflow {
    padding-top: 10rem;
    padding-bottom: 0;
  }

  .workflow .workflowTitle h2 {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
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
    padding: 1rem;
    width: 70%;
    display: flex;
    align-items: center;
  }

  .workflow .columns .column .background {
    background: #0c2550;
    padding: 1.5rem;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 35vw;
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
    color: #0c2550;
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

  .svg_logo_link {
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
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
    background: #fff;
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
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    margin-bottom: 1rem;
  }

  .step .title {
    color: #0c2550;
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

  .fifthDiv {
    background: #fff;
    padding: 5rem;
    padding-bottom: 5rem;
  }

  .fifthDiv .adviser {
    background: #0c2550;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 72%;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(-70deg,#2867b2 0%,#01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.06em;
    font-weight: 700 !important;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 30px;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/match_perfetto.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
    width: 42%;
  }

  .adviser .button {
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

  .adviser .button span {
    margin-left: 0.4rem;
  }

  .adviser .button:hover {
    background: #ed3fb4;
    color: #fff;
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
    margin-left: 0;
    margin-right: 0;
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

  .closeMenu:hover {
    border-color: white;
    transform: rotate(90deg);
  }


  .seventh {
    width: 100%;
    margin-top: 6rem;
    padding-bottom: 5rem;
  }

  .seventh .asks h2 {
    color: #0c2550;
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

  .seventh .card-header {
    background: transparent;
    border: 0;
  }

  .seventh .accordion .card {
    background: transparent;
    border-bottom: 2px solid #1119251e !important;
    padding-bottom: 1rem;
    padding-top: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    border-radius: 0;
    border: 0;
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
    color: #0c2550;
    font-weight: 700;
    font-size: 24px;
    align-items: center;
    display: flex;
    align-items: center;
  }

  .btn-link:hover {
    color: #0c2550;
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
    color: #03172b;
    word-wrap: break-word;
  }

  .seventh .btn {
    background: transparent !important;
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
