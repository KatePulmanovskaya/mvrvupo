import React  from 'react';
import './style/module_item.css'
import { NavLink } from "react-router-dom";
import {observer} from "mobx-react-lite";

const ModuleItem = observer((info) => {
    let mod_id = info.mod_id
    let title = info.title
    let link = info.link 
    let backImg = info.img
    return (
        
        <NavLink to={link} className="item">
                <h2>{mod_id}</h2>
                <div class="part1" style={{ backgroundImage: `url(${backImg})` }}></div>
                <div class="part2">
                    <p class="mod">модуль</p>
                    <p>{title}</p>
                </div>
        </NavLink>
 
    )
})


export default ModuleItem
