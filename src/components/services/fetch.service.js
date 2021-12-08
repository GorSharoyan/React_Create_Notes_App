//POST-ing data
const postData = (data) => {
  return fetch("http://localhost:8000/notes", {
    method: "POST",
    headers: { "Content-Type": "applications/json", body: JSON.stringify(data) }
  }).then(() => {
    console.log("Data POSTed");
  });
};

export default postData;

//Getting Data
const getData = (data) => {
  return fetch("http://localhost:8000/notes", {
    method: "GET",
    headers: { "Content-Type": "applications/json", body: JSON.stringify(data) }
  }).then(() => {
    console.log("Data Uploaded");
  });
};

export default getData