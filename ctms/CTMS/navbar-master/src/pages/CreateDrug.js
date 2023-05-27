
import classes from "./CreateStudy.module.scss";
import React, { useState } from "react";


const CreateDrug = () => {

    const [formData, setFormData] = useState({
        drugid: "",
        name: "",
        dosage: "",
        administration: ""

    });

    const { drugid, name, dosage, administration } = formData;

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        createDrug();
    };


    function createDrug() {
        fetch('http://localhost:3002/DRUG', {
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
        <h1>Enter Drug Details</h1>

        <div>
          <label>Drug ID</label>
          <input required type="integer" name="drugid" value={drugid} onChange={handleChange} placeholder="Drug ID" />
        </div>
        <div>
          <label>Name</label>
          <input required type="text" name="name" value={name} onChange={handleChange} placeholder="Name" />
        </div>
        <div>
          <label>Dosage</label>
          <input required type="text" name="dosage" value={dosage} onChange={handleChange} placeholder="Dosage" />
        </div>
        <div>
          <label>Administration</label>
          <input required type="text" name="administration" value={administration} onChange={handleChange} placeholder="Administration" />
        </div>
  
        <button type="submit" onClick={handleSubmit}>Save</button>
      </div>
    </createstudy>
    );
};

export default CreateDrug;
