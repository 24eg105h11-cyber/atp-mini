import Header from "./Header"
import { Outlet } from "react-router"
function RootLayout() {
  return (
    <div className="text-1xl">
      <Header/>
    <div className="bg-gray-400 min-h-screen p-0">
      <Outlet/>
    </div>
    </div>
  )
}

export default RootLayout