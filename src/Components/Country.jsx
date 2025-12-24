import React from 'react'
import { useState } from 'react';

export default function Country() {
const countries = [
  {
    name: "India",
    code: "IN",
    cities: ["New Delhi", "Mumbai", "Chennai", "Bengaluru"]
  },
  {
    name: "United States",
    code: "US",
    cities: ["New York", "Los Angeles", "Chicago", "San Francisco"]
  },
  {
    name: "Australia",
    code: "AU",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth"]
  }
];

const [countrydata, setCountrydata]= useState("");
const handleChange=(event)=>{
    setCountrydata(event.target.value)
    console.log(typeof(countries[0].cities))
}

  return (
    <>
    <select onChange={handleChange}>
        {countries.map((country,index)=>{
            return <option key={index} value={index}>{country.name}</option>
        })}
    </select>
    <select>
       {countries[countrydata]?.cities?.map((city,ind)=>{
            return <option key={ind} value={ind}>{city}</option>
        })}
        </select>
    </>
  )
}
