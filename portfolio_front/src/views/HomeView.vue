
<template>
  <Spinner v-if="datasStore.getLoading" />
  <div class="card has-background-success-dark p-4 mt-5">
    <div class="card-content has-background-success-light">
      <div class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img src="@/assets/photos/moi-4fondblanc640-612.jpg" alt="photo" />
            <p class="has-text-centered">
              Philippe Maury
            </p>
          </figure>

        </div>
        <div class="media-content">
          <h1 class="is-size-3 has-text-centered has-text-weight-bold">
            Développeur d'application
          </h1>
          <h2 class="is-size-4 has-text-centered has-text-weight-bold pb-5">
            Python &#x26; VueJs
          </h2>
        </div>
      </div>
      <div class="content">
        <p class="has-text-justified">
          Ce site présente les projets réalisés pour me former au métier
          de
          <B>développeur d'application Python backend</B> en suivant le
          parcours proposé par
          <a class="has-text-weight-bold has-text-info"
            href="https://openclassrooms.com/fr/paths/518-developpeur-dapplication-python" rel="noopener noreferrer"
            target="_blank">Openclassrooms</a>. Il présente également des projets personnels, développés pour
          pratiquer les notions étudiées, ou en découvrir de nouvelles.
        </p>
      </div>

    </div>
    <footer class="card-footer has-background-success-light">
      <a href="/web-projects" class="card-footer-item has-text-weight-bold">Applications Web</a>
      <a href="/other-projects" class="card-footer-item has-text-weight-bold">Autres Applications</a>
    </footer>
  </div>

<p class="has-text-danger has-text-centered is-size-5 mt-5">{{datasStore.getAxiosError}}</p>


  <!-- cards -->
  <section class="section">
    <div class="container">

      <div class="mt-5 columns is-centered is-8 is-variable">
        <div class="column is-4-tablet is-3-desktop ">
          <div class="card has-background-success-dark p-4 card-equal-height">

            <div class="card-content has-background-success-light card-equal-height">
              <p class="title has-text-centered is-size-5">Backend</p>
              <ul class="my-card-list-items">
                <li>Python</li>
                <li>SQL</li>
                <li>Django</li>
                <li>Django Rest Framework</li>
                <li>Flask</li>

              </ul>
            </div>

          </div>
        </div>

        <div class="column is-4-tablet is-3-desktop ">
          <div class="card has-background-success-dark p-4 card-equal-height">

            <div class="card-content has-background-success-light card-equal-height">
              <p class="title has-text-centered is-size-5">Frontend</p>
              <ul class="my-card-list-items">
                <li>HTML/CSS</li>
                <li>Pyside 6, pyQt 5</li>
                <li>JavaScript</li>
                <li>Bootsrap 5</li>
                <li>Bulma</li>
                <li>Vuejs 3</li>
              </ul>

            </div>

          </div>
        </div>
      </div>
    </div>
  </section>




  <section class="section">
    <div class="container">
      <div class="columns">
        <!-- <div class="column">
          <div class="card card-equal-height ">
            <div class="card-image card-img">
              <figure class="image is-96x96">
                <img src="src\assets\logos\logo_pinia.svg" alt="logo pinia" />
              </figure>
            </div>
            <div class="card-content">
            </div>

          </div>
        </div> -->
        <div class="column">
          <div class="card card-equal-height">
            <div class="card-image card-img">
              <figure class="image">
                <img src="src\assets\logos\vite-logo.png" alt="logo vite" />
              </figure>
            </div>
            <!-- <div class="card-content">
            </div> -->

          </div>
        </div>
        <div class="column">
          <div class="card card-equal-height">
            <div class="card-image card-img">
              <figure class="image">
                <img src="src\assets\logos\logo_vue.png" alt="logo vue" />
              </figure>
            </div>
            <!-- <div class="card-content">
            </div> -->

          </div>
        </div>
        <div class="column">
          <div class="card card-equal-height">
            <div class="card-image card-img ">
              <figure class="image">
                <img src="src\assets\logos\python-logo-only.png" alt="logo python" />
              </figure>
            </div>
            <!-- <div class="card-content">
            </div> -->

          </div>
        </div>
        <div class="column">
          <div class="card card-equal-height">
            <div class="card-image card-img">
              <figure class="image ">
                <img src="src\assets\logos\logo_pinia.svg" alt="logo pinia">
              </figure>

            </div>
            <!-- <div class="card-content">
            </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>


</template>


<script setup>
import Spinner from '@/components/styles/Spinner.vue'
import { useDatasStore } from '@/stores/storeDatas'
const datasStore = useDatasStore()
</script>

<style>
.my-card-list-items {
  list-style-type: "- ";
}

.card-equal-height {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: auto;

}

.card-img {
  max-width: 128px;
  display: block;
  margin: auto;
  /* margin-right: auto; */
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 0.5rem;
}
</style>