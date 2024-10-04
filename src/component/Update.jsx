import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadUser = useLoaderData();
  const handleUpdateInfo = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    fetch(`http://localhost:5000/users/${loadUser._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("update successful");
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h3>Update information of {loadUser.name}</h3>
      <form onSubmit={handleUpdateInfo} className="w-1/3 mx-auto">
        <input
          className="w-full h-12 rounded-lg mt-6 px-6 bg-white border-[1px] border-purple-500"
          type="text"
          name="name"
          defaultValue={loadUser.name}
        />
        <input
          className="w-full h-12 rounded-lg mt-6 px-6 bg-white border-[1px] border-purple-500"
          type="email"
          name="email"
          defaultValue={loadUser.email}
        />
        <input
          className="w-full h-12 rounded-lg mt-6 bg-purple-500 btn text-white"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
};

export default Update;
