import React, {userState, useState} from "react";

function SignUp(props) {
    const [value, setValue] = useState('요청사항을 입력하세요.');
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);    // input element의 값

        // 참고: 입력시 값을 함수(toUpperCase) 사용하여 대문자로 변경
        //setName(event.target.value.toUpperCase());
    };

    const handleChangeGender = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}\n입력한 요청사항: ${value}`);
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                요청사항:
                <textarea value={value} onChange={handleChange}></textarea>
            </label>

            <br />
            <label>
                {/* handleChange함수 사용 + 각각의 set함수 사용 */} 
                이름:
                <input type="text" value={name} onChange={handleChangeName} />  
            </label>

            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGender}>
                    <option value="남자">남자</option>
                    <option value="여자">여자</option>
                </select>
            </label>

            <button type="submit">제출</button>

            <br />
            <input type="file" /> {/* file은 react에서는 Uncontrolled Component 이다. */}
        </form>
    );
}

export default SignUp;