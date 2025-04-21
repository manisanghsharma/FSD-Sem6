import Register from "./components/Register"
import View from "./components/View"
import Update from "./components/Update"
import Delete from "./components/Delete"
import { useState } from "react"

const App = () => {
  const [activeTab, setActiveTab] = useState("register")

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="bg-white md:w-64 w-full md:h-screen shadow-lg">
        <div className="p-5 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-indigo-600">User Management</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab("register")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === "register" ? "bg-indigo-100 text-indigo-700 font-medium" : "hover:bg-gray-100"}`}
              >
                Register User
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("view")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === "view" ? "bg-indigo-100 text-indigo-700 font-medium" : "hover:bg-gray-100"}`}
              >
                View Users
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("update")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === "update" ? "bg-indigo-100 text-indigo-700 font-medium" : "hover:bg-gray-100"}`}
              >
                Update User
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab("delete")}
                className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeTab === "delete" ? "bg-indigo-100 text-indigo-700 font-medium" : "hover:bg-gray-100"}`}
              >
                Delete User
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          {activeTab === "register" && <Register />}
          {activeTab === "view" && <View />}
          {activeTab === "update" && <Update />}
          {activeTab === "delete" && <Delete />}
        </div>
      </div>
    </div>
  )
}

export default App