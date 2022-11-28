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
  },
  methods: {
    btnScrollSx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
    },
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="titlePage">
          <router-link to="/journal">
            <div class="btn_back">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#fff"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </span>
            </div>
          </router-link>

          Ricerca e selezione umana
        </div>
        <div class="dateDiv">
          Data di pubblicazione: <span id="datePage">7 settembre 2022</span>
        </div>
        <div class="imageArticle"></div>

        <div class="article">
          <h3>Ricerca e selezione umana</h3>
          <p>
            Le fasi di ricerca e di selezione del personale possono rivelarsi
            piuttosto aride e, in alcuni casi, persino ostiche. Adottare un
            approccio sterile nei confronti dei candidati, tuttavia, può
            rivelarsi controproducente. Sia nella fase di recruiting dei
            talenti, che in termini di percezione dell'immagine aziendale. Chi
            vorrebbe inviare il proprio CV ad una realtà che sembra trattare i
            propri dipendenti come semplici “numeri”?
          </p>
          <p>
            È proprio per questo motivo che, negli ultimi tempi, le società
            hanno iniziato ad effettuare una ricerca e selezione del personale
            che sia quanto più possibile umana. Mettersi alla pari del
            candidato, infatti, può tornare utile sia nella fase di attraction
            del professionista, che di retention. Adottare questo tipo di
            strategia, oltre a migliorare le performance aziendali, permette di
            ricevere un numero maggiori di talenti ideali.
          </p>
          <p>
            Ma cerchiamo di scoprire di seguito quali siano le fasi più cruciali
            della ricerca di personale e come renderle più human.
          </p>
          <h3>Comprendere in pieno le esigenze di entrambe le parti</h3>
          <p>
            Una delle cose da fare ancora prima di pubblicare un annuncio di
            lavoro è quella di avere le idee chiare sulle proprie esigenze. Ma,
            soprattutto, identificare quali siano le motivazioni principali che
            possono spingere un'azienda alla ricerca di personale. Una volta
            valutate con attenzione le esigenze del datore di lavoro, sarà più
            semplice creare una job description che sia in grado di attirare
            talenti che condividano la stessa mission aziendale. E non solo.
          </p>
          <p>
            Avere le idee chiare su quali siano le sfide e le opportunità
            aziendali correlate alla necessità di assumere nuovi lavoratori è un
            fattore che torna sicuramente utile nel momento in cui si deve
            effettuare la prima scrematura di curriculum.
          </p>
          <h3>La pubblicazione dell'annuncio di lavoro</h3>
          <p>
            All'interno della job description è indispensabile riportare quante
            più informazioni possibili. E con questo non si intende solo la
            tipologia di contratto che verrà offerta al candidato. Ma anche
            eventuali benefit proposti e opportunità di carriera da svolgere in
            azienda.
          </p>
          <p>
            All'interno dell’annuncio di lavoro, inoltre, sarebbe meglio
            inserire anche delle informazioni riguardanti i valori e la cultura
            aziendale della propria società. Essere il più trasparenti possibile
            nei messaggi che si vogliono dare all'esterno della società è
            sicuramente una scelta che si rivela vincente.
          </p>
          <p>
            Sarebbe utile, inoltre, spiegare con precisione quale sia la
            tipologia di candidato che si sta cercando. Questo è l’unico modo
            che permette alla società in questione di entrare in contatto con le
            persone ideali. Ma, soprattutto, consentirà all'azienda di essere
            percepita come un'entità più umana e meno astratta.
          </p>
          <h3>Dove pubblicare l’annuncio</h3>
          <p>
            Scegliere la forma giusta per pubblicare l'annuncio di lavoro,
            inoltre, è fondamentale per ottenere dei buoni risultati in poco
            tempo. Scegliere dei siti specializzati in annunci di lavoro,
            infatti, trasmette al candidato una sensazione di serietà. Chi
            vorrebbe inviare il proprio cv ad un’azienda che è disposta a
            lasciare al caso il processo di recruiting e, quindi, anche i propri
            dipendenti?
          </p>
          <p>
            È così, quindi, che il candidato sarà più intenzionato a rispondere
            ad annunci pubblicati in siti specializzati, perché non avrà paura
            di cadere in truffe o di essere vittima di specchietti per le
            allodole. Non bisogna dimenticare, infatti, che esattamente come
            un'azienda non ha voglia di perdere tempo ed energie selezionando
            candidati svogliati e poco appassionati, in egual modo un candidato
            non ha voglia di spendere tempo ed energie revisionando il proprio
            CV e fissando colloqui di lavoro con aziende poco serie o con
            offerte che si rivelano farlocche.
          </p>
          <h3>L’utilizzo delle Chatbot</h3>
          <p>
            Tra i sistemi tecnologici che vengono maggiormente utilizzati nelle
            fasi di recruiting del personale non possiamo che citare le chatbot,
            ossia quei sistemi di automazione che consentono di interagire con
            moltissime persone allo stesso momento. Soprattutto se si tratta di
            domande standard.
          </p>
          <p>
            Questi sistemi consentono, ad esempio, di fornire risposte
            automatiche a più persone, agevolando quindi il lavoro del
            selezionatore. Ma non solo. Grazie a questa tecnologia, infatti, è
            possibile semplificare il processo di scrematura dei candidati.
            Attraverso questi bot, infatti, si riesce a capire fin da subito se
            il lavoratore in questione riesce a soddisfare i criteri di base
            richiesti dell'azienda e se la posizione per cui si sta proponendo è
            quella più indicata per lui.
          </p>
          <h3>La tecnologia durante i colloqui</h3>
          <p>
            Lo sviluppo della tecnologia nell'arco degli ultimi mesi ha fatto
            dei passi da gigante. Questo sviluppo è stato esponenziale e si è
            verificato in brevissimo tempo, soprattutto durante la crisi
            sanitaria mondiale. È così che le aziende hanno deciso di venire
            incontro alle esigenze dei candidati dando loro l’opportunità di
            partecipare a video colloqui.
          </p>
          <p>
            Organizzare degli incontri conoscitivi da remoto con dei potenziali
            nuovi assunti, permette non solo all'azienda di risparmiare una
            grande quantità di tempo e di energie, ma consente anche al
            candidato di partecipare ad un appuntamento senza, per questo, dover
            investire eccessive quantità di tempo in trasporti e spostamenti
            vari.
          </p>
          <p>
            Quante volte è capitato, infatti, che venisse proposto ad un
            candidato di partecipare ai recruiting day in un’altra città? O in
            orari improbabili che rendono difficile l’organizzazione degli
            impegni familiari? Sfruttare le tecnologie, in questo momento, rende
            il processo di recruiting sempre più alla portata del candidato. E,
            sicuramente, la percezione di quest’ultimo nei confronti
            dell’azienda sarà più positiva.
          </p>
          <h3>Follow-up post assunzione</h3>
          <p>
            Assumere un candidato idonei è sicuramente un traguardo notevole per
            un’azienda. Eppure, è indispensabile ricordare che il momento della
            firma del contratto non deve essere visto come il punto di arrivo.
            Bensì come un punto di partenza per un nuovo percorso da fare
            insieme.
          </p>
          <p>
            Se non esiste un impegno da entrambe le parti nel corso
            dell'immediato futuro, il progetto sarà destinato a fallire
            nell'arco di brevissimo tempo.
          </p>
          <p>
            È indispensabile, quindi, che il recruiter o il datore di lavoro,
            cerchi di tenere costantemente monitorata la situazione anche nei
            momenti successivi all'ingaggio del neo dipendente. Valutare
            l'effettiva soddisfazione di tutte le parti coinvolte, è
            determinante per far sì che il rapporto di lavoro duri il più lungo
            possibile. Ma anche per evitare che si presentino situazioni di
            frustrazione che portino a dimissioni impreviste. Mettersi nei panni
            del dipendente è sempre la scelta vincente.
          </p>
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

@media (min-width: 1024px) and (max-width: 1312px) {
  .articles2 .article[data-v-c1d84998] {
    float: left;
    margin-top: 3rem;
    margin-right: 1.5rem;
    margin-left: 1.5rem;
    width: 40% !important;
    background: #fff;
    border-radius: 25px;
  }
}
@media (min-width: 1024px) {
  .flowSingleBtn {
    margin-top: 15rem;
  }

  .first {
    padding-top: 5rem;
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .btn_back {
    margin-bottom: 2rem;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #fff;
    font-weight: 800;
    width: 70%;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .dateDiv {
    font-size: 16px;
    line-height: 20px;
    color: #fff;
    font-weight: 400;
    margin-left: 11rem;
    margin-top: 1rem;
  }

  .imageArticle {
    height: 45vw;
    width: 100%;
    background-image: url(https://media-exp1.licdn.com/dms/image/D4D12AQGtBYsgYvL_lA/article-cover_image-shrink_720_1280/0/1661953124123?e=1669248000&v=beta&t=Gkr7dvHTPSTMJPvCLt_P7tPOKE-NKob557NZYxZNHiw);
    background-size: cover;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top: 2rem;
    border-radius: 12px;
  }

  .article {
    margin-top: 3rem;
    padding-left: 15rem;
    padding-right: 15rem;
  }

  .article h3 {
    font-size: 28px;
    line-height: 32px;
    color: #1e213d;
    font-weight: 800;
    padding-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .article p {
    padding-bottom: 2rem;
    margin-bottom: 0rem !important;
    color: #131313;
    font-size: 20px;
    line-height: 28px;
    font-weight: 400;
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
