import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'
import './components/styles/FormUser.css'

function App() {
  const [isCloseForm, setIsCloseForm] = useState(true)
  const [updateInfo, setUpdateInfo] = useState()
  
  const baseUrl='https://user-crud-j4vz.onrender.com/api/v1/'
  //const baseUrl = 'https://users-crud.academlo.tech/'
  const [users,
    getAllUser,
    createNewUser,
    deleteUserById,
    updateUserById
  ]= useFetch(baseUrl)

  useEffect(()=>{
    getAllUser('/users')
    
  } ,[])
  console.log(users)
const handleOpenForm=()=>{
  setIsCloseForm(false)
}

  return (
    <div className='app'>
      
      <h1 className='form_title_init'>Users CRUD</h1>
      
      <div className='btn_edit'> <button className='btn_form' onClick={handleOpenForm}>New User</button></div>
     
      <div className={`form-container ${isCloseForm && 'form_close'}`}>
      <FormUsers 
      createNewUser={createNewUser}
      updateInfo={updateInfo}
      updateUserById={updateUserById}
      setUpdateInfo={setUpdateInfo}
      setIsCloseForm={setIsCloseForm}
      />

      </div>
      
      <div className='users_card'>
        {
          users?.map(user=>(
            <UsersCard
            key={user.id}
            user={user}
            deleteUserById={deleteUserById}
            setUpdateInfo={setUpdateInfo}
            setIsCloseForm={setIsCloseForm}
            />
          ))
        }
      </div>
      
      <footer className='repositorio'>Karla Yulieth Caquimbo U: <a className='link_repositorio' 
       href="https://github.com/kyulic/entregable4">Repositorio</a></footer>
      
      
      </div>
  )
}

export default App
