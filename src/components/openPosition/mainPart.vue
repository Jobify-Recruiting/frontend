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
  methods: {},
};
</script>
<template>
  <div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="cols">
        <div class="col2 colImage">
          <img class="avatar" src="/src/assets/avatartech.png" />
        </div>
        <div class="col2 colPositions">
          <div class="title">
            <h2>Posizioni aperte</h2>
            <p>Cerca tra i lavori attuali</p>
          </div>
          <div class="search">
            <div class="searchKey">
              <input
                id="nav"
                class="input searchBar"
                type="text"
                name="searchbar"
                placeholder="Cerca parola chiave"
              />
              <span>Cerca</span>
            </div>
            <div class="searchLocation">
              <input
                id="nav"
                class="input searchBar"
                type="text"
                name="searchbar"
                placeholder="Cerca luogo"
              />
              <span>Cerca</span>
            </div>
          </div>
          <div class="filters">
            <h2>Esplora</h2>
            <div class="content">
              <div class="filter" style="border-bottom: 4px solid #a100ff">
                <div class="blur"></div>
                <h4>01</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #0083ff">
                <div class="blur"></div>
                <h4>02</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #ff6300">
                <div class="blur"></div>
                <h4>03</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #006da5">
                <div class="blur"></div>
                <h4>04</h4>
                <h3>Web Design</h3>
              </div>
            </div>
            <div class="content transition">
              <div class="filter" style="border-bottom: 4px solid #00b91e">
                <div class="blur"></div>
                <h4>05</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #b90089">
                <div class="blur"></div>
                <h4>06</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #b9b500">
                <div class="blur"></div>
                <h4>07</h4>
                <h3>Web Design</h3>
              </div>
              <div class="filter" style="border-bottom: 4px solid #b90000">
                <div class="blur"></div>
                <h4>08</h4>
                <h3>Web Design</h3>
              </div>
            </div>
          </div>
          <!--<div class="ctaCV">
            <div class="cols">
              <div class="col col-padding">
                <h3>
                  Non hai trovato <span>offerte in linea</span> con le tue
                  aspettative?
                </h3>
                <a href=""
                  ><div class="button">Manda il tuo CV <span>></span></div></a
                >
              </div>
              <div
                class="col"
                style="
                  background-image: url(/src/assets/img_h1.png);
                  background-size: cover;
                "
              ></div>
            </div>
          </div>-->

          <div
            class="ctaCV transition"
            style="background: rgb(161 161 161 / 10%)"
          >
            <div class="blur"></div>
            <div class="cols">
              <div class="col col-padding">
                <h3 style="color: #fff">
                  Non hai trovato <span>offerte in linea</span> con le tue
                  aspettative?
                </h3>
                <a href=""
                  ><div class="button">Manda il tuo CV <span>></span></div></a
                >
              </div>
              <div
                class="col"
                style="
                  background-image: url(/src/assets/img_h1.png);
                  background-size: cover;
                "
              ></div>
            </div>
          </div>

          <div class="positions transition">
            <h2>Tutti</h2>
            <div class="filtersPositions">
              <div class="blur"></div>
              <div class="filterPosition">
                Città
                <p>></p>
              </div>

              <div class="filterPosition">
                Data
                <p>></p>
              </div>

              <div class="filterPosition">
                Tipo di Contratto
                <p>></p>
              </div>
            </div>
            <div class="content1">
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
              <div class="position">
                <div class="blur"></div>
                <div class="content">
                  <div class="left">
                    <h2>Web developer</h2>
                    <p>
                      Sei appassionato di informatica e vuoi acquisire
                      competenze nel settore? la specializzazione digital &
                      technologies.
                    </p>
                    <div class="info">
                      <p>• &nbsp;Milano</p>
                      <p>• &nbsp;Tempo indeterminato</p>
                      <p>• &nbsp;1.500 € / mese</p>
                    </div>
                  </div>
                  <div class="right">
                    <div class="button2">Nuovo</div>
                    <a href=""
                      ><div class="button">Apri ora <span>></span></div></a
                    >
                  </div>
                </div>
              </div>
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
  font-family: "planer", sans-serif;
}

@media (min-width: 1024px) {
  .glow {
    position: fixed;
    width: 5vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(46, 116, 255, 0.9);
    z-index: 10;
  }

  .glow2 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 15%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 255, 196, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(210, 255, 46, 0.9);
    z-index: 10;
  }

  .glow3 {
    position: fixed;
    width: 5vw;
    right: -8%;
    top: 35%;
    width: 10vw;
    transform: rotate(90deg);
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    -moz-box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    box-shadow: 0px 0px 105px 45px rgba(178, 46, 255, 0.9);
    z-index: 10;
  }

  .glow4 {
    position: fixed;
    width: 5vw;
    left: 45%;
    top: 101%;
    width: 10vw;
    opacity: 0.5;
    -webkit-box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    -moz-box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    box-shadow: 0px 0px 105px 45px rgba(46, 137, 255, 0.5);
    z-index: 1;
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
    background: #010b15;
    padding-top: 8rem;
    position: relative;
  }

  .title {
    text-align: left;
  }

  .title h2 {
    font-size: 48px;
    color: #fff;
    line-height: 48px;
    font-weight: 700;
  }

  .title p {
    font-size: 18px;
    color: #fff;
  }

  .main2 {
    background: #010b15;
    padding-top: 1rem;
  }

  .filters {
    margin-bottom: 4rem;
    width: 92%;
    margin-top: 1rem;
  }

  .filters .content {
    display: flex;
    margin-bottom: 1.5rem;
  }

  .filters h2 {
    font-size: 34px;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #fff;
  }

  .filters .filter {
    padding: 0rem;
    background: rgb(161 161 161 / 10%);
    border-radius: 10px;
    width: 25%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.5s all;
  }

  .filters .filter:hover {
    background: rgb(255 255 255 / 0%);
  }

  .blur {
    width: 100%;
    left: 0;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(12px);
    top: 0;
    border-radius: 10px;
  }

  .filters .filter:hover {
  }

  .filter h3 {
    font-size: 34px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 2rem;
    color: #fff;
    line-height: 36px;
    width: 100%;
    font-weight: 700;
    margin-top: 2rem;
  }
  .filter h4 {
    font-size: 24px;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 1.5rem;
    color: #fff;
    line-height: 36px;
    width: 100%;
    text-align: right;
    margin-bottom: 1rem;
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
  }

  .positions .content1 {
  }

  .positions .position {
    background: rgba(38, 43, 49, 0.486);
    margin-bottom: 2rem;
    width: 90%;
    float: left;
    border-radius: 20px;
    padding: 1.5rem;
    border-left: 4px solid #008cff;
  }

  .position .content {
    display: flex;
    align-items: center;
  }

  .position .left {
    width: 78%;
  }

  .position .right {
    margin-left: 1rem;
  }

  .position h2 {
    font-size: 34px;
    line-height: 36px;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: #fff;
  }

  .position p {
    color: #fff;
    line-height: 24px;
    line-height: 26px;
  }

  .positions .position .content .info {
    padding-top: 1rem;
    display: flex;
    margin-bottom: 0rem !important;
  }

  .positions .position .content .info p {
    margin-right: 1rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
    margin-bottom: 0rem !important;
  }

  .positions .position .button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    float: right;
    transition: 0.5s all;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .positions .position .button span {
    margin-left: 0.4rem;
  }

  .positions .position .button:hover {
    background: #003585;
  }

  .positions .position .button2 {
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 1.2rem;
    padding-right: 1.2rem;
    background: #11ca00;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 12px;
    width: fit-content;
    transition: 0.5s all;
    letter-spacing: 1.5px;
    margin-left: auto;
    margin-bottom: 1rem;
  }

  .search {
    display: flex;
    width: 100%;
    margin-top: 3rem;
  }

  .searchKey {
    width: 40%;
    margin-right: 4rem;
  }

  .searchKey input {
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

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  input:focus {
    border: none;
    outline: none;
  }

  .searchKey span {
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

  .ctaCV {
    width: 90%;
    height: 300px;
    background-color: white;
    border-radius: 12px;
    margin-bottom: 4rem;
  }

  .ctaCV .cols {
    height: 100%;
  }

  .ctaCV .col-padding {
    padding: 3rem;
  }

  .ctaCV .col h3 {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
  }

  .ctaCV .col h3 span {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    color: #0062f5;
  }

  .ctaCV .col {
    width: 50%;
    height: 100%;
  }

  .ctaCV .button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    letter-spacing: 2px;
    margin-top: 2rem;
    text-transform: uppercase;
  }

  .ctaCV .button span {
    margin-left: 0.4rem;
  }

  .ctaCV .button:hover {
    background: #003585;
  }

  .filtersPositions {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: rgb(161 161 161 / 10%);
    width: 90%;
    padding: 1rem;
    border-radius: 12px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 16;
  }

  .filtersPositions .filterPosition {
    color: white;
    font-size: 18px;
    margin-right: 3rem;
    display: flex;
    cursor: pointer;
    align-items: center;
  }

  .filtersPositions .filterPosition p {
    transform: rotate(90deg);
    margin-left: 1.2rem;
    font-weight: 100;
    margin-top: 0 !important;
    margin-bottom: 0rem !important;
  }
}

@media (max-width: 1023px) {
}
</style>
