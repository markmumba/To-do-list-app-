import React, {useState} from "react";



const Navbar = (props) => {


    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav((prevState) => !prevState) }


    return (
        <div className="w-full h-[70px] z-10 fixed bg-slate-200 backdrop-blur-sm  drop-shadow-lg">

            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className='text-center font-bold text-5xl hover:line-through'>To do list </h1>
                    <ul className="hidden md:flex pl-5 ">
                        <li onClick={()=>props.handleView()}>Completed tasks</li>
                        <li onClick={()=>props.handleView()}>Create task</li>
                    </ul>
                </div>

                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }

                </div>
            </div>
            {nav && <ul className="absolute bg-slate-200 w-full px-8">
                <li onClick={()=>props.handleView()} className="border-b-2 border-slate-300 w-full ">Create task</li>
                <li onClick={()=>props.handleView()} className="border-b-2 border-slate-300 w-full ">Completed tasks</li>
            </ul>
            }
        </div>
    )
}
export default Navbar