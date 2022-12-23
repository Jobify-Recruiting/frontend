<script>
export default {
  name: "footer",
  components: {},
  data() {
    return {};
  },
  mounted() {
    const d = new Date();
    let year = d.getFullYear();
    document.getElementById("year").innerHTML = year;
  },
  methods: {},
};
</script>

<template>
  <div class="footer">
    <div class="content">
      <div class="col-logo">
        <img src="/src/assets/logo/small_white.png" />
        <div class="title2">Iscriviti alla newsletter</div>
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
        <div class="checkbox">
          <input type="checkbox" />
          <p>
            Accetto i
            <router-link to="">&nbsp;termini e condizioni.</router-link>
          </p>
        </div>
      </div>
      <div class="col">
        <div class="title">Servizi</div>
        <router-link to="/openposition">
          <div class="link">Offerte di lavoro</div></router-link
        >
        <router-link to="/companies">
          <div class="link">Sei un'azienda?</div></router-link
        >
        <router-link to="/workers">
          <div class="link">Servizi offerti</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Piattaforma</div>
        <router-link to="/partnerships">
          <div class="link">Partnerships</div></router-link
        >
        <router-link to="/journal">
          <div class="link">Journal</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Azienda</div>
        <router-link to="/about">
          <div class="link">Chi siamo</div></router-link
        >
        <router-link to="/stories">
          <div class="link">Storie dei talenti</div></router-link
        >
        <router-link to="/workwithus">
          <div class="link">Lavora con noi</div></router-link
        >
        <router-link to="/contact">
          <div class="link">Contattaci</div></router-link
        >
      </div>
      <div class="col">
        <div class="title">Sedi</div>
        <router-link to="/contact"> <div class="link">Milano</div></router-link>
      </div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="link">
          <span id="year"></span> &nbsp;&nbsp;•&nbsp;&nbsp; Jobify Recruiting Srl. (Aut. Min.
          Prot. N.F205S530526 del 26.07.2022)
        </div>
        <div class="link">Privacy Policy</div>
        <div class="link">Termini & Condizioni</div>
      </div>
      <div class="right">
        <div class="link">Facebook</div>
        <div class="link">Linkedin</div>
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
  /*font-family: "planer", sans-serif;*/
}

@media (min-width: 1024px) {
  .footer {
    width: 100%;
    background: linear-gradient(
      211deg,
      #0c2550,
      #071b38,
      rgb(1 10 20),
      #0c2550
    );
    background-size: 300%;
    overflow: visible;
    animation: animated_text 5s ease-in-out infinite;
    -moz-animation: animated_text 5s ease-in-out infinite;
    -webkit-animation: animated_text 5s ease-in-out infinite;
    /*border-top-right-radius: 60px;
    border-top-left-radius: 60px;*/
    position: absolute;
    z-index: 6;
  }

  .footer .content {
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    display: flex;
  }

  .footer .content .col-logo {
    width: 30%;
  }

  .col-logo img {
    width: 35px;
  }

  .footer .content .col {
    width: 27%;
    margin-left: 2rem;
  }

  .footer .checkbox {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .footer .checkbox input {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .footer .checkbox p {
    margin-bottom: 0 !important;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
  }

  .col-logo .title2 {
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-top: 3rem;
    margin-bottom: 1rem;
  }

  .content .col .title {
    color: white;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 1.5rem;
  }

  .content .col .link {
    color: rgb(222 222 222);
    font-size: 14px;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    letter-spacing: 1px;
    font-weight: 300;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .content .col .link:hover {
    color: #fff;
  }

  .footer .bottom {
    padding-bottom: 4rem;
    padding-top: 2rem;
    margin-left: 5rem;
    margin-right: 5rem;
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
    font-weight: 400;
    letter-spacing: 1.5px;
    font-size: 12px;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
  }

  .input {
    width: fit-content;
    margin-right: 0.5rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
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
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
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
