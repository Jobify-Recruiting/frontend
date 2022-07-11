<script>
export default {
  name: "footer",
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="col-logo"><img src="/src/assets/logo/small_white.png" /></div>
      <div class="col">
        <div class="title">Servizi</div>
        <router-link to="/openposition">
          <div class="link">Posizioni aperte</div></router-link
        >
        <router-link to="/companies">
          <div class="link">Aziende</div></router-link
        >
        <router-link to="/workers">
          <div class="link">Lavoratori</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Piattaforma</div>
        <router-link to="/technologies">
          <div class="link">Tecnologie</div></router-link
        >
        <router-link to="/partnerships">
          <div class="link">Partnerships</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Azienda</div>
        <router-link to="/about">
          <div class="link">Chi siamo</div></router-link
        >
        <router-link to="/journal">
          <div class="link">Journal</div></router-link
        >
        <router-link to="/workwithus">
          <div class="link">Lavora con noi</div></router-link
        >
        <router-link to="/contact">
          <div class="link">Contattaci</div></router-link
        >
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="link">
          Made by 2022. &nbsp;&nbsp;•&nbsp;&nbsp; Tutti i diritti riservati.
        </div>
        <div class="link">Privacy Policy</div>
        <div class="link">Termini & Condizioni</div>
      </div>
      <div class="right">
        <div class="link">Facebook</div>
        <div class="link">Linkedin</div>
        <div class="link">Instagram</div>
        <div class="link">Twitter</div>
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
  .footer {
    width: 100%;
    background: linear-gradient(
      211deg,
      #010712,
      #071b38,
      rgb(1 10 20),
      #010712
    );
    background-size: 300%;
    overflow: visible;
    animation: animated_text 5s ease-in-out infinite;
    -moz-animation: animated_text 5s ease-in-out infinite;
    -webkit-animation: animated_text 5s ease-in-out infinite;
    /*border-top-right-radius: 60px;
    border-top-left-radius: 60px;*/
    position: absolute;
  }

  .footer .content {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
  }

  .footer .content .col-logo {
    width: 30%;
  }

  .col-logo img {
    width: 60px;
  }

  .footer .content .col {
    width: 25%;
  }

  .content .col .title {
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 5px;
    margin-bottom: 1.5rem;
  }

  .content .col .link {
    color: white;
    font-size: 18px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    letter-spacing: 1px;
  }

  .footer .bottom {
    padding-bottom: 4rem;
    padding-top: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    display: flex;
    border-top: 2px solid #0a1e4375;
    font-size: 13px;
    letter-spacing: 1px;
  }

  .footer .bottom .left {
    display: flex;
  }

  .footer .bottom .right {
    display: flex;
    margin-left: auto;
  }

  .bottom .link {
    margin-right: 1rem;
    color: rgb(199, 199, 199);
    font-weight: 700;
  }
}

@media (max-width: 1023px) {
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
</style>
