<script setup>
import Card from './../../components/Card.vue';
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUserStore } from './../store/index.js'
const { submitLogin } = useUserStore()
import axios from 'axios'
  
const username = ref('')
const password = ref('')
let router = useRouter();


const submit = () => submitLogin(username.value,password.value)
</script>

<template>
<div class="auth">
    <Card>
        <h2>Login</h2>
        <form @submit.prevent="submit">
        <div class="inp">
            <label class="label-inp" for="">Username</label>
            <input type="text" v-model="username">
        </div>
        <div class="inp">
            <label class="label-inp" for="">Password</label>
            <input type="password " v-model="password">
        </div>
        <button class="center" type="submit">Submit</button>
        </form>
    </Card>
</div>

</template>

<style lang="scss">
    .inp{
        margin-bottom: 6px;

        
    }

    .inp.label-inp{
        margin-left: 7px;
        }

</style>        