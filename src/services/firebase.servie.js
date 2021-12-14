import database from "../libraries/firebase";

//GET DATA
export function getAllData(path) {
  return database
    .ref(path)
    .once("value")
    .then(function (response) {
      return response.val();
    });
}

//POST DATA
export function createData(path, data, uid) {
  return database.ref(path + uid).set(data);
}
