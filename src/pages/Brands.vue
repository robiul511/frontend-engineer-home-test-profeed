<script setup lang="ts">
import { useBrandsStore } from '../stores/brands.store'

const brandStores = useBrandsStore()
console.log(brandStores);

</script>

<template>
  <h2> Brands Page </h2>
  <p>{{ brandStores.dataBrands }}</p>
</template>

<style scoped>
</style>
