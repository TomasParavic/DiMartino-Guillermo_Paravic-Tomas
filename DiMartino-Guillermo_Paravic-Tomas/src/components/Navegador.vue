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
                    <template v-if="loggedUser.id !== null">
                    <li class="nav-item dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="btnUser"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            {{loggedUser.email}}
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnUser">
                                <li>
                                    <form @submit.prevent="handleLogout">
                                        <button type="submit" class="dropdown-item">Cerrar sesión</button>
                                    </form>
                                </li>
                            </ul>
                        </li>
                    </template>
                    <template v-else>
                        <li class="nav-item dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="btnUser"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            Usuario
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="btnUser">
                            <li><a class="dropdown-item" href="#" @click="showModalLogin">Login</a></li>
                            <li><a class="dropdown-item" href="#" @click="showModalRegister">Registrarse</a></li>
                            </ul>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </nav>
    <Login></Login>
    <Registrar></Registrar>
</template>

<script>
import { logout, suscribeToAuth } from "../firebase/auth"; 
import Login from "./Login.vue";
import Registrar from "./Registrar.vue";
export default {
    components: {
        Login,
        Registrar,
    },
    data() {
        return {
            modalLogin: null,
            modalRegister: null,
            loggedUser: {
                email: null,
                password: null,
            },
        };
    },
    methods: {
        showModalLogin() {
            this.modalLogin.show();
        },
        showModalRegister() {
            this.modalRegister.show();
        },
        handleLogout(){
           logout();
           console.log("Usuario deslogueado");
        }
    },
    mounted() {
        this.modalLogin = new bootstrap.Modal(document.getElementById("login"));
        this.modalRegister = new bootstrap.Modal(document.getElementById("register"));

        suscribeToAuth(newUserData => this.loggedUser = newUserData);
    }
};
</script>

<style scoped>
.navbar {
    background-color: #e10600 !important;
}
</style>