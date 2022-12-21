<template>
    <div
      v-for="project in datasStore.getProjectById(projectId)"
      :key="project.id"
      class="container card has-background-success-dark p-4 mt-5"
    >
        <header class="card-header has-background-success-light">
            <p class="card-header-title is-centered">
                {{ project.name }}
            </p>
        </header>
        <div class="card-content has-background-success-light">
            <div class="content">
                <p v-if="project.oc_project">* Projet d'étude openclassrooms</p>
                <p v-if="project.url_github_oc">* Projet d'étude openclassrooms</p>
                {{ project.description }}

                <p v-for="description in project.description.split('<a :href')">
                    {{ description }}
                </p>

                <ul v-if="project.items_list">
                    <li v-for="item in project.items_list.split('-')">
                        {{ item }}
                    </li>
                </ul>
                <p v-if="project.related_project_name"> projet en lien: <a :href = "`${project.related_project_url}`" target="_blank" rel="noopener noreferrer"> {{ project.related_project_name }} </a></p>
                <br />
                <p>Mots clés: {{ project.keywords_list }}</p>

            </div>
        </div>
        <footer class="card-footer has-background-success-light">
            <a v-if="project.url_github_oc" :href="`${project.url_github_oc}`" target="_blank" rel="noopener noreferrer"
                class="card-footer-item">Voir le code</a>
            <a v-else :href="`${project.url_github_portfolio}`" target="_blank" rel="noopener noreferrer"
                class="card-footer-item">Voir le code</a>
            <a @click.prevent="backReturn" class="card-footer-item" href="#">Retour</a>
        </footer>
    </div>
</template>


<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useDatasStore } from '@/stores/storeDatas'

const datasStore = useDatasStore()
const route = useRoute()
const router = useRouter();

const projectId = parseInt(route.params.id, 10)

const backReturn = () => {
    router.back();
};
</script>