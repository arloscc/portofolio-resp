'use client'
import React, { useState, useEffect } from 'react';

export default function Page() {
    const [newTask, setNewTask] = useState('');
    const [tasks, setTasks] = useState(() => {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        return JSON.parse(savedTasks);
      } else {
        return [];
      }
    });
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);
  
    const addTask = () => {
      if (newTask !== '') {
        setTasks([...tasks, newTask]);
        setNewTask('');
      }
    };
  
    const completeTask = (index:number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
        alert(  tasks  + ' Completed');
    };
  
    const removeTask = (index:number) => {
      const newTasks = [...tasks];
      newTasks.splice(index, 1);
      setTasks(newTasks);
    };

  return (
    <>
    <div className={darkMode ? 'dark-mode' : ''}>
      <button title='buttons' onClick={() => setDarkMode(!darkMode)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="10"/><path d="M12 2a7 7 0 1 0 10 10"/></svg>
      </button>
      {/* Rest of your JSX goes here */}
      <div className="text-2xl my-12 gap-8 flex justify-center">
        <h1 className="flex justify-center font-bold">To Do List</h1>
      </div>
      <form 
        className=" flex items-center justify-center"
        onSubmit={(e) => {
            e.preventDefault();
            addTask();
        }}
        >
        <input
          className=" w-max border-2 border-gray-300 p-2 rounded-lg"
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          />
        <button title="button" className="p-2">
        <svg className='' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
        </button>
      </form>
      <div id="Task" className='my-20 flex justify-center gap-4 flex-wrap rounded-lg'>
        {tasks.map((task:string, index:number) => (
            <div key={index}>
            <div className='flex-row gap-4 rounded-lg'>
              <div className='flex flex-col justify-center gap-4 border-2 w-min rounded-lg'>
                <div className='flex-col flex align-center gap-4 p-4 flex-wrap'>
                  {task}
                </div>
                <div className='gap-12'>
                  <button className='p-4 gap-4 font-bold scale-90 hover:scale-100 duration-300 bg-blue-400 w-52  rounded-xl ' onClick={() => completeTask(index)}>Complete</button>
                  <button className='p-4 gap-4 font-bold scale-90  hover:scale-100 duration-300 bg-red-700 w-52 rounded-xl' onClick={() => removeTask(index)}>Remove</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
              </div>
    </>
  );
}