<template>
    <div v-for="cat in datasStore.getProjectByCat(catName)" :key="cat.id">
        <h1 class="is-size-3 has-text-centered my-5">
            Projets : {{ cat.name }}
        </h1>
        <div class="table-container mt-5">
            <table class="table  is-hoverable mx-auto is-bordered">
                <thead class="has-background-black">
                    <tr>
                        <th>
                            <p class="has-text-centered has-text-white-bis">Nom</p>
                        </th>
                        <th>
                            <p class="has-text-centered has-text-white-bis">Description</p>
                        </th>
                    </tr>
                </thead>
                <tbody v-for="project in cat.projects" :key="project.id" class="has-text-centered">
                    <tr>
                        <td width="50%"><a :href="`../details-project/${project.id}`">{{ project.name }} </a></td>
                        <td width="50%">{{ project.short_description }} </td>
                    

                    </tr>
                </tbody>
            </table>
    </div>
</div>
   
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useDatasStore } from '@/stores/storeDatas'

const datasStore = useDatasStore()
const route = useRoute()
const router = useRouter();

const catName = route.params.name.charAt(0).toUpperCase()
    + route.params.name.slice(1)


const backReturn = () => {
    //   router.push("/");
    router.back();
};
</script>