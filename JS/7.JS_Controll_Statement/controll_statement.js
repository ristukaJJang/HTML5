/*
    if else 문
    - 조건 표현식이 true 일 때 if문의 코드 블럭을 실행, false이면 else 문의 코드 블럭 실행
    - 조건 표현식 위치에 결과가 논리가 아니더라도 사용 가능
*/
var age = 10;
if(age > 19) console.log('성인');
else console.log('미성년자');

console.log('==============================');
var statement = '안녕하세요';
if(statement) console.log('작성된 구문 : ' + statement);


console.log('==============================');

/*
    - if else 문을 삼항 연산자로 변경하여 사용 가능
*/
statement ? console.log('작성된 구문 : ' + statement) : null;

console.log('==============================');

/*
    switch 문
    - 표현식을 비교해서 값이 표현식과 일치하면 해당하는 case문으로 실행 순서를 옮김
    - 표현식과 일치하는 case가 존재하지 않으면 default문으로 이동
    - break문을 지정하지 않으면 끝까지 진행
*/
var day = 0;
switch(day) {
    case 0:
        console.log('월요일');
        //break;
    case 1:
        console.log('화요일');
        break;
    case 2:
        console.log('수요일');
        //break;
    default:
        console.log('다른 요일');
}


console.log('==============================');

/*
    for 반복문
    - 반복할 횟수가 정해져있을 때 사용하는 반복문
*/
var dan = 3;
for(var count = 1; count<10; count++) console.log(`${dan} * ${count} = ${dan*count}`);

console.log('==============================');

/*
    while 반복문
    - 횟수가 정해져있지 않을 때 사용하는 반복문
*/
var random = Math.random();
while(random > 0.5) {
    console.log(random);
}

console.log('==============================');

/*
    do-while 반복문
    - 반복할 코드를 먼저 실행하고 조건 검사를 하는 while문
*/
var random;
do {
    random = Math.random();
    console.log(random);
}while(random>0.2);

console.log('==============================');

/*
    break 문 
    - switch, 반복문에서 코드 블럭을 강제로 나갈 때 사용
*/
var i = 0;
while(true) {
    if(i == 10) break;
    else {
        console.log('반복중');
        i++;
    }
}


console.log('==============================');

/*
    continue 문
    - 반복문 코드 블럭의 맨 마지막으로 커서를 이동
*/
for(var number = 0; number <10; number ++) {
    if(number % 2) continue;    
    else console.log(number);
}

