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

    function scrollFunction() {
      if (
        document.body.scrollTop > 3000 ||
        document.documentElement.scrollTop > 3000
      ) {
        //console.log(document.documentElement.scrollTop);
        document.getElementById("text2").style.fontSize = "64px";
        document.getElementById("text2").style.lineHeight = "68px";
      } else {
        document.getElementById("text2").style.fontSize = "94px";
        document.getElementById("text2").style.lineHeight = "98px";
      }

      if (
        document.body.scrollTop > 8500 ||
        document.documentElement.scrollTop > 8500
      ) {
        document.getElementById("text3").style.fontSize = "74px";
        document.getElementById("text3").style.lineHeight = "68px";
      } else {
        document.getElementById("text3").style.fontSize = "94px";
        document.getElementById("text3").style.lineHeight = "98px";
      }
    }

    const slider = document.querySelector(".partnersContent");
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
      let content = document.querySelector(".partnersContent");
      const itemWidth = content.querySelector(".partner").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".partnersContent");
      const itemWidth = content.querySelector(".partner").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
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
    <div class="mainTitle" id="first">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>
              <span class="gradientTitle">Jobify</span>, la tua ricerca e
              selezione
            </h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione,
              <span style="color: #010c18; font-weight: 500"
                >la tua ricerca e selezione</span
              >, la tua ricerca e selezione, la tua ricerca e selezione
            </p>
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
    <div class="secondDiv" id="second">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>
              <span
                >Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti</span
              >
            </h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
              <br />
              <!--<button
                class="btn2"
                style="
                  margin-left: auto;
                  margin-right: auto;
                  width: fit-content;
                "
              >
                <a href="#">Entra ora nel mondo Jobify <span>></span></a>
              </button>-->
            </p>
          </div>
        </div>
        <div class="second">
          <div class="flow">
            <div class="elemsx">
              <h2>
                Guarda il nostro <span>workflow, come lavoriamo ogni</span>
                giorno con i nostri clienti
              </h2>
              <p>
                Qui scriviamo la descrizione riferito al testo superiore,
                <span style="color: #010c18; font-weight: 500"
                  >la tua ricerca e selezione Qui scriviamo la descrizione
                  riferito al testo superiore</span
                >
              </p>
              <!--<button class="btn2">
                <a href="#">Entra ora nel mondo Jobify <span>></span></a>
              </button>-->
              <a href="#first" class="flowSingleBtn">
                <span
                  >Scopri di più
                  <span
                    ><span
                      ><svg
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
                        /></svg></span></span
                ></span>
                <div class="liquid"></div>
              </a>
            </div>
            <div class="elemdx transition">
              <div class="image"></div>
            </div>
          </div>

          <div class="numbers transition">
            <div class="numbersHR_left"></div>
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
            <div class="number">
              <div class="num">+ &nbsp;</div>
              <div class="subtitle">ore di lavoro</div>
            </div>
            <div class="numbersHR_right"></div>
          </div>

          <div class="flow">
            <div class="elemsx" style="padding-bottom: 10rem">
              <div class="image2 transition"></div>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>

              <p class="elemP_image transition">
                <span
                  >Qui scriviamo la descrizione riferito al testo superiore, Qui
                  scriviamo la descrizione riferito al</span
                >
                testo superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image transition">
                <span
                  >Qui scriviamo la descrizione riferito al testo
                  superiore,</span
                >
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>
              <div class="elemP_point2 transition"></div>
            </div>
            <div class="elemdx">
              <h2 class="elemH2 transition" id="text2">
                Guarda il nostro workflow, come lavoriamo ogni<span>
                  giorno con i nostri clienti</span
                >
              </h2>
              <p class="elemP transition">
                <span style="color: #010c18; font-weight: 500"
                  >Qui scriviamo la descrizione riferito al testo
                  superiore,</span
                >
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>

              <div class="elemdx_rectangle1 transition"></div>
              <div class="elemdx_rectangle2 transition"></div>
              <div class="elemdx_rectangle3 transition">
                <p class="elemdx_text">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #b8002e !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                  riferito al testo superiore.
                </p>
                <p class="elemdx_text2">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #b8002e !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                </p>
              </div>

              <div class="elemdx_rectangle4 transition"></div>
              <div class="elemdx_rectangle5"></div>
              <div class="elemdx_rectangle6 transition">
                <img src="/src/assets/img_h2.png" />
              </div>
            </div>
          </div>

          <div class="flowSingle">
            <div class="flowSingleContent">
              <h2 class="flowSingleTitle">
                Guarda il nostro workflow, come
                <span class="flowSingleTitleSpan"
                  >lavoriamo ogni giorno con i nostri clienti</span
                >
                <p>
                  Jobify, la tua ricerca e selezione, la tua ricerca e
                  selezione, la tua ricerca e selezione, la tua ricerca e
                  selezione, la tua ricerca e selezione
                  <br />
                  <!--<button
                class="btn2"
                style="
                  margin-left: auto;
                  margin-right: auto;
                  width: fit-content;
                "
              >
                <a href="#">Entra ora nel mondo Jobify <span>></span></a>
              </button>-->
                </p>
                <!---<button class="btn2">
                  <a href="#"
                    >Entra ora nel mondo Jobify
                    <span class="btnSpan">></span></a
                  >
                </button>-->
              </h2>
            </div>
          </div>
          <div class="flow">
            <div class="elemsx">
              <h2 class="elemH2_v2 transition" id="text2">
                Guarda il nostro workflow, come lavoriamo
                <span class="elemH2_v2Span"
                  >ogni giorno con i nostri clienti</span
                >
              </h2>
              <p class="transition">
                Qui scriviamo la descrizione riferito al testo superiore. Qui
                scriviamo la descrizione riferito al testo superiore,
                <span style="color: #010c18; font-weight: 700"
                  >Qui scriviamo la descrizione riferito al testo superiore, Qui
                  scriviamo la descrizione riferito al testo superiore</span
                >
              </p>

              <div class="elemdx_rectangle1 transition"></div>
              <div class="elemdx_rectangle3 transition">
                <img src="/src/assets/img_h3.png" />
              </div>

              <div class="elemdx_rectangle4 transition"></div>
              <div class="elemdx_rectangle6 transition">
                <p class="elemdx_text">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #b8002e !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                  riferito al testo superiore.
                </p>
                <p class="elemdx_text2">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #b8002e !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                </p>
              </div>
            </div>
            <div class="elemdx" style="padding-bottom: 10rem">
              <div class="image3 transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point transition"></div>
            </div>
          </div>
          <!--<div class="flow">
            <div class="elemsx" style="padding-bottom: 10rem">
              <div class="image2 transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image transition">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2 transition"></div>
            </div>
            <div class="elemdx">
              <h2 class="elemH2" id="text3">
                Guarda il nostro workflow, come lavoriamo ogni giorno con i
                nostri clienti
              </h2>
              <p class="elemP">
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore,
                <span style="color: #010c18; font-weight: 700"
                  >Qui scriviamo la descrizione riferito al testo
                  superiore</span
                >
              </p>

              <div class="elemdx_rectangle1 transition"></div>
              <div class="elemdx_rectangle2 transition"></div>
              <div class="elemdx_rectangle3 transition">
                <p class="elemdx_text3">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #fff !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                  riferito al testo superiore.
                </p>
                <p class="elemdx_text4">
                  <span
                    style="
                      margin-right: 1rem !important;
                      color: #fff !important;
                    "
                    >></span
                  ><span>Al testo superiore,</span> qui scriviamo la descrizione
                </p>
              </div>

              <div class="elemdx_rectangle4 transition"></div>
              <div class="elemdx_rectangle5"></div>
              <div class="elemdx_rectangle6 transition">
                <img src="/src/assets/img_h1.png" />
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
    <div class="thirdDiv" id="third">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="content">
        <div class="partnersImgs">
          <div
            class="partnerImg transition"
            style="
              left: 15%;
              background-image: url(/src/assets/partners/logo1.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              right: 15%;
              top: 20%;
              background-image: url(/src/assets/partners/logo2.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              right: 3%;
              background-image: url(/src/assets/partners/logo3.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              right: 0%;
              top: 43%;
              background-image: url(/src/assets/partners/logo4.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              right: 10%;
              top: 75%;
              background-image: url(/src/assets/partners/logo5.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              top: 55%;
              background-image: url(/src/assets/partners/logo6.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              left: 5%;
              top: 25%;
              background-image: url(/src/assets/partners/logo7.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div
            class="partnerImg transition"
            style="
              left: 12%;
              top: 75%;
              background-image: url(/src/assets/partners/logo8.png);
              background-size: cover;
              background-position: center;
            "
          ></div>

          <div class="partnerImg3 transition" style="left: 0%"></div>
          <!--<div class="partnerImg4" style="left: 0%"></div>-->

          <div class="partnerImg5 transition" style="left: -5%; top: 30%"></div>

          <div class="partnerImg3 transition" style="left: -5%; top: 80%"></div>

          <div class="partnerImg3 transition" style="left: 80%; top: 50%"></div>

          <div class="partnerImg5 transition" style="left: 70%"></div>

          <div class="partnerImg5 transition" style="left: 95%; top: 25%"></div>

          <div class="partnerImg3 transition" style="left: 95%; top: 80%"></div>

          <div class="partnerImg5 transition" style="left: 15%; top: 55%"></div>

          <div class="partnerImg5 transition" style="left: 10%; top: 95%"></div>

          <div class="partnerImg5 transition" style="left: 25%; top: 75%"></div>

          <div class="partnerImg3 transition" style="left: 30%; top: 15%"></div>

          <div class="partnerImg3 transition" style="left: 70%; top: 75%"></div>

          <div class="partnerImg3 transition" style="left: 100%; top: 5%"></div>

          <div
            class="partnerImg3 transition"
            style="left: 100%; top: 60%"
          ></div>

          <div class="partnerImg5 transition" style="left: 85%; top: 95%"></div>

          <!--<div class="partnerImg2" style="left: 15%"></div>
          <div class="partnerImg2" style="right: 15%; top: 20%"></div>
          <div class="partnerImg2" style="right: 3%"></div>
          <div class="partnerImg2" style="right: 0%; top: 43%"></div>
          <div class="partnerImg2" style="right: 10%; top: 75%"></div>
          <div class="partnerImg2" style="top: 55%"></div>
          <div class="partnerImg2" style="left: 5%; top: 25%"></div>
          <div class="partnerImg2" style="left: 12%; top: 75%"></div>-->
        </div>
        <div class="first" style="display: inherit !important">
          <div class="title">
            <h2>Partners</h2>
            <p
              style="
                width: 70% !important;
                margin-left: auto;
                margin-right: auto;
              "
            >
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
            <a href="#first" class="flowSingleBtn">
              <span
                >Scopri di più
                <span
                  ><span
                    ><svg
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
                      /></svg></span></span
              ></span>
              <div class="liquid"></div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="third">
      <div class="flowSingle">
        <div class="flowSingleContent">
          <h2 class="flowSingleTitle">
            <span class="flowSingleTitleSpan">Partners</span>
            <br />
            <button class="btn2">
              <a href="#"
                >Scopri di più
                <span class="btnSpan"
                  ><span
                    ><svg
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
                      /></svg></span></span
              ></a>
            </button>
          </h2>
        </div>
      </div>
    </div>-->

    <!--<div class="partners">
      <div class="btnScrollR" @click="btnScrollDx()">></div>
      <div class="btnScrollL" @click="btnScrollSx()">></div>
      <div class="partnersContent">
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo1.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Studio Felli</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo3.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Sapienza Università di Roma</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo4.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Talent.com</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo6.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>In-recruiting</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo7.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>UPCommunication</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo8.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Cafiero Pezzali & Associati</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo5.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Aidp</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">Vedi Partner <span>></span></div>
          </div>
        </div>
        <div class="partner">
          <div class="bg1"></div>
          <div
            class="imagePartner"
            style="
              background-image: url(/src/assets/partners/logo2.png);
              background-size: cover;
              background-position: center;
            "
          ></div>
          <div class="bg2"></div>
          <div class="infoPartner">
            <h4>Atempo SpA</h4>
            <p class="desc">Descrizione del partner e cosa fa.</p>
            <div class="btnPartner">
              Vedi Partner
              <span
                ><span
                  ><svg
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
                    /></svg></span
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>-->

    <div class="feedbackDiv" id="feedback">
      <div class="content">
        <h2>I clienti dicono di noi</h2>
        <div class="feedbacks">
          <div class="feedback transition">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <p class="author">Chris Westra</p>
            <p class="worktitle">Senior Software Engineer</p>
          </div>
          <div class="feedback transition">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <p class="author">Chris Westra</p>
            <p class="worktitle">Senior Software Engineer</p>
          </div>
        </div>
        <div class="feedbacks">
          <div class="feedback transition">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <p class="author">Chris Westra</p>
            <p class="worktitle">Senior Software Engineer</p>
          </div>
          <div class="feedback transition">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <p class="author">Chris Westra</p>
            <p class="worktitle">Senior Software Engineer</p>
          </div>
        </div>
      </div>
    </div>
    <div class="fourthDiv" id="fourth">
      <div class="content">
        <div class="first">
          <div class="title">
            <h2>Resta in <span>contatto</span> con noi</h2>
            <p>
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>
            <a href="#first" class="flowSingleBtn2">
              <span
                >Scopri di più
                <span
                  ><span
                    ><svg
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
                      /></svg></span></span
              ></span>
              <div class="liquid"></div>
            </a>
          </div>
        </div>
        <div class="contentImage">
          <div class="square transition"></div>
          <div class="square2 transition"></div>
          <div class="square3 transition"></div>
          <div class="square4 transition"></div>
          <div class="rectangle transition">
            <h2>Assistenza H24</h2>
            <p>Siamo a tua completa disposizione.</p>
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
    margin-top: 5rem;
  }
  .mainTitle {
    height: 100%;
    width: 100%;
    padding-bottom: 3rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .mainTitle .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .content .first {
    display: flex;
    align-items: center;
    padding-bottom: 5rem;
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

  .secondDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .secondDiv .content {
    padding: 3rem;
    padding-top: 10rem;
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
    width: 87%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .second .flow {
    margin-top: 15rem;
    display: flex;
    width: 100%;
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
    margin: 2rem;
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
    margin-top: 5rem;
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

  a {
    position: relative;
    padding: 14px 26px;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    width: fit-content;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 3rem;
    cursor: pointer;
    font-family: "Planer";
    letter-spacing: 2px;
  }

  a span {
    position: relative;
    color: #fff;
    line-height: 20px;
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 600;
    z-index: 1;
  }

  a .liquid {
    position: absolute;
    top: -80px;
    left: 0;
    width: 200px;
    height: 200px;
    background: #0062f5;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
    transition: 0.5s;
  }

  a .liquid::after,
  a .liquid::before {
    content: "";
    width: 200%;
    height: 200%;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #000;
  }

  a .liquid::before {
    border-radius: 45%;
    background: rgba(20, 20, 20, 1);
    animation: animate 5s linear infinite;
  }

  a .liquid::after {
    border-radius: 40%;
    background: rgba(20, 20, 20, 0.5);
    animation: animate 10s linear infinite;
  }

  a:hover .liquid {
    top: -120px;
  }

  .flowSingleBtn {
    margin-left: auto;
    margin-right: auto;
  }

  .flowSingleBtn2 {
  }

  .thirdDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #010c18;
    padding-top: 10rem;
    background-image: url(https://github.githubassets.com/images/modules/site/security/grid2.svg);
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: 10%;
    top: 30%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 70%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(0, 119, 255, 0.9);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 75%;
    left: 80%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    top: 30%;
    opacity: 0.5;
    left: 85%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
  }

  .thirdDiv .content {
    padding: 5rem;
    padding-top: 10rem;
  }

  .thirdDiv .title h2 {
    color: #fff;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .thirdDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg, #2188ff 0%, #01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-feature-settings: "ss02" on, "ss01" on;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
  }

  .thirdDiv .title p {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    width: 100%;
    text-align: center;
    line-height: 24px;
    font-weight: 400;
  }

  .partnersImgs {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .partnerImg {
    width: 100px;
    height: 100px;
    background: #010712;
    border-radius: 16px;
    position: absolute;
  }

  .partnerImg2 {
    width: 105px;
    height: 105px;
    background: transparent;
    border: 2px solid #0a1e4375;
    border-radius: 16px;
    position: absolute;
  }

  .partnerImg3 {
    width: 75px;
    height: 75px;
    background: #0107124a;
    border-radius: 16px;
    position: absolute;
    background: rgba(0, 140, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
  }

  .partnerImg5 {
    width: 75px;
    height: 75px;
    background: #0107124a;
    border-radius: 16px;
    position: absolute;
    background: rgba(0, 255, 136, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
  }

  .partnerImg4 {
    width: 80px;
    height: 80px;
    background: transparent;
    border: 2px solid #b5b7ba;
    border-radius: 16px;
    position: absolute;
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
  .partners ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Track */
  .partners ::-webkit-scrollbar-track {
    border-radius: 9999px;
    background-color: transparent;
  }

  /* Handle */
  .partners ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
    border-radius: 9999px;
    background-clip: padding-box;
  }

  /* Handle on hover */
  .partners ::-webkit-scrollbar-thumb:hover {
    /*background: #555;*/
  }

  .partners {
  }

  .partnersContent {
    height: 100%;
    width: 100%;
    padding-bottom: 10rem;
    padding-right: 8rem;
    background-color: #fff;
    display: flex;
    height: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    position: relative;
  }

  .partnersContent.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .partners .btnScrollR {
    position: absolute;
    right: 4%;
    font-size: 30px;
    border: 1px solid #020917;
    font-weight: 700;
    top: 25%;
    background: white;
    border-radius: 20px;
    height: auto;
    z-index: 10;
    padding-top: 1.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 1.4rem;
    line-height: 0px;
    cursor: pointer;
  }

  .partners .btnScrollL {
    position: absolute;
    left: 4%;
    font-size: 30px;
    border: 1px solid #020917;
    font-weight: 700;
    top: 25%;
    background: white;
    border-radius: 20px;
    height: auto;
    z-index: 10;
    padding-top: 1.4rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 1.4rem;
    line-height: 0px;
    cursor: pointer;
    transform: rotate(180deg);
  }

  .partners .partner {
    border-radius: 36px;
    background-color: #6398ef29;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
  }

  .partners .partner .imagePartner {
    width: 18vw;
    height: 17vw;
    border-radius: 36px;
    margin: 1rem;
  }

  .partners .partner .infoPartner {
    padding: 2rem;
    padding-top: 1rem;
    border-radius: 46px;
    padding-bottom: 5rem;
  }

  .partners .partner .infoPartner h4 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 0.8rem;
    letter-spacing: 0.5px;
    color: #000;
  }

  .partners .partner .infoPartner .desc {
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 0.5px;
    color: #35393d;
    font-weight: 700;
  }

  .partners .partner .infoPartner .btnPartner {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.5px;
    color: #000;
    float: right;
    cursor: pointer;
    margin-top: 1.5rem;
  }

  .partners .partner .infoPartner .btnPartner span {
    margin-left: 1rem;
  }

  .fourthDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 3rem;
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
    width: 400px;
    height: fit-content;
    background: #fff;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(122, 122, 122, 0.089);
    position: absolute;
    top: 20%;
    right: 10%;
    padding: 5rem;
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
    padding-bottom: 10rem;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
    padding-top: 10rem;
  }

  .feedbackDiv .content {
    padding: 2rem;
  }

  .feedbackDiv h2 {
    color: #010712;
    font-size: 64px;
    font-weight: 800 !important;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .feedbackDiv .feedbacks {
    display: flex;
    margin-top: 4rem;
  }

  .feedbackDiv .feedbacks .feedback {
    background: #161b22;
    border-radius: 30px;
    padding: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    box-shadow: 0 0 0 1px #000, 0 30px 30px rgb(0 0 0 / 7%),
      0 15px 15px rgb(0 0 0 / 6%), 0 10px 8px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 4%), 0 2px 2px rgb(0 0 0 / 3%);
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
    font-weight: 600;
    font-size: 34px;
    line-height: 38px;
    margin-bottom: 2rem;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #fff;
    font-size: 24px;
    letter-spacing: 1px;
    line-height: 28px;
    margin-bottom: 0.1rem;
    font-weight: 300;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #8b949e;
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 18px;
    margin-bottom: 0rem;
    font-weight: 300;
  }
}

@media (max-width: 1023px) {
}

@media (min-width: 1920px) {
  .dynamicContent {
    margin-top: 15rem;
  }
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
