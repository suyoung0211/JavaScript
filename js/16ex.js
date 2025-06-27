// 오늘 시간표 - time, todo 배열 선언
const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '조료조사']

// 내일 시간표
const time2 = ['08:00', '10:00', '11:20', '14:00', '15:00', '17:00']
const todo2 = ['수업', '회의', '점심식사', '운동', '업무', '친구약속']

// tr 태그 중 id가 time, todo 중 클래스가 td 인 모든 요소
const timeTB = document.querySelectorAll('tr#time td')
const todoTB = document.querySelectorAll('tr#todo td')

// 실행 버튼
const tdy = document.getElementById('today')
const tom = document.getElementById('tomorrow')

// 테이블 tr
const timeTr = document.getElementById('time')
const todoTr = document.getElementById('todo')

// 제목 h3
const title = document.getElementById('title')

// 테이블 만들기
for(let i=0; i < time.length; i++) {
    timeTB[i].textContent = time[i]
    todoTB[i].textContent = todo[i]
}

// 데이터(배열)만 다르고 실행 내용은 같아요 -> 함수로 리팩토링
function timeline(timeArr, todoArr, title) {     // 입력 : 시간표 배열, 할일 배열, 제목
                  // 형식 매개변수 (값은 실행할 때 전달되어 저장)
    timeTr.innerHTML = '<th>TIME</th>'
    todoTr.innerHTML = '<th>TODO</th>'
    title.textContent = title + ' 시간표'

    for (let t of timeArr) {
        const td = document.createElement('td')
        td.textContent = t
        timeTr.appendChild(td)
        } 
    for (let t of todoArr) {
        const td = document.createElement('td')
        td.textContent = t
        todoTr.appendChild(td)
        }
}

/*
1. function timeline(timeArr, todoArr, title) {
                코드는 생략
    }

2. 함수 호출 :
    timeiline(time, todo, '오늘')     // 버튼1
    timeiline(time2, todo2, '내일')   // 버튼2

3. 실제 데이터는 time, todo, time2, todo2 변수에 저장된 '배열'입니다.
                      ㄴ 이미 여러개 값이 배열 형식으로 저장

    1) 메모리의 주소 : 데이터 접근(읽기/쓰기)은 변수명이 주소로 바뀌어 사용됩니다.
                          ㄴ 우리가 만든 변수는 '고유한 주소'를 갖습니다.

    2) 함수 호출 할 때에는 '지정된 변수의 주소를 함수의 형식매개변수' 로 전달합니다.
                                   ㄴ 함수의 입력 데이터

    3) 함수는 형식매개변수의 실제 입력 데이터의 주소를 저장합니다.
                  ㄴ 실행할 때 timeArr, todoArr, title 에 저장된 주소로 데이터 접근

4. 함수 정의에 사용한 변수 timeArr, todoArr, title 는 '호출할 때 값이 정해지는' 형식매개변수

🌟 call by reference : 참조값(주소)를 전달하는 방식 => 객체(Object)
                        전달할 데이터가 많고 크다면 주소로 전달
                        객체를 저장하는 Heap 은 주소가 필요

🌟 call by value : 값을 복사하는 방식 => 3(정수), 4.5(실수), true/false(불리언) 와 같은 1개의 기본형 값
                    전달할 데이터가 2byte, 4byte, 8byte 크기의 기본형 값이면 복사
                    기본 원시형을 저장하는 stack 은 주소가 필요 없음(내부적으로 stack의 top 을 가리키는 포인터 사용)

"오늘", "내일" => 문자열
                    ㄴ 자바는 참조형
                    ㄴ 자바스크립트는 기본형(원시 타입 - primitive type)
*/

// 오늘 시간표(버튼)
tdy.addEventListener('click', function() {
    timeline(time, todo, '오늘')    // 위에서 선언한 배열 이름 time, todo 함수로 전달
    }                               // 함수 호출 -> 함수에 저장된 실제값을 함수로 전달하여 실행함
)

// 내일 시간표(버튼)
tom.addEventListener('click', function() {
    timeline(time2, todo2, '내일')
    }
)