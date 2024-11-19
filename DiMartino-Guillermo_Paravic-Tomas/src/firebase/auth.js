import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "./index";

let loggedUser = {
    id: null,
    email: null,
};

let observers=[];

onAuthStateChanged(auth, (user) => {
    if (user) {
        loggedUser={
            id: user.uid,
            email: user.email,
        }
    } else {
       loggedUser={
              id: null,
              email: null,
       }
    }
    notifyAll();
});

export function suscribeToAuth(callback){
    observers.push(callback);
    notify(callback);
}

function notify(callback){
    callback({...loggedUser});
}

function notifyAll(){
    observers.forEach((callback) => notify(callback));
}

export function logout(){
    return signOut(auth);
}

export async function login({email, password}){
    try {
         await signInWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error("[auth.js] Error al autenticar el usuario", error);
        throw error;
    }
}

export async function register({email, password}){
    try {
         await createUserWithEmailAndPassword(auth, email, password);
        return true;
    } catch (error) {
        console.error("[auth.js] Error al registrar el usuario", error);
        throw error;
    }
}


