"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./topcard.css";
import { getTopRankedHospitals } from "@/lib/actions/Hospitals.action";
import { getTopRankedDoctors } from "@/lib/actions/Doctors.actions";

const Topcard = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let data;
      if (type === "hospital") {
        data = await getTopRankedHospitals();
      } else if (type === "doctor") {
        data = await getTopRankedDoctors();
      }
      setData(data);
    }
    fetchData();
  }, [type]);

  return (
    <div>
      <h2>
        {type === "hospital" ? "CuraHunt Top Hospital" : "CuraHunt Top Doctor"}
      </h2>
      <div className="top">
        {data.map((item) => (
          <div key={item._id}>
            <div>
              <Image src={item.p_img} alt={item.name} width={50} height={50} />
            </div>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topcard;
