<template>
  <h1 v-if="$route.name === 'web-projects' ?
  msg = 'Liste des applications web' :
  msg = 'Liste des autres applications'"
  class="is-size-3 has-text-centered my-5">
    {{ msg }}
  </h1>

  <div class="table-container mt-5">
    <table class="table  is-hoverable mx-auto is-bordered">
      <thead class="has-background-black">
        <tr>
          <th>
            <p class="has-text-centered has-text-white-bis">Catégorie</p>
          </th>
          <th>
            <p class="has-text-centered has-text-white-bis">Nom</p>
          </th>
        </tr>
      </thead>
      <tbody v-for="category in datasStore.getCategories($route.name)" class="has-text-centered">
        <tr>
          <td>{{ category.name }}</td>
        <tr v-for="project in category.projects" :key="project.id" class="table is-bordered">
          <td width="50%"><a :href="`details-project/${project.id}`">{{ project.name }} </a></td>
        </tr>
        </tr>
      </tbody>
    </table>
  </div>

</template>


<script setup>

import { useDatasStore } from '@/stores/storeDatas'
const datasStore = useDatasStore()

</script>

<style>
.table td {
  vertical-align: middle;
}
</style>
