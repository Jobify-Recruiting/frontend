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
                  fill="#0c2550"
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

          Talent Attraction e Talent Retention: le nuove tendenze dell’employer
          branding
        </div>
        <div class="dateDiv">
          Data di pubblicazione: <span id="datePage">23 agosto 2022</span>
        </div>

        <div class="article">
          <p>
            Uno degli obiettivi che hanno in comune le aziende è quello di
            entrare in contatto con persone di valore. Ma, soprattutto, capire
            come questi professionisti possano entrare a far parte del proprio
            staff.
          </p>
          <p>
            È così che un brand deve strutturare delle strategie adeguate di
            Talent Attraction e di Talent Retention al fine di migliorare le
            performance del proprio staff. Ma di cosa stiamo parlando nello
            specifico? Scopriamolo insieme nel corso dei prossimi paragrafi.
          </p>
          <h3>Talent Attraction: che cos'è?</h3>
          <p>
            Con il termine di Talent Attraction ci si riferisce alla capacità da
            parte di un datore di lavoro o di un selezionatore di attirare a sé
            i collaboratori più giusti per un’azienda. Questo fenomeno è sempre
            presente all'interno della vita di una società. Sia nel momento in
            cui non c'è in corso un' effettiva ricerca di personale (in questo
            caso si parla di candidati passivi), sia quando si è alla ricerca di
            figure da inserire in posizioni aperte specifiche (candidati
            attivi).
          </p>
          <p>
            Per rendere maggiormente efficace la Talent Attraction esistono
            diversi strumenti e tattiche. Alcuni di essi si identificano con il
            recruiting marketing, altri con la cultura aziendale, altri ancora
            con i benefit.
          </p>
          <h3>L’opinione dello staff è importante</h3>
          <p>
            Se si imposta una strategia di marketing aziendale che mette il
            focus sul dipendente e sull'opinione dello staff, chiunque vorrebbe
            lavorare per quel brand. Di conseguenza, risulterà più semplice
            attrarre sia candidati attivi che passivi. Così come fidelizzare un
            dipendente nei confronti del brand.
          </p>
          <h3>Il blog aziendale</h3>
          <p>
            Attraverso la pubblicazione periodica di articoli che riguardano l'
            azienda e il punto di vista del brand su specifiche tematiche di
            interesse sociale, può aiutare i candidati a capire qual è il punto
            di vista dell'azienda in determinate situazioni. Ma mettere anche in
            mostra l'etica aziendale, i progetti che l’azienda vorrebbe
            intraprendere e i livelli di sostenibilità a cui il brand aspira.
            Tutte tematiche che, al giorno d' oggi, i candidati valutano con
            attenzione prima dell'invio del curriculum.
          </p>
          <h3>Feedback dello staff</h3>
          <p>
            La sezione dei feedback è sicuramente un altro metro di valutazione
            che possono utilizzare i candidati nel momento in cui devono
            decidere se inviare o meno il proprio curriculum. In questa sezione,
            infatti, appaiono le opinioni di coloro che hanno già inviato il
            proprio CV e che hanno già sostenuto un colloquio con il recruiter.
            O che, addirittura, fanno già parte dello staff aziendale. Leggere
            altre opinioni positive aiuterà ad aumentare il numero di
            candidature.
          </p>
          <h3>La Job Description</h3>
          <p>
            La Job Description risulta essere un altro fattore determinante per
            l'acquisizione di nuovi talenti. Scegliere il giusto linguaggio e
            fornire dettagli sulla tipologia di contratto, il range di stipendio
            che si è disposti a dare e parlare chiaramente di quali siano i
            valori su cui si basa l'azienda, permettono al candidato di capire
            subito se la proposta possa essere o meno interessante.
          </p>
          <h3>I referral</h3>
          <p>
            Sono sempre più le aziende che, per trovare del personale adatto da
            inserire all'interno del proprio team, chiedono ai propri dipendenti
            di segnalare loro i profili più interessanti. I candidati segnalati
            che inviano il proprio curriculum vengono definiti con il termine
            referral.
          </p>
          <p>
            Per ognuno di loro, il dipendente che avrà contribuito alla loro
            individuazione, può ricevere una gift card o maggiori benefit.
          </p>
          <h3>Che cos'è la Talent Acquisition?</h3>
          <p>
            La Talent Acquisition è una fase costitutiva del processo di
            recruiting che va di pari passo con quella della Talent Attraction.
            In entrambi questi step il talento è il focus principale a cuisi dà
            importanza. Ma se la Talent Attraction si occupa di attrarre i
            candidati più validi, laTalent Acquisition mira principalmente a
            fare network con professionisti di indiscusso interesse. E questo
            avviene sia nel caso in cui una posizione sia aperta, sia nel caso
            in cui l'azienda non sia alla ricerca di una figura specifica.
          </p>
          <p>
            Dare la giusta importanza alla Talent Attraction e alla Talent
            Acquisition è fondamentale perle aziende, perché solo attraverso
            esse riuscirà a migliorare sia le performance che i processi
            produttivi aziendali.
          </p>
          <h3>La Talent Retention</h3>
          <p>
            Una volta individuati i candidati più giusti per la propria azienda,
            infatti, è indispensabile riuscire a identificare la migliore
            proposta contrattuale. Al giorno d'oggi il fenomeno delle grandi
            migrazioni è un vero e proprio dramma che rischia di compromettere
            la produttività di un'azienda.
          </p>
          <p>
            Un buon sistema di Talent Retention potrebbe essere quello di
            formulare delle proposte personalizzate ad hoc per ogni dipendente,
            al fine di creare attorno a lui il contesto aziendale e di crescita
            professionale in cui si trova più a suo agio. In questo modo, sarà
            più facile tenerlo all'interno del proprio team ed evitare che, a
            distanza di qualche mese, possa rassegnare le dimissioni volontarie.
          </p>
          <h3>I benefit</h3>
          <p>
            Anche i benefit aziendali possono essere un ottimo strumento. Ma,
            anche in questo caso, l'azienda dovrebbe entrare nell'ottica di
            personalizzare l'offerta di lavoro in base alla tipologia di
            candidato che vorrebbe assumere.
          </p>
          <p>
            La possibilità di utilizzare una macchina aziendale o l'assegnazione
            di buoni pasto, potrebbe fare più colpo in una persona di mezza età
            e con una certa esperienza lavorativa alle spalle.
          </p>
          <p>
            Questi benefit, però, non faranno sicuramente colpo in un neo
            laureato che si sta approcciando per la prima volta al mondo del
            lavoro. E che, magari, è più interessato a fare viaggi di lavoro o
            ad operare in remote working.
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
    color: #000;
    font-weight: 800;
    width: 70%;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .dateDiv {
    font-size: 16px;
    line-height: 20px;
    color: #000;
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
    padding-left: 11rem;
    padding-right: 11rem;
  }

  .article h3 {
    font-size: 28px;
    line-height: 32px;
    color: #000;
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
