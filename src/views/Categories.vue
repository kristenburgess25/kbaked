<template>
  <div id="home">
    <articles>
    </articles>
  </div>
</template>

<script>
  export default {
    name: 'Categories',

    components: {
      Articles: () => import('@/components/home/Articles'),
    },
  }
</script>
