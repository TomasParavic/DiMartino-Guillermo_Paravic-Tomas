<template>
    <div class="modal fade p-0" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form class="loginForm">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="loginLabel">Login</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                            aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailLogin"
                                placeholder="nombre@ejemplo.com">
                            <label for="emailLogin">Correo electrónico</label>
                        </div>
                        <div class="form-floating">
                            <input type="password" class="form-control" id="passwordLogin"
                                placeholder="Contraseña">
                            <label for="passwordLogin">Contraseña</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {ref} from 'vue';
import firebase from 'firebase';


</script>