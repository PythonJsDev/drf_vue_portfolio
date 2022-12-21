<template>
  
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container px-2">
      <!-- <div class="container is-max-desktop px-2"> -->
      <div class="navbar-brand">
        <RouterLink to="/" class="navbar-item">
          <img src="@/assets/logos/logo_pjsdev_fb.png" style="max-height: 70px" class="py-1 px-1 box is-radiusless" />
          <div class="navbar-item is-size-4 is-family-monospace has-text-weight-bold has-text-white">
            Portfolio
          </div>
        </RouterLink>
        <a @click.prevent="showMobileNav = !showMobileNav" role="button" class="navbar-burger"
          :class="{ 'is-active': showMobileNav }" aria-label="menu" aria-expanded="false"
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
        <div class="navbar-end ">
          <div class="navbar-item has-dropdown is-hoverable">
            <RouterLink @click="showMobileNav = false" class="navbar-item navbar-link" active-class="is-active" to="/web-projects">
              Applications Web
            </RouterLink>
            <div class="navbar-dropdown">
              <a href='/category/django' @click="showMobileNav = false" class="navbar-item" >
                Django
              </a>
              <a href='/category/drf' @click="showMobileNav = false" class="navbar-item">
                DRF
              </a>
              <a href='/category/flask' @click="showMobileNav = false" class="navbar-item">
               Flask </a>
              
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <RouterLink @click="showMobileNav = false" class="navbar-item navbar-link" active-class="is-active"
              to="/other-projects">
              Autres Applications
            </RouterLink>
            <div class="navbar-dropdown">
              <RouterLink @click="showMobileNav = false" to="/category/python" class="navbar-item">
                Python
              </RouterLink>
              <RouterLink @click="showMobileNav = false" to="/category/javascript" class="navbar-item">
                JavaScript
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
  
</template>
  
<script setup>
import { ref } from "vue";

const showMobileNav = ref(false);
const showDropdownNav = ref(true);




</script>
<style>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    left: 0;
    width: 100%;
  }
}
</style>
  