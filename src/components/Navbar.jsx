import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import opt_pro from "../images/opt_pro.png";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import createOrGetUser from "../utils/index";
import useAuthStore from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import StarIcon from '@mui/icons-material/Star';
import LogoutIcon from '@mui/icons-material/Logout';
import PopUp from "./PopUp";

const Navbar = (props) => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const [popUp, savePopUp] = useState(false);
  const closeModal = () => savePopUp(false);

  function setStyle(index){
    var colorIs = "";
    colorIs = "Black";
    const elements = document.getElementsByClassName('navBarIcons');
    for(var i = 0; i < elements.length; i++) {
      if(i === index) {
        elements[i].style.color  = colorIs;
        elements[i].style.boxShadow = "0px 5px 15px #00000059";
      }
    }
  }

  function removeStyle(){
    const elements = document.getElementsByClassName('navBarIcons');
    var colorIs;
    if(props.currentMode === "Light")
      colorIs = "rgb(30 58 138)"
    else
      colorIs = "White";
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.color  = colorIs;
        elements[i].style.boxShadow = "0px 0px 0px";
    }
  }

  
  return (
    <div>
      <div className="relative">
        <div className="w-full pb-3 flex xl:flex-row flex-col xl:justify-end items-end xl:items-center navbar pr-3 pt-3 dark:bg-secondary-dark-bg dark:shadow-none">
          <div className="mr-3">
          </div>
          <p className="xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4">
            {userProfile?.userName
              ? `Welcome, ${userProfile.userName}!`
              : `Welcome!`}
          </p>
          <div title="Rate the app">
            <StarIcon className="navBarIcons xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4"  onMouseEnter={function callBack(){
            setStyle(0);
            }} onMouseLeave={removeStyle} onClick={()=>{savePopUp(true)}}/>
          </div>
          <div title="Logout">
            <LogoutIcon className="navBarIcons xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4" onMouseEnter={function callBack(){
            setStyle(1);
            }} onMouseLeave={removeStyle}/>
          </div>
        </div>
        <div className="options-pro-logo-container absolute top-[20px] left-[20px]">
          <Link to="/">
            <img
              src={opt_pro}
              alt="options-pro-logo"
              className="h-[100px] w-[100px] z-100"
            />
          </Link>
        </div>
        
        <PopUp popUp = {popUp} closeModal={closeModal}/>

      </div>
    </div>
  );
};

export default Navbar;

//klaksjflkshfahkasndfkhaohefrwerjbdhf
//mana varshney
