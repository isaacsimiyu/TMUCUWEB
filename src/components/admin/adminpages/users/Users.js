import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs"; // Import search icon from react-icons
import "./Users.css"; // Import your CSS for styling
import Sidebar from "../../sidebar/Sidebar";
import AdminHeader from "../../adminheader/AdminHeader";

function Users() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend API to delete the user with the specified id
      await axios.delete(`http://localhost:3500/api/users/${id}`);

      // Update the frontend table by removing the deleted user
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      // Handle errors if the deletion fails
      console.error("Error deleting user:", error);
      console.log(error.response.data); // Log response data for more details
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.registrationNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <Sidebar />
      <div className="users-content">
        <AdminHeader />
        <h1>Users Page</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registration Number</th>
              <th>Phone Number</th>
              <th>Year of Study</th>
              <th>Residence Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.registrationNumber}</td>
                <td>{user.phoneNumber}</td>
                <td>{user.yearOfStudy}</td>
                <td>{user.residenceStatus}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                  {/* Add update and create functionality buttons */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
