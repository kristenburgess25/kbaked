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
        gradient="rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"
      >
      </v-img>
    <p>
      {{recipe.introduction}}
    </p>
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
