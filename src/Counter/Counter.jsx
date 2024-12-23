import { useState } from "react";
import styles from "./Counter.module.css";

export const Counter = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }


    return (
        <div className={styles.root}>
            <h1>Counter App</h1>
            <div className={styles.counter}>
                <div>Count: {count}</div>
                <div>
                    <button onClick={handleIncrement}>Increment</button>
                    <button onClick={handleDecrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}