import React from "react"

function Header({name}){
    return <nav className="header-main">
        <div className="header-wrapper">
            <ul className="header-span">
                <span>Ваш никнейм: {name}</span>
            </ul>
        </div>
    </nav>
}

export {Header}