import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "./config";

export const firebaseRegister = async (email: string, password: string) => {
  const {
    user: { displayName, photoURL, email: firebaseEmail, uid },
  } = await createUserWithEmailAndPassword(auth, email, password);

  return {
    uid,
    email: firebaseEmail,
    name: displayName,
    photoURL,
  };
};

export const firebaseLogin = async (email: string, password: string) => {
  const {
    user: { displayName, photoURL, email: firebaseEmail, uid },
  } = await signInWithEmailAndPassword(auth, email, password);

  return {
    uid,
    email: firebaseEmail,
    name: displayName,
    photoURL,
  };
};

export const firebaseLogout = async () => {
  await signOut(auth);
};
