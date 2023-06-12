

const UsersCard = ({user,deleteUserById,setUpdateInfo,setIsCloseForm}) => {
    const handleDelete=()=>{
        deleteUserById('/users',user.id)
    }
  const handleEdit=()=>{
    setUpdateInfo(user)
    setIsCloseForm(false)
  }    
    
  
    return (
    <article className="users_article">

        <h2 className="h2_card">{`${user.first_name} ${user.last_name}`}</h2>
        <div className="line"></div>
        <ul>
            <li className="list_card">
                <span className="span_list">Email: </span> <br />
                <span className="span_atrib">{user.email}</span>
            </li>
            <li className="list_card">
            <span className="span_list">Birthday: </span> <br />
                <span className="span_atrib">🎂 {user.birthday}🎉</span>
            </li>
        </ul>
        <div className="line"></div>
        <div className="button">
        <button className="delete" onClick={handleDelete}><i className='bx bx-trash'></i></button>
        <button className="edit" onClick={handleEdit}><i className='bx bx-edit-alt'></i></button>
        </div>
        
    </article>
  )
}

export default UsersCard