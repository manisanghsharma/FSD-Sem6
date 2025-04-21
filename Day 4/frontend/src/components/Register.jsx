import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleRegister = async (e) => {
        e.preventDefault()
        setLoading(true)
        setSuccess(false)
        
        try {
            const name = e.target.name.value
            const age = e.target.age.value
            const users = {name, age}
            await axios.post('https://fsd-sem6.onrender.com/users', users)
            setSuccess(true)
            e.target.reset()
        } catch (error) {
            console.error('Registration error:', error)
            alert('Failed to register user')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Register New User</h2>
            
            {success && (
                <div className="mb-4 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md">
                    User registered successfully!
                </div>
            )}
            
            <form onSubmit={handleRegister} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter full name" 
                    />
                </div>
                
                <div>
                    <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
                        Age
                    </label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        required
                        min="1"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter age" 
                    />
                </div>
                
                <button 
                    type="submit"
                    disabled={loading}
                    className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                    {loading ? 'Registering...' : 'Register User'}
                </button>
            </form>
        </div>
    )
}

export default Register