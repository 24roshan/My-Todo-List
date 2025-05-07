"use client"
import React, { useState } from 'react'

const page = () => {
  const [title,setitle]=useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
  e.preventDefault()
  setmainTask([...mainTask,{title,desc}])
  setitle("")
  setdesc("")
console.log(mainTask);
  };
  const deleHnadler=(i)=>{
    let copytask=[...mainTask]
    copytask.splice(i,1);
    setmainTask(copytask)
  }
    let renderTask=<h2>No Such Task available</h2>
  if(mainTask.length>0){

    renderTask=mainTask.map((t,i)=>{
      return (
  <li key={i} className="flex items-center justify-between">
  <div className="flex item-center justify-between mb-5 w-2/3">
          <h5 className="text-2xl font-semibold">{t.title}</h5>
          <h6 className="text-xl font-semibold">{t.desc}</h6>
        </div>
        <button onClick={()=>{
          deleHnadler(i)
        }} className="bg-red-500 text-white px-3 py-2 rounded font-bold ">Delete Task</button>
  </li>
 
    );
  }
  );
}

  return (
    <div>
     <>
     <h1 className='bg-black text-white text-center font-bold text-4xl p-5'>ROSHAN'S TODO LIST</h1>
     <form onSubmit={submitHandler}>

      <input type="text" className='text-2xl border-zinc-900 border-2 m-5 px-4 py- 2' placeholder="Enter title here"value={title} onChange={(e)=>{
        setitle(e.target.value)
      }}></input>
      <input type="text" className='text-2xl border-zinc-900 border-2 m-5 px-4 py- 2' placeholder="Enter description here"
      value={desc}onChange={(e)=>
        setdesc(e.target.value)
      }></input>
      <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '>Add Task</button>
     </form>
     <hr />
     <div className='p-8 bg-amber-200'></div>
     <ul>{renderTask}</ul>
     </> 
    </div>
  )
}

export default page