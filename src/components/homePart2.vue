<script>
export default {
  name: "homePart2",
  components: {},
  data() {
    return {};
  },
  mounted() {

    /*const flavoursContainer = document.getElementById("feedbacksContainer");
    const flavoursScrollWidth = flavoursContainer.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
          flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
        }

        if (flavoursContainer.scrollLeft > 13500) {
          flavoursContainer.scrollTo(0, 0);
        }
      }, 15);
    });*/

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

    const slider = document.querySelector(".feedbacks");
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
      slider.addEventListener("mouseover", () => {
        scrollLeft = slider.scrollLeft;
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

    const flavoursContainer2 = document.getElementById("clientsCoBodyId");
    const flavoursScrollWidth2 = flavoursContainer2.scrollWidth;

    window.addEventListener("load", () => {
      self.setInterval(() => {
        if (flavoursContainer2.scrollLeft !== flavoursScrollWidth2) {
          flavoursContainer2.scrollTo(flavoursContainer2.scrollLeft + 1, 0);
        }

        if (flavoursContainer2.scrollLeft > 7800) {
          flavoursContainer2.scrollTo(0, 0);
        }
      }, 15);
    });

    const slider2 = document.querySelector(".clientsCoBody");

    if(slider2 != 0){
      const slider = document.querySelector(".clientsCoBody");
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
    
  },
  methods: {
    btnScrollSx() {
      let content = document.querySelector(".feedbacks");
      const itemWidth = content.querySelector(".feedback").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      console.log(content);
    },

    btnScrollDx() {
      let content = document.querySelector(".feedbacks");
      const itemWidth = content.querySelector(".feedback").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    workflowScrollSx() {
      let content = document.querySelector(".workflowFlex");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
    },

    workflowScrollDx() {
      let content = document.querySelector(".workflowFlex");
      const itemWidth = content.querySelector(".workflowColumn").clientWidth;
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    btnScrollSxClients() {
      let content = document.querySelector(".clientsCoBody");
      const itemWidth = "150px";
      content.scrollBy({ left: -itemWidth * 2, top: 0, behavior: "smooth" });
      
    },

    btnScrollDxClients() {
      let content = document.querySelector(".clientsCoBody");
      const itemWidth = "150px";
      content.scrollBy({ left: itemWidth * 2, top: 0, behavior: "smooth" });
    },

    call_btn() {
      document.querySelector(".calendly-badge-content").click();
    },

    show_more(x1) {
      let content = document.querySelector("." + x1);
      content.style.height = "100%";
      content.style.opacity = "1";
      content.style.visibility = "visible";
      content.style.display = "inline";

      let content2 = document.querySelector("." + x1 + "_show");
      content2.style.display = "none";

      const fruits = ["step1", "step2", "step3", "step4", "step5"];
      fruits.forEach(myFunction);

      function myFunction(item) {
        if (item != x1) {
          let content = document.querySelector("." + item);
          content.style.height = "0%";
          content.style.opacity = "0";
          content.style.visibility = "hidden";
          content.style.display = "none";
        }

        if ("." + x1 + "_show" != "." + item + "_show") {
          let content2 = document.querySelector("." + item + "_show");
          content2.style.display = "block";
        }
      }
    },
  },
};
</script>

<template>
  <div class="dynamicContent">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 1680 40"
      class="position-absolute width-full z-1"
      style="top: -1.8rem"
    >
      <path d="M0 40h1680V30S1340 0 840 0 0 30 0 30z" fill="#fff"></path>
    </svg>

    <div class="mainTitle" id="second">
      <div class="content">
        <div class="first" style="width: 100% !important;">
          <div class="title">
            <h2>
              <span class="gradientTitle">Jobify Recruiting: </span><br>la tua agenzia di head hunting
            </h2>
            <p>
              Trovare, valorizzare e trattenere i <span style="color: #c554a0; font-weight: 500"
                >talenti</span> è compito di ogni azienda e per questo puoi affidarti a Jobify
              Recruiting, la tua agenzia di head hunting digitale e dinamica, formata da persone giovani che lavorano in
              un contesto nazionale.
            </p>
            <div class="" style="display: flex; align-items: center">
              <router-link to="/companies"
                ><button class="btn">
                  Scopri chi siamo
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
              ></router-link>
            </div>
          </div>
          <div class="video transition">
            <video width="450" height="450" controls style="border-radius: 30px;">
  <source src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/video_home.mp4?alt=media&token=6e32bfee-c070-4f4f-a1a8-ca716751cc2e" type="video/mp4">
  </video>
          </div>
        </div>
      </div>
    </div>

    <div class="mainTitle" id="second">
      <div class="content">
        <div class="first" style="width: 100% !important;">
          <div class="imageContent">
            
          </div>
          <div class="title" style="margin-left: 2rem; width: 60vw;">
            <h2>I nostri punti di <span class="gradientTitle">forza</span>
            </h2>
            <p>
                Jobify Recruiting fa head hunting in modo consapevole e mette a disposizione di candidati e aziende un
                  team caratterizzato da energia e passione. Lavorare con Jobify Recruiting significa poter contare su un
                  approccio:
            </p>
            <p>❖ Umano<br>
                ❖ Scientifico<br>
                ❖ Trasparente<br>
                ❖ Consulenziale<br></p>
          </div>
        </div>
      </div>
    </div>

    <div class="clientsCo">
      <div class="clientsCoBorder">
        <div class="clientsCoLink">
          <h2><span>I clienti</span> di Jobify Recruiting</h2>
        </div>
        <div class="clientsCoDiv">
          <div class="clientsCoBody" id="clientsCoBodyId">
            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-4.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="data:image/svg+xml,%3csvg width='330px' height='44px' viewBox='0 0 330 44' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e %3c!-- Generator: Sketch 52.6 (67491) - http://www.bohemiancoding.com/sketch --%3e %3ctitle%3elogo/mamacrowd_logo_2020%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='logo/mamacrowd_logo_2020' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3cpath d='M166.56625,36.98 C163.632045,36.98 160.97066,36.3404424 158.589504,35.0603989 C156.203924,33.7779773 154.324101,31.9949099 152.957504,29.7172479 C151.589878,27.4378723 150.90625,24.8621823 150.90625,22 C150.90625,19.1378177 151.589878,16.5621277 152.957504,14.2827521 C154.324101,12.0050901 156.203924,10.2220227 158.589504,8.93960107 C160.970852,7.65945451 163.645559,7.02 166.60625,7.02 C169.099515,7.02 171.360682,7.45986212 173.385841,8.34156419 C175.416819,9.22579954 177.126792,10.4996255 178.510361,12.1599078 L178.814628,12.5250284 L173.926118,17.0374992 L173.588253,16.6472897 C171.789012,14.5692923 169.579799,13.54 166.92625,13.54 C165.276048,13.54 163.813432,13.8993497 162.530161,14.6164717 C161.250921,15.3313411 160.257591,16.3246708 159.542722,17.6039107 C158.8256,18.8871817 158.46625,20.349798 158.46625,22 C158.46625,23.650202 158.8256,25.1128183 159.542722,26.3960893 C160.257591,27.6753292 161.250921,28.6686589 162.530161,29.3835283 C163.813432,30.1006503 165.276048,30.46 166.92625,30.46 C169.578437,30.46 171.786893,29.418512 173.586299,27.3149815 L173.923837,26.920395 L178.8118,31.4323617 L178.512946,31.796964 C177.128781,33.4856458 175.410801,34.7741305 173.364706,35.6589285 C171.326642,36.5402534 169.059198,36.98 166.56625,36.98 Z M194.164274,28.7 L188.96625,28.7 L188.96625,36.5 L181.48625,36.5 L181.48625,7.5 L194.10625,7.5 C196.653926,7.5 198.877063,7.92673209 200.7724,8.78447577 C202.68401,9.6495839 204.165419,10.8852617 205.20564,12.4877645 C206.246974,14.0919814 206.76625,15.9866385 206.76625,18.16 C206.76625,20.3349847 206.239401,22.2246152 205.182841,23.8164988 C204.230907,25.2507467 202.919606,26.3803129 201.257273,27.2025453 L207.74483,36.5 L199.564274,36.5 L194.164274,28.7 Z M188.96625,13.78 L188.96625,22.54 L193.74625,22.54 C195.584471,22.54 196.951892,22.1457883 197.864182,21.3775444 C198.759309,20.6237534 199.20625,19.5652087 199.20625,18.16 C199.20625,16.7285934 198.759515,15.664659 197.867155,14.9249397 C196.954549,14.1684371 195.585771,13.78 193.74625,13.78 L188.96625,13.78 Z M224.44625,36.98 C221.458907,36.98 218.757584,36.3338821 216.349651,35.0404778 C213.937571,33.7448464 212.044272,31.9551953 210.677504,29.6772479 C209.310005,27.398084 208.62625,24.8357286 208.62625,22 C208.62625,19.1642714 209.310005,16.601916 210.677504,14.3227521 C212.044272,12.0448047 213.937571,10.2551536 216.349651,8.95952222 C218.757584,7.66611786 221.458907,7.02 224.44625,7.02 C227.433902,7.02 230.12894,7.66625926 232.523903,8.96008959 C234.921679,10.2554399 236.814097,12.0442585 238.193849,14.3208491 C239.575395,16.6004009 240.26625,19.1634713 240.26625,22 C240.26625,24.8365287 239.575395,27.3995991 238.193849,29.6791509 C236.814097,31.9557415 234.921679,33.7445601 232.523903,35.0399104 C230.12894,36.3337407 227.433902,36.98 224.44625,36.98 Z M224.44625,30.46 C226.014394,30.46 227.422274,30.1017448 228.678648,29.3856114 C229.932541,28.6708925 230.914032,27.6768989 231.629778,26.3960893 C232.3469,25.1128183 232.70625,23.650202 232.70625,22 C232.70625,20.349798 232.3469,18.8871817 231.629778,17.6039107 C230.914032,16.3231011 229.932541,15.3291075 228.678648,14.6143886 C227.422274,13.8982552 226.014394,13.54 224.44625,13.54 C222.878106,13.54 221.470226,13.8982552 220.213852,14.6143886 C218.959959,15.3291075 217.978468,16.3231011 217.262722,17.6039107 C216.5456,18.8871817 216.18625,20.349798 216.18625,22 C216.18625,23.650202 216.5456,25.1128183 217.262722,26.3960893 C217.978468,27.6768989 218.959959,28.6708925 220.213852,29.3856114 C221.470226,30.1017448 222.878106,30.46 224.44625,30.46 Z M262.258665,18.6348026 L256.265909,36.5 L248.624238,36.5 L239.095666,7.5 L246.870831,7.5 L252.836546,26.076783 L259.066564,7.5 L265.790331,7.5 L271.830666,26.2250392 L277.984257,7.5 L285.235897,7.5 L275.748754,36.5 L268.06297,36.5 L262.258665,18.6348026 Z M287.74625,7.5 L300.96625,7.5 C304.080668,7.5 306.843361,8.09641273 309.248833,9.29227589 C311.664986,10.4934492 313.549264,12.1906848 314.892357,14.3784028 C316.235698,16.5665258 316.90625,19.1104756 316.90625,22 C316.90625,24.8895244 316.235698,27.4334742 314.892357,29.6215972 C313.549264,31.8093152 311.664986,33.5065508 309.248833,34.7077241 C306.843361,35.9035873 304.080668,36.5 300.96625,36.5 L287.74625,36.5 L287.74625,7.5 Z M295.22625,13.82 L295.22625,30.18 L300.64625,30.18 C303.325738,30.18 305.436268,29.4428894 307.004571,27.9749583 C308.565477,26.5139504 309.34625,24.5339097 309.34625,22 C309.34625,19.4660903 308.565477,17.4860496 307.004571,16.0250417 C305.436268,14.5571106 303.325738,13.82 300.64625,13.82 L295.22625,13.82 Z' id='crowd' stroke='%234FBDBF' fill='%234EBDBF'%3e%3c/path%3e %3cpath d='M38.893058,21.0099512 L31.4329711,33.54 L27.9476609,33.54 L20.52875,21.3440343 L20.52875,36.5 L13.44875,36.5 L13.44875,7.5 L19.591288,7.5 L29.7854486,24.4254193 L39.8239731,7.5 L45.9273235,7.5 L46.0101806,36.5 L38.9299391,36.5 L38.893058,21.0099512 Z M71.2543888,30.5 L58.9231112,30.5 L56.4431112,36.5 L48.6984759,36.5 L61.6241902,7.5 L68.6728867,7.5 L81.6400295,36.5 L73.7343888,36.5 L71.2543888,30.5 Z M68.8004709,24.58 L65.10875,15.6666557 L61.4170291,24.58 L68.8004709,24.58 Z M109.733058,21.0099512 L102.272971,33.54 L98.7876609,33.54 L91.36875,21.3440343 L91.36875,36.5 L84.28875,36.5 L84.28875,7.5 L90.431288,7.5 L100.625449,24.4254193 L110.663973,7.5 L116.767323,7.5 L116.850181,36.5 L109.769939,36.5 L109.733058,21.0099512 Z M142.094389,30.5 L129.763111,30.5 L127.283111,36.5 L119.538476,36.5 L132.46419,7.5 L139.512887,7.5 L152.48003,36.5 L144.574389,36.5 L142.094389,30.5 Z M139.640471,24.58 L135.94875,15.6666557 L132.257029,24.58 L139.640471,24.58 Z' id='mama' stroke='%234A4A4A' fill='%234A4A4A'%3e%3c/path%3e %3c/g%3e %3c/svg%3e"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://www.serverplan.com/assets/images/serverplan.png"
              />
            </div>

            <div class="logoClient" >
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/10/logo.png"
              />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-2.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/06/logo_bit4id.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://static.wixstatic.com/media/aa2e06_cd3d54eb615144ca903cc5a5d5d754e7~mv2.png/v1/fill/w_214,h_25,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Contaq%20Logo%20blu.png"
              />
            </div>

            <div class="logoClient">
              <img src="https://www.simol.com/static/img/logo.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/equity+factory.jpg" />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
              src="https://thingsss.s3.eu-central-1.amazonaws.com/cikis+studio.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/nte+process.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/adipso.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/Khale+automation.png" />
            </div>
            
            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/stragroup.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/ghezzi.png" />
            </div>
            
            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/system+management.jpeg" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/unipol+rental.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/alifmed.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/betflag.png" />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
              src="https://thingsss.s3.eu-central-1.amazonaws.com/BN+Partners.png" />
            </div>

            <div class="logoClient">
              <img src="https://thingsss.s3.eu-central-1.amazonaws.com/celda.jpeg" />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/athena_logo.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-etwo.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-border-white-1-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-OrfinSito.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/studio-felli-1-1.jpg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-07-at-22.44.28-1.jpeg"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-5.png"
              />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/09/Senza-titolo-3-1.png"
              />
            </div>


            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo-autoscuole-furia-3-1.jpg"
              />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo20white.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Schermata-2020-07-10-alle-16.59.13-1-1.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/logo_irec-1.png"
              />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/AG_LOGO_CLAIM_BIANCO-1.png"
              />
            </div>

            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/PentaFinanziamentiItalia.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Cattura-4.png"
              />
            </div>

            <div class="logoClient">
              <img
                src="https://davidemaggiohr.it/wp-content/uploads/2021/04/Unione-professionisti-1.jpg"
              />
            </div>
            
            <div class="logoClient">
              <img
                src="https://www.studiorossihr.com/wp-content/uploads/2020/10/logo-orizzontale500.png"
              />
            </div>
            
            <div class="logoClient">
              <img src="https://www.autosystemspa.it/img/logo-autosystem.png" />
            </div>
            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
                    src="https://thingsss.s3.eu-central-1.amazonaws.com/logo-cascone-home.png" />
            </div>
            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;" 
                src="https://www.dotstay.com/workspace/static/images/logos/logodotstaybianco.svg"
              />
            </div>
            <div class="logoClient">
              <img style="background: #0c2550; padding: 1.5rem; border-radius: 20px;"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxOTAuMiA1My4yIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxOTAuMiA1My4yOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+Cjx0aXRsZT5Bc3NldCA1PC90aXRsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTI1LjYsNDAuOGMtMywwLjEtNi0wLjgtOC41LTIuNWMtMi4xLTEuNS0zLjQtMy45LTMuNi02LjVoNy42YzAuMSwxLDAuNiwyLDEuNSwyLjZjMC45LDAuNiwyLDAuOSwzLjEsMC45CgljMi4zLDAsMy41LTAuNywzLjUtMi4xYzAtMC42LTAuMy0xLjItMC44LTEuNmMtMC44LTAuNS0xLjctMC44LTIuNi0xbC01LTEuM2MtMi0wLjQtMy44LTEuNS01LjEtMy4xYy0xLjEtMS41LTEuNy0zLjMtMS43LTUuMgoJYzAtMi4zLDEtNC40LDIuOS01LjdjMi4zLTEuNiw1LTIuMyw3LjgtMi4yYzIuNy0wLjEsNS4zLDAuNyw3LjUsMi4zYzIsMS41LDMuMiwzLjcsMy4zLDYuMWgtNy40Yy0wLjMtMS44LTEuNS0yLjctMy41LTIuNwoJYy0wLjgsMC0xLjYsMC4xLTIuMywwLjVjLTAuNSwwLjMtMC45LDAuOS0wLjksMS41YzAsMS4yLDEsMiwzLDIuNWw0LjcsMS4zYzIuMSwwLjQsNC4xLDEuNCw1LjYsM2MxLjIsMS41LDEuOCwzLjMsMS44LDUuMwoJYzAsMi40LTEuMSw0LjYtMy4xLDUuOUMzMS4yLDQwLjEsMjguNCw0MC45LDI1LjYsNDAuOCIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDguNyw1MS4zaC03LjNWMTMuNmg3LjN2M2MwLjgtMS4xLDEuOS0xLjksMy4xLTIuNWMxLjQtMC43LDMtMS4xLDQuNi0xLjFjMy40LDAsNi43LDEuNSw4LjksNC4xCgljMi40LDIuNywzLjcsNi4yLDMuNyw5LjhjMC4xLDMuNi0xLjIsNy4xLTMuNiw5LjhjLTIuMiwyLjYtNS41LDQuMS04LjksNC4xYy0xLjYsMC0zLjItMC4zLTQuNi0xLjFjLTEuMi0wLjYtMi4zLTEuNC0zLjEtMi41CglMNDguNyw1MS4zTDQ4LjcsNTEuM3ogTTUwLDMyLjFjMi43LDIuNyw3LDIuNyw5LjcsMGMwLDAsMCwwLDAsMGMxLjMtMS40LDEuOS0zLjMsMS44LTUuMmMwLjEtMS45LTAuNi0zLjgtMS44LTUuMgoJYy0yLjctMi43LTcuMS0yLjctOS43LDBjMCwwLDAsMCwwLDBjLTEuMywxLjQtMS45LDMuMy0xLjgsNS4yQzQ4LjEsMjguOCw0OC43LDMwLjcsNTAsMzIuMSIvPgo8cGF0aCBjbGFzcz0ic3QwIiBkPSJNODcuNSw0MC4yVjEzLjZoNy4zdjNjMS42LTIuNCw0LjItMy42LDcuNi0zLjZjMi45LTAuMiw1LjYsMSw3LjYsMy4xYzEuOSwyLjQsMi45LDUuNCwyLjcsOC40djE1LjZoLTcuM1YyNS44CgljMC4xLTEuNi0wLjMtMy4yLTEuMi00LjVjLTAuOC0xLjEtMi4xLTEuNy0zLjUtMS42Yy0xLjctMC4xLTMuMiwwLjctNC4zLDEuOWMtMS4yLDEuNi0xLjgsMy42LTEuNiw1LjZ2MTNIODcuNXoiLz4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTEyOC42LDQwLjhjLTIuOCwwLjItNS42LTEtNy40LTMuMmMtMS45LTIuNS0yLjgtNS41LTIuNi04LjZWMTMuNmg3LjN2MTQuMmMwLDQuMiwxLjUsNi4zLDQuNSw2LjMKCWMxLjYsMC4xLDMuMS0wLjcsNC0xLjljMS4xLTEuNywxLjYtMy43LDEuNS01LjZ2LTEzaDcuM3YyNi42aC03LjN2LTNDMTM0LjMsMzkuNiwxMzEuNSw0MSwxMjguNiw0MC44Ii8+CjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0xNTcsNTEuM2gtNy4zVjEzLjZoNy4zdjNjMC44LTEuMSwxLjktMS45LDMuMS0yLjVjMS40LTAuNywzLTEuMSw0LjYtMS4xYzMuNCwwLDYuNywxLjUsOC45LDQuMQoJYzIuNCwyLjcsMy43LDYuMiwzLjYsOS44YzAuMSwzLjYtMS4yLDcuMS0zLjYsOS44Yy0yLjIsMi42LTUuNSw0LjEtOC45LDQuMWMtMS42LDAtMy4yLTAuMy00LjYtMS4xYy0xLjItMC42LTIuMy0xLjQtMy4xLTIuNVY1MS4zegoJIE0xNTguMiwzMi4xYzIuNywyLjcsNywyLjcsOS43LDBjMCwwLDAsMCwwLDBjMS4zLTEuNCwxLjktMy4zLDEuOC01LjJjMC4xLTEuOS0wLjYtMy44LTEuOC01LjJjLTIuNy0yLjctNy4xLTIuNy05LjcsMGMwLDAsMCwwLDAsMAoJYy0xLjMsMS40LTEuOSwzLjMtMS44LDUuMkMxNTYuMywyOC44LDE1NywzMC43LDE1OC4yLDMyLjEiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSI3My44LDQwLjIgODEuMSw0MC4yIDgxLjEsMjkuMyA3My44LDI5LjMgNzMuOCw0MC4yICIvPgo8cG9seWdvbiBjbGFzcz0ic3QwIiBwb2ludHM9IjgxLjEsMTMuNiA3My44LDEzLjYgNzMuOCwyNC41IDgxLjEsMjQuNSA4MS4xLDEzLjYgIi8+Cjxwb2x5Z29uIGNsYXNzPSJzdDAiIHBvaW50cz0iMCw1My4yIDAsMCAxMS44LDAgMTEuOCw1LjcgNy4zLDUuNyA3LjMsNDcuNSAxMS44LDQ3LjUgMTEuOCw1My4yIDAsNTMuMiAiLz4KPHBvbHlnb24gY2xhc3M9InN0MCIgcG9pbnRzPSIxOTAuMiwwIDE5MC4yLDUzLjIgMTc4LjQsNTMuMiAxNzguNCw0Ny41IDE4Mi45LDQ3LjUgMTgyLjksNS43IDE3OC40LDUuNyAxNzguNCwwIDE5MC4yLDAgIi8+Cjwvc3ZnPgo="
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="secondDiv" id="second">
      <div class="content">
        <div class="first" style="display: inline !important">
          <div class="title">
            <h2>
              <span>I servizi offerti</span> da Jobify Recruiting
            </h2>
            <p>
              Jobify Recruiting è un’agenzia affidabile e competente che supporta le aziende nella ricerca del giusto
candidato e i candidati nel proporsi al meglio alle aziende grazie al supporto nella redazione CV e lettera di
presentazione. Si tratta di un lavoro complesso, che affrontiamo ogni giorno mettendo al centro potenziali
e talenti.
              <br />
            </p>
            <div class="steps">
              <router-link to='/companies'>
                <div class="feature transition">
                  <div class="number">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      fill="#0062f5"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </div>
                  <div class="title">Ricerca e selezione <br>del personale</div>
                  <div class="text">
                    lavoriamo ogni giorno per creare il match perfetto tra azienda e
                    candidato e aiutare le aziende a trovare la risorsa migliore.
                  </div>
                  <div class="featureShowMore" @click="show_more('step1')">
                    Scopri i servizi per le aziende
                  </div>
                </div></router-link
              >
                <div class="feature transition">
                  <div class="number">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#0062f5" class="bi bi-patch-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                      <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                    </svg>
                  </div>
                  <div class="title">Le divisioni <br>che trattiamo</div>
                  <div class="text">
                    In Jobify Recruiting offriamo consulenza alle aziende che cercano figure impiegatizie, white collars e middle
e top management. Le divisioni che trattiamo sono IT, HR, FARM, DIGITAL, FINANCE.
                  </div>
                  <router-link to='/openposition'>
                    <div class="featureShowMore">
                      Scopri le offerte di lavoro
                    </div>
                  </router-link>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="thirdPart" id="whyJobify">
      <div class="thirdPartDiv">
        <div class="first">
          <div class="col1">
            <h2>Perchè scegliere <br>Jobify Recruiting?</h2>
            <p>
              <!--<span>Jobify Recruiting</span>-->
              Jobify Recruiting nasce per umanizzare il processo di Ricerca &amp; Selezione e si propone sul mercato come
agenzia qualificata di Head Hunting che punta alla ricerca di talenti e alla valorizzazione del potenziale delle
persone con un metodo e un approccio consulenziale ben diverso da quello delle tradizionali agenzie del
lavoro.
            </p>
            <p>
              L’obiettivo è quello di porre il rapporto umano al centro tra domanda e offerta, per creare il match “perfetto” tra azienda e candidato.
            </p>
          </div>
          <div class="col2" >
          </div>
        </div>
      </div>
    </div>

    <div class="thirdPart" id="whyJobify">
      <div class="thirdPartDiv">
        <div class="first">
          <div class="col1">
            <h2>Il metodo</h2>
            <p>
              Jobify Recruiting è molto diversa dalle agenzie di ricerca personale. Siamo una società di Head Hunting che
              utilizza un metodo scientifico con un approccio consulenziale. Il processo di selezione è umano e studiato
              nei minimi dettagli per prendere decisioni in modo consapevole e trasparente al fine di lavorare in perfetta
              sinergia con l’azienda. 
            </p>
            <p>Per questo il nostro metodo di ricerca talenti si basa su: Interviste all’azienda per
              comprendere e approfondire la cultura aziendale, il clima aziendale, l&#39;organigramma ed il funzionigramma,
              oltre al riporto diretto della risorsa da inserire, Interviste al candidato per comprendere ed approfondire i
              valori e le aspettative dal punto di vista professionale
            </p>
          </div>
          <div class="col3" >
          </div>
        </div>
      </div>
    </div>

    <div class="workflow" id="workflow">
      <div class="workflowTitle">
        <h2 class="workflowTitle2" style="margin-bottom: 2rem !important">
          I vantaggi
        </h2>
        <p>
          Il nostro processo di selezione si caratterizza per il fatto di garantire:
              <br />
            </p>
      </div>
      <div class="buttons">
        <div class="btnScrollL" @click="workflowScrollSx()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#0c2550"
            class="bi bi-chevron-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
            />
          </svg>
        </div>
        <div class="btnScrollR" @click="workflowScrollDx()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#0c2550"
            class="bi bi-chevron-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>
      <div
        class="workflowFlex"
        style="
          display: flex;
          height: 100%;
          width: 100%;
          overflow-x: scroll;
          overflow-y: hidden;
          flex-wrap: nowrap;
          align-items: center;
          position: relative;
        "
      >
      <div class="columns">
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#0062f5"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                    />
                  </svg>
                </div>
              </div>
              <h2>Umanizzazione</h2>
              <p>
                Le aziende di successo hanno al loro interno dipendenti felici e per questo lo scopo di Jobify Recruiting è creare il match ideale tra talento e azienda. Si tratta di andare oltre le competenze professionali e tenere conto di valori e ideali della risorsa da inserire in azienda.
              </p>
            </div>
          </div>
          <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#0062f5"
                    class="bi bi-bullseye"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                    />
                    <path
                      d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                    />
                    <path
                      d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                    />
                    <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div>
              </div>
              <h2>Rapidità</h2>
              <p>
                Le moderne tecnologie velocizzano il processo di selezione e riducono errori di valutazione, tempo e spese extra per la ricerca della migliore risorsa.
              </p>
            </div>
          </div>
        </div>
        <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
        <div class="columns">
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#0062f5"
                    class="bi bi-alarm"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8.5 5.5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5z"
                    />
                    <path
                      d="M6.5 0a.5.5 0 0 0 0 1H7v1.07a7.001 7.001 0 0 0-3.273 12.474l-.602.602a.5.5 0 0 0 .707.708l.746-.746A6.97 6.97 0 0 0 8 16a6.97 6.97 0 0 0 3.422-.892l.746.746a.5.5 0 0 0 .707-.708l-.601-.602A7.001 7.001 0 0 0 9 2.07V1h.5a.5.5 0 0 0 0-1h-3zm1.038 3.018a6.093 6.093 0 0 1 .924 0 6 6 0 1 1-.924 0zM0 3.5c0 .753.333 1.429.86 1.887A8.035 8.035 0 0 1 4.387 1.86 2.5 2.5 0 0 0 0 3.5zM13.5 1c-.753 0-1.429.333-1.887.86a8.035 8.035 0 0 1 3.527 3.527A2.5 2.5 0 0 0 13.5 1z"
                    />
                  </svg>
                </div>
              </div>
              <h2>Scientificità</h2>
              <p>
                Lavoriamo con la migliore tecnologia per prendere decisioni consapevoli e basate sui
                dati in modo da garantire un approccio scientifico alla ricerca risorse umane.
              </p>
            </div>
          </div>
          <div class="svg_logo_link transition">
              <img width="50px" height="150px" src="https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/logo%2Fsvg_logo_link.png?alt=media&token=e5cee367-1423-4087-863f-9cbed836a383">
          </div>
          <div class="column workflowColumn" style="width: 35vw !important">
            <div class="background transition">
              <div class="number">
                <div class="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="50"
                    height="50"
                    fill="#0062f5"
                    class="bi bi-graph-up-arrow"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
                    />
                  </svg>
                </div>
              </div>
              <h2>Efficacia</h2>
              <p>
                Il giusto candidato permette di ottenere prestazioni migliori, il turnover si riduce e aumenta il tasso di retention. Questo si traduce in una riduzione dei costi per l’azienda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="fifthDiv">
      <div class="adviser transition">
        <div class="col">
          <h3>
            <span>Jobify Recruiting crea<br> il matching perfetto</span> tra azienda
            e candidato
          </h3>
          <button class="btn" @click="call_btn()">
            Fissa appuntamento
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
          </button>
        </div>
        <div class="col_image"></div>
      </div>
    </div>

    <div class="feedbackDiv" id="feedback">
      <div class="content">
        <h2><span>I clienti</span> dicono di noi</h2>
        <div class="buttons">
          <div class="btnScrollL" @click="btnScrollSx()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#0c2550"
              class="bi bi-chevron-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </div>
          <div class="btnScrollR" @click="btnScrollDx()">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="#0c2550"
              class="bi bi-chevron-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </div>
        </div>
        <div class="feedbacks" id="feedbacksContainer">
          <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Innanzitutto ci ha stupite l’intervista di approfondimento con attenzione non solo alle esigenze tecniche
della figura richiesta, ma anche e soprattutto umane con domande mirate e approfondite per riuscire a
trovare una figura compatibile a 360°. Un approccio che non ci aspettavamo. Apprezzata non solo la
disponibilità e l’aggiornamento costante, ma anche la professionalità che portava alla condivisione di
candidati mirati, con un’attenzione alla qualità piuttosto che alla quantità, che riduce la perdita di tempo e
porta all’interpretazione dei nostri desideri con consapevolezza del e sul mercato.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/pamela.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pamela Solitario</p>
                    <p class="worktitle">Sviluppatore PHP presso CONTAQ</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Consiglio Jobify per il loro approccio di profonda umanità e professionalità verso le esigenze dei loro clienti,
per la capacità di ascoltare e orientare le esigenze aziendali verso il candidato migliore in maniera chiara e
puntuale. Ho apprezzato gli aggiornamenti costanti sulla posizione affidatagli e la capacità di saper cogliere
sfumature, offrire riflessioni nel momento dell’intervista conoscitiva con noi aziende, in cui si crea subito un
clima di recuproca fidicia. Quest’ultima non è stata un mero raccoglitore di dati, ma un capire davvero le
mie esigenze, offrendo al tempo stesso una consulenza di valore, da cui traspare la grande competenza di Jobify.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/roberto.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Roberto Felli</p>
                    <p class="worktitle">Consulente Commerciale P.IVA presso STUDIO FELLI</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Il feedback sulla collaborazione con Jobify Recruiting non può essere che positivo. Siamo stati veloci a
trovare, valutare e assumere la risorsa come anche in altri processi di R&amp;S portati avanti insieme. Non c’è
nulla da appuntare e ringrazio l’Head Hunter di riferimento per il supporto e la presenza: Martina ha capito
al volo di cosa avevamo bisogno e i suoi commenti sui candidati in short list sono stati preziosi. Ogni volta
che cerco un nuovo talento so di poter contare su Head Hunter e HR Manager di Jobify Recruiting,
caratterizzati da grande competenza e professionalità e che non lasciano mai solo il cliente nel complesso
compito di ricerca e selezione del personale.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/Ivan_Rallo.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Ivan Rallo</p>
                    <p class="worktitle">Car Rental Agent (BS) presso AUTOSYSTEM</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>Sono mesi che ormai collaboro strettamente con JOBIFY e devo dire che sono pienamente soddisfatto del
servizio di recruiting per la mia azienda. Ci tengo a sottolineare la massima disponibilità fornita
nell’ascoltare al meglio le mie esigenze per la ricerca di candidati adatti. In particolar modo ho apprezzato
molto poter avere un contatto diretto e un supporto costante nella delicata fase di assunzione del nuovo
personale. Questo per me è motivo di grande fiducia nei confronti dell’azienda, che si è sempre dimostrata
eccellente sia a livello umano che professionale, affiancandomi pienamente nel processo di selezione del
nuovo personale.</h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/adamo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Alessandro Adamo</p>
                    <p class="worktitle">Inside Sales (generale) presso DOTSTAY</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Consiglierei jobify recruiting per la perseveranza, bravura, con cui sono stato seguito nell’aggiornamento costante della ricerca affidatagli. Soprattuto con la mia referente elisa con cui si e’ istaurato da subito un rapporto di affinita’, empatia e accoglienza nel capire le mie esigenze di trovare una risorsa valida da far crescere nella mia realta’ professionale. Se dovessi effettuare nuove ricerche di personale mi rivolgerei di nuovo a jobify che ha saputo consigliarmi e orientarmi nella scelta del miglior candidato, e tutto questo svolto dall’italia , visto la mia attivita’ si trova a malta. Sono molto contento di come abbiano lavorato con attenzione e costanza per la mia azienda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/adamo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Simone Cascone</p>
                    <p class="worktitle">Adetto alle vendite (Malta) presso Cascone Home</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Dal nostro primo incontro ho riconosciuto in Davide volontà, dedizione e una importante preparazione
culturale. Doti preziose nel contesto lavorativo di riferimento. Il mondo delle risorse umane ha bisogno di
esperti HR Manager come lui, caratterizzati da sensibilità e doti di ascolto per comprendere e soddisfare le
esigenze dei clienti. Davide ama il suo lavoro e pone al centro dei suoi interessi il miglioramento e
l’apprendimento costante per diventare sempre più un professionista capace di fare la differenza nel
complesso e competitivo settore delle risorse umane. Se state cercando talenti per la vostra azienda, è lui
la persona a cui affidarsi.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-16-at-21.11.17-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Stefano Ruscito</p>
                    <p class="worktitle">Sales Account presso Umana spa</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Consiglierei assolutamente il servizio di livello della Jobify Recruiting. Mi ha colpito la velocità di esecuzione dell’incarico affidatogli , la continua costanza di feedback ricevuti sull’andamento della selezione. E’ stata trovata in poco tempo la risorsa di cui aveva bisogno il mio studio , corrispondente esattamente a quanto da me richiesto. Ho apprezzato la trasparenza e la preparazione della selezionatrice che mi ha seguito Elisa, con la quale si è creato subito una connessione umana e professionale, comprendendo la mia richiesta sia per le competenze tecniche richieste che trasversali, così da venirmi presentati tutti candidati in linea.  
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/Riccardo_Camillo.png);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Riccardo di Camillo</p>
                    <p class="worktitle">Titolare presso Celda 2000 Servizi Integrati srls</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Con Davide portiamo avanti da tempo diverse iniziative in ambito HR. La sua voglia di ridisegnare il futuro
del settore con approcci innovativi lo rende un esempio da seguire. Cultura, competenza, serietà e tanta
voglia di fare sono solo alcune delle qualità che contraddistinguono Davide. Davide conosce perfettamente
il mondo HR in ogni sua sfaccettatura e sa comprendere il cliente per offrirgli sempre la risposta più
adeguata alle sue esigenze. Con Davide le aziende incontrano i talenti e i talenti incontrano le aziende in
modo solo apparentemente semplice per un risultato sempre di eccellenza, che porta alla crescita
professionale e personale del candidato e al successo del business.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-10-at-18.01.29-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Fabio Panella</p>
                    <p class="worktitle">
                      Director of Sales & Operations SEUR - Talent.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Team giovane, ma con passione ed esperienza. Abbiamo trovato in loro un valido supporto.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://firebasestorage.googleapis.com/v0/b/jobify-d2a24.appspot.com/o/images_clients%2Fmaurizio%20de%20gregorio.jpeg?alt=media&token=685ca922-f7e2-4c38-9796-09e3a2d90478);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Maurizio de Gregorio</p>
                    <p class="worktitle">General Manager presso Mamacrowd </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Posso descrivere Davide semplicemente in due parole: “competenza” e “voglia di fare”. La sua spiccata
professionalità gli consente di muoversi in qualsiasi contesto. Lavorare nel settore delle risorse umane oggi
non è semplice e richiede competenza, voglia di fare e sensibilità. Si tratta di caratteristiche che
sicuramente non mancano a Davide, che ha le carte in regola per diventare un punto di riferimento nel
panorama nazionale delle HR. Ascoltatore attento e instancabile lavoratore, Davide è il professionista di cui
ogni azienda ha bisogno per trovare, attirare e trattenere i talenti al suo interno e per questo lo consiglio a
chi cerca candidati.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-17-at-19.19.22-2-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Calabrese</p>
                    <p class="worktitle">
                      Direttore delle Risorse Umane e Organizzazione AG Group
                      Italy
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Lavoro con Davide in ambito associativo AIDP ed è un vero piacere. Davide è un vero appassionato di tutte
le diverse sfaccettature del mondo HR e la sua principale dote direi è la curiosità. Ascolta e approfondisce, è
generoso e mette sempre a disposizione i suoi punti di forza, ovvero la capacità di problem solving e la
forte competenza nei processi di selezione e sviluppo delle risorse umane. Lavorare con Davide è ogni
giorno un’occasione di crescita personale e professionale oltre che un vero piacere per la sua capacità di
offrire spunti di dialogo e riflessione sempre nuovi. Ama il suo lavoro e sa trasmettere questa passione a chi
lo circonda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-21-at-19.47.39-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Micaroni</p>
                    <p class="worktitle">
                      Responsabile relazioni sindacali e contenzioso del lavoro
                      AUTOSTRADE PER L’ITALIA SPA
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho avuto modo di conoscere Davide all’interno della community AIDP e ne ho subito tratto un’ottima
impressione. Davide è una persona dinamica, aperta a capire il mondo HR che gli sta attorno e capace di
portare contributi professionali e di valore. Tutto questo supportato da una gran voglia e volontà di fare
cose innovative e con grande competenza. Mettere al centro il cliente e le sue esigenze e trovare talenti per
le aziende è un compito che prende a cuore e che affronta con grande competenza e professionalità. Per
questo è un professionista che consiglio a chi cerca qualcuno a cui affidare l’attività di risorse umane per la
propria azienda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-22-at-11.14.00-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Nicola Rossi</p>
                    <p class="worktitle">
                      Senior Director, Managing Director Italy at Monster Italia
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Un profilo a 360° già raggiunto in giovane età. Davide è un professionista che ha maturato competenze
importanti in diversi ambiti culturali, produttivi e geografici. A tutto questo si aggiunge energia e
attenzione, elementi dimostrati dalla sua attività di commentatore in diversi ambiti multimediali. Rendere
le risorse umane innovative e colmare il gap del settore è il compito di Davide e per questo alla tradizionale
attività di ricerca e selezione del personale integra l’uso delle più moderne tecnologie come l’AI e l’analisi
dei dati per un lavoro di HR umano, ma dall’approccio efficace e consulenziale. Lavorare con Davide è
sempre un piacere e un’occasione di crescita.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/david-trotti-2.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Davide Tratti</p>
                    <p class="worktitle">Presidente regionale AIDP Lazio</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide Maggio e ho avuto l’opportunità di apprezzare le sue competenze specifiche
nell’area HR nella sua estesa accezione, collaborando su specifici incarichi professionali e su altri fronti, non
ultimo quello della pubblicistica e dell’editoria divulgativa e di approfondimento. Ho apprezzato le sue
qualità umane e professionali, in termini di efficacia ed efficienza nella risposta alle necessità informative e
alle problematiche del mio Studio. Da subito Davide ha compreso le esigenze dello studio e ha saputo
mettersi al lavoro per trovare il candidato adatto a ricoprire la posizione vacante, concentrandosi non solo
sul CV, ma anche sulle caratteristiche umane e personali.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/1517557072323.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pasquale Dui</p>
                    <p class="worktitle">
                      Avvocato e Docente presso Università Bicocca
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ogni volta che entro in contatto con Davide c’è sempre qualcosa di nuovo da scoprire e un’opportunità
da cogliere. Poche chiacchere, dritto al punto, focus e sempre con il sorriso. Difficile non entrare in sintonia.
Per un settore come il nostro, quello delle Risorse Umane, l’affidabilità, la preparazione, le relazioni e la
concretezza sono i quattro elementi cardine che creano la differenza tra dilettanti e professionisti. Davide è
il top in tutti e quattro. Per questo consiglio Davide a tutti coloro che pensano che esperienza e
professionalità del candidato vadano oltre le hard e soft skills riportate sul CV e a chi vuole approfondire
l’evoluzione e il cambiamento nel mondo HR.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-12-at-16.03.00-1-2-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marco Fattizio</p>
                    <p class="worktitle">CEO di Euspert- Bianco lavoro</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è una persona da cui si può apprendere qualcosa conversando di fronte ad un tavolo di
lavoro o sorseggiando un caffè in amicizia al bar. È un professionista di ampie vedute e con un acuto spirito
di osservazione, che mi ha trasmesso molto sia professionalmente sia umanamente. Per questo ritengo un
vero piacere e un’occasione di crescita personale dialogare e lavorare con lui, che sa ogni volta sorprendere
e stupire portando nuovi spunti di riflessione e punti di vista nel settore delle HR. Attento e dinamico,
Davide è il professionista a cui affidarsi se si vuole valorizzare la propria competenza e proporsi alle aziende
in modo nuovo.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Serena-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Serena Di Maria</p>
                    <p class="worktitle">
                      Dottoressa in Lingue Orientali e content creator
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide è professionale, attento, intuitivo e travolgente, innamorato del suo lavoro al punto da
trasmettere passione anche a chi come me opera in un settore differente. Lo definirei un “Freccia Rossa”
delle risorse umane per la sua capacità di anticipare il cambiamento in un settore da sempre caratterizzato
da elevata competitività e innovazione. Basti pensare al modo nuovo e all’avanguardia di ottenere e usare i
dati anche affidandosi all’Intelligenza Artificiale per una migliore attività di ricerca e selezione dei talenti. La
sua azienda lavora in modo efficace, umano e consulenziale e sa sempre dare risposta alle necessità del
cliente.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/foto_ylenia_muratore-Ottimizzata.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Ylenia Muratore</p>
                    <p class="worktitle">
                      Transfer Pricing Consultant presso Deloitte spa
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è un giovane talento nel mondo HR e unisce a una solida preparazione a 360° in questo
settore una cultura generale ampia e un modo di lavorare improntato al raggiungimento di obiettivi
specifici. Ha una ottima conoscenza delle best practices americane e del mondo aziendale italiano. Una rara
profondità psicologica e dei valori etici “antichi” ne fanno un professionista estremamente affidabile e
performante. Ho avuto la fortuna di collaborare in vari contesti e si è sempre un leader giovane, con
esperienza di oltre 7 anni nel ruolo di HR Manager e una persona per bene. Se avete un’azienda e volete
fare la differenza nelle risorse umane, Davide Maggio fa al caso vostro.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Albino.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Albino Ruberti</p>
                    <p class="worktitle">Project Manager e Business Coach</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Problem solver e consulenza risorse umane sono i principi che caratterizzano Davide, professionista
attento alla cura dei dettagli. Proprio la minuziosa attenzione ad ogni sfaccettatura del mondo HR lo
rendono la persona a cui rivolgersi se ci sono posizioni aperte in azienda e si cerca il miglior talento da
inserire. Persone felici e aziende felici: è questo il risultato del lavoro di Jobify Recruiting, agenzia di head
hunter giovane e dinamica con a capo un vero professionista del mondo HR come Davide. Non posso che
consigliare lui e il suo team a chi cerca candidati e crede nel valore umano del processo di ricerca e
selezione.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Antonio-Signorello.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Antonio Signorello</p>
                    <p class="worktitle">
                      HR recruiter service, fives Interlogistics spa
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho avuto il piacere di collaborare con Davide, il quale si dimostra in ogni occasione di confronto e
scambio di idee come un professionista centrato sul pezzo in ciò che fa, ma che fa della sua umiltà
personale e fame di sapere il perno della sua essenza di HR Manager. Umile e competente, dinamico e
appassionato, Davide è la persona giusta per l’azienda che crede nella valorizzazione dei talenti oltre che
nella crescita del business. Il motto di Davide è che siamo prima persone e poi professionisti e questa idea
si riflette in tutto il lavoro di Jobify Recruiting. Creare il match perfetto tra persona e azienda, tra talento e
posizione lavorativa è un compito che Davide ha a cuore.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-19.20.29-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Cinzia Calzavara</p>
                    <p class="worktitle">
                      Formatore soft skills e HR, Consulente delle Politiche
                      Attive del lavoro. Presso Adecco & Randstad
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Dimenticate i pregiudizi sul ruolo dell’HR: Davide Maggio è una vera e necessaria rivoluzione nel settore
delle risorse umane. Lavorare con Davide comporta un arricchimento umano e professionale. Un talento
giovane, determinato e pieno di risorse creative e innovative, ma soprattutto dedito all’ascolto attivo del
cliente, il che rappresenta una vera rivoluzione nella RU. Proprio la volontà di rivoluzionare il mondo delle
risorse umane ha portato Davide Maggio a creare Jobify Recruiting, una agenzia di head hunting per diversa
dalla tradizionale società di ricerca e selezione del personale e che mette i dati al centro del lavoro di ogni
giorno.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-13-at-12.15.45-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marta De Prezzo</p>
                    <p class="worktitle">Junior HR recruiter randstand</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Attento, acuto e dal profondo spessore umano e professionale, Davide Maggio ha più volte dato modo
di creare valore e opportunità al network di professionisti che lo circondano. Davide sa valorizzare le
persone e permette loro di dare il meglio in ogni contesto. La stessa attenzione alla persona prima che al
professionista si trova in Jobify Recruiting, agenzia che si caratterizza per la volontà di creare il match
perfetto tra persone e aziende andando oltre la semplice valutazione del CV. In questo modo si creano
dipendenti felici che contribuiscono alla crescita del business per il fatto di identificarsi in valori e ideali
dell’azienda che li ha assunti.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Gianluca-Caputo.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Gianluca Caputo</p>
                    <p class="worktitle">CEO Softmine Srl</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide è un HR Manager che stimo profondamente. Nonostante la giovane età, grazie alle sue
competenze e alla sua determinazione ha già raggiunto importanti traguardi professionali. Dialogando con
lui traspare fin da subito la forte passione e dedizione verso il proprio lavoro. Ha inoltre spiccate doti di
ascolto e osservazione. Davide è un esempio per tutti i giovani che vogliono intraprendere un percorso
professionale in un settore ad alta competitività come quello delle risorse umane. Lavorare con Davide ti
arricchisce come professionista e come individuo. Per questo consiglio di rivolgersi a lui se si cercano
candidati da inserire in azienda.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-11-at-22.41.13-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Marika Orlandi</p>
                    <p class="worktitle">
                      Talent Acquisition Specialist di Facile.it
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho trovato in Davide un giovane professionista entusiasta del proprio lavoro e che si impegna sempre a
svolgere al meglio. Ha una buona esperienza acquisita, ma al contempo sa ascoltare ed è pronto a
migliorarsi. Da un anno è in partnership con Kekyjob e si è rivelato un elemento utile ed efficace per la
crescita dell’azienda. Proprio il suo entusiasmo e la sua creatività mi hanno colpito e sorpreso dato che il
settore delle HR si caratterizza per la resistenza al cambiamento piuttosto che per il fatto di abbracciare
novità e tecnologie. Non è così per Davide Maggio, che crede anche nell’uso della intelligenza artificiale da
mettere al centro del processo di ricerca e selezione dei talenti.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-13-at-00.20.13-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Francesco Margreth</p>
                    <p class="worktitle">CEO di kekyjob Srl</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide è un esperto HR Manager estremamente professionale, flessibile e sensibile alle esigenze del
cliente, ma anche capace di offrire sempre un servizio di qualità. Molto apprezzato è stato il servizio di
reporting costante che ci ha permesso di capire a che punto era la ricerca dei candidati in tempo reale per
correggere e aggiustare il tiro della nostra strategia di ricerca e selezione del personale. Attenzione al
cliente che abbiamo notato in ogni fase del lavoro, apprezzando un approccio consulenziale che raramente
si trova nel settore HR. Per questo non possiamo che consigliare Davide e il suo team a tutte le aziende che
cercano personale.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/NOme-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Pasquale De Luca bossa</p>
                    <p class="worktitle">HR Manager</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide in occasione della nostra collaborazione
                  per la Rubrica HR di Bianco Lavoro. Da subito mi ha colpito la
                  sua professionalità e il suo entusiasmo. Davide è un manager
                  determinato, preparato, intraprendente con la voglia costante
                  di migliorarsi e aggiornarsi. Ottimo problem solver, svolge il
                  suo lavoro con impegno e dedizione per trovare la migliore
                  soluzione al problema. Un professionista completo a 360°, un
                  talento che tutte le aziende vorrebbero on-board.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Francesca.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Francesca Sardella</p>
                    <p class="worktitle">HR Business presso IVI RMA GLOBAL</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho conosciuto Davide non molto tempo fa,subito ho percepito la
                  sua voglia di fare bene e la sua grande determinazione nel
                  raggiungere obiettivi. Oggi sto conoscendo oltre al
                  professionista anche una persona vera e sincera che vuole
                  condividere relazioni umane propio come me. Vi consiglio
                  Davide come persona di valori e come professionista.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-19-at-09.39.21-5-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Alessandro Gian Maria Ferri</p>
                    <p class="worktitle">CEO edicole &100</p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Davide Maggio è un nuovo e vero amico. Giovane intraprendente
                  e brillante, capace di vedere il vero potenziale nelle persone
                  e di valorizzarlo, è un leader capace e un talentuoso manager.
                  Ciò che ha colpito profondamente la mia attenzione di lui, il
                  giorno in cui ci siamo conosciuti, è stata la forza del suo
                  carattere e come questa fosse indirizzata naturalmente verso
                  la cura e l'attenzione presso gli altri. Un grande uomo e
                  professionista, un altruista e solidale amico
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Laurent-otimizzato-e1617780132679.jpg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Laurent Vercken de Vreuschmen</p>
                    <p class="worktitle">
                      Professore Presso i Ministeri dell'Economia e Finanza e
                      della Difesa. Direttore e editore di Edizioni &100
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Ho avuto modo di collaborare con Davide Maggio, persona di
                  grande competenza, capacità e talento. Puntuale, brillante e
                  affidabile, ha saputo cogliere l'esigenza della nostra
                  azienda, fornendo soluzioni efficaci e vincenti. A ciò si
                  aggiunge una forte connotazione empatica e un vivo entusiasmo,
                  che caratterizzano piacevolmente l'esperienza professionale,
                  aggiungendone valore.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/04/Piace-ELena.-ottimizzata.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Elena Piave</p>
                    <p class="worktitle">
                      Coordinatore Nazionale - Consorzio Progresso
                    </p>
                  </div>
                </div>
              </div>
              <div class="feedback">
                <p class="quote">"</p>
                <h3>
                  Lavorare con David è sinonimo di professionalità e
                  affidabilità, a tal punto che il suo modus operandi riesce a
                  rendere semplice ogni processo. Mirabile è l'abilità nel
                  cercare soluzioni adatte al contesto o anche solo far notare
                  prospettive alternative e innovative.
                </h3>
                <div class="feedbackInfo">
                  <div
                    class="feedbackInfoPhoto"
                    style="
                      background-image: url(https://davidemaggiohr.it/wp-content/uploads/2021/05/WhatsApp-Image-2021-05-02-at-23.46.37-1-1-1.jpeg);
                    "
                  ></div>
                  <div class="feddbackData">
                    <p class="author">Chiara Temperanza</p>
                    <p class="worktitle">
                      HR Assistant & Recruiter, KOHLER Engines EMEA
                    </p>
                  </div>
                </div>
              </div>
        </div>
      </div>
    </div>

    <div class="fourthDiv" id="fourth">
      <div class="content">
        <div class="first" style="margin-bottom: 5rem;">
          <div class="title">
            <div class="subtitle">
              Agenzia Head Hunting Jobify Recruiting
            </div>
            <h2><span>Contattaci per un appuntamento gratuito</span></h2>
            <p>
              Jobify Recruiting offre alle aziende una prima consulenza e appuntamento gratuito per aiutarle a trovare la
              persona giusta e il talento giusto.
            </p>
            <router-link to="/contact"
              ><button class="btn">
                Contattaci ora
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
            ></router-link>
          </div>
        </div>
        <div class="contentImage">
          <div class="rectangle "></div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Calendly badge widget begin -->

<style
  href="https://assets.calendly.com/assets/external/widget.css"
  rel="stylesheet"
></style>
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

@media (min-width: 1024px) {
  .dynamicContent {
    margin-top: 10rem;
  }
  .mainTitle {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    width: 100%;
    background-color: #fff;
  }

  .mainTitle .content {
    padding: 5rem;
    padding-top: 4rem;
  }

  .content .first {
    display: flex;
    align-items: center;
    z-index: 5;
    width: 50%;
  }

  .mainTitle .title h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 500;
    width: 90%;
    line-height: 56px;
    letter-spacing: -0.06em !important;
  }

  .mainTitle .title p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 90%;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .first .video {
    width: fit-content;
    height: fit-content;
    background: #0c2550;
    border-radius: 30px;
  }

  .gradientTitle {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
    font-size: 56px;
    font-weight: 700;
    line-height: 56px;
    padding-right: 0.05rem;
    letter-spacing: -0.03em !important;
  }

  .clientsCo {
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    width: 100%;
    background-color: #fff;
  }

  .clientsCoBorder {
    align-items: center;
    border: 2px solid #80808038;
    padding-top: 3rem;
    padding-bottom: 2rem;
    border-radius: 30px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .clientsCoLink{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .clientsCoLink h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 500;
    line-height: 56px;
    letter-spacing: -0.06em !important;
    width: fit-content;
  }

  .clientsCoLink h2 span{
    width: fit-content;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
  }

  .clientsCoLink p {
    width: fit-content;
    margin-left: 6rem;
    color: #0c2550;
    font-size: 16px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.01em !important;
    border: 2px solid #80808038;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.7rem;
    padding-bottom: 0.7rem;
    border-radius: 30px;
    margin-top: 1rem;
  }

  .clientsCoLink .buttons{
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    width: fit-content;
  }

  .clientsCoLink .btnScrollR {
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

  .clientsCoLink .btnScrollL {
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

  .clientsCoDiv {
    display: flex;
    margin-left: auto;
    margin-right: auto;
  }

  .clientsCoBody {
    padding-right: 6rem;
    height: 100%;
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .logoClient {
    width: 135px;
    height: 135px;
    padding: 1rem;
    margin-left: 3rem;
    float: left;
    padding-right: 3rem;
    display: contents;
  }

  .logoClient img {
    width: 135px;
    height: auto;
    margin-right: 5rem;
}

  .secondDiv {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    padding-top: 4rem;
    width: 100%;
    background-color: #fff;
  }

  .secondDiv .title h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 500 !important;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    width: fit-content;
    line-height: 56px;
    letter-spacing: -0.06em !important;
  }

  .secondDiv .title h2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 700 !important;
  }

  .secondDiv .title p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .second .flow {
    margin-top: 10rem;
    display: flex;
    width: 100%;
  }

  .steps {
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: fit-content;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
  }

  .step {
    text-align: center;
    background: #0c2550;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    float: left;
    transition: all 0.3s ease-out;
    text-align: left;
    -webkit-box-shadow: 0px 0px 105px 39px rgb(46 81 255 / 20%);
    -moz-box-shadow: 0px 0px 105px 39px rgba(46, 81, 255, 20%);
    box-shadow: 0px 0px 105px 3px rgb(46 91 255 / 5%);
    cursor: pointer;
  }

  .step:hover {
    transform: scale(1.1);
  }

  .step .number {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    background: linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    margin-bottom: 1rem;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
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
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .step .text {
    color: #627597;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 3rem;
  }

  .thirdPart {
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: 4rem;
    padding-right: 4rem;
    background: white;
  }

  .thirdPartDiv {
    background: #0c2550;
    border-radius: 30px;
    padding: 5rem;
    padding-right: 0;
    padding-bottom: 0;
  }

  .thirdPartDiv .first {
    background: transparent;
    display: flex;
    position: relative;
  }

  .thirdPartDiv .first span {
    color: #c554a0;
    font-weight: 600;
  }

  .thirdPartDiv .first h2 {
    color: #fff;
    width: 100%;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.04em;
    font-weight: 700;
    margin-bottom: 5rem;
  }

  .thirdPartDiv .first p {
    width: 100%;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
    margin-top: 3rem;
  }

  .first .col1{
    width: 50%;
    margin-bottom: 5rem;
  }

  .first .col2  {
    background-image: url(/src/assets/whyJobify.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    width: 78%;
    height: auto;
    border-bottom-right-radius: 30px;
  }

  .first .col3  {
    background-image: url(/src/assets/metodo.png);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
    width: 78%;
    height: auto;
    border-bottom-right-radius: 30px;
  }

  .thirdPartDiv .second {
    background: transparent;
    display: flex;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-top: 5rem;
    display: flex;
  }

  .feature {
    text-align: center;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    border-radius: 30px;
    z-index: 14;
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 3rem;
    min-height: 26vw;
    float: left;
    transition: all 0.3s ease-out;
    text-align: left;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    width: 25vw;
  }

  /*.feature:hover {
    transform: scale(1.1);
  }*/

  .feature .number {
    font-size: 36px;
    font-weight: 600;
    line-height: 40px;
    background: linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    margin-bottom: 1rem;
  }

  .feature .title {
    color: #0c2550;
    margin-left: 0 !important;
    font-size: 30px;
    line-height: 32px;
    font-weight: 700;
    letter-spacing: -0.04em !important;
    width: 100% !important;
    margin-bottom: 1rem;
  }

  .feature .text {
    color: #627597;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-left: 0 !important;
    margin-top: 0 !important;
    width: 100% !important;
  }

  .featureShowMore {
    color: #0062f5;
    cursor: pointer;
    font-weight: 500;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-top: 2rem;
  }

  .imageContent{
    width: 60vw;
    height: 25vw;
    margin-right: 2rem;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/punti_di_forza.png);
    background-position: center;
    background-size: cover;
    border-radius: 20px;
  }

  .imageStep {
    width: 37vw;
    height: 20vw;
    margin-right: 2rem;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/candidato.jpg);
    background-position: center;
    background-size: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    margin-bottom: 3rem;
    margin-right: 0;
  }

  .workflow {
    background: #fff;
    padding-top: 10rem;
    padding-bottom: 0;
  }

  .workflow .workflowTitle p{
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    line-height: 24px;
    font-weight: 400 !important;
  }

  .workflow .workflowTitle2 {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
    font-size: 56px;
    line-height: 65px;
    font-weight: 800 !important;
    letter-spacing: -0.04em !important;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5rem;
  }

  .workflow .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 5rem;
    margin-bottom: 1rem;
  }

  .workflow .btnScrollR {
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

  .workflow .btnScrollL {
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

  .workflow .columns {
    display: flex;
  }

  .workflow .columns .column {
    padding: 1rem;
    padding-top: 0rem;
    width: 70%;
    display: flex;
    align-items: center;
  }

  .workflow .columns .column .background {
    background: #0c2550;
    padding: 3rem;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 25vw;
  }

  .workflow .columns .column .circle {
    position: absolute;
    right: -1%;
  }

  .workflow .columns .column .circle2 {
    position: absolute;
    left: -1%;
  }

  .workflow .columns .mt10 {
    margin-top: 15rem;
  }

  .workflow .columns .br {
    border-right: 4px solid #dbd7d78a;

    border-left: none;
    border-top: none;
    border-bottom: none;
  }

  .workflow .columns .number {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    color: #0c2550;
    font-size: 74px;
    font-weight: 800 !important;
    line-height: 78px;
    letter-spacing: -0.04em !important;
    margin-bottom: 1rem;
  }

  .workflow .columns .column h2 {
    color: #fff;
    font-size: 38px;
    font-weight: 800 !important;
    line-height: 42px;
    letter-spacing: -0.04em !important;
  }

  .workflow p {
    color: #cccccc;
    font-size: 16px;
    line-height: 20px;
    font-weight: 300 !important;
  }

  .br .background {
    margin-left: auto;
  }

  .workflow p span {
    color: #c554a0;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600 !important;
  }

  .workflowFlexTitle {
    margin-bottom: 0rem !important;
    color: #0c2550 !important;
    font-size: 64px !important;
    font-weight: 800 !important;
    text-align: center !important;
    line-height: 68px !important;
    letter-spacing: -0.03em !important;
    background: transparent !important;
    -webkit-text-fill-color: none !important;
  }

  .workflowFlex {
    padding-bottom: 5rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 100%;
    background-color: #fff;
    align-items: center;
    position: relative;
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .workflowFlex .workflowLogo {
    width: 170px;
    margin-top: 0.5rem;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    background: #0062f5;
  }

  .workflowLogo img {
    width: 100%;
  }

  .workflowFlex .hr {
    width: 85vw;
    height: 5px;
    background: #0e3f70;
    top: 15%;
    border-radius: 15px;
  }


  .svg_logo_link{
    height: fit-content;
    margin-top: auto;
    margin-bottom: auto;
  }

  .flowScheme {
    position: relative;
    height: 5vw;
  }

  .flowScheme .flowElement {
    position: absolute;
    bottom: -20%;
    width: fit-content;
  }

  .flowElement .flowElementMB5 {
    margin-bottom: 5rem;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .flowElement .flowElementNumber {
    font-size: 24px;
    line-height: 24px;
    color: #0062f5;
    font-weight: 700 !important;
    background: #74acff71; /* fallback for old browsers */
    /*-webkit-clip-path: polygon(
      50% 0%,
      95% 25%,
      95% 75%,
      50% 100%,
      5% 75%,
      5% 25%
    );
    clip-path: polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%);*/
    padding: 1rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    border-radius: 30px;
  }

  .flowElement .flowElementTitle {
    font-size: 18px;
    line-height: 18px;
    color: #627597 !important;
    font-weight: 700 !important;
    width: 10px;
    text-transform: uppercase;
    letter-spacing: -0.01em;
  }

  .flowElement p {
    margin-bottom: 0 !important;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    width: 150px;
    text-align: center;
  }

  .workflowFlex .step_workflow {
    margin-right: 2em;
    margin-left: 2rem;
    width: fit-content;
    background: #fff;
    border: 2px solid #80808038;
    box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-radius: 25px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .step_workflow .header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }

  .step_workflow .show_more {
    color: #0062f5;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    font-weight: 500;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  .step_workflow .show_more:hover {
    color: #ed3fb4;
  }

  .step_workflow .body {
    margin-top: 1rem;
    color: #0c2550;
    font-size: 14px;
    line-height: 14px;
    display: none;
    opacity: 0;
    height: 0%;
    visibility: hidden;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .step_workflow .icon {
    width: fit-content;
  }

  .step_workflow .text {
    text-align: center;
    font-size: 22px;
    line-height: 24px;
    font-weight: 600;
    color: #0c2550;
    padding-top: 0.5rem;
    margin-left: 0.8rem;
  }

  .btn2 {
    background: transparent;
    border: none;
    color: #2d2e2f;
    font-size: 24px;
    padding-top: 0;
    padding-left: 0;
    padding-bottom: 0;
    padding-right: 0;
    font-weight: 700;
    margin-top: 1.5rem;
    border-bottom: 2px solid #8c909481;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    line-height: 35px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  .btn2 a {
    position: relative;
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 0px !important;
    display: inline !important;
    text-decoration: none;
    text-transform: none !important;
    width: fit-content !important;
    overflow: hidden !important;
    margin-top: 0 !important;
    cursor: pointer;
  }

  .btn2 span {
    color: #2d2e2f;
    font-weight: 700;
    letter-spacing: 1px;
    font-size: 24px;
  }

  .btn .btnSpan {
    color: #2d2e2f !important;
    font-weight: 700 !important;
    letter-spacing: 1px !important;
    font-size: 24px !important;
  }

  .btn2:hover {
    border-color: #2d2e2f;
  }

  .progress-container {
    background-color: rgba(150, 150, 150, 0.6);
    height: 10px;
    width: 100%;
  }

  .progress-bar {
    background-color: #2196f3;
    height: 10px;
    width: 0%;
  }

  .content {
    padding: 2em;
  }

  .divInput {
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
  }

  .input {
    width: 95%;
    margin-right: 1rem;
  }

  .input input {
    font-size: 14px;
    background-color: #1c1c1c;
    border-radius: 12px;
    color: #fff;
    box-shadow: none;
    width: 97%;
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

  .elemsx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 39%;
    left: -5%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    position: absolute;
    top: 36%;
    left: 0%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 img {
    width: 80%;
  }

  .elemsx .elemdx_rectangle4 {
    width: 450px;
    height: 450px;
    background: #c700ff2b;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px #c700ff2b;
    position: absolute;
    top: 65%;
    left: -5%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle6 {
    width: 350px;
    height: 400px;
    background: #0c2550;
    border: 2px solid #0c2550;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 66%;
    left: 5%;
    z-index: 1;
    padding: 2rem;
  }

  .elemdx_rectangle6 .elemdx_text {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle6 .elemdx_text span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle6 .elemdx_text2 {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle6 .elemdx_text2 span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .second .flow .elemsx {
    width: 60%;
    text-align: left;
    padding-bottom: 4rem;
  }

  .second .flow .elemsx h2 {
    color: #0c2550;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-right: 2rem;
    letter-spacing: -0.04em !important;
  }

  .second .flow .elemsx h2 span {
    color: white;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    letter-spacing: -0.04em !important;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    padding-right: 0.05rem;
  }

  .second .flow .elemsx p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    font-weight: 400 !important;
    letter-spacing: 0.2px;
  }

  .elemH2 {
    color: #0c2550;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    margin-left: 2rem;
    transition: all 0.5s ease-out;
    letter-spacing: -0.04em !important;
  }

  .elemH2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-size: 64px;
    line-height: 68px;
    font-weight: 800;
    transition: all 0.5s ease-out;
    letter-spacing: -0.04em !important;
  }

  .elemH2_v2 {
    color: #0c2550;
  }

  .elemH2_v2 .elemH2_v2Span {
    background: -webkit-linear-gradient(
      -70deg,
      #6000ffa8 0%,
      #ed4e50 100%
    ) !important;
    -webkit-background-clip: text !important;
    background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    -webkit-box-decoration-break: clone !important;
    font-size: 94px;
    line-height: 98px;
    font-weight: 800;
    transition: all 0.5s ease-out;
    padding-right: 1rem;
  }

  .elemP {
    margin-top: 0.5rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    margin-left: 2rem;
    font-weight: 400 !important;
  }

  .elemP_image {
    margin-top: 18rem !important;
    color: #627597 !important;
    font-size: 20px !important;
    width: 90% !important;
    line-height: 24px !important;
    font-weight: 400 !important;
  }

  .elemP_image span {
    margin-top: 15rem !important;
    color: #0c2550 !important;
    font-size: 20px !important;
    width: 90% !important;
    line-height: 24px !important;
    font-weight: 800 !important;
  }

  .elemP_point {
    position: absolute;
    left: -9%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }

  .elemP_point2 {
    position: absolute;
    right: -3%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }

  .second .flow .elemdx {
    width: 60%;
  }

  .elemdx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: #00e9d359;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0 220 207 / 35%);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0 220 207 / 35%);
    box-shadow: 0px 0px 133px 17px rgb(0 220 207 / 35%);
    position: absolute;
    top: 40%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle2 {
    width: 450px;
    height: 250px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 42%;
    left: 30%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    background: #0c2550;
    border: 3px solid #324567;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 44%;
    left: 20%;
    z-index: 1;
    padding: 2rem;
  }

  .elemdx_rectangle3 .elemdx_text {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle3 .elemdx_text span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle3 .elemdx_text2 {
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle3 .elemdx_text2 span {
    margin-top: 0 !important;
    color: #00b818 !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle3 .elemdx_text3 {
    background: rgb(0 74 255);
    border-radius: 8px;
    padding: 0.4rem;
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx_rectangle3 .elemdx_text3 span {
    margin-top: 0 !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    font-family: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas,
      Liberation Mono, monospace !important;
  }

  .elemdx_rectangle3 .elemdx_text4 {
    background: rgb(0 74 255);
    border-radius: 8px;
    padding: 0.4rem;
    margin-top: 0 !important;
    color: #fff !important;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
    margin-top: 1rem !important;
  }

  .elemdx_rectangle3 .elemdx_text4 span {
    margin-top: 0 !important;
    color: #ffffff !important;
    font-weight: 600;
    font-size: 12px !important;
    width: 100% !important;
    line-height: 16px !important;
  }

  .elemdx .elemdx_rectangle4 {
    width: 350px;
    height: 450px;
    background: rgb(0 119 255 / 17%);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(0 119 255 / 17%);
    position: absolute;
    top: 65%;
    left: 25%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle5 {
    height: 60%;
    background: rgba(0, 255, 234, 0.07);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    -moz-box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    box-shadow: 0px 0px 133px 17px rgba(0, 255, 234, 0.07);
    position: absolute;
    top: 30%;
    left: 15%;
    z-index: 0;
  }

  .elemdx .elemdx_rectangle6 {
    width: 350px;
    height: 450px;
    position: absolute;
    top: 66%;
    left: 33%;
    z-index: 1;
  }

  .elemdx .elemdx_rectangle6 img {
    width: 100%;
  }

  .second .flow .elemdx p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 80%;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 400;
  }

  .image {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    background-image: url(/src/assets/analysis.png);
    background-size: cover;
    background-position: center;
    position: absolute;
  }

  .image2 {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    margin-bottom: 5rem;
    background-image: url(/src/assets/searchimage.png);
    background-size: cover;
    background-position: center;
  }

  .image3 {
    width: 34vw;
    height: 35vw;
    background: transparent;
    border-radius: 60px;
    margin-bottom: 10rem;
    background-image: url(/src/assets/webpcimage.png);
    background-size: cover;
    background-position: center;
  }

  .numbers .numbersHR_left {
    position: absolute;
    background: #e8ebf1;
    width: 10%;
    height: 3px;
    left: 0;
  }

  .numbers .numbersHR_right {
    position: absolute;
    background: #e8ebf1;
    width: 10%;
    height: 3px;
    right: 0;
  }

  .numbers {
    display: flex;
    padding: 5rem;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: auto;
    margin-top: 10rem;
  }

  .numbers .number {
    text-align: center;
    padding-left: 5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-right: 5rem;
  }

  .numbers .number .num {
    color: #0059ff;
    font-weight: 700;
    font-size: 36px;
    letter-spacing: -0.03em;
  }

  @property --num {
    syntax: "<integer>";
    initial-value: 700;
    inherits: false;
  }

  .num {
    transition: --num 5s;
    counter-set: num var(--num);
    font-weight: 700;
    font-size: 32px;
  }
  .num::after {
    content: counter(num);
    font-weight: 700;
    font-size: 32px;
  }
  .num:hover {
    --num: 800;
  }

  .numbers .number .subtitle {
    color: #627597;
    font-size: 18px;
    letter-spacing: 0.5px;
    font-weight: 300;
  }

  .second .flowSingle {
    display: flex;
    width: 100%;
  }

  .second .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
    margin-top: 10rem;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle {
    color: #0c2550;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.04em !important;
  }

  .second .flowSingle .flowSingleContent .flowSingleTitle .flowSingleTitleSpan {
    color: #0c2550;
    font-size: 64px;
    line-height: 68px;
    letter-spacing: -0.04em !important;
    font-weight: 800;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .partnersButton {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
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

  .flowSingleBtn {
    margin-left: auto;
    margin-right: auto;
  }

  .third {
    height: 100%;
    padding-left: 8rem;
    padding-right: 8rem;
    background-color: #fff;
  }

  .third .flowSingle {
    display: flex;
    width: 100%;
  }

  .third .flowSingle .flowSingleContent {
    padding: 5rem;
    width: 100%;
  }

  .third .flowSingle .flowSingleContent .flowSingleTitle {
    color: #0c2550;
    font-size: 64px;
    font-weight: 800 !important;
    width: 100%;
    text-align: center;
    line-height: 68px;
    letter-spacing: -0.03em !important;
  }

  .third .flowSingle .flowSingleContent .flowSingleTitle .flowSingleTitleSpan {
    color: #0c2550;
    font-size: 64px;
    line-height: 68px;
    font-weight: 700;
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
  }

  .second .flowSingle .flowSingleContent p {
    margin-top: 1rem;
    color: #627597;
    font-size: 20px;
    width: 100%;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 400;
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

  .fourthDiv {
    height: 100%;
    width: 100%;
    padding-left: 8rem;
    width: 100%;
    background-color: #0c2550;
    padding-top: 5rem;
  }

  .fourthDiv .content {
    padding: 0;
    padding-right: 0rem;
    display: flex;
  }

  .fourthDiv .title .subtitle {
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 4px;
    font-size: 12px;
    line-height: 12px;
    margin-bottom: 2.5rem;
  }

  .fourthDiv .title h2 {
    color: #fff;
    font-size: 56px;
    font-weight: 800 !important;
    width: 80%;
    text-align: left;
    line-height: 56px;
    letter-spacing: -0.06em !important;
  }

  .fourthDiv .title h2 span {
    background: -webkit-linear-gradient(-70deg,#2867b2 0%,#01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.04em !important;
    font-weight: 800 !important;
  }

  .fourthDiv .title p {
    margin-top: 1rem;
    width: 80%;
    text-align: left;
    margin-bottom: 2rem;
    color: #fff;
    font-size: 20px;
    line-height: 24px;
    font-weight: 300;
  }

  .contentImage {
    width: 60%;
  }

  /*.contentImage .square {
    width: 350px;
    height: 470px;
    background: rgba(0, 119, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    margin-left: auto;
    margin-right: 10rem;
    margin-top: 9rem;
  }

  .contentImage .square2 {
    width: 250px;
    height: 250px;
    background: rgba(4, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(4, 0, 255, 0.17);
    position: absolute;
    top: 0;
    right: 0;
  }

  .contentImage .square3 {
    width: 250px;
    height: 250px;
    background: rgba(0, 153, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 153, 255, 0.17);
    position: absolute;
    top: 10%;
    right: 30%;
  }

  .contentImage .square4 {
    width: 250px;
    height: 250px;
    background: rgba(162, 0, 255, 0.17);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(162, 0, 255, 0.17);
    position: absolute;
    top: 50%;
    right: 5%;
  }*/

  .contentImage .rectangle {
    width: 100%;
    height: fit-content;
    background: transparent;
    background-image: url(/src/assets/contactus.png);
    background-size: contain;
    background-position: right;
    top: 0%;
    background-repeat: no-repeat;
    right: 0%;
    padding: 15rem;
  }

  .contentImage .rectangle h2 {
    font-size: 54px;
    line-height: 58px;
    font-weight: 800;
  }

  .contentImage .rectangle p {
    font-size: 22px;
    line-height: 26px;
    margin-top: 2rem;
    font-weight: 400;
  }

  .feedbackDiv {
    height: 100%;
    width: 100%;
    padding-bottom: 5rem;
    width: 100%;
    background-color: #fff;
    padding-top: 5rem;
  }

  .feedbackDiv .content {
    padding: 0rem !important;
  }

  .feedbackDiv h2 {
    color: #0c2550;
    font-size: 56px;
    font-weight: 500;
    text-align: center;
    line-height: 65px;
    letter-spacing: -0.06em !important;
  }

  .feedbackDiv h2 span {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700 !important;
  }

  .feedbackDiv .buttons {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    margin-right: 5rem;
  }

  .feedbackDiv .btnScrollR {
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

  .feedbackDiv .btnScrollL {
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

  .feedbackDiv .feedbacks {
    display: flex;
    height: 100%;
    width: 100%;
    padding-right: 8rem;
    background-color: #fff;
    overflow-x: scroll;
    overflow-y: hidden;
    flex-wrap: nowrap;
    align-items: center;
    position: relative;
    margin-top: 1rem;
  }

  .feedbacks.active {
    cursor: grabbing;
    cursor: -webkit-grabbing;
  }

  .feedbackDiv .feedbacks .feedback {
    background: #f4f5f6;
    border-radius: 30px;
    padding: 1.5rem;
    margin-right: 1rem;
    margin-left: 1rem;
    float: left;
    height: 44vh;
  }

  .feedbackDiv .feedbacks .feedback .quote {
    background: -webkit-linear-gradient(335deg, #0c2550 0%, #2867b2 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    font-weight: 700;
    font-size: 80px;
    line-height: 0;
    letter-spacing: 1.5px;
    line-height: 38px;
    margin-bottom: 0;
    padding-top: 1rem;
  }

  .feedbackDiv .feedbacks .feedback h3 {
    color: #0c2550;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    margin-bottom: 1rem;
    width: 60vw;
  }

  .feedbackDiv .feedbacks .feedback .author {
    color: #0c2550;
    font-size: 18px;
    letter-spacing: 1px;
    line-height: 22px;
    margin-bottom: 0rem;
    font-weight: 500;
  }

  .feedbackDiv .feedbacks .feedback .worktitle {
    color: #3e3f40;
    font-size: 12px;
    letter-spacing: 1px;
    line-height: 16px;
    margin-bottom: 0rem;
    font-weight: 300;
  }
  .feedbackDiv .feedbacks .feedback .feedbackInfo {
    display: flex;
    align-items: center;
  }

  .feedbackDiv .feedbacks .feedback .feedbackInfo .feedbackInfoPhoto {
    background-image: url(/src/assets/ph9.JPG);
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    width: 50px;
    height: 50px;
    margin-right: 1rem;
  }

  .fifthDiv {
    background: #fff;
    padding: 5rem;
    padding-bottom: 5rem;
  }

  .fifthDiv .adviser {
    background: #0c2550;
    border-radius: 30px;
    display: flex;
  }

  .fifthDiv .adviser .col {
    width: 50%;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .fifthDiv .adviser .col h3 {
    color: #fff;
    width: 72%;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: -0.04em;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }

  .fifthDiv .adviser .col h3 span {
    background: -webkit-linear-gradient(-70deg,#2867b2 0%,#01a49e 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-box-decoration-break: clone;
    letter-spacing: -0.06em;
    font-weight: 700 !important;
  }

  .fifthDiv .adviser .col_image {
    background: transparent;
    border-radius: 30px;
    background-image: url(https://thingsss.s3.eu-central-1.amazonaws.com/match_perfetto.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 42%;
  }
}

@media (max-width: 1023px) {
}

@media (min-width: 1920px) {
  .elemsx .elemdx_rectangle1 {
    width: 450px;
    height: 250px;
    background: rgb(156 0 126 / 17%);
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    -moz-box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    box-shadow: 0px 0px 133px 17px rgb(156 0 126 / 17%);
    position: absolute;
    top: 49%;
    left: -6%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle3 {
    width: 450px;
    height: 250px;
    position: absolute;
    top: 47%;
    left: 0%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle4 {
    width: 450px;
    height: 450px;
    background: #c700ff2b;
    border: 2px solid #fff;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px #c700ff2b;
    position: absolute;
    top: 75%;
    left: -6%;
    z-index: 1;
  }

  .elemsx .elemdx_rectangle6 {
    width: 350px;
    height: 400px;
    background: #0c2550;
    border: 3px solid #324567;
    border-radius: 30px;
    -webkit-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    -moz-box-shadow: 0px 0px 133px 17px rgba(255, 0, 217, 0.17);
    box-shadow: 0px 0px 133px 17px rgba(0, 119, 255, 0.17);
    position: absolute;
    top: 76%;
    left: 0%;
    z-index: 1;
    padding: 2rem;
  }
  .elemP_point {
    position: absolute;
    left: -6%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }
  .elemP_point2 {
    position: absolute;
    right: -2%;
    width: 30px;
    height: 30px;
    background: white;
    border: 3px solid #e8ebf1;
    border-radius: 25rem;
  }
}

@media (max-width: 1350px) {
  .workflowFlex {
    flex-wrap: wrap;
  }

  .workflowFlex .step_workflow {
    float: left;
    margin-bottom: 2rem;
  }
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

@keyframes animate {
  0% {
    transform: translate(-50%, -75%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -75%) rotate(360deg);
  }
}
</style>
