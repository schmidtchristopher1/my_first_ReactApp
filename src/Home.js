import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
    // const tasks = [
    //     "Meet John",
    //     "Buy groceries",
    //     "Clean the house",
    //     "Cook dinner",
    //     "Walk the dog",
    // ];

    const [task, setTask] = useState([]);
    const [inputTask, setInputTask] = useState('');

    function addTask() {
        if (!inputTask) return;
        setTask([...task, inputTask]);
        setInputTask('');
    }

    function renderList() {
        return (
            <div>
                <ul>
                    {task.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
                <input type="text" value={inputTask} onChange={(e) => setInputTask(e.target.value)}
                       placeholder="Set new task"/>
                <button onClick={addTask}>
                    Add task
                </button>
            </div>
        )
    }

    return (
        <div>
            <Header name='Home'/>
            <h1 style={styles.h1}>TO-DO List</h1>
            <ul style={styles.ul}>{renderList()}</ul>
            <Footer/>
        </div>
    );
}

const styles = {
    ul: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        listStyle: "none",
        padding: "0",
    },
    h1: {
        textAlign: "center",
    }
}

export default Home;
