import "../styles/Story.css";

import story from "../images/story.jpg";

const Story = () => {
  return (
    <div className="Story">
      <div className="content">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <h3>Name</h3>
        <button>Matters ⚖</button>
      </div>
      <img src={story} alt="story" />
    </div>
  );
};

export default Story;
