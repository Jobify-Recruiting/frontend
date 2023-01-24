<script>
export default {
  name: "right_navbar",
  components: {},
  data() {
    return {
      
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>
<template>
  <div>
      <div class="left">
          <router-link to="/favorites">
            <div class="favorite_list" id="fav_list">
              <svg id="fav_list_icon" style="display: none;" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="rgb(222 222 222" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              <span id="fav_list_number"></span>
            </div>
          </router-link>
          <a href="https://jobifyrecruiting.netlify.app/book"
            ><div class="link menuBtn">Prenota un appuntamento</div>
        </a>
        </div>
    </div>
</template>
<style scoped>

</style>
