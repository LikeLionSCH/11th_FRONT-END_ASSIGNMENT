import React from "react";

function Clock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hours >= 12 ? "오후" : "오전";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>
                현재 시간: {ampm} {hours}:{minutes}:{seconds}
            </h2>
        </div>
    )
}

export default Clock;