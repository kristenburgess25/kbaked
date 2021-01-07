<template>
  <v-container
    id="about"
    tag="section"
  >
    <h3 id="about-title">About</h3>

    <p id="about-text">
      As you have probably deduced by now, I love cookies. However, my love for baked goods extends far beyond cookies. 
      Scones, croissants, cakes, biscuits, bagels, bread, muffins, pies, pastries, sweet, savory - I adore them all! 
      I have also recently started getting into gluten-free and keto baking, so look for more of that content soon!
    </p>
    <p id="signature">-Kristen</p>
  </v-container>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');


#about-title {
  font-family: 'Yellowtail', cursive;
  color:rgb(118, 20, 20);
  font-size: 3.75rem !important;
  line-height: 3.75rem;
  letter-spacing: 2px !important;
  margin: 20px 0px;
}

#about-text {
  font-family: 'Montserrat';
  font-size: 1.2rem;
}

#signature {
  font-family: 'Yellowtail', cursive;
  color:rgb(118, 20, 20);
  font-size: 2rem;
}
</style>

<script>
  export default {
    name: 'HomeAbout',
  }
</script>
