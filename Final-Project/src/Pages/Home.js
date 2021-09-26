import React, {useState, useEffect} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { Layout , Card,  Row, Tabs, Rate } from 'antd';
import bgLanding from '../Assets/img/bg-landing.jpg'

const { Content } = Layout;

const Home = () => {

    const [movie, setMovie] =  useState(null)
    const [games, setGames] =  useState(null)
    const [topReleaseMovie, setTopReleaseMovie] =  useState(null)
    const [topReleaseGames, setTopReleaseGames] =  useState(null)

    useEffect( () => {
        if (movie === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
          .then(res => {
                const dataMovieAll = res.data
                const topFourMovie = dataMovieAll.sort(handleCompareMovie).slice(0,4)
                setTopReleaseMovie(topFourMovie.length)
                setMovie(topFourMovie.map(el=>{ return {
                    id: el.id,
                    title: el.title,
                    description: el.description,
                    genre: el.genre,
                    rating: el.rating,
                    duration: el.duration,
                    year: el.year,
                    review: el.review,
                    image_url: el.image_url
                }
                }))
          })
        }
      }, [movie])

    useEffect( () => {
        if (games === null){
          axios.get(`https://backendexample.sanbersy.com/api/data-game`)
          .then(res => {
                const dataGamesAll = res.data
                const topFourGames = dataGamesAll.sort(handleCompareGames).slice(0,4)
                setTopReleaseGames(topFourGames.length)
                setGames(topFourGames.map(el=>{ return {
                    id: el.id,
                    name: el.name,
                    genre: el.genre,
                    release: el.release,
                    platform: el.platform,
                    singlePlayer: el.singlePlayer,
                    multiplayer: el.multiplayer,
                    image_url: el.image_url
                }
                }))
          })
        }
      }, [games])

      const handleCompareMovie = (a, b) => {
        const bandA = a.year;
        const bandB = b.year;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison * -1;
      }

      const handleCompareGames = (a, b) => {
        const bandA = a.release;
        const bandB = b.release;
      
        let comparison = 0;
        if (bandA > bandB) {
          comparison = 1;
        } else if (bandA < bandB) {
          comparison = -1;
        }
        return comparison * -1;
      }


    return(
        <>
        <Content>
        <div className="site-layout-content">
            <img className="imgLanding" src={bgLanding} />
        </div>
        </Content> 
        <Content style={{backgroundColor: "#8512A1"}}>
            <div className="site-layout-content" style={{padding: "40px 70px"}}>
                <strong><h1 style={{fontSize: "40px", color:"#ffffff"}}>Top {topReleaseMovie} Latest Release Movie</h1></strong>
                <div className="site-card-wrapper">
                    <Row gutter={16}>
                        {movie !== null && movie.map((item)=>{
                            let url = '/detail-movie/'+item.id
                            return(
                                <>
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
                                </>
                            )})
                        }
                        <div className="card" >
                            <Link to="/movie-list">
                                <div className="image-movie" style={{backgroundColor:"#2f0e53",opacity:"30%"}}>
                                <h5 style={{fontSize: "13px", color:"#ffffff", textAlign:"center",paddingTop:"100px"}}>More..</h5>
                                </div>
                            </Link>
                        </div>
                    </Row>
                </div>                 
                <strong><h1 style={{fontSize: "40px", color:"#ffffff", marginTop:"100px"}}>Top {topReleaseGames} Latest Release Games</h1></strong>
                <div className="site-card-wrapper">
                <Row gutter={16}>
                        {games !== null && games.map((item)=>{
                            let url = '/detail-games/'+item.id
                            return(
                                <>
                                <div className="card">
                                    <div className="card-image">
                                        <Link to={url}><img className="image-movie" src={item.image_url} /></Link>
                                    </div>
                                    <div className="card-title">
                                        <strong><p className="title">{item.name}</p></strong>
                                        <p className="release-year">{item.platform}</p>
                                    </div>
                                </div>
                                </>
                            )})
                        }
                        <div className="card" >
                            <Link to="/games-list">
                                <div className="image-movie" style={{backgroundColor:"#2f0e53",opacity:"30%"}}>
                                <h5 style={{fontSize: "13px", color:"#ffffff", textAlign:"center",paddingTop:"100px"}}>More..</h5>
                                </div>
                            </Link>
                        </div>
                    </Row>
                </div>
            </div>
        </Content>
        </> 
    )
}

export default Home;