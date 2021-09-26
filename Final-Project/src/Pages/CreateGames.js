import React, {useContext, useState } from 'react';
import { Layout , Button , Input , Form , InputNumber , Checkbox , Select, message} from 'antd';
import {UserContext} from '../Context/UserContext'
import axios from 'axios'
import {
    useHistory
} from "react-router-dom";



const { Option } = Select;
const { Content } = Layout;
const CreateGames = () => {

    let history = useHistory();
    const [user] = useContext(UserContext)
    const [input,setInput] = useState({
        name: "",
        genre: "",
        release: 1000,
        platform: "",
        singlePlayer: false,
        multiplayer: false,
        image_url: ""
    })

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 20 },
    };
      
    const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
    };
      
    const allGenre = ['Action','Adventure','Horor','Third-person shooter','Battle Royale','Sport'];
    const menuGenre =[]
    for (let i = 0; i < allGenre.length; i++) {
        menuGenre.push(<Option key={allGenre[i]}>{allGenre[i]}</Option>);
    }
        
    const allPlatform = ['Nintendo','Sega','PC','Xbox','Xbox One','Xbox 360','Xbox Series X','Playstation 4','PlayStation 3','PlayStation','Windows','Linux','IOS'];
    const menuPlatform =[]
    for (let i = 0; i < allPlatform.length; i++) {
        menuPlatform.push(<Option key={allPlatform[i]}>{allPlatform[i]}</Option>);
    }

    const handleSubmit = (event) =>{
        let single = 0
        let multi = 0
        if(input.singlePlayer){
            single = 1
        }
        if(input.multiplayer){
            multi = 1
        }
        axios.post(`https://backendexample.sanbersy.com/api/data-game`, {
            name: input.name,genre: input.genre.join(", "),release: input.release,platform: input.platform.join(", "),singlePlayer: single,multiplayer: multi,image_url: input.image_url
        },{headers: {"Authorization" : `Bearer ${user.token}`}})
        .then(res => {
            setInput({name: "",
                genre: "",
                release: 1000,
                platform: "",
                singlePlayer: false,
                multiplayer: false,
                image_url: ""})
                message.success('Game has been added');
                history.push('/games-crud')
        })
    }

    const handleChange = (event) => {
        let value = event.target.value

        if (event.target.id === "name"){
            setInput({...input,name:value});
        }else if(event.target.id === "image_url"){
            setInput({...input,image_url:value});
        }
        console.log(value)
    }

    const handleChangeGenre = (event) => {
        setInput({...input,genre:event});
        console.log(event)
    }

    const handleChangePlatform = (event) => {
        setInput({...input,platform:event});
        console.log(event)
    }

    const handleChangeRelease = (event) => {
        setInput({...input,release:event});
        console.log(event)
    }

    const handleChangePlayer = (event) => {
        let value = event.target.checked

        if (event.target.name === "singlePlayer"){
            setInput({...input,singlePlayer:value});
        }else if(event.target.name === "multiplayer"){
            setInput({...input,multiplayer:value});
        }
        console.log(value)
    }

    return(
        <Content style={{backgroundColor: "#8512A1"}}>
            <div style={{padding: "100px"}}>
                <p style={{fontSize: "20px", color:"#ffffff", float:"left"}}><strong>Add New Games</strong></p>
                <div className="container-create-games">
                    <Form
                        {...layout}
                        onFinish={handleSubmit}
                        >
                        <Form.Item
                        label="Games Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input games name!' }]}
                        >
                        <Input placeholder="Input games name..." onChange={handleChange}/>
                        </Form.Item>

                        <Form.Item
                        label="Genre"
                        name="genre"
                        rules={[{ required: true, message: 'Please input a genre!' }]}
                        >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Select games genre..."
                            onChange={handleChangeGenre}
                            >
                            {menuGenre}
                        </Select>
                        </Form.Item>

                        <Form.Item
                        label="Release Year"
                        name="release"
                        rules={[{ required: true, message: 'Please input a release year!' }]}
                        >
                        <InputNumber min={2002} max={2025} defaultValue={2002} onChange={handleChangeRelease}/>
                        </Form.Item>

                        <Form.Item
                        label="Platform"
                        name="platform"
                        rules={[{ required: true, message: 'Please input a platform!' }]}
                        >
                        <Select
                            mode="multiple"
                            allowClear
                            style={{ width: '100%' }}
                            placeholder="Select games platform..."
                            onChange={handleChangePlatform}
                            >
                            {menuPlatform}
                        </Select>
                        </Form.Item>

                        <Form.Item
                        label="Player"
                        name="player"
                        rules={[{ message: 'Please input a player!' }]}
                        >
                        <Checkbox name="singlePlayer" onChange={handleChangePlayer}>Single Player</Checkbox>
                        <Checkbox name="multiplayer" onChange={handleChangePlayer}>Multi Player</Checkbox>
                        </Form.Item>

                        <Form.Item
                        label="Image Url"
                        name="image_url"
                        rules={[{ required: true, message: 'Please input an image url!' }]}
                        >
                        <Input placeholder="Image Url..." onChange={handleChange}/>
                        </Form.Item>
                        

                        <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit" style={{borderRadius:"5px", width:"50%"}}>
                            Submit
                        </Button>
                        </Form.Item>

                    </Form></div>
            </div>
        </Content>
    )
}

export default CreateGames