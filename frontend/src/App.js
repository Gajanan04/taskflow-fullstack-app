import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [task, setTask] = useState("");

  const [token, setToken] = useState("");

  const [tasks, setTasks] = useState([]);

  // Register
  const registerUser = async () => {
    try {
      const res = await axios.post(
        "https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/auth/register",
        {
          name,
          email,
          password,
        }
      );

      alert(res.data.message);
    } catch (error) {
      alert(error.message);
    }
  };

  // Login
  const loginUser = async () => {
    try {
      const res = await axios.post(
        "https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      setToken(res.data.token);

      alert("Login Successful");
    } catch (error) {
      alert(error.message);
    }
  };

  // Create Task
  const createTask = async () => {
    try {
      await axios.post(
        "https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/tasks",
        {
          title: task,
          description: task,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Task Created");
    } catch (error) {
      alert(error.message);
    }
  };

  // Get Tasks
  const getTasks = async () => {
    try {
      const res = await axios.get(
        "https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/tasks",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTasks(res.data);
    } catch (error) {
      alert(error.message);
    }
  };
    const deleteTask = async (id) => {
  try {
    await axios.delete(
      `https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/tasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Task Deleted");
    getTasks();
  } catch (error) {
    alert(error.message);
  }
};
      const updateTask = async (id) => {
  try {
    await axios.put(
      `https://taskflow-fullstack-app-sc8y.onrender.com/api/v1/tasks/${id}`,
      {
        title: "Updated From Frontend",
        description: "Frontend Updated Task",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert("Task Updated");

    getTasks();
  } catch (error) {
    alert(error.message);
  }
};
return (
  <div className="container">

    {/* LEFT SIDE */}

    <div className="left-panel">
        <div
  style={{
    textAlign: "center",
    fontSize: "42px",
    marginBottom: "10px"
  }}
>
  ☁️
</div>
      <h1>TaskFlow</h1>

      <p>
        Organize and manage your tasks smarter.
      </p>

      {token && (
        <button onClick={() => setToken("")}>
          Logout
        </button>
      )}

      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={registerUser}>
        Register
      </button>

      <hr />

      <h2>Login</h2>

      <button onClick={loginUser}>
        Login
      </button>

      <hr />

      {token ? (
        <>
          <h2>Dashboard</h2>

          <input
            placeholder="Create Task"
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={createTask}>
            Create Task
          </button>

          <button onClick={getTasks}>
            Load Tasks
          </button>

          <div>
            {tasks.map((task) => (
              <div className="task-card" key={task._id}>

                <h3>{task.title}</h3>

                <button
                  onClick={() => deleteTask(task._id)}
                >
                  Delete
                </button>

                <button
                  onClick={() => updateTask(task._id)}
                >
                  Update
                </button>

              </div>
            ))}
          </div>
        </>
      ) : (
        <p>Please login first</p>
      )}

    </div>

    {/* RIGHT SIDE */}

    <div className="right-panel">

      <div className="illustration">

        <h1>Cloud Task Manager</h1>

        <p>
          Modern productivity for modern developers.
        </p>

      </div>

    </div>

  </div>
);
}
export default App;