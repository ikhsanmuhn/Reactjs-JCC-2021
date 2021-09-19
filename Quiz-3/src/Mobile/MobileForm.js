import React, {useContext,useEffect} from "react"
import { useHistory, useParams, Link} from "react-router-dom";
import axios from "axios";
import { Button, message} from 'antd';
import { MobileContext } from "../Context/MobileContext";
import { isNullLiteralTypeAnnotation } from "@babel/types";

const MobileForm = () => {
    const {daftarMobile,setDaftarMobile,fetchSatus,setFetchStatus,input,setInput,currentId,setCurrentId,functions} = useContext(MobileContext)
    const {fetchData,functionSubmit,functionSubmitEdit} = functions
    let {id} = useParams();

    useEffect( () => {
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
        .then((res) => {
            let data = res.data
            setInput(data)
            setCurrentId(data.id)
        })
        if(fetchSatus){
            fetchData()
            setFetchStatus(false)
        }

    }, [fetchSatus, setFetchStatus])

    const handleChange = (event) => {
        
        let value = event.target.value;
        let name = event.target.name;

        switch(name){
            case "name":
                setInput({ ...input, name : value})
                break;
            case "category":
                setInput({ ...input, category : value})
                break;
            case "description":
                setInput({ ...input, description : value})
                break;
            case "release_year":
                setInput({ ...input, release_year : value})
                break;
            case "size":
                setInput({ ...input, size : value})
                break;
            case "price":
                setInput({ ...input, price : value})
                break;
            case "rating":
                setInput({ ...input, rating : value})
                break;
            case "image_url":
                setInput({ ...input, image_url : value})
                break;
            case "is_android_app":
                setInput({ ...input, is_android_app : value})
                console.log(input.is_android_app + "ini change andro")
                break;
            case "is_ios_app":
                setInput({ ...input, is_ios_app : value})
                console.log(input.is_ios_app + "ini change ios")
                break;
            default :
                break;
        }
    }
    
    let history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()

        if (currentId === null){
            functionSubmit()
            console.log(input)
            message.success('Data Berhasil Ditambah');

        }else{
            functionSubmitEdit(currentId)
            message.success('Data Berhasil Diubah');
            console.log(daftarMobile+"edit")
        }      
        
        setCurrentId(null)
        setInput({name:"",description:"",category:"",release_year:"",size:0,price:"",rating:"",image_url:"",
        is_android_app:true, is_ios_app:true})
        history.push("/mobile-list")
        console.log(daftarMobile)
    }

    return(
        <>
            <div className="mobile-form">
                <h1 style={{textAlign:'center'}}>Mobile Apps Form</h1>
                <form onSubmit={handleSubmit}>
            
                    <label>Name :</label>
                    <input type="text" value={input.name} onChange={handleChange} name="name" required/>    
                
                    <label>Category :</label>
                    <input type="text" value={input.category} onChange={handleChange} name="category" required/>
                
                    <label>Description :</label>
                    <textarea onChange={handleChange} value={input.description} name="description" required/>
                
                    <label>Release Year :</label>
                    <input type="number" value={input.release_year} min="2007" max="2021" onChange={handleChange} name="release_year" required/>
                
                    <label>Size (MB) :</label>
                    <input type="number" value={input.size} onChange={handleChange} name="size" required/>
                
                    <label>Price (Rp) :</label>
                    <input type="number" value={input.price} onChange={handleChange} name="price" required/>
                
                    <label>Rating :</label>
                    <input type="number" value={input.rating} min="0" max="5" onChange={handleChange} name="rating" required/>
                
                    <label>Image URL :</label>
                    <input type="text" value={input.image_url} onChange={handleChange} name="image_url" required/>
                
                    <label>Platform :</label>
                    <tbody>
                        <tr><td><input type="checkbox" onChange={handleChange} value={1} name="is_android_app" defaultChecked={input.is_android_app}/>Android</td></tr>
                        <tr><td><input type="checkbox"onChange={handleChange} value={1} name="is_ios_app" defaultChecked={input.is_ios_app}/>IOS</td></tr>
                    </tbody>
                    <button class="button-form">Submit</button>

                </form>
                <Link to="/mobile-list"><Button type="primary">Kembali</Button></Link>
            </div>
        </>
    )
}

export default MobileForm