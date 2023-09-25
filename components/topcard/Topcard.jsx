"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./topcard.css";
import { getTopRankedHospitals } from "@/lib/actions/Hospitals.action";

const Topcard = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    async function fetchHospitals() {
      const hospitalsData = await getTopRankedHospitals();
      setHospitals(hospitalsData);
    }

    fetchHospitals();
  }, []);

  return (
    <div>
      <h2>CuraHunt Top Hospital</h2>
      <div className="top">
        {hospitals.map((hospital) => (
          <div key={hospital._id}>
            <div>
              <Image src={hospital.img} alt={hospital.name} />
            </div>
            <span>{hospital.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topcard;
