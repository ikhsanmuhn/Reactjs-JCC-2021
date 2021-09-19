import React, { useState, createContext } from "react";
import axios from "axios"

export const MobileContext = createContext();

export const MobileProvider = props => {
    const [daftarMobile, setDaftarMobile] = useState([])
    const [fetchSatus, setFetchStatus] = useState(true)
    const [currentId, setCurrentId] = useState(null)
    const [input, setInput] = useState(
        {name:"",description:"",category:"",release_year:"",size:0,price:"",rating:"",image_url:"",
        is_android_app:true, is_ios_app:true}
    )
    
    const indexPlatform = (andro, ios) =>{
        if(andro === 1 && ios === 0){
            return "Android";
        }
        else if(andro === 0 && ios === 1){
            return "iOS"
        }
        else if(andro === 1 && ios === 1){
            return "Andorid & iOS"
        }   
    }
    const fetchData = async () => {
        const result = await axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps`)
        let data = result.data
        setDaftarMobile(data.map((x, index)=>{ 
            let platform = indexPlatform(x.is_android_app, x.is_ios_app)
            return {
                no: index +1, 
                id: x.id, 
                name: x.name, 
                description: x.description,
                category: x.category,
                release_year: x.release_year,
                size: x.size,
                price: x.price,
                rating: x.rating,
                image_url: x.image_url,
                is_android_app: x.is_android_app,
                is_ios_app: x.is_ios_app,
                platform: platform
            } 
        }))   
    }
    const functionDelete = (event) => {
        axios.delete(`http://backendexample.sanbercloud.com/api/mobile-apps/${event}`)
        .then((e) => {
            console.log(e)
            setFetchStatus(true)
          })
    }

    const functionEdit = (event) => {
        axios.get(`http://backendexample.sanbercloud.com/api/mobile-apps/${event}`)
        .then(res => {
            let data = res.data
            setInput(data)
            setCurrentId(data.id)
          })
    }

    const functionSubmit = () =>{
        axios.post(` http://backendexample.sanbercloud.com/api/mobile-apps`, {
                name: input.name, 
                description: input.description,
                category: input.category,
                release_year: input.release_year,
                size: input.size,
                price: input.price,
                rating: input.rating,
                image_url: input.image_url,
                is_android_app: input.is_android_app,
                is_ios_app: input.is_ios_app})
            .then(res => {
                console.log(res)
                setFetchStatus(true)
                
                
            })
    }
    
    const functionSubmitEdit = (event) => {
        axios.put(`http://backendexample.sanbercloud.com/api/mobile-apps/${event}`, {
                name: input.name, 
                description: input.description,
                category: input.category,
                release_year: input.release_year,
                size: input.size,
                price: input.price,
                rating: input.rating,
                image_url: input.image_url,
                is_android_app: input.is_android_app,
                is_ios_app: input.is_ios_app})
            .then((res) => {
                console.log(res)
                setFetchStatus(true)
            })
    }

    const functions = {
        fetchData,
        functionDelete,
        functionEdit,
        functionSubmitEdit,
        functionSubmit
    }

    return(
        <MobileContext.Provider value={{
            daftarMobile,
            setDaftarMobile,
            fetchSatus,
            setFetchStatus,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions
        }}>
            {props.children}
        </MobileContext.Provider>
    )

}