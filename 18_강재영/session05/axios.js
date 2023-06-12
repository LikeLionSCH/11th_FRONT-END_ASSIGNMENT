axios.get('https://jsonplaceholder.typicode.com/post/1')
.then(function(response) {
console.log(response);
})
.catch(function(error) {
console.log(error);
});

axios.post('https://jsonplaceholder.typicode.com/posts', { name: 'kkkkkk', age: 26, phone_number: '010-7388-6604' })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

axios.put('https://jsonplaceholder.typicode.com/posts/1', { name: 'mmmmmm', age: 31, phone_number: '010-7334-5268' })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

fetch("https://jsonplaceholder.typicode.com/posts/1").then((response) =>
  console.log(response)
);

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "JaeYoung",
    age: 26,
    phone_number: "010-3566-7749",
  }),
}).then((response) => console.log(response));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "sefsefsefsfs",
    age: 36,
    phone_number: "010-3566-7749",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));