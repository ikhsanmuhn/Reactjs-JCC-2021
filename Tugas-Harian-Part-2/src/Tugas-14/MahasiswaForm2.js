import React, {useContext,useEffect} from "react"
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext";
import { useHistory, useParams, Link} from "react-router-dom";
import axios from "axios";
import '../assets/css/App.css';


const MahasiswaForm2 = () =>{
    const {input,setInput,currentId,setCurrentId, functions} = useContext(MahasiswaContext)
    const {functionSubmit, functionSubmitEdit} = functions
    
    let {slug} = useParams();
    useEffect( () => {
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${slug}`)
        .then((res) => {
            let data = res.data
            setInput(data)
            setCurrentId(data.id)
        })
        
    }, [])
    
    const handleChange = (event) => {
        
        let value = event.target.value;
        let name = event.target.name;

        switch(name){
            case "name":
                setInput({ ...input, name : value})
                break;
            case "course":
                setInput({ ...input, course : value})
                break;
            case "score":
                setInput({ ...input, score : value})
                break;
            default :
                break;
        }
    }
    let history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
        let name = input.name
        let course = input.course
        let score = input.score

        if (currentId === null){
            functionSubmit()

        }else{
            functionSubmitEdit(currentId)
        }      
        
        setCurrentId(null)
        setInput({name:"",course:"",score:0})
        history.push("/tugas14")
    }

    return(
        <>
        {/* Form */}
        <div class="tugas10">
            <h1>Form Nilai Mahasiswa</h1>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nama :  
                    </label>
                <input type="text" value={input.name} onChange={handleChange} name="name" required/>
                    <label>
                        Mata Kuliah :
                    </label>
                <input type="text" value={input.course} onChange={handleChange} name="course" required/>
                    <label>
                        Nilai :
                    </label>
                <input type="number" value={input.score} onChange={handleChange} min="0" max="100" name="score" required/>
                    <button class="button-form">Submit</button>
            </form>
            <Link to="/tugas14"><button class="button-nav" type="button">Kembali</button></Link>
        </div>
        </>
    )
    
}

export default MahasiswaForm2;

