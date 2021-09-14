import React, {useState, useEffect} from "react"
import axios from "axios"
import '../assets/css/App.css';

const Tugas12 = () =>{
    
    const [daftarMahasiswa, setDaftarMahasiswa] = useState([])
    const [fetchSatus, setFetchStatus] = useState(true)
    
    const [input, setInput] = useState(
        {name: "", course:"", score:0}
    )
    const [currentId, setCurrentId] = useState(null)    

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios.get(`http://backendexample.sanbercloud.com/api/student-scores`)
            let data = result.data
            setDaftarMahasiswa(data.map((x)=>{ 
                let {id, name, course,score} = x
                return {id, name, course,score} 
            }))   
        }
        if(fetchSatus){
            fetchData()
            setFetchStatus(false)
        }
        
    }, [fetchSatus, setFetchStatus])

    console.log(daftarMahasiswa)
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

    const handleDelete = (event) => {
        let idData = parseInt(event.target.value)
        axios.delete(`http://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then((e) => {
            console.log(e)
            setFetchStatus(true)
          })
    }
 
    const handleSubmit = (event) => {
        event.preventDefault()
        let name = input.name
        let course = input.course
        let score = input.score

        if (currentId === null){
            axios.post(` http://backendexample.sanbercloud.com/api/student-scores`, {name, course, score})
            .then(res => {
                console.log(res)
                setFetchStatus(true)
            })

        }else{
            axios.put(`http://backendexample.sanbercloud.com/api/student-scores/${currentId}`, {name, course, score})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
        }      
        
        setCurrentId(null)
        setInput({name:"",course:"",score:0})
    }

    const handleEdit = (event) => {
        let idData = parseInt(event.target.value)
        axios.get(`http://backendexample.sanbercloud.com/api/student-scores/${idData}`)
        .then(res => {
            let data = res.data
            setInput(data)
            setCurrentId(data.id)
          })
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
            <h1>Daftar Nilai Mahasiswa</h1>
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

            {/* Form */}
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

export default Tugas12;