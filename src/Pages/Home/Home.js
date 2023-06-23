import React from "react";
import HomeCSS from "./Home.module.css";
import HomeCard from "../../Components/HomeCard/HomeCard";
import Feed from "./Feed";
import axios from "axios";

const Home = () => {

  const [posts, setPosts] = React.useState([])

  const getPosts = () => {
    axios.get("https://harajalkamel.com/api/allPosts").then(res => {
      setPosts(res.data)
      console.log(posts)
    })
  }

  React.useEffect(() => getPosts(), [])

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
