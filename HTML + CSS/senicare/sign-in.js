var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var messageElement = document.getElementById('message');
var signInButton = document.getElementById('sign-in-button');

function onSignInButtonClickHandler(event) {
    var userId = userIdElement.value;
    var userPassword = userPasswordElement.value;
    //alert(userId + userPassword);

    if(userId !== 'qwer1234' || userPassword !== '1234') {
        messageElement.textContent = '로그인 정보가 일치하지 않습니다.';
        return ;
    }
    alert('로그인 성공!');
    messageElement.textContent='';
    
}

// 비밀번호를 치고 엔터를 누르면 로그인 버튼이 눌러지는 기능
function userPasswordKeyPressHandler(event) {
    if(event.key === 'Enter') onSignInButtonClickHandler();
    //alert(event.key);
}

// 아이디 블럭에서 엔터를 누르면 비밀번호 블럭으로 커서가 넘어가는 기능
function userIdKeyPressHandler(event) {
    if(event.key === 'Enter') userPasswordElement.focus();
}

signInButton.addEventListener('click', onSignInButtonClickHandler);
userIdElement.addEventListener('keypress', userIdKeyPressHandler);
userPasswordElement.addEventListener('keypress', userPasswordKeyPressHandler);