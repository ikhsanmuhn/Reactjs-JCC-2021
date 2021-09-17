import React, { useState, createContext } from "react";
import axios from "axios"
import '../assets/css/App.css';

export const MahasiswaContext = createContext();

export const MahasiswaProvider = props =>{
    const [daftarMahasiswa, setDaftarMahasiswa] = useState([])
    const [fetchSatus, setFetchStatus] = useState(true)
    const [input, setInput] = useState(
        {name: "", course:"", score:0}
    )
    const [currentId, setCurrentId] = useState(null)   
    
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
    
    const fetchData = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
        let data = result.data
        setDaftarMahasiswa(data.map((x, index)=>{ 
            let indexScore = indexNilai(x.score)
            return {no: index +1, id: x.id, name: x.name, course: x.course, score: x.score, indexScore: indexScore} 
        }))   
    }

    const functionDelete = (event) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${event}`)
        .then((e) => {
            console.log(e)
            setFetchStatus(true)
          })
    }

    const functionSubmit = () =>{
        axios.post(` http://backendexample.sanbercloud.com/api/student-scores`, {name : input.name, course: input.course, score: input.score})
            .then(res => {
                console.log(res)
                setFetchStatus(true)
                
            })
    }
    
    const functionSubmitEdit = (event) => {
        axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${event}`, {name : input.name, course: input.course, score: input.score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
    }

    const functionEdit = (event) => {
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${event}`)
        .then(res => {
            let data = res.data
            setInput(data)
            setCurrentId(data.id)
          })
    }
    

    const functions = {
        fetchData,
        functionDelete,
        functionSubmit,
        functionSubmitEdit,
        functionEdit
    }

    return(
        <MahasiswaContext.Provider value={{
            daftarMahasiswa,
            setDaftarMahasiswa,
            fetchSatus,
            setFetchStatus,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions
        }}>
            {props.children}
        </MahasiswaContext.Provider>
    )
}