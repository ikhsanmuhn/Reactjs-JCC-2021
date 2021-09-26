import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Layout , Card , Row , Col } from 'antd';
import axios from 'axios';

const { Content } = Layout;
const { Meta } = Card;

class GamesList extends Component {
    constructor(props){
        super(props)
        this.state ={
            games: []
        }
    }

    componentDidMount(){
        axios.get(`https://backendexample.sanbersy.com/api/data-game`)
        .then(res => {
            let games = res.data.map(el => {
                return{
                    id: el.id,
                    name: el.name,
                    genre: el.genre,
                    release: el.release,
                    platform: el.platform,
                    singlePlayer: el.singlePlayer,
                    multiplayer: el.multiplayer,
                    image_url: el.image_url
                }})
            this.setState({games})
        })
    }

    truncateString(str, num){
        if (str === null){
          return ""
        }else{
          if (str.length <= num) {
            return str
          }
          return str.slice(0, num) + '...'
        }
    }

    render(){
        return(
            <Content style={{backgroundColor: "#8512A1"}}>
                <div className="site-layout-content" style={{padding: "40px 70px"}}>
                    <Row gutter={16}>
                        {this.state.games.map((item)=>{
                            let url = '/detail-games/'+item.id
                            return(
                                <>
                                <Col span={4} style={{marginTop:"40px"}}>
                                <div className="card">
                                    <div className="card-image">
                                        <Link to={url}><img className="image-movie" src={item.image_url} /></Link>
                                    </div>
                                    <div className="card-title">
                                        <strong><p className="title">{item.name}</p></strong>
                                        <p className="release-year">{item.platform}</p>
                                    </div>
                                </div>
                                </Col>
                                </>
                            )
                        })}
                    </Row>
                </div>
            </Content>
        )
    }
}

export default GamesList;