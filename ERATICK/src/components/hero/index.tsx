import React, { useEffect, useState } from "react";
import bg from "../../assets/images/fl5.jpg";
import "./style.scss";
import { TfiArrowCircleDown } from "react-icons/tfi";

const index = () => {
  const [location, setLocation] = useState<string>("Loading location...");

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.city && data.region && data.country_name) {
          setLocation(
            `You are visiting from ${data.city}, ${data.region}, ${data.country_name}`
          );
        } else {
          setLocation("Location unavailable");
        }
      })
      .catch(() => setLocation("Location unavailable"));
  }, []);

  return (
    <div className="hero">
      <div style={{ fontSize: "1rem", marginBottom: "1rem", color: "#555" }}>{location}</div>
      <h1>
        Trendy <br />
        fashion
      </h1>
    </div>
  );
};

export default index;
