function updateUser() {
    var user_num = Math.floor(Math.random() * 10) + 1;
    var updated_UserName = document.getElementById('UserName').value; 
    var updated_Email = document.getElementById('Email').value; 


axios.get(`https://jsonplaceholder.typicode.com/users/${user_num}`)
    .then(function (response) {
        var user = response.data;  // 가져온 데이터 user 변수에 저장
        UsernameElement.textContent = user.username; // 기존 유저 정보에 가져온 데이터 나타내기
        EmailElement.textContent = user.email; // 기존 유저 정보에 가져온 데이터 나타내기
    })
    .catch(function (error) {
        console.log(error);
    });
    
axios.put(`https://jsonplaceholder.typicode.com/users/${user_num}`, {
    username: updated_UserName,
    email: updated_Email
})
.then(function (response) {
    console.log(response.data);

    var newUsernameElement = document.getElementById('updated_UserName');
    var newEmailElement = document.getElementById('updated_Email'); 
    updatedUsernameElement.textContent = updated_UserName;
    updatedEmailElement.textContent = updated_Email;
    console.log(`${UsernameElement}님의 username이 ${updatedUsernameElement}으로 바뀌었습니다.\n${EmailElement}님의 email이 ${updatedEmailElement}으로 바뀌었습니다.`);
})
.catch(function (error) {
    console.log(error);
});
}