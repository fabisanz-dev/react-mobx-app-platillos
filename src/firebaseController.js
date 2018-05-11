import * as firebase from 'firebase';
import configFirebase from './firebaseConfig';

// Initialize Firebase
var config = configFirebase;

  firebase.initializeApp(config);

  const database = firebase.database();
  const platillos = database.ref('alimentos/');
  const bebidas = database.ref('bebidas/');
  const pedidos = database.ref('pedidos/');
  const data = {platillos, bebidas, pedidos, database}

  export default data;
