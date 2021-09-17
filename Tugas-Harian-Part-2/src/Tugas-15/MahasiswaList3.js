import React, {useEffect, useContext} from "react"
import '../assets/css/App.css';
import { useHistory,Link} from "react-router-dom";
import { MahasiswaContext } from "../Tugas-13/MahasiswaContext.js";
import { Button, message } from 'antd';
import { Table, Tag, Space } from 'antd';
import { DeleteFilled,EditFilled } from '@ant-design/icons';


const MahasiswaList3 = () =>{
    const {daftarMahasiswa,fetchSatus,setFetchStatus, functions} = useContext(MahasiswaContext)
    const {fetchData, functionDelete} = functions
    useEffect( () => {
        
        if(fetchSatus){
            fetchData()
            setFetchStatus(false)
        }
        
    }, [fetchSatus, setFetchStatus])

    console.log(daftarMahasiswa)
    
    const handleDelete = (event) => {
        let idData = parseInt(event.currentTarget.value)
        functionDelete(idData)
        message.success('Data Berhasil Dihapus');
    }
    let history = useHistory();
    const handleEdit = (event) => {
        let idData = parseInt(event.currentTarget.value)
        history.push(`/tugas15/${idData}`)
    }

    const columns = [
        {
          title: 'Nama',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Mata Kuliah',
          dataIndex: 'course',
          key: 'course',
        },
        {
            title: 'Nilai',
            dataIndex: 'score',
            key: 'score',
        },
        {
            title: 'Index Nilai',
            dataIndex: 'indexScore',
            key: 'indexScore',
        },
        {
          title: 'Action',
          key: 'action',
          render: (res, index) => (
            <>
                <Button class="button-edit" value={res.id} onClick={handleEdit} type="primary"><EditFilled /></Button>
                <Button style={{marginLeft: 20 + 'px'}} value={res.id} onClick={handleDelete} danger type="primary"><DeleteFilled /></Button>
            </>
          ),
        },
      ];
      const dataSource = daftarMahasiswa
      
    return (
    <>

        <div class="tugas10">   
            <center></center>
            <h1 style={{textAlign:'left'}}>Daftar Nilai Mahasiswa</h1>
            <br/>
            <Link to="/tugas15/create"><Button style={{marginBottom: 20 + 'px'}} type="primary">Buat Data Nilai Mahasiswa Baru</Button></Link>       
            <br/>
            <Table columns={columns} dataSource={dataSource} />
        </div>
    </>
    )
    
}

export default MahasiswaList3;