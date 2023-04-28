import React from "react";
import EventBox from "./Sidebar/RightSideBar/EventBox";
import ChooseEvent from "./Sidebar/RightSideBar/ChooseEvent";

const HomePage = () => {
  return (
    <div className="w-full bg-gray-300 h-[90vh]">
      <ChooseEvent />
      <EventBox />
    </div>
  );
};

export default HomePage;
