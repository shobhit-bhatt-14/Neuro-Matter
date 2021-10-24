import { Link } from "react-router-dom";

import Story from "./Story";

import "../styles/StoryList.css";
import post from "../images/post.jpg";

const StoryList = () => {
  return (
    <div className="StoryList">
      <div className="Share">
        <img src={post} alt="post" />
        <Link to="/create">Share your Story</Link>
      </div>
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoryList;
