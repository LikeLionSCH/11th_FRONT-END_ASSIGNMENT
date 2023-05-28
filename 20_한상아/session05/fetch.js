// get
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
    })
    .catch(function (error) {
        console.log(error);
    });

// post
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Post",
        body: "post",
        userId: 1
    }),
}).then((response) => console.log(response))
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// put
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        title: "Put",
        body: "put",
        userId: 1
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// delete
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
})
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
