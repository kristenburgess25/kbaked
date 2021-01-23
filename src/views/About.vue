<template>
  <v-container
    id="about"
    tag="section"
  >
    <h3 id="about-title">About</h3>

    <div id="about-text">
      <p> Hey, hi, hello, welcome 👋 <p>
      <p> My name is Kristen Burgess, and I'm an amateur yet avid baker, here to share my favorite recipes and lessons learned 👩‍🍳 </p>
      <p> I grew up on a cattle ranch in Nebraska, and helping my mom prepare meals for my family and workers on the ranch was a part of life from a very early age. (Ranch cooking = I've been a wizard at frying pretty much any kind of meat or vegetable since the age of 9.) I developed some basic baking skills early, too, but I never really challenged myself or experimented with baking until last year. It started with a Nutella shortbread recipe that a friend posted, and the next thing I knew was I researching the intricacies of laminating dough to make croissants. I've been hooked ever since 🥐 </p>
      <p> I don't know if you've been on many baking blogs lately, but they tend to be exhausting/overwhelming messes and laden with ads. Even worse - they plant cookies on your browswer! (And not the tasty kind that we love here... the pesky kind that slow down your internet and spy on you and tell Mark Zuckerberg what kind of cookies to advertise to you.) I promise that this web app will always be ad free and will only have the best kinds of cookies 🍪 </p>
      <p> I am a professional software engineer/web developer, and this site/app was built from scratch with my own bare hands! (Okay, okay, I also used some very helpful styling libraries like Vuetify...) If you're a nerd, you can check out the code base <a href="https://github.com/kristenburgess25/kbaked" target="_blank">here</a>. Submitting issues/features is very welcome! 🤓
      </p>
    </div>
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
    name: 'About',
  }
</script>
