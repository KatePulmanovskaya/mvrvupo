import React, {useContext,  useEffect}  from 'react';
import { Card } from 'react-bootstrap';
import ProgressBar  from 'react-bootstrap/ProgressBar';
import {observer} from "mobx-react-lite";

const StatisticItem = observer((info) => {
    let progress
    if (info.mark<5){
        progress="danger"
    }
    else if (info.mark<8) {
        progress="warning"
    } else {
        progress="success"
    }
    return (
        <Card className="m-t-20">
            <Card.Body>
            <Card.Title>{info.name}</Card.Title>
            <ProgressBar variant={progress} animated now={info.mark*10} />
            {info.mark*10}%
            </Card.Body>
        </Card>
    )
})

export default StatisticItem;