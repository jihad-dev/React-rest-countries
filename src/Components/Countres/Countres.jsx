import React, { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countres = () => {
  const [countries, SetCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => SetCountries(data));
  }, []);
  const visitedCountryHandler = (country) => {
    const newVisitedCountries = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountries);
  };
  // visitedCountry flags
  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
    
  };
  return (
    <div>
      <h2 className="text-center font-extrabold text-3xl p-6">
        Total Country : {countries.length}
      </h2>
      <div>
        <h2>Total Visited Country : {visitedCountry?.length} </h2>
        <ul>
          {visitedCountry?.map((country) => (
            <li className="font-bold text-2xl " key={country.cca3}>{country?.name?.common}</li>
          ))}
        </ul>
      </div>
      
      <div>  
        {
        visitedFlags.map((flag,i) =><img className="w-24 p-1" key={i} src={flag.png} alt="" />)
        }
      </div>

      <div className=" p-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        {countries?.map((country) => (
          <Country
            key={country.cca3}
            visitedCountryHandler={visitedCountryHandler}
            country={country}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countres;
