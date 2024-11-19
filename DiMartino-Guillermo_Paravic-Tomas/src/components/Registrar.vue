 <template>
    <div class="modal fade p-0" id="register" tabindex="-1" aria-labelledby="registerLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form id="registerForm" @submit.prevent="handleSubmit">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="registerLabel">Registrar usuario</h3>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="emailRegister" placeholder="name@formula1.com" v-model="user.email">
                            <label for="emailRegister">Correo electrónico</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" class="form-control" id="passwordRegister" placeholder="Contraseña" v-model="user.password">
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


 <script>
import { register } from "../firebase/auth.js";

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
                await register({ ...this.user });
                this.user = { email: "", password: "" };
                console.log("Usuario creado con éxito.");
            } catch (error) {
                console.error('Error al crar el usuario:', error);
            }
            this.loading = false;
        },
    }
}
</script> 



