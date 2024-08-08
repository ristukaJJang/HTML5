/*
    매개변수 기본값 : 
    - 함수 호출시 매개변수를 전달하지 않으면 사용할 기본 값을 지정할 수 있음
*/
const add = (a=5, b=10) => a + b;
console.log(add());
console.log(add(8, 8));

console.log('========================================');

/*
    rest 매개변수 : 
    - 함수 선언시 매개변수 앞에 ... 을 붙여서 정의한 매개변수
    - 함수에 전달받은 매개변수의 배열을 전달
    - 다른 매개변수와 같이 rest 매개변수를 사용할 땐 rest 매개변수를 가장 마지막에 선언해야 함
*/
const restFunction = (...arg) => {console.log(arg);};
restFunction(1, 2, 3, 4, 5);

const restFunction2 = (arg1, ...args) => {
    console.log(arg1);
    console.log(args);
};
restFunction2(28, 428, 313, 1122, 827, 93);
console.log('========================================');

/*
    spread 연산자 : 
    - ...을 사용하여 대상의 요소를 하나씩 분리
    - 연산자의 피연산자는 반드시 반복 가능한 객체(배열, 객체, 문자열 등)여야 한다.
*/
const numbers = [1, 2, 3, 4];
console.log(...numbers);

console.log('========================================');

// 배열 복사에 사용
const newNumbers = [...numbers]; // => [1, 2, 3, 4, 5] 동일
console.log(newNumbers);

newNumbers[0]=20;
console.log(numbers);
console.log(newNumbers);

// 배열 연결에 사용, 순서에도 영향 0
const numbers2 = [5, 6, 7, 8];
let newNumbers2 = [...numbers, ...numbers2]; // [1, 2, 3, 4, 5, 6, 7, 8]
console.log(newNumbers2);
newNumbers2 = [...numbers2, ...numbers]; // [5, 6, 7, 8, 1, 2, 3, 4]

console.log('========================================');

// 배열 요소 추가
newNumbers2 = [...newNumbers2, 9, 10];
console.log(newNumbers2);

// 객체 복사, 연결, 요소 추가에 사용
const King = {
    name:'이성계',
    tombName:'태조'
};

let newKing = {...King};
newKing.name = '이방과';
console.log(King);
console.log(newKing);

const kingInfo = {
    address:'서울특별시',
    country:'고려'
};
newKing = {...King, ...kingInfo};
console.log(newKing);

newKing = {...King, birth:'1335-11-04'};
console.log(newKing);

newKing = {...King, name:'이단', birth:'1335-11-04'};
console.log(newKing);