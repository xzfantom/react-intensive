import "./App.css";
import React from "react";
import {CustomTemplate} from "./components/CustomTemplate/CustomTemplate";
import CustomForm from "./components/CustomForm/CustomForm";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    changeState = (state) => {
        this.setState({
            ...state, showModal: true,
        });
    };

    backToForm = () => {
        this.setState({
            showModal: false,
        });
    };

    render() {
        if (this.state.showModal) {
            const {
                firstName, lastName, date, phone, link, userAbout, userSteak, projectDescrip, showModal,
            } = this.state;
            return (<CustomTemplate
                firstName={firstName}
                lastName={lastName}
                date={date}
                phone={phone}
                link={link}
                about={userAbout}
                stack={userSteak}
                project={projectDescrip}
                backToForm={this.backToForm}
                showModal={showModal}
            />);
        }

        return <CustomForm changeState={this.changeState}/>;
    }
}

export default App;
