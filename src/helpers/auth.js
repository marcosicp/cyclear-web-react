import { firebaseAuth, projectFirestore } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth.createUserWithEmailAndPassword(email, pw)
}

export function logout () {
  localStorage.clear();
  return firebaseAuth.signOut()
}

export function login (email, pw) {
  return firebaseAuth.signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth.sendPasswordResetEmail(email)
}

export function currentUser (email) {
  return firebaseAuth.currentUser;
}

export function sendEmailVerification (email) {
  return firebaseAuth.currentUser.sendEmailVerification();
}

export function saveUser (user) {
  return projectFirestore.collection(`users/${user.uid}`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}

export function savePedido (pedido) {
  return projectFirestore.collection("domiciliario")
    .add({
      email: pedido.email,
      fechaRetiro: pedido.fecha,
      direccion: pedido.direccion,
      nombre: pedido.nombre,
      apellido: pedido.apellido,
      telefono: pedido.telefono,
      detalle: pedido.detalle,
      creado: Date.now,
    })
}

export function getUsuario (user) {
  
  return projectFirestore.collection(`users/${user.uid}`)
    .get()
    .then(() => user)
}
