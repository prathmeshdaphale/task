import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const List = (props) => {
  const history = useNavigate();

  useEffect(() => {}, [props.data]);
  const Addnew = () => {
    history("/");
  };
  return (
    <Container>
      <center>
        <h1>List</h1>
      </center>
      <Button variant="info" onClick={Addnew}>
        Add new
      </Button>
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
          {props.data.map((item, index) => {
            return (
              <tr>
                <td>{index}</td>
                <td>{item.symptomList}</td>
                <td>{item.diagnosed}</td>
                <td>{item.physical}</td>
                <td>{item.mental}</td>
                <td>{item.experince}</td>
                <td>
                  {item.when
                    .filter((item) => item.isChecked)
                    .map((item) => {
                      return <ul>
                          <li>{item.name}</li>
                      </ul>;
                    })}
                </td>
                <td>{item.average}</td>
                <td>
                  <Button
                    variant="secondary"
                    onClick={() => history(`/edit/${item.id}`)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default List;
