import React, { useState , useEffect } from 'react';
import axios from 'axios'
import { Col, Layout, Row } from 'antd';
import {
    useParams
} from "react-router-dom";


const { Content } = Layout;
const DetailGames = () => {

    let { id } = useParams();
    const [currentID, setCurrentID] = useState(null)
    const [games, setGames] = useState({
        name: "",
        genre: "",
        release: 1000,
        platform: "",
        singlePlayer: false,
        multiplayer: true,
        image_url: ""
    })

    useEffect( () => {
        if (currentID === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game/${id}`)
          .then(res => {
                let data = res.data
                setGames({
                    name: data.name,
                    genre: data.genre,
                    release: data.release,
                    platform: data.platform,
                    singlePlayer: data.singlePlayer,
                    multiplayer: data.multiplayer,
                    image_url: data.image_url
                })
                setCurrentID(id)
          })
        }
      }, [currentID, setCurrentID])

    const handleCekPlayer = (kondisi,cek) => {
        if(kondisi){
            if(cek==="single"){
                return <li >SinglePlayer</li>
            }else {
                return <li >MultiPlayer</li>
            }
        }
    }

    return(
        <Content style={{backgroundColor: "#8512a1"}}>
            <div className="site-layout-content" style={{padding: "50px"}}>
                <h1 style={{fontSize: "20px", color:"#ffffff",}}><strong>Detail Games</strong></h1>
                <div style={{display: "flex"}}>
                {
                    <>
                    <div style={{float: "left", display: "inline-block",marginRight:"20px"}}>
                        <img src={games.image_url} alt="Image" style={{width:"250px",height:"322px", objectFit: "cover", borderRadius:"10px", boxShadow:"5px  5px 20px 5px #181818d0"}}/>
                    </div>
                    <div style={{float:"left", marginLeft:"50px"}}>
                        <p style={{fontSize: "30px",marginBottom: "0px",color:"#ffffff"}}><strong>{games.name}</strong>&nbsp;      ({games.release})</p>
                        <div className="detail" style={{marginTop:"50px"}}>
                            <p style={{fontSize: "15px",marginBottom: "0px", color:"#ffffff"}}>{games.genre}&nbsp; | &nbsp;{games.platform}</p>
                            <Row gutter={16}>
                                <Col span={4}>
                                    <p style={{fontSize: "20px",marginBottom: "0px",color: "#ffffff",marginTop:"10px"}}><strong>Gameplay </strong></p>
                                </Col>
                                <Col span={12}>
                                <ul style={{listStylePosition: "inside",textDecoration:"none",listStyle:"none",fontSize: "15px",marginBottom: "0px",marginTop:"20px",color: "#ffffff",marginLeft:"20px"}}>
                                    {handleCekPlayer(games.singlePlayer,"single")}
                                    {handleCekPlayer(games.multiplayer,"multi")}
                                </ul>
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

export default DetailGames