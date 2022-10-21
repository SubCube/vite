<script setup lang="ts"></script>

<template>
  <nav>
    <router-link :to="{ name: 'main' }">Main Page</router-link>
    <router-link :to="{ name: 'about' }">About Page</router-link>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
