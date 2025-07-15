
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter Component</h1>
            <p>클릭을 {count}번 했어요!</p>
            {/* count는 현재F상태 값인 count를 동적으로 표시 */}
            <button onClick={() => setCount(count + 1)}>증가 버튼!</button>
            {/* 버튼이 클릭될 때 setCount 함수를 호출하여 count 값을 1 증가 */}
        </div>
    );
}

export default Counter;
