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

    let content = document.querySelector(".menu");
    content.style.width = "0%";
    content.style.opacity = "0";
    content.style.visibility = "hidden";
    content.style.display = "unset";
  },
  methods: {},
};
</script>

<!--<template>
  <div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="title">
        <h2>Posizioni aperte</h2>
        <p>Cerca tra i lavori attuali</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1680 40"
        class="position-absolute width-full z-1"
        style="margin-bottom: -1rem"
      >
        <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
      </svg>
    </div>

    <div class="main2">
      <div class="filters">
        <h2>Esplora</h2>
        <div class="content">
          <div class="filter" style="border-bottom: 4px solid #a100ff">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #0083ff">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #ff6300">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #006da5">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
        </div>
        <div class="content">
          <div class="filter" style="border-bottom: 4px solid #00b91e">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b90089">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b9b500">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b90000">
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
        </div>
      </div>

      <div class="positions">
        <h2>Tutti</h2>
        <div class="content1">
          <div class="position">
            <div class="content">
              <div class="logo"></div>
              <div class="desc">
                <h3>Web developer</h3>
                <p class="description">
                  Sei appassionato di informatica e vuoi acquisire competenze
                  nel settore? la specializzazione digital & technologies.
                </p>

                <div class="info">
                  <p>• &nbsp;Milano</p>
                  <p>• &nbsp;Tempo indeterminato</p>
                  <a href="" class="btn btn1">Apri offerta ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="position">
            <div class="content">
              <div class="logo"></div>
              <div class="desc">
                <h3>Web developer</h3>
                <p class="description">
                  Sei appassionato di informatica e vuoi acquisire competenze
                  nel settore? la specializzazione digital & technologies.
                </p>

                <div class="info">
                  <p>• &nbsp;Milano</p>
                  <p>• &nbsp;Tempo indeterminato</p>
                  <a href="" class="btn btn1">Apri offerta ></a>
                </div>
              </div>
            </div>
          </div>
          <div class="position">
            <div class="content">
              <div class="logo"></div>
              <div class="desc">
                <h3>Web developer</h3>
                <p class="description">
                  Sei appassionato di informatica e vuoi acquisire competenze
                  nel settore? la specializzazione digital & technologies.
                </p>

                <div class="info">
                  <p>• &nbsp;Milano</p>
                  <p>• &nbsp;Tempo indeterminato</p>
                  <a href="" class="btn btn1">Apri offerta ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>-->

<template>
  <div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="title">
        <h2>Posizioni aperte</h2>
        <p>Cerca tra i lavori attuali</p>
      </div>
    </div>

    <div class="main2">
      <div class="cols">
        <div class="col1">
          <img class="avatar" src="/src/assets/avatar.png" />
          <img class="avatar" src="/src/assets/avatar2.png" />
        </div>
        <div class="col3"></div>
      </div>
      <div class="filters">
        <h2>Esplora</h2>
        <div class="content">
          <div class="filter" style="border-bottom: 4px solid #a100ff">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #0083ff">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #ff6300">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #006da5">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
        </div>
        <div class="content">
          <div class="filter" style="border-bottom: 4px solid #00b91e">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b90089">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b9b500">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
          <div class="filter" style="border-bottom: 4px solid #b90000">
            <div class="blur"></div>
            <h3>Web Design</h3>
            <p>Descrizione di web design.</p>
            <p class="icon">></p>
          </div>
        </div>
      </div>

      <div class="positions">
        <h2>Tutti</h2>
        <div class="content1">
          <div class="position">
            <div class="blur"></div>
            <div class="content">
              <div
                class="header"
                style="
                  background-image: url(/src/assets/web_dev.png);
                  background-size: cover;
                "
              ></div>
              <div class="desc">
                <h3>Web Developer</h3>
                <p>
                  Sei appassionato di informatica e vuoi acquisire competenze
                  nel settore? la specializzazione digital & technologies.
                </p>
              </div>
              <div class="info">
                <p>• &nbsp;Milano</p>
                <p>• &nbsp;Tempo indeterminato</p>
              </div>
              <div class="">
                <div class="bottom">Apri ora <span>></span></div>
                <a href=""><div class="bottom2">Nuovo</div></a>
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

  .blur {
    width: 100%;
    left: 0;
    height: 100%;
    position: absolute;
    backdrop-filter: blur(12px);
    top: 0;
    border-radius: 10px;
  }

  .cols .col1 {
    position: fixed;
  }

  .avatar {
    width: 50%;
  }

  .main {
    background: #010b15;
    padding-top: 8rem;
    position: relative;
  }

  .title {
  }

  .title h2 {
    font-size: 44px;
    color: #fff;
    line-height: 48px;
    font-weight: 700;
    text-align: center;
  }

  .title p {
    text-align: center;
    font-size: 18px;
    color: #fff;
  }

  .main2 {
    background: #010b15;
    padding-top: 1rem;
  }

  .filters {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    margin-bottom: 4rem;
    width: 60%;
  }

  .filters .content {
    display: flex;
    margin-bottom: 1rem;
  }

  .filters h2 {
    font-size: 34px;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #fff;
  }

  .filters .filter {
    padding: 2rem;
    background: rgba(78, 78, 78, 0.267);
    border-radius: 10px;
    width: 25%;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-left: 1rem;
    cursor: pointer;
    transition: 0.5s all;
  }

  .filters .filter:hover {
  }

  .filter h3 {
    font-size: 34px;
    color: #fff;
    line-height: 36px;
    width: 40%;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .filter p {
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    font-weight: 700;
  }

  .filter .icon {
    font-size: 32px;
    color: #629197;
    line-height: 24px;
    font-weight: 700;
    text-align: right;
    margin-top: 1rem;
  }

  .positions {
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
    width: 60%;
  }

  .positions h2 {
    font-size: 34px;
    margin-bottom: 1rem;
    font-weight: 700;
    color: #fff;
  }

  .positions .content1 {
    display: flex;
  }

  .positions .position {
    background: rgba(38, 43, 49, 0.486);
    margin-bottom: 2rem;
    width: 50%;
    float: left;
    border-radius: 20px;
    padding: 1rem;
  }

  .positions .position .header {
    padding: 1rem;
    border-radius: 20px;
    background: #006bc2;
    height: 250px;
  }

  .positions .position .header h3 {
    color: #fff;
    font-size: 24px;
    font-weight: 600;
    line-height: 28px;
  }

  .positions .position .header p {
    color: #fff;
    font-size: 16px;
    line-height: 20px;
  }

  .positions .position .content .desc {
    padding: 1rem;
  }

  .positions .position .content .desc h3 {
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    font-weight: 700;
  }

  .positions .position .content .desc h4 {
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300;
  }

  .positions .position .content .desc p {
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    margin-top: 0.5rem;
  }

  .positions .position .content .info {
    padding: 1rem;
  }

  .positions .position .content .info p {
    margin-right: 1rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: 1px;
  }

  .positions .position .bottom {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #008cff;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    float: right;
    transition: 0.5s all;
    letter-spacing: 1.5px;
  }

  .positions .position .bottom span {
    margin-left: 0.5rem;
  }

  .positions .position .bottom:hover {
    background: #fff;
    color: #008cff;
  }

  .positions .position .bottom2 {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #11ca00;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    border-radius: 16px;
    width: fit-content;
    float: right;
    margin-right: 1rem;
    transition: 0.5s all;
    letter-spacing: 1.5px;
  }
}

@media (max-width: 1023px) {
}
</style>
