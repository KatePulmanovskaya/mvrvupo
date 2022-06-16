import React,{useContext, useEffect} from 'react'
import NavBar from '../components/NavBar'
import StatisticsList from '../components/StatisticsList'
import {Context} from "../index";
import {fetchStatistics} from '../http/statisticsApi'

const Statistics=()=> {
    
        return (
            <div>
                <NavBar />
                <StatisticsList />
            </div>
        )
    }

export default Statistics;