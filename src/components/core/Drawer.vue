<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    dark
    color="#00a5a7"
    temporary
  >
    <v-list>
      <v-list-item
        class="nav-item"
        v-for="(link, i) in links"
        :key="i"
        :to="link.to"
        :href="link.href"
        @click="onClick($event, link)"
      >
        <v-list-item-title v-text="link.text" />
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Yellowtail&display=swap');

.nav-item {
  font-family: 'Yellowtail', cursive, bold;
  letter-spacing: 2.5px;
}
</style>

<script>
  // Utilities
  import {
    mapGetters,
    mapMutations,
  } from 'vuex'

  export default {
    name: 'CoreDrawer',

    computed: {
      ...mapGetters(['links']),
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.setDrawer(val)
        },
      },
    },

    methods: {
      ...mapMutations(['setDrawer']),
      onClick (e, item) {
        e.stopPropagation()

        if (item.to === '/') {
          this.$vuetify.goTo(0)
          this.setDrawer(false)
          return
        }

        if (item.to || !item.href) return

        this.$vuetify.goTo(item.href)
        this.setDrawer(false)
      },
    },
  }
</script>
