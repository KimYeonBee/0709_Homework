import { useState } from "react";

function HelloLion() {
    const [text, setText] = useState(true);
    return (
        <div>
            {text ? <h1>멋사 안녕</h1> : <h1>누구세요</h1>}
            <button onClick={() =>
                setText(!text)}>상태 변경 </button>
        </div>
    );
}

export default HelloLion;