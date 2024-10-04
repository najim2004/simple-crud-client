import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleAddUser} className="w-1/3 mx-auto">
        <input
          className="w-full h-12 rounded-lg mt-6 px-6 bg-white border-[1px] border-purple-500"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className="w-full h-12 rounded-lg mt-6 px-6 bg-white border-[1px] border-purple-500"
          type="email"
          name="email"
          placeholder="Your Email"
        />
        <input
          className="w-full h-12 rounded-lg mt-6 bg-purple-500 btn text-white"
          type="submit"
          value="submit"
        />
      </form>
      <Link to="/users">
        <button className="btn mt-8">Click Here</button>
      </Link>
    </div>
  );
}

export default App;
