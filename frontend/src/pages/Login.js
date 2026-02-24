// import { useState } from "react"
// import axios from "axios"
// import { useNavigate, Link } from "react-router-dom"

// function Login() {

//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const navigate = useNavigate()

//   const handleLogin = async () => {

//     const res = await axios.post(
//       "http://localhost:5000/auth/login",
//       { email, password }
//     )

//     localStorage.setItem("token", res.data.token)

//     navigate("/dashboard")
//   }

//   return (
//   <div className="flex items-center justify-center min-h-screen bg-gray-100">

//     <div className="bg-white p-8 rounded shadow-md w-80">

//       <h2 className="text-2xl font-bold mb-6 text-center">
//         Login
//       </h2>

//       <input
//         className="w-full p-2 border mb-4 rounded"
//         placeholder="Email"
//         onChange={e => setEmail(e.target.value)}
//       />

//       <input
//         className="w-full p-2 border mb-4 rounded"
//         type="password"
//         placeholder="Password"
//         onChange={e => setPassword(e.target.value)}
//       />

//       <button
//         className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         onClick={handleLogin}
//       >
//         Login
//       </button>

//     </div>

//   </div>
// )
// }

// export default Login


import { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {

    try {

      const res = await axios.post(
        "http://localhost:5000/auth/login",
        { email, password }
      )

      localStorage.setItem("token", res.data.token)

      navigate("/dashboard")

    } catch {

      alert("Invalid login")

    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700">

      <div className="bg-white/90 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 transform hover:scale-105 transition duration-300">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />

        <input
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
        >
          Login
        </button>

        <p className="text-center mt-4 text-gray-600">
          Don't have an account?
          <Link to="/register" className="text-blue-600 font-semibold ml-1">
            Register
          </Link>
        </p>

      </div>

    </div>

  )
}

export default Login