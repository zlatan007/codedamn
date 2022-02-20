import React from "react";
import data from "./data";
import { Link, useHistory } from "react-router-dom";

const About = () => {
  const  history  = useHistory();
  console.log(history);
  const arr = ["Harshit", "Vikash"];

//   const redirect = () => {
//     history.push("/")
//   }
  return (
    <>
      {arr &&
        arr.map((item) => {
          return <Link to={`/about/${item}`}>{item}</Link>;
        })}
        <button onClick={() => history.push("/")}>Go Back</button>
    </>
  );
};

export default About;
