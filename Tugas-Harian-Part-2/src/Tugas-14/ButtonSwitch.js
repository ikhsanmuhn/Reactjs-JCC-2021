import React,{ useContext } from "react";
import { ThemeContext } from "./ThemeColor";
import '../assets/css/App.css';

const ButtonSwitch = () =>{

    const {theme, setTheme} =  useContext(ThemeContext)
    const handleClick = () =>{
        setTheme(theme === "white"? "black" : "white")
        console.log(theme+" di button")
    }
    return(
        <>
            <button onClick={handleClick} className="button-theme">Ganti Tema Navbar</button>
        </>
    )
}

export default ButtonSwitch;