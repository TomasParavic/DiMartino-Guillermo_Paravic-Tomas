import { db } from "./index";
import { collection, addDoc, getDocs, query, orderBy, Timestamp } from "firebase/firestore";

// Crear un post
export async function createPost({ title, content, email }) {
    try {
        const postRef = collection(db, "posts");
        await addDoc(postRef, {
            title,
            content,
            email,
            createdAt: Timestamp.now(), // Usar Timestamp de Firebase
        });
    } catch (error) {
        console.error("[post.js] Error al crear el post:", error);
        throw error;
    }
}

// Obtener todos los posts
export async function fetchPosts() {
    try {
        const postRef = collection(db, "posts");
        const q = query(postRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
    } catch (error) {
        console.error("[post.js] Error al obtener los posteos:", error);
        throw error;
    }
}