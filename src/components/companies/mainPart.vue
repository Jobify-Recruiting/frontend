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


        if (flavoursContainer.scrollLeft > 13100) {
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

    const flavoursContainer2 = document.getElementById("clientsCoBodyId");
    const flavoursScrollWidth2 = flavoursContainer2.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer2.scrollLeft !== flavoursScrollWidth2) {
          flavoursContainer2.scrollTo(flavoursContainer2.scrollLeft + 1, 0);
        }

        if (flavoursContainer2.scrollLeft > 7400) {
          flavoursContainer2.scrollTo(0, 0);
        }
      }, 15);
    });

    const slider2 = document.querySelector(".clientsCoBody");

    if(slider2 != 0){
      const slider = document.querySelector(".clientsCoBody");
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
      let content = document.querySelector("#workflowFlex2");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    workflowScrollDx() {
      let content = document.querySelector("#workflowFlex2");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    workflowScrollSx2() {
      let content = document.querySelector(".workflowFlex");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    workflowScrollDx2() {
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
        <div class="firstPart">

        <div class="firstPartBody">
          <div class="subtitle">Sei un'azienda</div>
              <h2>Jobify Recruiting trova il candidato giusto per l’azienda giusta</h2>
              <p>
                Jobify Recruiting è molto diversa dalle agenzie di ricerca personale. Siamo una società di Head Hunting che
                utilizza un metodo <span>scientifico</span> con un approccio <span>consulenziale</span>. Il processo di selezione è umano e studiato
                nei minimi dettagli per prendere decisioni in modo consapevole e trasparente al fine di lavorare in perfetta
                sinergia con l’azienda.
              </p>

              <p>
                Usiamo strumenti e tecnologia avanzate e ci affidiamo all’intelligenza artificiale per velocizzare il processo
    di ricerca, in modo da soddisfare le esigenze delle diverse aziende che si rivolgono a noi e avere più tempo
    da dedicare alla ricerca e selezione vera e propria dei talenti.
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
              </div>
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

        <div class="numbersDiv">
          <h2>
            Human + Digital: usare i dati per prendere <span>decisioni migliori</span>
          </h2>
          <div class="numbers">
            <div class="number transition">
              <h3>+50%</h3>
              <div class="subtitle">Umanizzazione</div>
              <p>match tra azienda e candidato</p>
            </div>
            <div class="number transition">
              <h3>+30%</h3>
              <div class="subtitle">Rapidità</div>
              <p>tempo risparmiato per la ricerca e selezione e tempo medio di ricerca candidati di 26 gg</p>
            </div>
            <div class="number transition">
              <h3>+45</h3>
              <div class="subtitle">Aumenta clima aziendale</div>
              <p>grazie al match di valori tra azienda e candidato</p>
            </div>
          </div>
          <div class="numbers">
            <div class="number transition">
              <h3>+20%</h3>
              <div class="subtitle">Talent retention</div>
              <p>il candidato trova un’azienda che soddisfa le sue aspettative
professionali e si riflette nella cultura aziendale</p>
            </div>
            <div class="number transition">
              <h3>-40%</h3>
              <div class="subtitle">Costi azienda</div>
              <p>di turnover grazie alla capacità di Jobify Recruiting di creare il match perfetto tra talento e azienda</p>
            </div>
          </div>
        </div>

        <div class="thirdPart" id="whyJobify">
          <div class="thirdPartDiv">
            <div class="first">
              <div class="col1">
                <h2><span>Il problema</span> delle aziende…</h2>
                <p>
                  Oggi le aziende hanno difficoltà a trovare i giusti talenti dato che spesso si basano unicamente sulla
                  valutazione del CV e delle Hard &amp; Soft Skills. Per questo Jobify Recruiting propone un approccio che punta a
                  mettere al centro valori e aspettative del candidato dal punto di vista professionale per creare i match con
                  la cultura e i valori aziendali alla base di una proficua relazione candidato-azienda. Oggi in
                  Italia esistono ben 1074 società di Ricerca &amp; Selezione del personale, ma poche si caratterizzano per
                  l’approccio consulenziale e la volontà di umanizzare il processo di selezione. Questo è quello che fa Jobify
                  Recruiting con un metodo: Umano, Scientifico, Trasparente, Consulenziale.
                </p>

                <h2>
                  <span>I punti di forza</span> del nostro metodo
                </h2>
                <p>
                  Jobify Recruiting è molto diversa dalle agenzie di ricerca personale. Siamo una società di Head Hunting che
                  utilizza un metodo scientifico con un approccio consulenziale. Il processo di selezione è umano e studiato
                  nei minimi dettagli per prendere decisioni in modo consapevole poiché tutti i nostri processi di ricerca e 
                  selezione sono misurati è supportato da dati scientifici “ e trasparenti in quanto condividiamo costantemente 
                  questi dati con le aziende e questo ci consente di lavorare in perfetta sinergia con le aziende e trasparente 
                  al fine di lavorare in perfetta sinergia con l’azienda. Per questo il nostro metodo di ricerca talenti si basa su: Interviste all’azienda per
                  comprendere e approfondire la cultura aziendale, il clima aziendale, l&#39;organigramma ed il funzionigramma,
                  oltre al riporto diretto della risorsa da inserire, Interviste al candidato per comprendere ed approfondire i
                  valori e le aspettative dal punto di vista professionale.
                </p>

                <h2>
                  <span>I vantaggi</span> per le aziende
                </h2>
                <p>
                  La situazione di emergenza sanitaria ha fatto riscoprire alle persone il valore della vita e le ha portate a
                  rivedere le priorità, dando maggior importanza al nostro tempo e al nostro benessere personale.
                  Il settore della Ricerca &amp; Selezione e dell’ HR Tech in Italia è fermo da 10 anni: le aziende faticano ancora a
                  trovare i talenti giusti, ed i talenti a trovare le aziende giuste.
                  Jobify Recruiting ha come obiettivo primario quello di umanizzare il processo di Ricerca &amp; Selezione,
                  mettendo a servizio dei nostri Head Hunter strumenti di Intelligenza Artificiale ed HR Tech.
                </p>
                
              </div>
              <div class="col2">
                <div class="thirdPartImage"></div>
              </div>
            </div>
            <!--<div class="second">
              <div class="feature">
                <h2>Umanizzazione</h2>
                <p>
                  Le aziende di successo hanno al loro interno dipendenti felici e per questo lo scopo di Jobify
                  Recruiting è creare il match ideale tra talento e azienda. Si tratta di andare oltre le competenze
                  professionali e tenere conto di valori e ideali della risorsa da inserire in azienda.
                </p>
              </div>
              <div class="feature">
                <h2>Rapidità</h2>
                <p>
                  Le moderne tecnologie velocizzano il processo di selezione e riducono errori di valutazione,
                  tempo e spese extra per la ricerca della migliore risorsa.
                </p>
              </div>
              <div class="feature">
                <h2>Scientificità</h2>
                <p>
                  Lavoriamo con la migliore tecnologia per prendere decisioni consapevoli e basate sui
                dati in modo da garantire un approccio scientifico alla ricerca risorse umane.
                </p>
              </div>
              <div class="feature">
                <h2>Efficacia</h2>
                <p>
                  Il giusto candidato permette di ottenere prestazioni migliori, il turnover si riduce e aumenta il
                  tasso di retention. Questo si traduce in una riduzione dei costi per l’azienda.
                </p>
              </div>
            </div>-->
          </div>
        </div>

        <div class="workflow" id="workflow">
      <div class="workflowTitle">
        <h2 class="workflowTitle2" style="margin-bottom: 2rem !important">
          I vantaggi
        </h2>
        <p>
          Il nostro processo di selezione si caratterizza per il fatto di garantire:
              <br />
            </p>
      </div>
      <div class="buttons">
        <div class="btnScrollL" @click="workflowScrollSx2()">
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
        <div class="btnScrollR" @click="workflowScrollDx2()">
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
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#0062f5"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                </div>
              </div>
              <h2>Umanizzazione</h2>
              <p>
                Le aziende di successo hanno al loro interno dipendenti felici e per questo lo scopo di Jobify Recruiting è creare il match ideale tra talento e azienda. Si tratta di andare oltre le competenze professionali e tenere conto di valori e ideali della risorsa da inserire in azienda.
              </p>
            </div>
          </div>
          <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
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
              </div>
              <h2>Rapidità</h2>
              <p>
                Le moderne tecnologie velocizzano il processo di selezione e riducono errori di valutazione, tempo e spese extra per la ricerca della migliore risorsa.
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
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
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
              </div>
              <h2>Scientificità</h2>
              <p>
                Lavoriamo con la migliore tecnologia per prendere decisioni consapevoli e basate sui
                dati in modo da garantire un approccio scientifico alla ricerca risorse umane.
              </p>
            </div>
          </div>
          <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
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
              </div>
              <h2>Efficacia</h2>
              <p>
                Il giusto candidato permette di ottenere prestazioni migliori, il turnover si riduce e aumenta il tasso di retention. Questo si traduce in una riduzione dei costi per l’azienda.
              </p>
            </div>
          </div>
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
            id="workflowFlex2"
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

        <div class="feedbackDiv" id="feedback">
          <div class="content">
            <h2><span>I clienti</span> dicono di noi</h2>
            <div class="buttons">
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
            <div class="feedbacks" id="feedbacksContainer">
          <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Innanzitutto ci ha stupite l’intervista di approfondimento con attenzione non solo alle esigenze tecniche
della figura richiesta, ma anche e soprattutto umane con domande mirate e approfondite per riuscire a
trovare una figura compatibile a 360°. Un approccio che non ci aspettavamo. Apprezzata non solo la
disponibilità e l’aggiornamento costante, ma anche la professionalità che portava alla condivisione di
candidati mirati, con un’attenzione alla qualità piuttosto che alla quantità, che riduce la perdita di tempo e
porta all’interpretazione dei nostri desideri con consapevolezza del e sul mercato.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pamela.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pamela Solitario</p>
                    <p class="worktitle">Sviluppatore PHP presso CONTAQ</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Consiglio Jobify per il loro approccio di profonda umanità e professionalità verso le esigenze dei loro clienti,
per la capacità di ascoltare e orientare le esigenze aziendali verso il candidato migliore in maniera chiara e
puntuale. Ho apprezzato gli aggiornamenti costanti sulla posizione affidatagli e la capacità di saper cogliere
sfumature, offrire riflessioni nel momento dell’intervista conoscitiva con noi aziende, in cui si crea subito un
clima di recuproca fidicia. Quest’ultima non è stata un mero raccoglitore di dati, ma un capire davvero le
mie esigenze, offrendo al tempo stesso una consulenza di valore, da cui traspare la grande competenza di Jobify.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/roberto.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Roberto Felli</p>
                    <p class="worktitle">Consulente Commerciale P.IVA presso STUDIO FELLI</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Il feedback sulla collaborazione con Jobify Recruiting non può essere che positivo. Siamo stati veloci a
trovare, valutare e assumere la risorsa come anche in altri processi di R&amp;S portati avanti insieme. Non c’è
nulla da appuntare e ringrazio l’Head Hunter di riferimento per il supporto e la presenza: Martina ha capito
al volo di cosa avevamo bisogno e i suoi commenti sui candidati in short list sono stati preziosi. Ogni volta
che cerco un nuovo talento so di poter contare su Head Hunter e HR Manager di Jobify Recruiting,
caratterizzati da grande competenza e professionalità e che non lasciano mai solo il cliente nel complesso
compito di ricerca e selezione del personale.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/Ivan_Rallo.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Ivan Rallo</p>
                    <p class="worktitle">Car Rental Agent (BS) presso AUTOSYSTEM</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>Sono mesi che ormai collaboro strettamente con JOBIFY e devo dire che sono pienamente soddisfatto del
servizio di recruiting per la mia azienda. Ci tengo a sottolineare la massima disponibilità fornita
nell’ascoltare al meglio le mie esigenze per la ricerca di candidati adatti. In particolar modo ho apprezzato
molto poter avere un contatto diretto e un supporto costante nella delicata fase di assunzione del nuovo
personale. Questo per me è motivo di grande fiducia nei confronti dell’azienda, che si è sempre dimostrata
eccellente sia a livello umano che professionale, affiancandomi pienamente nel processo di selezione del
nuovo personale.</h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/adamo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Alessandro Adamo</p>
                    <p class="worktitle">Inside Sales (generale) presso DOTSTAY</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Consiglierei jobify recruiting per la perseveranza, bravura, con cui sono stato seguito nell’aggiornamento costante della ricerca affidatagli. Soprattuto con la mia referente elisa con cui si e’ istaurato da subito un rapporto di affinita’, empatia e accoglienza nel capire le mie esigenze di trovare una risorsa valida da far crescere nella mia realta’ professionale. Se dovessi effettuare nuove ricerche di personale mi rivolgerei di nuovo a jobify che ha saputo consigliarmi e orientarmi nella scelta del miglior candidato, e tutto questo svolto dall’italia , visto la mia attivita’ si trova a malta. Sono molto contento di come abbiano lavorato con attenzione e costanza per la mia azienda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/adamo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Simone Cascone</p>
                    <p class="worktitle">Adetto alle vendite (Malta) presso Cascone Home</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Dal nostro primo incontro ho riconosciuto in Davide volontà, dedizione e una importante preparazione
culturale. Doti preziose nel contesto lavorativo di riferimento. Il mondo delle risorse umane ha bisogno di
esperti HR Manager come lui, caratterizzati da sensibilità e doti di ascolto per comprendere e soddisfare le
esigenze dei clienti. Davide ama il suo lavoro e pone al centro dei suoi interessi il miglioramento e
l’apprendimento costante per diventare sempre più un professionista capace di fare la differenza nel
complesso e competitivo settore delle risorse umane. Se state cercando talenti per la vostra azienda, è lui
la persona a cui affidarsi.
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
                  Consiglierei assolutamente il servizio di livello della Jobify Recruiting. Mi ha colpito la velocità di esecuzione dell’incarico affidatogli , la continua costanza di feedback ricevuti sull’andamento della selezione. E’ stata trovata in poco tempo la risorsa di cui aveva bisogno il mio studio , corrispondente esattamente a quanto da me richiesto. Ho apprezzato la trasparenza e la preparazione della selezionatrice che mi ha seguito Elisa, con la quale si è creato subito una connessione umana e professionale, comprendendo la mia richiesta sia per le competenze tecniche richieste che trasversali, così da venirmi presentati tutti candidati in linea.  
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/Riccardo_Camillo.png);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Riccardo di Camillo</p>
                    <p class="worktitle">Titolare presso Celda 2000 Servizi Integrati srls</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Con Davide portiamo avanti da tempo diverse iniziative in ambito HR. La sua voglia di ridisegnare il futuro
del settore con approcci innovativi lo rende un esempio da seguire. Cultura, competenza, serietà e tanta
voglia di fare sono solo alcune delle qualità che contraddistinguono Davide. Davide conosce perfettamente
il mondo HR in ogni sua sfaccettatura e sa comprendere il cliente per offrirgli sempre la risposta più
adeguata alle sue esigenze. Con Davide le aziende incontrano i talenti e i talenti incontrano le aziende in
modo solo apparentemente semplice per un risultato sempre di eccellenza, che porta alla crescita
professionale e personale del candidato e al successo del business.
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
                  Team giovane, ma con passione ed esperienza. Abbiamo trovato in loro un valido supporto.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_clients%2Fmaurizio%20de%20gregorio.jpeg?alt=media&token=685ca922-f7e2-4c38-9796-09e3a2d90478);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Maurizio de Gregorio</p>
                    <p class="worktitle">General Manager presso Mamacrowd </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Posso descrivere Davide semplicemente in due parole: “competenza” e “voglia di fare”. La sua spiccata
professionalità gli consente di muoversi in qualsiasi contesto. Lavorare nel settore delle risorse umane oggi
non è semplice e richiede competenza, voglia di fare e sensibilità. Si tratta di caratteristiche che
sicuramente non mancano a Davide, che ha le carte in regola per diventare un punto di riferimento nel
panorama nazionale delle HR. Ascoltatore attento e instancabile lavoratore, Davide è il professionista di cui
ogni azienda ha bisogno per trovare, attirare e trattenere i talenti al suo interno e per questo lo consiglio a
chi cerca candidati.
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
                  Lavoro con Davide in ambito associativo AIDP ed è un vero piacere. Davide è un vero appassionato di tutte
le diverse sfaccettature del mondo HR e la sua principale dote direi è la curiosità. Ascolta e approfondisce, è
generoso e mette sempre a disposizione i suoi punti di forza, ovvero la capacità di problem solving e la
forte competenza nei processi di selezione e sviluppo delle risorse umane. Lavorare con Davide è ogni
giorno un’occasione di crescita personale e professionale oltre che un vero piacere per la sua capacità di
offrire spunti di dialogo e riflessione sempre nuovi. Ama il suo lavoro e sa trasmettere questa passione a chi
lo circonda.
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
                  Ho avuto modo di conoscere Davide all’interno della community AIDP e ne ho subito tratto un’ottima
impressione. Davide è una persona dinamica, aperta a capire il mondo HR che gli sta attorno e capace di
portare contributi professionali e di valore. Tutto questo supportato da una gran voglia e volontà di fare
cose innovative e con grande competenza. Mettere al centro il cliente e le sue esigenze e trovare talenti per
le aziende è un compito che prende a cuore e che affronta con grande competenza e professionalità. Per
questo è un professionista che consiglio a chi cerca qualcuno a cui affidare l’attività di risorse umane per la
propria azienda.
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
                  Un profilo a 360° già raggiunto in giovane età. Davide è un professionista che ha maturato competenze
importanti in diversi ambiti culturali, produttivi e geografici. A tutto questo si aggiunge energia e
attenzione, elementi dimostrati dalla sua attività di commentatore in diversi ambiti multimediali. Rendere
le risorse umane innovative e colmare il gap del settore è il compito di Davide e per questo alla tradizionale
attività di ricerca e selezione del personale integra l’uso delle più moderne tecnologie come l’AI e l’analisi
dei dati per un lavoro di HR umano, ma dall’approccio efficace e consulenziale. Lavorare con Davide è
sempre un piacere e un’occasione di crescita.
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
                  Ho conosciuto Davide Maggio e ho avuto l’opportunità di apprezzare le sue competenze specifiche
nell’area HR nella sua estesa accezione, collaborando su specifici incarichi professionali e su altri fronti, non
ultimo quello della pubblicistica e dell’editoria divulgativa e di approfondimento. Ho apprezzato le sue
qualità umane e professionali, in termini di efficacia ed efficienza nella risposta alle necessità informative e
alle problematiche del mio Studio. Da subito Davide ha compreso le esigenze dello studio e ha saputo
mettersi al lavoro per trovare il candidato adatto a ricoprire la posizione vacante, concentrandosi non solo
sul CV, ma anche sulle caratteristiche umane e personali.
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
                  Ogni volta che entro in contatto con Davide c’è sempre qualcosa di nuovo da scoprire e un’opportunità
da cogliere. Poche chiacchere, dritto al punto, focus e sempre con il sorriso. Difficile non entrare in sintonia.
Per un settore come il nostro, quello delle Risorse Umane, l’affidabilità, la preparazione, le relazioni e la
concretezza sono i quattro elementi cardine che creano la differenza tra dilettanti e professionisti. Davide è
il top in tutti e quattro. Per questo consiglio Davide a tutti coloro che pensano che esperienza e
professionalità del candidato vadano oltre le hard e soft skills riportate sul CV e a chi vuole approfondire
l’evoluzione e il cambiamento nel mondo HR.
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
                  Davide Maggio è una persona da cui si può apprendere qualcosa conversando di fronte ad un tavolo di
lavoro o sorseggiando un caffè in amicizia al bar. È un professionista di ampie vedute e con un acuto spirito
di osservazione, che mi ha trasmesso molto sia professionalmente sia umanamente. Per questo ritengo un
vero piacere e un’occasione di crescita personale dialogare e lavorare con lui, che sa ogni volta sorprendere
e stupire portando nuovi spunti di riflessione e punti di vista nel settore delle HR. Attento e dinamico,
Davide è il professionista a cui affidarsi se si vuole valorizzare la propria competenza e proporsi alle aziende
in modo nuovo.
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
                  Davide è professionale, attento, intuitivo e travolgente, innamorato del suo lavoro al punto da
trasmettere passione anche a chi come me opera in un settore differente. Lo definirei un “Freccia Rossa”
delle risorse umane per la sua capacità di anticipare il cambiamento in un settore da sempre caratterizzato
da elevata competitività e innovazione. Basti pensare al modo nuovo e all’avanguardia di ottenere e usare i
dati anche affidandosi all’Intelligenza Artificiale per una migliore attività di ricerca e selezione dei talenti. La
sua azienda lavora in modo efficace, umano e consulenziale e sa sempre dare risposta alle necessità del
cliente.
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
                  Davide Maggio è un giovane talento nel mondo HR e unisce a una solida preparazione a 360° in questo
settore una cultura generale ampia e un modo di lavorare improntato al raggiungimento di obiettivi
specifici. Ha una ottima conoscenza delle best practices americane e del mondo aziendale italiano. Una rara
profondità psicologica e dei valori etici “antichi” ne fanno un professionista estremamente affidabile e
performante. Ho avuto la fortuna di collaborare in vari contesti e si è sempre un leader giovane, con
esperienza di oltre 7 anni nel ruolo di HR Manager e una persona per bene. Se avete un’azienda e volete
fare la differenza nelle risorse umane, Davide Maggio fa al caso vostro.
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
                  Problem solver e consulenza risorse umane sono i principi che caratterizzano Davide, professionista
attento alla cura dei dettagli. Proprio la minuziosa attenzione ad ogni sfaccettatura del mondo HR lo
rendono la persona a cui rivolgersi se ci sono posizioni aperte in azienda e si cerca il miglior talento da
inserire. Persone felici e aziende felici: è questo il risultato del lavoro di Jobify Recruiting, agenzia di head
hunter giovane e dinamica con a capo un vero professionista del mondo HR come Davide. Non posso che
consigliare lui e il suo team a chi cerca candidati e crede nel valore umano del processo di ricerca e
selezione.
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
                  Ho avuto il piacere di collaborare con Davide, il quale si dimostra in ogni occasione di confronto e
scambio di idee come un professionista centrato sul pezzo in ciò che fa, ma che fa della sua umiltà
personale e fame di sapere il perno della sua essenza di HR Manager. Umile e competente, dinamico e
appassionato, Davide è la persona giusta per l’azienda che crede nella valorizzazione dei talenti oltre che
nella crescita del business. Il motto di Davide è che siamo prima persone e poi professionisti e questa idea
si riflette in tutto il lavoro di Jobify Recruiting. Creare il match perfetto tra persona e azienda, tra talento e
posizione lavorativa è un compito che Davide ha a cuore.
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
                  Dimenticate i pregiudizi sul ruolo dell’HR: Davide Maggio è una vera e necessaria rivoluzione nel settore
delle risorse umane. Lavorare con Davide comporta un arricchimento umano e professionale. Un talento
giovane, determinato e pieno di risorse creative e innovative, ma soprattutto dedito all’ascolto attivo del
cliente, il che rappresenta una vera rivoluzione nella RU. Proprio la volontà di rivoluzionare il mondo delle
risorse umane ha portato Davide Maggio a creare Jobify Recruiting, una agenzia di head hunting per diversa
dalla tradizionale società di ricerca e selezione del personale e che mette i dati al centro del lavoro di ogni
giorno.
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
                  Attento, acuto e dal profondo spessore umano e professionale, Davide Maggio ha più volte dato modo
di creare valore e opportunità al network di professionisti che lo circondano. Davide sa valorizzare le
persone e permette loro di dare il meglio in ogni contesto. La stessa attenzione alla persona prima che al
professionista si trova in Jobify Recruiting, agenzia che si caratterizza per la volontà di creare il match
perfetto tra persone e aziende andando oltre la semplice valutazione del CV. In questo modo si creano
dipendenti felici che contribuiscono alla crescita del business per il fatto di identificarsi in valori e ideali
dell’azienda che li ha assunti.
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
                  Davide è un HR Manager che stimo profondamente. Nonostante la giovane età, grazie alle sue
competenze e alla sua determinazione ha già raggiunto importanti traguardi professionali. Dialogando con
lui traspare fin da subito la forte passione e dedizione verso il proprio lavoro. Ha inoltre spiccate doti di
ascolto e osservazione. Davide è un esempio per tutti i giovani che vogliono intraprendere un percorso
professionale in un settore ad alta competitività come quello delle risorse umane. Lavorare con Davide ti
arricchisce come professionista e come individuo. Per questo consiglio di rivolgersi a lui se si cercano
candidati da inserire in azienda.
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
                  Ho trovato in Davide un giovane professionista entusiasta del proprio lavoro e che si impegna sempre a
svolgere al meglio. Ha una buona esperienza acquisita, ma al contempo sa ascoltare ed è pronto a
migliorarsi. Da un anno è in partnership con Kekyjob e si è rivelato un elemento utile ed efficace per la
crescita dell’azienda. Proprio il suo entusiasmo e la sua creatività mi hanno colpito e sorpreso dato che il
settore delle HR si caratterizza per la resistenza al cambiamento piuttosto che per il fatto di abbracciare
novità e tecnologie. Non è così per Davide Maggio, che crede anche nell’uso della intelligenza artificiale da
mettere al centro del processo di ricerca e selezione dei talenti.
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
                  Davide è un esperto HR Manager estremamente professionale, flessibile e sensibile alle esigenze del
cliente, ma anche capace di offrire sempre un servizio di qualità. Molto apprezzato è stato il servizio di
reporting costante che ci ha permesso di capire a che punto era la ricerca dei candidati in tempo reale per
correggere e aggiustare il tiro della nostra strategia di ricerca e selezione del personale. Attenzione al
cliente che abbiamo notato in ogni fase del lavoro, apprezzando un approccio consulenziale che raramente
si trova nel settore HR. Per questo non possiamo che consigliare Davide e il suo team a tutte le aziende che
cercano personale.
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
        </div>
          </div>
        </div>

        <div class="clientsCo">
          <div class="clientsCoBorder">
            <div class="clientsCoLink">
              <h2><span>I clienti</span> di Jobify Recruiting</h2>
            </div>
            <div class="clientsCoDiv">
              <div class="clientsCoBody" id="clientsCoBodyId">
                <div class="logoClient">
                  <img
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-4.png"
                  />
                </div>

                <div class="logoClient">
                  <img
                    src="data:image/svg+xml,%3csvg width='330px' height='44px' viewBox='0 0 330 44' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3e %3ctitle%3elogo/mamacrowd_logo_2020%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='logo/mamacrowd_logo_2020' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cpath d='M166.56625,36.98 C163.632045,36.98 160.97066,36.3404424 158.589504,35.0603989 C156.203924,33.7779773 154.324101,31.9949099 152.957504,29.7172479 C151.589878,27.4378723 150.90625,24.8621823 150.90625,22 C150.90625,19.1378177 151.589878,16.5621277 152.957504,14.2827521 C154.324101,12.0050901 156.203924,10.2220227 158.589504,8.93960107 C160.970852,7.65945451 163.645559,7.02 166.60625,7.02 C169.099515,7.02 171.360682,7.45986212 173.385841,8.34156419 C175.416819,9.22579954 177.126792,10.4996255 178.510361,12.1599078 L178.814628,12.5250284 L173.926118,17.0374992 L173.588253,16.6472897 C171.789012,14.5692923 169.579799,13.54 166.92625,13.54 C165.276048,13.54 163.813432,13.8993497 162.530161,14.6164717 C161.250921,15.3313411 160.257591,16.3246708 159.542722,17.6039107 C158.8256,18.8871817 158.46625,20.349798 158.46625,22 C158.46625,23.650202 158.8256,25.1128183 159.542722,26.3960893 C160.257591,27.6753292 161.250921,28.6686589 162.530161,29.3835283 C163.813432,30.1006503 165.276048,30.46 166.92625,30.46 C169.578437,30.46 171.786893,29.418512 173.586299,27.3149815 L173.923837,26.920395 L178.8118,31.4323617 L178.512946,31.796964 C177.128781,33.4856458 175.410801,34.7741305 173.364706,35.6589285 C171.326642,36.5402534 169.059198,36.98 166.56625,36.98 Z M194.164274,28.7 L188.96625,28.7 L188.96625,36.5 L181.48625,36.5 L181.48625,7.5 L194.10625,7.5 C196.653926,7.5 198.877063,7.92673209 200.7724,8.78447577 C202.68401,9.6495839 204.165419,10.8852617 205.20564,12.4877645 C206.246974,14.0919814 206.76625,15.9866385 206.76625,18.16 C206.76625,20.3349847 206.239401,22.2246152 205.182841,23.8164988 C204.230907,25.2507467 202.919606,26.3803129 201.257273,27.2025453 L207.74483,36.5 L199.564274,36.5 L194.164274,28.7 Z M188.96625,13.78 L188.96625,22.54 L193.74625,22.54 C195.584471,22.54 196.951892,22.1457883 197.864182,21.3775444 C198.759309,20.6237534 199.20625,19.5652087 199.20625,18.16 C199.20625,16.7285934 198.759515,15.664659 197.867155,14.9249397 C196.954549,14.1684371 195.585771,13.78 193.74625,13.78 L188.96625,13.78 Z M224.44625,36.98 C221.458907,36.98 218.757584,36.3338821 216.349651,35.0404778 C213.937571,33.7448464 212.044272,31.9551953 210.677504,29.6772479 C209.310005,27.398084 208.62625,24.8357286 208.62625,22 C208.62625,19.1642714 209.310005,16.601916 210.677504,14.3227521 C212.044272,12.0448047 213.937571,10.2551536 216.349651,8.95952222 C218.757584,7.66611786 221.458907,7.02 224.44625,7.02 C227.433902,7.02 230.12894,7.66625926 232.523903,8.96008959 C234.921679,10.2554399 236.814097,12.0442585 238.193849,14.3208491 C239.575395,16.6004009 240.26625,19.1634713 240.26625,22 C240.26625,24.8365287 239.575395,27.3995991 238.193849,29.6791509 C236.814097,31.9557415 234.921679,33.7445601 232.523903,35.0399104 C230.12894,36.3337407 227.433902,36.98 224.44625,36.98 Z M224.44625,30.46 C226.014394,30.46 227.422274,30.1017448 228.678648,29.3856114 C229.932541,28.6708925 230.914032,27.6768989 231.629778,26.3960893 C232.3469,25.1128183 232.70625,23.650202 232.70625,22 C232.70625,20.349798 232.3469,18.8871817 231.629778,17.6039107 C230.914032,16.3231011 229.932541,15.3291075 228.678648,14.6143886 C227.422274,13.8982552 226.014394,13.54 224.44625,13.54 C222.878106,13.54 221.470226,13.8982552 220.213852,14.6143886 C218.959959,15.3291075 217.978468,16.3231011 217.262722,17.6039107 C216.5456,18.8871817 216.18625,20.349798 216.18625,22 C216.18625,23.650202 216.5456,25.1128183 217.262722,26.3960893 C217.978468,27.6768989 218.959959,28.6708925 220.213852,29.3856114 C221.470226,30.1017448 222.878106,30.46 224.44625,30.46 Z M262.258665,18.6348026 L256.265909,36.5 L248.624238,36.5 L239.095666,7.5 L246.870831,7.5 L252.836546,26.076783 L259.066564,7.5 L265.790331,7.5 L271.830666,26.2250392 L277.984257,7.5 L285.235897,7.5 L275.748754,36.5 L268.06297,36.5 L262.258665,18.6348026 Z M287.74625,7.5 L300.96625,7.5 C304.080668,7.5 306.843361,8.09641273 309.248833,9.29227589 C311.664986,10.4934492 313.549264,12.1906848 314.892357,14.3784028 C316.235698,16.5665258 316.90625,19.1104756 316.90625,22 C316.90625,24.8895244 316.235698,27.4334742 314.892357,29.6215972 C313.549264,31.8093152 311.664986,33.5065508 309.248833,34.7077241 C306.843361,35.9035873 304.080668,36.5 300.96625,36.5 L287.74625,36.5 L287.74625,7.5 Z M295.22625,13.82 L295.22625,30.18 L300.64625,30.18 C303.325738,30.18 305.436268,29.4428894 307.004571,27.9749583 C308.565477,26.5139504 309.34625,24.5339097 309.34625,22 C309.34625,19.4660903 308.565477,17.4860496 307.004571,16.0250417 C305.436268,14.5571106 303.325738,13.82 300.64625,13.82 L295.22625,13.82 Z' id='crowd' stroke='%234FBDBF' fill='%234EBDBF'%3e%3c/path%3e %3cpath d='M38.893058,21.0099512 L31.4329711,33.54 L27.9476609,33.54 L20.52875,21.3440343 L20.52875,36.5 L13.44875,36.5 L13.44875,7.5 L19.591288,7.5 L29.7854486,24.4254193 L39.8239731,7.5 L45.9273235,7.5 L46.0101806,36.5 L38.9299391,36.5 L38.893058,21.0099512 Z M71.2543888,30.5 L58.9231112,30.5 L56.4431112,36.5 L48.6984759,36.5 L61.6241902,7.5 L68.6728867,7.5 L81.6400295,36.5 L73.7343888,36.5 L71.2543888,30.5 Z M68.8004709,24.58 L65.10875,15.6666557 L61.4170291,24.58 L68.8004709,24.58 Z M109.733058,21.0099512 L102.272971,33.54 L98.7876609,33.54 L91.36875,21.3440343 L91.36875,36.5 L84.28875,36.5 L84.28875,7.5 L90.431288,7.5 L100.625449,24.4254193 L110.663973,7.5 L116.767323,7.5 L116.850181,36.5 L109.769939,36.5 L109.733058,21.0099512 Z M142.094389,30.5 L129.763111,30.5 L127.283111,36.5 L119.538476,36.5 L132.46419,7.5 L139.512887,7.5 L152.48003,36.5 L144.574389,36.5 L142.094389,30.5 Z M139.640471,24.58 L135.94875,15.6666557 L132.257029,24.58 L139.640471,24.58 Z' id='mama' stroke='%234A4A4A' fill='%234A4A4A'%3e%3c/path%3e %3c/g%3e %3c/svg%3e"
                  />
                </div>

                <div class="logoClient">
                  <img
                    src="https://www.serverplan.com/assets/images/serverplan.png"
                  />
                </div>

                <div class="logoClient" >
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/10/logo.png"
                  />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-2.png"
                  />
                </div>

                <div class="logoClient">
                  <img
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/06/logo_bit4id.png"
                  />
                </div>

                <div class="logoClient">
                  <img
                    src="https://static.wixstatic.com/media/aa2e06_cd3d54eb615144ca903cc5a5d5d754e7~mv2.png/v1/fill/w_214,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contaq%20Logo%20blu.png"
                  />
                </div>

                <div class="logoClient">
                  <img src="https://www.simol.com/static/img/logo.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/equity+factory.jpg" />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
                  src="https://thingsss.s3.eu-central-1.amazonaws.com/cikis+studio.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/nte+process.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/adipso.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/Khale+automation.png" />
                </div>
                
                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/stragroup.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/ghezzi.png" />
                </div>
                
                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/system+management.jpeg" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/unipol+rental.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/alifmed.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/betflag.png" />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                  src="https://thingsss.s3.eu-central-1.amazonaws.com/BN+Partners.png" />
                </div>

                <div class="logoClient">
                  <img src="https://thingsss.s3.eu-central-1.amazonaws.com/celda.jpeg" />
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
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-5.png"
                  />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-3-1.png"
                  />
                </div>


                <div class="logoClient">
                  <img
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-autoscuole-furia-3-1.jpg"
                  />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo20white.png"
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
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="https://davidemaggiohr.it/wp-content/uploads/2021/04/AG_LOGO_CLAIM_BIANCO-1.png"
                  />
                </div>

                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
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
                    src="https://www.studiorossihr.com/wp-content/uploads/2020/10/logo-orizzontale500.png"
                  />
                </div>
                
                <div class="logoClient">
                  <img src="https://www.autosystemspa.it/img/logo-autosystem.png" />
                </div>
                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
                        src="https://thingsss.s3.eu-central-1.amazonaws.com/logo-cascone-home.png" />
                </div>
                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
                    src="https://www.dotstay.com/workspace/static/images/logos/logodotstaybianco.svg"
                  />
                </div>
                <div class="logoClient">
                  <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                    src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTAuMiA1My4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTAuMiA1My4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5Bc3NldCA1PC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LjYsNDAuOGMtMywwLjEtNi0wLjgtOC41LTIuNWMtMi4xLTEuNS0zLjQtMy45LTMuNi02LjVoNy42YzAuMSwxLDAuNiwyLDEuNSwyLjZjMC45LDAuNiwyLDAuOSwzLjEsMC45CgljMi4zLDAsMy41LTAuNywzLjUtMi4xYzAtMC42LTAuMy0xLjItMC44LTEuNmMtMC44LTAuNS0xLjctMC44LTIuNi0xbC01LTEuM2MtMi0wLjQtMy44LTEuNS01LjEtMy4xYy0xLjEtMS41LTEuNy0zLjMtMS43LTUuMgoJYzAtMi4zLDEtNC40LDIuOS01LjdjMi4zLTEuNiw1LTIuMyw3LjgtMi4yYzIuNy0wLjEsNS4zLDAuNyw3LjUsMi4zYzIsMS41LDMuMiwzLjcsMy4zLDYuMWgtNy40Yy0wLjMtMS44LTEuNS0yLjctMy41LTIuNwoJYy0wLjgsMC0xLjYsMC4xLTIuMywwLjVjLTAuNSwwLjMtMC45LDAuOS0wLjksMS41YzAsMS4yLDEsMiwzLDIuNWw0LjcsMS4zYzIuMSwwLjQsNC4xLDEuNCw1LjYsM2MxLjIsMS41LDEuOCwzLjMsMS44LDUuMwoJYzAsMi40LTEuMSw0LjYtMy4xLDUuOUMzMS4yLDQwLjEsMjguNCw0MC45LDI1LjYsNDAuOCIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDguNyw1MS4zaC03LjNWMTMuNmg3LjN2M2MwLjgtMS4xLDEuOS0xLjksMy4xLTIuNWMxLjQtMC43LDMtMS4xLDQuNi0xLjFjMy40LDAsNi43LDEuNSw4LjksNC4xCgljMi40LDIuNywzLjcsNi4yLDMuNyw5LjhjMC4xLDMuNi0xLjIsNy4xLTMuNiw5LjhjLTIuMiwyLjYtNS41LDQuMS04LjksNC4xYy0xLjYsMC0zLjItMC4zLTQuNi0xLjFjLTEuMi0wLjYtMi4zLTEuNC0zLjEtMi41CglMNDguNyw1MS4zTDQ4LjcsNTEuM3ogTTUwLDMyLjFjMi43LDIuNyw3LDIuNyw5LjcsMGMwLDAsMCwwLDAsMGMxLjMtMS40LDEuOS0zLjMsMS44LTUuMmMwLjEtMS45LTAuNi0zLjgtMS44LTUuMgoJYy0yLjctMi43LTcuMS0yLjctOS43LDBjMCwwLDAsMCwwLDBjLTEuMywxLjQtMS45LDMuMy0xLjgsNS4yQzQ4LjEsMjguOCw0OC43LDMwLjcsNTAsMzIuMSIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODcuNSw0MC4yVjEzLjZoNy4zdjNjMS42LTIuNCw0LjItMy42LDcuNi0zLjZjMi45LTAuMiw1LjYsMSw3LjYsMy4xYzEuOSwyLjQsMi45LDUuNCwyLjcsOC40djE1LjZoLTcuM1YyNS44CgljMC4xLTEuNi0wLjMtMy4yLTEuMi00LjVjLTAuOC0xLjEtMi4xLTEuNy0zLjUtMS42Yy0xLjctMC4xLTMuMiwwLjctNC4zLDEuOWMtMS4yLDEuNi0xLjgsMy42LTEuNiw1LjZ2MTNIODcuNXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOC42LDQwLjhjLTIuOCwwLjItNS42LTEtNy40LTMuMmMtMS45LTIuNS0yLjgtNS41LTIuNi04LjZWMTMuNmg3LjN2MTQuMmMwLDQuMiwxLjUsNi4zLDQuNSw2LjMKCWMxLjYsMC4xLDMuMS0wLjcsNC0xLjljMS4xLTEuNywxLjYtMy43LDEuNS01LjZ2LTEzaDcuM3YyNi42aC03LjN2LTNDMTM0LjMsMzkuNiwxMzEuNSw0MSwxMjguNiw0MC44Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTcsNTEuM2gtNy4zVjEzLjZoNy4zdjNjMC44LTEuMSwxLjktMS45LDMuMS0yLjVjMS40LTAuNywzLTEuMSw0LjYtMS4xYzMuNCwwLDYuNywxLjUsOC45LDQuMQoJYzIuNCwyLjcsMy43LDYuMiwzLjYsOS44YzAuMSwzLjYtMS4yLDcuMS0zLjYsOS44Yy0yLjIsMi42LTUuNSw0LjEtOC45LDQuMWMtMS42LDAtMy4yLTAuMy00LjYtMS4xYy0xLjItMC42LTIuMy0xLjQtMy4xLTIuNVY1MS4zegoJIE0xNTguMiwzMi4xYzIuNywyLjcsNywyLjcsOS43LDBjMCwwLDAsMCwwLDBjMS4zLTEuNCwxLjktMy4zLDEuOC01LjJjMC4xLTEuOS0wLjYtMy44LTEuOC01LjJjLTIuNy0yLjctNy4xLTIuNy05LjcsMGMwLDAsMCwwLDAsMAoJYy0xLjMsMS40LTEuOSwzLjMtMS44LDUuMkMxNTYuMywyOC44LDE1NywzMC43LDE1OC4yLDMyLjEiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3My44LDQwLjIgODEuMSw0MC4yIDgxLjEsMjkuMyA3My44LDI5LjMgNzMuOCw0MC4yICIvPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjgxLjEsMTMuNiA3My44LDEzLjYgNzMuOCwyNC41IDgxLjEsMjQuNSA4MS4xLDEzLjYgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMCw1My4yIDAsMCAxMS44LDAgMTEuOCw1LjcgNy4zLDUuNyA3LjMsNDcuNSAxMS44LDQ3LjUgMTEuOCw1My4yIDAsNTMuMiAiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxOTAuMiwwIDE5MC4yLDUzLjIgMTc4LjQsNTMuMiAxNzguNCw0Ny41IDE4Mi45LDQ3LjUgMTgyLjksNS43IDE3OC40LDUuNyAxNzguNCwwIDE5MC4yLDAgIi8+Cjwvc3ZnPgo="
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="cols">
          <div class="col col_1">
            <p>Sei un'azienda?</p>
            <h2>Fissa <span>un appuntamento</span></h2>
            <div class="subtitle">
              Se anche tu stai cercando il candidato perfetto per la posizione aperta nella tua azienda fissa un
appuntamento con Jobify Recruiting.
            </div>
            <!--<div class="images">
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
            </div>-->
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
    padding-bottom: 6rem;
    padding-top: 9rem;
    margin-right: 0;
    background:#0c2550;
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
    padding-right: 0;
    padding-top: 5rem;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/sei_azienda.png);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: 0%;
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
    font-size: 56px;
    line-height: 65px;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .cols .col h2 span{
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
    font-size: 56px;
    font-weight: 700;
    line-height: 56px;
    padding-right: 0.05rem;
    letter-spacing: -0.06em !important;
  }

  .cols .col h3 {
    color: #0c2751;
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
    padding-top: 0rem;
    padding-bottom: 10rem;
  }

  .workflow .workflowTitle h2 {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
    font-size: 56px;
    line-height: 65px;
    font-weight: 800 !important;
    letter-spacing: -0.04em !important;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
  }

  .workflow .workflowTitle p{
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
    font-weight: 700 !important;
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

  .svg_logo_link{
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
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
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
    background-color: #fff;
  }

  .clientsCoBorder {
    align-items: center;
    border: 2px solid #80808038;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .clientsCoLink{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .clientsCoLink h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -0.06em !important;
    width: fit-content;
  }

  .clientsCoLink h2 span{
    width: fit-content;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
  }

  .clientsCoLink p {
    width: fit-content;
    margin-left: 6rem;
    color: #0c2550;
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

  .clientsCoLink .buttons{
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .clientsCoLink .btnScrollR {
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

  .clientsCoLink .btnScrollL {
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

  .clientsCoDiv {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .clientsCoBody {
    padding-top: 2rem;
    padding-right: 6rem;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
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
    color: #0c2550;
    font-size: 56px;
    line-height: 56px;
    font-weight: 500;
    letter-spacing: -2.5px;
    width: 50%;
    margin-left: 2rem;
  }

  .numbersDiv h2 span{
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
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
    background: #0c2550;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    width: 27%;
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
    font-size: 16px;
    line-height: 20px;
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
    background: #0c2550;
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
  }

  .feedbackDiv h2 {
    color: #0c2550;
    font-size: 64px;
    font-weight: 800 !important;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .feedbackDiv h2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
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
    margin-top: 1rem;
  }

  .feedbacks.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .feedbackDiv .feedbacks .feedback {
    background: #f4f5f6;
    border-radius: 30px;
    padding: 1.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    height: 44vh;
  }

  .feedbackDiv .feedbacks .feedback .quote {
    background: -webkit-linear-gradient(-70deg, #67a3f0 0%, #4e54ed 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
    font-size: 80px;
    line-height: 0;
    letter-spacing: 1.5px;
    line-height: 38px;
    margin-bottom: 0;
    padding-top: 1rem;
  }

  .feedbackDiv .feedbacks .feedback h3 {
    color: #0c2550;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
    width: 60vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #0c2550;
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

  .thirdPart {
    margin-top: 10rem;
    padding-bottom: 2rem;
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .thirdPartDiv {
    background: transparent;
    border-radius: 30px;
    padding-bottom: 5rem;
  }

  .thirdPartDiv .first {
    background: transparent;
    display: flex;
    position: relative;
  }

  .thirdPartDiv .first span {
    color: #c554a0;
    font-weight: 600;
  }

  .thirdPartDiv .first h2 {
    color: #0c2550;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-bottom: 2rem;
  }

  .thirdPartDiv .first h2 span{
    color: #fff;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 2rem;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
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
    margin-bottom: 5rem;
  }

  .thirdPart .thirdPartImage{
    width: 36vw;
    height: 44vw;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/ilproblemadelleaziende.png);
    background-position: center;
    background-size: cover;
    
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
    background: #0c2550;
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
