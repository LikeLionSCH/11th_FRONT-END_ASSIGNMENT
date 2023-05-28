const axios = require('axios');

// GET 요청
axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// POST 요청
axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: '제목',
    body: '내용',
    userId: 1
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// PUT 요청
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    title: '새로운 제목',
    body: '새로운 내용',
    userId: 1
  })
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });

// DELETE 요청
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });
