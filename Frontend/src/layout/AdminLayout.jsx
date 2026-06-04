
import { Outlet } from 'react-router-dom'
import Sidebar   from "../components/Admin/Sidebar"
import Adminheader from "../components/Admin/Adminheader"


const AdminLayout = () => {
    return (
        <div className="flex min-h-screen bg-gray-50/50">
      {/* Fixed Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 bg-white border-r border-gray-100 z-50">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Sticky Header */}
        <Adminheader />

        {/* The Outlet renders the child routes (Dashboard, Inventory, etc.) */}
        <main className="">
          <div className="max-w-[1600px] mx-auto">
            <Outlet /> 
          </div>
        </main>
      </div>
    </div>
    )
}

export default AdminLayout