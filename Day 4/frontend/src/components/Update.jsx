import React, { useState } from "react"
import axios from "axios"

const Update = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleUpdate = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError(null)
        
        try {
            const id = e.target.id.value
            const name = e.target.name.value
            const age = e.target.age.value
            const users = {name, age}
            await axios.put(`https://fsd-sem6.onrender.com/users/${id}`, users)
            setSuccess(true)
        } catch (error) {
            console.error('Update error:', error)
            setError("Failed to update user. Please check if the ID exists.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Update User</h2>
            
            {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md">
                    User updated successfully!
                </div>
            )}
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleUpdate} className="space-y-6">
                <div>
                    <label htmlFor="id" className="block text-sm font-medium text-gray-700 mb-1">
                        User ID
                    </label>
                    <input 
                        type="text" 
                        name="id" 
                        id="id" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter user ID" 
                    />
                </div>
                
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        New Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter new name" 
                    />
                </div>
                
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        New Age
                    </label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        required
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter new age" 
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Updating...' : 'Update User'}
                </button>
            </form>
        </div>
    )
}

export default Update