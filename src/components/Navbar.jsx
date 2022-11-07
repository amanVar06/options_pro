import React from "react";
import logo from "../images/logo.jpeg";
import opt_pro from "../images/opt_pro.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import createOrGetUser from "../utils/index";
import { Button, Switch } from "antd";
import useAuthStore from "../store/authStore";
import { Link, useNavigate } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore();
  const navigate = useNavigate();

  const onSwitchToggle = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div>
      <div className="relative">
        <div className="w-full pb-3 flex xl:flex-row flex-col xl:justify-end items-end xl:items-center navbar pr-3 pt-3 dark:bg-secondary-dark-bg dark:shadow-none">
          <div className="mr-3">
            <Switch defaultChecked onChange={onSwitchToggle} />
          </div>
          <div className="mr-3">
            <Button
              className="bg-blue-500"
              type="primary"
              onClick={() => navigate("/feedback")}
            >
              Redirect
            </Button>
          </div>
          <p className="xl:text-lg sm:text-sm font-bold flex-nowrap text-blue-900 dark:text-white mr-4">
            {userProfile?.userName
              ? `Welcome, ${userProfile.userName}!`
              : `Welcome!`}
          </p>
          {userProfile ? (
            <div className="flex gap-3 md:gap-5">
              {userProfile.image && (
                <Link to="/">
                  <>
                    <div className="w-[45px] h-[45px] rounded-full">
                      <img
                        // width={45}
                        // height={45}
                        className="rounded-full cursor-pointer dark:border-dashed dark:border-white dark:border-2"
                        src={userProfile.image}
                        alt="profile"
                      />
                    </div>
                  </>
                </Link>
              )}

              <button
                type="button"
                className="px-2 h-[45px] w-[45px] border-red-600 border-2 rounded-full"
                onClick={() => {
                  googleLogout();
                  removeUser();
                }}
              >
                <AiOutlineLogout color="red" fontSize={25} />
              </button>
            </div>
          ) : (
            // <div>{userProfile.userName}</div>
            <GoogleLogin
              onSuccess={(response) => createOrGetUser(response, addUser)}
              onError={(error) => console.log(error)}
            />
          )}
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

//klaksjflkshfahkasndfkhaohefrwerjbdhf
//mana varshney
