<template>
    <v-text-field
        append-icon="mdi-magnify"
        flat
        hide-details
        solo-inverted
        style="max-width: 300px;"
        v-model="search"
        v-on:change="searchRecipes"
    />
</template>

<style>
</style>

<script>
  import {
    mapState,
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'Search',

    data: () => ({
        search: "",
    }),

    computed: {
        ...mapState([
            'articles', 
            'displayArticles',
            'viewCategory',
        ]),
        ...mapGetters(['links']),
    },

    methods: {
        searchRecipes: function() {
            
            let searchTerm = this.search.toLowerCase(); 
            let articles = this.articles;
            let matches = []

            console.log("search term", searchTerm)
            console.log("articles", articles)

            // search titles 
            let titleMatch = articles.filter(o => o.title.toLowerCase().includes(searchTerm));
            matches.push(...titleMatch)
            console.log('title matches', titleMatch);
            // search introduction 
            let introMatch = articles.filter(o => o.introduction.toLowerCase().includes(searchTerm));
            console.log('intro matches', introMatch);
            matches.push(...introMatch)
            // search categories 
            let categoryMatch = articles.filter(o => o.category.toLowerCase().includes(searchTerm));
            console.log('category matches', categoryMatch);
            matches.push(...categoryMatch)
            // search tags 
            let tagMatch = articles.filter(o => o.tags.includes(searchTerm));
            console.log('intro matches', tagMatch);
            matches.push(...tagMatch)

            let uniqueMatches = matches.reduce((unique, article) => {
                return unique.includes(article) ? unique : [...unique, article]
            }, [])

            console.log('unique matches', uniqueMatches)


        },
       

      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
    },
  }
</script>
