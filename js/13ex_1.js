// 함수 유형 1 : 인자 없다. 리턴 없다.
add1()
add1()
add1()

// 함수 유형 2 : 인자 없다. 리턴(출력) 있다.
let result = sub()      // 함수를 호출하면 결과값을 전달 받습니다.
console.log('뺄셈', result)
console.log('뺄셈', sub())

// 함수 유형 3 : 인자 있다. 리턴 없다.
muliply(23, 56)     // 23, 56 은 함수 실행에 필요한 입력값
muliply(111, 23)

// 함수 유형 4 : 인자 있다. 리턴 있다.
result = div(77, 13)
console.log('나누기 : ', result)
console.log('나누기 : ', div(77, 13))
console.log('나눈 결과 소수점 : ', result.toFixed(3))


// 함수 정의 => 함수 호이스팅(끌어올리기) 가능한 것은 function 사용할때만 가능
function add1() {
    console.log(100+1000)
}

function sub() {
    return 100 - 1000;      // 함수의 실행 결과를 전달하기
}

function muliply(num1, num2) {
    // num1, num2 : 함수 실행시 사용자가 정한 입력값을 저장하는 변수
    console.log('num1*num2 : ', num1 * num2)
}

function div(num1, num2) {
    return num1/num2
}