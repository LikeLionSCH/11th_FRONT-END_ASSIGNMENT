const axios = require('axios');
// get
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// post
axios.post('https://jsonplaceholder.typicode.com/posts', { username: 'sanga', age: 23 })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// put
axios.put('https://jsonplaceholder.typicode.com/posts/1', { username: 'hsa', age: 23 })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });

// delete
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });