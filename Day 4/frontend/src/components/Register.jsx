import React from 'react'
import axios from 'axios'

const Register = () => {
    const handleRegister = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const age = e.target.age.value
        const users = {name, age}
        await axios.post('http://localhost:9000/users', users)
        alert('User registered successfully')
    }
  return (
    <div>
        <form onSubmit={handleRegister} action="">
            <label>
                Name:
                <input type="text" name="name" id="" />
            </label>
            <label>
                Age:
                <input type="number" name="age" id="" />
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}
export default Register