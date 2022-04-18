import React from "react";
import Table from 'react-bootstrap/Table'
import InputGroup from 'react-bootstrap/InputGroup'
import { useEffect, useState } from "react";

import DeleteModal from "./delete";
import Button from "react-bootstrap/Button";
import { getLists, addLists, updateLists, deleteLists } from "../services/listService";
function Tab(props) {
    const [lists, setLists] = useState([]);
    const [changed, setChanged] = useState(false);
    useEffect(() => {
      getLists()
        .then((data) => data.json())
        .then((res) => {
          setLists(res.message);
        });
    }, [changed]);

    return (
        <div className="container table">
            <Table striped bordered hover >
                <div className="subject">
                    <thead >
                        <tr >

                            <th className="header1">My ToDo List</th>

                        </tr>
                    </thead>


                </div >
                <div className="container size ">
                    <tbody>
                    {lists.map((data)=>{
                        return (
                        <tr >
                        <InputGroup >

                            <InputGroup.Checkbox aria-label="Checkbox for following text input" className="ho" />
                        </InputGroup>

                        
                        <td className="hu">{data.listname}</td>

                        <Button variant="light" className="half" >

                            <img src="./Pen.svg" alt="" className="iconSize" />
                        </Button>


                        <Button variant="light" cl >
                            <img src="./Trash.svg" alt="" className="iconSize" />
                        </Button>

                        
                    </tr>
                        )
                    })}
                      <button className="button">Add task </button>






                    </tbody>
                </div>

            </Table>
        </div>


    )

}
export default Tab