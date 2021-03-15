<template>
  <v-app-bar
    app
    flat
    id="app-bar"
  >
    <v-app-bar-nav-icon
      class="hidden-md-and-up"
      @click="toggleDrawer"
    />

    <v-container class="mx-auto py-0">
      <v-row align="center">
        <!-- <v-img
          :src="require('@/assets/logo.png')"
          class="mr-5"
          contain
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        /> -->

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          class="header-links hidden-sm-and-down"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

        <v-spacer />

        <search />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style>
#app-bar {
  background-color: #00a5a7;
}
.header-links span {
  /* color:  rgb(118, 20, 20); */
  color: white;
}
</style>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreAppBar',

    components: {
      Search: () => import('@/components/Search')
    },

    computed: {
      ...mapGetters(['links']),
    },

    methods: {
      ...mapMutations(['toggleDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
      },
    },
  }
</script>
