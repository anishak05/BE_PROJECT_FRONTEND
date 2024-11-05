import React from "react";
import { Card } from "flowbite-react";
import PortImage from "../images/output-onlinejpgtools.jpg";
import AddUser from "../images/add-user.png";
import Delivery from "../images/delivery.png";
import Invitation from "../images/invitation.png";
import AddMessage from "../images/add-message.svg";

function Body() {
  return (
    <div>
      <div className="w-full h-screen relative">
        <img
          className="object-cover h-full w-full opacity-80"
          src={PortImage}
          alt="Landing Page Logo"
        />
      </div>
      <div className="py-9">
        <h2 className="text-3xl text-center">PRECISE TRACKING SERVICES</h2>
        <hr className="border-0 h-0.5 bg-slate-500 w-1/4 mx-auto mt-2" />
      </div>

      <div className="flex justify-evenly">
        <div className="max-w-sm drop-shadow-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm drop-shadow-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
        <div className="max-w-sm drop-shadow-sm">
          <Card
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </Card>
        </div>
      </div>
      <div className="py-9">
        <h2 className="text-3xl text-center">
          SIGNUP AND TRACK IN A FEW HASSLE FREE STEPS
        </h2>
        <hr className="border-0 h-0.5 bg-slate-500 w-1/3 mx-auto mt-2" />
      </div>

      <div className="flex justify-around">
        
        <div className="group hover:text-black-variant">
          <a href="">
          <img className="h-20 w-20" src={AddMessage} alt="AddMessage Logo"/>
          <h2 className="text-center py-5 font-semibold">Register</h2>
          </a>
        </div>
      
        <div>
          <img className="h-20 w-20" src={Delivery} alt="Delivery Logo" />
          <h2 className="text-center py-5 font-semibold">Invite</h2>
        </div>

        <div>
          <img className="h-20 w-20" src={Invitation} alt="Invitation Logo" />
          <h2 className="text-center py-5 font-semibold">Track</h2>
        </div>
      </div>
    </div>
  );
}

export default Body;
