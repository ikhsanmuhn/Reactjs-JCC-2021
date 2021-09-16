import React, {useEffect, useContext} from "react"
import '../assets/css/App.css';
import { useHistory,Link} from "react-router-dom";
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext.js";
import ButtonSwitch from "./ButtonSwitch.js";


const MahasiswaList2 = () =>{
    const {daftarMahasiswa,fetchSatus,setFetchStatus, functions} = useContext(MahasiswaContext)
    const {fetchData, functionDelete} = functions
    useEffect( () => {
        
        if(fetchSatus){
            fetchData()
            setFetchStatus(false)
        }
        
    }, [fetchSatus, setFetchStatus])

    console.log(daftarMahasiswa)
    

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        functionDelete(idData)
    }
    let history = useHistory();
    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        history.push(`/tugas14/${idData}`)
    }

    const indexNilai = (e) =>{
        
        if(e >= 80){
            return "A";
        }
        else if(e >= 70 && e<80){
            return "B"
        }
        else if(e >= 60 && e<70){
            return "C"
        }
        else if(e >= 50 && e<60){
            return "D"
        }
        else if(e<50){
            return "E"
        }   
    }

    return (
    <>
        <div class="tugas10">   
            <center><ButtonSwitch/></center>
            <h1>Daftar Nilai Mahasiswa</h1>
            <Link to="/tugas14/create"><button className="button-nav" type="button">Masukan Data</button></Link>       
            <table>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Mata Kuliah</th>
                <th>Nilai</th>
                <th>Indeks Nilai</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                daftarMahasiswa != null &&(
                    <>
                        {
                        daftarMahasiswa.map((val, index) => {
                            return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.name}</td>
                                <td>{val.course}</td>
                                <td>{val.score}</td>
                                <td>{indexNilai(val.score)}</td>
                                <td>
                                <button class="button-edit" onClick={handleEdit} value={val.id}>Edit</button>
                                <button class="button-delete" onClick={handleDelete} value={val.id}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                        }       
                    </>
                )
                }
            </tbody>
            </table>
        </div>
    </>
    )
    
}

export default MahasiswaList2;