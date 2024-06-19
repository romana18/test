import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import  UserContextProvider  from './context/UserContext'

function App() {


  return (
    <UserContextProvider>
      <h1>Please Login</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
