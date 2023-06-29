<script setup lang="ts">
import { useCarsStore } from '../stores/cars.store'

import { useBrandsStore } from '../stores/brands.store'

const brandStores = useBrandsStore()

const carStores = useCarsStore()

console.log(carStores);

const addBrands = () => {
  const payload = {
    id: 2,
    name: 'honda'
  }

  brandStores.addBrand(payload)
}


</script>

<template>
  <div class="button-flex">
    <button @click="addBrands">Add new brands</button>
    <router-link to="/brands">Go to brands page </router-link>

  </div>
  <h2> Cars Page </h2>
  <p>data cars</p>
  <p>{{ carStores.dataCars }}</p>
  <p>data brands</p>
  <p>{{ brandStores.dataBrands }}</p>
</template>

<style scoped>
.button-flex {
  display: flex;
}

</style>
