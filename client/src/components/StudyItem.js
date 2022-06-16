import React from 'react'
import { Card } from 'react-bootstrap';
import {observer} from "mobx-react-lite";
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import {TESTS_ROUTE} from "../utils/consts";

const StudyItem=observer((info)=> {
        return (
            <Card style={{ width: '16rem', fontSize:"14px"}} className="m-l-20 m-r-20 m-t-20 m-b-20">
            <Card.Body>
                <Card.Title>{info.title}</Card.Title>
                <Card.Text>
                {info.name}
                </Card.Text>
                <ListGroup className="list-group-flush">
                {info.link_view?
                    <ListGroupItem><Card.Link href={process.env.REACT_APP_API_URL+info.link_view}>Изучить</Card.Link></ListGroupItem>
                    :
                    ""
                }
                {info.link_save?
                    <ListGroupItem><Card.Link href={process.env.REACT_APP_API_URL+info.link_save}>Скачать</Card.Link></ListGroupItem>
                   :
                   ""
                }
                    {info.test?
                    <ListGroupItem><Card.Link href={TESTS_ROUTE+'/'+info.test}>Пройти тест</Card.Link></ListGroupItem>
                    :
                    ""
                    }
                    {info.count?
                        <Card.Text>
                            В тесте {info.count} вопросов
                        </Card.Text>
                        :
                        ""
                    }
                </ListGroup>
            </Card.Body>
            </Card>
        )
    })

export default StudyItem;