import React, {useContext, useEffect}  from 'react';
import {Context} from "../index";
import './style/NavBar.css'
import { NavLink , useLocation} from "react-router-dom";
import {observer} from "mobx-react-lite";
import StudyItem from '../components/StudyItem'
import {fetchTests} from '../http/testApi'

const TestsList = observer(() => {
    const {tests} = useContext(Context)

    useEffect(()=>{
        fetchTests().then(data=>tests.setTests(data))
    },[])


    return (
    <div className="content">
        
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"flex-start"}} >
                {tests.tests.map(st=>
                    <StudyItem 
                    key={st.id}
                    name={st.name} 
                    test={st.id}
                    count = {st.count}
                    />
                )}
            </div>
       
        {/* 
        import Col from "react-bootstrap/Col";
        import Form from "react-bootstrap/Form";
        import Nav from "react-bootstrap/Nav";
        import Button from "react-bootstrap/Button";
        import InputGroup from "react-bootstrap/InputGroup";
        import FormControl from "react-bootstrap/FormControl";
        
        <Card>
                    <Card.Header>
                        <Nav variant="pills" defaultActiveKey="#first">
                        <Nav.Item>
                            <Nav.Link href="#first">1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">3</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">4</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">5</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">6</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">7</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">8</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">9</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="#link">10</Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Вопрос 1</Card.Title>
                        <Card.Text>
                        Часть общего метода, отдельное действие (воздействие), называется…
                        <Form className="m-t-20">
                        <Form.Check
                        type="radio"
                            label="Прием"
                            />
                            <Form.Check
                        type="radio"
                            label="Деятельность"
                            />
                            <Form.Check
                        type="radio"
                            label="Средство"
                            />
                            <Form.Check
                        type="radio"
                            label="Форма"
                            />
                            </Form>
                            
                        </Card.Text>
                        <Button variant="primary">Следующий вопрос</Button>
                    </Card.Body>
                    </Card>*/}
    </div>
    )
})


export default TestsList
