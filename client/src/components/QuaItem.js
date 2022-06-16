import React, {useContext,  useEffect}  from 'react';
import {Context} from "../index";
import { NavLink } from "react-router-dom";
import {observer} from "mobx-react-lite";
import Form from "react-bootstrap/Form";
import AnswerItem from './AnswerItem'
import {fetchAnswers} from '../http/testApi'
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Tab from 'react-bootstrap/Tab'

const QuaItem = observer((info) => {
    const {tests} = useContext(Context)
    
 
    return (
        <div>
            <h4> {"Вопрос " + info.number + "."}</h4>
            <p>{info.qua}</p>
            <div>
                
             {info.answers.map(st=>
             <div>
                 <label>  
                <input 
                    type="radio"
                    value={st.is_right}
                    name={"q"+info.id}
                />
                {st.answer}
                  </label>
                  </div>
               )}
               </div>
        </div>
    )
})

export default QuaItem
  /*

  <Form.Check
                    id = {st.id}
                    type='radio'
                    label={st.answer}
                    name={'group'+info.id}
                    key = {st.id}
                />

            
<Tab eventKey={info.key} title={info.number}>
        <div>
        {/* info.title}
        
        info.qua}
       <Form className="m-t-20">
            {tests.answers.map(st=>
                   
                   <AnswerItem 
                   key={st.id}
                   title={st.title}
                   label={st.answer}
                   name={'group'+info.id}
                   type="radio"
                   />
                  
               )}
       {/* </Form>
            
       
       <Button variant="primary">Следующий вопрос</Button>
       </div>
   </Tab>
       
  */