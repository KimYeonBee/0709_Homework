// UseEffectCounter.jsx
import { useState, useEffect } from "react";

const UseEffectCounter = () => {
    // count State 생성
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log(`렌더링 완료! count의 값은 ${count}입니다.`);
    }); // 여기서는 deps가 없이 함수만 있기 때문에 mount, update 시마다 실행됨!

    return (
        <>
            <h1>Counter Component with useEffect</h1>
            <p>클릭을 {count}번 했어요!</p>
            <button onClick={() => setCount(count + 1)}>증가 버튼!</button>
        </>
    );
};

export default UseEffectCounter;
