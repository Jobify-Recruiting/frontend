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
    },

    closeMenu() {
      let content = document.querySelector(".menu");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
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
        <div class="link">Home</div>
        <div class="link">Aziende</div>
        <div class="logo">Logo</div>
        <div class="link">Lavoratori</div>
        <div class="link" @click="openMenu()">Menu</div>
      </div>
    </div>
  </header>

  <div class="menu">
    <div class="top">
      <div class="logo">Logo</div>
      <div class="closeMenu" @click="closeMenu()">X</div>
    </div>
    <div class="main">
      <div class="list">
        <div class="link">
          <h3>
            <p class="icon">></p>
            Home
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Posizioni aperte
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Tecnologie
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Richiedi candidature
          </h3>
        </div>
      </div>

      <div class="list">
        <div class="link">
          <h3>
            <p class="icon">></p>
            Partnerships
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Lavora con noi
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Chi siamo
          </h3>
        </div>
        <div class="link">
          <h3>
            <p class="icon">></p>
            Contattaci
          </h3>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="socialFooter">
        <div class="link">Facebook</div>
        <div class="link">Linkedin</div>
        <div class="link">Instagram</div>
        <div class="link">Twitter</div>
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

* {
  /*font-family: "Alliance No.1", sans-serif;*/
  font-family: "planer", sans-serif;
}

html {
  scroll-behavior: smooth;
}

@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

@media (min-width: 1024px) {
  .change_color {
    background-color: #010c18;
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
    height: 60px;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    border-radius: 20px;
    margin-top: 1rem;
    margin-bottom: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .nav .content {
    display: flex;
    width: 100%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .nav .link {
    margin-left: 2.5rem;
    margin-right: 2.5rem;
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 3px;
    cursor: pointer;
  }

  .nav .logo {
    margin-left: 18rem;
    margin-right: 18rem;
  }

  .menu {
    position: fixed;
    z-index: 20;
    width: 0%;
    height: 100%;
    background: #010c18;
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
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-radius: 16px;
    border: 2px solid #0a1e4375;
    color: white;
    font-size: 24px;
    font-weight: 600;
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
    margin-bottom: 5rem;
    margin-top: 5rem;
  }

  .menu .main .list {
    margin-right: 10rem;
  }

  .menu .main .list .link {
    align-items: center;
  }

  .menu .main .list h3 {
    font-size: 40px;
    color: rgb(184, 184, 184);
    align-items: center;
    display: flex;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .menu .main .list h3:hover {
    color: white;
  }

  .menu .main .list p {
    margin-right: 2rem;
    font-size: 20px;
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
    color: rgb(184, 184, 184);
    margin-left: 1.5rem;
    cursor: pointer;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .menu .footer .socialFooter .link {
    color: white;
  }
}

@media (max-width: 1023px) {
}
</style>
