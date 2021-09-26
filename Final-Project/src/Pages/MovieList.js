import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Layout , Card , Row , Col, Rate } from 'antd';
import axios from 'axios';

const { Content } = Layout;
const { Meta } = Card;

class MovieList extends Component {
    constructor(props){
        super(props)
        this.state ={
            movie: []
        }
    }

    componentDidMount(){
        axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
        .then(res => {
            let movie = res.data.map(el => {
                return{
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    genre: el.genre,
                    rating: el.rating,
                    duration: el.duration,
                    year: el.year,
                    review: el.review,
                    image_url: el.image_url
                }})
            this.setState({movie})
        })
    }

    truncateString = (str, num) => {
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
                        {this.state.movie.map((item)=>{
                            let url = '/detail-movie/'+item.id
                            return(
                                // <Col span={6} style={{marginTop:"20px"}}>
                                //     <Card
                                //         hoverable
                                //         style={{ width: 200 ,backgroundColor:"#BC750B"}}
                                //         cover={
                                //         <img alt="Movie Image" src={item.image_url} style={{margin: "10px auto", width: "180px" , height: "200px"}}/>
                                //         }
                                //     >
                                //         <Meta title={item.title} description={this.truncateString(item.description, 20)} />
                                //         <br />
                                //         <Link to={url} style={{color: "white"}}>
                                //             <strong>More Info...</strong>
                                //         </Link>
                                //     </Card>
                                // </Col>
                                <>
                                <Col span={4} style={{marginTop:"40px"}}>
                                <div className="card">
                                    <div className="card-image">
                                            <Link to={url}><img className="image-movie" src={item.image_url} /></Link>
                                        </div>
                                        <div className="card-title">
                                            <strong><p className="title">{item.title}</p></strong>
                                            <p className="release-year">{item.year}</p>
                                            <Rate  disabled allowHalf defaultValue={item.rating/2}/>
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

export default MovieList;