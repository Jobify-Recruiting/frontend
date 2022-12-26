<script>
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      scrollPosition: null,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    openMenu() {
      let content = document.querySelector(".menu");
      content.style.width = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";
    },

    closeMenu() {
      let content = document.querySelector(".menu");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    call_btn() {
      document.querySelector(".calendly-badge-content").click();
    },
    openWorkers() {
      let content = document.querySelector(".menuWorkers");
      content.style.width = "12%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";

      let content2 = document.querySelector(".menuWorkersBG");
      content2.style.width = "100%";
      content2.style.opacity = "1";
      content2.style.visibility = "visible";
      content2.style.display = "inline";
    },
    closeWorkers() {
      let content = document.querySelector(".menuWorkers");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      let content2 = document.querySelector(".menuWorkersBG");
      content2.style.width = "0%";
      content2.style.opacity = "0";
      content2.style.visibility = "hidden";
      content2.style.display = "unset";
    },
  },
};
</script>

<template>
  <header>
    <div
      class="nav"
      :class="{
        change_color: scrollPosition > 50,
        change_color2: scrollPosition < 50,
      }"
    >
      <div class="content">
        <router-link to="/">
          <div class="logo">
            <img src="/src/assets/logo/white.png" />
          </div>
        </router-link>
        <div class="center">
          <router-link to="/"><div class="link">Home</div></router-link>
          <router-link to="/about"
            ><div class="link">Chi siamo</div></router-link
          >
          <router-link to="/openposition"
            ><div class="link">Offerte di lavoro</div></router-link
          >
          <router-link to="/companies"
            ><div class="link">Sei un'Azienda?</div></router-link
          >
          <router-link to="/journal"
            ><div class="link">Journal</div></router-link
          >
        </div>
        <div class="left">
          <!-- @click="call_btn()" -->
          <!--<div class="link menuBtn" @click="openMenu()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="#fff"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </div>-->
          <a href="https://jobifyrecruiting.netlify.app/book"
            ><div class="link menuBtn">Prenota un appuntamento</div>
        </a>
        </div>
      </div>
    </div>
  </header>

  <div class="menuWorkersBG" @click="closeWorkers()">
    <div class="menuWorkers">
      <router-link to="/workers"
            ><div class="link">Trova lavoro</div></router-link
          >
      <router-link to="/openposition"
            ><div class="link">Offerte di lavoro</div></router-link
          >
    </div>
  </div>

  <div class="menu">
    <div class="top">
      <div class="logo">Logo</div>
      <div class="closeMenu" @click="closeMenu()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
          />
        </svg>
      </div>
    </div>
    <div class="main">
      <div class="list">
        <router-link to="/">
          <div class="link">
            <h3>
              <p class="icon">01</p>
              Home
            </h3>
          </div>
        </router-link>
        <router-link to="/openposition">
          <div class="link">
            <h3>
              <p class="icon">02</p>
              Posizioni aperte
            </h3>
          </div>
        </router-link>
        <router-link to="/stories">
          <div class="link">
            <h3>
              <p class="icon">03</p>
              Storie dei talenti
            </h3>
          </div>
        </router-link>
        <router-link to="/journal">
          <div class="link">
            <h3>
              <p class="icon">04</p>
              Journal
            </h3>
          </div>
        </router-link>
      </div>

      <div class="list">
        <router-link to="/about">
          <div class="link">
            <h3>
              <p class="icon">05</p>
              Chi siamo
            </h3>
          </div>
        </router-link>
        <router-link to="/workwithus">
          <div class="link">
            <h3>
              <p class="icon">06</p>
              Lavora con noi
            </h3>
          </div>
        </router-link>
        <router-link to="/partnerships">
          <div class="link">
            <h3>
              <p class="icon">07</p>
              Partnerships
            </h3>
          </div>
        </router-link>
        <router-link to="/contact">
          <div class="link">
            <h3>
              <p class="icon">08</p>
              Contattaci
            </h3>
          </div>
        </router-link>
      </div>
    </div>
    <div class="footer">
      <div class="menuFooterSx">
        <p>
          © 2022 &nbsp;&nbsp;•&nbsp;&nbsp; Jobify Recruiting Srl. (Aut. Min.
          Prot. N.F205S530526 del 26.07.2022)
        </p>
      </div>
      <div class="socialFooter">
        <div class="link">Facebook</div>
        <div class="link">Linkedin</div>
      </div>
    </div>
  </div>
  <RouterView />
</template>

<style>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import "@/assets/base.css";
@import url("https://fonts.cdnfonts.com/css/alliance-no1");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css");
@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  /*font-family: "Alliance No.1", sans-serif;*/
  /*font-family: "planer", sans-serif;*/
  font-family: 'Work Sans', sans-serif;
}

.calendly-badge-content{
  display: none;
}

html {
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

a:active {
  text-decoration: none;
}

a:hover {
  color: none;
  text-decoration: none;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

@media (min-width: 1024px) {
  .change_color {
    background-color: #0c2550ba;
    backdrop-filter: blur(12px);
    width: fit-content;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .change_color2 {
    background: transparent;
    width: fit-content;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  header {
    width: 100vw;
    text-align: center;
    position: fixed;
    z-index: 15;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .nav {
    display: flex;
    width: 100%;
    align-items: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .nav .left {
    display: flex;
    align-items: center;
  }

  .nav .center {
    margin-left: auto;
    display: flex;
    margin-right: auto;
    align-items: center;
  }

  .nav .content {
    display: flex;
    align-items: center;
    width: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .nav .link {
    margin-left: 2rem;
    margin-right: 2rem;
    color: rgb(222 222 222);
    font-weight: 300;
    font-size: 14px;
    letter-spacing: 1px;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    align-items: center;
  }

  .nav .link:hover {
    color: #fff;
  }

  .nav .menuBtn {
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
    line-height: 16px;
    font-size: 13px;
    letter-spacing: 0.5px;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
    margin-left: 0 !important;
    margin-right: 3rem !important;
  }

  .nav .menuBtn:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .nav .logo {
    width: 170px;
    margin-top: 0.5rem;
    margin-left: 3rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .logo img {
    width: 95px;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .menuWorkersBG {
    position: fixed;
    z-index: 14;
    width: 0%;
    height: 100%;
    background-color: transparent;
    opacity: 0;
    visibility: hidden;
    display: inline;
  }

  .menuWorkers {
    position: fixed;
    z-index: 15;
    width: 0%;
    height: fit-content;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: inline;
    left: 48%;
    top: 10%;
    /*background: #131b23;
    border: 2px solid #b3b3b326;*/

    background-color: #0c2550d4;
    backdrop-filter: blur(12px);
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }

  .menuWorkers .link {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
    border-radius: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    color: #fff;
  }

  .menuWorkers .menuClose {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
    padding-bottom: 0.4rem;
    color: #fff;
    width: fit-content;
    margin-left: auto;
    cursor: pointer;
  }

  .menuWorkers .link:hover {
    color: #fff;
    background: #3e455052;
  }

  .menu {
    position: fixed;
    z-index: 20;
    width: 0%;
    height: 100%;
    background-color: #0c2550d4;
    backdrop-filter: blur(12px);
    padding: 7rem;
    opacity: 0;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    display: inline;
  }

  .menu .top {
    display: flex;
  }

  .menu .top .closeMenu {
    margin-left: auto;
    padding: 1rem;
    border-radius: 16px;
    border: 2px solid #0a1e4375;
    color: white;
    font-size: 18px;
    line-height: 0;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .menu .top .closeMenu:hover {
    border-color: white;
    transform: rotate(90deg);
  }

  .menu .main {
    display: flex;
    margin-bottom: 8rem;
    margin-top: 5rem;
  }

  .menu .main .list {
    margin-right: 10rem;
  }

  .menu .main .list .link {
    align-items: center;
    margin-bottom: 1rem;
  }

  .menu .main .list h3 {
    font-size: 46px;
    color: #526272;
    align-items: center;
    display: flex;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1px;
    font-weight: 200;
  }

  .menu .main .list h3:hover {
    color: white;
  }

  .menu .main .list h3:hover p {
    color: white;
  }

  .menu .main .list p {
    margin-right: 2rem;
    font-size: 14px;
    color: #526272;
    font-weight: 100;
  }

  .menu .footer {
    display: flex;
    border-top: 1px solid #0a1e4375;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .menu .footer .socialFooter {
    display: flex;
    margin-left: auto;
  }

  .menu .footer .socialFooter .link {
    color: #8b929f;
    margin-left: 1.5rem;
    cursor: pointer;
    font-size: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    font-weight: 400;
    letter-spacing: 1.5px;
  }

  .menuFooterSx p {
    color: #8b929f;
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: 400;
  }
}

@media (max-width: 1023px) {
}
</style>
