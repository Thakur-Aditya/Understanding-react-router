import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import {useLoaderData} from "react-router-dom"
function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/Thakur-Aditya")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
  return (
    <div>
      Github followers :{data.followers}
      <img src={data.avatar_url} alt="" />
    </div>
  );
}

export default Github;

export const gitHubLoader = async ()=>{
    const response = await fetch("https://api.github.com/users/Thakur-Aditya")
    return response.json();
}
