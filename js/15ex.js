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

// 오늘 시간표(버튼)
tdy.addEventListener('click', function() {
    timeTr.innerHTML = '<th>TIME</th>'
    todoTr.innerHTML = '<th>TODO</th>'
    title.textContent = '오늘 시간표'
    for (let t of time) {
        const td = document.createElement('td')
        td.textContent = t
        timeTr.appendChild(td)
        }
        
    for (let t of todo) {
        const td = document.createElement('td')
        td.textContent = t
        todoTr.appendChild(td)
        }
    }

)

// 내일 시간표(버튼)
tom.addEventListener('click', function() {
    timeTr.innerHTML = '<th>TIME</th>'
    todoTr.innerHTML = '<th>TODO</th>'
    title.textContent = '내일 시간표'
    for (let t of time2) {
        const td = document.createElement('td')
        td.textContent = t
        timeTr.appendChild(td)
        }
        
    for (let t of todo2) {
        const td = document.createElement('td')
        td.textContent = t
        todoTr.appendChild(td)
        }
    }

)