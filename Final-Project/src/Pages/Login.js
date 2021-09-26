import React, { useContext, useState } from "react"
import {UserContext} from "../Context/UserContext"
import bgLogin from '../Assets/img/bg-login.jpg'
import {useHistory} from 'react-router-dom'
import axios from "axios"
import { Layout , Button , Input , Form, message } from 'antd';
const { Content } = Layout;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () =>{

  let history = useHistory()
  const [, setUser] = useContext(UserContext)
  const [input, setInput] = useState({email: "" , password: ""})

  const handleSubmit = (event) =>{
    axios.post("https://backendexample.sanbersy.com/api/user-login", {
      email: input.email, 
      password: input.password
    }).then(
      (res)=>{
        var user = res.data.user
        var token = res.data.token
        var currentUser = {name: user.name, email: user.email, token }
        setUser(currentUser)
        localStorage.setItem("user", JSON.stringify(currentUser))
        message.success('Login Success',3);
        history.push('/')
      }
    ).catch((err)=>{
      message.error('Login Failed : '+err.response.data);
    })
  }

  const handleChange = (event) =>{
    let value = event.target.value
    let name = event.target.id
    switch (name){
      case "email":{
        setInput({...input, email: value})
        break;
      }
      case "password":{
        setInput({...input, password: value})
        break;
      }
      default:{break;}
    }
  }

  return(
    <Content style={{backgroundImage:"../Assets/img/bg-login.jpg"}}>
        <p style={{fontSize: "80px",textAlign: "left", margin:"100px",position:"absolute"}}><strong>Login</strong></p>
        <div className="container-login">
          <Form
              {...layout}
              onFinish={handleSubmit}
            >
            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input style={{width:"100%",borderRadius:"5px"}} onChange={handleChange}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password style={{width:"100%",borderRadius:"5px"}} onChange={handleChange}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button style={{width:"100%",borderRadius:"5px"}} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>

              <p style={{float: "right"}}>Don't have an account? <a href="/register" style={{color: "white"}}> <u>Create free account</u> </a></p>

          </Form>
        </div>
    </Content>
  )
}

export default Login