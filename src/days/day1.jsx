import { useState } from "react"

export default function Counter() {

    const [likeCounter, setLikeCounter] = useState(0);

    const increment = () => {
        setLikeCounter(likeCounter + 1);
    };

    const decrement = () => {
        setLikeCounter(likeCounter - 1);
    };

    const resetCounter = () => setLikeCounter(0);
    ;

    return (
        <div style={{ padding: '30px 30px', borderRadius: '40px', border: ' 8px solid black' }}>
            <h1>Like Counter : {likeCounter}</h1>
            <div>
                <button style={{ backgroundColor: 'red', color: 'white', padding: '10px 20px', margin: '10px', cursor: 'pointer' }} onClick={increment}>Like</button>
                <button style={{ backgroundColor: 'blue', color: 'white', padding: '10px 20px', margin: '10px', cursor: 'pointer' }} onClick={decrement}>Dislike</button>
                <button style={{ backgroundColor: 'gray', color: 'white', padding: '10px 20px', margin: '10px', cursor: 'pointer' }} onClick={resetCounter}>Reset</button>

            </div>
        </div>
    )
}