


const Tasks = (props) => {

    const colorPicker = (value) => {
        if (value === 'high') {
            return 'border-red-600'
        }
        if (value === 'medium') {
            return 'border-orange-600'
        }
        if (value === 'low') {
            return 'border-gray-600'
        }
    }

    const dynamicClassName = (value) => {
        const color = colorPicker(value);
        return `max-w-sm p-6 bg-white border mb-2 ${color} border-l-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
    };
  

    return (
        <div className="mt-4">
            {props.tasks.map((task) => {
                return (
                    <div key={task.id} className={dynamicClassName(task.priority)}>
                        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900  dark:text-white">{task.task}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{task.date}</p>
                        <button type="button" className="text-white bg-[#7258AF] hover:bg-[#3b276b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove</button>
                        <button type="button" className="text-white bg-[#7258AF] hover:bg-[#3b276b] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 mb-3 mr-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Done</button>
                    </div>

                )
            })}
        </div>
    )
}

export default Tasks;



