
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="../assets/img/f1_logo.png" alt="Formula Uno Logo" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="btnUser"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Usuario
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnUser">
                            <li><a class="dropdown-item" href="#" @click="showModalLogin">Login</a></li>
                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal"data-bs-target="#register">Registrarse</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <Login></Login>
</template>

<script setup>

import { onMounted } from 'vue';
import Login from './Login.vue';

let modalLogin ;

onMounted(() => {
    modalLogin = new bootstrap.Modal(document.getElementById('login'))
    });
    
    const showModalLogin = () => {
        modalLogin.show();
    }



</script>

<style scoped>
.navbar{
    background-color: #e10600 !important;
}
</style>