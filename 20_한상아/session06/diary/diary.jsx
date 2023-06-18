import React from "react";
import "./diary.css";

function Diary() {
    return (
        <div>
            <h1>한 줄 일기</h1>
            <form>
                <div>
                    <select id="day">
                        <option value="year">년도</option>
                    </select>
                    <select id="day">
                        <option value="month">월</option>
                    </select>
                    <select id="day">
                        <option value="day">일</option>
                    </select>
                </div>
                <input type="text" id="title" placeholder="제목을 입력하세요." />
                <input type="text" id="input" placeholder="내용을 입력하세요." />
                <button type="submit" class="bt">등록</button>
            </form>
        </div>
    );
}

export default Diary;