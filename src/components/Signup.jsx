import React from "react";
import { Card, Label, TextInput, Checkbox, Button, Textarea } from "flowbite-react";
import SignupTruck from "../images/zhenyu-luo-Zp5uth4v7yY-unsplash.jpg";
function Signup() {
  return (
    <>
      {/* max-w-sm text-center m-auto */}
      <div className="flex h-screen bg-[#F1FAFF]">
        <div className="border-2 m-auto flex flex-row">
          <div className="max-w-md max-h-md">
            <img
              className="object-scale-down opacity-80"
              src={SignupTruck}
              alt=""
            />
          </div>
          <div className="flex bg-[#FFFFFF]">
            <div className="form-container m-auto p-10 mx-36">
              <p className="text-3xl text-center font-bold tracking-tight text-gray-900 m-2 dark:text-white px-28 py-4">
                Sign Up
              </p>
              <form className="flex flex-col gap-5">
                <div>
                  <TextInput
                    type="text"
                    placeholder="Company Name"
                    required={true}
                  />
                </div>
                <div className="flex flex-row justify-between">
                  <TextInput
                    type="text"
                    placeholder="CIN Number"
                    required={true}
                  />
                  <TextInput
                    type="text"
                    placeholder="Contact Number"
                    required={true}
                  />
                </div>

                <div className="flex flex-row justify-between">
                  <TextInput
                    type="text"
                    placeholder="Applicant Name"
                    required={true}
                  />
                  <TextInput
                    type="text"
                    placeholder="Email Address"
                    required={true}
                  />
                </div>
                <TextInput rows="3" id="large" type="text" placeholder="Company Address" required={true} draggable={false} />
                <TextInput type="text" placeholder="GST Number" required={true} />
                <Button type="submit">Sign Up</Button>
                <p className="my-1">Already have an account ? <a href="#" className="text-blue-500">Sign In.</a></p>
                
              </form>
            </div>
          </div>
        </div>

        {/* <div className="m-auto max-w-sm text-center"><img src={SignupTruck} alt="" className="" />
            </div>
            <div className="m-auto max-w-sm text-center"><h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p></div> */}

        {/* <Card
            horizontal={true}
            imgSrc={SignupTruck}
            className=""
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card> */}
      </div>
    </>
  );
}

export default Signup;
