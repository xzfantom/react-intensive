import React, {Component} from "react";
class Header extends Component {
    state = {
        header: ""
    }
    render() {
        const {header} = this.state
        return(   <div>
        <h1>Создание анкеты:{header}</h1>
    </div>
        )
    }
}

export default Header