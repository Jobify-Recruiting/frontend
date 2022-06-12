<script>
import TheWelcome from "@/components/TheWelcome.vue";
import homePart2 from "@/components/homePart2.vue";
import homePart3 from "@/components/homePart3.vue";
import footerMain from "@/components/footerMain.vue";

export default {
  components: {
    TheWelcome,
    homePart2,
    homePart3,
    footerMain,
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
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
    },
  },
};
</script>

<template>
  <main>
    <TheWelcome></TheWelcome>
    <homePart2></homePart2>
    <homePart3></homePart3>
    <footerMain></footerMain>
  </main>
</template>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/alliance-no1");

* {
  /*font-family: "Rogan-Regular";*/
  font-family: "Alliance No.1", sans-serif;
}
main {
  background: linear-gradient(211deg, #010712, #030f20, rgb(1 10 20), #010712);
  background-size: 300%;
  overflow: visible;
  animation: animated_text 5s ease-in-out infinite;
  -moz-animation: animated_text 5s ease-in-out infinite;
  -webkit-animation: animated_text 5s ease-in-out infinite;
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
