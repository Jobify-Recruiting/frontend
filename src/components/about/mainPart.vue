<script>
import welcome from "@/components/aboutWelcome.vue";

export default {
  name: "mainPart",
  components: { welcome },
  data() {
    return {
      storie: [
                {
                  nickname: "Davide Maggio",
                  ruolo: "Sviluppatore PHP",
                  azienda: "CONTAQ",
                  data: "1 Dicembre 2022",
                  storia_testo: "L’approccio umano è stato una componente fondamentale di tutto il processo. E’ stato molto importante per me il supporto, non solo dal punto di vista tecnico, durante tutta la durata della selezione. Ogni mia domanda o richiesta è stata accolta mettendo sempre in primo piano le mie necessità senza avere alcuna forzatura o costrizione di alcun tipo. Del servizio offerto mi hanno colpito la serietà, l’empatia e la cura del cliente. Molte aziende spesso trattano le risorse che cercano come numeri mentre qui ho notato un approccio completamente diverso e di totale cura della persona. Non sono mai stato lasciato solo ed ho sempre ricevuto l’appoggio di Chiara (la ragazza che ha curato il tutto) e questo è stato di grande aiuto per me. Per ultimo ma ovviamente non meno importante, la possibilità di ricevere un’offerta molto più alta della mia attuale RAL grazie all’intermediazione di Chiara, nel mio caso ho ricevuto un’offerta superiore di 10k alla mia attuale retribuzione",
                },
                {
                  nickname: "Marco Fattizzo",
                  ruolo: "Consulente Commerciale in P.Iva",
                  azienda: "STUDIO FELLI",
                  data: "1 Dicembre 2022",
                  storia_testo: "Umanamente, mi ha colpito l’approccio di JOBIFY in quanto sono stato messo subito a mio agio nel potermi presentare in un clima sereno, dove sentirmi veramente ascoltato. Mi sono sentito seguito e sostenuto dall’inizio dell’iter di selezione, dal primo contatto telefonico, sino alle fasi successive, dove ho avuto un contatto e aggiornamento costante avendo un professionista a cui fare sempre riferimento .  Ho apprezzato la tempestività delle comunicazioni e il clima distensivo creato in mio favore per arrivare sereno e preparato sull’azienda al colloquio finale.",
                },
                {
                  nickname: "Martina Di Palma",
                  ruolo: "Segretaria Commerciale",
                  azienda: "STRAGROUP ",
                  data: "1 Dicembre 2022",
                  storia_testo: "Ringrazio Jobify recruiting per avermi selezionata e portato a buon fine la mia candidatura. In qualità di candidata sono stata scrupolosamente seguita in tutte le fasi del processo di selezione dall' Head Hunter Martina Di Palma che ha ascoltato le mie aspettative lavorative, professionali e personali, incrociandole con le esigenze dell'azienda. Doppio ringraziamento per lo svolgimento della selezione interamente da remoto, che ha azzerato completamente i costi economici e temporali. Che dire finalmente un'agenzia di recruiting al passo con i tempi e soprattutto attenta al capitale umano!",
                },
                {
                  nickname: "Cecilia Dondi",
                  ruolo: "Car Rental Agent (BS)",
                  azienda: "AUTOSYSTEM",
                  data: "1 Dicembre 2022",
                  storia_testo: "Rispetto alle agenzie di recruiting sono spesso stata molto diffidente, mi sono ricreduta durante la mia esperienza con Jobify Recruiting. Questo soprattutto grazie alla professionalità di Martina che ha gestito il processo di selezione con un approccio umano, oltre che professionale e con molta chiarezza in tutti gli step. Quindi chiarezza e professionalità contraddistinguono la Jobify Recruiting. ",
                },
                {
                  nickname: "Chiara Lucia Graziano",
                  ruolo: "Inside Sales",
                  azienda: "DOTSTAY ",
                  data: "1 Dicembre 2022",
                  storia_testo: "L'esperienza vissuta con Jobify è stata molto positiva, l'azienda è stata un tramite perfetto tra me e il mio attuale datore di lavoro. Hanno seguito con molta attenzione tutta la fase di assunzione: dalla prima telefonata orientativa fino alla firma del contratto, tutto sempre con estrema umanità e professionalità",
                },
                {
                  nickname: "Elisa Severa",
                  ruolo: "Addetto alle vendite (Malta)",
                  azienda: "CASCONE HOME ",
                  data: "1 Dicembre 2022",
                  storia_testo: "Mi sono sentito valorizzato, dal primo contatto tramite linkedin, in cui ho ricevuto un messaggio targhetizzato, chiaro e per nulla impersonale. Le mie precedenti esperienze con le apl non sono state positive, in quanto non avevo questo costante rapporto di condivisione e aggiornamento con la parte hr. Ho riscontrato in jobify l’attenzione nel mettere il candidato al centro del processo di r&s , dove essere considerato una persona con le proprie ambizioni e talento da far incrociare perfettamente con le richieste dell’azienda. La chiarezza a partire dall’annuncio, sino all’orientamento verso il colloquio finale con l’azienda mi ha fatto sentire sicuro e seguito.",
                },
                {
                  nickname: "Alessio Cinao",
                  ruolo: "Impiegata Contabile",
                  azienda: "Celda 2000 Servizi Integrati srls",
                  data: "8 Dicembre 2022",
                  storia_testo: "Mi sono sentita da subito a mio agio, capita e compresa, ho avuto addirittura, nel momento del colloquio con la mia referente Elisa, dei suggerimenti per migliorare il mio cv e la mia presentazione, non mi era mai capitato. Ho apprezzato in Jobify Recruiting la serietà, e umanità, mi sono sentita trattata alla pari, e sostenuta per tutto l’iter di selezione, per affrontare al meglio il colloquio finale con l’azienda.",
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

    function bold() {
      var reveals = document.querySelectorAll(".bold");

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
    window.addEventListener("scroll", bold);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    /*for (let i = 0; i < this.storie.length; i++) {
      var nickname = document.getElementById("username"+i);
      nickname.textContent = this.storie[i].nickname;

      var ruolo = document.getElementById("jobtitle"+i);
      ruolo.textContent = this.storie[i].ruolo;
    }*/
  },
  methods: {
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
      <welcome></welcome>

      <div class="secondPart">
        <div class="text1 bold text1H1">
          <span>Jobify Recruiting:</span> chi siamo e il nostro metodo
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold ">
          <span>Jobify Recruiting è l’agenzia di head hunting digitale e dinamica</span> che punta a trovare talenti da inserire nella
tua azienda grazie a un processo di ricerca e selezione consulenziale, umano, efficace, scientifico e rapido.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Il nome “Jobify” nasce dall’unione di <span>“job” e “identify”</span> e proprio perché crediamo che siamo prima persone
e poi professionisti e proprio questo diventa il fulcro del nostro lavoro di ogni giorno.
        </div>
      </div>
      <div class="fourthPart">
        <div class="rowImages">
          <div class="image1 transition"></div>
          <div class="image2 transition" style="margin-top: 5rem"></div>
          <div class="image3 transition"></div>
          <div class="image4 transition" style="margin-top: 5rem"></div>
        </div>
      </div>
      <div class="secondPart">
        <div class="text1 bold text1H1">
          <span>Il team</span> di Jobify Recruiting
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold ">
          A differenza della tradizionale agenzia di ricerca e selezione del personale, Jobify Recruiting è un’agenzia di
head hunting <span>dinamica ed energica,</span> snella e rapida nel fornire la soluzione ideale al candidato che cerca
lavoro e all’azienda che cerca candidati.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Il nostro team è composto da <span>persone giovani</span> ma altamente competenti, che svolgono il lavoro quotidiano
di ricerca e selezione talenti con passione e impegno. Amiamo quello che facciamo, ma ancora di più
amiamo far incontrare il candidato con un’azienda in cui si rivede nei valori aziendali e le aziende con una risorsa ideale.
        </div>
      </div>
      <div class="fifthPart">
        <div class="quotesDiv">
          <div class="quotes">
            <div class="quote">
              <div class="quoteh4">
                <span>Mission</span> di Jobify Recruiting
              </div>
              <div class="quoteh5">
                La nostra mission è creare il match perfetto tra azienda e candidato. 
                Dal punto di vista dell'azienda si tratta di trovare una risorsa compatibile con la cultura e l'organizzazione aziendale, 
                dal punto di vista del candidato di inserire la risorsa in un contesto aziendale in cui si identifica nei valori e negli ideali.
              </div>
            </div>
            <div class="quote" style="text-align: right !important;
              float: right !important; margin-top: 20rem">
              <div class="quoteh4" style="text-align: right !important;
              float: right !important"><span>Vision</span> di Jobify Recruiting</div>
              <div class="quoteh5" style="float: right !important">
                La nostra vision parla di un mondo HR sempre più human e digital, in cui competenze personali incontrano
                le moderne tecnologie per un processo di ricerca e selezione dei candidati ottimizzato. Vogliamo trovare la
                persona ideale per ogni azienda e dare al candidato la posizione lavorativa che cerca e sogna da sempre.
                </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sixtPart">
        <h2>Non più candidati, ma persone da mettere al centro del processo di selezione</h2>
        <div class="description">
          In Jobify Recruiting il candidato diventa una persona da mettere al centro del processo di selezione. Con un
          metodo scientifico e rigoroso basato sui dati valutiamo valori e aspettative di ciascuno per trovare il suo
          talento e metterlo a disposizione delle aziende.
        </div>

        <div class="sixtPartButton">
          <a href="/workers" class="">
            <button class="btn"> Scopri i servizi per il candidato <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" data-v-3f1ba09e=""><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" data-v-3f1ba09e=""></path></svg></span></button></a></div>
      </div>
      <div class="secondPart">
        <div class="text1 bold text1H1">
          Jobify Recruiting: <span>la storia</span>
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold ">
          Jobify Recruiting nasce a Milano nel 2021 da un’idea di Davide Maggio Ceo e Founder esperto nella
          direzione personale da oltre 10 anni e attivo nel settore della gestione, organizzazione e sviluppo del
          personale. Davide Maggio è HR Manager certificato Aicq Sicev con una laurea in Psicologia e 3 Master in HR

          Management. Da questo bagaglio di competenze è nata l’idea di <span>mettere l’esperienza alla servizio delle
          aziende</span> per colmare un gap esistente nel mondo della ricerca e selezione.

          In jobify recruiting non ci limitiamo a valutare il talento soltanto attraverso il cv e 
          quindi valutando hard e soft skills, ma prendiamo in considerazione anche i valori e 
          le aspettative professionali del candidato e la cultura aziendale della società.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Il settore della Ricerca &amp; Selezione e dell’ HR Tech in Italia è fermo da 10 anni: le aziende faticano ancora a
          trovare i talenti giusti, ed i talenti a trovare le aziende giuste. Jobify Recruiting ha come obiettivo primario
          quello di <span>umanizzare il processo di Ricerca &amp; Selezione,</span> mettendo a servizio dei nostri Head Hunter
          strumenti di Intelligenza Artificiale ed HR Tech.
        </div>
      </div>
      <div class="thirdPart">
        <div class="text1 bold">
          Un team capace di umanizzare la ricerca e selezione.
          Crediamo fortemente che <span>siamo persone prima che professionisti.</span>
        </div>
      </div>
      <div class="sixtPart" style="padding-top: 10rem;">
        <h2>Le persone che fanno parte della famiglia Jobify Recruiting</h2>
        <div class="team1">
          <div class="person2" @click="story(1)">
            <div
              class="photo"
            ></div>
            <div class="name">Davide Maggio</div>
            <div class="jobtitle">Founder & CEO</div>
          </div>
          <div class="person2" @click="story(2)">
            <div
              class="photo"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/marcofattizzo.jpeg);
              "
            ></div>
            <div class="name">Marco Fattizzo</div>
            <div class="jobtitle">Responsabile Pubbliche Relazioni & Co-Founder</div>
          </div>
        </div>

        <h4>Team esecutivo</h4>

        <div class="team2">
          <div class="person" @click="story(3)">
            <div
              class="photo"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/martinadipalma.jpg);
              "
            ></div>
            <div class="name">Martina Di Palma</div>
            <div class="jobtitle">Head Hunter</div>
          </div>
          <div class="person" @click="story(4)">
            <div class="photo" style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/ceciliadondi.jpg);
              "></div>
            <div class="name">Cecilia Dondi</div>
            <div class="jobtitle">HR Consultant</div>
          </div>
          <div class="person" @click="story(5)">
            <div
              class="photo"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/chiaraluciagraziano.png);
              "
            ></div>
            <div class="name">Chiara Lucia Graziano</div>
            <div class="jobtitle">HR Consultant & Career Coach</div>
          </div>
          <div class="person" @click="story(6)">
            <div
              class="photo"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/elisasevera.png);
              "
            ></div>
            <div class="name">Elisa Severa</div>
            <div class="jobtitle">HR Consultant</div>
          </div>
          <div class="person" @click="story(7)">
            <div
              class="photo"
              style="
                background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/alessiocinao.jpeg);
              "
            ></div>
            <div class="name">Alessio Cinao</div>
            <div class="jobtitle">Direttore Marketing</div>
          </div>
        </div>
      </div>
      <div class="story" id="1">
        <div class="close_story" @click="close_story(1)">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22"
                                height="22"
                                fill="#fff" class="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                  </svg>
                </div>
        <div class="content">
                <div class="nickname" id="nickname"></div>
                <div style="display: flex; align-items: center; width: 100%; text-align: center;">
                  <div class="ruolo" id="ruolo"></div> 
                  <div class="azienda" id="azienda"></div> 
                  <div class="data" id="data"></div>
                </div>
                <div class="storia_testo" id="storia_testo"></div>
              </div>
              
      </div>
            <div class="seventhPart">
              <div class="imageJobifyLogo transition"></div>
              <div class="imageSapienza transition"></div>
              <div class="text" style="text-align: right;">
                <h2 style="margin-left: auto;">Jobify Recruiting come <span>Stakeholder</span></h2>
                <p style="margin-left: auto;">Jobify Recruiting è stakeholder Sapienza per i tirocini del 2 e 3 anno di Scienze del Turismo.</p>
              </div>
            </div>
            <div class="seventhPart">
              <div class="text">
                <h2>Lavora con <span>noi</span></h2>
                <p>La squadra di Jobify Recruiting è giovane, dinamica e competente. Scopri le persone che ne fanno parte e
      contattaci se anche tu vuoi entrare nel nostro team.</p>

                <div class="formButton">
                  <router-link to="/workwithus"
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
                  ></router-link>
                </div>
              </div>
              <div class="image transition"></div>
              <div class="image transition" style="margin-top: 8rem"></div>
            </div>
    </div>
  </div>
</template>
<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

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

.bold {
  color: #fff !important;
  transition: 1s all ease;
}

.bold.active {
  color: #627597 !important;
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
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .story .content{
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 10;
    background: #0c25509f;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 5%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .story .close_story{
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

  .story .close_story:hover {
    border-color: white;
    transform: rotate(90deg);
  }

  .story .content .nickname{
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
  }

  .story .content .azienda{
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    margin-top: 0.5rem;
    color: #fff;
  }
  .story .content .data{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: auto;
    width: fit-content;
    margin-left: 1rem;
  }

  .story .content .ruolo{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
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
    color: #fff;
    font-weight: 300;
  }
  .main {
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
  }

  .flowSingleBtn {
    margin-top: 15rem;
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
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .firstPart {
    display: flex;
  }

  .firstPart .col1 {
    width: 60%;
    padding: 10rem;
  }

  .firstPart .col1 .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
    width: fit-content;
  }

  .firstPart .col1 h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 72px;
    line-height: 76px;
    font-weight: 800;
    margin-bottom: 1rem;
  }

  .firstPart .col1 p {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }

  .firstPart .col1 p span {
    margin-top: 0.5rem;
    color: #d3d3d3;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
  }

  .firstPart .col2 {
    width: 40%;
    height: 40vw;
    background: transparent;
    border-bottom-left-radius: 60px;
    background-image: url(/src/assets/technology.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 7rem;
    z-index: 3;
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: -3%;
    top: 30%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    z-index: 1;
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 70%;
    right: 15%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 213, 255, 0.9);
    z-index: 1;
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 30%;
    right: 35%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(255, 225, 0, 0.9);
    z-index: 1;
  }
  .glow4 {
    position: absolute;
    width: 5vw;
    top: 30%;
    right: 20%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 157, 255, 0.9);
    z-index: 1;
  }

  .secondPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-bottom: 5rem;
    background: #ffffff;
  }

  .secondPart .text1 {
    padding-top: 10rem;
    color: #627597;
    font-size: 30px;
    line-height: 30px;
    font-weight: 400;
    width: 65%;
    margin-left: 3rem;
  }

  .secondPart .text1H1{
    font-size: 54px !important;
    line-height: 54px !important;
    font-weight: 500 !important;
  }

  .secondPart .text1 h3{
    font-size: 30px;
    line-height: 30px;
    font-weight: 400;
  }

  .secondPart .text1 span {
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .thirdPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 8rem;
    padding-bottom: 5rem;
    background: #ffffff;
  }

  .thirdPart .text1 {
    color: #627597;
    font-size: 30px;
    line-height: 30px;
    font-weight: 400;
    width: 65%;
    margin-left: 3rem;
  }

  .thirdPart .text1 span {
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 500;
  }

  .fourthPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
    background: #fff;
  }

  .rowImages {
    display: flex;
  }

  .flex {
    display: flex;
  }

  .fourthPart .image1 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/chisiamoimg1.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-left: 1rem;
  }

  .fourthPart .image2 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/chisiamoimg2.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .fourthPart .image3 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/chisiamoimg3.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .fourthPart .image4 {
    width: 20vw;
    height: 35vw;
    background-image: url(/src/assets/chisiamoimg4.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .fifthPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    background: #fff;
  }

  .fifthPart h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
    font-size: 54px;
    width: 40%;
    line-height: 58px;
    letter-spacing: -0.04em !important;
  }

  .quotesDiv {
    width: 100%;
    margin-top: 5rem;
  }

  .quote {
    width: 65vw;
    margin-left: auto;
    margin-right: auto;
  }

  .quotes {
    display: flex;
    margin-bottom: 6rem;
  }

  .quotes .quote {
    margin-left: 3rem;
    margin-right: 3rem;
  }

  .quotes .quoteh4 {
    font-size: 54px;
    line-height: 58px;
    font-weight: 800;
    width: 100%;
    color: #0c2550;
    margin-bottom: 1rem;
    text-align: left !important;
    letter-spacing: -0.04em;
  }
  .quotes .quoteh4 span {
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
  }

  .quotes .quoteh5 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #627597;
    margin-bottom: 1rem;
  }

  .sixtPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 5rem;
    padding-bottom: 0rem;
    background: #fff;
  }

  .sixtPart h2 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #0c2550;
    font-size: 54px;
    font-weight: 800 !important;
    width: 60%;
    line-height: 58px;
    letter-spacing: -0.04em !important;
  }
  
  .sixtPart .description{
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 20px;
    line-height: 24px;
    font-weight: 400;
    color: #627597;
    padding-bottom: 2rem;
    width: 80%;
  }

  .sixtPart .sixtPartButton{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .sixtPart h4 {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    color: #0c2550;
    font-size: 18px;
    font-weight: 500 !important;
    width: 40%;
    line-height: 18px;
    letter-spacing: 1.5px !important;
    text-transform: uppercase;
    margin-top: 3rem;
    margin-bottom: 0rem;
  }

  .team1 {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    display: flex;
  }

  .team2 {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-top: 2rem;
    display: flex;
    flex-wrap: wrap;
  }

  .person2 {
    width: fit-content;
    margin-left: 2.5rem;
    float: left;
    position: relative;
    margin-bottom: 3rem;
  }

  .person {
    width: 22%;
    margin-left: 1.5rem;
    float: left;
    position: relative;
    margin-bottom: 3rem;
  }

  .team1 .person2 .photo {
    width: 16vw;
    height: 16vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }

  .team2 .person .photo {
    width: 13vw;
    height: 13vw;
    background-image: url(/src/assets/ph9.JPG);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
  }

  .photo:hover {
    transform: scale(1.1);
  }

  .person .name {
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 16px;
    color: #0c2550;
    font-weight: 400;
  }

  .person .jobtitle {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: #627597;
    margin-top: 0.2rem;
  }

  .person2 .name {
    text-align: center;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 18px;
    line-height: 18px;
    color: #0c2550;
    font-weight: 400;
    width: 16vw;
  }

  .person2 .jobtitle {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    color: #627597;
    margin-top: 0.2rem;
    width: 16vw;
  }

  .seventhPart {
    padding-left: 11rem;
    padding-right: 11rem;
    padding-top: 8rem;
    padding-bottom: 5rem;
    background: #fff;
    display: flex;
    align-items: center;
  }
  .seventhPart .text {
    width: 60%;
  }

  .seventhPart .text h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 800 !important;
    width: 70%;
    line-height: 56px;
    letter-spacing: -0.04em !important;
  }

  .seventhPart .text h2 span {
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 800 !important;
  }

  .seventhPart .text p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 70%;
    margin-bottom: 2rem;
  }

  .seventhPart .image {
    width: 30vw;
    height: 30vw;
    margin-right: 2rem;
    background-image: url(/src/assets/ph10.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
  }

  .seventhPart .imageSapienza {
    width: 30vw;
    height: 30vw;
    margin-right: 2rem;
    background-image: url(https://www.uniroma1.it/sites/default/files/images/logo/sapienza-big.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
  }

  .seventhPart .imageJobifyLogo {
    width: 30vw;
    height: 30vw;
    margin-right: 2rem;
    background-image: url(/src/assets/logo/blue.png);
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
  }

  .fifthDiv {
    background: #fff;
    padding: 3rem;
    padding-bottom: 8rem;
  }

  .fifthDiv .adviser {
    background: #0c2550;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding: 6rem;
  }
  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 90%;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.04em;
    font-weight: 600;
  }

  .fifthDiv .btn {
    margin-top: 0 !important;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(116deg, #00ffbf 0%, #0076ff 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 44px;
    line-height: 44px;
    letter-spacing: -0.04em;
    font-weight: 700;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 60px;
    background-image: url(/src/assets/searchimage.png);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
    width: 50%;
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

  .secondPart {
    padding-top: 8rem;
  }

  .secondPart .title h2 {
    color: #0c2550;
    width: 80%;
    font-size: 54px;
    line-height: 58px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart .title p {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .steps {
    padding-top: 2rem;
    padding-bottom: 2rem;
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
    background: linear-gradient(90.91deg, #027bfd -24.67%, #5162fb 53.55%);
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
