import React from "react";
import HomeCSS from "./Home.module.css";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Feed from "./Feed";

const Home = () => {
  return (
    <div className={[HomeCSS.Home, "p-4"].join(" ")}>
      <Feed />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
      <HomeCard />
    </div>
  );
};

export default Home;
