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
  },
  methods: {},
};
</script>

<template>
  <div>
    <div class="main">
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
  .main {
    background: #010b15;
    padding-top: 8rem;
  }

  .title {
    margin-bottom: 5rem;
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
    background: #fff;
    padding-top: 3rem;
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
  }

  .filters .filter {
    padding: 2rem;
    background: rgba(255, 255, 255, 0.267);
    border-radius: 10px;
    width: 200px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-left: 1rem;
    cursor: pointer;
    transition: 0.5s all;
  }

  .filters .filter:hover {
    transform: scale(1.1);
  }

  .filter h3 {
    font-size: 26px;
    color: #010712;
    line-height: 30px;
    width: 40%;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .filter p {
    font-size: 16px;
    color: #627597;
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
    margin-bottom: 2rem;
  }

  .positions h2 {
    font-size: 34px;
    margin-bottom: 1rem;
    font-weight: 700;
  }

  .positions .position {
    border-bottom: 2px solid #8c909481;
  }

  .positions .position .content {
    display: flex;
    padding-bottom: 1rem;
  }

  .positions .position .content .logo {
    width: 70px;
    height: 70px;
    background: rgb(0 104 255 / 37%);
    border-radius: 9px;
  }

  .positions .position .content .desc {
    width: 90%;
    margin-left: 1rem;
  }

  .positions .position .content .desc h3 {
    font-size: 24px;
    font-weight: 600;
  }
  .positions .position .content .description {
    width: 90%;
  }

  .positions .position .content .desc p {
    font-size: 16px;
  }

  .positions .position .content .info {
    display: flex;
  }

  .positions .position .content .info p {
    margin-right: 1rem;
  }

  .positions .position .content .info .btn {
    margin-left: auto;
    cursor: pointer;
  }

  .positions .position .content .info a {
    text-decoration: none;
    font-weight: 600;
    color: #010712;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    border: 1px solid #010712;
    border-radius: 25rem;
    margin-top: 0.5rem;
    transition: 0.5s all;
  }

  .positions .position .content .info a:hover {
    color: #fff;
    background-color: #010712;
  }
}

@media (max-width: 1023px) {
}
</style>
