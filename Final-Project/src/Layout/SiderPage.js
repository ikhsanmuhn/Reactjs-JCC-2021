import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Layout, Menu, message } from 'antd';
import { UserOutlined, DatabaseOutlined} from '@ant-design/icons';
import {UserContext} from '../Context/UserContext'

const { SubMenu } = Menu;
const { Sider } = Layout;

const SiderPage = () => {

  const [user,setUser] = useContext(UserContext)
  const [lenMovie, setLenMovie] =  useState(null)
  const [lenGames, setLenGames] =  useState(null)

  const handleLogout = () =>{
    setUser(null)
    localStorage.removeItem("user")
    message.success('Logout Success');
  }
  

  useEffect( () => {
      axios.get(`https://backendexample.sanbersy.com/api/data-movie`)
      .then(res => {
          let movie = res.data
            setLenMovie(movie.length)
      })
      axios.get(`https://backendexample.sanbersy.com/api/data-game`)
          .then(res => {
            let games = res.data
            setLenGames(games.length)
          })
  }, [lenMovie,lenGames])

  const strNama = "Welcome "+user.name+"!"

  return (
            <Sider width={200} className="site-layout-background">
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 ,backgroundColor: "#2f0e53"}}
                >
                <SubMenu key="sub1" icon={<UserOutlined />} title={strNama} style={{color:"white",backgroundColor: "#2f0e53"}}>
                  <Menu style={{backgroundColor: "#ffffff"}}>
                    <Menu.Item ><Link to="/change-password"><strong>Change Password</strong></Link></Menu.Item>
                    <Menu.Item ><span onClick={handleLogout}><strong>Logout</strong></span></Menu.Item>
                  </Menu>
                </SubMenu>
                
                <SubMenu key="sub2" icon={<DatabaseOutlined />} title="Data" style={{color:"white"}}>
                  <Menu style={{backgroundColor: "#ffffff"}}>
                    <Menu.Item><Link to="/movie-crud"><strong>Movie Data</strong></Link></Menu.Item>
                    <Menu.Item><Link to="/games-crud"><strong>Games Data</strong></Link></Menu.Item>
                  </Menu>
                </SubMenu>

                </Menu>
            </Sider>
  );
}

export default SiderPage;
