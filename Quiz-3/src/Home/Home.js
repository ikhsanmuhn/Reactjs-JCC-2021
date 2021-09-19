import React, {useContext, useEffect, useState} from "react";
import { MobileContext } from "../Context/MobileContext.js";



const Home = () =>{
    
    const {daftarMobile,setDaftarMobile,fetchSatus,setFetchStatus,input,setInput,currentId,setCurrentId,functions} = useContext(MobileContext)
    const {fetchData} = functions

    useEffect( () => {
        
        if(fetchSatus){
            fetchData()
            setFetchStatus(false)
        }
        
    }, [fetchSatus, setFetchStatus])
    
    console.log(daftarMobile)
    const indexPrice = (e) =>{
        if(e > 0){
            return "Free"
        }
        else{
            return "Rp. " + e
        }
    }

    const indexSize = (e) =>{
        if(e > 1000){
            let sizeHasil = e/1000
            return sizeHasil + " GB"
        }
        else{
            return e + " MB"
        }
    }

    return (
        <>  
            <div className="row">
                <div className="section">
                    <div className="card">
                        <div>
                            <h1 style={{textAlign:"center"}}>Popular Mobile Apps</h1>
                            <>
                                {
                                daftarMobile.map((val) => {
                                    return(
                                        <>
                                        <h2>{val.name}</h2>
                                        <h5>Release Year : {val.release_year}</h5>
                                        <img className="fakeimg" src={val.image_url} />
                                        <br />
                                        <br />
                                        <div>
                                            <strong>Price: {indexPrice(val.price)}</strong><br />
                                            <strong>Rating: {val.rating}</strong><br />
                                            <strong>Size: {indexSize(val.size)}</strong><br />
                                            <strong style={{marginRight:10+ 'px'}}>Platform : {val.platform}
                                            </strong>
                                            <br />
                                        </div>
                                        <p>
                                            <strong style={{marginRight:10+ 'px'}}>Description :</strong>
                                            {val.description}
                                        </p>
                                        </>
                                    )
                                })
                                }
                            </>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home