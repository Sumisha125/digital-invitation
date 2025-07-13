import React from "react";
import formbg from "./assets/images/formbg.jpg";

function Form({ formData, onChange, setShowCard }) {
  return (
    <div className="h-screen w-screen relative overflow-hidden">
      <img
        src={formbg}
        alt="background"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[33%] h-[75%]"
      />

      <form
        onSubmit={(e) => e.preventDefault()} // prevent submit for demo
        className="absolute top-[55%] left-1/2 max-w-md w-11/12 bg-opacity-90 p-6  transform -translate-x-1/2 -translate-y-1/2"
      >
        <input
          type="text"
          name="eventName"
          placeholder="Event Name"
          value={formData.eventName}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <input
          type="text"
          name="host"
          placeholder="Host"
          value={formData.host}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <input
          type="text"
          name="venue"
          placeholder="Venue"
          value={formData.venue}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={onChange}
          className="w-full p-2 border rounded mb-3 text-2xl"
        />
        <div className="flex justify-center mt-4">
          <button
            type="button"
            onClick={() => setShowCard(true)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded shadow text-2xl"
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
