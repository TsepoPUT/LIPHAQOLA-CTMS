
import classes from "./CreateStudy.module.scss";
import React, { useState, useEffect } from "react";


const CreateStudy = () => {

    const [formData, setFormData] = useState({
        studyid: "",
        title: "",
        sponsor: "",
        investigator: "",
        location: "",
        drug: "",
        startdate: "",
        enddate: "",
        phase: ""

    });

    const [staffList, setStaffList] = useState([]);
    const [drugList, setDrugList] = useState([]);
    const [siteList, setSiteList] = useState([]);



    const { studyid, title, sponsor, investigator, location, drug, startdate, enddate, phase } = formData;
    
  // Fetch the list of studies from the server
  useEffect(() => {
    fetch('http://localhost:3002/STAFF')
      .then(response => response.json())
      .then(data => {
        setStaffList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3002/GetDrug')
      .then(response => response.json())
      .then(data => {
        setDrugList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:3002/site')
      .then(response => response.json())
      .then(data => {
        setSiteList(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

    // const handleChange = e => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    const handleChange = e => {
      if (e.target.name === "investigator") {
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      } else if (e.target.name === "drug") {
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      } else if (e.target.name === "location") {
        setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      }else {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
    };

    const handleSubmit = e => {
        e.preventDefault();
        createStudy();
    };


    function createStudy() {
        fetch('http://localhost:3002/STUD', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {response.text(); })
        .then(data => {
            alert(data);
        });
    }


    return (
        <createstudy className={classes.createstudy}>
      <div className={classes.createstudy__content}>
        <h1>Enter Details of Study</h1>

        <div>
          <label>Study ID</label>
          <input required type="integer" name="studyid" value={studyid} onChange={handleChange} placeholder="Study ID" />
        </div>
        <div>
          <label>Title</label>
          <input required type="text" name="title" value={title} onChange={handleChange} placeholder="Title" />
        </div>
        <div>
          <label>Sponsor</label>
          <input required type="text" name="sponsor" value={sponsor} onChange={handleChange} placeholder="Sponsor" />
        </div>
         <div>
          <label>Assigned Investicator</label>
            <select required name="investigator" value={investigator} onChange={handleChange}>
              <option value="">Select an Investigator</option>
                {staffList.map(staff => (
                   <option key={staff.staffid} value={staff.staffid}>
                     {staff.name}
              </option>
                    ))}
        </select>
          </div>
          <div>
          <label>Location</label>
            <select required name="location" value={location} onChange={handleChange}>
              <option value="">Choose Site of Study</option>
                {siteList.map(studysite => (
                   <option key={studysite.name} value={studysite.name}>
                     {studysite.name}
              </option>
                    ))}
        </select>
          </div>
          <div>
          <label>Drug</label>
            <select required name="drug" value={drug} onChange={handleChange}>
              <option value="">Drugs</option>
                {drugList.map(drugs => (
                   <option key={drugs.drugid} value={drugs.drugid}>
                     {drugs.name}
              </option>
                    ))}
        </select>
          </div>
        <div>
          <label>Start Date</label>
          <input required type="date" name="startdate" value={startdate} onChange={handleChange} placeholder="Begin" />
        </div>
        <div>
          <label>End Date</label>
          <input required type="date" name="enddate" value={enddate} onChange={handleChange} placeholder="End" />
        </div>

        <div>
          <label>Phase</label>
          <select required name="phase" value={phase} onChange={handleChange}>
            <option value="">Select Phase</option>
            <option value="1">Phase 1</option>
            <option value="2">Phase 2</option>
            <option value="3">Phase 3</option>
          </select>
        </div>

        <button type="submit" onClick={handleSubmit}>Save</button>
        {/* <button type="button" onClick={createStudy}>Save</button> */}
      </div>
    </createstudy>
    );
};

export default CreateStudy;
