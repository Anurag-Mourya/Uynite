import React from "react";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import SelectEvent from "../LeftSideBar/CreateEventInfo/SelectEvent";
import CreateEvent from "../LeftSideBar/CreateEventInfo/CreateEvent";

const EventBox = () => {
  return (
    <>
      {/* page 1 */}
      {/* <div className="w-[65%] flex items-center h-[570px] justify-center border-[#0c0a0a4d] border-[3px] bg-white float-right mt-2 mr-[2%]">
        <div className="border w-[430px] h-[290px] rounded-[84px] bg-[#F5F5F5] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-[#649B8E] font-bold ml-3 text-lg mb-[10%]">
              Your Events
            </h1>
            <p className="mb-[19%] text-[#707070] font-bold">
              Create events by relations and locatins
            </p>
          </div>
        </div>
      </div>  */}


      {/* page 4 */}
        <div className="w-[65%] flex items-center h-[570px] justify-center border-[#0c0a0a4d] border-[3px] bg-white float-right mt-2 mr-[2%]">    
          <div className="border w-[430px] h-[290px] rounded-[84px] bg-[#F5F5F5] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-[#649B8E] font-bold ml-3 text-lg mb-[10%]">
                Your Events
              </h1>
              <p className="mb-[19%] text-[#707070] font-bold">
                Create events by relations and locatins
              </p>
            </div>
          </div>
        </div>
    </>
  );
};

export default EventBox;
