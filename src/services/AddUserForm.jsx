import React, { useState } from "react";
import { useSales } from "../contexts/SalesContext";

function AddUserForm({ setShowForm }) {
  const { addUser, loading, error } = useSales();
  const [formData, setFormData] = useState({
    icon: "/public/img/unnamed.jpg",
    user: "",
    country: "🇮🇷",
    usage: 0,
    payment: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  async function submitUser(e) {
    e.preventDefault();
    await addUser(formData);
    setShowForm(false);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-1/3 rounded bg-primary p-4 shadow-lg">
        <h2 className="mb-4 text-xl">Add New User</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={submitUser}>
          <div className="mb-4">
            <label className="mb-1 block">User Name</label>
            <input
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Country</label>
            <input
              disabled
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full rounded border p-2"
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Usage</label>
            <input
              type="number"
              name="usage"
              min={0}
              max={100}
              onChange={handleChange}
              className="w-full rounded border p-2 text-black"
            />
            <p className="mt-2 flex text-sm font-semibold text-red-500">
              between 0 to 100
            </p>
          </div>
          <div className="mb-4">
            <label className="mb-1 block">Payment Method</label>
            <input
              type="text"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full rounded border p-2 text-black"
            />
          </div>
          <div className="flex flex-col justify-end gap-2 md:flex-row">
            <button
              type="submit"
              className="rounded bg-blue-500 p-3 text-white"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add User"}
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded bg-gray-300 p-3 text-black"
              disabled={loading}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUserForm;
