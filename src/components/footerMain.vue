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
      <div class="col-logo">logo</div>
      <div class="col">
        <div class="title">Azienda</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
      </div>
      <div class="col">
        <div class="title">Azienda</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
      </div>
      <div class="col">
        <div class="title">Azienda</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
        <div class="link">Clicca qui</div>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="link">Made by Loris Caputo</div>
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

* {
  /*font-family: "Rogan-Regular";*/
  font-family: "Planer", sans-serif;
}

@media (min-width: 1024px) {
  .footer {
    width: 100%;
    position: absolute;
    bottom: -20%;
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
    border-top-right-radius: 60px;
    border-top-left-radius: 60px;
  }

  .footer .content {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
  }

  .footer .content .col-logo {
    width: 50%;
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
  }

  .content .col .link {
    color: white;
    font-size: 18px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }

  .footer .bottom {
    padding-bottom: 4rem;
    padding-top: 2rem;
    margin-left: 10rem;
    margin-right: 10rem;
    display: flex;
    border-top: 2px solid rgba(82, 82, 82, 0.315);
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
