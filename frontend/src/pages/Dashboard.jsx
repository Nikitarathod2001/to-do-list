import React from 'react'
import DashboardHeader from '../components/DashboardHeader'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const Dashboard = () => {
  return (
    <div>
      <DashboardHeader/>
      <hr className="border-gray-300" />
      <TodoInput/>
      <TodoList/>
    </div>
  )
}

export default Dashboard
