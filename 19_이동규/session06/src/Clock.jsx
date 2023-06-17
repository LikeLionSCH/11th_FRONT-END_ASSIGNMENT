import React from "react";

function Clock(props){
    var currentDate = new Date();
    var currentHour = (currentDate.getHours()/12) ? currentDate.getHours()%12 : currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();

    // 오후일 경우
    if(currentHour/12){
        return(
            <div>
                <h1>안녕, 리액트!</h1>
                <h2>{`현재 시간 : 오후 ${currentHour} : ${currentMinute} : ${currentSecond}`} </h2>
            </div>
        )
    }


    // 오전일 경우
    else{
        return(
            <div>
                <h1>안녕, 리액트!</h1>
                <h2>{`현재 시간 : 오전 ${props.currentHour} : ${props.currentMinute} : ${props.currentSecond}`} </h2>
            </div>
        )
    }



}



export default Clock