import React, {useState} from 'react';
import '../assets/css/App.css';


const Tugas11 = () =>{
    
    const [daftarBuah, setDaftarBuah] = useState([   
            {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
            {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
            {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
            {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
            {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
    ])

    const [input, setInput] = useState(
        {nama: "", hargaTotal:"", beratTotal:""}
    )
    const [currentIndex, setCurrentIndex] = useState(-1)    

    const handleChange = (event) => {
        let value = event.target.value;
        let name = event.target.name;
        
        switch(name){
            case "nama":
                setInput({ ...input, nama : value})
                break;
            case "harga":
                setInput({ ...input, hargaTotal : value})
                break;
            case "berat":
                setInput({ ...input, beratTotal : value})
                break;
            default :
                break;
        }
        
    }

    const handleDelete = (event) => {
        let index = parseInt(event.target.value)
        let deletedItem = daftarBuah[index]
        let newData = daftarBuah.filter((e) => {return e !== deletedItem})
        setDaftarBuah(newData)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {nama, hargaTotal, beratTotal} = input
        let newData = daftarBuah
    
        if (currentIndex === -1 && input.nama != "" && input.hargaTotal !="" && input.beratTotal !="") {
            newData = [...daftarBuah,{ nama, hargaTotal, beratTotal}]
            console.log(newData)
            
        } else{
            newData[currentIndex] = { nama, hargaTotal, beratTotal}
            console.log(newData)
            setCurrentIndex(-1)
        }

        setDaftarBuah(newData)
        setInput({nama:"",hargaTotal:"",beratTotal:""})
    }

    const handleEdit = (event) => {
        let index = parseInt(event.target.value)
        let editValue = daftarBuah[index]
        setInput(editValue)
        setCurrentIndex(event.target.value)
    }
    
    return (
    <>
        <div class="tugas10">   
            <h1>Daftar Harga Buah</h1>
            <table>
            <thead>
                <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Harga Total</th>
                <th>Berat Total</th>
                <th>Harga per KG</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                daftarBuah.map((val, index) => {
                    return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{val.nama}</td>
                        <td>{"Rp. "+val.hargaTotal}</td>
                        <td>{val.beratTotal/1000 + " Kg"}</td>
                        <td>{"Rp. "+(val.hargaTotal / val.beratTotal)*1000}</td>
                        <td>
                        <button class="button-edit" onClick={handleEdit} value={index}>Edit</button>
                        <button class="button-delete" onClick={handleDelete} value={index}>Delete</button>
                        </td>
                    </tr>
                    )
                })
                }
            </tbody>
            </table>

            {/* Form */}
            <h1>Form Peserta</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Nama :
            </label>
            <input type="text" value={input.nama} onChange={handleChange} name="nama" />
            <label>
                Harga Total :
            </label>
            <input type="text" value={input.hargaTotal} onChange={handleChange} name="harga" />
            <label>
                Berat Total (dalam gram) :
            </label>
            <input type="text" value={input.beratTotal} onChange={handleChange} name="berat"/>
            <button class="button-form">Submit</button>
            </form>
        </div>
    </>
    )
    
}

export default Tugas11;