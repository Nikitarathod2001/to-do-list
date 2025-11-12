import React, { useContext, useEffect } from 'react'
import DashboardHeader from '../components/DashboardHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const Dashboard = () => {

  

  return (
    <div>
      <DashboardHeader/>
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default Dashboard
