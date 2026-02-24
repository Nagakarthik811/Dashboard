// import { useState } from "react"
// import axios from "axios"
// import { useNavigate } from "react-router-dom"

// function Register() {

//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()

//   const handleRegister = async () => {

//     await axios.post("http://localhost:5000/auth/signup", {
//       name,
//       email,
//       password
//     })

//     alert("User registered successfully")
//     navigate("/")
//   }

//   return (
//     <div style={{ textAlign: "center", marginTop: "100px" }}>
//       <h2>Register</h2>

//       <input placeholder="Name" onChange={e => setName(e.target.value)} /><br/><br/>
//       <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br/><br/>
//       <input type="password" placeholder="Password"
//         onChange={e => setPassword(e.target.value)} /><br/><br/>

//       <button onClick={handleRegister}>Register</button>
//     </div>
//   )
// }

// export default Register


import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Register() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleRegister = async () => {

    await axios.post("http://localhost:5000/auth/signup", {
      name,
      email,
      password
    })

    alert("Registration successful")

    navigate("/")

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700">

      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 transform hover:scale-105 transition duration-300">

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:ring-2 focus:ring-purple-500"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
        >
          Register
        </button>

      </div>

    </div>

  )
}

export default Register