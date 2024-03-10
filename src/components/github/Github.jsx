import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
import { useLoaderData, Link } from "react-router-dom";
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
      Github followers :{data.followers} <br />
      <b>Link: </b>
      <Link
        to="https://github.com/Thakur-Aditya/Understanding-react-router.git"
        className="text-red-500"
      >
        GitHub link
      </Link>
      <img
        src={data.avatar_url}
        className="h-24 rounded-full"
        alt="Github avatar"
      />
    </div>
  );
}

export default Github;

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/Thakur-Aditya");
  return response.json();
};
