<script>
export default {
  name: "article2",
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

    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowY = "scroll";
    htmlElement.style.background = "linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad)";

    var image = document.querySelector(".imageArticle");
    image.style.backgroundUrl= this.$route.params.img;
    image.style.backgroundImage = "url('"+this.$route.params.Image +"')";

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

    const slider = document.querySelector(".featuredContent");
    let isDown = false;
    let startX;
    let scrollLeft;
    if (slider) {
      slider.addEventListener("mousedown", (e) => {
        isDown = true;
        slider.classList.add("active");
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      });
      slider.addEventListener("mouseleave", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mouseup", () => {
        isDown = false;
        slider.classList.remove("active");
      });
      slider.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        slider.scrollLeft = scrollLeft - walk;
      });
    }

    var xmlString = this.$route.params.Text;
    var doc = new DOMParser().parseFromString(xmlString, "text/xml");
    console.log(doc); 
    var date = document.getElementById("article");
    date.innerHTML = this.$route.params.Text;
  },
  methods: {
    btnScrollSx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: -itemWidth * 4, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".featuredContent");
      const itemWidth = content.querySelector(".featured").clientWidth;
      content.scrollBy({ left: itemWidth * 4, top: 0, behavior: "smooth" });
    },
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="titlePage">
          <router-link to="/journal">
            <div class="btn_back">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#0c2550"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </span>
            </div>
          </router-link>

          {{this.$route.params.Title}}
        </div>
        <div class="imageArticle"></div>
        <div class="dateDiv_article">
          Data di pubblicazione: <span id="datePage">{{this.$route.params.Date}}</span>
        </div>
        <div v-if="this.$route.params.Name1">
          <div class="dateDiv_article">
            Rubrica curata da: <span id="datePage">{{this.$route.params.Name1}} ,</span> <span id="datePage">{{this.$route.params.Role1}}</span>
          </div>
        </div>
        <div v-if="this.$route.params.Name2">
          <div class="dateDiv_article">
            In collaorazione con: <span id="datePage">{{this.$route.params.Name2}} ,</span> <span id="datePage">{{this.$route.params.Role2}}</span>
          </div>
        </div>
        

        <div class="article" id="article">
          {{this.$route.params.Text}}
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.dateDiv_article{
  font-size: 16px;
    line-height: 20px;
    color: #0c2550;
    font-weight: 600;
    margin-left: 11rem;
    margin-top: 1rem;
}

.dateDiv_article span{
  font-weight: 300;
}

.article img {
  margin-bottom: 2rem;
}

.article a{
  font-size: 16px !important;
    line-height: 16px !important;
    width: 100% !important;
}

.article a:hover{
  color: #ed3fb4 !important; 
}

</style>
<style scoped>
@import url(//db.onlinewebfonts.com/c/bcd329db3107d78cc2e47e8077750927?family=Rogan-Regular);
@import url("https://fonts.cdnfonts.com/css/planer");
@import url("https://fonts.cdnfonts.com/css/alliance-no1");
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

html{
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
}

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
  /*font-family: "planer", sans-serif;*/
  font-family: 'Work Sans', sans-serif;
}

@media (min-width: 1024px) and (max-width: 1312px) {
}
@media (min-width: 1024px) {
  .flowSingleBtn {
    margin-top: 15rem;
  }

  .first {
    padding-top: 5rem;
    background: #ada996;
    background: -webkit-linear-gradient(
      to right,
      #eaeaea,
      #dbdbdb,
      #f2f2f2,
      #ada996
    );
    background: linear-gradient(to top, #eaeaea, #dbdbdb, #f2f2f2, #96a0ad);
    padding-left: 6rem;
    padding-right: 6rem;
    padding-bottom: 4rem;
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .btn_back {
    margin-bottom: 2rem;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #0c2550;
    font-weight: 800;
    width: 70%;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .dateDiv {
    font-size: 16px;
    line-height: 20px;
    color: #0c2550;
    font-weight: 300;
    margin-left: 11rem;
    margin-top: 1rem;
  }

  .datePage{
    font-weight: 500;
  }

  .imageArticle {
    height: 36vw;
    width: 60vw;
    margin-right: auto;
    margin-left: auto;
    background-image: url(https://media-exp1.licdn.com/dms/image/D4D12AQGtBYsgYvL_lA/article-cover_image-shrink_720_1280/0/1661953124123?e=1669248000&v=beta&t=Gkr7dvHTPSTMJPvCLt_P7tPOKE-NKob557NZYxZNHiw);
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    margin-top: 2rem;
    border-radius: 12px;
  }

  .article {
    margin-top: 3rem;
    padding-left: 11rem;
    padding-right: 11rem;
  }

  h3 {
    font-size: 28px;
    line-height: 32px;
    color: #0c2550;
    font-weight: 800;
    padding-bottom: 1rem;
    letter-spacing: -0.02em;
  }

  .article p {
    padding-bottom: 2rem;
    margin-bottom: 0rem !important;
    color: #131313;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
  }
}

@media (max-width: 1023px) {
}

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>