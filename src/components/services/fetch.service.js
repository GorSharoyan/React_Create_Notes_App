export default const postData =  (data)=>{
    fetch("",
    {
        method:"POST",
        headers:{"Content-Type":"applications/json",
        body:JSON.stringify(data)
    }
    }).then(()=>{
        console.log("Data POSTed")
    })
}