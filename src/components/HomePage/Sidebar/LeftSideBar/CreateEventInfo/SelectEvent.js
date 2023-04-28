import { faDrawPolygon, faHands, faHouseFlag, faManatSign, faRepublican, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { displayArrow, yourEvent } from '../../../../../redux/StateAction/GlobalReducerAction';
import { displayNone } from '../../../../../redux/StateAction/GlobalReducerAction';

const SelectEvent = () => {
      const { yourEvent:youEventFalse } = useSelector((state) => state?.globalData);
      const { displayNone:displayTrue } = useSelector((state) => state?.globalData);

      const [dis,setDis] = useState(false)
      console.log("youEventFalse", youEventFalse)

      const selectEventHandler = ()=>{
        displayNone(true);
        displayArrow(true)
      }
  return (
    <>
      <div
        className={`w-[32%] bg-[#E6F2EF] h-[570px] float-left mt-2 ml-[1px] ${
          displayTrue ? "hidden" : ""
        }`}
      >
        <div className="flex justify-center items-center p-3">
          <span className="font-bold">Select</span>{" "}
          <span className="ml-4 font-bold text-[#649B8E]">Event</span>
        </div>
        <div className="">
          <div className="border-2 cursor-pointer bg-[#69e4c56d] m-2 p-1 border-[#227c7829] shadow rounded-2xl flex items-center">
            <FontAwesomeIcon
              icon={faHouseFlag}
              className="text-[#579586] border-4 border-[#649B8E] h-[38px] w-[38px] rounded-full p-3"
            />
            <div className="ml-2" onClick={selectEventHandler}>
              <h1 className="text-[#579586] text-[25px] font-bold">Personal</h1>
              <p className="font-medium text-[#707070]">
                Birthday, Reunion, Anniversary etc. With Friends, Relatives,
                Classmates & Officemates
              </p>
            </div>
          </div>
          <div className="border-2 cursor-pointer bg-[#69e4c526] m-2 p-1 border-[#227c7829] shadow rounded-2xl flex items-center">
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#579586] border-4 border-[#649B8E] h-[38px] w-[38px] rounded-full p-3"
            />
            <div className="ml-2" onClick={selectEventHandler}>
              <h1 className="text-[#579586] text-[25px] font-bold">Public</h1>
              <p className="font-medium text-[#707070]">
                Birthday, Reunion, Anniversary etc. With Friends, Relatives,
                Classmates & Officemates
              </p>
            </div>
          </div>
          <div className="border-2 cursor-pointer bg-[#69e4c526] m-2 p-1 border-[#227c7829] shadow rounded-2xl flex items-center">
            <FontAwesomeIcon
              icon={faHands}
              className="text-[#579586] border-4 border-[#649B8E] h-[38px] w-[38px] rounded-full p-3"
            />
            <div className="ml-2" onClick={selectEventHandler}>
              <h1 className="text-[#579586] text-[25px] font-bold">Political</h1>
              <p className="font-medium text-[#707070]">
                Birthday, Reunion, Anniversary etc. With Friends, Relatives,
                Classmates & Officemates
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectEvent