import React,{useContext, useEffect} from 'react'
import {Context} from "../index";
import StatisticItem from '../components/StatisticItem'
import {observer} from "mobx-react-lite";
import Row from "react-bootstrap/Row";
import {fetchStatistics} from '../http/statisticsApi'
import {fetchTests} from '../http/testApi'

const StatisticsList= observer(()=> {
    const {user,statistics} = useContext(Context)
    const userID = user.userID
    useEffect(()=>{
        fetchStatistics(userID).then(data=>{
            statistics.setStat(data)
        })
    },[])
    const {tests} = useContext(Context)
    
     useEffect(()=>{
         fetchTests().then(data=>tests.setTests(data))
     },[])
        return (
        <div className="content">
             <Row xs={1} md={5} className="g-4">
                {   
                    statistics.stat.map(st=>
                    
                    <StatisticItem 
                    key={st.id}
                    name={st.title} 
                    mark={st.statictics[0].mark}
                    />
                )}
            </Row>
        </div>
        )
    });

export default StatisticsList;