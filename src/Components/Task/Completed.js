


const Completed = (props) => {
    return (
        <div>
            <h1 className="mt-5 ml-3 font-bold text-2xl ml-15">Completed Tasks </h1>
            <ul className="w-96 ml-3 mt-5 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {props.completed.map(complete => {
                    return (
                        <li className="w-full px-4 py-2 line-through border-b border-gray-200 rounded-t-lg dark:border-gray-600">{complete.task}</li>
                    )
                })}
            </ul>
        </div>
    )

}

export default Completed;