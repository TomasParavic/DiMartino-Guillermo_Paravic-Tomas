<template>
    <div class="modal fade p-0" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form class="loginForm" @submit.prevent="handleSubmit">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="loginLabel">Login</h3>
                        <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailLogin" placeholder="nombre@ejemplo.com"
                                v-model="user.email">
                            <label for="emailLogin">Correo electrónico</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="passwordLogin" placeholder="Contraseña"
                                v-model="user.password">
                            <label for="passwordLogin">Contraseña</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cerrar
                        </button>
                        <button type="submit" class="btn btn-primary">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from "../firebase/auth.js";
export default {
    data() {
        return {
            loading: false,
            user: {
                email: "",
                password: "",
            },
        }
    },
    methods: {
       async handleSubmit() {
            this.loading = true;
            try {
                await login({ ...this.user });
                console.log("Sesión iniciada con éxito.");
            } catch (error) {
                console.error('Error al iniciar sesión:', error);
            }
            this.loading = false;
        },
    }
}
</script>
