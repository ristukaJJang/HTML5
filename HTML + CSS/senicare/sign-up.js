var users = [
    {
        name : '이성계',
        id : 'taejo',
        password : 'qwer1234',
        telnumber : '01011111111'
    },
    {
        name : '이방과',
        id : 'jungjong',
        password : 'qwer1234',
        telnumber : '01022222222'
    },
    {
        name : '이방원',
        id : 'taejong',
        password : 'qwer1234',
        telnumber : '01033333333'
    }
];

var authNumberBoxElement = document.getElementById('auth-number-box');

var userNameElement = document.getElementById('user-name');
var userIdElement = document.getElementById('user-id');
var userPasswordElement = document.getElementById('user-password');
var userPasswordCheckElement = document.getElementById('user-password-check');
var userTelnumberElement = document.getElementById('user-telnumber');
var authNumberElement = document.getElementById('auth-number');

var userNameMessageElement = document.getElementById('user-name-message');
var userIdMessageElement = document.getElementById('user-id-message');
var userPasswordMessageElement = document.getElementById('user-password-message');
var userPasswordCheckMessageElement = document.getElementById('user-password-check-message');
var userTelnumberMessageElement = document.getElementById('user-telnumber-message');
var authNumberMessageElement = document.getElementById('auth-number-message');

var userIdButtonElement = document.getElementById('user-id-button');
var userTelnumberButtonElement = document.getElementById('user-telnumber-button');
var authNumberButtonElement = document.getElementById('auth-number-button');
var signUpButtonElement = document.getElementById('sign-up-button');

var userName = '', userId = '', userPassword='', userTelnumber='', authNumber='', userPasswordCheck='';
var isDuplicatedId = true, isPasswordMatch = false, isEqualPassword = false, isTelAuth=false, isSendTel=false;

var isPossible = false;

function checkPossible() {
    var isAllEnter = userName && userId && userPassword && userPasswordCheck && userTelnumber && authNumber;
    var isAllCondition = (!isDuplicatedId) && isEqualPassword && isPasswordMatch && isSendTel && isTelAuth;
    isPossible = isAllEnter && isAllCondition;

    console.log(isPossible);
    if(isPossible) signUpButtonElement.className = 'button primary full-width';
    else signUpButtonElement.className = 'button disable full-width';
}

function userNameInputHandler(event) {
    userName = event.target.value;
    if(userName) {
        userNameMessageElement.textContent = '';
        userNameMessageElement.className = 'message';
    }else {
        userNameMessageElement.textContent = '이름을 입력해주세요.';
        userNameMessageElement.className = 'message error';
    }
    checkPossible();
}

function userIdInputHandler(event) {
    isDuplicatedId = true;
    userId = event.target.value;

    // 값이 중복됨을 알고 삽입값을 지울 때 에러 메시지를 안 보이게 처리
    userIdMessageElement.textContent = '';
    userIdMessageElement.className = 'message';

    // if(userId) userIdButtonElement.className = 'input-button active';
    // else userIdButtonElement.className = 'input-button disable';

    userIdButtonElement.className = 'input-button ' + (userId ? 'active' : 'disable');
    checkPossible();
}

function userIdButtonClickHandler(event) {
    if(!userId) return;

    var isDuplicatedId = users.some(function(item, index){
        return item.id === userId;
    });

    if(isDuplicatedId) {
        userIdMessageElement.textContent = '이미 존재하는 아이디입니다.';
        userIdMessageElement.className = 'message error';
        
    }else {
        userIdMessageElement.textContent = '사용 가능한 아이디입니다.';
        userIdMessageElement.className = 'message primary';
        
    }
    checkPossible();
}

function userPasswordInputHandler(event) {
    var pattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,13}$/;
    userPassword = event.target.value;

    userPasswordMessageElement.textContent = '';
    userPasswordMessageElement.className = 'message';

    isPasswordMatch = pattern.test(userPassword);
    if(!isPasswordMatch && userPassword) {
        userPasswordMessageElement.textContent = '영문, 숫자를 혼용하여 8 ~ 13자 입력해주세요.';
        userPasswordMessageElement.className = 'message error';
    }
    checkPossible();
}

function userPasswordCheckInputHandler(event) {
    userPasswordCheck = event.target.value;
    
    var isEqualPassword = (userPassword === userPasswordCheck);
    if(isEqualPassword || !userPasswordCheck) {
        userPasswordCheckMessageElement.textContent = '';
        userPasswordCheckMessageElement.className = 'message';
    }else {
        userPasswordCheckMessageElement.textContent = '비밀번호가 일치하지 않습니다.';
        userPasswordCheckMessageElement.className = 'message error';
    }
    checkPossible();
}

function userTelnumberInputHandler(event) {
    isSendTel = false;
    authNumberBoxElement.style.display = 'none';
    authNumberElement.value = '';

    var pattern = /^[0-9]{11}$/;
    userTelnumber = event.target.value;


    var isMatched = pattern.test(userTelnumber);
    if(!userTelnumber) {
        userTelnumberMessageElement.textContent = '';
        userTelnumberMessageElement.className = 'message';
        userTelnumberButtonElement.className = 'input-button disable';
    }
    else if(isMatched) {
        userTelnumberMessageElement.textContent = '';
        userTelnumberMessageElement.className = 'message';
        userTelnumberButtonElement.className = 'input-button active';
    }else {
        userTelnumberMessageElement.textContent = '숫자 11자 입력해주세요.';
        userTelnumberMessageElement.className = 'message error';
        userTelnumberButtonElement.className = 'input-button disable';
    }
    checkPossible();
}

function userTelnumberButtonClickHandler(event) {
    var pattern = /^[0-9]{11}$/;
    
    
    var isMatched = pattern.test(userTelnumber);
    if(!isMatched) return;

    isSendTel = true;
    userTelnumberMessageElement.textContent = '인증번호가 전송되었습니다.';
    userTelnumberMessageElement.className = 'message primary';
    authNumberBoxElement.style.display = 'flex';

    checkPossible();
}

function authNumberInputHandler(event) {
    isTelAuth = false;
    authNumber = event.target.value;
    if(authNumber) authNumberButtonElement.className = 'input-button active';
    else authNumberButtonElement.className = 'input-button disable';
    checkPossible();
}

function authNumberButtonClickHandler(event) {
    
    if(!authNumber) return;

    isTelAuth = (authNumber === '2684');
    
    if(isTelAuth) {
        authNumberMessageElement.textContent = '인증번호가 확인되었습니다.';
        authNumberMessageElement.className = 'message primary';

    }else {
        authNumberMessageElement.textContent = '인증번호가 일치하지 않습니다.';
        authNumberMessageElement.className = 'message error';
    }
    checkPossible();
}

function signUpButtonClickHandler(event) {
    
    if(!isPossible) return; 
    alert('회원가입 완료');
    location.href = './sign-in.html';
}

userNameElement.addEventListener('input', userNameInputHandler);

userIdElement.addEventListener('input', userIdInputHandler);
userIdButtonElement.addEventListener('click', userIdButtonClickHandler);

userPasswordElement.addEventListener('input', userPasswordInputHandler);
userPasswordCheckElement.addEventListener('input', userPasswordCheckInputHandler);

userTelnumberElement.addEventListener('input', userTelnumberInputHandler);
userTelnumberButtonElement.addEventListener('click', userTelnumberButtonClickHandler);

authNumberElement.addEventListener('input', authNumberInputHandler);
authNumberButtonElement.addEventListener('click', authNumberButtonClickHandler);

signUpButtonElement.addEventListener('click', signUpButtonClickHandler);