import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/transactions") {
      setShowAdditionalInfo(true);
    } else {
      setShowAdditionalInfo(false);
      setIsExpanded(false);
    }
  }, [location.pathname]);

  const toggleExpand = () => {
    if (showAdditionalInfo) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className="flex flex-col fixed h-screen overflow-y-auto top-16 left-0 w-72 bg-blue-900 p-5 pb-20">
      <div>
        <Link to="/overview">
          <div className="button bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg mb-2">
            Overview
          </div>
        </Link>
        <Link to="/transactions">
          <div className="button bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg mb-2">
            Transactions
          </div>
        </Link>
        <Link to="/goals">
          <div className="button bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg mb-2">
            Goals
          </div>
        </Link>
        <Link to="/trends">
          <div className="button bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg mb-2">
            Trends
          </div>
        </Link>

        {showAdditionalInfo && (
          <div
            className={`${
              isExpanded ? "h-96" : "h-10"
            } bg-teal-300 pt-2 rounded-lg transition-all duration-300 my-4 flex flex-col justify-between`}
          >
            <button
              onClick={toggleExpand}
              className="w-full text-center text-blue-900 font-semibold"
            >
              Adding Transactions
            </button>

            {isExpanded && (
              <>
                <ul className="pl-8 pr-2 list-disc text-teal-800 text-sm">
                  <li>
                    <b>Year</b>: Enter the 4-digit year, e.g., "2023".
                  </li>
                  <li>
                    <b>Month</b>: Enter the 2-digit month, e.g., "01" for
                    January, "12" for December.
                  </li>
                  <li>
                    <b>Day</b>: Enter the 2-digit day of the month, e.g., "02"
                    for the 2nd, "31" for the last day.
                  </li>
                  <li>
                    <b>Month Abbreviation</b>: Use the first 3 letters of the
                    month in uppercase, e.g., "JAN" for January, "MAR" for
                    March.
                  </li>
                  <li>
                    <b>Amount Code</b>: Represent the amount without decimals or
                    commas. For example, $30.01 becomes "3001".
                  </li>
                </ul>

                <button
                  onClick={toggleExpand}
                  className="text-center text-blue-900 font-semibold mb-2"
                >
                  Close
                </button>
              </>
            )}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Sidebar;
