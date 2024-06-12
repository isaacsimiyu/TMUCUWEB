import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsSearch } from "react-icons/bs"; // Import search icon from react-icons
import "./Contacts.css"; // Import your CSS for styling
import Sidebar from "../../sidebar/Sidebar";
import AdminHeader from "../../adminheader/AdminHeader";

function Contacts() {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3500/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the backend API to delete the contact message with the specified id
      await axios.delete(`http://localhost:3500/api/contact/${id}`);

      // Update the frontend table by removing the deleted contact message
      setContacts(contacts.filter((contact) => contact.id !== id));
    } catch (error) {
      // Handle errors if the deletion fails
      console.error("Error deleting contact message:", error);
      console.log(error.response.data); // Log response data for more details
    }
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-page">
      <Sidebar />
      <div className="users-content">
        <AdminHeader />
        <h1>Contact Messages</h1>
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
              <th>Phone</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredContacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.id}</td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.message}</td>
                <td>
                  <button onClick={() => handleDelete(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contacts;
