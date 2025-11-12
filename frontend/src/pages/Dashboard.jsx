import React, { useContext, useEffect } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const Dashboard = () => {

  

  return (
    <div className='h-screen bg-zinc-200'>
      <DashboardHeader/>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default Dashboard
