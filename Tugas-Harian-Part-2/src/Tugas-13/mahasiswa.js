import React from "react"
import { MahasiswaProvider } from "./MahasiswaContext.js";
import MahasiswaList from './MahasiswaList.js';
import MahasiswaForm from './MahasiswaForm.js';

const Mahasiswa = () =>{
    return(
        <MahasiswaProvider>
            <MahasiswaList/>
            <MahasiswaForm/>
        </MahasiswaProvider>
    )
}

export default Mahasiswa;