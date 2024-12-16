"use client";
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FaHeadphones } from "react-icons/fa6"
import { FaSave } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Textarea } from "@/components/ui/textarea"
import { IoLayers } from "react-icons/io5";
import { GrRotateLeft } from "react-icons/gr";
import { GrRotateRight } from "react-icons/gr";
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { FiRefreshCw } from "react-icons/fi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FaPlay } from "react-icons/fa";
import Pausebtn from "./ui/Pausebtn";
import { FaLongArrowAltRight } from "react-icons/fa";

import Model from './Modal'

// import SearchBar from "./SearchBar";


const Main = () => {
  const [text, setText] = React.useState("");
  const [sliderValue, setSliderValue] = React.useState(0);
  const [voiceSpeed, setVoiceSpeed] = React.useState(0);
  const [voicePitch, setVoicePitch] = React.useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [results, setResults] = React.useState([])
  const [searchResults, setSearchResults] = useState([]);

  const [showModel, setShowModel] = React.useState(false)

  const [showListBar , setShowListBar] = React.useState(false);




  const resetVal = () => {
    setSliderValue(0);
    setVoiceSpeed(0);
    setVoicePitch(0);
  }
  const handleResults = (results) => {
    setSearchResults(results);
  };

  const toggleSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };
  const handleCheckboxChange = (checked) => {
    setIsChecked(checked);
  };

  const handleAiVoice = (aiVal) => {
    setVoicePitch(aiVal)
  }

  const changeVoice = (myVal) => {
    setVoiceSpeed(myVal)
  }

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSliderChange = (newValue) => {
    setSliderValue(newValue);
  };
  const [selectedVoice, setSelectedVoice] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTextChange = (e) => {
    setSelectedVoice(e.target.value);
  };


  return (
    <main className=" m-3 md:m-8 p-2  shadow-deep-shadow rounded-[40px]  mt-6 md:mx-[10vw] bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-6 items-center  ">
        {/* First Column (Spans 3 columns on larger screens) */}
        <div className="col-span-1 md:col-span-3  text-white  rounded-lg w-full">
          <div className=" shadow-custom shadow-md  flex flex-row mt-2  md:mt-4 border-[1px] border-[#d4dbe6] h-20 bg-[#C6C6C61A]   md:my-2 my-1 md:mx-4 mx-1 rounded-3xl md:ml-9 p-2 mb-2 md:rounded-3xl text-lg items-center md: overflow-x-auto whitespace-nowrap ">

            <span className=" align-middle justify-between m-1 md:m-2 md:ml-5 bg-[#2fbb66] font-bold  flex flex-row items-center   text-[#fff] rounded-[30px] py-[2px] px-[2px] md:py-1.5 md:px-2 ">
              <svg

                width="40"
                height="18"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path className=""
                  d="M5.49999 1L1.04672 6.34393C0.872316 6.55321 0.785114 6.65785 0.783781 6.74623C0.782622 6.82306 0.816858 6.89615 0.87662 6.94445C0.945366 7 1.08158 7 1.35401 7H4.99999L4.49999 11L8.95326 5.65607C9.12767 5.44679 9.21487 5.34215 9.2162 5.25377C9.21736 5.17694 9.18313 5.10385 9.12336 5.05555C9.05462 5 8.9184 5 8.64598 5H4.99999L5.49999 1Z"
                  stroke="#FCFCFD"
                ></path>
              </svg>
              <p className="pr-2 md:pr-1">{"Pro+"}</p>
            </span>
            <span className="  overflow-hidden  w-[100%] scrollbar-hide md:overflow-y-hidden text-sm  tracking-normal md:text-[22px] text-[#1b1d22] "> {' Pro1 Thomas - Smooth and deep (M) / Multilingual'}</span>
            <span > <Button className=" inline-block md:mb-1.5   font-bold color text-[#007bff] hover:text-[#206cc2] text-sm md:text-xl  " variant="link">Change</Button></span>
          </div>
        </div>

        {/* Second Column (Spans 1 column on larger screens) */}
        <div className="col-span-1 m-3 sm:col-span-1   items-center  rounded-lg md:p-4 md:m-0">
          <ul className="flex  md:flex-row items-center   md:gap-3 gap-1  md:pt-4 transition-all duration-300 ease-in-out">
            <li className="text-black  bg-[#8791A51A] p-2   md:p-4 rounded-2xl  "><FaHeadphones size={30} /></li>
            <li className="text-black  bg-[#8791A51A] p-2 md:p-[14px] rounded-2xl">< FaSave size={30} className="bg-[#f7f7f7]" /></li>
            <li className="text-black  bg-[#8791A51A] p-2 md:p-[14px] rounded-2xl "><IoSettingsSharp size={30} className="bg-[#f7f7f7]" /></li>
            <li className="md:hidden"><button className="gap-1  bg-gray-100 p-2 md:p-3  rounded-2xl flex text-lg flex-row items-center  align-center  md:text-[22px] md:mr-3 ml-3  text-[#1b1d22]"><IoLayers size={20} />Multi Editor</button></li>
          </ul>
        </div>

        {/* Third Column (Spans 2 columns on larger screens) */}
        <div className=" hidden md:block col-span-1 sm:col-span-1 md:col-start-6 rounded-lg md:items-end">
          <button className=" hover:bg-[#D1D1D1]   bg-[#8791A51A] overflow-hidden relative cursor-pointer  py-2.5 px-4 rounded-2xl flex flex-row text-center items-center  align-center  text-[22px] text-[#1b1d22]"><IoLayers />Multi Editor</button>

        </div>
      </div>



      <div className="grid grid-cols-3 gap-2  md:gap-10 md:m-9 ">

        <div className="col-span-3 md:col-span-2 border-slate-300  border-2 bg-[#F8F9FA]  rounded-3xl shadow-sm">
          <div className="flex flex-row md:gap-2 items-center">
            <button className="md:w-12 md:h-12 border hover:bg-[#f7f7f7] my-1 ml-1 w-10 h-10 md:ml-2 mr-1 bg-white text-base border-[#e9e9e9] text-white rounded-full flex items-center justify-center">
              <span  ><GrRotateLeft size={25} fontWeight={900} color="#212529" />  </span>
            </button>
            <button className="md:w-12 hover:bg-[#f7f7f7] md:h-12 w-10 h-10 border my-1 mr-1 bg-white border-[#e9e9e9] font-bold rounded-full flex items-center justify-center">
              <span> <GrRotateRight size={25} fontWeight={900} color="#212529" /></span>
            </button>

            <div className="border-l  leading-7 border-slate-300 h-16 mt-[10px] mx-1 bg-gray-100"></div>

          
                  <div  
                    className="border  hover:bg-[#f7f7f7] bg-white border-[#e9e9e9] items-center rounded-full text-[10px] flex flex-row text-[#242424]    md:text-[20px] md:px-4  px-3 py-3 text-wrap " >
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        color="#007bff"
                        d="M5.49999 1L1.04672 6.34393C0.872316 6.55321 0.785114 6.65785 0.783781 6.74623C0.782622 6.82306 0.816858 6.89615 0.87662 6.94445C0.945366 7 1.08158 7 1.35401 7H4.99999L4.49999 11L8.95326 5.65607C9.12767 5.44679 9.21487 5.34215 9.2162 5.25377C9.21736 5.17694 9.18313 5.10385 9.12336 5.05555C9.05462 5 8.9184 5 8.64598 5H4.99999L5.49999 1Z"
                        stroke="#007bff"
                      ></path>
                    </svg>
                    Pro 1 Language 
                    {/* { showListBar && <SearchBar onClose={() => setShowListBar(true)}/>} */}
                  </div>
          
            <span className="border hover:bg-[#f7f7f7] bg-white border-[#e9e9e9] rounded-full text-black from-neutral-950 md:text-[20px]   text-[14px] px-3 md:px-4 py-3 " ><Pausebtn /></span>
          </div>

          <div className=" w-full  border-slate-300  border-2 bg-gray-100 md:mt-1 mt-1  "></div>
          <div className="flex  md:flex flex-row bg-white md:h-[80vh] text-sm md:text-xl">

            <Textarea

              value={selectedVoice}
              onChange={handleTextChange}
            />

          </div>
          <div className="flex flex-row text-xs md:text-sm  md:xl justify-between items-center w-full gap-4">
            <div className="flex flex-row items-center gap-1 p-2">
              <span>{0}</span>/
              <span>{ }chars used</span>
            </div>

            <div className="flex flex-row items-center gap-4">
              <span>
                <small>
                  <a href="#" className="text-[#007bff] flex items-center gap-1">
                    <i><FaLongArrowAltRight /></i>
                    Get more characters
                  </a>
                </small>
              </span>
              <button className="p-2  border-none font-normal text-base text-[#3b3b3b] no-underline bg-transparent">
                Clear text
              </button>
            </div>
          </div>

        </div>




        {/* Right Side (Spans 1 column) */}
        <div className="col-span-3 md:col-span-1 ">
          <div className="border-slate-300  h-fit border-2 pt-6 rounded-2xl shadow-sm">
            <ul className="flex flex-row gap-2 md:gap-9 justify-center md:flex  items-center  tracking-normal md:text-[22px] text-sm text-[#343434] font-normal ">
              <Tabs defaultValue="account" className="w-full justify-center flex  flex-col items-center" >
                <TabsList>
                  <TabsTrigger value="account"> <li className="  relative flex items-center text-lg md:text-[22px] " ><p>Voice Effects</p></li></TabsTrigger>
                  <TabsTrigger value="password"> <li className=" text-[#242424] relative flex  items-center   md:text-[22px] text-lg ">Voice Settings</li></TabsTrigger>
                </TabsList>
                <div className="w-full  h-[2px] bg-gray-300 mt-[14px]"></div>
                <TabsContent value="account">
                  <div className="flex flex-row items-center mx-2 my-2 md:mx-8 md:my-8 "><Checkbox id="locked-checkbox" checked={true} onCheckedChange={null} />
                    <label htmlFor="locked-checkbox" className="text-2xl  font-medium leading-none">
                      <p className="text-[#5095f8] ml-[10px] font-normal">Default</p>
                    </label>
                  </div>
                </TabsContent>
                <TabsContent value="password">
                  <div className="flex flex-col  justify-center align-middle">
                    <div className="py-5 font-light ml-5"> {"Voice Volume"}</div>
                    <div className="w-full pl-5 mr-[15px]  flex flex-row items-center justify-evenly gap-12"><Slider
                      defaultValue={[0]} max={20} min={-20} step={1}
                      value={[sliderValue]}
                      onValueChange={(newValue) => handleSliderChange(newValue[0])}
                    /> <output className="border mr-5 text-center bg-white border-[#e9e9e9] rounded-[24px] text-[#242424] from-neutral-950  text-base  px-2   py-2 w-28">{sliderValue}dB </output></div>
                  </div>

                  <div className="flex flex-col  justify-center align-middle">
                    <div className="py-5 font-light ml-5"> {"Voice Speed"}</div>
                    <div className="w-full pl-5 mr-[15px]  flex flex-row items-center justify-evenly gap-12"><Slider
                      defaultValue={[0]} max={100} min={-100} step={1}
                      value={[voiceSpeed]}
                      onValueChange={(myValue) => changeVoice(myValue[0])}
                    /> <output className="border mr-5 bg-white text-center border-[#e9e9e9] rounded-[24px] text-[#242424] from-neutral-950 text-base px-2  py-2 w-28">{voiceSpeed}%  </output></div>
                  </div>

                  <div className="flex flex-col  justify-center align-middle">
                    <div className="py-5 font-light ml-5"> {"Voice Pitch"}</div>
                    <div className="w-full pl-5 mr-[15px]  flex flex-row items-center justify-evenly gap-12"><Slider
                      defaultValue={[0]} max={100} min={-100} step={1}
                      value={[voicePitch]}
                      onValueChange={(aiVal) => handleAiVoice(aiVal[0])}
                    /> <output className="border mr-5 bg-white border-[#e9e9e9] text-center rounded-[24px] text-[#242424] from-neutral-950  text-base pl-3  px-2  py-2 w-28">{voicePitch}% </output></div>
                  </div>
                  <div className="w-full h-[2px] bg-gray-100 mt-10"></div>
                  <div className="flex flex-row items-end justify-between  gap-2 px-5 py-4 ">
                    <div></div>
                    <button onClick={resetVal} className="border border-[#e9e9e9]  flex flex-row items-center text-center hover:bg-[#f1f1f1] active:text-white bg-white active:bg-[#6c757d] rounded-[24px] text-[#212529] text-[20px] gap-2 px-3 py-2 ">
                      <FiRefreshCw

                        onClick={resetVal}
                      />
                      Reset
                    </button>
                  </div>
                </TabsContent>
              </Tabs>
            </ul>
          </div>
          <div className="col-span-3 md:col-span-1   justify-center bg-white   rounded-2xl shadow-sm ">
            <h3 className="  tracking-normal text-sm mb-2 md:text-[22px] text-[#4c555a] py-4 font-medium">Audio Settings</h3>
            <div className=" w-full px-5 py-4  flex flex-row  mt-4 border-slate-300  border-2 h-20  bg-white  shadow-lg  my-2   rounded-3xl  md:rounded-3xl text-lg items-center md: overflow-x-auto whitespace-nowrap" >
              <div className="grid grid-cols-2 gap-5 align-middle   md:gap-10">
                <div className="bg-white  px-5   flex items-start justify-start gap-1 mr-1">
                  <p>{'MP3 - 48000Hz'}</p>
                </div>
                <div className="bg-white w-full  px-5  flex items-end justify-end gap-1  ml-1">
                  <a onClick={() => setShowModel(true)} className="inline-block mb-2 text-[#007bff] hover:text-[#206cc2] md:text-xl">
                    Change
                  </a>
                  {showModel && <Model onClose={() => setShowModel(false)} />}

                </div>
              </div>
            </div>

          </div>
          <div className="w-full py-3 hover-box flex flex-row mb-2 justify-center items-center mt-4  font-semibold border-slate-300 border-2 h-20 bg-[#2E90FA] hover:bg-[#206cc2] shadow-lg rounded-3xl md:rounded-3xl text-lg">
            <div className="flex flex-row text-center items-center gap-2">
              <div><FaPlay color="white" /></div>
              <span className="text-white font-semibold">CONVERT TO SPEECH</span>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
};

export default Main;