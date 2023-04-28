import React from "react";
import EventCards from "./EventCards";

const LeftSidebar = () => {
  return (
    <div>
      <div className="flex justify-center">
        <span className="bg-[#649B8E] px-[2.25rem] py-2 m-2 text-white font-bold rounded-lg cursor-pointer">
          Invite Events
        </span>
        <span className="bg-[#E4E4E4] px-[2.25rem] m-2 py-2 font-bold rounded-lg cursor-pointer">
          My Events
        </span>
      </div>
      <div className=" flex justify-end mr-[5%] mt-3">
        <span className="mr-3 text-[#707070] font-medium">View By:</span>
        <select
          data-te-select-init
          data-te-select-visible-options="3"
          className="border-[#0c0a0a4d] border-2 w-[40%] text-[#707070] font-medium"
        >
          <option value="1">All Events</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>
      </div>
      <EventCards />
    </div>
  );
};

export default LeftSidebar;
