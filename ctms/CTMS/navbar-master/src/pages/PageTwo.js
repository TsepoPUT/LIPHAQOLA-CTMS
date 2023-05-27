
import classes from "./ParticipantsModules.scss";
import { Link } from "react-router-dom";

////***************************************************** */

import React, { useState, useEffect } from 'react';

function useStudy() {
  const [study, setStudy] = useState([]);

  useEffect(() => {
    getStudy();
  }, []);

  function getStudy() {
    fetch('http://localhost:3002/study')
      .then(response => response.json())
      .then(data => {
        setStudy(data);
      });
  }

  return study;
}

const PageTwo = () => {

    const study = useStudy();

    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Studies</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Sponsor</th>
                        <th>Investigator</th>
                        <th>Location</th>
                        <th>Drug</th>
                        <th>Begin</th>
                        <th>End</th>
                        <th>phase</th>
                    </thead>
                    <tbody>
                    {study .map(study => (
              <tr key={study.studyid}>
                <td>{study.studyid}</td>
                <td>{study.title}</td>
                <td>{study.sponsor}</td>
                <td>{study.investigator}</td>
                <td>{study.location}</td>
                <td>{study.drug}</td>
                <td>{study.startdate}</td>
                <td>{study.enddate}</td>
                <td>{study.phase}</td>
              </tr>
            ))}
                    </tbody>
                </table>
            </div>
        </participants>
    );
};

export default PageTwo;
