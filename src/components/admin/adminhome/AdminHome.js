import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install axios for HTTP requests
import "../styles.css";
import { BsPeople, BsFillGrid3X3GapFill, BsChat, BsBook } from "react-icons/bs";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function AdminHome() {
  const [userCount, setUserCount] = useState(0);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [contactCount, setContactCount] = useState(0);
  const [ministryCount, setMinistryCount] = useState(0);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch user count
      const userResponse = await axios.get("/api/user/count");
      setUserCount(userResponse.data.count);

      // Fetch subscriber count
      const subscriberResponse = await axios.get("/api/newsletter/subscribers/count");
      setSubscriberCount(subscriberResponse.data.count);

      // Fetch contact count
      const contactResponse = await axios.get("/api/contact/count");
      setContactCount(contactResponse.data.count);

      // Fetch ministry count
      const ministryResponse = await axios.get("/api/ministry/count");
      setMinistryCount(ministryResponse.data.count);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>USERS</h3>
            <BsPeople className="card_icon" />
          </div>
          <h1>{userCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>SUBSCRIBERS</h3>
            <BsFillGrid3X3GapFill className="card_icon" />
          </div>
          <h1>{subscriberCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CONTACTS</h3>
            <BsChat className="card_icon" />
          </div>
          <h1>{contactCount}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>MINISTRIES</h3>
            <BsBook className="card_icon" />
          </div>
          <h1>{ministryCount}</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default AdminHome;
