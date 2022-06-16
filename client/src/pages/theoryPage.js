import React ,{useContext, useEffect} from 'react'
import NavBar from '../components/NavBar'
import './style/theory.css' 
import {Context} from "../index";
import {useLocation, useNavigate} from "react-router-dom";
import TheoryList from '../components/TheoryList'
import {observer} from "mobx-react-lite";
import {fetchTheory} from '../http/studyApi'
import {useParams} from 'react-router-dom'


const TheoryPage= observer(()=> {
    const {study} = useContext(Context)
    const {id} = useParams()
    useEffect(()=>{
        fetchTheory(id).then(data=>study.setStudy(data))
    },[])
        return (
            <div id="theory">
                <NavBar />
                <TheoryList />
            </div>
        )
    })

export default TheoryPage;