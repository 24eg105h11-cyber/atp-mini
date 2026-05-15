import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="flex justify-end gap-4 p-5 bg-amber-200 text-2xl">
        <NavLink to="">Home</NavLink>
        <NavLink to="create-emp">CreateEmployee</NavLink>
        <NavLink to="list">ListOfEmployee</NavLink>
    </nav>
    
  )
}

export default Header