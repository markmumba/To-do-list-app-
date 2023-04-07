import image from '../../assets/undraw_relaxing_at_home_re_mror.svg'

const Tasks = (props) => {


    const colorPicker = (value) => {
        if (value === 'high') {
            return 'border-l-red-600'
        }
        if (value === 'medium') {
            return 'border-l-orange-600'
        }
        if (value === 'low') {
            return 'border-l-gray-600'
        }
    }

    const date = new Date();

    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear();
    let currentDate = `${year}-${month}-${day}`;


    return (

        <div className="mt-4 md:mt-0">
            <p className="text-sm md:hidden">Tip :double tap to delete</p>
            {props.tasks.length === 0 ?
                <div className='ml-3 max-w-[390px] md:max-w-3xl'>
                    <p className="text-xl mt-10"> It seems that you have no upcoming tasks you can add your tasks using
                        the form </p>
                    <img className='' src={image} alt="no upcoming tasks"/>
                </div>
                :
                props.tasks.map((task) => {
                    return (
                        <div key={task.id}
                             onDoubleClick={() => props.removeTask(task.id)}
                             className={`w-11/12 md:max-w-2xl p-3 md:p-6 ml-3   border mb-2 ${colorPicker(task.priority)} border-l-8 rounded-lg shadow `}>
                            <div className="flex">
                                <input id="default-checkbox" type="checkbox" value=""
                                       onClick={() => props.completeTask(task.id)}
                                       className="w-4 h-4 md:hidden mr-3 mt-1 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2"/>
                                <h5 className="mb-2 text-base md:text-lg font-medium tracking-tight  text-gray-900 ">{task.task}</h5>
                            </div>
                            <p className="mb-2  text-sm  md:text-lg font-medium text-gray-700">{task.description}</p>
                            <p className="mb-2 font-normal hidden md:block text-gray-700">
                                {task.date === currentDate ? 'Today' : task.date}
                            </p>
                            <div className="md:flex">
                                <button type="button" onClick={() => props.removeTask(task.id)}
                                        className="text-white border hidden md:block bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Remove
                                </button>
                                <button type="button" onClick={() => props.completeTask(task.id)}
                                        className="text-white border hidden md:block bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Done
                                </button>
                            </div>
                        </div>
                    );
                })
            }


        </div>
    )
}

export default Tasks;



