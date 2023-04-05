
import Form from "./Form";
import React, {Fragment, useState} from "react";
const ChangeUI = (props) => {

    const [changeView,setChangeView] = useState(false);


    const handleChange = () => {
        setChangeView((prevState) => !prevState)
    }

    return (
        <Fragment>
            <button type="button"  onClick={handleChange} className={`${!changeView ? 'block': 'hidden' } text-white md:hidden border bg-indigo-500 border-indigo-500 hover:bg-transparent hover:text-indigo-500 hover:border-none rounded-md px-6 py-2 m-2`}>Add task</button>
            <div className={`${ changeView ? 'block': 'hidden' } md:block`}>
                <Form addTask ={props.addTask} changeView={changeView} handleChange={handleChange}/>
            </div>
        </Fragment>

    )
}
export default ChangeUI;