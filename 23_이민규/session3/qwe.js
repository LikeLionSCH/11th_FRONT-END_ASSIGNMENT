axios.get('https://jsonplaceholder.typicode.com/users/')
    .then(function(response){
        console.log(response)
    })
    .catch(function(error){
        console.log(error)
    })

//axios({
//    method: 'post',
  //  url: 'https://localhost:3000/user',
    //data: {
      //  username: 'Cocoon',
        //userId: 'co1234'
    //}
//}).then((response) => console.log(response))