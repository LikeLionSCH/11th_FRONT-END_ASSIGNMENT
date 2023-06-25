import React from "react";

function Clock() {
    const currentTime = new Date();

    return (
        <div>
            <h1>안녕, 리액트!</h1>
            <h2>
                현재 시간: {currentTime.toLocaleTimeString()}
            </h2>
        </div>
    );
}

export default Clock;