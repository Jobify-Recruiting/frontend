<script>
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/compat/app';
import storage from 'firebase/compat';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import 'firebase/compat/firestore';
import { collection, getDocs } from "firebase/firestore";

export default {
  name: "mainPart",
  components: {},
  data() {
    return {
      all_jobs2: "",
      all_jobs: [],
      new_date: "",
    };
  },
  async mounted() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let new_date_composed = day+"/"+month+"/"+year;
    this.new_date = new_date_composed;

    function uniqBy(a, key) {
        var seen = {};
        return a.filter(function(item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    }

    if(this.$favorite_list.length > 0){
      this.all_jobs = uniqBy(this.$favorite_list, JSON.stringify)
    }

    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/3d680cada3.js"
    );
    document.head.appendChild(recaptchaScript);

    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowY = "scroll";

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
    console.log(this.all_jobs);
  },
  methods: {
    add_favorite(job, event){
      var bi_heart = event.currentTarget;
      var bi_heart_fill1 = bi_heart.parentElement;
      var bi_heart_fill2 = bi_heart_fill1.querySelector('.bi-heart-fill');
      bi_heart.style.display = "none";
      bi_heart_fill2.style.display = "inline";

      this.$favorite_list.push({ 
          id: job.id,
          job_title: job.job_title,
          location: job.location,
          company: job.company,
          contact: job.contact,
          publication_date: job.publication_date,
          closing_date: job.closing_date,
          contract_type: job.contract_type,
          area_funzione: job.area_funzione,
          url: job.url,
      });

      this.$favorite_list2 = this.uniqBy(this.$favorite_list, JSON.stringify)
      document.querySelector("#fav_list_number").textContent = this.$favorite_list2.length;
    },  

    remove_favorite(job, event){
      var bi_heart = event.currentTarget;
      var bi_heart_fill1 = bi_heart.parentElement;
      var bi_heart_fill2 = bi_heart_fill1.querySelector('.bi-heart');
      
      bi_heart_fill2.style.display = "inline";
      bi_heart.style.display = "none";
      this.all_jobs = this.all_jobs.filter(item => item.id !== job.id)
      this.$favorite_list = this.all_jobs.filter(item => item.id !== job.id)
      this.$favorite_list2 = this.all_jobs.filter(item => item.id !== job.id)
      document.querySelector("#fav_list_number").textContent = this.$favorite_list2.length;

      if(this.$favorite_list2.length == 0){
        document.querySelector("#fav_list").style.display = "none"
      }
    },  
  },
};
</script>
<template>
  <div>
    <div class="main">
      <div class="first">
        <div class="firstPart">
          <div class="firstPartBody">
            <div class="subtitle">Offerte di lavoro preferite</div>
              <h2>Le mie offerte preferite</h2>
              <p>
                Qui è possibile vedere le offerte di lavoro salvate.
              </p>
          </div>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1680 40"
          class="position-absolute width-full z-1"
          style="bottom: 0"
          >
            <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
          </svg>
        </div>
        <div class="second">
          <div class="featureds" v-if="this.all_jobs.length > 0">
            <div class="titles">
              <h2>{{ this.all_jobs.length }} offerte di lavoro salvate </h2>
            </div>
            <div class="tab-pane in active jobs" id="all_jobs">
                  <div
                    v-for="job in all_jobs"
                    class="card"
                    v-bind:key="job"
                  >
                      <div class="card-body">
                        <h5 class="card-title">
                          {{ job.job_title }}
                          <div id="favorite_btn">
                            <svg @click="add_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" style="display: none;" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <svg @click="remove_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                          </div>
                        </h5>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0c2550" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                                      </svg> {{ job.location }}</li>
                          <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0c2550" class="bi bi-briefcase" viewBox="0 0 16 16">
                                                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                                                      </svg>{{ job.area_funzione }}</li>
                          <li class="list-group-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#0c2550" class="bi bi-clock" viewBox="0 0 16 16">
                                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                      </svg>{{ job.contract_type }}</li>
                          <li class="list-group-item date">
                            Data di pubblicazione: {{ job.publication_date }}
                          </li>
                          
                        </ul>
                      </div>
                      <div class="card-buttons">
                        <div class="card-body">
                          <a v-if="job.closing_date < this.new_date" :href=job.url target="blank" class="card-link btn">Vedi offerta</a>
                          <div v-else>Offerta non più disponibile</div>
                        </div>
                      </div>
                  </div>
                  <div
                  v-if="this.all_jobs.length > 0"
                    class="card card-cta"
                  >
                      <div class="card-body">
                        <h5 class="card-title-cta">
                          Trova altre offerte di lavoro adatte a te!
                        </h5>
                        
                      </div>
                      <div class="card-buttons">
                        <div class="card-body">
                          <router-link to="/openposition" class="card-link btn-cta">Vedi tutte le offerte di lavoro</router-link>
                        </div>
                      </div>
                  </div>
            </div>
          </div>
            <div v-else class="" id="no_results">
                  <h3>Non hai ancora salvato le tue offerte preferite.</h3>
                  <p>
                    Nella pagina Offerte di lavoro, clicca sul cuore dell'offerte che ti piacciono, in modo da poterle ritrovare in qualsiasi momento.
                  </p>
                  <router-link to="/openposition" class="card-link btn">Vedi tutte le offerte di lavoro</router-link>
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

*{
  font-family: "Merienda";
}



@media (min-width: 1024px) {

  .first {
    background: #fff;
  }

  .first .cols {
    display: flex;
    margin-top: 5rem;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .firstPart {
    text-align: left;
    width: 100%;
    padding-bottom: 6rem;
    padding-top: 9rem;
    margin-right: 0;
    background:#0c2550;
  }

  .firstPartBody{
    padding-left: 10rem;
    padding-right: 10rem;
  }

  .firstPart .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .firstPart p span {
    color: #c554a0;
    font-weight: 600;
  }

  .firstPart h2 {
    color: #fff;
    letter-spacing: -0.04em;
    font-size: 64px;
    line-height: 64px;
    font-weight: 800;
    margin-bottom: 1rem;
    width: 50%;
  }

  .firstPart p {
    width: 50%;
    margin-top: 0.5rem;
    color: #fff;
    font-size: 18px;
    text-align: left;
    line-height: 22px;
    font-weight: 200;
    margin-bottom: 2rem;
  }

  .firstPart .image {
    height: 54vh;
    width: 56%;
    padding-left: 8rem;
    padding-right: 0;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2FStorie%20di%20talenti.png?alt=media&token=25dc28b1-df37-43ff-8bd0-934c02355d24);
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    top: -15%;
    right: 0;
    margin-right: 0;
  }

  .titlePage {
    font-size: 40px;
    line-height: 44px;
    color: #000;
    font-weight: 800;
    margin-left: 11rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }

  .titlePage2 {
    font-size: 34px;
    line-height: 38px;
    color: #000;
    font-weight: 800;
    margin-left: 12.5rem;
    margin-top: 3rem;
    letter-spacing: -0.02em;
  }


  .firstTitle {
    margin-left: 2rem;
    width: 40%;
    margin-right: 2rem;
    color: #000;
  }

  .firstTitle p {
    font-size: 12px;
    color: #273350;
    font-weight: 800;
    letter-spacing: 0.5px;
    line-height: 1.33333;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }

  .firstTitle .subtitle {
    font-size: 16px;
    color: #273350;
    line-height: 20px;
    margin-bottom: 3rem;
    margin-top: 1rem;
  }

  .firstTitle h2 {
    color: #000;
    font-size: 46px;
    line-height: 50px;
    font-weight: 700;
    letter-spacing: -0.04em;
  }

  .firstTitle .btnRead {
    padding-top: 2rem;
    color: #0062f5;
    font-weight: 800;
    float: right;
    font-size: 12px;
    line-height: 1.33333;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .titles{
    padding-left: 10rem;
    padding-right: 10rem;
    margin-bottom: 2rem;
    color: #000;
  }
  
  .jobs{
    flex-wrap: wrap;
    margin-top: 0rem;
    padding-left: 10rem;
    padding-right: 10rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(3, calc((20/58) * 100%));
  }

  .jobs .card{
    margin-bottom: 2rem;
    margin-right: 2rem;
    border-radius: 15px;
    transition: 0.3s all;
    border: 2px solid rgba(0,0,0,.125);
  }

  .jobs .card-cta{
    background: #0062f5;
    border: 2px solid #0062f5;
  }

  .jobs .card:hover{
    border-color:#027bfd
  }

  .card .card-body{
    padding: 0;
  }

  .card .card-title{
    padding: 1.5rem;
    font-size: 20px;
    line-height: 24px;
    color: #000;
    font-weight: 700;
    padding-bottom: 0;
    display: flex;
  }

  .card-title-cta{
    padding: 1.5rem;
    font-size: 40px;
    line-height: 44px;
    color: #fff;
    font-weight: 700;
    padding-bottom: 0;
    display: flex;
  }

  .card .card-title #favorite_btn{
    cursor: pointer;
    margin-left: auto;
  }

  .card .card-title #favorite_btn:hover{
    color: red;
  }

  .card ul li{
    border: none;
    padding-left: 1.5rem;
    padding-bottom: 0.1rem;
    align-items: center;
    display: flex;
    color: #000;
  }

  .card ul .date{
    color: #727272 !important;
  }

  .card ul li svg{
    margin-right: 0.5rem;
  }

  .card .card-buttons{
    padding: 1.5rem;
    padding-top: 0;
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
    height: 50%;
    margin-top: 1rem;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .btn-cta {
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 14px 26px;
    border-radius: 20px;
    background: #fff;
    color: #0062f5;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    z-index: 10;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 50%;
    margin-top: 1rem;
  }

  .btn-cta:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .btn-cta span {
    padding-left: 0.4rem;
  }

  #no_results{
    width: 70vw;
    padding-left: 10rem;
    padding-right: 10rem;
    padding-top: 5rem;
    padding-bottom: 5rem;
    color: #000;
  }

  #no_results h3{
    font-weight: 300;
  }

  #no_results h3 span{
    font-weight: 700;
  }

  #no_results p{
    font-size: 18px;
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
