//axios get
axios.get('https://jsonplaceholder.typicode.com/post/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

//axios put
axios.put('https://jsonplaceholder.typicode.com/post/1', {name : 'AAA', age : 00})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

//axios post
axios.post('https://jsonplaceholder.typicode.com/post/1', {name : 'aaa', age : 10})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });

//axios delete
axios.delete('https://jsonplaceholder.typicode.com/post/1')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
