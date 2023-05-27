import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h3>WHAT WOULD YOU LIKE TO ADD</h3>
      <div>
        <Link to="/CreateStudy">
          <button>ADD New Study</button>
        </Link>
        <Link to="/CreateDrug">
          <button>ADD New Drug</button>
        </Link>
        <Link to="/CreateParticipant">
              <button>Add Participant</button>
        </Link>
        {/* Add more buttons for other pages */}
      </div>
    </div>
  );
};

export default Dashboard;
