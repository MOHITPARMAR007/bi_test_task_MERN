import React, { useState } from "react";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const CreateGroup = () => {
  const [groupData, setGroupData] = useState({
    name: "",
    memberEmails: "",
    foodExpense: "",
    travelExpense: "",
    entertainmentExpense: "",
    otherExpense: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    console.log(groupData);
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/users/group", {
        ...groupData,
        memberEmails: groupData.memberEmails
          .split(",")
          .map((email) => email.trim()),
      });
      navigate('/dashboard')
      alert("Group created successfully");
    } catch (error) {
      alert("Error creating group");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Create Group</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Group Name
          </label>
          <input
            type="text"
            name="name"
            value={groupData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Member Emails (comma separated)
          </label>
          <input
            type="text"
            name="memberEmails"
            value={groupData.memberEmails}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Food Expenses
          </label>
          <input
            type="text"
            name="foodExpense"
            value={groupData.foodExpense}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Travel Expenses
          </label>
          <input
            type="text"
            name="travelExpense"
            value={groupData.travelExpense}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Entertainment Expenses
          </label>
          <input
            type="text"
            name="entertainmentExpense"
            value={groupData.entertainmentExpense}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Other Expenses
          </label>
          <input
            type="text"
            name="otherExpense"
            value={groupData.otherExpense}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Group
        </button>
      </form>
    </div>
  );
};

export default CreateGroup;
