const time = ["09:00", "11:00", "12:30", "14:00", "16:45"];
const todo = ["수업", "과제", "점심식사", "주간회의", "조료조사"];

/*
    위의 2개의 배열을 객체 배열 1개로 변경
    객체 예시 : {time : '09:00', todo : '수업'}
*/

const schedule = [];
for (let i = 0; i < time.length; i++) {    // for(let i in time) -> 0,1,2 배열 인덱스 i 저장 (비추)
  let newItem = { time: time[i], todo: todo[i] }
  // 속성이름: 값
  schedule.push(newItem)
}
console.log(schedule)

/*
const schedule = [
  { time: '09:00', todo: '수업' },
  { time: '11:00', todo: '과제' },
  { time: '12:30', todo: '점심식사' },
  { time: '14:00', todo: '주간회의' },
  { time: '16:45', todo: '자료조사' }
]
*/

// schedule.forEach() 로 연습하기 
function printRow(item) {
  const tr = document.createElement("tr");
  for (let key in item) {
    const td = document.createElement("td");
    td.textContent = item[key];
    console.log('a',item[key])
    tr.appendChild(td);
  }
  console.log(tr);
  return tr;
}

// DOMContentLoaded 이벤트 : DOM 자료구조를 만들어서 메모리에 저장한 후에 발생.
//              ㄴ 화면의 구성 요소들이 만들어진 후에 실행.

document.addEventListener("DOMContentLoaded", function () {
  const root = document.getElementById("root");
  const table = document.createElement("table");
  table.innerHTML = `<tr>
                        <th>시간</th>
                        <th>할일</th>
                     </tr>`;

  // table 을 root 요소에 추가하기
  root.appendChild(table);

  // 배열에 저장된 객체 요소 각각에 대한 반복하는 메소드
  schedule.forEach((item) => {
    // item 객체로 tr요소 만드는 함수 호출
    const trResult = printRow(item);
    table.appendChild(trResult);
  });

  // 'DOMContentLoaded' 이벤트 사용할 때에는 모든 이벤트 리스너를 
  // 'DOMContentLoaded' 이벤트 안에 작성합니다.
  const newBtn = document.getElementById('newBtn')
  newBtn.addEventListener('click', () => {
    // 입력값 가져와서 newItem 객체 만들기
    const newTime = document.getElementById('newTime').value
    const newTodo = document.getElementById('newTodo').value
    const newItem = { time: newTime, todo: newTodo }  //새로운 일정 객체 생성
    // printRow 실행하여 tr 전달 받기 - 새로운 일정 tr (행) 만들기
    const newTr = printRow(newItem)

    schedule.push(newItem)    // 스케줄 배열에 새로운 일정 추가

    // 스케줄 배열을 time 속성 순서로 정렬(난이도:최상)
    schedule.sort((a, b) => a.time.localeCompare(b.time))
    //  ㄴ a,b 는 2개의 객체. 2개의 객체 time 속성비교.
    //  ㄴ a.todo.localeCompare(b.todo)  는 todo 속성값으로 정렬

    // newTr 을 table에 추가  -> 정렬된 schedule 배열로 table 다시만들기(변경 필요)
    table.appendChild(newTr)  // ?? 🔥 mission

    console.log('새 스케줄 추가 후 : ', schedule)
  }) // newBtn.addEventListener 의 끝

}) //document.addEventListener 의 끝
