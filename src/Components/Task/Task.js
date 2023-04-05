
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

    const dynamicClassName = (value) => {
        const color = colorPicker(value);
        return `max-w-[390px] md:max-w-3xl p-6 ml-3  bg-gradient-to-br from-gray-200 border mb-2 ${color} border-l-8 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`;
    };


    return (

        <div className="mt-4 md:mt-0">
            {props.tasks.length === 0 ?
                <div className='ml-3 max-w-[390px] md:max-w-3xl'>
                    <p className="text-xl mt-10"> It seems that you have no upcoming tasks you can add your tasks using the form </p>
                    <img className='' src={image} alt="no upcoming tasks" />
                </div>
                :
                props.tasks.map((task) => {
                    return (
                        <div key={task.id} className={dynamicClassName(task.priority)}>
                            <h5 className="mb-2 text-lg font-medium tracking-tight  text-gray-900  dark:text-white">{task.task}</h5>
                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">{task.description}</p>
                            <p className="mb-2 font-normal text-gray-700 dark:text-gray-400">
                                {task.date === currentDate ? 'Today' : task.date}
                            </p>
                            <button type="button" onClick={() => props.removeTask(task.id)} className="text-white border bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Remove</button>
                            <button type="button" onClick={() => props.completeTask(task.id)} className="text-white border bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2">Done</button>
                        </div>
                    );
                })
            }




        </div>
    )
}

export default Tasks;



