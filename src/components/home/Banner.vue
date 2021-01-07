<template>
  <base-card dark>
    <v-img
      :src="require('@/assets/recipes/cookies-banner.jpeg')"
      id="banner-image"
      class="grey lighten-2"
      height="400"
      width="100%"
    >
      <v-row
        class="fill-height pa-3"
        align="center"
      >
        <v-col
          cols="12"
          md="7"
          offset-md="5"
        >
          <h1 class="font-weight-light">
           Kristen Loves Cookies
          </h1>

          <div id="banner-subhead" class="subheading text-uppercase pl-2 mb-4">
            A baking blog by Kristen Burgess.
          </div>

          <!-- <v-btn
            color="primary"
            depressed
          >
            Subscribe
          </v-btn> -->
        </v-col>
      </v-row>
    </v-img>
  </base-card>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

/* image {
  opacity: 0.5;
} */

#banner-subhead {
  color: white;
  background-color:  rgb(118, 20, 20);
  text-align: right;
  padding-right: 10px !important;
}

h1 {
  font-family: 'Yellowtail', cursive;
  color:#00b9bc;
  background-color: rgb(118, 20, 20);
  font-size: 3.75rem !important;
  line-height: 3.75rem;
  letter-spacing: -0.0093333333em !important;
}
</style>

<script>
  export default {
    name: 'HomeBanner',
  }
</script>
