import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./index";

export async function login({email, password}){
    try {
         await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error("[auth.js] Error al autenticar el usuario", error);
        throw error;
    }
}