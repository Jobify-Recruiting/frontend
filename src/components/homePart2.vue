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

    function scrollFunction() {
      if (
        document.body.scrollTop > 1950 ||
        document.documentElement.scrollTop > 1950
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
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".feedbacks");
      const itemWidth = content.querySelector(".feedback").clientWidth;
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
              <span>Che servizi offre Jobify</span>
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
              <a href="#first"
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
            <div class="elemdx transition">
              <div class="image"></div>
            </div>
          </div>

          <!--<div class="numbers transition">
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
          </div>-->

          <div class="flow">
            <div class="elemsx" style="padding-bottom: 10rem">
              <div class="image2 transition"></div>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image">
                <span>Qui scriviamo la descrizione riferito</span> al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>

              <p class="elemP_image">
                <span
                  >Qui scriviamo la descrizione riferito al testo superiore, Qui
                  scriviamo la descrizione riferito al</span
                >
                testo superiore, Qui scriviamo la descrizione riferito al testo
                superiore
              </p>
              <div class="elemP_point2 transition"></div>
              <p class="elemP_image">
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
              <h2 class="elemH2" id="text2">
                Guarda il nostro workflow, come lavoriamo ogni<span>
                  giorno con i nostri clienti</span
                >
              </h2>
              <p class="elemP">
                <span style="color: #010c18; font-weight: 500"
                  >Qui scriviamo la descrizione riferito al testo
                  superiore,</span
                >
                Qui scriviamo la descrizione riferito al testo superiore, Qui
                scriviamo la descrizione riferito al testo superiore
              </p>

              <a href="#first"
                ><button class="btn" style="margin-left: 1.5rem">
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
        </div>
      </div>
    </div>
    <div class="fifthDiv">
      <div class="adviser">
        <div class="col">
          <h3>
            <span>Segui le Storie</span> di Jobify Recruiting per scoprire tutte
            le esperienze dei nostri clienti
          </h3>
          <router-link to="/stories"
            ><button class="btn">
              Storie
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
        <div class="col_image"></div>
      </div>
    </div>
    <div class="thirdDiv" id="third">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="glow5"></div>
      <div class="glow6"></div>
      <div class="glow7"></div>
      <div class="content">
        <div class="partnersImgs">
          <a
            href=""
            class="partnerImg transition"
            style="
              left: 32%;
              top: -15%;
              background-image: url(/src/assets/partners/logo1.png);
            "
          >
            <div class="" style=""></div>
          </a>

          <a
            href=""
            class="partnerImg transition"
            style="
              right: 16%;
              top: 4%;
              background-image: url(/src/assets/partners/logo2.png);
            "
          >
            <div class="" style=""></div>
          </a>

          <a
            href=""
            class="partnerImg transition"
            style="
              right: 32%;
              top: -18%;
              background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo3.png);
            "
          >
            <div class="" style=""></div>
          </a>

          <a
            href=""
            class="partnerImg transition"
            style="
              right: 12%;
              top: 43%;
              background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/partners/logo4.png);
            "
          >
            <div class="" style=""></div>
          </a>

          <a
            href=""
            class="partnerImg"
            style="
              right: 22%;
              top: 77%;
              background-image: url(/src/assets/partners/logo5.png);
            "
          >
            <div class="" style=""></div>
          </a>

          <a
            href=""
            class="partnerImg"
            style="
              top: 60%;
              left: 18%;
              background-image: url(/src/assets/partners/logo6.png);
            "
            ><div class="" style=""></div
          ></a>

          <a
            href=""
            class="partnerImg transition"
            style="
              left: 13%;
              top: 14%;
              background-image: url(/src/assets/partners/logo7.png);
            "
            ><div class="" style=""></div
          ></a>

          <a
            href=""
            class="partnerImg"
            style="
              left: 41%;
              top: 87%;
              background-image: url(/src/assets/partners/logo8.png);
            "
            ><div class="" style=""></div
          ></a>
        </div>
        <div class="first" style="display: inherit !important">
          <div class="title">
            <h2>Partners</h2>
            <p
              style="
                width: 50% !important;
                margin-left: auto;
                margin-right: auto;
                color: #fff !important;
              "
            >
              Jobify, la tua ricerca e selezione, la tua ricerca e selezione, la
              tua ricerca e selezione, la tua ricerca e selezione, la tua
              ricerca e selezione
            </p>

            <div class="partnersButton">
              <a href="#first"
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
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <div class="feedbackInfo">
              <div class="feedbackInfoPhoto"></div>
              <div class="feddbackData">
                <p class="author">Chris Westra</p>
                <p class="worktitle">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <div class="feedbackInfo">
              <div class="feedbackInfoPhoto"></div>
              <div class="feddbackData">
                <p class="author">Chris Westra</p>
                <p class="worktitle">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <div class="feedbackInfo">
              <div class="feedbackInfoPhoto"></div>
              <div class="feddbackData">
                <p class="author">Chris Westra</p>
                <p class="worktitle">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <div class="feedbackInfo">
              <div class="feedbackInfoPhoto"></div>
              <div class="feddbackData">
                <p class="author">Chris Westra</p>
                <p class="worktitle">Senior Software Engineer</p>
              </div>
            </div>
          </div>
          <div class="feedback">
            <p class="quote">"</p>
            <h3>
              Unreal—Codespaces had me running a server in minutes, and that
              never happens as a new hire. What an awesome first week!
            </h3>
            <div class="feedbackInfo">
              <div class="feedbackInfoPhoto"></div>
              <div class="feddbackData">
                <p class="author">Chris Westra</p>
                <p class="worktitle">Senior Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fifthDiv">
      <div class="adviser">
        <div class="col">
          <h3>
            <span>Iscriviti oggi alla newsletter</span> di Jobify Recruiting per
            restare aggiornato sul mondo hr
          </h3>
          <div class="divInput">
            <div class="input">
              <input
                id="nav"
                class="input"
                type="text"
                name="nickname"
                placeholder="Inserisci la tua email"
              />
            </div>
            <router-link to="/newsletter"
              ><button class="btn">Iscriviti</button></router-link
            >
          </div>
        </div>
        <div class="col_image"></div>
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
            <a href="#first"
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
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .secondDiv .content {
    padding: 3rem;
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
    margin-top: 10rem;
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

  /*a {
    position: relative;
    padding: 14px 26px;
    display: block;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    background: #0062f5;
    width: fit-content;
    overflow: hidden;
    border-radius: 20px;
    margin-top: 3rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }

  a span {
    position: relative;
    color: #fff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
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
  }*/

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
    background-image: url(/src/assets/glob.png);
    background-size: cover;
    background-position: center;
    background-size: 60%;
    background-repeat: no-repeat;
  }

  .glow {
    position: absolute;
    width: 5vw;
    opacity: 0.5;
    left: -5%;
    top: 10%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
  }

  .glow2 {
    position: absolute;
    width: 5vw;
    top: 23%;
    left: -5%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow3 {
    position: absolute;
    width: 5vw;
    top: 40%;
    right: -4%;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(162, 0, 255, 0.9);
  }

  .glow4 {
    position: absolute;
    width: 5vw;
    top: 55%;
    opacity: 0.5;
    right: -4%;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(4, 0, 255, 0.9);
  }

  .glow5 {
    position: absolute;
    width: 5vw;
    bottom: 0%;
    opacity: 0.5;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px #2eff9de6;
    -moz-box-shadow: 0px 0px 105px 45px #2eff9de6;
    box-shadow: 0px 0px 105px 45px #2eff9de6;
  }

  .glow6 {
    position: absolute;
    width: 5vw;
    top: 0%;
    opacity: 0.5;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px #2eff9de6;
    -moz-box-shadow: 0px 0px 105px 45px #2eff9de6;
    box-shadow: 0px 0px 105px 45px #2eff9de6;
  }

  .glow7 {
    position: absolute;
    width: 5vw;
    top: 60%;
    opacity: 0.5;
    left: 50%;
    -webkit-box-shadow: 0px 0px 105px 45px #2eff9de6;
    -moz-box-shadow: 0px 0px 105px 45px #2eff9de6;
    box-shadow: 0px 0px 105px 45px #2eff9de6;
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
    width: 135px;
    height: 135px;
    /*background: rgba(162, 0, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(162 0 255 / 17%);*/
    background: #ffffff2b;
    -webkit-box-shadow: 0px 0px 133px 17px #005dff2b;
    -moz-box-shadow: 0px 0px 133px 17px #005dff2b;
    box-shadow: 0px 0px 133px 17px #005dff2b;
    border: 1px solid #fff;
    padding: 1rem;
    border-radius: 25rem;
    position: absolute;
    z-index: 10;
    background-repeat: no-repeat;
    background-size: 80%;
    background-position: center;
    transition: all 0.3s ease-out;
  }

  .partnerImg:hover {
    transform: scale(2);
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
    width: 45px;
    height: 45px;
    background: #0107124a;
    border-radius: 25rem;
    position: absolute;
    background: rgba(0, 140, 255, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 140, 255, 0.17);
  }

  .partnerImg5 {
    width: 45px;
    height: 45px;
    background: #0107124a;
    border-radius: 25rem;
    position: absolute;
    background: rgba(0, 255, 136, 0.17);
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 174, 0, 0.17);
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
    padding-bottom: 8rem;
    width: 100%;
    background-color: #fff;
    padding-top: 10rem;
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
    margin-top: 2rem;
    height: 100%;
    width: 100%;
    padding-bottom: 0rem;
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
    background: #161b22;
    border-radius: 30px;
    padding: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
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
    font-size: 30px;
    line-height: 34px;
    margin-bottom: 2rem;
    width: 40vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #fff;
    font-size: 20px;
    letter-spacing: 1px;
    line-height: 24px;
    margin-bottom: 0rem;
    font-weight: 300;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #8b949e;
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
    padding: 3rem;
    padding-bottom: 8rem;
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
    width: 90%;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -0.04em;
    font-weight: 600;
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
