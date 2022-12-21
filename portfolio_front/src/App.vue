<template>

  <Navbar />
  <!-- <div class="container is-max-desktop px-2 py-4"> -->
  <div class="container px-2 py-4">

    <RouterView />

  </div>
  
</template>



<script setup>
// imports
import Navbar from '@/components/layout/NavBar.vue'

import {useDatasStore} from '@/stores/storeDatas'

const datasStore = useDatasStore()
datasStore.fetchDatas()




</script>


<style >
@import 'bulma/css/bulma.min.css';

/* Bulma Responsive Tables */


/* @import "../node_modules/bulma"; */
</style>
