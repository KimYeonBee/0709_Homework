import { useState, useEffect } from "react";

const Timer = ({ count, duration = 10 }) => {
    const remCount = duration - count;
    return (
        <div>
            <h1>Time: <span>{count}</span> seconds</h1>
            <h3>남은 시간: <span>{remCount}</span>초</h3>
        </div>
    );
};

export default Timer;