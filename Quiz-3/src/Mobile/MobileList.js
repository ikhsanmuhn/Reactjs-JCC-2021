import React, {useEffect, useContext} from "react"
import { Button, message } from 'antd';
import { Table, Tag, Space } from 'antd';
import { MobileContext } from "../Context/MobileContext.js";
import { Link, useHistory } from "react-router-dom";
import { DeleteFilled,EditFilled } from '@ant-design/icons';

const MobileList = () =>{
    const {daftarMobile,setDaftarMobile,fetchSatus,setFetchStatus,input,setInput,currentId,setCurrentId,functions} = useContext(MobileContext)
    const {fetchData,functionDelete} = functions

    useEffect( () => {    
      if(fetchSatus){
        fetchData()
        setFetchStatus(false)
      }
        
    }, [fetchSatus, setFetchStatus])

    const handleDelete = (event) => {
      let idData = parseInt(event.currentTarget.value)
      functionDelete(idData)
      message.success('Data Berhasil Dihapus');
    }

    let history = useHistory();
    const handleEdit = (event) => {
        let idData = parseInt(event.currentTarget.value)
        history.push(`/mobile-form/edit/${idData}`)
    }

    const columns = [
        {
            title: 'No',
            dataIndex: 'no',
            key: 'no',
          },
        {
          title: 'Category',
          dataIndex: 'category',
          key: 'category',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
            title: 'Release Year',
            dataIndex: 'release_year',
            key: 'release_year',
        },
        {
            title: 'Size',
            dataIndex: 'size',
            key: 'size',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Rating',
            dataIndex: 'rating',
            key: 'rating',
        },
        {
            title: 'Is Android App',
            dataIndex: 'is_android_app',
            key: 'is_android_app',
        },
        {
            title: 'Is Ios App',
            dataIndex: 'is_ios_app',
            key: 'is_ios_app',
        },
        {
            title: 'Platform',
            dataIndex: 'platform',
            key: 'platform',
        },
        {
          title: 'Action',
          key: 'action',
          render: (res, index) => (
            <>
                <Button class="button-edit" value={res.id} onClick={handleEdit}  type="primary"><EditFilled /></Button>
                <Button style={{marginTop: 10 + 'px'}} value={res.id} onClick={handleDelete} danger type="primary"><DeleteFilled /></Button>
            </>
          ),
        },
      ];
      const dataSource = daftarMobile

    return(
        <>
        <div class="movie_list">   
            <h1 style={{textAlign:'center'}}>Mobile Apps List</h1>
            <br/>
            <Link to="/mobile-form"><Button style={{marginBottom: 20 + 'px'}} type="primary">Buat Data Apps Baru</Button></Link>       
            <br/>
            <Table columns={columns} dataSource={dataSource} />
        </div>
        </>
    )
}

export default MobileList