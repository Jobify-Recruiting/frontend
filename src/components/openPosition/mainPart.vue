<script>
import axios from 'axios';
import moment from 'moment';
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
      new_jobs: [],
      jobs_lenght: "",
      old_jobs: [],
      all_jobs: [],
      all_jobs_filtered: [],
      new_date: "",
      filter_contract_type1: [],
      filter_contract_type2: [],
      filter_city1: [],
      filter_city2: [],
      filter_function1: [],
      filter_function2: [],
      remove_filter: false,
      suggested_words1: [],
      suggested_words2: [],
      search_text: "",
      job_alert_nomeJob: "",
      job_alert_nome: "",
      job_alert_cognome: "",
      job_alert_email: "",
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

    const db = firebase
        .initializeApp({ projectId: "jobify-d2a24" })
        .firestore();

    const querySnapshot = await getDocs(collection(db, "offerte_di_lavoro"));
    querySnapshot.forEach((doc) => {
      this.old_jobs.push({ 
        id: doc.data().id,
        job_title: doc.data().job_title,
        location: doc.data().location,
        company: doc.data().company,
        contact: doc.data().contact,
        publication_date: doc.data().publication_date,
        closing_date: doc.data().closing_date,
        contract_type: doc.data().contract_type,
        area_funzione: doc.data().area_funzione,
      });
    });

    let old_jobs_ordered = this.old_jobs.sort((a, b) => {
            if (a.publication_date > b.publication_date) {
              return -1;
            }
    });
    
    this.old_jobs = old_jobs_ordered;

    await axios
      .get('https://inrecruiting.intervieweb.it/annunci.php?lang=it&LAC=jobconsultinghr&d=jobifyrecruiting.netlify.app&k=fd7a2de73e6faba23a23ea947913431c&format=json_en&utype=0')
      .then((response) => {
        let x = response.data

        let datax = x.sort((a, b) => {
            if (a.published > b.published) {
              return -1;
            }
          });

        this.new_jobs = datax;

        for (var i = 0; i < this.new_jobs.length; i++) {
          const strManipulationSplit = this.new_jobs[i].published.split(" ")[0];
          let xx = strManipulationSplit.replaceAll("-", "/");
          this.new_jobs[i].published = xx;

          const strManipulationSplit2 = this.new_jobs[i].expires.split(" ")[0];
          let xx2 = strManipulationSplit2.replaceAll("-", "/");
          this.new_jobs[i].expires = xx2;
        }

        return this.new_jobs;
      })

      for (var i = 0; i < 1; i++) {
        if(this.new_jobs[i].id != this.old_jobs[i].id){
          const db = firebase
            .initializeApp({ projectId: "jobify-d2a24" })
            .firestore();

            const current = new Date();
            const date =
            current.getDate() +
            "-" +
            (current.getMonth() + 1) +
            "-" +
            current.getFullYear();
            const time =
            current.getHours() +
            ":" +
            current.getMinutes() +
            ":" +
            current.getSeconds();

            const dateTime = date + " " + time;

            const data = {
              id: this.new_jobs[i].id,
              job_title: this.new_jobs[i].title,
              location: this.new_jobs[i].location,
              company: this.new_jobs[i].company,
              contact: this.new_jobs[i].vacancy_owner,
              publication_date: this.new_jobs[i].published,
              closing_date: this.new_jobs[i].expires,
              contract_type: this.new_jobs[i].contract_type,
              area_funzione: this.new_jobs[i].function,
              url: this.new_jobs[i].url,
            };

            console.log(data)

            db.collection("offerte_di_lavoro")
            .add(data)
            .then(() => {
              
              });
        }
      }

      const querySnapshot2 = await getDocs(collection(db, "offerte_di_lavoro"));
      querySnapshot2.forEach((doc) => {
        this.all_jobs.push({ 
          id: doc.data().id,
          job_title: doc.data().job_title,
          location: doc.data().location,
          company: doc.data().company,
          contact: doc.data().contact,
          publication_date: doc.data().publication_date,
          closing_date: doc.data().closing_date,
          contract_type: doc.data().contract_type,
          area_funzione: doc.data().area_funzione,
          url: doc.data().url,
        });
      });

      let old_jobs_ordered2 = this.all_jobs.sort((a, b) => {
              if (a.publication_date > b.publication_date) {
                return -1;
              }
      });
    
      this.all_jobs = old_jobs_ordered2;
      this.all_jobs_filtered = this.all_jobs;
      this.jobs_lenght = this.all_jobs.length;

    //filtro tipo contratto
    for (var i = 0; i < this.all_jobs.length; i++) {
      this.filter_contract_type1.push({ 
          contract_type: this.all_jobs[i].contract_type,
        });
    }
    this.filter_contract_type2 = uniqBy(this.filter_contract_type1, JSON.stringify)

    //filtro città
    for (var i = 0; i < this.all_jobs.length; i++) {
      this.filter_city1.push({ 
          city: this.all_jobs[i].location,
        });
    }
    this.filter_city2 = uniqBy(this.filter_city1, JSON.stringify)

    //filtro funzione
    for (var i = 0; i < this.all_jobs.length; i++) {
      this.filter_function1.push({ 
          function: this.all_jobs[i].area_funzione,
        });
    }
    this.filter_function2 = uniqBy(this.filter_function1, JSON.stringify)

    //suggested words
    for (var i = 0; i < this.all_jobs.length; i++) {
      if(i < 10){
        this.suggested_words1.push({ 
          word: this.all_jobs[i].area_funzione,
        });

        this.suggested_words1.push({ 
          word: this.all_jobs[i].job_title,
        });
      }
    }
    this.suggested_words2 = uniqBy(this.suggested_words1, JSON.stringify)
    
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://kit.fontawesome.com/3d680cada3.js"
    );
    document.head.appendChild(recaptchaScript);

    var htmlElement = document.querySelector("html");
    htmlElement.style.overflowY = "scroll";

    if (this.$route.query.jobalert == "open"){
      this.jobAlert();
    }

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

    window.onload = function () {
      var popup = document.querySelector(".suggestWords");
      var overlay = document.getElementById("suggestWordsOverlay");
      var openButton = document.querySelector(".searchKey");
      document.onclick = function (e) {
        if (e.target.id == "suggestWordsOverlay") {
          popup.style.display = "none";
          overlay.style.display = "none";
        }
        if (e.target === openButton) {
          popup.style.display = "block";
          overlay.style.display = "block";
        }
      };
    };

    window.addEventListener("scroll", reveal);
    window.scrollTo({ top: 0, behavior: "smooth" });

    const slider = document.querySelector(".filtersContent");
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

    const slider2 = document.querySelector(".featuredContent");

    if(slider2 != 0){
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
    }

    if(this.search_text == ""){
      let search_button = document.querySelector("#search_button");
      search_button.style.display = "inline";

      let remove_search_button = document.querySelector("#remove_search_button");
      remove_search_button.style.display = "none";
    }

    console.log(this.all_jobs);
    console.log(this.$favorite_list)
    console.log(this.$favorite_list2)
    if(this.$favorite_list2.length > 0){
      document.querySelector("#fav_list_number").textContent = this.$favorite_list2.length;
      document.querySelector("#fav_list").style.display = "inline"
      document.querySelector("#fav_list_icon").style.display = "inline"
    }
    
  },
  watch: {
      search_text(search) {
       if (search == 0) {
        let content = document.querySelector("#all_jobs");
        content.style.display = "grid";

        let content2 = document.querySelector("#all_jobs_filtered");
        content2.style.display = "none";

        let search_button = document.querySelector("#search_button");
        search_button.style.display = "inline";

        let remove_search_button = document.querySelector("#remove_search_button");
        remove_search_button.style.display = "none";
      }
    },              
 },
  methods: {
    uniqBy(a, key) {
        var seen = {};
        return a.filter(function(item) {
            var k = key(item);
            return seen.hasOwnProperty(k) ? false : (seen[k] = true);
        })
    },

    closeSuggestWords() {
      let suggestWords2 = document.querySelector("#suggestWords2");
      suggestWords2.style.opacity = "0";
      suggestWords2.style.visibility = "hidden";
      suggestWords2.style.display = "none";
      suggestWords2.style.width = "0%";
    },

    filter_search(search_text){
      this.closeSuggestWords();
      //event.target.value
      function filterByValue(array, string) {
          return array.filter(o =>
              Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
      }
      this.all_jobs_filtered = filterByValue(this.all_jobs, search_text);

      let content = document.querySelector("#all_jobs");
      content.style.display = "none";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "grid";

      if(this.all_jobs_filtered.length == 0){
        let content2 = document.querySelector("#all_jobs_filtered");
        content2.style.display = "grid";

        let no_results = document.querySelector("#no_results");
        no_results.style.display = "inline";
      }

      let search_button = document.querySelector("#search_button");
      search_button.style.display = "none";

      let remove_search_button = document.querySelector("#remove_search_button");
      remove_search_button.style.display = "inline";
    },

    cancel_search(){
      let search_button = document.querySelector("#search_button");
      search_button.style.display = "inline";

      let remove_search_button = document.querySelector("#remove_search_button");
      remove_search_button.style.display = "none";

      const search_input = document.querySelector('#nav');
      search_input.value = "";

      this.search_text = "";

      this.all_jobs_filtered = this.all_jobs;

      let no_results = document.querySelector("#no_results");
      no_results.style.display = "none";
    },

    keyword_search(event){
      this.closeSuggestWords();
      this.search_text = event;

      function filterByValue(array, string) {
          return array.filter(o =>
              Object.keys(o).some(k => o[k].toLowerCase().includes(string.toLowerCase())));
      }
      this.all_jobs_filtered = filterByValue(this.all_jobs, event);

      let content = document.querySelector("#all_jobs");
      content.style.display = "none";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "grid";

      let search_button = document.querySelector("#search_button");
      search_button.style.display = "none";

      let remove_search_button = document.querySelector("#remove_search_button");
      remove_search_button.style.display = "inline";

      if(this.all_jobs_filtered.length == 0){
        let content2 = document.querySelector("#all_jobs_filtered");
        content2.style.display = "grid";

        let no_results = document.querySelector("#no_results");
        no_results.style.display = "inline";
      }else{
        let no_results = document.querySelector("#no_results");
        no_results.style.display = "none";
      }
    },

    filter_func(event) {
      this.all_jobs_filtered = this.all_jobs.filter( element => element.area_funzione == event.target.value)
      let content = document.querySelector("#all_jobs");
      content.style.display = "none";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "grid";
      this.remove_filter = true;
    },

    filter_city(event){
      this.all_jobs_filtered = this.all_jobs.filter( element => element.location == event.target.value)
      let content = document.querySelector("#all_jobs");
      content.style.display = "none";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "grid";
      this.remove_filter = true;
    },

    filter_contract(event){
      this.all_jobs_filtered = this.all_jobs.filter( element => element.contract_type == event.target.value)
      let content = document.querySelector("#all_jobs");
      content.style.display = "none";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "grid";
      this.remove_filter = true;
    },

    filter_sort_by(event){
      if(event.target.value == "2"){
        this.all_jobs_filtered = this.all_jobs.sort((a, b) => {
              if (a.publication_date > b.publication_date) {
                return -1;
              }
        });
        let content = document.querySelector("#all_jobs");
        content.style.display = "none";

        let content2 = document.querySelector("#all_jobs_filtered");
        content2.style.display = "grid";
      }else if(event.target.value == "1"){
        this.all_jobs_filtered = this.all_jobs.sort((a, b) => {
              if (a.publication_date < b.publication_date) {
                return -1;
              }
        });
        let content = document.querySelector("#all_jobs");
        content.style.display = "none";

        let content2 = document.querySelector("#all_jobs_filtered");
        content2.style.display = "grid";
      }

      this.remove_filter = true;
    },

    remove_filter2(){
      this.all_jobs_filtered = this.all_jobs;

      //area funzione
      const area_funzione = document.querySelector('#area_funzione');
      area_funzione.value = 'disabled'

      //city
      const city = document.querySelector('#city');
      city.value = 'disabled'

      //tipo di contratto
      const contract = document.querySelector('#contract');
      contract.value = 'disabled'

      //sort_by
      const sort_by = document.querySelector('#sort_by');
      sort_by.value = '2'

      let content = document.querySelector("#all_jobs");
      content.style.display = "grid";

      let content2 = document.querySelector("#all_jobs_filtered");
      content2.style.display = "none";
      //location.reload();
    }, 

    suggestWords() {
      let content = document.querySelector("#suggestWords2");
      content.style.width = "40%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";
      /*var overlay = document.getElementById("suggestWordsOverlay");
      overlay.style.display = "block";*/
    },

    add_favorite(job, event){
      console.log(this.$favorite_list)
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
      document.querySelector("#fav_list").style.display = "inline"
      document.querySelector("#fav_list_number").textContent = this.$favorite_list2.length;
      document.querySelector("#fav_list_icon").style.display = "inline"
    },  

    remove_favorite(job, event){
      var bi_heart = event.currentTarget;
      var bi_heart_fill1 = bi_heart.parentElement;
      var bi_heart_fill2 = bi_heart_fill1.querySelector('.bi-heart');
      
      bi_heart_fill2.style.display = "inline";
      bi_heart.style.display = "none";

      const index = this.$favorite_list2.indexOf(job.id);
      console.log(index)

      this.$favorite_list2.splice(index, 1);

      this.$favorite_list.splice(index, 1);

      //this.$favorite_list2 = this.$favorite_list2.filter(item => item.id !== job.id)
      document.querySelector("#fav_list_number").textContent = this.$favorite_list2.length;
      if(this.$favorite_list2.length == 0){
        document.querySelector("#fav_list").style.display = "none"
      }
        
      console.log(this.$favorite_list2)
    },  

    jobAlert() {
      let content = document.querySelector(".bg1");
      content.style.width = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";
      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "hidden";
    },

    closePopup() {
      let content = document.querySelector(".bg1");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    closePopup2() {
      let content = document.querySelector(".bg2");
      content.style.width = "0%";
      content.style.opacity = "0";
      content.style.visibility = "hidden";
      content.style.display = "unset";

      var htmlElement = document.querySelector("html");
      htmlElement.style.overflowY = "scroll";
    },

    sendJobAlert(){
      const db = firebase
        .initializeApp({ projectId: "jobify-d2a24" })
        .firestore();

        const current = new Date();
        const date =
          current.getDate() +
          "-" +
          (current.getMonth() + 1) +
          "-" +
          current.getFullYear();
        const time =
          current.getHours() +
          ":" +
          current.getMinutes() +
          ":" +
          current.getSeconds();

        const dateTime = date + " " + time;

        const data = {
          NomeJob: this.job_alert_nomeJob,
          Nome: this.job_alert_nome,
          Cognome: this.job_alert_cognome,
          Email: this.job_alert_email,
          data: dateTime,
        };

        db.collection("job_alerts")
        .add(data)
        .then(() => {
          document.getElementById("notify").style.display = "inline-flex";
          document.getElementById("title").innerHTML = "Job Alert";
          document.getElementById("subtitle").innerHTML = "Job Alert attivata con successo.";
          setTimeout(() => {
            document.getElementById("notify").style.display = "none";
          }, 6000); // 👈️ time in milliseconds
          });
    },
  },
};
</script>
<template>
  <div>
    <div class="notify" id="notify">
      <div class="icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0c2550" class="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
        </svg>
      </div>
      <div class="text">
        <div class="title" id="title">
          
        </div>
        <div class="subtitle" id="subtitle">
          
        </div>
      </div>
    </div>
    <div class="main">
      <div class="glow"></div>
      <div class="glow2"></div>
      <div class="glow3"></div>
      <div class="glow4"></div>
      <div class="glow5"></div>
      <div class="glow6"></div>
      <div class="glow7"></div>
      <div class="glow8"></div>
      <div class="first">
        <div style="background: #0c2550; padding-top: 10rem; padding-bottom: 10rem;">
          <div class="title">
          <div class="titleDiv">
            <h2>Cerchi Lavoro?</h2>
            <p>Offerte di lavoro</p>
          </div>
          </div>
          <div class="search">
            <div class="searchKey" @click="suggestWords()">
              <input
                id="nav"
                class="input searchBar"
                type="text"
                name="searchbar"
                v-model="search_text"
                autocomplete="off"
                placeholder="Che lavoro cerchi?"
              />
              <span @click="filter_search(search_text)" id="search_button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                  />
                </svg>
              </span>
              <span @click="cancel_search()" id="remove_search_button">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
                </svg>
              </span>
            </div>
            <div @click="jobAlert()" class="btn btnJobAlert">
                <a href="#">Crea una Job Alert</a>
            </div>
            <div class="suggestWords" id="suggestWords2">
                <div id="suggestWordsOverlay"></div>
                <div class="suggestTopDiv">
                  <h5>Parole chiave</h5>
                  <div class="closesuggestWords" @click="closeSuggestWords()">
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
                      ></path>
                    </svg>
                  </div>
                </div>

                <div class="keyWords">
                  <div class="keyWord"
                            v-for="word in suggested_words2"
                            v-bind:key="word"
                            v-bind:value=word.word
                            @click="keyword_search(word.word)"
                          >{{ word.word }}</div>
                </div>
              </div>
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
       
        
        <div class="results_jobs">
          <!--<div class="navMain">
            <ul class="nav nav-tabs">
              <li class="active"><a data-toggle="tab" href="#Farm">Farm</a></li>
              <li><a data-toggle="tab" href="#Finance">Finance</a></li>
              <li><a data-toggle="tab" href="#IT">IT Tech</a></li>
              <li><a data-toggle="tab" href="#Hr">HR</a></li>
              <li><a data-toggle="tab" href="#Digital">Digital</a></li>
              <li @click="jobAlert()" class="btn">
                <a href="#">Crea una Job Alert</a>
              </li>
            </ul>
          </div>-->
          
          <div class="tab-content">
              <div class="tab_header">
                <div class="results">
                  {{ jobs_lenght }} risultati
                </div>
                
              </div>
              <div class="filters_jobs">
                <div class="filter_category filter_job">
                    <select class="form-select" id="area_funzione" @change="filter_func($event)">
                      <option value="disabled" disabled selected>Funzione</option>
                      <option
                          v-for="func in filter_function2"
                          v-bind:key="func"
                          v-bind:value=func.function
                        >{{ func.function }}</option>
                    </select>
                </div>
                  
                <div class="city_category filter_job">
                    <select class="form-select" id="city" @change="filter_city($event)">
                      <option value="disabled" disabled selected>Città</option>
                      <option
                          v-for="city in filter_city2"
                          v-bind:key="city"
                          v-bind:value=city.city
                      >{{ city.city }}</option>
                    </select>
                </div>

                <div class="contract_category filter_job">
                    <select class="form-select" id="contract" @change="filter_contract($event)">
                      <option value="disabled" disabled selected>Tipo di contratto</option>
                      <option
                          v-for="filter in filter_contract_type2"
                          v-bind:key="filter"
                          v-bind:value=filter.contract_type
                      >{{ filter.contract_type }}</option>
                    </select>
                </div>

                <div class="sort_by">
                  <select class="form-select" id="sort_by" @change="filter_sort_by($event)">
                    <option value="2" selected>Meno recente</option>
                    <option value="1">Più recente</option>
                  </select>
                </div>

                <div v-if="this.remove_filter == true" class="remove_filter_div">
                    <div class="remove_filter" @click="remove_filter2()">Rimuovi filtri</div>
                </div>
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
                            <svg @click="add_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <svg @click="remove_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" style="display: none;" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
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
              </div>

              <div class="tab-pane in active jobs" id="all_jobs_filtered" style="display: none;">
                <div class="" id="no_results" v-if="this.search_text.length > 0" style="display: none;">
                  <h3>Ci spiace, non abbiamo trovato offerte corrispondenti a "<span>{{ this.search_text }}</span>".</h3>
                  <p>
                    Utilizza i filtri per ottenere più risultati, oppure segui i suggerimenti:
                    <ul>
                      <li>Controlla che il ruolo o le parole chiave che hai digitato siano corrette. Prova eventualmente a cambiarle.</li>
                      <li>Valuta la possibilità di iniziare la tua ricerca partendo dal filtro categoria.</li>
                      <li>Stai cercando lavoro in una località specifica? Prova ad estendere l’area territoriale della tua ricerca.</li>
                    </ul>
                  </p>
                </div>
                  <div
                    v-for="job in all_jobs_filtered"
                    class="card"
                    v-bind:key="job"
                  >
                      <div class="card-body">
                        <h5 class="card-title">
                          {{ job.job_title }}
                          <div id="favorite_btn">
                            <svg @click="add_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                            </svg>
                            <svg @click="remove_favorite(job, $event)" xmlns="http://www.w3.org/2000/svg" style="display: none;" width="26" height="26" fill="red" class="bi bi-heart-fill" viewBox="0 0 16 16">
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
              </div>
          </div>
        </div>

        <div class="bgTransparent bg1">
          <div class="closeMenu" @click="closePopup()">
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
          <div class="popup">
            <div class="body">
              <div class="jobAlertHeader">
                <div class="subtitle">Job alert</div>
                <h2>Attiva la job alert per le posizioni più interessanti</h2>

                <div class="photo"></div>
              </div>
              <div class="jobAlert">
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Nome della job alert (es. sviluppatore)"
                    v-model="job_alert_nomeJob"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 95%; margin: 0 0 1.5rem 0"
                >
                  <input
                    style="width: 100%; margin: 0 1.5rem 0 0"
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Nome"
                    v-model="job_alert_nome"
                  />

                  <input
                    id="nav"
                    style="width: 100%; margin: 0"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Cognome"
                    v-model="job_alert_cognome"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Email"
                    v-model="job_alert_email"
                  />
                </div>

                <div class="checkbox">
                  <input type="checkbox" />
                  <p>
                    Accetto i
                    <router-link to="">&nbsp;termini e condizioni.</router-link>
                  </p>
                </div>

                <div class="formButton">
                  <button class="btn" @click="sendJobAlert()">
                      Invia
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </span></button
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="bgTransparent bg2">
          <div class="closeMenu" @click="closePopup2()">
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
          <div class="popup">
            <div class="body">
              <div class="jobAlertHeader">
                <div class="subtitle">Manda il tuo cv</div>
                <h2>
                  Qui potrai inviare il tuo CV direttamente a Jobify Recruiting
                </h2>

                <div class="photo"></div>
              </div>
              <div class="jobAlert">
                <div
                  class="input"
                  style="display: flex; width: 95%; margin: 0 0 1.5rem 0"
                >
                  <input
                    style="width: 100%; margin: 0 1.5rem 0 0"
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Nome"
                  />

                  <input
                    id="nav"
                    style="width: 100%; margin: 0"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Cognome"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Email"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Linkedin Url"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Telefono"
                  />
                </div>
                <div
                  class="input"
                  style="display: flex; width: 100%; margin: 0"
                >
                  <input
                    id="nav"
                    class="input"
                    type="text"
                    name="nickname"
                    placeholder="Dettagli"
                  />
                </div>

                <div class="formButton">
                  <a href="#first"
                    ><button class="btn">
                      Invia
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-arrow-right-short"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                          />
                        </svg>
                      </span></button
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="secondPart2">
          <div class="title">
            <h2>
              <span>Jobify Recruiting:</span> mettiamo il talento al servizio delle aziende
              
            </h2>
            <p>
              Tante sono le aziende che cercano candidati nel settore <span>Farm, Finance, IT Tech e HR</span> e tanti i candidati che
              cercano l’azienda ideale in cui collocarsi per una carriera professionale ricca di soddisfazioni. In tutto questo
              Jobify Recruiting ha il compito di creare il match perfetto tra talento e azienda.
            </p>
          </div>
          <div class="steps">
            <div class="step transition">
              <div class="title">Intervista azienda</div>
              <div class="text">
                In Jobify Recruiting approfondiamo il clima aziendale, l’organigramma e il funzionigramma dell’azienda per
trovare la migliore risorsa da inserire con un rapporto consulenziale e diretto.
              </div>
            </div>
            <div class="step transition">
              <div class="title">Intervista talento</div>
              <div class="text">
                Jobify Recruiting va oltre il job title, le hard skill e le soft skill e lavora in modo da approfondire il mondo di
valori, le attese e le aspettative del candidato, che diventa non più risorsa umana ma potenziale da
sviluppare in azienda.
              </div>
            </div>
          </div>
        </div>

        <h2 class="ctaTitle">Jobify Recruiting: ricerca e selezione talenti</h2>

        <div class="ctaCV" style="background: #0c2550">
          <div class="blur"></div>
          <div class="cols">
            <div class="col col-padding" id="positions">
              <h3 style="color: #fff">
                Come trovare lavoro, ti aiutiamo a raggiungere i tuoi sogni. 
              </h3>
              <router-link to="/workers">
              <div class="button">
                Trova lavoro
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-right-short"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                    />
                  </svg>
                </span>
              </div>
            </router-link>
            </div>
            <div
              class="col"
              style="
                background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fmatch_perfetto.png?alt=media&token=c27b57b6-190f-4931-a118-6c43fae019fe);
                background-size: cover;
                border-radius: 30px;
                background-repeat: no-repeat;
                background-position: top;
              "
            ></div>
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

.transition {
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.transition.active {
  transform: translateY(0);
  opacity: 1;
}

*{
  font-family: "Merienda";
}

.notify{
    position: fixed;
    right: 2%;
    bottom: 10%;
    background: #fff;
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    border-radius: 20px;
    z-index: 20;
    width: 30%;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }

  .notify .title{
    color: #0c2550;
    font-size: 16px;
    line-height: 18px;
    margin-left: 1rem;
    margin-bottom: 0.3rem;
    font-weight: 700;
  }

  .notify .subtitle{
    color: #0c2550;
    font-size: 14px;
    line-height: 18px;
    margin-left: 1rem;
  }

@media (min-width: 1024px) {

  .story{
    display: none;
    position: fixed;
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .story .content{
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    position: fixed;
    z-index: 10;
    background: #0c25509f;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 5%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px, rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .story .close_story{
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 2rem;
    width: fit-content;
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

  .story .close_story:hover {
    border-color: white;
    color: #fff;
    transform: rotate(90deg);
  }

  .story .close_story:hover svg {
    fill: #fff;
  }

  .story .content .nickname{
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
  }

  .story .content .azienda{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: auto;
  }
  .story .content .data{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: auto;
    width: fit-content;
    margin-left: 1rem;
  }

  .story .content .ruolo{
    font-weight: 300;
    font-size: 14px;
    line-height: 14px;
    margin-top: 0.5rem;
    color: #fff;
    margin-right: 1rem;
    margin-left: auto;
    width: fit-content;
  }

  .story .content .storia_testo{
    padding-left: 20rem;
    padding-right: 20rem;
    margin-top: 3rem;
    overflow-y: scroll;
    height: 65%;
    font-weight: 300;
    color: #fff;
    text-align: center;
  }
  
  .second {
    padding-bottom: 5rem;
  }

  .first {
    padding-bottom: 5rem;
  }

  .first .titleDiv {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 3rem;
  }

  .first .searchKey {
    margin-right: 2rem;
    z-index: 10;
    margin-left: auto;
  }

  .btnJobAlert{
    margin-top: 0 !important;
    height: 50%;
    margin-right: auto !important;
  }

  .btnJobAlert a{
    color: #fff !important;
  }

  .cols {
    display: flex;
  }

  .colImage {
    width: 35%;
  }

  .colPositions {
    width: 65%;
    margin-left: 5rem;
    padding-bottom: 5rem;
  }

  .cols .col1 {
    position: fixed;
  }

  .avatar {
    width: 49%;
    position: fixed;
  }

  .main {
    background: #fff;
    position: relative;
  }

  .title {
    display: flex;
    z-index: 2;
  }

  .title .btnDiv {
    margin-left: auto;
    margin-right: 5rem;
  }

  .title h2 {
    font-size: 54px;
    color: #fff;
    line-height: 58px;
    font-weight: 700;
    letter-spacing: -2.5px;
  }

  .title p {
    color: #d9d9d9;
    font-size: 20px;
    width: 100%;
    line-height: 24px;
    font-weight: 400 !important;
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
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.5px;
    margin-top: 1rem;
    cursor: pointer;
    transition: all 0.3s ease-out;
    margin-right: 1.5rem;
  }

  .btn:hover {
    background: #ed3fb4;
    color: #fff;
    font-weight: 600;
  }

  .btn span {
    padding-left: 0.4rem;
  }

  .main2 {
    background: #0c2550;
    padding-top: 1rem;
  }

  /*filtri*/

  .results_jobs{
    display: flex;
    padding-left: 5rem;
    padding-top: 2rem;
    padding-right: 5rem;
  }

  .filter_job{
    padding-bottom: 1.5rem;
    width: 17%;
    margin-right: 2rem;
  }

  .filters_jobs{
    display: flex;
    width: 100%;
    position: sticky;
    top: 76px;
    z-index: 10;
    background: rgba(255, 255, 255, 0.677);
    backdrop-filter: blur(12px);
    padding-top: 1rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .filters_jobs h3{
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  select{
    padding: 0.5rem;
    border-radius: 10px;
    background: #ffffff00;
    border: none;
    font-weight: 500;
    color: #2c3e50;
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: transparent;
    background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 50%;
    border: 2px solid #dfdfdf;
    border-radius: 15px;
    margin-right: 2rem;
    padding: 1rem;
    padding-right: 2rem;
    width: 89%;
    transition: 0.3s all;
  }

  select:hover{
    border-color: #027bfd;
  }

  select:focus{
    border: none;
  }

  select:focus-visible{
    outline: none;
    border: 2px solid #027bfd;
  }

  select:visited{
    border: none;
  }

  .filter_job select{
    margin-right: 5rem;
  }

  .filters_jobs .checkbox{
    display: flex;
  }

  .filters_jobs .checkbox label{
    font-size: 16px;
  }

  .tab-content{
    width: 100%;
  }

  .tab_header{
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 1rem;
  }

  .tab_header{
    width: 100%;
    display: flex;
    align-items: center;
  }

  .tab_header .results{
    width: fit-content;
    font-size: 20px;
  }

  .tab_header .sort_by{
    margin-left: auto;
    width: fit-content;
    display: flex;
    align-items: center;
  }

  .filters_jobs .remove_filter{
    padding: 0.4rem;
    padding-bottom: 0.1rem;
    padding-top: 1rem;
    margin-left: 2rem;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    border-bottom: 2px solid transparent;
    transition: 0.3s all;
  }

  .filters_jobs .remove_filter:hover{
    border-color: #000;
  }

  #no_results{
    width: 70vw;
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

  .jobs{
    flex-wrap: wrap;
    margin-top: 0rem;
    padding-left: 3rem;
    padding-right: 3rem;
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

  .job{
    width: 15vw;
    background: #027bfd;
    border-radius: 30px;
    margin-right: 1rem;
    margin-bottom: 1rem;
    position: relative;
    min-height: 100%;
  }

  .job .head{
    background: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding-bottom: 1rem;
    border: 2px solid #efefef;
  }

  .job .title{
    font-size: 28px;
    line-height: 32px;
    color: #000;
    font-weight: 700;
    padding-top: 2rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  /*.job .title:after {
    content: "...";
    position: absolute;
    right: 0;
    top: 0;
    background-color: white;
    padding: 0 5px;
  }*/

  
  .job .job_body{
    bottom: 0;
  }

  .info{
    background: #027bfd;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    color: #fff;
  }

  .info .subtitle{
    font-weight: 700;
    font-size: 10px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .info .specs{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .info .spec1{
    display: flex;
    margin-right: 1rem;
  }

  .spec1 .spec1_title{
    font-weight: 500;
  }

  .spec1 .spec1_text{
    margin-left: 0.5rem;
  }

  .job .desc{
    color: #fff;
    padding-bottom: 1rem;
    background: #027bfd;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .job .link{
    background: #027bfd;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
  }

  .job .link .btn{
    border: 1px solid white;
  }

  .contaniner2 {
    margin-left: 0 !important;
    margin-right: 0 !important;
    max-width: 100% !important;
  }

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    border-radius: 9999px;
    background-color: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: transparent;
    border: none;
    border-radius: 9999px;
    background-clip: padding-box;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    /*background: #555;*/
  }

  .filters {
    width: 100%;
    margin-top: 3rem;
    z-index: 10;
  }
  .filtersTop {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .filters .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 6rem;
  }

  .filters .btnScrollR {
    width: fit-content;
    background: transparent;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .filters .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: transparent;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .filters .filtersContent {
    display: flex;
    width: 98vw;
    height: 100%;
    padding-bottom: 0rem;
    padding-left: 3rem;
    padding-right: 1rem;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .content.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .filters h2 {
    font-size: 30px;
    line-height: 34px;
    margin-left: 3rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 0;
  }

  .filters h2 span {
    color: #0062f5;
    font-weight: 700;
  }

  .filters .filter {
    padding: 0rem;
    background: rgb(161 161 161 / 10%);
    border-radius: 10px;
    width: fit-content;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-right: 1rem;
    cursor: pointer;
    transition: 0.5s all;
    float: left;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    align-items: center;
  }

  .filters .filter:hover {
    background: rgb(255 255 255 / 0%);
  }

  .filter h3 {
    font-size: 28px;
    color: #fff;
    line-height: 28px;
    width: 15vw;
    font-weight: 500;
    letter-spacing: -1px;
    margin-top: 4rem;
    padding-left: 1rem;
  }
  .filter h4 {
    font-size: 24px;
    color: #fff;
    line-height: 36px;
    padding-right: 1rem;
    font-weight: 200;
    width: fit-content;
    margin-left: auto;
  }

  .filter p {
    font-size: 16px;
    color: #ffffff;
    line-height: 20px;
    font-weight: 700;
  }

  .filter .icon {
    font-size: 32px;
    color: #fff;
    line-height: 24px;
    font-weight: 700;
    text-align: right;
    margin-top: 1rem;
  }
  .positions h2 {
    font-size: 34px;
    line-height: 36px;
    margin-bottom: 0.5rem;
    font-weight: 700;
    color: #fff;
    letter-spacing: -1px;
  }

  .position {
    background: #fff;
    margin-bottom: 2rem;
    width: fit-content;
    float: left;
    margin-right: 1.5rem;
    border-radius: 30px;
    padding: 1rem;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .position:hover {
    border-color: #b3b3b326;
    margin-bottom: 1rem;
  }

  .photoBlur p {
    display: none;
    line-height: 14px !important;
  }

  .position:hover :deep(.photoBlur) {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border-radius: 12px;
    background: #7474bf;
    background: -webkit-linear-gradient(to top, #348ac7, #7474bf);
    background: linear-gradient(to top, #348ac700, #141c24c7);
  }

  .position:hover :deep(.photoBlur) p {
    display: inline;
  }

  .topPosition .photo {
    height: 22vw;
    background-position: center;
    background-size: cover;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 1.5rem;
  }

  .position .content {
    padding-left: 0rem !important;
    margin-top: 1rem;
  }

  .position .subtitle {
    color: rgb(25 35 45);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0.5rem;
    letter-spacing: 0.1px !important;
  }

  .position .right {
    margin-left: auto;
    display: flex;
    align-items: center;
    width: fit-content;
  }

  .position h2 {
    font-size: 24px;
    line-height: 26px;
    margin-left: 0 !important;
    font-weight: 700;
    color: rgb(25 35 45);
    padding-left: 0.5rem;
  }

  .position p {
    color: #fff;
    font-size: 14px;
    line-height: 24px;
  }

  .position .content .infos {
    margin-top: 1rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    margin-bottom: 0rem !important;
    background: #fff;
    border-radius: 12px;
    border: 2px solid #80808038;
  }

  .position .content .infos p {
    margin-right: 1.5rem;
    font-weight: 300;
    color: rgb(25 35 45);
    margin-bottom: 0rem !important;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
  }

  .position .button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    margin-top: 1rem;
    margin-left: 0 !important;
  }

  .position .button span {
    margin-left: 0.4rem;
  }

  .position .button:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .search {
    display: flex;
    width: 100%;
    margin-top: 2rem;
  }

  .searchKey {
    width: 40%;
    margin-right: 4rem;
  }

  .searchKey input {
    font-size: 16px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
    float: right;
    padding-left: 1rem;
    padding-top: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 1.5rem;
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

  .searchKey span {
    position: absolute;
    color: white;
    right: 2%;
    top: 12%;
    font-size: 16px;
    cursor: pointer;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .searchKey #remove_search_button{
    display: none;
  }

  .searchKey span:hover {
    background-color: rgba(27, 36, 46, 0.9);
  }

  .searchLocation {
    width: 40%;
    margin-right: 4rem;
  }

  .searchLocation input {
    font-size: 16px;
    background-color: #1c1c1c;
    border: 0;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 100%;
    float: right;
    padding-left: 1rem;
    padding-top: 1.5rem;
    padding-right: 3rem;
    padding-bottom: 1.5rem;
    height: 50%;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: rgba(38, 43, 49, 0.486);
  }

  .searchLocation span {
    position: absolute;
    color: white;
    right: 2%;
    top: 9%;
    font-size: 16px;
    cursor: pointer;
    padding-left: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    border-radius: 12px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .searchLocation span:hover {
    background-color: rgba(27, 36, 46, 0.9);
  }

  .ctaTitle {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 56px;
    line-height: 60px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    margin-top: 4rem;
  }

  .ctaCV {
    width: 90%;
    background-color: white;
    border-radius: 30px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5rem;
    margin-bottom: 5rem;
  }

  .ctaCV .cols {
    height: 100%;
  }

  .ctaCV .col-padding {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .ctaCV .col h3 {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    letter-spacing: -1px;
  }

  .ctaCV .col h3 span {
    font-size: 34px;
    line-height: 38px;
    font-weight: 700;
    background: -webkit-linear-gradient(-70deg, #01a49e 0%, #2960ec 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .ctaCV .col {
    width: 50%;
  }

  .ctaCV .button {
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    background: #0062f5;
    color: #fff;
    line-height: 18px;
    font-size: 14px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.5px;
    border-radius: 16px;
    width: fit-content;
    transition: 0.5s all;
    margin-top: 2rem;
    cursor: pointer;
  }

  .ctaCV .button span {
    margin-left: 0.4rem;
  }

  .ctaCV .button:hover {
    background: #ed3fb4;
    color: #fff;
  }

  .filtersPositions {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background: #0c2550;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 12px;
  }

  .filtersPositions .filterPosition {
    color: rgb(196, 196, 196);
    font-size: 16px;
    line-height: 16px;
    font-weight: 500;
    display: flex;
    cursor: pointer;
    align-items: center;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: transparent;
    border: none;
  }

  .filtersPositions .filterPosition:hover {
    color: white;
  }

  .dropdown-menu {
    background: #0c2550;
    border: 2px solid #b3b3b326;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 12px;
    margin-top: 2rem;
  }

  .dropdown-item {
    padding-left: 0.8rem !important;
    padding-right: 0.8rem !important;
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
    border-radius: 12px;
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
  }

  .dropdown-item:hover {
    color: #fff;
    background: #3e455052;
  }

  .dropdown-menu li a {
    color: #fff;
  }

  .filtersPositions .separetor {
    width: 1px;
    height: 2vw;
    background: transparent;
    margin-right: 2rem;
    margin-left: 2rem;
  }

  .filtersPositions .filterPosition p {
    transform: rotate(90deg);
    margin-left: 1.2rem;
    margin-top: 0 !important;
    margin-bottom: 0rem !important;
  }

  .navMain{
    background: #0c2550;
  }

  .nav {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    border-bottom: none;
    padding-bottom: 17rem;
  }

  .nav .btn {
    margin-top: 0rem !important;
    line-height: 24px !important;
  }

  .nav .btn a {
    font-size: 15px;
    color: #fff !important;
  }

  .nav li {
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    border-radius: 12px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  .nav li:hover {
    background: #3e455052;
  }

  

  .navMain .active{
    background: #3e455052;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    border-radius: 12px;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  .nav li .active {
    background: #3e455052;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.6rem;
    padding-bottom: 0.6rem;
    border-radius: 12px;
    transition: all 0.3s ease-out;
    cursor: pointer;
  }

  .nav li:hover ::v-deep(a) {
    color: #fff;
  }

  .nav li a {
    color: rgba(255, 255, 255, 0.6);
    font-weight: 500;
    font-size: 16px;
  }

  .nav li a:hover {
    color: #fff;
  }

  .suggestWords {
    position: absolute;
    left: 23%;
    width: 0%;
    top: 90%;
    font-size: 16px;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #131b23;
    border: 2px solid #b3b3b326;
    z-index: 11;
    visibility: hidden;
    opacity: 0;
    display: unset;
  }

  .closesuggestWords {
    margin-left: auto;
    cursor: pointer;
  }

  .suggestTopDiv {
    width: 100%;
    display: flex;
    align-items: center;
  }

  /*#suggestWordsOverlay {
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: block;
  }*/

  .suggestWords h5 {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 0 !important;
  }

  .suggestWords .keyWords {
    margin-top: 1rem;
  }

  .suggestWords .keyWord {
    font-size: 14px;
    line-height: 14px;
    font-weight: 500;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    padding-top: 0.8rem;
    padding-bottom: 0.8rem;
    background: #3e455052;
    width: fit-content;
    border-radius: 12px;
    float: left;
    margin-right: 0.5rem;
    margin-bottom: 0.7rem;
    cursor: pointer;
    transition: all 0.3s;
  }

  .suggestWords .keyWord:hover{
    background: #0062f5;
  }

  .jobAlert {
    font-size: 16px;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    padding: 2rem;
  }

  .bg1 {
    width: 0%;
    opacity: 0;
    visibility: hidden;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .bg2 {
    width: 0%;
    opacity: 0;
    visibility: hidden;
    display: none;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .bgTransparent {
    position: fixed;
    height: 100%;
    background-color: #26334285;
    backdrop-filter: blur(12px);
    z-index: 15;
    top: 0;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  .popup {
    position: fixed;
    z-index: 10;
    background: #0c25509f;
    backdrop-filter: blur(12px);
    width: 80%;
    border-radius: 40px;
    padding: 4rem;
    left: 10%;
    top: 5%;
    box-shadow: rgb(50 50 93 / 25%) 0px 13px 27px -5px,
      rgb(0 0 0 / 30%) 0px 8px 16px -8px;
  }

  .popup .body {
    display: flex;
  }

  .popup .body .jobAlertHeader {
    width: 50%;
    padding: 2rem;
  }

  .popup .body .jobAlertHeader h2 {
    color: #fff;
    font-size: 28px;
    line-height: 32px;
    margin-bottom: 3rem;
  }

  .popup .body .jobAlertHeader .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 3px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 1rem;
  }

  .popup .body .jobAlertHeader .photo {
    background: transparent;
    border-radius: 30px;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_website%2Fstorie.jpg?alt=media&token=78064b9a-393a-4c5e-83e8-5a15be65189c);
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 70%;
  }

  .popup .body .jobAlertHeader .bell {
    margin-top: 5rem;
    margin-left: 5rem;
    transform: rotate(-20deg);
  }

  .popup .body .jobAlertHeader .bell2 {
    position: absolute;
    transform: rotate(20deg);
  }

  .closeMenu {
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 2rem;
    width: fit-content;
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

  .closeMenu:hover {
    border-color: white;
    transform: rotate(90deg);
  }

  .jobAlert .input {
    width: 95%;
    margin-bottom: 1.5rem;
  }

  .jobAlert .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 95%;
    float: right;
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

  .jobAlert::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #fff;
    opacity: 1; /* Firefox */
  }

  .jobAlert input:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  .jobAlert .select select {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 95%;
    float: right;
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

  .jobAlert select:focus {
    outline: none;
    background-color: rgb(38 43 49 / 31%);
    border-color: #0062f5;
  }

  .jobAlert .checkbox {
    display: flex;
    align-items: center;
    margin-top: 1rem;
  }

  .jobAlert .checkbox input {
    margin-right: 0.5rem;
    cursor: pointer;
  }

  .jobAlert .checkbox p {
    margin-bottom: 0 !important;
    color: #fff;
    font-size: 14px;
    line-height: 14px;
  }

  .secondPart2 {
    padding-top: 5rem;
    margin-bottom: 0rem;
  }

  .secondPart2 .title {
    display: inline !important;
  }

  .secondPart2 h2 {
    color: #000;
    letter-spacing: -0.04em;
    font-size: 56px;
    line-height: 60px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 h2 span{
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em;
    font-size: 56px;
    line-height: 64px;
    font-weight: 800;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 h2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
  }

  .secondPart2 .title p {
    color: #000;
    font-size: 18px;
    line-height: 22px;
    font-weight: 300 !important;
    width: 65%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .secondPart2 .title p span {
    color: #c554a0;
    font-weight: 600;
  }

  .secondPart2 .cols {
    margin-top: 5rem !important;
  }

  .secondPart2 .cols .col2 {
    width: 30%;
  }

  .steps {
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    width: fit-content;
    display: flex;
    margin-left: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: nowrap;
    position: relative;
  }

  .step {
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    text-align: center;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    float: left;
    width: 50%;
    transition: all 0.3s ease-out;
    text-align: left;
    background: #0c2550;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  }

  .step .number {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    background: linear-gradient(90.91deg, #027bfd -24.67%, #5162fb 53.55%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    margin-bottom: 1rem;
  }

  .step .title {
    color: #fff;
    margin-left: 0 !important;
    font-size: 38px;
    line-height: 42px;
    font-weight: 700;
    letter-spacing: -0.04em !important;
    width: 100% !important;
    margin-bottom: 0.2rem;
  }

  .step .text {
    margin-left: 0 !important;
    width: 100% !important;
    color: #cccccc;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300 !important;
    margin-top: 0.5rem;
  }

  .featuredContent {
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    cursor: pointer;
  }

  .featuredContent.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .featureds .titles {
    align-items: center;
    display: flex;
    margin-left: 5rem;
    margin-right: 3rem;
    margin-bottom: 2rem;
  }

  .featureds .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
  }

  .featureds .titles h2 {
    font-size: 40px;
    line-height: 42px;
    color: #000;
    font-weight: 800;
    margin-top: 3rem;
    letter-spacing: -0.02em;
    width: fit-content;
  }

  .featureds .btnScrollR {
    width: fit-content;
    background: white;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .featureds .btnScrollL {
    margin-right: 1rem;
    width: fit-content;
    background: #fff;
    border: 2px solid rgb(209, 209, 209);
    border-radius: 25rem;
    height: auto;
    z-index: 10;
    padding: 0.7rem;
    line-height: 0px;
    cursor: pointer;
  }

  .featureds .featured {
    border-radius: 30px;
    background-color: #0089cc;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-size: cover;
    background-position: center;
    width: 75vw;
    float: left;
    height: 11vw;
    position: relative;
  }

  .featured .info_story{
    bottom: 0;
    padding: 2rem;
    padding-top: 1rem;
    width: 100%;
    border-radius: 30px;
    width: 100%;
  }

  .featured .info_story .basic_informations{
    margin-right: auto;
  }

  .featured .info_story .username{
    color: white;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
  }

  .featured .info_story .jobtitle{
    color: white;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  .featured .info_story .text_preview{
    color: white;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .featured .hover {
    height: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .featured h2 {
    color: #fff;
    padding: 2rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    font-size: 30px;
    line-height: 0;
    width: 30vw;
  }
  
  .featured p {
    color: #fff;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }

  .featureds .featured2 {
    border-radius: 30px;
    background-color: #0c2550;
    margin-right: 1rem;
    margin-left: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0 0 0 1px rgb(53 72 91 / 14%), 0 3px 2px rgb(0 0 0 / 4%),
      0 7px 5px rgb(0 0 0 / 2%), 0 13px 10px rgb(0 0 0 / 2%),
      0 22px 17px rgb(0 0 0 / 2%) !important;
    background-size: cover;
    background-position: center;
    width: 75vw;
    float: left;
    height: 11vw;
    position: relative;
  }

  .featured2 .info_story{
    bottom: 0;
    padding: 2rem;
    padding-top: 1rem;
    width: 100%;
    border-radius: 30px;
    width: 100%;
  }

  .featured2 .info_story .basic_informations{
    margin-right: auto;
  }

  .featured2 .info_story .username{
    color: #fff;
    font-size: 26px;
    line-height: 30px;
    font-weight: 700;
  }

  .featured2 .info_story .jobtitle{
    color: #fff;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
  }

  .featured2 .info_story .text_preview{
    color: #fff;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }

  .featured2 .hover {
    height: 100%;
    border-radius: 30px;
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .featured2 h2 {
    color: #fff;
    padding: 2rem;
    padding-bottom: 0rem;
    padding-top: 0rem;
    font-size: 30px;
    line-height: 0;
    width: 30vw;
  }
  
  .featured2 p {
    color: #fff;
    padding: 2rem;
    padding-top: 2rem;
    padding-bottom: 1rem;
    margin-bottom: 0;
    font-size: 16px;
    line-height: 20px;
  }
}

@media (max-width: 1023px) {
}
</style>
