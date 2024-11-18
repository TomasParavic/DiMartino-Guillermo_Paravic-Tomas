<template>
    <div class="comments-write">
        <h2 class="text-center mb-4">Deja tu posteo</h2>
        <form id="postForm" action="#" method="post"
            class="container d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="tituloPost" required>
                <label for="tituloPost" class="form-label fw-bold">Título</label>
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" id="comentarioPost" required></textarea>
                <label for="comentarioPost" class="form-label fw-bold">Post</label>
            </div>
            <button type="submit" class="btn-user mb-3">Enviar</button>
        </form>
    </div>
</template>