import React, { Fragment, useState } from "react";

import Forms from "./Form/Form";
import Tasks from "./Task/task";

const Main = () => {

    const [taskList, setTaskList] = useState([])


    const addTasks = (task) => {
        setTaskList([...taskList, task])
    }

    return (
        <Fragment>
            <div className="basis-1/2">
                <Forms addTask={addTasks} />
            </div>
            <div className="basis-1/2">
                <Tasks tasks={taskList} />
            </div>
        </Fragment>
    )
}

export default Main;