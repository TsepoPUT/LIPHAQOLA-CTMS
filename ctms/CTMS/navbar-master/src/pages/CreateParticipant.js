
import classes from "./CreateStudy.module.scss";
import React, { useState, useEffect  } from "react";


const CreateParticipant = () => {

    const [formData, setFormData] = useState({
        participantid: "",
        name: "",
        surname: "",
        age: "",
        gender: "",
        study: "",
        contacts: ""

    });

    const [studyList, setStudyList] = useState([]);

  // Fetch the list of studies from the server
  useEffect(() => {
    fetch('http://localhost:3002/study')
      .then(response => response.json())
      .then(data => {
        setStudyList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

    const { participantid, name, surname, age, gender, study, contacts } = formData;

    const handleChange = e => {
      if (e.target.name === "study") {
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      } else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };
    

    const handleSubmit = e => {
        e.preventDefault();
        createParticipant();
    };


    function createParticipant() {
        fetch('http://localhost:3002/participant', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {response.text(); })
        .then(data => {
            alert('Added Successfully!');
        });
    }


    return (
        <createstudy className={classes.createstudy}>
      <div className={classes.createstudy__content}>
        <h1>Enter Details of Participant</h1>

        <div>
          <label>Patient ID</label>
          <input required type="integer" name="participantid" value={participantid} onChange={handleChange} placeholder="ID" />
        </div>
        
        <div>
          <label>Name</label>
          <input required type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
        </div>
        <div>
          <label>Surname</label>
          <input required type="text" name="surname" value={surname} onChange={handleChange} placeholder="Surname" />
        </div>
        <div>
          <label>Age</label>
          <input required type="integer" name="age" value={age} onChange={handleChange} placeholder="Age" />
        </div>
        <div>
          <label>Gender</label>
          <input required type="text" name="gender" value={gender} onChange={handleChange} placeholder="Gender" />
        </div>
        <div>
          <label>Study</label>
            <select required name="study" value={study} onChange={handleChange}>
              <option value="">Select a Study</option>
                {studyList.map(studies => (
                   <option key={studies.studyid} value={studies.studyid}>
                     {studies.title}
              </option>
                    ))}
        </select>
          </div>
        <div>
          <label>Contacts</label>
          <input required type="integer" name="contacts" value={contacts} onChange={handleChange} placeholder="Contacts" />
        </div>
        
        <button type="submit" onClick={handleSubmit}>Save</button>
        {/* <button type="button" onClick={createParticipant}>Save</button> */}
      </div>
    </createstudy>
    );
};

export default CreateParticipant;
