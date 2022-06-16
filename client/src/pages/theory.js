import React ,{useContext} from 'react'
import NavBar from '../components/NavBar'
import ModuleItem from '../components/ModuleItem'
import './style/theory.css' 
import backImg1 from '../assets/item_bg1.jpg'
import backImg2 from '../assets/item_bg2.jpg'
import backImg3 from '../assets/item_bg3.jpg'
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {THEORY_ROUTE} from '../utils/consts'


const Theory= observer(()=> {
    const {study} = useContext(Context)
   
        return (
            <div id="theory">
                <NavBar />
                    <section className="content">
                    <ModuleItem mod_id='1' title="Теория и методика воспитания"  link={THEORY_ROUTE + '/1'} img={backImg1} onClick = {()=>study.setSelectedModule(1)}/>
                    <ModuleItem mod_id='2' title="Организация воспитательной работы в УПО" link={THEORY_ROUTE+'/2'} img={backImg2} onClick = {()=>study.setSelectedModule(2)}/>
                    <ModuleItem mod_id='3' title="Функционально-деятельностные составляющие воспитательного процесса" link={THEORY_ROUTE+'/3'} img={backImg3} onClick = {()=>study.setSelectedModule(3)}/>
                </section>
              
                
            </div>
        )
    })

export default Theory;