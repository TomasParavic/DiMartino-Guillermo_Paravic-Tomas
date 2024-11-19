<template>
    <div class="comments-write">
        <h2 class="text-center mb-4">Deja tu posteo</h2>
        <form @submit.prevent="submitPost" class="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" v-model="titulo" id="tituloPost" required />
                <label for="tituloPost" class="form-label fw-bold">Título</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" v-model="contenido" id="comentarioPost" required></textarea>
                <label for="comentarioPost" class="form-label fw-bold">Post</label>
            </div>
            <button type="submit" class="btn-user mb-3">Enviar</button>
        </form>
        <div v-if="posts.length" class="post-list">
            <h3 class="text-center mt-4">Posteos recientes</h3>
            <ul>
                <li v-for="post in posts" :key="post.id">
                    <h4>{{ post.title }}</h4>
                    <p>{{ post.content }}</p>
                    <small>Por: {{ post.email }}</small>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { createPost, fetchPosts } from "../firebase/post";
import { suscribeToAuth } from "../firebase/auth";

export default {
    data() {
        return {
            titulo: "",
            contenido: "",
            posts: [],
            user: null,
        };
    },
    methods: {
        async submitPost() {
            console.log("submitPost ejecutado");
            if (!this.user) {
                alert("Debes estar loggeado para publicar un post.");
                return;
            }

            try {
                console.log("Enviando post...");
                await createPost({
                    title: this.titulo,
                    content: this.contenido,
                    email: this.user.email,
                });
                this.titulo = "";
                this.contenido = "";
                await this.loadPosts();
                console.log("Post enviado con éxito");
            } catch (error) {
                console.error("Error al enviar el post:", error);
            }
        },
        async loadPosts() {
            try {
                console.log("Cargando posts...");
                this.posts = await fetchPosts(); // No se usa orden aquí
                console.log("Posts cargados:", this.posts);
            } catch (error) {
                console.error("Error al cargar los posteos:", error);
            }
        },
    },
    created() {
        this.loadPosts();
        suscribeToAuth((user) => {
            this.user = user;
            console.log("Usuario loggeado:", user);
        });
    },
};
</script>
