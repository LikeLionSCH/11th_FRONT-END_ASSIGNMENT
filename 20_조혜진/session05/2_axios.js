// GET
axios.get('https://jsonplaceholder.typicode.com/posts/1')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// POST
axios.post('https://jsonplaceholder.typicode.com/posts', { name: 'hyejean', age: 25 })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// PUT
axios.put('https://jsonplaceholder.typicode.com/posts/1', { name: 'megummy', age: 25 })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// DELETE
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});

// PATCH
axios.patch('https://jsonplaceholder.typicode.com/posts/1', { name: 'update' })
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
});