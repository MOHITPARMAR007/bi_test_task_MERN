import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl">
        <p className="text-lg leading-relaxed text-gray-700">
          During my internship, I developed a comprehensive Expense Manager
          application using the MERN stack (MongoDB, Express.js, React, and
          Node.js). This application is designed to help users effectively track
          and manage their personal and group expenses. Key features include user
          authentication and authorization via Auth0, allowing for secure login
          and sign-up processes. Users can create expense groups, invite friends
          by entering their email addresses, and automatically send email
          notifications to invitees with the group name and details. The app also
          provides a detailed summary of expenses, offering clear insights into
          spending habits and group expenses. The user interface is built with
          React and styled using Tailwind CSS, ensuring a modern, responsive, and
          intuitive user experience. This project highlights my ability to
          integrate various technologies to build a functional, user-centric
          application, and to implement practical solutions in a collaborative
          setting.
        </p>
      </div>
    </div>
  );
};

export default About;
