const exeBtn = document.getElementById('exeBtn')
exeBtn.addEventListener('click', function() {
    // 입력한 3개를가져와서 num1, unm2, op 변수에 저장
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    console.log('typeof : ',typeof (num1), typeof (num2))   // typeof : string string
    // -, *, / 는 연산을 위해서 자동으로 타입이 number로 변경

    let op = document.getElementById('op').value
    // 정확한 연산을 위해 string을 number로 변화하는 함수 사용

    let result = calc(Number(num1), Number(num2), op)       // 실매개변수(인자)
    // function calc(num1, num2, op) 의 변수와 메모리 공간 다름

    // span#result 요소에 결과값을 출력
    document.querySelector('span#result').textContent = result
    }
)





// 4개 연산을 테스트. console 에 결과값 출력. 값은 789 125
console.log(calc(789,125,'+'))
console.log(calc(789,125,'-'))
console.log(calc(789,125,'*'))
console.log(calc(789,125,'/'))

let result = calc(789, 125, '+')       // 전역 변수 : 파일 전체에서 사용. 
console.log('+', result)               //            이름이 같은 지역변수 result 와 다른 메모리 공간
result = calc(789, 125, '-')
console.log('-', result)
result = calc(789, 125, '*')
console.log('*', result)
result = calc(789, 125, '/')
console.log('+', result)

function calc(num1, num2, op) {     // 형식매개변수(인자)
    let result = 0      // 결과값 변수(지역 변수 : {} 안에서 선언)
    switch (op) {
        case '+' :
            result = num1 + num2
            break;
        case '-' :
            result = num1 - num2
            break;
        case '*' :
            result = num1 * num2
            break;
        case '/' :
            result = num1 / num2
            break;
        default :
        console.error('op 는 허용되지 않는 값 입력입니다.')
        break;
    }
    return result;
}