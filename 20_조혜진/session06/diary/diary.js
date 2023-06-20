import React from "react";

function Diary() {
    return (
      <div>
        <h1>혜진이의 일기</h1>
        <form>
          <input
            type="text"
            placeholder="일기를 입력하세요."
            style={{ width: "300px", height: "100px" }}
          />
          <button type="submit">등록</button>
        </form>
      </div>
    );
  }

export default Diary;