<template>
  <v-container
    id="blog-post"
    tag="section"
  >
    <h2>{{recipe.title}} </h2>
    <br />
    <v-img
        :src="require(`../assets/articles/${recipe.hero}`)"
        height="100%"
        gradient="rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)"
      >
    </v-img>
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
#instructions-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
/* #recipe-container {
  display: flex;
  flex-direction: row;
} */

/* #ingredient-container{
  width: 30%;
} */
</style>
