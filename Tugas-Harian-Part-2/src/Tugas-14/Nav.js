import React, {useContext} from "react"
import { Link } from "react-router-dom"
import '../assets/css/App.css';
import { ThemeContext } from "./ThemeColor";

const Nav = () =>{
    const {theme, setTheme} =  useContext(ThemeContext)
    const styleNav = theme === "white"? "white" : "black"
    
    return(
        
        <nav className="navbar-tugas14">
            <ul className={styleNav}>
              <li>
                <Link to="/">Tugas 9</Link>
              </li>
              <li>
                <Link to="/tugas10">Tugas 10</Link>
              </li>
              <li>
                <Link to="/tugas11">Tugas 11</Link>
              </li>
              <li>
                <Link to="/tugas12">Tugas 12</Link>
              </li>
              <li>
                <Link to="/tugas13">Tugas 13</Link>
              </li>
              <li>
                <Link to="/tugas14">Tugas 14</Link>
              </li>
            </ul>
          </nav>
    )
}

export default Nav