import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function Dashboard() {
    
  const [tasks, setTasks] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [editId, setEditId] = useState(null)
  const [profile, setProfile] = useState(null)
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  useEffect(() => {

  if (!token) {
    navigate("/")
    return
  }

  fetchProfile()
  fetchTasks()

}, [])

  const fetchTasks = async () => {

    const res = await axios.get(
      "http://localhost:5000/tasks",
      {
        headers: {
          authorization: token
        }
      }
    )

    setTasks(res.data)
  }

const fetchProfile = async () => {

  const res = await axios.get(
    "http://localhost:5000/profile",
    {
      headers: {
        authorization: token
      }
    }
  )

  setProfile(res.data)

}

  const addTask = async () => {

  if (editId) {

    await axios.put(
      `http://localhost:5000/tasks/${editId}`,
      { title, description },
      {
        headers: {
          authorization: token
        }
      }
    )

    setEditId(null)

  } else {

    await axios.post(
      "http://localhost:5000/tasks",
      { title, description },
      {
        headers: {
          authorization: token
        }
      }
    )

  }

  setTitle("")
  setDescription("")
  fetchTasks()
}

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const deleteTask = async (id) => {

  await axios.delete(
    `http://localhost:5000/tasks/${id}`,
    {
      headers: {
        authorization: token
      }
    }
  )

  fetchTasks()

}

const editTask = (task) => {

  setTitle(task.title)
  setDescription(task.description)
  setEditId(task.id)

}

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h2>Dashboard</h2>
//     {profile && (
//   <div style={{
//     border: "1px solid gray",
//     padding: "10px",
//     margin: "10px",
//     display: "inline-block"
//   }}>
//     <h3>User Profile</h3>
//     <p><strong>Name:</strong> {profile.name}</p>
//     <p><strong>Email:</strong> {profile.email}</p>
//   </div>
// )}
//       <button onClick={logout}>Logout</button>

//       <h3>Add Task</h3>
//       <input placeholder="Title"
//         value={title}
//         onChange={e => setTitle(e.target.value)} /><br/><br/>

//       <input placeholder="Description"
//         value={description}
//         onChange={e => setDescription(e.target.value)} /><br/><br/>

//       <button onClick={addTask}>Add Task</button>
//         <h3>Search Tasks</h3>

// <input
//   placeholder="Search by title or description"
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
// />
//       <h3>Your Tasks</h3>

//       {tasks
//   .filter(task =>
//     task.title.toLowerCase().includes(search.toLowerCase()) ||
//     task.description.toLowerCase().includes(search.toLowerCase())
//   )
//   .map(task => (

//     <div key={task.id}>
//       <strong>{task.title}</strong> - {task.description}

//       <button onClick={() => editTask(task)}>
//         Edit
//       </button>

//       <button onClick={() => deleteTask(task.id)}>
//         Delete
//       </button>

//     </div>

// ))}
//     </div>
//   )


return (

  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">

    {/* Navbar */}

    <div className="bg-gray-800 p-4 flex justify-between items-center shadow-lg">

      <h1 className="text-xl font-bold">
        Task Dashboard
      </h1>

      <button
        onClick={logout}
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>

    </div>

    <div className="max-w-4xl mx-auto p-6">

      {/* Profile */}

      {profile && (

        <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">

          <h2 className="text-lg font-semibold mb-2">
            Profile
          </h2>

          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>

        </div>

      )}

      {/* Add Task */}

      <div className="bg-gray-800 p-4 rounded-lg shadow mb-6">

        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />

        <input
          className="w-full p-2 mb-3 rounded bg-gray-700 text-white"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />

        <button
          onClick={addTask}
          className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {editId ? "Update Task" : "Add Task"}
        </button>

      </div>
    {/* Search Bar */}

<div className="bg-gray-800 p-4 rounded-lg shadow mb-6">

  <input
    className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
    placeholder="Search tasks..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />

</div>

      {/* Tasks */}

      <div>

        {tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    task.description.toLowerCase().includes(search.toLowerCase())
  ).map(task => (

          <div
            key={task.id}
            className="bg-gray-800 p-4 mb-3 rounded shadow flex justify-between items-center hover:scale-102 transition"
          >

            <div>
              <h3 className="font-semibold">
                {task.title}
              </h3>
              <p className="text-gray-300">
                {task.description}
              </p>
            </div>

            <div>

              <button
                onClick={() => editTask(task)}
                className="bg-yellow-500 px-3 py-1 mr-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(task.id)}
                className="bg-red-500 px-3 py-1 rounded"
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

)
}

export default Dashboard