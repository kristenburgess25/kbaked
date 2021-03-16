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
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'Search',

    data: () => ({
        search: "",
    }),

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
        searchRecipes: function() {
            console.log(this.search)

            let searchTerm = this.search; 

            let result = articles.filter(o => o.info.title.includes(searchTerm));

            console.log(result);
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
