import React, { useState } from "react";
import Form from "./containers/Form/Form";
import Profile from "./containers/Profile/Profile";

const App = () => {
  const [formStatus, setFormStatus] = useState({
    formReady: false,
    formData: {},
  });

  const toggleFormReadiness = (data) => {
    setFormStatus({
      formReady: true,
      formData: data,
    });
  };

  return (
    <>
      {formStatus.formReady ? (
        <Profile data={formStatus.formData} />
      ) : (
        <Form readyForm={toggleFormReadiness} />
      )}
    </>
  );
};

export default App;
