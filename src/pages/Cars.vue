<script setup lang="ts">
import { useCarsStore } from '../stores/cars.store'

const carStores = useCarsStore()
console.log(carStores);


</script>

<template>
  <h2> Cars Page </h2>
  <p>{{ carStores.dataCars }}</p>
</template>

<style scoped>
</style>
