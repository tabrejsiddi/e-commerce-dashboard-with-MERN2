
import { Link,useNavigate } from 'react-router-dom'

const Nav = () => {
  // here auth store user data in local storage
  const auth= localStorage.getItem('user')
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate('/signup')
  }
  return (
    
        <div className = "app">
          <div className="  logo ">
         <img alt="logo" 
          className="logo" 
          src="https://cdn.pixabay.com/photo/2022/09/18/07/41/logo-7462411_640.png"/>
         </div>
          {  auth ? <ul className = "nav-ul ">

              <li> <Link to ="/home">Product</Link></li>
              <li> <Link to ="/add">Add Product</Link></li>
              <li> <Link to ="/update">Update Product</Link></li>
              <li> <Link to ="/profile">Profile</Link></li>
              <li><Link onClick={logout} to ="/SignUp">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
            :
            <ul className="nav-ul nav-right ">
                <li>  <Link to ="/signup">SignUp</Link></li>
                <li>  <Link to ="/login">Login</Link></li>
            </ul>
          }
        </div>
            

  )
}

export default Nav