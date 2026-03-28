import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loop from '../components/loops'
import UsersList from '../components/api'
import Demo from '../components/demo'
import SingleUser from '../components/singleuserapi'
import TwoUsers from '../components/2users'
import Mapx from '../components/map'
import Asyncawait from '../components/async'
import Fruit from '../components/fruitsmap'
import Errorhandle from '../components/errorhandle'
import Asyncerror from '../components/asyncerror'
import TodoApp from '../components/todo'
import Movie from '../components/dog'
import Trim from '../components/trim'
import PostRequestExample from '../components/post'
import ClinicDashboard from '../components/test'
import ClinicSidebarLayout from '../components/side'
import DashboardSkeleton from '../components/Loading'
import Scroll from '../components/scrollbar'
import AgeCalculator from '../components/age'
import SidebarLayout from '../components/sidebar'
import ProfileForm from '../components/Profileform'
import PasswordForm from '../components/Passowrd'
function App() {

  return (
    <>
    <ProfileForm/>
    <PasswordForm/>
    <TwoUsers/>
    <Asyncawait/>
    <Loop/>
    <Asyncerror/>
    <UsersList/>
    <Demo/>
    <SingleUser/>
    <Mapx/>
    <Fruit/>
    <Errorhandle/>
    <TodoApp/>
    <Movie/>
    <Trim/>
    <PostRequestExample/>
    <ClinicDashboard/>
    <ClinicSidebarLayout/>
<DashboardSkeleton/>
<Scroll/>
<AgeCalculator/>
    <SidebarLayout/>
    </>
  )
}

export default App
