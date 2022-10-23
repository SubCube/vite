<script setup lang="ts"></script>

<template>
  <nav>
    <router-link :to="{ name: 'main' }">Main Page</router-link>
    <router-link :to="{ name: 'about' }">About Page</router-link>
    <router-link :to="{ name: 'todo' }">ToDo Page</router-link>
  </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<style scoped>
nav {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}
.container {
  max-width: 1100px;
  margin: 0 auto;
}
</style>
