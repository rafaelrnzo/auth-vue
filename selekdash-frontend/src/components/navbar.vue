<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../pages/store/index.js';

    

    const router = useRouter()
    const store = useUserStore()
    const { isLoggedIn } = useUserStore()

    const logout = () => {
        alert('sukses logut')
        store.isLoggedIn = false
        localStorage.removeItem('token')
        localStorage.removeItem('user')

        router.push('/auth/login')
    }

    


</script>
<template>
    <div class="navbar">
        <div class="logo">
            <h1>Selekdash</h1>
        </div>
        <div class="menu">
            <ul>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li v-if="!store.isLoggedIn">
                    <router-link to="/auth/login">Login</router-link>
                </li>
                <li v-if="!store.isLoggedIn">
                    <router-link to="/auth/register">Register</router-link>
                </li>
                <li v-if="store.isLoggedIn">
                    <a href="#" @click="logout" class="logoutt">LogOut</a>
                </li>
            </ul>
        </div>

    </div>
</template>
<style lang="scss">
    .navbar{
        display: flex;
        justify-content: space-between;
        
        .logo h1{
        font-size: 2rem;
        }

        .menu {
        ul 
        {
        display: flex;
        list-style: none;
        }

        li {
            padding-left: 1rem ;

            a {
                text-decoration: none;
                color: darkgray;
               
            &:hover{
                color: gray;
            }

            &.router-link-active{
                color: black;
                font-weight: bold;
            }

            

            }
        }
        .logoutt > a{
                color:red;
            }
    }
}


  

    
</style>