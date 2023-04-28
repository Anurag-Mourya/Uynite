import React, { useState } from "react";
import { useSelector } from "react-redux";
const Header = () => {
          const { yourEvent } = useSelector((state) => state?.globalData);


  return (
    <section className="h-[65px] w-full flex bg-white  justify-between">
      <div className=" w-[30%] h-[65px] ml-5">
        <div className="w-[15%] flex items-center">
          <img src="./images/Logo.png" alt="" className=" w-[52px] h-[52px]" />
          <span className=" text-[#05B7FD] flex items-center font-bold">
            <span className="text-5xl font-medium" >U</span>
            <span className="text-2xl" style={{fontFamily: 'Indie Flower, cursive'}}>YNITE</span>
          </span>
        </div>
      </div>

      <div className="w-[35%]">
        <section className="w-full flex h-full items-endrounded-tl-xl rounded-tr-xl relative">
          <div className="absolute top-0 p-1.5 w-full"></div>
          <div className=" h-[80%] flex w-full rounded-t-md items-end px-1 gap-1 ">
            <div
              className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center `}
            >
              <div className="w-[35px] h-full items-center justify-center">
                <img
                  alt=""
                  src="./images/Roots.png"
                  className={`w-[35px] ${yourEvent ? "filter grayscale" : ""}`}
                />
                <h1
                  className={`text-sm font-bold ${
                    yourEvent
                      ? ""
                      : "border-b-2 w-10 text-[#064a65dc] border-[#064a65dc]"
                  }`}
                >
                  Roots
                </h1>
              </div>
            </div>
            <div
              className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center `}
            >
              <div className="w-[35px] h-full items-center justify-center">
                <img alt="" src="./images/watch.png" className="w-[35px]" />
                <h1 className="text-sm font-bold">Kicks</h1>
              </div>
            </div>
            <div
              className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center `}
            >
              <div className="w-[35px] h-full items-center justify-center">
                <img alt="" src="./images/reels.png" className="w-[35px]" />
                <h1 className="text-sm font-bold">Reals</h1>
              </div>
            </div>
            <div
              className={`flex w-[33.33%] items-center rounded-t-md cursor-pointer gap-2 h-[90%] justify-center relative bg-[]`}
            >
              <div className="items-center justify-center bg-gray-300 absolute right- 0 top-0 h-[62px] w-[109px]">
                <img
                  alt=""
                  src="./images/calender.png"
                  className="w-[35px] m-auto"
                />
                <h1 className="text-sm font-bold text-center">Meet</h1>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className=" w-[30%]">
        <div className="w-full flex justify-evenly items-center h-full">
          <div className="flex flex-col items-center cursor-pointer relative">
            <img
              src="./images/chat1.png"
              alt="name"
              className=" h-[30px] contrast-0"
            />

            <div className="lg:text-[10px] xl:text-[12px] font-bold">Chat</div>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative">
            <img
              src="./images/groups.png"
              alt="name"
              className=" h-[30px] contrast-50"
            />

            <div className="lg:text-[10px] xl:text-[12px] font-bold">
              Friends
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative">
            <img
              src="./images/Notifications.png"
              alt="name"
              className=" h-[30px] brightness-50 relative"
            />
            <div className="bg-green-700 absolute w-[19px] h-[18px] rounded-full flex item-center justify-center top-[10%] right-[53%]">
              <span className="text-white text-[11px]">31</span>
            </div>

            <div className="lg:text-[10px] xl:text-[12px] font-bold">
              Notification
            </div>
          </div>
          <div className="flex flex-col items-center cursor-pointer relative">
            <img
              src="./images/menu.png"
              alt="name"
              className=" h-[30px] contrast-50"
            />

            <div className="lg:text-[10px] xl:text-[12px] font-bold">Menu</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
