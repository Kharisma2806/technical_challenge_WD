import React, { useState, useEffect } from "react";
import axios from "axios";
import "./LoadingSpinner/LoadingSpinner.css"; // Import the CSS directly
import "../App.css";

// Import your PhoneDetail component here if needed

function PhoneList() {
  const [phones, setPhones] = useState([]);
  const [selectedPhone, setSelectedPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3001/phones")
      .then((response) => {
        setPhones(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handlePhoneSelect = (phone) => {
    setSelectedPhone(phone);
  };

  return (
    <div className="phone-list-container">
      <h1 className="header">Phone List</h1>
      <h3>Click on the items below to display the phone details 😊</h3>
      <ul className="phone-list">
        {phones.map((phone) => (
          <li
            key={phone.id}
            className="phone-list-item"
            onClick={() => handlePhoneSelect(phone)}
          >
            {phone.name} - {phone.manufacturer}
          </li>
        ))}
      </ul>
      {isLoading ? (
        <div className="loading-spinner"></div>
      ) : (
        selectedPhone && (
          <div className="phone-details">
            <h2 className="header">Phone Details</h2>
            <p>Name: {selectedPhone.name}</p>
            <p>Manufacturer: {selectedPhone.manufacturer}</p>
            <p>Price: {selectedPhone.price}</p>
            <p>Color: {selectedPhone.color}</p>
            <p>Screen: {selectedPhone.screen}</p>
            <p>Description: {selectedPhone.description}</p>
            <img
              src={require(`../images/${selectedPhone.imageFileName}`)}
              alt={selectedPhone.name}
              className="phone-image"
            />
            {/* Display other phone details */}
            {/* You can use the PhoneDetail component here if needed */}
          </div>
        )
      )}
    </div>
  );
}

export default PhoneList;
