import React, { useEffect } from "react";
import bg from "../../assets/images/fl5.jpg";
import "./style.scss";
import { TfiArrowCircleDown } from "react-icons/tfi";

const Index = () => {
  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.city && data.region && data.country_name) {
          // Send to Google Sheets via SheetDB
          fetch("https://sheetdb.io/api/v1/ct96j6w1dl3k5", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: {
                city: data.city,
                region: data.region,
                country: data.country_name,
                ip: data.ip,
                timestamp: new Date().toISOString(),
              },
            }),
          });
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className="hero">
      <h1>
        Trendy <br />
        fashion
      </h1>
    </div>
  );
};

export default Index;
