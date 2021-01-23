<template>
  <v-container
    id="blog-post"
    tag="section"
  >
    <h2>{{recipe.title}} </h2>
    <br />

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
