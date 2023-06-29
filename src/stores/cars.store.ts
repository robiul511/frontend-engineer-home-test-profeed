import { get, set } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCarsStore = defineStore('cars', () => {
  /**
   * Helper States
  */
  const dataCars = ref([
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu'
    },
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu'
    },
    {
      id: 1,
      name: 'kijang inova',
      brand: {
        id: 1,
        name: 'toyota'
      },
      machineCapacity: '1200',
      note: 'asu'
    }
  ])

  const addCar = (_cars: any) => {
    const result = get(dataCars)
    result.push(_cars)
    set(dataCars, result)
  }

  const editCar = (_cars: any, id: number) => {
    console.log(id);
    
    const result = get(dataCars)
    result.push(_cars)
    set(dataCars, result)
  }

  const deleteCar = (id: number) => {
    console.log(id);
    
  }


  return {
    // state
    dataCars,
    
    // function
    addCar,
    editCar,
    deleteCar
  }
})