//POST-ing data
export const postData = (data) => {
  console.log(data);
  console.log(JSON.stringify(data));
  return fetch("http://localhost:8000/notes", {
    method: "POST",
    headers: { "Content-Type": "applications/json", body: JSON.stringify(data) }
  }).then(() => {
    console.log("Data Uploaded");
  });
};

//Getting Data
export const getAllData = () => {
  return fetch("http://localhost:8000/notes")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log("Data Downloaded");
      return data;
    });
};
