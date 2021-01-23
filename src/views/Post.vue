<template>
  <v-container
    id="blog-post"
    tag="section"
  >
    <h2 id="recipe-title">{{recipe.title}} </h2>
    <br />
    <div id="recipe-image-container">
      <v-img
          :src="require(`../assets/articles/${recipe.hero}`)"
          height="100%"
          gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
        >
      </v-img>
    </div>
    <br />
    <p>
      {{recipe.introduction}}
    </p>
    <v-col id="recipe-container" cols="12">
      <div id="ingredient-container">
        <h3> Ingredients </h3>
        <ul id="ingredient-list">
          <li v-for="ingredient in recipe.recipe.ingredients" :key="ingredient.index">
            {{ ingredient }}
          </li>
        </ul>  
      </div>
      <br />
      <div id="instructions-container">
        <h3> Instructions </h3>
        <ul id="instructions-list">
          <li v-for="item in recipe.recipe.instructions" :key="item.index">
            {{ item }}
          </li>
        </ul> 
      </div>
      <br />
      <div id="notes-container">
        <h3> Notes </h3>
        <ul id="notes-list">
          <li v-for="item in recipe.recipe.notes" :key="item.index">
            {{ item }}
          </li>
        </ul> 
      </div>
    </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'Post',

    props: {
      id: {
        type: String
      }
    },

    computed: {
      recipe() {
        return this.$store.state.selectedArticle
      }
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

h3 {
  font-family: 'Yellowtail', cursive;
  font-size: 1.75rem !important;
  color: #380303;
}

#instructions-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

#recipe-image-container {
  height: 50vh;
  margin: auto;
}

#recipe-title {
  font-family: 'Yellowtail', cursive;
  font-size: 3.75rem !important;
  color: #380303;
  
}


/* #recipe-container {
  display: flex;
  flex-direction: row;
} */

/* #ingredient-container{
  width: 30%;
} */
</style>
