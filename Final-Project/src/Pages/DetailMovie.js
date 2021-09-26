import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { Col, Layout, Rate, Row } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import {
    useParams
} from "react-router-dom";


const { Content } = Layout;
const DetailMovie = () => {

    let { id } = useParams();
    const [currentID, setCurrentID] = useState(null)
    const [movie, setMovie] = useState({
        title: "",
        description: "",
        genre: "",
        rating: 0,
        duration: 0,
        year: 1000,
        review: "",
        image_url: ""
    })

    useEffect( () => {
    if (currentID === null){
        axios.get(`https://backendexample.sanbersy.com/api/data-movie/${id}`)
        .then(res => {
            let data = res.data
            setMovie({
                title: data.title,
                description: data.description,
                genre: data.genre,
                rating: data.rating,
                duration: data.duration,
                year: data.year,
                review: data.review,
                image_url: data.image_url
            })
            setCurrentID(id)
        })
    }
    }, [currentID, setCurrentID])

    const handleConvertMinute = (minute) =>{
    const jam = parseInt(minute /60)
    const menit = minute % (jam*60)
    if (jam === 0){
        return menit+" menit"
    }else{
        return jam+" jam "+menit+" menit"
    }
    }
    let ratingBintang = movie.rating/2
    return(
        <Content style={{backgroundColor: "#8512a1"}}>
            <div className="site-layout-content" style={{padding: "50px"}}>
                <h1 style={{fontSize: "20px", color:"#ffffff",}}><strong>Detail Movie</strong></h1>
                <div style={{display: "flex"}}>
                {
                    <>
                        <div style={{float: "left", display: "inline-block",marginRight:"20px"}}>
                            <img src={movie.image_url} alt="Image" style={{width:"250px",height:"322px", objectFit: "cover", borderRadius:"10px", boxShadow:"5px  5px 20px 5px #181818d0"}}/>
                        </div>
                        <div style={{float:"left", marginLeft:"50px"}}>
                            <p style={{fontSize: "30px",marginBottom: "0px",color:"#ffffff"}}><strong>{movie.title}</strong>&nbsp;      ({movie.year})</p>
                            <Rate allowHalf disabled defaultValue={movie.rating/2} /><span style={{fontSize: "15px",marginBottom: "0px",color:"#ffffff", marginLeft:"10px"}}>{movie.rating}</span>
                            
                            <div className="detail" style={{marginTop:"50px"}}>
                                <p style={{fontSize: "15px",marginBottom: "0px", color:"#ffffff"}}>{movie.genre}&nbsp; | &nbsp;<ClockCircleOutlined style={{color: "#ffffff"}}/>&nbsp;&nbsp;{handleConvertMinute(movie.duration)}</p>
                                <Row gutter={24}>
                                    <Col span={2}>
                                        <p style={{fontSize: "20px",float:"left",marginBottom: "0px",marginTop:"10px", color:"#ffffff"}}><strong>Description</strong></p>
                                    </Col>
                                    <Col span={10}>
                                        <p style={{textAlign:"left",fontSize: "12px",float:"left",marginBottom: "0px",marginTop:"15px",marginLeft: "85px",color:"#ffffff"}}>{movie.description}</p>
                                    </Col>
                                    <Col span={2}>
                                        <p style={{fontSize: "20px",marginBottom: "0px",marginTop:"10px", color:"#ffffff"}}><strong>Reviews</strong></p>
                                    </Col>    
                                    <Col span={10}>
                                        <p style={{textAlign:"left",fontSize: "12px",marginBottom: "0px",marginTop:"15px",marginLeft: "50px",color:"#ffffff"}}>{movie.review}</p>        
                                    </Col>
                                </Row>
                            </div>    
                        </div>
                    </>
                }
                </div>
            </div>
        </Content>
    )

}

export default DetailMovie