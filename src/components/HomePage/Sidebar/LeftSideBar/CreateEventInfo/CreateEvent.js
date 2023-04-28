import { faBaby, faBirthdayCake, faHouseFlag, faOtter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { displayArrow, openPage4 } from "../../../../../redux/StateAction/GlobalReducerAction";
import { useSelector } from "react-redux";
import { displayNone } from "../../../../../redux/StateAction/GlobalReducerAction";


const CreateEvent = () => {
        const { displayArrow:displayState } = useSelector(
          (state) => state?.globalData
        );
  const openPage4Hn = () => {
    // displayNone(false)
    displayArrow(false)
    openPage4(true);
  };
  return (
    <div className="w-[32%] bg-[#E6F2EF] h-[570px] float-left mt-2 ml-[1px] relative">
      <div className="flex justify-center items-center p-3">
        <span className="font-bold">Create</span>{" "}
        <span className="ml-4 font-bold text-[#649B8E]">Event</span>
      </div>
      <div className="cursor-pointer" onClick={openPage4Hn}>
        <div className="border-2 bg-[#69e4c53f] m-2 p-2 border-[#227c7829] shadow rounded flex items-center">
          <FontAwesomeIcon
            icon={faHouseFlag}
            className="text-[#579586] border-4 border-[#649B8E] ml-3 h-[20px] w-[20px] rounded-full p-3"
          />
          <div className="ml-[16%]">
            <h1 className="text-[#579586] text-[23px] font-medium">Re-Union</h1>
            <div
              className={`absolute ${
                displayState
                  ? "left-0 top-[-4%] rotate-180"
                  : "right-[-45px] top-[8%]"
              } `}
            >
              <img
                src="./images/arrow.webp"
                className="w-[71px] h-[96px] relative"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-2 bg-[#69e4c53f] m-2 p-2 border-[#227c7829] shadow rounded-2xl flex items-center">
          <FontAwesomeIcon
            icon={faBirthdayCake}
            className="text-[#579586] border-4 border-[#649B8E] ml-3 h-[20px] w-[20px] rounded-full p-3"
          />
          <div className="ml-[16%]">
            <h1 className="text-[#579586] text-[23px] font-medium">Birthday</h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-2 bg-[#69e4c53f] m-2 p-2 border-[#227c7829] shadow rounded-2xl flex items-center">
          <FontAwesomeIcon
            icon={faBaby}
            className="text-[#579586] border-4 border-[#649B8E] ml-3 h-[20px] w-[20px] rounded-full p-3"
          />
          <div className="ml-[16%]">
            <h1 className="text-[#579586] text-[23px] font-medium">
              Baby Shower
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="border-2 bg-[#69e4c53f] m-2 p-2 border-[#227c7829] shadow rounded-2xl flex items-center">
          <FontAwesomeIcon
            icon={faOtter}
            className="text-[#579586] border-4 border-[#649B8E] ml-3 h-[20px] w-[20px] rounded-full p-3"
          />
          <div className="ml-[16%]">
            <h1 className="text-[#579586] text-[23px] font-medium">Other</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
