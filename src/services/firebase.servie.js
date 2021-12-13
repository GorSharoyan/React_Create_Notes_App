import firebase, { database } from "../libraries/firebase";

//Getting Data Generic

export function getAllData(path) {
  return database
    .ref(path)
    .once("value")
    .then(function (response) {
      return response.val();
    });
}

//Posting Data

//function for creating data and  sending to firebase
export function createData(path, data, uid) {
  return database.ref(path + uid).set(data);
}
