const time = ['09:00', '11:00', '12:30', '14:00', '16:45']
const todo = ['수업', '과제', '점심식사', '주간회의', '조료조사']


console.log(time[0])


function addColumn() {
    for (let i = 0; i < time.length; i++) {
    const newCell = time[i].insertCell(); // 각 행에 셀 추가
    newCell.innerHTML = time[i];
    }
}