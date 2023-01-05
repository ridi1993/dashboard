import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import './App.css'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

const App = () => {

  const activeMenu = false;
  return (
    <BrowserRouter>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: 100 }}>

          <TooltipComponent content="Settings" position="Top">
            <button type='button' className='text-4xl p-3 text-white' style={{ background: 'blue', borderRadius: '50%' }}>
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
            Sidebar
          </div>
        ) :
          (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              Sidebar
            </div>
          )}
          <div className={
            `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ? "md-72" : "flex-2"}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg">
              Navbar
            </div>
          </div>
    <div>
      <Routes>
        {/*Dashboard*/}
        <Route path='/' element="E-commerce" />
        <Route path='/ecommerce' element="E-commerce" />

        {/*Pages*/}
        <Route path='/orderse' element="E-commerce" />
        <Route path='/employes' element="Employes" />
        <Route path='/ecommerce' element="Customer" />

        {/*Apps*/}
        <Route path='/kanban' element="Kanban" />
        <Route path='/editor' element="Editor" />
        <Route path='/calendar' element="Calendar" />
        <Route path='/color-picker' element="Color Picker" />

      </Routes>
    </div>

      </div>
    </BrowserRouter>
  )
}

export default App