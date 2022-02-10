import React, {useState} from "react";
// Когда значение в input совпадает с состояние. Подобные компоненты называются управляемые
function App() {
    const [count, setCount] = useState(5)
    const [value, setValue] = useState("Text in input")//добились синхронизации
    console.log(count)
    console.log(setCount)

    const increment = () => {
       setCount(count + 1)
    }
    const decrement = () => {
        setCount(count - 1)
    }
    return (
        <div className="App">
            <h1>{count}</h1>
            <h1>{value}</h1>
            <input type="text" value={value}  onChange={event => setValue(event.target.value)}/> //добились синхронизации
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
export default App;
