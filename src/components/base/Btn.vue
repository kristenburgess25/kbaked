<template>
  <v-btn
    :style="styles"
    color="#26867d"
    text-color="white"
    fab
    small
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
  export default {
    name: 'BaseBtn',

    props: {
      square: Boolean,
    },

    computed: {
      styles () {
        return {
          borderRadius: this.square ? '2px' : undefined,
        }
      },
    },
  }
</script>
