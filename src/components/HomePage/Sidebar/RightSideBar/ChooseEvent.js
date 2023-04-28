import React from "react";
import { useSelector } from "react-redux";
import { displayArrow, openPage4, yourEvent } from "../../../../redux/StateAction/GlobalReducerAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { displayNone } from "../../../../redux/StateAction/GlobalReducerAction";

const ChooseEvent = () => {
    const { yourEvent:youEventFalse } = useSelector((state) => state?.globalData);
          const { displayNone:displayTrue } = useSelector((state) => state?.globalData);


    const createEvent = ()=>{
        yourEvent(true);
        displayNone(false);
        openPage4(false)
    }

    const yourEventHandler = ()=>{
      yourEvent(false)
      openPage4(false);
       displayNone(false);
       displayArrow(false);

    }

  return (
    <div className="w-[65%] flex items-center px-3 py-1 border-[#0c0a0a4d] border-[3px] bg-white float-right mt-2 mr-[2%] rounded-lg">
      <div
        className="flex items-center cursor-pointer bg"
        onClick={createEvent}
      >
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={`${youEventFalse ? "text-[#649B8E]" : "text-[gray]"} w-[32px] h-[32px]`}
        />

        <span
          className={`${youEventFalse ? "text-[#649B8E]" : ""} font-bold ml-3`}
        >
          Create Event
        </span>
      </div>

      <div
        className="flex items-center justify-center ml-[4.875rem] cursor-pointer"
        onClick={yourEventHandler}
      >
        <div
          className={`${
            youEventFalse ? "" : "bg-[#649B8E]"
          }  flex items-center justify-center w-[40px] h-[40px] rounded-full`}
        >
          <img src="./images/calender.png" className="w-[32px] h-[30px]"></img>
        </div>
        <span
          className={`${youEventFalse ? "" : "text-[#649B8E]"} font-bold ml-3`}
        >
          Your Events
        </span>
      </div>
    </div>
  );
};

export default ChooseEvent;
