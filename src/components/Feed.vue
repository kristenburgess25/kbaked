<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <slot />
      </v-col>
      <feed-card
        class="feed-card"
        v-for="(article, i) in displayArticles"
        :key="article.title"
        :size="viewCategory ? 3 : layout[i]"
        :value="article"  
      />
    </v-row>

    <v-row align="center">
      <v-col cols="3">
        <base-btn
          v-if="page !== 1"
          class="ml-0"
          square
          title="Previous page"
          @click="page--"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </base-btn>
      </v-col>

      <!-- <v-col
        class="text-center subheading"
        cols="6"
      >
        PAGE {{ page }} OF {{ pages }}
      </v-col> -->

      <v-col
        class="text-right"
        cols="3"
      >
        <base-btn
          v-if="pages > 1 && page < pages"
          class="mr-0"
          square
          title="Next page"
          @click="page++"
        >
          <v-icon color="white">mdi-chevron-right</v-icon>
        </base-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="css">
.feed-card:hover {
  transform: scale(1.05);
}  
</style>

<script>
  // Utilities
  import {
    mapState,
    mapGetters,
  } from 'vuex'

  export default {
    name: 'Feed',

    components: {
      FeedCard: () => import('@/components/FeedCard'),
    },

    created() {
      // I feel like most of this logic should live elsewhere
      const route = this.$route.name
      const categories = this.categories

      let category = categories.find(category => category.text.toLowerCase() === route)
      let articles = category ? category.recipes : this.articles

      if(category) { this.$store.commit('viewCategory', true) }
      if(route === 'home') { this.$store.commit('viewCategory', false) }

      this.$store.commit('setArticles', articles)
    },


    data: () => ({
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1,
    }),

    computed: {
      ...mapState([
        'articles', 
        'displayArticles',
        'viewCategory',
        ]),
      ...mapGetters(['categories']),
      pages () {
        return Math.ceil(this.displayArticles.length / 11)
      },
      paginatedArticles () {
        const start = (this.page - 1) * 11
        const stop = this.page * 11

        return this.displayArticles.slice(start, stop)
      },
    },

    watch: {
      page () {
        window.scrollTo(0, 0)
      },
    },
  }
</script>
