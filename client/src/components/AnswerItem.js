import React  from 'react';
import { NavLink } from "react-router-dom";
import {observer} from "mobx-react-lite";
import Form from "react-bootstrap/Form";

const AnswerItem = observer((info) => {
   
    return (
        <Form.Check
            id = {info.key}
            type={info.type}
            label={info.label}
            name={info.name}
        />
    )
})

export default AnswerItem
