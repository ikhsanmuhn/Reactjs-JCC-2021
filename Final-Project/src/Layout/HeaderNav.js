import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { Layout, Menu , Dropdown } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {UserContext} from '../Context/UserContext'
import logo from "../Assets/img/logo-white.png"

const { Header } = Layout;

const HeaderNav =() =>{
  
  const [user] = useContext(UserContext)

  const menu = (
    <Menu style={{backgroundColor: "#4D0D80", fontSize: "13px", color: "white",textAlign:"center"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      <Menu.Item key="2"><Link to="/login"><strong>Login</strong></Link></Menu.Item>
      <Menu.Item key="1"><Link to="/register"><strong>Register</strong></Link></Menu.Item>
    </Menu>
  );

  return(
      <Header className="header-navbar" style={{backgroundColor: "#4D0D80"}}>
        <img className="logo"src={logo}/>
        <Menu style={{backgroundColor: "#4D0D80", fontSize: "13px", color: "white",textAlign:"center", display:"flex",justifyContent:"center"}} theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
              <Menu.Item ><Link to="/"><strong>Home</strong></Link></Menu.Item>
              <Menu.Item><Link to="/movie-list"><strong>Movie List</strong></Link></Menu.Item>
              <Menu.Item><Link to="/games-list"><strong>Games List</strong></Link></Menu.Item>
              {user === null && (
                <>
                    <Dropdown overlay={menu}>
                      <Menu.Item>
                      <Link style={{marginLeft: "10px", marginRight: "10px", color: "#ffffff"}}className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <UserOutlined style={{color: "#ffffff"}}/>
                      </Link>
                      </Menu.Item>
                    </Dropdown>
                </>
              )}
        </Menu>
      </Header>
  )
}

export default HeaderNav