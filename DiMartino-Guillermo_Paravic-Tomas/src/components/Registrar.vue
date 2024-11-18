<template>
    <div class="modal fade p-0" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form id="registerForm">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="registerLabel">Registrar usuario</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailRegister" placeholder="name@formula1.com">
                            <label for="emailRegister">Correo electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="passwordRegister" placeholder="Contraseña">
                            <label for="passwordRegister">Contraseña</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">Registrar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
