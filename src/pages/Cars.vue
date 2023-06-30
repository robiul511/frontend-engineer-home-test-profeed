<script setup lang="ts">
import { ref } from 'vue'
// components
import Button from '../components/Button/Button.vue'
import Input from '../components/Input/Input.vue'

// store
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

const test = () => {
  console.log('masuk ajka njubng');
}

const testInput = ref('')

</script>

<template>
  <div class="button-flex">
    <button @click="addBrands">Add new brands</button>
    <router-link to="/brands">Go to brands page </router-link>

  </div>
  <Button @click="test">MASuk njing</Button>
  <Input v-model="testInput"/>
  <p>Ini hasil inputannya {{ testInput }}</p>
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
