import React, { useState } from "react";
import "./Diary.css";

function Diary(props) {
        const [diary, setDiary] = useState(""); // 일기 내용을 저장하는 상태 변수
        const [showDiary, setShowDiary] = useState(false); // 일기 표시 여부를 저장하는 상태 변수

        const handleInputChange = (event) => {
            setDiary(event.target.value); // 텍스트 인풋의 값이 변경될 때마다 일기 내용 업데이트
        };

        const handleSubmit = (event) => {
            event.preventDefault(); // 폼의 기본 동작인 페이지 새로고침 방지
            setShowDiary(true); // 전송하기 버튼 클릭 시 일기 표시 활성화
        };

        return (
            <div className="diary-app">
                {/* 일기를 입력 전 */}
                {!showDiary && (
                    <form className="input-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            value={diary}
                            className="input-text"
                            onChange={handleInputChange}
                            placeholder="오늘의 한 줄 일기를 입력해주세요"
                        /><br/>
                        <button type="submit" className="submit-button">전송하기</button>
                    </form>
                )}
                {/* 일기 입력 후 */}
                {showDiary && (
                    <div className="fade-in-out">
                        <h1 className="top-text">오늘의 일기</h1>
                        <div className="diary-text">
                            {diary}
                        </div>
                    </div>
                )}
            </div>
        );
}

export default Diary