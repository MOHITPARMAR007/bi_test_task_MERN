import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const DashBoard = () => {
  const { user, isLoading } = useAuth0();
  const [gpData, setGpData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/dashboard"
        );
        setGpData(res.data.data);
        setFilterData(res.data.data); // Set filterData initially to all data
      } catch (error) {
        alert(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (user && user.email) {
      setSelectedEmail(user.email);
    }
  }, [user]);

  useEffect(() => {
    if (selectedEmail) {
      const filtered = gpData.filter((item) =>
        item.memberEmails.includes(selectedEmail)
      );
      setFilterData(filtered);
    } else {
      setFilterData(gpData);
    }
  }, [selectedEmail, gpData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>No user data available</div>;
  }

  return (
    <>
      {filterData.map((item, index) => {
        return (
          <div
            key={index}
            className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
          >
            <h1 className="text-center text-[20px] font-bold">{item.name}</h1>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold leading-none text-gray-900 ">
                Expenses type
              </h5>
              <a
                href="#"
                className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                View all Price
              </a>
            </div>
            <div className="flow-root">
              <ul
                role="list"
                className="divide-y divide-gray-200 dark:divide-gray-700"
              >
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-1.jpg"
                        alt="Neil"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Food Expense
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-black">
                      {item.foodExpense}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-3.jpg"
                        alt="Bonnie"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Travel Expense
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      {item.travelExpense}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Michael"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Entertainment expense
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      {item.entertainmentExpense}
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src="/docs/images/people/profile-picture-2.jpg"
                        alt="Michael"
                      />
                    </div>
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate ">
                        Other expense
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                      {item.otherExpense}
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DashBoard;
