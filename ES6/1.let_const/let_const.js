/*
    let
*/

/*
    블록 레벨 스코프 : 
    - 코드 블럭 내부에서 선언되어서 해당 코드 블럭에서만 사용 가능
*/
{
    var x = 10;
}
console.log(x);

// {
//     let y = 10;
// }
// console.log(y);

/*
    변수 중복 선언 불가 : 
    - 동일한 이름의 변수 선언 불가
*/
var x = 10;
var x = 20;

// let y = 10;
// let y = 20;


/*
    호이스팅 : var, function 선언문을 최상단에 선언한 것 처럼 동작하는 것 
    - let 키워드로 선언된 변수는 최상단에 선언되지만(코드 블럭 내에서 최상단)
    - 실제로 선언한 위치 이전까지는 일시적 사각지대로 빠짐
*/
console.log(z);
var z = 10;

//ReferenceError: Cannot access 'y' before initialization
console.log(y);
let y = 10;

//ReferenceError: y2 is not defined
console.log(y2);

/*
    const
*/

/*
    선언과 초기화 : 
    - const 키워드로 선언된 변수는 재할당 불가
    - 선언과 동시에 초기화가 이루어 져야 함
*/
const ASSIGNMENT = 10;
ASSIGNMENT = 20;
//TypeError: Assignment to constant variable.
console.log(ASSIGNMENT);

//SyntaxError: Missing initializer in const declaration
//const INITIAL;

/*
    상수와 객체 : 
    - 코드의 가독성 향상을 위해 많이 사용
    - 객체를 사용할 때 변수에 할당 후 변경하지 못하도록 하고, 속성만 접근 가능하게 함
    - 일반적으로 object 타입들은 상수형 변수에 할당
*/
const king = {name:'이성계'};
//TypeError: Assignment to constant variable.
//king = {name:'이방과'};
king.name = '이방과';
console.log(king);

/*
    var, let, const
    - ES6 이상 버전에서는 var 사용 x
    - 재할당이 이뤄지는 변수에는 let 사용
    - 대부분의 변수에서 const 사용
*/