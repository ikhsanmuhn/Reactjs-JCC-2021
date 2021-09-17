import React,{ useContext } from "react";
import { ThemeContext } from "./ThemeColor";
import '../assets/css/App.css';
import { Switch } from 'antd';

const ButtonSwitch = () =>{

    const {theme, setTheme} =  useContext(ThemeContext)
    const handleClick = () =>{
        setTheme(theme === "white"? "black" : "white")
        console.log(theme+" di button")
    }
    return(
        <>
            <Switch checkedChildren="Dark" unCheckedChildren="Light" defaultUnChecked onClick={handleClick}/>
        </>
    )
}

export default ButtonSwitch;