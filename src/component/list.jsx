import React, { useEffect } from 'react'
import {Button, Container, Table} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const List = (props) => {
    const history= useNavigate()

    useEffect(()=>{
console.log("props",props)
    },[props.data])
    return (
        <Container>
            <center><h1>List</h1></center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Symptom List</th>
                        <th>diagnosed</th>
                        <th>physical</th>
                        <th>mental</th>
                        <th>experince</th>
                        <th>when</th>
                        <th>average</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {props.data.map((item,index)=>{
                        return( <tr>
                            <td>{index}</td>
                            <td>{item.symptomList}</td>
                            <td>{item.diagnosed}</td>
                            <td>{item.physical}</td>
                            <td>{item.mental}</td>
                            <td>{item.experince}</td>
                            <td>{item.When}</td>
                            <td>{item.average}</td>
                            <td><Button variant="secondary" onClick={()=>history(`/edit/${index}`)}>Edit</Button></td>
                        </tr>

                        )
                    })}
                   
                </tbody>
            </Table>
        </Container>
    )
}

export default List