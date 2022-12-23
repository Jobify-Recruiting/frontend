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
                {
                  nickname: "K.R.",
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

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";

    const slider = document.querySelector(".featuredContent");
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
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
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
      <div class="first">
        <div class="second">
          <div class="featureds">
            <div class="titles">
              <h2>Storie dei talenti</h2>
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
              <div class="featured" @click="story(7)">
                <div class="hover"></div>
                <div class="text">
                  <p>Dicembre 8, 2022</p>
                  <h2>
                    Mi sono sentita da subito a mio agio, capita e compresa...
                  </h2>
                </div>
                <div class="info_story">
                  <div class="username" id="username5"></div>
                  <div class="jobtitle" id="jobtitle5"></div>
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
          </div>
        </div>

        <div class="sixtPart">
        <h2>Ogni persona ha un talento e ogni talento racchiude in sé un’opportunità di lavoro</h2>
        <div class="description">
          Il compito di Jobify
          Recruiting è proprio questo: creare il match perfetto tra persona e azienda, talento e impresa per collocare
          le persone giuste al posto giusto. Un compito che da sempre svolgiamo con la massima cura e attenzione
          come testimoniano le storie dei talenti che abbiamo raccolto in questa pagina.
          Perché nessuna persona è priva di talento e ciascuno può e deve trovare l’azienda capace di valorizzarlo.
        </div>

        <div class="sixtPartButton">
          <a href="/workwithus" class="">
            <button class="btn"> Scopri i servizi per il candidato <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" data-v-3f1ba09e=""><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" data-v-3f1ba09e=""></path></svg></span></button></a></div>
      </div>

        <div class="fifthDiv">
          <div class="adviser">
            <div class="col">
              <h3>
                <span>Contattaci e prenota un appuntamento</span> per trovare i migliori talenti per la tua azienda.
              </h3>
              <div class="divInput">
                <router-link to="/contact"
                  ><button class="btn">Contattaci</button></router-link
                >
              </div>
            </div>
            <div class="col" data-v-1672ca76="" style="background-image: url(&quot;https://thingsss.s3.eu-central-1.amazonaws.com/storie.jpg&quot;); background-size: cover; border-radius: 30px;"></div>
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

  .first {
    padding-top: 5rem;
    background: #ada996;
    background: -webkit-linear-gradient(to top, #eaeaea, #ffffff, #ffffff47, #0c2550);
    background: linear-gradient(to top, #eaeaea, #ffffff, #ffffff47, #0c2550);
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #fff;
    font-weight: 800;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .titlePage2 {
    font-size: 34px;
    line-height: 38px;
    color: #0c2550;
    font-weight: 800;
    margin-left: 12.5rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
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
    letter-spacing: 1px;
    font-size: 64px;
    line-height: 64px;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .cols .col h3 {
    color: #fff;
    letter-spacing: 1px;
    font-size: 40px;
    line-height: 40px;
    font-weight: 700;
    margin-bottom: 1.5rem;
  }

  .cols .col .subtitle {
    color: rgb(211, 211, 211);
    letter-spacing: 1px;
    font-size: 18px;
    line-height: 24px;
  }

  .topContent {
    display: flex;
    align-items: center;
    margin-top: 2rem;
    border-radius: 30px;
    margin-left: 11rem;
    margin-right: 11rem;
    margin-bottom: 5rem;
    background: white;
  }

  .topContent .img1 {
    width: 70%;
    background-image: url("/src/assets/ph15.jpg");
    border-bottom-left-radius: 30px;
    border-top-left-radius: 30px;
    height: 30vw;
    background-position: center;
    background-size: cover;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .topContent .img1:hover {
    transform: scale(1.02);
  }

  .firstTitle {
    margin-left: 2rem;
    width: 40%;
    margin-right: 2rem;
    color: #0c2550;
  }

  .firstTitle p {
    font-size: 12px;
    color: #273350;
    font-weight: 800;
    letter-spacing: 0.5px;
    line-height: 1.33333;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .firstTitle .subtitle {
    font-size: 16px;
    color: #273350;
    line-height: 20px;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  .firstTitle h2 {
    color: #0c2550;
    font-size: 46px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .firstTitle .btnRead {
    padding-top: 2rem;
    color: #0062f5;
    font-weight: 800;
    float: right;
    font-size: 12px;
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .secondPart {
    padding-left: 11rem;
    padding-right: 11rem;
    margin-bottom: 5rem;
  }

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
    font-weight: 300;
    color: #fff;
  }

  .second {
    padding-bottom: 5rem;
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

  .featuredContent {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    cursor: pointer;
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
    font-size: 40px;
    line-height: 42px;
    color: #fff;
    font-weight: 800;
    margin-top: 3rem;
    letter-spacing: -0.02em;
    width: fit-content;
  }

  .featureds .btnScrollR {
    width: fit-content;
    background: white;
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
    background: #fff;
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

  .fifthDiv {
    padding: 3rem;
    padding-bottom: 8rem;
  }

  .fifthDiv .adviser {
    background: rgba(161, 161, 161, 0.1);
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding: 6rem;
  }
  .fifthDiv .adviser .col h3 {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    letter-spacing: -1px;
    color: #0c2550;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(-70deg, #2867b2  0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 34px;
    line-height: 38px;
    letter-spacing: -1px;
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

  .sixtPart {
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 8rem;
    padding-bottom: 8rem;
    background: transparent;
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
    background: #ed3fb4;
    color: #fff;
  }

  .btn span {
    padding-left: 0.4rem;
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
