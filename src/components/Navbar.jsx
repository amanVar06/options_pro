import React, { useState } from "react";
import logo from "../images/logo.jpeg";
import opt_pro from "../images/opt_pro.png";
import createOrGetUser from "../utils/index";
import { Button } from "antd";
import useAuthStore from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import StarIcon from "@mui/icons-material/Star";
import LogoutIcon from "@mui/icons-material/Logout";
import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const BlackSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: grey["A100"],
    "&:hover": {
      backgroundColor: alpha(grey[900], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: grey[50],
  },
}));

const Navbar = (props) => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const navigate = useNavigate();
  return (
    <div>
      <div className="relative">
        <div className="w-full pb-3 flex xl:flex-row flex-col xl:justify-end items-end xl:items-center navbar pr-3 pt-3 dark:bg-secondary-dark-bg dark:shadow-none">
          <div className="mr-3">
            <Button type="primary" onClick={() => navigate("/feedback")}>
              Redirect
            </Button>
          </div>
          <p className="xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4">
            {userProfile?.userName
              ? `Welcome, ${userProfile.userName}!`
              : `Welcome!`}
          </p>
          <div title="Change theme">
            {/* <Switch
          defaultUnChecked
           onChange={handleChange}
          id="NavBarToggle" color="default"/> */}

            <BlackSwitch
              defaultUnChecked
              onChange={handleChange}
              id="NavBarToggle"
            />
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
      </div>
    </div>
  );
};

export default Navbar;
