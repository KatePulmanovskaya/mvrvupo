import React,{useContext} from 'react'
import {Context} from "../index";
import StudyItem from '../components/StudyItem'
import {observer} from "mobx-react-lite";
import {fetchTheory} from '../http/studyApi'



const TheoryList= observer(()=> {
    const {study} = useContext(Context)
   
        return (
        <div className="content">
            <div style={{display:"flex", flexWrap:"wrap",justifyContent:"flex-start"}} >
                {study.study.map(st=>
                    <StudyItem 
                    key={st.id}
                    title={st.title}
                    name={st.name} 
                    link_view={'Лекции/'+st.link_view} 
                    link_save={'Презентации/'+st.link_save}
                    test={st.testId}
                    />
                )}
            </div>
        </div>
        )
    });

export default TheoryList;