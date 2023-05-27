
import classes from "./ParticipantsModules.scss";
import { Link } from "react-router-dom";


////***************************************************** */

import React, { useState, useEffect } from 'react';

function usePart() {
  const [participant, setParticipant] = useState([]);

  useEffect(() => {
    getParticipant();
  }, []);

  function getParticipant() {
    fetch('http://localhost:3002/participant')
      .then(response => response.json())
      .then(data => {
        setParticipant(data);
      });
  }

  return participant;
}



const PageOne = () => {

    const participant = usePart();

    return (
        <participants className={classes.Participants}>
            <div className={classes.participants__content}>
                <h1>Patients</h1>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Surname</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>study</th>
                        <th>Contacts</th>
                    </thead>
                    <tbody>
                    {participant .map(participant => (
              <tr key={participant.participantid}>
                <td>{participant.participantid}</td>
                <td>{participant.name}</td>
                <td>{participant.surname}</td>
                <td>{participant.age}</td>
                <td>{participant.gender}</td>
                <td>{participant.study}</td>
                <td>{participant.contacts}</td>
              </tr>
            ))}
                    </tbody>
                </table>
            </div>
        </participants>
    );
};

export default PageOne;
