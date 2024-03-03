import React, { useEffect, useState } from 'react'
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
function Todo() {


const getLocalItems =()=>{

const localList  = localStorage.getItem('list')

if (localList){
    return JSON.parse(localStorage.getItem('list'))
}

else {

return [];

}

}


const [list,setList]=useState("")
const [items,setItems]=useState(getLocalItems())

const handleItems=(e)=>{
    

    const AddedItems=e.target.value
    
    setList(AddedItems)

}

const handleClick =()=>{

if(list==""){
    alert("Please write some task!")
}else {


    setItems((todoItems)=>{
return [...todoItems,list]

    })



    
    setList("")
}

}

const removeItems =(index)=>{

const deletedItems = items.filter((arrayElement,id) => id !== index)
setItems(deletedItems)


}


const clearAll =()=>{

setItems([])

}


const editItems =()=>{

}

// for set items in local storage

localStorage.setItem('list',JSON.stringify(items))




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
                                    value={list}
                                    placeholder='Add a items'
                                    onChange={handleItems}
                                />

                                <button>

                                    <span>
                                                        <IoIosAddCircle className='text-purple-500 text-3xl md:text-4xl  mr-4' onClick={handleClick}/>

                                    </span>

                                </button>

                            </div>
                            <div className=' lg:w-[60%] md:w-[55%] lg:h-[3px] md:h-[2px] bg-purple-500 mt-2 flex  ml-11 justify-center items-center'>

                            </div>
{
    items.map((mytodoItems,index)=>{
        
return(<>

<div key={index} className='flex justify-start mt-4 ml-11 text-purple-500 text-base md:text-lg font-semibold  md:font-medium'>
<IoMdCloseCircle onClick={()=>removeItems(index)} className=' cursor-pointer mr-2 text-2xl mt-[3px]' />    

<FaEdit onClick={editItems}  className='cursor-pointer text-xl flex justify-center items-center mt-[3px] mr-2 ' />
    
    {mytodoItems}
    
    
    </div>

</>)
    })

 }

{ items.length >=1 && 
  <div className='flex justify-center items-center p-3 my-5 text-red-500 hover:text-red-700 hover:text-xl cursor-pointer font-bold text-lg' onClick={clearAll}>
    Delete All
  </div>
}
                </div>

            </div>
            </div>
            </div>

        </>
    )

}

export default Todo