var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler(event) {
    var userId = userIdElement.value;
    var userPassword = userPasswordElement.value;
    //alert(userId + userPassword);

    if(userId !== 'qwer1234' || userPassword !== '1234') {
        messageElement.textContent='로그인 정보가 일치하지 않습니다.';
    }else {
        alert('로그인 성공');
    }
}

signInButton.addEventListener('click', onSignInButtonClickHandler);