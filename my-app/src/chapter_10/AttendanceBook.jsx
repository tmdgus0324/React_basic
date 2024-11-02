import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props){
    
    /*
    return (
        <ul>
            {students.map((student) => {
                // map함수의 key가 빠져다 경고문구가 나타난다.
                // return <li>{student.name}</li>;

                // key값 넣어줄것!
                // return <li key={student.id}>{student.name}</li>;

                // key를 포맷팅 된 문자열로 변경
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}            
        </ul>
    );
    */

    // key값을 index로 변경해서 적용
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;
