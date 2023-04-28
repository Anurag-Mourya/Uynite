import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import CreateEvent from "../LeftSideBar/CreateEventInfo/CreateEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import LeftSidebar from "../LeftSideBar/LeftSidebar";
import { yourEvent } from "../../../../redux/StateAction/GlobalReducerAction";
import { useSelector } from "react-redux";
import SelectEvent from "../LeftSideBar/CreateEventInfo/SelectEvent";

const EventBox = () => {
  const { yourEvent: youEventFalse } = useSelector(
    (state) => state?.globalData
  );
  const { openPage4 } = useSelector((state) => state?.globalData);
  const { yourEvent } = useSelector((state) => state?.globalData);
  const { displayNone } = useSelector((state) => state?.globalData);
  console.log("dis", openPage4);

  const [open, setOpen] = useState(0);

 const handleOpen = (value) => {
   setOpen(open === value ? 0 : value);
 };



  // for page no - 04
  function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }
  return (
    <>
      {/* page no 1 */}
      <div className={`w-[65%] flex items-center h-[570px] justify-center border-[#0c0a0a4d] border-[3px] bg-white float-right mt-2 mr-[2%] ${openPage4 && "hidden"}`}>
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

      {/* page no4 */}
      {openPage4 && (
        <div className="">
          <div className="w-[65%] items-center h-[510px] relative  border-[#0c0a0a4d] border-[3px] bg-white float-right mt-2 mr-[2%]">
            <div className="absolute top-0 flex justify-between w-full mt-4">
              <div className="font-bold text-[#515050] text-xl float-right mx-4 items-center">
                Create Event
              </div>
              <img src="./images/eye.png" className="w-[33px] h-[28px] mx-20" />
            </div>
            <div className="border-b-4 w-[90%] absolute top-12 left-[2%]"></div>

            <div className="absolute top-12 flex justify-between w-full mt-4">
              <div className="ml-5">
                <h1 className="text-[#579586] text-[22px] font-medium">
                  Re-Union
                </h1>
              </div>
            </div>
            <div className="border-b-2 w-[90%] border-[#707070] absolute top-28 left-[2%]"></div>

            <div className="border w-[92%] h-[310px] bg-[#a1a1a145] flex items-center justify-center m-auto mt-[15%]">
              <img src="./images/upload.png" className="mt-5 w-[47%]" />
            </div>
            <div className="flex justify-center w-full mt-4 p-1 bg-white">
              <div className="ml-5">
                <h1 className="text-[#579586] font-medium">Select Templete</h1>
              </div>
            </div>
            <div className="bg-white pb-5">
              <div className=" mb-5">
                <input
                  type="text"
                  className="p-2 w-[92%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-9"
                  placeholder="Event Title *"
                />
              </div>
              <div className="bg-white mt-10">
                <input
                  type="text"
                  className="p-2 w-[92%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-9"
                  placeholder="Start Date & Time *"
                />
              </div>
              <div className="bg-white mt-10">
                <input
                  type="text"
                  className="p-2 w-[92%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-9"
                  placeholder="End Date & Time *"
                />
              </div>

              <div className="flex mt-5">
                <div className="flex items-center mr-4">
                  <sapn className="text-2xl ml-10 text-[#707070] font-bold">
                    Event Mode
                  </sapn>
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-10"
                  />
                  <label
                    for="inline-radio"
                    className="ml-2 text-sm font-medium text-gray-500"
                  >
                    cation
                  </label>
                </div>
                <div className="flex items-center mr-4 ml-10">
                  <input
                    id="inline-radio"
                    type="radio"
                    value=""
                    name="inline-radio-group"
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ml-10"
                  />

                  <label
                    for="inline-2-radio"
                    className="ml-2 text-sm font-medium text-gray-500"
                  >
                    Location
                  </label>
                </div>
              </div>

              <div className="bg-white mt-5">
                <input
                  type="text"
                  className="p-2 w-[92%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-9"
                  placeholder="Location"
                />
              </div>
              <div className="bg-white mt-5 ml-3 ">
                <input
                  type="text"
                  className="p-2 w-[12%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-5 placeholder:text-xl"
                  placeholder="USA +1" disabled
                />
                <input
                  type="text"
                  className="p-2 w-[80%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-5 "
                  placeholder="Host Phone Number"
                />
              </div>

              <div className="bg-white mt-5">
                <input
                  type="text"
                  className="p-2 w-[92%] text-sm border-b-2 border-gray-400 outline-none placeholder:text-[#707070] placeholder:font-medium ml-9"
                  placeholder="Host Mail Id"
                />
              </div>
              <div className="flex items-center mx-10 my-5">
                <FontAwesomeIcon
                  icon={faUser}
                  className="text-[white] border-4 bg-[#649B8E] h-[30px] w-[30px] rounded-full p-3"
                />
                <label className="font-medium text-[#649b8e] ml-3">
                  Add Guest
                </label>
              </div>
              <div className="ml-[40px]">
                <Fragment>
                  <Accordion
                    open={open === 1}
                    icon={<Icon id={1} open={open} style={{ magrin: "0px" }} />}
                  >
                    <AccordionHeader
                      style={{ magrin: "0px" }}
                      onClick={() => handleOpen(1)}
                      className="w-[90%] text-gray-500 font-bold text-md"
                    >
                      Guest-list Display to all
                    </AccordionHeader>
                    {/* <AccordionBody className="">
                      <div className="advanced my-0">
                        <div className="flex mx-3">Guest 1</div>
                      </div>
                      <div className="advanced my-0">
                        <div className="flex mx-3">Guest 1</div>
                      </div>
                      <div className="advanced my-0">
                        <div className="flex mx-3">Guest 1</div>
                      </div>
                      <div className="advanced my-0">
                        <div className="flex mx-3">Guest 1</div>
                      </div>
                    </AccordionBody> */}
                    <hr className="w-[90%] h-0.5 bg-gray-300 border-0 rounded md:my-3 mb-3 dark:bg-black-900" />
                  </Accordion>
                </Fragment>
              </div>
              <div className=" mx-[40px] mt-5">
                <label className="text-gray-500 font-bold text-md">
                  Food Availability
                </label>
                <label className="relative inline-flex items-center cursor-pointer float-right">
                  <input type="checkbox" value="" className="sr-only peer" />
                  <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 dark:bg-green-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                  <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
                </label>
              </div>

              <div className="relative my-5 mx-[40px]" data-te-input-wrapper-init>
                <textarea
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-2 bg-neutral-100 px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-500 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:bg-white dark:text-neutral-500  dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput50"
                  aria-label="readonly input example"
                  readonly
                />
                <label
                  for="exampleFormControlInput50"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"
                >
                  Add Event
                </label>
              </div>

              <div>
                <button className="bg-[#649B8E] w-[95%] ml-5 hover:bg-[#649b8e99] text-white font-bold py-2 px-4 rounded-full">
                  Button
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* page no1 */}

      {youEventFalse ? (
        ""
      ) : (
        <div className="w-[32%] overflow-x-hidden overwebkithidden h-[570px] border-[#0c0a0a4d] border-[3px] bg-white float-left mt-2 ml-[1px]">
          <LeftSidebar />
        </div>
      )}

      {/* page no2*/}
      {youEventFalse && <SelectEvent />}

      {/* pagen no3 */}
      {displayNone && <CreateEvent />}
    </>
  );
};

export default EventBox;
