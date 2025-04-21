import React, { useState } from "react"
import axios from "axios"

const Delete = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(null)

    const handleDelete = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        setError(null)
        
        try {
            const id = e.target.id.value
            await axios.delete(`http://localhost:9000/users/${id}`)
            setSuccess(true)
            e.target.reset()
        } catch (error) {
            console.error('Delete error:', error)
            setError("Failed to delete user. Please check if the ID exists.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Delete User</h2>
            
            {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md">
                    User deleted successfully!
                </div>
            )}
            
            {error && (
                <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
                    {error}
                </div>
            )}
            
            <form onSubmit={handleDelete} className="space-y-6">
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
                        placeholder="Enter user ID to delete" 
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Deleting...' : 'Delete User'}
                </button>
                
                <div className="text-sm text-gray-500 mt-2">
                    <p>Warning: This action cannot be undone.</p>
                </div>
            </form>
        </div>
    )
}

export default Delete