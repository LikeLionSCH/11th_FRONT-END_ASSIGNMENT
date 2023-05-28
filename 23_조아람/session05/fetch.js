//fetch get
fetch('https://jsonplaceholder.typicode.com/post/1')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//fetch post
fetch('https://jsonplaceholder.typicode.com/post/1', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name : '123'})
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//fetch put
fetch('https://jsonplaceholder.typicode.com/post/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({name : '1234'})
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//fetch delete
fetch('https://jsonplaceholder.typicode.com/post/1', {
  method: 'DELETE'
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });