
import classes from "./ParticipantsModules.scss";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from 'react';

function useDrug() {
  const [drug, setDrug] = useState([]);

  useEffect(() => {
    getDrug();
  }, []);

  function getDrug() {
    fetch('http://localhost:3002/GetDrug')
      .then(response => response.json())
      .then(data => {
        setDrug(data);
      });
  }

  return drug;
}

const PageThree = () => {

    const drug = useDrug();

    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Drugs</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Dosage</th>
                        <th>Administration</th>
                    </thead>
                    <tbody>
                    {drug .map(drug => (
              <tr key={drug.drugid}>
                <td>{drug.drugid}</td>
                <td>{drug.name}</td>
                <td>{drug.dosage}</td>
                <td>{drug.administration}</td>
              </tr>
            ))}
                    </tbody>
                </table>
            </div>
          
        </participants>
    );
};

export default PageThree;
