import { useState, useEffect } from "react";
import Timer from "./Timer";

const TimerButton = () => {
    const [ShowTimer, setShowTimer] = useState(false);
    const [count, setCount] = useState(0);
    const duration = 10;

    const handlestart = () =>{
        setCount(0);
        setShowTimer(true);
    };

    useEffect(() => {
        let id;
        if (ShowTimer) {
            id = setInterval(() => {
                setCount((count) => count + 1);
            }, 1000);
        }
        if (count >= duration) {
            clearInterval(id);
            setShowTimer(false);
        }
        return () => clearInterval(id);
    }, [ShowTimer, count, duration]);

    return (
        <div className="showTimer">
            {! ShowTimer ? (
                <button onClick={handlestart}>타이머 시작</button>
            ) :
            (<Timer count={count} duration={duration} />
            )}
        </div>
    );
    };

export default TimerButton;