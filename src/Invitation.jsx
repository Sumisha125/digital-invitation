import React from "react";
import bg3 from "./assets/images/bg3.jpg";

function Invitation(props) {
  return (
    <div className="h-screen w-screen relative">
      <img
        src={bg3}
        alt="background"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[70%] md:w-[60%] lg:w-[50%] h-auto"
      />

      <div className="relative z-10 flex items-center justify-center h-full w-full">
        <div className="bg-black bg-opacity-10 backdrop-blur-md p-8 rounded-xl text-white text-center max-w-lg w-full space-y-4 shadow-lg">
          <h1 className="text-3xl font-bold">{props.eventName}</h1>
          <p>
            <strong>Hosted by:</strong> {props.host}
          </p>
          <p>
            {props.date} at {props.time}
          </p>
          <p>{props.venue}</p>
          <p className="italic ">{props.message}</p>
        </div>
      </div>
    </div>
  );
}

export default Invitation;
