import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Import useParams
import axios from "axios";

function PhoneDetail() {
  const { id } = useParams();
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/phones/${id}`)
      .then((response) => setPhone(response.data))
      .catch((error) => console.error("Error fetching phone details:", error));
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Phone Details</h1>
      <h2>{phone.name}</h2>
      <p>{phone.description}</p>
      {/* Display other phone details */}
    </div>
  );
}

export default PhoneDetail;
