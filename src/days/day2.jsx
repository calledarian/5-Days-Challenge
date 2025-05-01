import { useState } from "react";

export default function ToDo() {
    const [inputText, setInputText] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (inputText.trim() !== "") {
            setTasks([...tasks, { text: inputText }]);
            setInputText("");
        }
    };

    const clearAllTasks = () => {
        setTasks([]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div style={{ padding: "20px", border: "black solid 8px", minHeight: "400px" }}>
            <div style={{ fontSize: "34px" }}>Todo List</div>
            <input
                style={{
                    padding: '10px',
                    borderRadius: '8px',
                    border: '2px solid grey',
                    fontSize: '16px',
                }}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter a task"
            />
            <button
                style={{ backgroundColor: "green", color: "white", padding: "10px 20px", margin: "5px" }}
                onClick={addTask}
            >
                Add
            </button>
            <button
                style={{ backgroundColor: "orange", color: "white", padding: "10px 20px", margin: "5px" }}
                onClick={clearAllTasks}
            >
                Reset
            </button>

            <ul style={{ padding: 0, margin: 0 }}>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{
                            borderRadius: "10px",
                            padding: "10px",
                            backgroundColor: "black",
                            listStyle: "none",
                            color: "white",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "10px",
                            fontSize: "18px",
                        }}
                    >
                        {task.text}
                        <button
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                padding: "5px 10px",
                                margin: "5px",
                            }}
                            onClick={() => removeTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
