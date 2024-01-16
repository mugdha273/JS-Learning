let options = {
    method : "POST",
    headers : {
        "Content-type": "application/json"
    },
    body : JSON.stringify({
        "name": "hello",
        "id": 200
    })
}

fetch('https://jsonplaceholder.typicode.com/posts', options).then((response)=> response.json()).then((json)=> console.log(json))