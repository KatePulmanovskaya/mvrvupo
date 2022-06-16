import React, {useContext,  useEffect}  from 'react';
import {Context} from "../index";
import './style/NavBar.css'
import {observer} from "mobx-react-lite";
import StudyItem from '../components/StudyItem'
import {fetchPractice} from '../http/studyApi'

const PracticeList = observer(() => {
    const {study} = useContext(Context)
   
    useEffect(()=>{
        fetchPractice().then(data=>study.setStudy(data))
    },[])


    return (
        <div style={{display:"flex", flexWrap:"wrap",justifyContent:"space-around"}} className="content">
         {study.study.map(st=>
                    
                    <StudyItem 
                    key={st.id}
                    title={st.title}
                    name={st.name} 
                    link_view={'Практика/'+st.link_view} 
                    link_save={'Практика/PDF/'+st.link_save}
                    />
                   
                )}
    </div>
    )
})

export default PracticeList;