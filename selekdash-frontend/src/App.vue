<script setup>
import { ref } from 'vue'
import Alert from "./components/alert.vue"
import Navbar from './components/navbar.vue';
let counter = ref(0)

function tambahcounter() {
  counter.value++ 
}
</script>

<template>
<Navbar></Navbar>
<router-view></router-view>
</template>

<style scoped>

</style>
