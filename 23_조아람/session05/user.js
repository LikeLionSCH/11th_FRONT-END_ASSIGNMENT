function updateUser() {
    const userId = Math.floor(Math.random() * 10) + 1;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    axios.put(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      username,
      email
    })
    .then(response => {
      console.log(response.data);
      const { username, email } = response.data;
      alert(`${username}님의 username이 ${username}으로 바뀌었습니다.\n${username}님의 email이 ${email}으로 바뀌었습니다.`);
    })
    .catch(error => {
      console.error(error);
    });
}