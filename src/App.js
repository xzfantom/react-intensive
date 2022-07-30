import React, {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import CustomForm from "./Components/CustomForm/CustomForm";
import CustomTemplate from "./Components/CustomTemplate/CustomTemplate";

const App = (props) => {
    const [state, setState] = useState({showModal: false});
    const changeState = (state) => {
        setState({
            ...state,
            showModal: true,
        });
    };

    const backToForm = () => {
        setState({
            showModal: false,
        });
    };

    if (state.showModal) {
        const {
            firstName,
            lastName,
            date,
            phone,
            link,
            userAbout,
            userSteak,
            projectDescrip,
            showModal,
        } = state;
        return (
            <Routes basename={process.env.PUBLIC_URL}>
                <Route
                    path="/"
                    element={
                        <CustomTemplate
                            firstName={firstName}
                            lastName={lastName}
                            date={date}
                            phone={phone}
                            link={link}
                            about={userAbout}
                            stack={userSteak}
                            project={projectDescrip}
                            backToForm={backToForm}
                            showModal={showModal}
                        />
                    }
                />
            </Routes>
        );
    }

    return (
        <Routes basename={process.env.PUBLIC_URL}>
            <Route path="/" element={<CustomForm changeState={changeState}/>}/>
        </Routes>
    );
};

export default App;
