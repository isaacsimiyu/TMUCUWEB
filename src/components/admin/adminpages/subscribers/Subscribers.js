import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Subscribers.css"; // Import your CSS for styling
import Sidebar from "../../sidebar/Sidebar";
import AdminHeader from "../../adminheader/AdminHeader";

function Subscribers() {
  const [subscribers, setSubscribers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3500/api/newsletter/subscribers"
      );
      setSubscribers(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend API to delete the subscriber with the specified id
      await axios.delete(
        `http://localhost:3500/api/newsletter/subscribers/${id}`
      );

      // Update the frontend table by removing the deleted subscriber
      setSubscribers(subscribers.filter((subscriber) => subscriber.id !== id));
    } catch (error) {
      // Handle errors if the deletion fails
      console.error("Error deleting subscriber:", error);
      console.log(error.response.data); // Log response data for more details
    }
  };

  const filteredSubscribers = subscribers.filter((subscriber) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <Sidebar />
      <div className="users-content">
        <AdminHeader />
        <h1>Subscribers</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Action</th> {/* Add Action column header */}
            </tr>
          </thead>
          <tbody>
            {filteredSubscribers.map((subscriber) => (
              <tr key={subscriber.id}>
                <td>{subscriber.id}</td>
                <td>{subscriber.email}</td>
                <td>
                  <button onClick={() => handleDelete(subscriber.id)}>
                    Delete
                  </button>{" "}
                  {/* Button to delete the subscriber */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Subscribers;
