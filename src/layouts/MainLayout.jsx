import { Outlet } from "react-router-dom"
import { Nav } from "../components/Nav/Nav"

export const MainLayout = () => {
    return <> 
        <Nav />
        <div className="main-content">
            <Outlet /> 
        </div> 
    </>
}