<template>
    <div  v-if="OpenClose" class="modal fade p-0" id="login" tabindex="-1" aria-labelledby="loginLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <form class="loginForm">
                    <div class="modal-header">
                        <h3 class="modal-title fs-5" id="loginLabel">Login</h3>
                        <button type="button" class="btn-close" @click="OpenCloseFun()" 
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
                        <button type="button" @click="OpenCloseFun()" class="btn btn-secondary" >Cerrar</button>
                        <button type="submit" class="btn btn-primary" >Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default({
        props:{
            visible:Boolean,
        },
        data(){
            return{
                OpenClose:this.visible
            }
        },
        methods:{
            OpenCloseFun(){
                this.OpenClose= !this.OpenClose;
            }
        },
        watch:{
            visible: function(newVal, oldVal){
                this.OpenClose=newVal;
            }
        }
    
})


</script>