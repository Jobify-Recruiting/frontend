<script>
import mainPart from "@/components/searchResult/mainPart.vue";
import footerMain from "@/components/footerMain.vue";

export default {
  components: {
    mainPart,
    footerMain,
  },
  methods: {},
};
</script>

<template>
  <main>
    <mainPart></mainPart>
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
  background: #030812;
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
