import { Outlet } from "react-router-dom"

export const AdminLayout = () => {
    return <section className="admin-layour"> 
        <Outlet /> 
    </section>
}