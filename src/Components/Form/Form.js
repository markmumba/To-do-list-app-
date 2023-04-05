import React, { Fragment } from "react";
import { useState } from "react";


const Forms = (props) => {

    const today = new Date();
    const dateString = today.toISOString().split('T')[0];

    const [task, setTask] = useState({
        task: "",
        date: "",
        description: "",
        priority: {
            high: false,
            medium: false,
            low: false,
        },
    });

    const handleChange = (e) => {
        const { id, value, checked } = e.target;
        if (id === 'high' || id === 'medium' || id === 'low') {
            const checkedBoxes = Object.keys(task.priority).filter((key) => key !== id && task.priority[key])
            if (checkedBoxes.length === 0) {
                setTask({
                    ...task,
                    priority: {
                        ...task.priority,
                        [id]: checked,
                    }
                })
            } else {
                setTask({
                    ...task,
                    priority: {
                        ...task.priority,
                        [id]: false,
                    }
                })
            }
        } else {
            setTask({
                ...task,
                [id]: value,
            })
        }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.task.trim().length !== 0 && task.date.trim().length !== 0) {
            const currentPriority = Object.keys(task.priority).find((key) => task.priority[key] === true)
            props.addTask({
                ...task,
                priority: currentPriority,
                id: Math.floor(Math.random() * (100 - 1)) + 1
            });
            setTask({
                task: "",
                date: "",
                description: "",
                priority: {
                    high: false,
                    medium: false,
                    low: false,
                },
            });
        }
    }


    return (
        <Fragment>

            <div className="max-w-[390px] md:max-w-xl  p-7  ml-3
              bg-white/30 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-br from-gray-200 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-6 mt-6 ">
                        <label htmlFor="task" className="block mb-2 text-sm font-medium dark:text-white">Enter task </label>
                        <input type="text" id="task"
                            onChange={handleChange}
                            value={task.task}
                            className="bg-gray-50 border
                         border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Task for the day" />
                    </div>
                    <div className="mb-6 mt-6 ">
                        <label htmlFor="date" className="block text-sm font-medium  dark:text-white">Date </label>
                        <input type="date" id="date" min={dateString}
                            onChange={handleChange}
                            value={task.date}
                            className="bg-gray-50 border
                         border-gray-300 text-gray-900 text-sm rounded-lg
                          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5
                           dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="pick a date " />
                    </div>

                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                    <textarea id="description" onChange={handleChange} value={task.description} rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

                    <h5 className="text-xl mb-3">Choose level of priority</h5>
                    <div className="flex items-center mb-2">
                        <input id="high" type="checkbox" checked={task.priority.high} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="high" className="ml-2 text-sm font-medium dark:text-gray-300">High</label>
                    </div>
                    <div className="flex items-center mb-2" >
                        <input id="medium" type="checkbox" checked={task.priority.medium} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="medium" className="ml-2 text-sm font-medium  dark:text-gray-300">Medium</label>
                    </div>
                    <div className="flex items-center mb-2">
                        <input id="low" type="checkbox" checked={task.priority.low} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="low" className="ml-2 text-sm font-medium  dark:text-gray-300">Low</label>
                    </div>
                    <button type="button"  className="text-white border bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Cancel</button>
                    <button type="submit" className="text-white border bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Add</button>
                </form>
            </div>


        </Fragment>

    )
}


export default Forms;