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

        <div v-if="posts.length" class="post-list mt-4">
            <h3 class="text-center mt-4">Posteos recientes</h3>
            <div v-for="post in posts" :key="post.id" class="post-card mb-4 p-4 border rounded shadow-sm" style="max-width: 50%; margin: auto;">
                <h4>{{ post.title }}</h4>
                <p>{{ post.content }}</p>
                <small>Por: {{ post.authorName || post.email }}</small>

                <!-- Mostrar comentarios del post -->
                <div v-if="post.comments && post.comments.length" class="mt-3">
                    <h5>Comentarios:</h5>
                    <ul>
                        <li v-for="comment in post.comments" :key="comment.id">
                            <strong>{{ comment.authorName || comment.email }}:</strong> {{ comment.text }}
                        </li>
                    </ul>
                </div>

                <!-- Formulario para agregar comentario -->
                <form @submit.prevent="submitComment(post.id)" class="mt-3">
                    <div class="form-floating mb-3">
                        <textarea class="form-control" v-model="comments[post.id]" placeholder="Escribe tu comentario" required></textarea>
                        <label for="comment" class="form-label">Comentario</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Comentar</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { createPost, fetchPosts, addComment, fetchComments } from "../firebase/post";
import { suscribeToAuth } from "../firebase/auth";

export default {
    data() {
        return {
            titulo: "",
            contenido: "",
            comments: {}, // Objeto para almacenar comentarios de cada post
            posts: [],
            user: null,
        };
    },
    methods: {
        async submitPost() {
            if (!this.user) {
                alert("Debes estar loggeado para publicar un post.");
                return;
            }

            try {
                await createPost({
                    title: this.titulo,
                    content: this.contenido,
                    email: this.user.email,
                    authorName: this.user.displayName || this.user.email,
                });
                this.titulo = "";
                this.contenido = "";
                await this.loadPosts();
            } catch (error) {
                console.error("Error al enviar el post:", error);
            }
        },
        async loadPosts() {
            try {
                this.posts = await fetchPosts();
                for (const post of this.posts) {
                    post.comments = await fetchComments(post.id);
                }
            } catch (error) {
                console.error("Error al cargar los posteos:", error);
            }
        },
        async submitComment(postId) {
            if (!this.user) {
                alert("Debes estar loggeado para comentar.");
                return;
            }

            try {
                await addComment(postId, {
                    text: this.comments[postId],
                    email: this.user.email,
                    authorName: this.user.displayName || this.user.email,
                });
                this.comments[postId] = ""; // Limpiar el comentario después de enviarlo
                await this.loadPosts();
            } catch (error) {
                console.error("Error al agregar comentario:", error);
            }
        },
    },
    created() {
        this.loadPosts();
        suscribeToAuth((user) => {
            this.user = user;
        });
    },
};
</script>

<style scoped>
.post-card {
    max-width: 50%;
    margin: auto;
}
</style>
