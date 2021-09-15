import React, {useContext} from "react"
import '../assets/css/App.css';
import { MahasiswaContext } from "./MahasiswaContext.js";


const MahasiswaForm = () =>{

    const {input,setInput,currentId,setCurrentId, functions} = useContext(MahasiswaContext)
    const {functionSubmit, functionSubmitEdit} = functions

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
        </div>
        </>
    )
    
}

export default MahasiswaForm;

