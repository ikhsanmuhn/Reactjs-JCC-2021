import React, { useState, useContext } from "react"
import { UserContext } from "../Context/UserContext"
import axios from "axios"
import {useHistory} from 'react-router-dom'
import { Layout , Button , Input , Form, message } from 'antd';


const { Content } = Layout;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const ChangePassword = () =>{

  let history = useHistory()
  const [user] = useContext(UserContext)
  const [input, setInput] = useState({current_password: "", new_password: "", new_confirm_password: ""})
  
  const handleSubmit = (event) =>{
    axios.post(`https://backendexample.sanbersy.com/api/change-password`, {
      current_password: event.current_password, 
      new_password: event.new_password, new_confirm_password: event.new_confirm_password
    }, {
      headers: {"Authorization" : `Bearer ${user.token}`}})
    .then(res => {
        message.success('Changing Password Succes',3);
        setInput({current_password: "", new_password: "", new_confirm_password: ""})
        history.push('/')
      }).catch((err)=>{
        message.error('Changing Password Failed : '+err.response.data,3);
        console.log(err.response.data)
        console.log(err.response)
        setInput({current_password: "", new_password: "", new_confirm_password: ""})
    })

  }
  
  const handleChange = (event)=>{
    let typeOfInput = event.target.id
    let value = event.target.value

    console.log(typeOfInput)
    
    if (typeOfInput === "current_password"){
      setInput({...input, current_password: value})
    }else if (typeOfInput === "new_password"){
      setInput({...input, new_password: value})
    }else if (typeOfInput === "new_confirm_password"){
      setInput({...input, new_confirm_password: value})
    }
  }
  
    return(
      <Content style={{backgroundColor: "#8512A1"}}>
         <p style={{fontSize: "50px",textAlign: "left", marginTop:"150px",marginLeft:"80px",color:"white",position:"absolute"}}><strong>Change Password</strong></p>
        <div className="container-change">
          <Form
              {...layout}
              onFinish={handleSubmit}
              autoComplete="off"
              method="post"

            >
            <Form.Item
              label="Old Password"
              name="current_password"
              rules={[{ required: true, message: 'Please input your old password!' }]}
            >
              <Input.Password style={{marginLeft:"40px",width:"100%",borderRadius:"5px"}}/>
            </Form.Item>

            <Form.Item
              label="New Password"
              name="new_password"
              rules={[{ required: true, message: 'Please input your new password!' }]}
            >
              <Input.Password style={{marginLeft:"40px",width:"100%",borderRadius:"5px"}}/>
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="new_confirm_password"
              rules={[{ required: true, message: 'Please confirm your new password!' }]}
            >
              <Input.Password style={{width:"100%",marginLeft:"40px",borderRadius:"5px"}}/>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit" style={{width:"100%",marginLeft:"40px",borderRadius:"5px"}}>
                Save 
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
    )
  }
  
  export default ChangePassword