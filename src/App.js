import { useEffect, useState } from 'react';
import './App.css';
import Display from './Emp/Display';
import EmpForm from './Emp/EmpForm';
import Todo from './Todo/Todo';
//import { Provider } from 'react-redux';
//import store from './store';


function App() {
  const [theme, setTheme] = useState('Light');



  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    }
    else {
      document.documentElement.classList.remove("dark");
    }

  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <>
      <div>
        {/* <Todo /> */}
      </div>
      <div className="bg-white dark:bg-slate-900 dark:text-white h-screen">
        <button className='bg-zinc-400 rounded-md text-sm p-1 mt-2 float-right' onClick={handleTheme}>{theme == 'dark' ? "Light Mode" : "Dark Mode"}</button>
        <div className="flex w-full lg:flex-row flex-col-reverse lg:">
          {/* <div className='flex justify-between items-center'> */}


          {/* <div className="w-full md:w-2/5 flex flex-col-reverse"> */}
          <div className='flex-initial w-2/4 '>
            <Display />

          </div>
          <div className='flex-initial w-2/4 '>
            {/* <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20"> */}

            <EmpForm />
          </div>
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>


    </>
  );
}

export default App;
