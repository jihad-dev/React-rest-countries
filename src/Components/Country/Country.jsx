import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Country = ({ country, visitedCountryHandler,handleVisitedFlags}) => {

  const [visited, setVisited] = useState(false);
  const { name, flags, population, area, cca3,id } = country;
  console.log(country)
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <Link 
      className={`${
        visited ? "bg-red-500" : "bg-gray-800"
      } rounded-2xl  shadow-lg w-full h-[480px]  text-center`}
    >
      <Link href="">
        <img className="rounded-t-2xl w-full h-[180px] " src={flags?.png} alt="" />
      </Link>
      <div className="px-6">
        <h5
          style={{ color: visited ? "pink" : "green" }}
          className=" text-xl font-bold tracking-wide text-neutral-800 dark:text-neutral-50"
        >
          {name?.common}
        </h5>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          population : {population}
        </p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          area : {area}
        </p>
        <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
          code : {cca3}
        </p>
        <button
          className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium "
          onClick={() => visitedCountryHandler(country)}
        >
        Marked Visited
        </button>
        <br />
        <button
          className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium "
          onClick={() => handleVisitedFlags(flags)}
        >
        Add Flag
        </button>
        <br />
        <button
          onClick={handleVisited}
          href="#"
          className="mt-3 inline-block rounded bg-blue-500 px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-blue-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-blue-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-blue-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        >
          {visited ? "visited country" : "Going"}
        </button>
      </div>
    </Link>
  );
};

export default Country;
