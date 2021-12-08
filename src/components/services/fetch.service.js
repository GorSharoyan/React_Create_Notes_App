//POST-ing data
export const postData = (data) => {
  return fetch("http://localhost:8000/notes", {
    method: "POST",
    headers: { "Content-Type": "applications/json", body: JSON.stringify(data) }
  }).then(() => {
    console.log("Data POSTed");
  });
};

//Getting Data
export const getData = (data) => {
  return fetch("http://localhost:8000/notes", {
    method: "GET",
    headers: { "Content-Type": "applications/json", body: JSON.stringify(data) }
  }).then(() => {
    console.log("Data Uploaded");
  });
};
