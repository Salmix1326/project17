import { useState } from "react";
import { useAddUser } from "../model/useAddUser";


function AddUserButton() {
  const { addUser, isLoading, error } = useAddUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
  
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData);
      setFormData({ name: "", email: "", password: "", role: "user" });
      setIsOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 rounded-xl font-semibold bg-yellow-400 text-black hover:bg-yellow-500 transition"
      >
        ➕ Add User
      </button>
      {isOpen && (
        <div className="fixed z-15 inset-0 flex items-center justify-center bg-black/80">
          <form
            onSubmit={handleSubmit}
            className="bg-black border border-yellow-400 p-6 rounded-2xl shadow-lg w-96 space-y-4 text-yellow-400"
          >
            <h2 className="text-xl font-bold text-yellow-300">Add New User</h2>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border border-yellow-400 bg-black text-yellow-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border border-yellow-400 bg-black text-yellow-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
              className="w-full border border-yellow-400 bg-black text-yellow-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-yellow-400 bg-black text-yellow-200 p-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              <option value="user" className="bg-black text-yellow-300">
                user
              </option>
              <option value="admin" className="bg-black text-yellow-300">
                admin
              </option>
              <option value="admin" className="bg-black text-yellow-300">
                manager
              </option>
            </select>

            {error && (
              <p className="text-red-500 text-sm">
                {error.data?.message || "Error"}
              </p>
            )}

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-xl bg-gray-700 text-yellow-300 hover:bg-gray-600 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isLoading}
                className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-500 transition disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddUserButton;
