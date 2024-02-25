import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
function Todo() {
    return (
        <>
            <div className='bg-[#6989aa] w-full  h-screen m-0 p-0 '>

                <div className='flex justify-center items-center h-screen'>

                     <div className="lg:w-[20%] md:w-[30%] h-[70%] bg-white rounded-xl "> {/*   overflow-y-scroll */}

                        <div className=''>
                            <div>
                                <h3 className='bg-purple-500 flex justify-center items-center text-2xl md:text-3xl  font-bold text-white mt-7 p-2'>ToDo List</h3>
                            </div>
                            <div className='flex justify-center items-center mt-8  lg:text-xl  md:text-base '>
                                <input
                                    className='text-center outline-none md:w-full '
                                    type="text"
                                    placeholder='Add a items'
                                />

                                <button>

                                    <span>
                                                        <IoIosAddCircle className='text-purple-500 text-3xl md:text-4xl  mr-4'/>

                                    </span>

                                </button>

                            </div>
                            <div className=' lg:w-[60%] md:w-[55%] lg:h-[3px] md:h-[2px] bg-purple-500 mt-2 flex  ml-11 justify-center items-center'>

                            </div>

<div className='flex justify-start mt-4 ml-11 text-purple-500 text-base md:text-lg font-semibold  md:font-medium'>
    
<IoMdCloseCircle className=' mr-2 text-2xl mt-[3px]' />    
    Buy Apple</div>
    

                </div>

            </div>
            </div>
            </div>

        </>
    )

}

export default Todo