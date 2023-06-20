const axios = require('axios').default;

axios({
        method: 'post',
        url: 'https://localhost:3000/user',
        data: {
          userName: 'Cocoon',
          userId: 'co1234'
        }
      }).then((response) => console.log(response));
    