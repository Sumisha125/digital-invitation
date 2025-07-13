import "./App.css";
import Invitation from "./Invitation";
import Form from "./Form";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    eventName: "",
    host: "",
    date: "",
    time: "",
    venue: "",
    message: "",
  });

  const [showCard, setShowCard] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {!showCard && (
        <Form
          formData={formData}
          onChange={handleChange}
          setShowCard={setShowCard}
        />
      )}

      {showCard && (
        <Invitation
          eventName={formData.eventName}
          host={formData.host}
          date={formData.date}
          time={formData.time}
          venue={formData.venue}
          message={formData.message}
        />
      )}
    </>
  );
}
export default App;
