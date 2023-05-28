function RandomUser() {
    return Math.floor(Math.random() * 10) + 1;
}

function updateRandomUsers() {
    // 10개의 user정보 get
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        var randomUsers = [];

        // 랜덤하게 10개의 사용자 ID 선택
        while (randomUsers.length < 10) {
            var randomUser = RandomUser();
            if (!randomUsers.includes(randomUser)) {
                randomUsers.push(randomUser);
            }
        }

        randomUsers.forEach(function (userId) {
            var usernameInput = document.getElementById("username").value;
            var emailInput = document.getElementById("email").value;

            // User 정보 업데이트
            axios.patch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                username: usernameInput,
                email: emailInput
            })
            .then(function (response) {
                var updatedUser = response.data;
                console.log(`${updatedUser.name}님의 username이 ${updatedUser.username}으로 바뀌었습니다.\n${updatedUser.name}님의 email이 ${updatedUser.email}으로 바뀌었습니다.`);
            })
            .catch(function (error) {
                console.log(error);
            });
        });
    })
    .catch(function (error) {
        console.log(error);
    });
}