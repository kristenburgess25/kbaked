<template>
  <v-col
    cols="12"
    :md="size === 2 ? 6 : size === 3 ? 4 : undefined"
  >
    <base-card

      @click="handleClick(value)"
      :height="value.prominent ? prominentHeight : 350"
      color="grey lighten-1"
      dark
    >
      <v-img
        class="card-image"
        :src="value.image"
        height="100%"
        gradient="rgba(0, 0, 0, .32), rgba(0, 0, 0, .32)"
      >

        <v-row
          v-if="!value.prominent"
          class="fill-height text-left ma-0"
        >
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="rgb(118, 20, 20)"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>

            <div class="caption">
              {{ value.author }}<br>
            </div>
          </v-col>

          <v-col align-self="end">
            <!-- <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              See Recipe
            </v-chip> -->
          </v-col>
        </v-row>
        
        <v-row
          v-if="value.prominent"
          class="fill-height text-left ma-0"
        >
          <v-col cols="12">
            <v-chip
              label
              class="mx-0 mb-2 text-uppercase"
              color="rgb(118, 20, 20)"
              text-color="white"
              small
              @click.stop=""
            >
              {{ value.category }}
            </v-chip>

            <h3 class="title font-weight-bold mb-2">
              {{ value.title }}
            </h3>

            <div class="caption">
              {{ value.author }}<br>
            </div>
          </v-col>

          <v-col align-self="end">
            <!-- <v-chip
              class="text-uppercase ma-0"
              color="primary"
              label
              small
              @click.stop=""
            >
              See Recipe
            </v-chip> -->
          </v-col>
        </v-row>
      </v-img>
    </base-card>
  </v-col>
</template>

<script>
import router from 'vue-router'
  import {
    mapState,
  } from 'vuex'

  export default {
    name: 'FeedCard',

    props: {
      size: {
        type: Number,
        required: true,
      },
      value: {
        type: Object,
        default: () => ({}),
      },
    },

    computed: {
      ...mapState([
        'viewCategory'
      ]),
      prominentHeight() {
        let viewingCategory = this.viewCategory
        if(viewingCategory) {
          return 350
        } 
        if(this.$route.name === 'home') {
          return 450
        }
      }
    },

    methods: {
      handleClick: function(recipe) {
        this.$router.push({name: 'post', params: {id: recipe.id}})
      }
    }
  }
</script>

<style>
.card-image {
  transition: .3s linear;
  /* opacity: 0.75; */
  color: pink;

}

/* .card-image:hover {
    transition: .3s linear;
    background: linear-gradient(to right, rgba(0, 0, 0, .22), rgba(0, 0, 0, .22)) ; 
} */

.card-image:before {
  content: '';
  display: block;
  position: absolute;
  height: 0%;
  width: 100%;
  bottom: 0;
  transition: 0.3s linear ease-out;
  background: linear-gradient(to right, rgba(0, 0, 0, .12), rgba(0, 0, 0, .12));
}
.card-image:hover:before {
  height: 100%;
}

</style>
