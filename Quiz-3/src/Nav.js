import React, {useContext} from "react"
import logo from './assets/img/logo.png';
import { Link, useHistory } from "react-router-dom"
import { useState } from "react";

const Nav = () =>{
    let history = useHistory();

    const [nilaiSearch, setNIlaiSearch] = useState()

    const handleChangeSearch = (event) => {
        let value = event.target.value;
        setNIlaiSearch(value);

    }

    const handleSearch = () => {
        let valueOfSearch = nilaiSearch
        history.push(`/search/${valueOfSearch}`)
    }
    return(
        <>
        <div className="topnav">
            <Link to="/"><img src={logo} width="70" /></Link>
            <Link to="/">Home</Link>
            <Link to="/mobile-list">Mobile List</Link>
            <Link to="/about">About</Link>
            <form onSubmit={handleSearch}>
                <input type="text" onChange={handleChangeSearch} name="search"/>
                <input type="submit" value="Cari" />
            </form>
        </div>
        </>
        
    )
}
export default Nav