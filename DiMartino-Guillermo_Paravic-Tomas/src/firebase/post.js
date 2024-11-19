import { db } from "./index";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

// Crear un post
export async function createPost({ title, content, email, authorName }) {
    const postRef = collection(db, "posts");
    await addDoc(postRef, {
        title,
        content,
        email,
        authorName, // Guardar el nombre del autor
        createdAt: Timestamp.now(),
    });
}

// Obtener todos los posts
export async function fetchPosts() {
    const postRef = collection(db, "posts");
    const q = query(postRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}

// Agregar comentario a un post
export async function addComment(postId, { text, email, authorName }) {
    const commentRef = collection(db, `posts/${postId}/comments`);
    await addDoc(commentRef, {
        text,
        email,
        authorName, // Guardar el nombre del autor del comentario
        createdAt: Timestamp.now(),
    });
}

// Obtener comentarios de un post
export async function fetchComments(postId) {
    const commentRef = collection(db, `posts/${postId}/comments`);
    const querySnapshot = await getDocs(commentRef);
    return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));
}
